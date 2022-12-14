import httpService, { setCommonHeader } from "./httpService";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "movieToken";
setCommonHeader();

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export function setTokenHeader() {
  setCommonHeader("x-auth-bla", getJWT());
}

export async function loginUser(credentials) {
  const { data } = await httpService.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, data.token);
  setCommonHeader();
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setCommonHeader();
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const userService = {
  createUser,
  loginUser,
  logout,
  getJWT,
  getUser,
};

export default userService;
