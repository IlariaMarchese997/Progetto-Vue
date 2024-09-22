<template>
  <div v-if="capo">
    <h2>{{ capo.nome }}</h2>
    <img :src="capo.image" :alt="capo.nome" class="d-block w-100" />
    <p>{{ capo.descrizione }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"], // Ottieni l'ID dal router
  data() {
    return {
      capi: [
        {
          id: 1,
          nome: "Vestito",
          descrizione: "Cady Jumpsuit",
          image: require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"),
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
      capo: null,
    };
  },
  created() {
    // Trova il capo selezionato in base all'ID passato come prop
    this.capo = this.capi.find((capo) => capo.id === parseInt(this.id));
  },
};
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
