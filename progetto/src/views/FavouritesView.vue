<template>
  <div class="favorites-view">
    <h1>Your Favorites</h1>
    <div class="row">
      <div
        class="col-4"
        v-for="dress in favorites"
        :key="dress.name"
        style="padding: 10px"
      >
        <div
          class="dress-card"
          style="border: 1px solid #ccc; padding: 10px; text-align: center"
        >
          <img :src="dress.image" class="d-block w-100" :alt="dress.name" />
          <div class="dress-info">
            <h5 class="dress-name">{{ dress.name }}</h5>
            <p class="dress-price">{{ dress.price }} EUR</p>
          </div>
          <!-- Pulsante per rimuovere dai preferiti -->
          <button class="btn btn-danger" @click="removeFromFavorites(dress)">
            Remove from favorites
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favorites: Array, // Ricevi i preferiti come props
  },
  methods: {
    removeFromFavorites(dress) {
      this.$emit("remove-from-favorites", dress); // Emetti l'evento per rimuovere il preferito
    },
  },
};
</script>

<style scoped>
.dress-card {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
</style>
