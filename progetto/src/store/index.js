import { createStore } from "vuex";

export default createStore({
  state: {
    commenti: [
      {
        id: 1,
        vestibilita: "Molto comoda",
        qualita: "Ottima qualità del tessuto",
        stile: "Stile elegante e moderno",
        rating: 5,
      },
      {
        id: 2,
        vestibilita: "Un po' stretta",
        qualita: "Buon tessuto, ma non eccellente",
        stile: "Classico, ma funzionale",
        rating: 4,
      },
    ],
    prossimoIdCommento: 3,
  },
  mutations: {
    AGGIUNGI_RISPOSTA: function (state, commento) {
      commento.id = state.prossimoIdCommento++;
      state.prossimoIdCommento++;
      state.commenti.push(commento);
      console.log("Commenti aggiornati:", state.commenti);
    },
  },
  getters: {
    getCommenti: (state) => state.commenti,
  },
});
