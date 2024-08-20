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
