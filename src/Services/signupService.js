import { http } from "./httpService";

export function signupUser(data) {
  return http.post("/user/register", data);
}
