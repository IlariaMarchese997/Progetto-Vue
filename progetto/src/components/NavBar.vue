<template>
  <nav class="navbar navbar-expand-md bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://google.it" target="_blank"
        ><img alt="Zuhair Murad's logo" width="300px" src="../assets/logo.webp"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link"
              exact
              active-class="active"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              :to="{ name: 'Sfilate' }"
              class="nav-link"
              active-class="active"
              >Sfilate</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: white !important; /* Sfondo bianco */
}

.navbar-nav .nav-item {
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif; /* Font */
}

.nav-link {
  color: gray; /* Colore normale */
}

.nav-link:hover {
  color: black; /* Colore al passaggio del mouse */
  font-weight: bold;
}

.nav-link.active {
  border-bottom: 3px solid black; /* Sottolineatura */
}
</style>
