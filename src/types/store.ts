export type Action<T, C = {}> = C & {
  type: T;
};
