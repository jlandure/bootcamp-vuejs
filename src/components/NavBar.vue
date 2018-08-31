<template>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://nantes.zenika.com" target="_blank">
        <img src="https://devfest.gdgnantes.com/images/logos/zenika.png" alt="Zenika Nantes rocks!" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBootcampExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBootcampExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/favorites">Favorites</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
          <span class="navbar-link">
            Others
          </span>
          <div class="navbar-dropdown is-boxed">
            <router-link class="navbar-item" to="/about">About</router-link>
            <a class="navbar-item" href="https://bulma.io/documentation/" target="_blank">
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <div class="control">
            <input class="input" type="text" placeholder="Find a serie">
          </div>
          <div class="control">
            <a class="button is-info">
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
