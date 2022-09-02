// export const BASE_URL = "https://api.stan.nomoredomains.xyz";
export const BASE_URL = "http://localhost:3001";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((data) => {
    throw new Error(data.message);
  });
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

export const autorisation = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then(checkResponse);
};

export const token = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: 'Bearer ' + token,
    },
  }).then(checkResponse);
};
