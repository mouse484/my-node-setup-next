import { format } from "prettier";

export const formatJson = (json: {}) => {
  const stringJson = JSON.stringify(json);
  const formatedJson = format(stringJson, { parser: "json-stringify" });
  return formatedJson;
};
