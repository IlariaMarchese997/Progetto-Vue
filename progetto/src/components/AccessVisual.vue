<template>
  <div class="container my-4">
    <h2 class="mb-5">You may also like</h2>
    <!-- Sezione per i bottoni di filtro degli accessori -->
    <div class="d-flex justify-content-center mb-3">
      <!-- Bottone per mostrare tutti gli accessori -->
      <button
        class="btn btn-dark rounded-pill me-2"
        :class="{
          'btn-dark': !isLightColor(categoryColors[null]),
          'btn-light': isLightColor(categoryColors[null]),
        }"
        @click="selectedCategory = null"
      >
        All
      </button>

      <!-- Bottoni per le altre categorie -->
      <button
        v-for="category in categories"
        :key="category"
        class="btn me-2 rounded-pill"
        :style="{
          backgroundColor: categoryColors[category],
        }"
        :class="{
          'btn-dark': !isLightColor(categoryColors[category]),
          'btn-light': isLightColor(categoryColors[category]),
          'rounded-pill': true,
        }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="row">
      <div
        v-for="accessory in filteredAccessories"
        :key="accessory.id"
        class="col-12 col-md-6 col-lg-2 mb-4"
      >
        <div
          class="card h-100 shadow-sm"
          :style="{
            borderColor: categoryColors[accessory.category] || '#f8f9fa',
            backgroundColor: 'trasparent',
            borderStyle: 'solid',
            borderWidth: '3px',
            textAlign: 'left',
          }"
        >
          <img
            :src="accessory.image"
            class="card-img-top"
            alt="Accessory image"
            style="max-height: 200px; object-fit: contain"
          />
          <div class="card-body text-center">
            <h5
              class="card-title fs-6 fs-md-5 fs-lg-4"
              :style="{ color: 'black' }"
            >
              {{ accessory.name }}
              <!-- Bianco ecc mi serve per adattare il testo in base al colore dello sfondo -->
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Questi mi servono per filtrare gli accessori
      categories: ["Blu", "Fucsia", "Oro", "Verde", "Bianco", "Nero"],
      categoryColors: {
        Blu: "#C7D0FF", // Blu
        Fucsia: "#FEC7FF", // Fucsia
        Oro: "#FEFFC7", // Oro
        Verde: "#d4ffc7", // Verde
        Bianco: "#eaf0f0", // Bianco
        Nero: "#3c3c3c",
      },
      accessories: [
        {
          id: 1,
          name: "Clutch di colore bianco con una chiusura gioiello dorata.",
          category: "Bianco",
          color: "White",
          image: require("@/assets/Accessori/BorsaBiancaBassa.png"),
        },
        {
          id: 2,
          name: "Borsa a tracolla di colore blu intenso con chiusura decorativa dorata.",
          category: "Blu",
          color: "Blue",
          image: require("@/assets/Accessori/BorsaBlu.png"),
        },
        {
          id: 3,
          name: "Borsa fucsia con dettagli dorati",
          category: "Fucsia",
          color: "Fuchsia",
          image: require("@/assets/Accessori/BorsaFuxia.png"),
        },
        {
          id: 4,
          name: "Borsa color oro tenue con una catena dorata e chiusura in stile gioiello",
          category: "Oro",
          color: "Gold",
          image: require("@/assets/Accessori/BorsaOro.png"),
        },
        {
          id: 5,
          name: "Borsa a tracolla di colore verde brillante, con chiusura e dettagli dorati.",
          category: "Verde",
          color: "Green",
          image: require("@/assets/Accessori/BorsaVerde.png"),
        },
        {
          id: 6,
          name: "Borsa a tracolla di colore verde brillante, con chiusura e dettagli dorati e design allungato.",
          category: "Verde",
          color: "Green",
          image: require("@/assets/Accessori/BorsaVerdeBassa.png"),
        },
        {
          id: 7,
          name: "Cintura sottile di colore bianco, con fibbia dorata semplice ma elegante. ",
          category: "Bianco",
          color: "White",
          image: require("@/assets/Accessori/CinturaBianca.png"),
        },
        {
          id: 8,
          name: "Cintura di colore nero con una fibbia in stile gioiello dorato",
          category: "Nero",
          color: "Black",
          image: require("@/assets/Accessori/CinturaNera.png"),
        },
        {
          id: 9,
          name: "Cintura sottile di colore oro, perfetta per un look formale o da cerimonia, aggiungendo un tocco di lusso e brillantezza.",
          category: "Oro",
          color: "Gold",
          image: require("@/assets/Accessori/CinturaOro.png"),
        },
        {
          id: 10,
          name: "Sandalo con tacco alto di colore blu, dotato di un cinturino alla caviglia e una linea elegante",
          category: "Blu",
          color: "Blue",
          image: require("@/assets/Accessori/ScarpaBlu.png"),
        },
        {
          id: 11,
          name: "Sandalo fucsia con tacco alto e cinturino alla caviglia, dal design moderno e vivace.",
          category: "Fucsia",
          color: "Fuchsia",
          image: require("@/assets/Accessori/ScarpaFuxia.png"),
        },
        {
          id: 11,
          name: "Sandalo aperto di colore nero, con cinturino alla caviglia. Un accessorio versatile per un look serale o da cocktail.",
          category: "Nero",
          color: "Black",
          image: require("@/assets/Accessori/ScarpaNeraAperta.png"),
        },
        {
          id: 12,
          name: "Scarpa nera elegante in pizzo, con tacco alto e cinturino, che combina elementi classici e moderni per uno stile raffinato",
          category: "Nero",
          color: "Black",
          image: require("@/assets/Accessori/ScarpaNeraPizzo.png"),
        },
        {
          id: 13,
          name: "Sandalo color oro con tacco alto, che aggiunge un tocco lussuoso a qualsiasi outfit, perfetto per eventi formali o serate importanti.",
          category: "Oro",
          color: "Gold",
          image: require("@/assets/Accessori/ScarpaOro.png"),
        },
        {
          id: 14,
          name: "Sandalo con tacco alto di colore verde acceso, con cinturino alla caviglia. ",
          category: "Verde",
          color: "Green",
          image: require("@/assets/Accessori/ScarpaVerde.png"),
        },
      ],
      // Categoria selezionata dall'utente
      selectedCategory: null,
    };
  },

  computed: {
    // gli accessori per bottone
    filteredAccessories() {
      if (!this.selectedCategory) {
        return this.accessories.slice(0, 6); // all fa vedere tutto
      }
      return this.accessories
        .filter((accessory) => accessory.category === this.selectedCategory)
        .slice(0, 6); // così mostro solo 6 elementi
    },
  },
  methods: {
    isLightColor(color) {
      // definisco i colori chiari
      const lightColors = [
        "#FEC7FF",
        "#FEFFC7",
        "#eaf0f0",
        "#d4ffc7",
        "#C7D0FF",
      ];
      return lightColors.includes(color);
    },
  },
};
</script>

<style scoped>
.card-body {
  padding: 1rem;
}
.card-img-top {
  padding: 0.5rem;
}
</style>
