<template>
  <div class="home">
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <h1>Select an item</h1>
        <!-- Bottone Preferiti con contatore -->
        <button
          class="btn btn-dark position-relative me-3"
          @click="FavouritesView"
        >
          Favourites
          <span
            class="badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {{ favoriteCount }}
            <span class="visually-hidden">Favourites</span>
          </span>
        </button>
      </div>
      <!-- Componente sfilate-comp -->
    </div>
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
          <div class="carousel-caption">
            <h5>{{ capo.nome }}</h5>
            <button class="btn btn-dark" @click="selectCapo(capo.id)">
              View details
            </button>
          </div>
        </div>
      </div>
      <div>
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

    <!-- Sezione descrittiva -->
    <section class="collection-description text-center">
      <h1>The fashion show</h1>
      <p>
        The Pre-Fall 2024 collection by Zuhair Murad is inspired by the
        ephemeral beauty of butterflies and the mysterious allure of the night.
        Characterized by lightweight fabrics, intricate embroideries, and rich
        colors, standout pieces include printed faille dresses with enlarged
        animal patterns, mini-dresses adorned with three-dimensional butterfly
        appliqués, and lurex wool garments decorated with crystals that create
        plays of light and shadow. Classic taffeta creations, alongside tailored
        pieces inspired by workwear, blend elegance and originality.
      </p>
    </section>
    <sfilate-comp
      :favorites="favorites"
      @add-to-favorites="addToFavorites"
      @remove-from-favorites="removeFromFavorites"
    />
  </div>
</template>

<script>
import SfilateComp from "@/components/SfilateComp.vue";

export default {
  components: {
    SfilateComp, // Registro il componente
  },
  props: ["id"],
  data() {
    return {
      // Lista dei capi con immagini
      capi: [
        {
          id: 1,
          nome: "Cady Jumpsuit",
          descrizione: "Cady Jumpsuit",
          image: require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"), // Immagine del capo
        },
        {
          id: 2,
          nome: "Cady Long Dress",
          descrizione: "Cady Long Dress",
          image: require("@/assets/Prefall2024/Cady-Long-Dress.jpg"),
        },
        {
          id: 3,
          nome: "Embroidered Dress",
          descrizione: "Embroidered",
          image: require("@/assets/Prefall2024/Embroidered-Dress.jpg"),
        },
        {
          id: 4,
          nome: "Chiffon Draped Dress",
          descrizione: "Chiffon Draped Dress",
          image: require("@/assets/Prefall2024/Chiffon-Draped-Dress.jpg"),
        },
      ],
      favoriteCount: 0, // Contatore preferiti
      favorites: [], // Array per memorizzare i preferiti
    };
  },
  methods: {
    // Metodo per selezionare il capo e andare alla vista dei dettagli
    selectCapo(id) {
      this.$router.push({ name: "CapiView", params: { id: id } });
    },
    // Metodo per aggiungere un capo ai preferiti
    addToFavorites(dress) {
      // Aggiungi ai preferiti solo se non è già presente
      if (!this.favorites.includes(dress)) {
        this.favorites.push(dress); // Aggiunge il capo del capo ai preferiti
        this.favoriteCount++; // Incrementa il contatore
      }
    },
    removeFromFavorites(dress) {
      this.favorites = this.favorites.filter((f) => f.id !== dress.id); //usa filter per togliere l'elemento dall'array
      //decrementa il contatore
      this.favoriteCount--;
    },
  },
};
</script>

<style>
/* Imposta overflow nascosto per prevenire lo scroll orizzontale */
body {
  overflow-x: hidden;
}

h1 {
  color: aqua;
}

.carousel-inner img {
  max-height: 500px;
  object-fit: cover;
  width: 100%; /* Assicura che le immagini occupino il 100% della larghezza del contenitore */
}

/* Stile per la sezione descrittiva */
.collection-description {
  padding: 0 10%; /* Riduce il padding laterale per evitare overflow */
  margin-top: 20px;
  max-width: 100vw; /* Imposta la larghezza massima alla larghezza della viewport */
  box-sizing: border-box;
}

/* Giustifica il testo */
.collection-description p {
  text-align: justify;
}

/* Imposta un layout flessibile senza uscire dalla viewport */
.d-flex {
  flex-wrap: wrap;
}
</style>
