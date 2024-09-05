export type ChangeEventBaseType<T, K = string> = {
  name: K;
  value: T;
  id: string;
  index?: K;
};

export type OptionPropsType = {
  value: string;
  lable: string;
};

export type ProtectedPageType = {
  skinTypeMapping: Record<string, string>;
  employeeIroningMapping: Record<string, string>;
  varifyListMapping: Record<string, string>;
  employeeStretchMapping: Record<string, string>;
  approveListMapping: Record<string, string>;
  billetTypeMapping: Record<string, string>;
};
