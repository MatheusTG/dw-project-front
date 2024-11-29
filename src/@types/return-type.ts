export type ReturnType<T> = {
  ok: boolean;
  data: T | null;
  message: string | null;
};
