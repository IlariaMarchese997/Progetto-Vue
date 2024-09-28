<template>
  <footer class="bg-dark text-white text-center py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Explore our World</h5>
          <ul class="list-unstyled">
            <li class="nav-item">
              <router-link :to="{ name: 'home' }" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Sfilate' }" class="nav-link"
                >Sfilate</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Contact us</h5>
          <p>
            Email: info@example.com <br />
            Telefono: +961 1 575 222
          </p>
        </div>
        <div class="col-md-4">
          <h5>Follow us</h5>
          <a
            href="https://www.facebook.com/zuhairmuradofficial"
            class="text-white mx-2"
            ><i class="fab fa-facebook"></i
          ></a>
          <a
            href="https://x.com/zuhairmurad"
            class="text-white mx-2"
            target="_blank"
          >
            <i class="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/zuhairmuradofficial/"
            class="text-white mx-2"
            ><i class="fab fa-instagram"></i
          ></a>
          <a
            href="https://www.pinterest.fr/zuhairmurad/"
            class="text-white mx-2"
            target="_blank"
          >
            <i class="fab fa-pinterest"></i>
          </a>
          <a
            href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2F%40zuhairmurad&lang=en&enter_method=mandatory"
            class="text-white mx-2"
            target="_blank"
          >
            <i class="fab fa-tiktok"></i>
          </a>
          <a
            href="https://www.youtube.com/@zuhairmurad/about"
            class="text-white mx-2"
            target="_blank"
          >
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <p class="mb-0">
            &copy; 2024 - Zuhair Murad. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
