import {
  SKIN_TYPE,
  EMPLOYEE_IRONING,
  VARIFY_LIST,
  EMPLOYEE_STRETCH,
  APPROVE_LIST,
  BILLET_TYPE,
} from '@/constants/master-data';
import { ProtectedPageType } from '@/type/event';
import { useMemo, useState } from 'react';

type WithThemesProps = {
  render: (props: { master: ProtectedPageType }) => JSX.Element;
};

export function WithSetup({ render }: WithThemesProps) {
  const skinTypeMapping = useMemo<Record<string, string>>(() => {
    return SKIN_TYPE.reduce((acc, curr) => {
      acc[curr.value] = curr.lable;
      return acc;
    }, {} as Record<string, string>);
  }, [SKIN_TYPE]);

  const employeeIroningMapping = useMemo<Record<string, string>>(() => {
    return EMPLOYEE_IRONING.reduce((acc, curr) => {
      acc[curr.value] = curr.lable;
      return acc;
    }, {} as Record<string, string>);
  }, [EMPLOYEE_IRONING]);

  const varifyListMapping = useMemo<Record<string, string>>(() => {
    return VARIFY_LIST.reduce((acc, curr) => {
      acc[curr.value] = curr.lable;
      return acc;
    }, {} as Record<string, string>);
  }, [VARIFY_LIST]);

  const employeeStretchMapping = useMemo<Record<string, string>>(() => {
    return EMPLOYEE_STRETCH.reduce((acc, curr) => {
      acc[curr.value] = curr.lable;
      return acc;
    }, {} as Record<string, string>);
  }, [EMPLOYEE_STRETCH]);

  const approveListMapping = useMemo<Record<string, string>>(() => {
    return APPROVE_LIST.reduce((acc, curr) => {
      acc[curr.value] = curr.lable;
      return acc;
    }, {} as Record<string, string>);
  }, [APPROVE_LIST]);

  const billetTypeMapping = useMemo<Record<string, string>>(() => {
    return BILLET_TYPE.reduce((acc, curr) => {
      acc[curr.value] = curr.lable;
      return acc;
    }, {} as Record<string, string>);
  }, [BILLET_TYPE]);

  return render({
    master: {
      skinTypeMapping,
      employeeIroningMapping,
      varifyListMapping,
      employeeStretchMapping,
      approveListMapping,
      billetTypeMapping,
    },
  });
}
