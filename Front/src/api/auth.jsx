import { jwtDecode } from "jwt-decode";
import { getItem, addItem, removeItem } from "../localStorage";

export function hasAuthenticated() {
  const token = getItem("token");
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
    removeItem("token");
  }

  return result;
}

export async function loginUser(credentials) {
  const response = await fetch("http://localhost:8888/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    },
    body: JSON.stringify(credentials),
  });
  const body = await response.json();
  if (response.ok) {
    const token = body.token;
    addItem("token", token);
    return body;
  } else {
    if (body) {
      throw body;
    } else {
      throw new Error("Oops une erreur est survenue");
    }
  }
}

export function logout() {
  removeItem("token");
  localStorage.removeItem("userRoles");
}

function tokenIsValid(token) {
  const { exp: expiration } = jwtDecode(token);

  if (expiration * 1000 > new Date().getTime()) {
    return true;
  }

  return false;
}
