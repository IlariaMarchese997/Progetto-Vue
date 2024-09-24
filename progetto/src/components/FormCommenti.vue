<template>
  <div>
    <form class="comment-form" @submit.prevent="onSubmit">
      <p>
        <label for="nome">Nome</label>
        <input id="nome" v-model="commento.nome" required />
      </p>
      <p>
        <label for="cognome">Cognome</label>
        <input id="cognome" v-model="commento.cognome" required />
      </p>
      <p>
        <label for="email">Email</label>
        <input id="email" type="email" v-model="commento.email" required />
      </p>
      <p>
        <label for="contenuto">Commento</label>
        <textarea
          id="contenuto"
          v-model="commento.contenuto"
          required
        ></textarea>
      </p>

      <p>
        <input type="submit" value="Aggiungi Commento" />
      </p>
    </form>
    <div>
      <h2>Commenti</h2>
      <ul>
        <li v-for="commento in commenti" :key="commento.id">
          <strong>{{ commento.nome }} {{ commento.cognome }}</strong>
          <p>{{ commento.contenuto }}</p>
          <small>{{ commento.email }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commento: {
        nome: "",
        cognome: "",
        email: "",
        contenuto: "",
      },
    };
  },
  computed: {
    // Aggiungi questa proprietà per recuperare i commenti dallo store Vuex
    commenti() {
      return this.$store.getters.getCommenti; // Accede ai commenti tramite il getter Vuex
    },
  },
  methods: {
    onSubmit() {
      this.$store.commit("Aggiungi", this.commento);
      // Reset del form dopo il submit
      this.commento = {
        nome: "",
        cognome: "",
        email: "",
        contenuto: "",
      };
      // Navigazione verso un'altra pagina, ad esempio una pagina che mostra i commenti
    },
  },
};
</script>
