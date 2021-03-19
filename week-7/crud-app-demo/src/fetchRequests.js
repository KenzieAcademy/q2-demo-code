const baseURL = "https://socialapp-api.herokuapp.com/";

export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const getUsers = () => {
  return fetch(baseURL + 'users')
    .then((res) => res.json());
}

export const getUser = (username) => {
  return fetch(baseURL + `users/${username}`)
    .then((res) => res.json());
}

export const patchUser = (token, username, newUserInfo) => {
  return fetch(baseURL + `users/${username}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserInfo),
  }).then((res) => res.json());
}
