import requestService from "./reqStore";

export const fetchEventSource = new requestService("eventsource", {
  baseUrl: "api",
  timeout: 1000,
  isRetry: false,
});
