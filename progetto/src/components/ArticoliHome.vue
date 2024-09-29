<template>
  <div class="card-container">
    <div class="row">
      <div
        class="col-md-4 col-sm-12"
        v-for="article in articles"
        :key="article.id"
      >
        <div class="card w-100">
          <img :src="article.image" :alt="article.nome" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ article.nome }}</h5>
            <a :href="article.articolo" target="_blank">
              <button
                type="button"
                class="btn"
                style="color: black; background-color: white"
              >
                Read article
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          nome: "VOGUE Runway",
          image: require("@/assets/Card1.webp"),
          articolo:
            "https://www.vogue.com/fashion-shows/resort-2025/zuhair-murad",
        },
        {
          id: 2,
          nome: "British VOGUE",
          image: require("@/assets/Card2.webp"),
          articolo:
            "https://www.vogue.co.uk/article/bella-hadid-orebella-vintage-zuhair-murad-dress",
        },
        {
          id: 3,
          nome: "LUXFERITY",
          image: require("@/assets/Card3.jpg"),
          articolo:
            "https://ww.fashionnetwork.com/news/Zuhair-murad-nereo-friso-new-commercial-director,550890.html#casablanca",
        },
        {
          id: 4,
          nome: "Fashion NETWORK",
          image: require("@/assets/Card4.avif"),
          articolo:
            "https://ww.fashionnetwork.com/news/Zuhair-murad-nereo-friso-new-commercial-director,550890.html#casablanca",
        },
        {
          id: 5,
          nome: "Harper's BAZAAR",
          image: require("@/assets/Card5.avif"),
          articolo:
            "https://www.harpersbazaar.com/it/moda/a45934123/zuhair-murad/",
        },
        {
          id: 6,
          nome: "THE IMPRESSION",
          image: require("@/assets/Card6.jpg"),
          articolo:
            "https://www.harpersbazaar.com/it/moda/a45934123/zuhair-murad/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.btn:hover {
  font-weight: bold !important
  ;
}

.card-container {
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card {
  background-color: black;
  color: white;
  border-radius: 0;
  margin-bottom: 20px;
  flex: 0 1 calc(33.333% - 20px);
}

.card-img-top {
  width: 100%;
  height: auto;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .card-title,
  .btn {
    font-size: 13px;
    margin: none;
  }
}
</style>
