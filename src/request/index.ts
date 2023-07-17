import requestService from "./reqStore";

export const fetchEventSource = new requestService("eventsource", {
  baseUrl: "",
  timeout: 10000,
  isRetry: false,
});
