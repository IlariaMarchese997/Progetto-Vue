<template>
  <nav class="navbar navbar-expand-md bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://google.it" target="_blank"
        >Nomelogo</a
      >
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
            <router-link :to="{ name: 'home' }" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contatti' }" class="nav-link"
              >Contatti</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'capi' }" class="nav-link"
              >Capi</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
