class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  setUserInfo(name, email, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

}

export const MainApi = new Api({
  baseUrl: "https://api.stan.nomoredomains.xyz/",
  // baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});