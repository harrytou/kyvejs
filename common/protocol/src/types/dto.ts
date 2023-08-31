type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;

export interface DataItem {
  key: string;
  value: JSONValue;
}
