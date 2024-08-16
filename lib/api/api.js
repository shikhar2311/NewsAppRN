import axios from "axios";

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
});

//getNewsByCategory

export async function getNewsByCategory(category) {
  const response = await api.get(
    `/everything?q=${category}&apiKey=4aee0c951d584fdfbe36063b85f5a9e6`
  );
  return response.data;
}

//getTopNewsByCountry

export async function getTopNewsByCountry(country) {
  const response = await api.get(
    `/top-headlines?country=${country}&apiKey=4aee0c951d584fdfbe36063b85f5a9e6`
  );
  return response.data;
}

//searchNews

export async function getNewsByQuery(query) {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=4aee0c951d584fdfbe36063b85f5a9e6`
  );
  return response.data;
}
