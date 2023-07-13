import { Amit as TAmit } from "../api/amit/Amit";

export const AMIT_TITLE_FIELD = "userName";

export const AmitTitle = (record: TAmit): string => {
  return record.userName || String(record.id);
};
