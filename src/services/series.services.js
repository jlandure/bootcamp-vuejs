export default {
  getSeries: () =>
    fetch("http://api.tvmaze.com/search/shows?q=games%20of%20")
    .then(res =>
      res.json()
    )
};
