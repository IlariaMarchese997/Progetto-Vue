<template>
  <div class="home">
    <HelloWorld msg="" />
  </div>
  <div class="col-md-9">
    <div class="card mx auto" style="width: 100%">
      <div id="carosellosfilate" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="assets/sfilata-1.jpg"
              class="d-block w-100"
              alt="sfilata1"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/sfilata-2.jpg"
              class="d-block w-100"
              alt="sfilata2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/sfilata-3.jpg"
              class="d-block w-100"
              alt="sfilata3"
            />
          </div>
          <div class="carousel-item">
            <img
              src="assets/sfilata-4.jpg"
              class="d-block w-100"
              alt="sfilata4"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carosellosfilate"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carosellosfilate"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="card-body" style="text-align: center">
        <h3 class="card-title">- Fashion shows' list -</h3>
        <h5 class="card-text" style="margin: 3%">SPRING 2025</h5>
        <h5 class="card-text" style="margin: 3%">FALL 2024</h5>
        <h5 class="card-text" style="margin: 3%">SPRING 2024</h5>
        <h5 class="card-text" style="margin: 3%">FALL 2023</h5>
      </div>
    </div>
  </div>

  <div class="d-none d-md-block col-md-3">
    <div class="card mx-auto" style="width: 80%">
      <img
        src="assets/Prefall2024/Cady_Jumpsuit.jpg"
        class="card-img-top"
        alt="card-1"
      />
      <div class="card-body">
        <h5 class></h5>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
