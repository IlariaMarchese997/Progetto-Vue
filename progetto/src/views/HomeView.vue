<template>
  <div class="home">
    <div class="container-fluid" style="padding: 0">
      <div class="row">
        <div class="col-md-12" style="text-align: center; position: relative">
          <!-- Mostra l'immagine della sfilata selezionata sopra la lista -->
          <img
            :src="selectedSfilata.image"
            class="img-fluid"
            :alt="selectedSfilata.nome"
            style="width: 100%; height: auto; display: block; margin: 0"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6" style="text-align: center">
          <hr />
          <h3>- Fashion shows' list -</h3>
          <hr />
          <ul>
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
        </div>

        <div class="col-md-6" style="text-align: center">
          <h5>SPRING 2025</h5>
          <hr />
          <h5>FALL 2024</h5>
          <hr />
          <h5>SPRING 2024</h5>
          <hr />
          <h5>FALL 2023</h5>
          <hr />
        </div>
      </div>

      <!-- Modale -->
      <div
        v-if="showModal"
        class="modal fade show"
        style="display: block"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Sfilata in fase di allestimento</h5>
            </div>
            <div class="modal-body">
              <p>I capi di questa sfilata saranno disponibili a breve!</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" @click="closeModal">
                Ok!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      showModal: false,
      selectedSfilata: {
        id: 1,
        nome: "SPRING 2025",
        image: require("@/assets/sfilata-1.jpg"),
      },
      sfilate: [
        {
          id: 1,
          nome: "SPRING 2025",
          image: require("@/assets/sfilata-1.jpg"),
        },
        {
          id: 2,
          nome: "FALL 2024",
          image: require("@/assets/sfilata-2.jpg"),
        },
        {
          id: 3,
          nome: "SPRING 2024",
          image: require("@/assets/sfilata-3.jpg"),
        },
        {
          id: 4,
          nome: "FALL 2023",
          image: require("@/assets/sfilata-4.jpg"),
        },
      ],
    };
  },
  methods: {
    mostraSfilata(sfilata) {
      this.selectedSfilata = sfilata;
    },
    goToDetail(sfilata) {
      if (sfilata.id === 1) {
        this.$router.push({ name: "Sfilate" });
      } else if (sfilata.id === 2 || sfilata.id === 3) {
        this.selectedSfilata = sfilata;
        this.showModal = true; // Apri la modale
      } else {
        this.$router.push({ name: "NotFound" });
      }
    },
    closeModal() {
      this.showModal = false; // Chiudi la modale
    },
  },
};
</script>

<style>
#lista {
  list-style-type: none;
  margin: 5%;
}
</style>
