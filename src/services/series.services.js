export default {
  getSeries: () =>
    fetch("//api.tvmaze.com/search/shows?q=games%20of%20")
      .then((res) => res.json())
      .then((series) =>
        series.map((serie) => {
          if (serie && serie.show && serie.show.image) {
            serie.show.image.medium =
              "//" + serie.show.image.medium.substring(7);
          }
          return serie;
        })
      ),
};
