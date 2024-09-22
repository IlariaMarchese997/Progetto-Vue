<template>
  <div>
    <h1>{{ product }}</h1>
    <p>{{ description }}</p>
    <h2>Caratteristiche di serie</h2>
    <ul>
      <li v-for="feature in features" :key="feature">{{ feature }}</li>
    </ul>

    <h2>Optional</h2>
    <ul>
      <li v-for="optional in optionals" :key="optional.name">
        {{ optional.name }} - Costo: {{ optional.cost }}€
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: "Fiat Tipo 4 porte",
      description:
        "Ancora più sportiva. Ancora più aggressiva. Una personalità vincente.",
      features: [
        "Condizionatore automatico",
        "Cruise control",
        "Fari led",
        "Android Auto",
      ],
      optionals: [
        { name: "Cruise control adattivo", cost: 300 },
        { name: "Ruota di scorta di dimensioni normali", cost: 250 },
      ],
    };
  },
};
</script>

<style scoped>
/* Stile per la vista del prodotto */
</style>
