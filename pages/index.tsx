import { ProtectedPageType } from '@/type/event';
import List from './list';

export default function Home({
  skinTypeMapping,
  employeeIroningMapping,
  varifyListMapping,
  employeeStretchMapping,
  approveListMapping,
  billetTypeMapping,
}: ProtectedPageType) {
  return (
    <List
      skinTypeMapping={skinTypeMapping}
      employeeIroningMapping={employeeIroningMapping}
      varifyListMapping={varifyListMapping}
      employeeStretchMapping={employeeStretchMapping}
      approveListMapping={approveListMapping}
      billetTypeMapping={billetTypeMapping}
    />
  );
}
