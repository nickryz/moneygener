<template>
  <header class="main-header">
    <div class="my-container">
      <div class="main-header__inner">
        <div class="main-header__logo">
          <router-link to="/">Creditno<span>Info</span></router-link>
        </div>
        <nav id="nav" class="main-header__nav">
          <ul class="main-header__list">
            <!-- <li class="main-header__item">
              <router-link class="main-header__link" to="/">МФО</router-link>
            </li> -->
            <!-- <li class="main-header__item">
              <router-link class="main-header__link" to="/mfo"
                >Акции</router-link
              >
            </li> -->
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.main-header {
  padding: 5px 0;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  position: relative;
  z-index: 1;

  @include sm {
    padding: 10px 0;
  }
}
.main-header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-header__logo {
  a {
    font-weight: 900;
    text-decoration: none;
    font-size: 2.5rem;
    color: $gray;
    @include sm {
      font-size: 1.5rem;
    }

    span {
      color: $secondAccent;
    }
  }
}
.main-header__list {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 -15px;
  padding: 0 0 0 100px;
}
.main-header__item {
  padding: 0 15px;
}
.main-header__link {
  text-decoration: none;
  text-transform: uppercase;
  color: $gray;
  font-weight: 700;
  font-size: 1.2rem;
}

#nav {
  // a {
  //     font-weight: bold;
  //     color: #2c3e50;

  //     &.router-link-exact-active {
  //         color: #42b983;
  //     }
  // }
}
</style>
