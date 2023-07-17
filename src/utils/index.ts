export function getLocalStorageJson(key: string): any {
  const value: any = localStorage.getItem(key);
  // if()
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


export function scrollToElement(ele:any) {
  const rect = ele.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const top = rect.top + scrollTop;
  const left = rect.left + scrollLeft;
  window.scrollTo({ top, left, behavior: "smooth" });
}