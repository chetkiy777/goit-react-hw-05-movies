import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export class ApiService {
  _apiKey = '4a69d9470951ad07e8f0cc655bb46705';

  constructor() {
    this.page = 1;
    this.searchQuery = '';
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.query = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  async getTrendingFilms() {
    return await instance
      .get(`/trending/movies/day?api_key=${this._apiKey}`)
      .then(response => response.data.results)
      .catch(error => console.log(error));
  }

  async getFilmByName() {
    return await instance
      .get(
        `/search/search-movies?api_key=${this._apiKey}&query=${this.searchQuery}`
      )
      .then(response => response.data.results)
      .catch(error => console.log(error));
  }

  async getFilmDetails(id) {
    return instance
      .get(`/movie/${id}?api_key=${this._apiKey}`)
      .then(response => response.data)
      .catch(error => console.log(error));
  }

  async getFilmAuthors(id) {
    return await instance
      .get(`/movie/${id}/credits`)
      .then(response => response.data.results)
      .catch(error => console.log(error));
  }

  async getFilmReviews(id) {
    return await instance
      .get(`/movie/${id}/reviews`)
      .then(response => response.data.results)
      .catch(error => console.log(error));
  }
}
