export function getLocalStorageJson(key: string): any {
  const value: any = localStorage.getItem(key);
  return JSON.parse(value);
}
export function setLocalStorageData(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function bodyString(body:any, target = "string") {
  const type = typeof body;
  if (type === "object") {
    return JSON.stringify(body);
  } else if (type === "string") {
    return body;
  }
}
