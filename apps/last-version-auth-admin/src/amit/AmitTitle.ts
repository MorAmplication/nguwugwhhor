import { Amit as TAmit } from "../api/amit/Amit";

export const AMIT_TITLE_FIELD = "id";

export const AmitTitle = (record: TAmit): string => {
  return record.id || String(record.id);
};
