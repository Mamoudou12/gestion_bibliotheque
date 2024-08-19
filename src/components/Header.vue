<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #2c3e50;">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-uppercase" href="#" style="color: #f1c40f;">Bibliothèque</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px;"
          >
            <li class="nav-item">
              <a class="nav-link" href="#" style="color: #ecf0f1;">Livres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style="color: #ecf0f1;">Membres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style="color: #ecf0f1;">Prêts</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              style="border: 2px solid #f1c40f; color: #2c3e50;"
            />
            <button class="btn btn-outline-light" type="submit" style="border-color: #f1c40f; color: #f1c40f;">
              Rechercher
            </button>
          </form>
        </div>
      </div>
    </nav>

</template>

<script setup>
</script>

<style scoped>
</style>
