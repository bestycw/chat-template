export function getLocalStorageJson(key: string): any {
  const value: any = localStorage.getItem(key);
  return JSON.parse(value);
}
export function setLocalStorageData(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
