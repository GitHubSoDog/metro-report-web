import { ChangeEvent, useMemo, useState } from 'react';

const useTable = <T extends Object>(
  data: T[] = [],
  setUpSizePage: number = 5,
  callBackFetchData: (page: number, sizePage: number) => void = () => {},
  totalData: number = 0
) => {
  const [page, setPage] = useState<number>(1);
  const [sizePage, setSizePage] = useState<number>(setUpSizePage);
  const [fieldNameSort, setFieldNameSort] =
    useState<Record<keyof T, 'ASC' | 'DESC' | ''>>();

  const dataTableList = useMemo<T[]>(() => {
    let cloneData = [...data];
    if (fieldNameSort) {
      let keys = Object.keys(fieldNameSort);
      const key = keys[0] as keyof T;
      if (key in data[0] && fieldNameSort[key]) {
        const isAscending = fieldNameSort[key] === 'ASC';
        cloneData = dynamicSort(cloneData, key, isAscending);
      }
    }
    return cloneData.slice(
      (page - 1) * sizePage,
      (page - 1) * sizePage + sizePage
    );
  }, [page, data, sizePage, fieldNameSort]);

  function dynamicSort<T>(
    array: T[],
    key: keyof T,
    isAscending: boolean = true
  ): T[] {
    return array.sort((a, b) => {
      let valueA = a[key];
      let valueB = b[key];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return isAscending ? valueA - valueB : valueB - valueA;
      }

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);

        if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
          return isAscending
            ? dateA.getTime() - dateB.getTime()
            : dateB.getTime() - dateA.getTime();
        }

        return isAscending
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      return 0;
    });
  }

  //'DESC' ล่าสุดขึ้นก่อน
  const handleSorting = (fieldName: keyof T) => {
    const isSort =
      fieldNameSort?.[fieldName] === 'DESC'
        ? 'ASC'
        : fieldNameSort?.[fieldName] === 'ASC'
        ? ''
        : 'DESC';
    const input = { [fieldName]: isSort } as Record<
      keyof T,
      'ASC' | 'DESC' | ''
    >;
    setFieldNameSort({ ...input });
  };

  const handlePerPage = (event: ChangeEvent<HTMLSelectElement>) => {
    setSizePage(parseInt(event.target.value));
    callBackFetchData?.(page, parseInt(event.target.value));
  };

  const handlePage = (count: number) => {
    setPage(page + count);
    callBackFetchData?.(page + count, sizePage);
  };

  const firstPage = () => {
    setPage(1);
    callBackFetchData?.(1, sizePage);
  };

  const finalPage = () => {
    let totalList = 0;
    if (totalData) {
      totalList = totalData;
    } else {
      totalList = data.length;
    }
    setPage(Math.ceil(totalList / sizePage));
    callBackFetchData?.(Math.ceil(totalList / sizePage), sizePage);
  };
  return {
    fieldNameSort,
    page,
    sizePage,
    dataTableList,
    setPage,
    handlePerPage,
    handlePage,
    firstPage,
    finalPage,
    handleSorting,
  };
};
export default useTable;
