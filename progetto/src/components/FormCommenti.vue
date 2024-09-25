<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <form class="comment-form" @submit.prevent="onSubmit">
          <p>
            <label for="nome">Name</label>
            <input id="nome" v-model="commento.nome" required />
          </p>
          <p>
            <label for="cognome">Surname</label>
            <input id="cognome" v-model="commento.cognome" required />
          </p>
          <p>
            <label for="email">Email</label>
            <input id="email" type="email" v-model="commento.email" required />
          </p>
          <p>
            <label for="style">Leave a feedback</label>
            <textarea id="style" v-model="commento.stile" required></textarea>
          </p>

          <p>
            <input
              type="submit"
              value="Submit Comment"
              class="btn btn-primary"
            />
          </p>
        </form>

        <div v-if="messaggioSuccesso" class="success">
          {{ messaggioSuccesso }}
        </div>
      </div>

      <div class="col-md-6">
        <h2>Commenti</h2>
        <ul id="commenti">
          <li v-for="commento in commenti" :key="commento.id">
            <strong>{{ commento.nome }} {{ commento.cognome }}</strong>
            <p>{{ commento.contenuto }}</p>
            <small>{{ commento.email }}</small>
            <strong>Style:</strong> {{ commento.stile }}
          </li>
        </ul>
      </div>
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
        stile: "",
      },
      messaggioSuccesso: "",
      messaggioErrore: "",
    };
  },
  computed: {
    commenti() {
      return this.$store.getters.getCommenti; // Accede ai commenti tramite il getter Vuex
    },
  },
  methods: {
    onSubmit() {
      // Commit per aggiungere il commento
      this.$store.commit("AGGIUNGI_RISPOSTA", this.commento);

      // Reset del form dopo il submit
      this.commento = {
        nome: "",
        cognome: "",
        email: "",
        contenuto: "",
        stile: "",
      };

      // Mostra un messaggio di successo
      this.messaggioSuccesso = "Commento aggiunto con successo!";
      this.messaggioErrore = "";
      // Resetta il messaggio di errore

      // Nascondi il messaggio di successo dopo qualche secondo
      setTimeout(() => {
        this.messaggioSuccesso = "";
      }, 4000);
    },
  },
};
</script>

<style>
#commenti {
  list-style-type: none;
}
</style>
