<template>
  <div v-if="capo">
    <h2>{{ capo.nome }}</h2>

    <!-- Mini Carosello per il capo selezionato -->
    <div id="carouselDettagli" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(immagine, index) in capo.images"
          :class="{ active: index === 0 }"
          :key="index"
        >
          <img :src="immagine" class="d-block w-100" :alt="capo.nome" />
        </div>
      </div>

      <!-- Controls for next/previous buttons -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselDettagli"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselDettagli"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <p>{{ capo.descrizione }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"], // L'ID del capo viene passato come prop dal router
  data() {
    return {
      capi: [
        {
          id: 1,
          nome: "Vestito",
          descrizione: "Cady Jumpsuit",
          images: [
            require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit2.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit3.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit4.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit5.jpeg"),
          ],
        },
        {
          id: 2,
          nome: "Vestito cady",
          descrizione: "Cady Long Dress",
          images: [
            require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit2.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit3.jpeg"),
          ],
        },
        {
          id: 3,
          nome: "Embroidered Vestito",
          descrizione: "Embroidered Dress",
          images: [
            require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit2.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit3.jpeg"),
          ],
        },
      ],
      capo: null, // Il capo selezionato verrà assegnato qui
    };
  },
  created() {
    // Trova il capo selezionato in base all'ID passato come prop
    this.capo = this.capi.find((capo) => capo.id === parseInt(this.id));
  },
};
</script>

<style>
.carousel-inner img {
  max-height: 400px;
  object-fit: cover;
}
</style>
