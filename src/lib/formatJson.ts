import { format } from 'prettier';

export const formatJson = (
  json: { [key in string | number]: unknown }
): string => {
  const stringJson = JSON.stringify(json);
  const formatedJson = format(stringJson, { parser: 'json-stringify' });
  return formatedJson;
};
