export default {
  favorites: [],

  changeFavorite(serie) {
    if (!this.isFavorite(serie)) {
      this.addFavorite(serie);
    } else {
      this.removeFavorite(serie);
    }
  },

  addFavorite(serie) {
    this.favorites.push(serie);
  },

  removeFavorite(serie) {
    const favIndex = this.favorites.findIndex(item => item.id == serie.id);
    this.favorites.splice(favIndex, 1);
  },

  getFavorites() {
    return this.favorites;
  },

  isFavorite(serie) {
    return this.favorites.find(item => item.id == serie.id);
  }
};
