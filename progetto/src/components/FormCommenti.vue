<template>
  <div class="container-fluid mt-4">
    <form class="comment-form" @submit.prevent="onSubmit">
      <div class="row g-5 mx-5">
        <div v-if="messaggioSuccesso" class="success">
          {{ messaggioSuccesso }}
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <p>
              <label for="nome" class="form-label">Name</label>
              <input
                class="form-control form-control-sm rounded-pill"
                id="nome"
                v-model="commento.nome"
                placeholder="Enter your name"
                required
              />
            </p>
          </div>
          <div class="mb-3">
            <p>
              <label for="cognome" class="form-label">Surname</label>
              <input
                class="form-control form-control-sm rounded-pill"
                id="cognome"
                v-model="commento.cognome"
                placeholder="Enter your surname"
                required
              />
            </p>
          </div>
          <div class="mb-3">
            <p>
              <label for="email" class="form-label">Email</label>
              <input
                class="form-control form-control-sm rounded-pill"
                id="email"
                type="email"
                v-model="commento.email"
                placeholder="Enter your email"
                required
              />
            </p>
          </div>
        </div>
        <!-- Rating a stelle -->
        <div class="col-md-4">
          <div class="mb-3">
            <label for="rating" class="form-label">Rating:</label>
            <div id="rating" class="rating d-flex justify-content-center">
              <input
                type="radio"
                id="star5"
                v-model="commento.rating"
                value="5"
              />
              <label for="star5" title="5 stars">★</label>

              <input
                type="radio"
                id="star4"
                v-model="commento.rating"
                value="4"
              />
              <label for="star4" title="4 stars">★</label>

              <input
                type="radio"
                id="star3"
                v-model="commento.rating"
                value="3"
              />
              <label for="star3" title="3 stars">★</label>

              <input
                type="radio"
                id="star2"
                v-model="commento.rating"
                value="2"
              />
              <label for="star2" title="2 stars">★</label>

              <input
                type="radio"
                id="star1"
                v-model="commento.rating"
                value="1"
              />
              <label for="star1" title="1 star">★</label>
            </div>
          </div>
          <div class="mb-3">
            <p>
              <label for="style" class="form-label">Leave a feedback</label>
              <textarea
                class="form-control form-control-sm rounded-pill"
                id="style"
                v-model="commento.stile"
                placeholder="Enter your feedback"
                required
              ></textarea>
            </p>
          </div>
          <div class="mb-3">
            <p>
              <input
                type="submit"
                value="Submit Comment"
                class="btn btn-dark rounded-pill"
              />
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <h2>Comment</h2>
          <ul id="commenti">
            <li v-for="commento in commenti" :key="commento.id">
              <strong>{{ commento.nome }} {{ commento.cognome }}</strong>
              <p>{{ commento.email }}</p>
              <br />
              <strong>Style:</strong><br />
              {{ commento.stile }} <br />
              <strong>Rating:</strong>
              {{ commento.rating }}
            </li>
          </ul>
        </div>
      </div>
    </form>
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
        rating: null,
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
        stile: "",
        rating: null,
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
.rating {
  direction: rtl; /* direzione verso destra*/
  font-size: 40px;
}
.rating input {
  display: none;
}
/* così nascondi gli imput radio*/
.rating label {
  color: black;
  cursor: pointer;
}
/* da predefinito a quando ci passo sopra (cursor) */
.rating label:hover,
.rating label:hover ~ label {
  color: gold; /* Cambia colore delle stelle al passaggio del mouse */
}
.rating input:checked ~ label {
  color: gold; /* Cambia colore delle stelle selezionate */
}
</style>
