<template>
  <div class="home">
    <div>
      <h1>Seleziona un capo</h1>

      <!-- Bootstrap Carousel -->
      <div id="carouselCapi" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <!-- Loop attraverso i capi per generare ogni elemento dello slider -->
          <div
            class="carousel-item"
            v-for="(capo, index) in capi"
            :class="{ active: index === 0 }"
            :key="capo.id"
          >
            <img :src="capo.image" class="d-block w-100" :alt="capo.nome" />
            <div class="carousel-caption d-none d-md-block">
              <h5>{{ capo.nome }}</h5>
              <button class="btn btn-primary" @click="selectCapo(capo.id)">
                Visualizza Dettagli
              </button>
            </div>
          </div>
        </div>

        <!-- Controls for next/previous buttons -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCapi"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselCapi"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      // Lista dei capi con immagini
      capi: [
        {
          id: 1,
          nome: "Vestito",
          descrizione: "Cady Jumpsuit",
          image: require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"), // Immagine del capo
        },
        {
          id: 2,
          nome: "Vestito cady",
          descrizione: "Cady Long Dress",
          image: require("@/assets/Prefall2024/Cady-Long-Dress.jpeg"),
        },
        {
          id: 3,
          nome: "Embroidered Vestito",
          descrizione: "Embroidered",
          image: require("@/assets/Prefall2024/Embroidered-Dress.jpg"),
        },
      ],
    };
  },
  methods: {
    // Metodo per selezionare il capo e andare alla vista dei dettagli
    selectCapo(id) {
      this.$router.push({ name: "CapiView", params: { id: id } });
    },
  },
};
</script>

<style>
h1 {
  color: aqua;
}
.carousel-inner img {
  max-height: 500px;
  object-fit: cover;
}
</style>
