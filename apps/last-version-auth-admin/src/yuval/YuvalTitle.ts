import { Yuval as TYuval } from "../api/yuval/Yuval";

export const YUVAL_TITLE_FIELD = "id";

export const YuvalTitle = (record: TYuval): string => {
  return record.id || String(record.id);
};
