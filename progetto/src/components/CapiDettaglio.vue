<template>
  <div v-if="capo" class="container mt-4">
    <div class="row d-flex align-items-stretch">
      <div class="col-md-6">
        <div
          id="carouselDettagli"
          class="carousel slide container d-flex"
          data-bs-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              v-for="(immagine, index) in capo.images"
              :key="index"
              :data-bs-target="'#carouselDettagli'"
              :data-bs-slide-to="index"
              :class="{ active: index === 0 }"
            ></li>
          </ol>

          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(immagine, index) in capo.images"
              :class="{ active: index === 0 }"
              :key="index"
            >
              <img :src="immagine" class="d-block w-100" :alt="capo.nome" />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselDettagli"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselDettagli"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-6 p-5">
        <h1>{{ capo.nome }}</h1>

        <ul class="text-start list-unstyled">
          <div class="row">
            <li>
              <strong>Price:</strong><br />
              <span class="fs-3">{{ capo.costo }}</span>
            </li>
            <li class="mb-3">
              <strong>Description:</strong><br />
              {{ capo.descrizione }}
            </li>
            <div class="col-md-6">
              <li>
                <strong>Material:</strong><br />
                {{ capo.composizione }}
              </li>
              <li><strong>Made in:</strong> {{ capo.made }}</li>
            </div>

            <div class="col-md-5">
              <li>
                <strong>Lining</strong><br />
                {{ capo.lining }}
              </li>
              <li>
                <strong>Clean:</strong>
                {{ capo.lavaggio }}
              </li>
              <li>
                <strong>Serial Number</strong>
                {{ capo.numeroDiSerie }}
              </li>
            </div>
          </div>
          <hr class="w-50 mx-auto my-4" />
          <div class="row">
            <div class="col-md-12">
              <li class="mb-1">
                <strong>Color:</strong> {{ capo.coloreNome }}<br />
                <div
                  class="colore-box rounded-pill"
                  :style="{ backgroundColor: capo.colore }"
                ></div>
              </li>
              <li>
                <strong>Italian Size:</strong><br />
                <div class="taglie-box flex-wrap">
                  <span
                    v-for="(taglia, index) in capo.taglie"
                    :key="index"
                    class="taglia btn btn-outline-secondary rounded-pill me-2 mb-2 mt-2"
                  >
                    {{ taglia }}
                  </span>
                </div>
              </li>
            </div>
          </div>
          <div class="row mb-3">
            <div class="text-center mt-3 d-flex justify-content-center">
              <div class="mr-2 me-2">
                <button type="submit" class="btn btn-dark rounded-pill">
                  <i class="fas fa-phone me-2"></i> Reserve Now
                </button>
              </div>
              <div>
                <button type="submit" class="btn btn-dark rounded-pill">
                  <i class="fa-solid fa-envelope me-2"></i> Write to us
                </button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"], // L'ID del capo viene passato come prop dal router
  data() {
    return {
      capi: [
        {
          id: 1,
          nome: "Cady Jumpsuit",
          descrizione:
            "Zuhair Murad's Cady Jumpsuit is an elegant and contemporary piece made from cady fabric, featuring a structured and sophisticated silhouette. The tailored cut offers an impeccable fit, while the monochromatic design with a plunging neckline and accentuated waist lends a touch of modern sophistication.",
          costo: "2,970 EUR",
          composizione: "87% Acetate 13% Polyester",
          lining: "100% Polyester",
          made: "Italy",
          lavaggio: "Dry Clean Only",
          numeroDiSerie: "PJS24305-190000",
          images: [
            require("@/assets/Prefall2024/Cady-Jumpsuit.jpg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit2.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit3.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit4.jpeg"),
            require("@/assets/Prefall2024/Cady-Jumpsuit5.jpeg"),
          ],
          colore: "#000000",
          taglie: ["34", "36", "38", "40", "42", "44", "Su misura"],
        },
        {
          id: 2,
          nome: "Cady Long Dress",
          descrizione:
            "Cady Long Dress is a sophisticated long dress made of cady fabric, known for its fluidity and impeccable structure. The clean, fitted silhouette is enhanced by an elegant neckline and figure-flattering tailoring details.",
          costo: "3,390 EUR",
          composizione: "87% Acetate 13% Polyester",
          lining: "Removable lining included, 100% Polyester",
          made: "Italy",
          lavaggio: "Dry Clean Only",
          numeroDiSerie: "PDR24304-111001",
          images: [
            require("@/assets/Prefall2024/Cady-Long-Dress.jpg"),
            require("@/assets/Prefall2024/Cady-Long-Dress2.jpeg"),
            require("@/assets/Prefall2024/Cady-Long-Dress3.jpeg"),
            require("@/assets/Prefall2024/Cady-Long-Dress4.jpeg"),
            require("@/assets/Prefall2024/Cady-Long-Dress5.jpg"),
          ],
          colore: "#FFFFFF",
          taglie: ["34", "36", "38", "40", "42", "44", "Su misura"],
        },
        {
          id: 3,
          nome: "Embroidered Dress",
          descrizione:
            "Zuhair Murad's Embroidered Dress is a high-class gown embellished with intricate embroidery that decorates the flowing silhouette in a sophisticated manner. Made of fine fabric, this long dress features meticulous details and elegant transparencies that enhance femininity.",
          costo: "2,450 EUR",
          composizione: "64% Polyester 36% Nylon",
          lining: "100 % Silk",
          made: "Lebanon",
          lavaggio: "Dry Clean Only",
          numeroDiSerie: "PDR24004-190000",
          images: [
            require("@/assets/Prefall2024/Embroidered-Dress.jpg"),
            require("@/assets/Prefall2024/Embroidered-Dress2.jpeg"),
            require("@/assets/Prefall2024/Embroidered-Dress3.jpeg"),
            require("@/assets/Prefall2024/Embroidered-Dress4.jpeg"),
            require("@/assets/Prefall2024/Embroidered-Dress5.jpeg"),
          ],
          colore: "#000000",
          taglie: ["34", "36", "38", "40", "42", "44", "Su misura"],
        },
        {
          id: 4,
          nome: "Chiffon Draped Dress",
          descrizione:
            "Zuhair Murad's Chiffon Draped Dress is a masterpiece of fluid elegance, made of lightweight chiffon and draped expertly to create movement and grace.",

          costo: "4,370 EUR",
          composizione: "100 % Silk",
          lining: "100 % Silk",
          made: "Lebanon",
          lavaggio: "Dry Clean Only",
          numeroDiSerie: "PDR24003-193952",
          images: [
            require("@/assets/Prefall2024/Chiffon-Draped-Dress.jpg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress2.jpeg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress3.jpeg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress4.jpg"),
            require("@/assets/Prefall2024/Chiffon-Draped-Dress5.jpeg"),
          ],
          colore: "#3E3EFF",
          taglie: ["34", "36", "38", "40", "42", "44", "Su misura"],
        },
      ],
      capo: null, // Il capo selezionato verrà assegnato qui
    };
  },
  created() {
    // Trova il capo selezionato in base all'ID passato come prop
    this.capo = this.capi.find((capo) => capo.id === parseInt(this.id));
  },
};
</script>

<style>
.carousel-inner img {
  max-height: 400px;
  object-fit: cover;
}
.carousel-indicators li::marker {
  content: ""; /* Nasconde il contenuto del marker */
}
.colore-box {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  margin-top: 10px;
}
</style>
