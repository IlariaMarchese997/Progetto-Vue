<template>
  <div v-if="capo" class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <div
          id="carouselDettagli"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(immagine, index) in capo.images"
              :key="index"
              :data-bs-target="'#carouselDettagli'"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
            ></li>
          </ol>

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
      </div>
      <div class="col-md-6">
        <h1>{{ capo.nome }}</h1>
        <p>{{ capo.descrizione }}</p>
        <ul>
          <li><strong>Descrizione:</strong> {{ capo.descrizione }}</li>
          <li><strong>Materiale:</strong> {{ capo.composizione }}</li>
          <li><strong>Lining</strong> {{ capo.lining }}</li>
          <li><strong>Made in:</strong> {{ capo.made }}</li>
          <li><strong>Numero di Serie</strong> {{ capo.numeroDiSerie }}</li>
        </ul>
      </div>
    </div>
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
          nome: "Cady Jumpsuit",
          descrizione: "Cady Jumpsuit",
          composizione: "Poliestere",
          lining: 2024,
          made: "Designer A",
          numeroDiSerie: "PDR2400-3193952",
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
          composizione: "Poliestere",
          lining: 2024,
          made: "Designer A",
          numeroDiSerie: "PDR2400-3193952",
          images: [
            require("@/assets/Prefall2024/Cady-Long-Dress.jpg"),
            require("@/assets/Prefall2024/Cady-Long-Dress2.jpeg"),
            require("@/assets/Prefall2024/Cady-Long-Dress3.jpeg"),
            require("@/assets/Prefall2024/Cady-Long-Dress4.jpeg"),
            require("@/assets/Prefall2024/Cady-Long-Dress5.jpg"),
          ],
        },
        {
          id: 3,
          nome: "Embroidered Vestito",
          descrizione: "Cady Long Dress",
          composizione: "Poliestere",
          lining: 2024,
          made: "Designer A",
          numeroDiSerie: "PDR2400-3193952",
          images: [
            require("@/assets/Prefall2024/Embroidered-Dress.jpg"),
            require("@/assets/Prefall2024/Embroidered-Dress2.jpeg"),
            require("@/assets/Prefall2024/Embroidered-Dress3.jpeg"),
            require("@/assets/Prefall2024/Embroidered-Dress4.jpeg"),
            require("@/assets/Prefall2024/Embroidered-Dress5.jpeg"),
          ],
        },
        {
          id: 4,
          nome: "Chiffon Draped Long Dress",
          descrizione: "Chiffon Draped Long Dress in 100% Silk",
          composizione: "100 % Silk",
          lining: "100 % Silk",
          made: "Lebanon",
          numeroDiSerie: "PDR24003-193952",
          images: [
            require("@/assets/Prefall2024/Chiffon-Draped-Dress.jpg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress2.jpeg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress3.jpeg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress4.jpg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress5.jpeg"),
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
.carousel-indicators li::marker {
  content: ""; /* Nasconde il contenuto del marker */
}
</style>
