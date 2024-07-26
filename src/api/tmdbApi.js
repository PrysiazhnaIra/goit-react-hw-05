import axios from "axios";

const url =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2JkMDFiNzlkZjFlOGY4ZjZlMjMyY2NiMDc3NWVhYyIsIm5iZiI6MTcyMTk4MjgwMS42NjU0MzEsInN1YiI6IjY2YTM0YzE2ZmE0NTRjOWY2MTE2NDZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0u6uZlYvtF6VaTxxkX_zUMNUduwCYu2L6sXKkWFnFU8",
  },
};

axios
  .get(url, options)
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
