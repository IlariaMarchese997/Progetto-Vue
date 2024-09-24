import { createStore } from "vuex";

export default createStore({
  state: {
    commenti: [],
    prossimoIdCommento: 1,
  },
  mutations: {
    Aggiungi: function (state, commento) {
      commento.id = state.prossimoIdCommento;
      state.prossimoIdCommento++;
      state.commenti.push(commento);
      console.log("Commenti aggiornati:", state.commenti);
    },
  },
  getters: {
    getCommenti: (state) => state.commenti,
  },
});
