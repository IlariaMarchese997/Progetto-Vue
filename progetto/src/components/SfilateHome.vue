<template>
  <ul class="list-unstyled" style="text-align: center">
    <li id="lista" v-for="sfilata in sfilate" :key="sfilata.id">
      <h5
        @mouseover="mostraSfilata(sfilata)"
        @click="goToDetail(sfilata)"
        style="cursor: pointer"
      >
        {{ sfilata.nome }}
      </h5>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["updateMap"],
  data() {
    return {
      selectedSfilata: {
        id: 1,
        nome: "SPRING 2025",
        image: require("@/assets/sfilata-1.jpg"),
        location: "MIAMI", // Aggiungi la location di default
      },
      sfilate: [
        {
          id: 1,
          nome: "SPRING 2025",
          image: require("@/assets/sfilata-1.jpg"),
          location: "MIAMI",
        },
        {
          id: 2,
          nome: "FALL 2024",
          image: require("@/assets/sfilata-2.jpg"),
          location: "TOKYO",
        },
        {
          id: 3,
          nome: "SPRING 2024",
          image: require("@/assets/sfilata-3.jpg"),
          location: "NEW YORK",
        },
        {
          id: 4,
          nome: "FALL 2023",
          image: require("@/assets/sfilata-4.jpg"),
          location: "LONDON",
        },
      ],
    };
  },
  methods: {
    mostraSfilata(sfilata) {
      this.$emit("update-selected-sfilata", sfilata); // Emittiamo un evento per aggiornare il genitore
      if (this.updateMap) {
        this.updateMap(sfilata.location); // Mantieni il comportamento di aggiornamento della mappa
      }
    },
    goToDetail(sfilata) {
      if (sfilata.id === 1) {
        this.$router.push({ name: "Sfilate" });
      } else if (sfilata.id === 2 || sfilata.id === 3) {
        this.selectedSfilata = sfilata;
        this.$emit("show-modal"); // Apri la modale
      } else {
        this.$router.push({ name: "NotFound" });
      }
    },
  },
};
</script>

<style>
#lista {
  list-style-type: none;
  margin: 5%;
  position: relative;
}

#lista :hover {
  font-weight: bold;
}

#lista h5 {
  text-transform: uppercase;
  position: relative;
  padding-bottom: 5px;
}

#lista h5::after {
  content: "";
  display: block;
  width: 100%;
  height: 0;
  background-color: black;
  position: absolute;
  bottom: -5px;
  left: 0;
}

#lista h5:hover::after {
  height: 2px;
}
</style>
