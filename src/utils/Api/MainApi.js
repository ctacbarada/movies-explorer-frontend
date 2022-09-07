class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  async getUserInfo(token) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
    });
    return await (res.ok ? res.json() : Promise.reject(res.status));
  }

  async setUserInfo(name, email, token) {
    const res = await fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
    return await (res.ok ? res.json() : Promise.reject(res.status));
  }

  async getMovies(token) {
    const res = await fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
    });
    return await (res.ok ? res.json() : Promise.reject(res.status));
  }

  saveMovie(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    token
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }

  deleteMovie(id, token) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        authorization: "Bearer " + token,
      },
    }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
  }
}

export const MainApi = new Api({
  // baseUrl: "https://api.stan.nomoredomains.xyz",
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
