<template>
  <div class="home">
    <div class="container-fluid" style="padding: 0">
      <!-- Immagine della sfilata selezionata -->
      <div class="row">
        <div class="col-md-12" style="text-align: center; position: relative">
          <img
            :src="selectedSfilata.image"
            class="img-fluid"
            :alt="selectedSfilata.nome"
            style="width: 100%; height: auto; display: block; margin: 0"
          />
        </div>
      </div>

      <!-- Sezione con due colonne: Fashion Shows e ArticoliHome -->
      <div class="row">
        <!-- Fashion Shows -->
        <div class="col-md-6" style="text-align: center">
          <h2
            style="
              color: white;
              background-color: black;
              font-weight: bold;
              padding: 3%;
            "
          >
            - FASHION SHOWS -
          </h2>
          <SfilateHome
            :updateMap="updateMap"
            @update-selected-sfilata="updateSelectedSfilata"
            @show-modal="openModal"
          />
          <!-- Mappa -->
          <div
            class="card w-100 p-3"
            style="background-color: black; color: white; border-radius: 0"
          >
            <div class="card-body">
              <h5 class="card-title">{{ selectedSfilata.location }}</h5>
            </div>
            <div class="ratio ratio-16x9">
              <iframe
                :src="mapUrl"
                width="100%"
                height="100%"
                style="border: 0; width: 100%; height: 100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- ArticoliHome -->
        <div class="col-md-6" style="text-align: center; margin: 0">
          <h2 id="aboutus" style="color: black; font-weight: bold; padding: 3%">
            #ABOUT US
          </h2>
          <ArticoliHome />
        </div>
      </div>

      <!-- Modale -->
      <div v-show="showModal" class="modal-overlay">
        <div class="modal-content" role="document">
          <div class="modal-header">
            <h5 class="modal-title">
              Sfilata in fase di allestimento!
              <br /><br />
            </h5>
          </div>
          <div class="modal-body">
            <p>I capi di questa sfilata saranno disponibili a breve.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Ok!
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SfilateHome from "@/components/SfilateHome.vue";
import ArticoliHome from "@/components/ArticoliHome.vue";
export default {
  props: ["id"],
  data() {
    return {
      selectedSfilata: {
        id: 1,
        nome: "SPRING 2025",
        image: require("@/assets/sfilata-1.jpg"),
        location: "MIAMI",
      },
      showModal: false,
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356933.8714888409!2d10.413661869378636!3d45.65994086120074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781eca8aec020b9%3A0x91dcf07c1c969bb8!2s",
    };
  },
  created() {
    if (this.selectedSfilata && this.selectedSfilata.location) {
      this.updateMap(this.selectedSfilata.location);
    }
  },
  components: {
    SfilateHome,
    ArticoliHome,
  },
  methods: {
    updateMap(location) {
      const locationsMap = {
        MIAMI:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.39567717758!2d-80.31186052014617!3d25.78253887384647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20Florida%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1727288054735!5m2!1sit!2sit",
        TOKYO:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662975.6575310319!2d138.4503767417918!3d35.50429476804576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Giappone!5e0!3m2!1sit!2sit!4v1727287895754!5m2!1sit!2sit",
        "NEW YORK":
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360977185!2d-74.30933341658171!3d40.69753995848721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1727287987868!5m2!1sit!2sit",
        LONDON:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6064073197!2d-0.43123970044350396!3d51.52860701956136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondra%2C%20Regno%20Unito!5e0!3m2!1sit!2sit!4v1727287791543!5m2!1sit!2sit",
      };

      this.mapUrl = locationsMap[location] || this.mapUrl; // Usa la location mappata o mantieni l'URL attuale
    },
    updateSelectedSfilata(sfilata) {
      this.selectedSfilata = sfilata; // Aggiorna selectedSfilata
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
.home {
  display: flex;
  flex-direction: column;
}

.container-fluid {
  margin: 0;
  padding: 0;
}

.row {
  margin: 0;
}

.col-md-6 {
  padding: 0;
  margin-bottom: 2%;
}

#aboutus {
  margin-bottom: 20px;
  border-bottom: 3px solid black;
}

.modal.show {
  display: block;
}
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: rgb(0, 0, 0);
  color: black;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  border: none;
}
</style>
