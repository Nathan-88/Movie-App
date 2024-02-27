export async function searchMovies(title) {
  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=c11e9d41";
  const response = await fetch(`${url}&s=${title}`);
  const data = await response.json();
//   console.log(data.Search);
  return data.Search;
}
