import {
  APPROVE_LIST,
  BILLET_TYPE,
  EMPLOYEE_IRONING,
  EMPLOYEE_STRETCH,
  SKIN_TYPE,
  VARIFY_LIST,
} from '@/constants/master-data';
import { useMemo } from 'react';

const useMaster = () => {
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

  return {
    skinTypeMapping,
    employeeIroningMapping,
    varifyListMapping,
    employeeStretchMapping,
    approveListMapping,
    billetTypeMapping,
  };
};

export default useMaster;
