import member from "./member";
import board from "./board";
import wishlist from "./wishlist";
import historyBoard from "./historyBoard";
import review from "./review";

const ACCESS_TOKEN = "ACCESS_TOKEN";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

type Options = {
  headers: Headers;
  url: string;
  method: string;
  body?: string;
};

export function call(api: string, method: string, request: object | null) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    headers.append("Authorization", "Bearer " + accessToken);
  }

  let options: Options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };
  if (request) {
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      })
    )
    .catch((error) => {
      console.log("Oops!");
      console.log(error);
      if (error.error === "user not found" || error.status === 403) {
        localStorage.removeItem(ACCESS_TOKEN);
        window.location.href = "/auth/login";
        return Promise.reject(error);
      }
    });
}

const api = {
  member,
  board,
  wishlist,
  historyBoard,
  review,
};

export default api;
