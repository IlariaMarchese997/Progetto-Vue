<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        class="carousel-item"
        v-for="(chunk, index) in chunkedDresses"
        :key="index"
        :class="{ active: index === 0 }"
      >
        <div class="row">
          <div
            class="col-4"
            v-for="dress in chunk"
            :key="dress.name"
            style="padding: 10px"
          >
            <div
              class="dress-card"
              style="border: 1px solid #ccc; padding: 10px; text-align: center"
            >
              <img :src="dress.image" class="d-block w-100" :alt="dress.name" />

              <!-- Centrare il nome e il prezzo sotto l'immagine -->
              <div class="dress-info">
                <h5 class="dress-name">{{ dress.name }}</h5>
                <p class="dress-price">{{ dress.price }} EUR</p>
              </div>

              <!-- Pulsante "Aggiungi ai preferiti" sotto l'immagine -->
              <button
                class="btn btn-favorite"
                :class="{ active: isFavorite[dress.name] }"
                @click="toggleFavorite(dress)"
              >
                {{
                  isFavorite[dress.name]
                    ? "Remove from favorites"
                    : "Add to favourites"
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        style="filter: invert(100%)"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        style="filter: invert(100%)"
        aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    favorites: Array, // Ricevi l'elenco dei preferiti dalla vista principale
  },
  data() {
    return {
      dresses: [
        {
          name: "CADY JUMPSUIT",
          price: "4,890",
          image: require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"),
        },
        {
          name: "CADY LONG DRESS",
          price: "5,475",
          image: require("@/assets/Prefall2024/Cady-Long-Dress2.jpeg"),
        },
        {
          name: "CHIFFON DRAPED DRESS",
          price: "3,770",
          image: require("@/assets/Prefall2024/Chiffon-Draped-Dress3.jpeg"),
        },
        {
          name: "EMBROIDERED DRESS",
          price: "3,850",
          image: require("@/assets/Prefall2024/Embroidered-Dress5.jpeg"),
        },
        {
          name: "RESILLE LACE MIDI DRESS",
          price: "4,890",
          image: require("@/assets/Prefall2024/Resille-Lace-Midi-Dress.jpg"),
        },
        {
          name: "SATIN OFF SHOULDER DRESS",
          price: "4,050",
          image: require("@/assets/Prefall2024/Satin-Off-Shoulder-Dress.jpg"),
        },
      ],
      isFavorite: {}, // Stato del pulsante "Aggiungi ai preferiti"
    };
  },
  methods: {
    toggleFavorite(dress) {
      if (this.$set) {
        // Se $set è definito, siamo in Vue 2
        this.$set(this.isFavorite, dress.name, !this.isFavorite[dress.name]);
      } else {
        // In Vue 3, possiamo assegnare direttamente
        this.isFavorite[dress.name] = !this.isFavorite[dress.name];
      }

      // Emetti l'evento alla vista principale
      if (this.isFavorite[dress.name]) {
        this.$emit("add-to-favorites", dress); // Aggiungi ai preferiti
      } else {
        this.$emit("remove-from-favorites", dress); // Rimuovi dai preferiti
      }
    },
  },
  computed: {
    chunkedDresses() {
      const chunkSize = 3;
      const chunks = [];
      for (let i = 0; i < this.dresses.length; i += chunkSize) {
        chunks.push(this.dresses.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },
};
</script>

<style scoped>
.carousel-item img {
  max-height: 500px;
  object-fit: cover;
}

.dress-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

/* Nuove classi per centrare nome e prezzo */
.dress-info {
  margin: 10px 0; /* Margine per distanziare il contenuto */
}

.dress-name {
  margin: 0; /* Rimuove margini per un allineamento migliore */
  font-weight: bold; /* Testo in grassetto */
}

.dress-price {
  margin: 5px 0; /* Margine tra il nome e il prezzo */
}

.btn-favorite {
  background-color: white;
  color: black;
  border: 2px solid black;
  padding: 10px;
  margin-top: 10px; /* Spazio tra il prezzo e il pulsante */
  cursor: pointer;
  border-radius: 5px;
}

.btn-favorite.active {
  background-color: black;
  color: white;
}

.btn-favorite:hover {
  background-color: black;
  color: white;
}
</style>
