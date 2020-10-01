<template>
  <footer class="main-footer">
    <div class="my-container">
      <div class="main-footer__logo">
        <a href="/">Creditno<span>Info</span></a>
      </div>
      <!-- <nav class="main-footer__nav">
            <ul class="main-footer__list">
                <li class="main-footer__item">
                    <router-link class="main-footer__link" to="/">МФО</router-link>
                </li>
                <li class="main-footer__item">
                    <router-link class="main-footer__link" to="/about">Акции</router-link>
                </li>
            </ul>
        </nav> -->
      <nav class="main-footer__row-nav">
        <ul class="row-nav__list">
          <li class="row-nav__item">
            <router-link class="row-nav__link" to="/termsconditions"
              >Правила использования сайта</router-link
            >
          </li>
          <li class="row-nav__item">
            <router-link class="row-nav__link" to="/privacypolicy"
              >Политика конфиденциальности</router-link
            >
          </li>
          <!-- <li class="row-nav__item">
            <a href="mailto:#" class="row-nav__link">Написать нам</a>
          </li> -->
        </ul>
      </nav>

      <p class="main-footer__all-rights">© Creditno.Info | Все права защищены</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.main-footer {
  background: #333;
  padding: 40px 0 40px;
  margin-top: auto;

  @include md {
    padding: 40px 0 40px;
  }
}
.main-footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main-footer__logo {
  a {
    font-weight: 900;
    text-decoration: none;
    font-size: 1.75rem;
    color: $lightGray;

    // span {
    //   color: $secondAccent;
    // }
  }
}
// nav
.main-footer__list {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 -15px;
  padding: 0 0 0 100px;
}
.main-footer__item {
  padding: 0 15px;
}
.main-footer__link {
  text-decoration: none;
  text-transform: uppercase;
  color: $lightGray;
  font-weight: 700;
  font-size: 0.5rem;
}

// row-naw
.main-footer__row-nav {
}
.row-nav__list {
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 30px -15px 0;
  padding: 0;

  @include md {
    flex-direction: column;
    align-items: center;
  }
}
.row-nav__item {
  padding: 0 15px;

  @include md {
    padding: 5px;
    margin-top: 20px;
  }

  &:not(:last-child) {
    border-right: 2px solid $mainAccent;
    @include md {
      border-right: none;
    }
  }
}
.row-nav__link {
  color: $mainAccent;
  text-decoration: none;

  @include md {
    font-size: 0.8rem;
    font-weight: 500;
  }
}
.main-footer__all-rights {
  text-align: center;
  color: $mainAccent;
  font-size: 0.75rem;
  margin-top: 40px;
}
</style>
