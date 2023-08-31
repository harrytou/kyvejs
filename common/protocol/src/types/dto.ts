type JSONParsable = boolean | number | string | object | null;

export interface DataItem {
  key: string;
  value: JSONParsable | Array<JSONParsable>;
}
