<template>
  <div id="app">
    <header id="app-header">
      <!-- <nav id="app-navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand" href="#">
          <img src="@/assets/serenity-logo.png" alt="Serenity" class="logo-brand" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active" @click="onNavItemClick($event)">
              <a class="nav-link" href="#">Dashboard</a>
            </li>
            <li class="nav-item" @click="onNavItemClick($event)">
              <a class="nav-link" href="#">Messages</a>
            </li>
            <li class="nav-item text-center ml-4" @click="goToSettings()">
              <b>
                <a id="profile-btn" class="nav-link img-rounded" href="#">AS</a>
              </b>
            </li>
          </ul>
        </div>
      </nav> -->
      <div class="row" style="padding:20px 10%; padding-top:10px;">
  <i class="fas fa-angle-left" style="vertical-align:middle; margin:auto 0;"></i>
    <img src="@/assets/profile.svg" alt="Serenity" class="logo-brand" style=" margin-left:auto;" />
</div>
    </header>
    <main id="app-main">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    onNavItemClick(e) {
      const navs = document.getElementsByClassName("nav-item");
      for (let i = 0; i < navs.length; i++) {
        navs[i].classList.remove("active");
      }
      e.target.parentNode.classList.add("active");
    },
    goToSettings() {}
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
  background-color: #f9f9f9;
}
#app {
  font-family: Raleway, Poppins, Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Poppins',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column nowrap;
}
#app-navbar {
  border-bottom: 1px solid #ccc;
}
.nav-item.active {
  border-bottom: 2px solid green;
  color: green;
  font-weight: bold;
}
#profile-btn {
  background-color: burlywood;
  border-radius: 50%;
}
</style>
