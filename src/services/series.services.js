export default {
  getSeries: () =>
    fetch("https://api.tvmaze.com/search/shows?q=games%20of%20")
    .then(res =>
      res.json()
    )
};
