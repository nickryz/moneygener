<template>
    <li class="proposal-item" :class="{accented: accented}">
      <!-- <div
        class="proposal-item__accent-label"
        :style="{
          background: propParam.headerInfo.label || '#fedf3d'
        }"
      ></div> -->
      <div class="free-percent" v-if="propParam.fees.first.is0">
        <div class="free-percent__title">0<span>%</span> </div>
        <div class="free-percent__subtitle">Первый кредит</div>
      </div>
      <header
        class="proposal-item__header"
        :style="{ background: propParam.headerInfo.bG || '#fff' }"
      >
        <h3
          class="proposal-item__title"
          :style="{
            color: propParam.headerInfo.color || 'f5f5f5',
            background: propParam.headerInfo.label || '#fff'
          }"
        >
          {{ propParam.headerInfo.title }}
        </h3>
      </header>
      <div class="proposal-item__main-content">
        <div class="main-content__logo-col">
          <img
            :src="require('@/assets' + propParam.logo)"
            :alt="propParam.name"
          />
        </div>
        <div class="main-content__centr-col">
          <!-- conditions row -->
          <div class="centr-col__conditions">
            <div class="conditions__col" v-if="propParam.sum.maxsum_first">
              <h4 class="conditions__title">Первый</h4>
              <p class="conditions__text" >
                {{ $store.getters.formatNum(propParam.sum.minsum) }}-{{
                  $store.getters.formatNum(propParam.sum.maxsum_first)
                }}грн.
              </p>
            </div>
            <div class="conditions__col">
              <h4 class="conditions__title" v-if="propParam.sum.maxsum_first">Повторный</h4>
              <h4 class="conditions__title" v-else>Сумма</h4>
              <p class="conditions__text">
                {{ $store.getters.formatNum(propParam.sum.minsum) }}-{{
                  $store.getters.formatNum(propParam.sum.maxsum)
                }}грн.
              </p>
            </div>
            <div class="conditions__col">
              <h4 class="conditions__title">Срок</h4>
              <p class="conditions__text">
                {{ propParam.days.mindays }}-{{ propParam.days.maxdays }} дней
              </p>
            </div>
          </div>
          <div
            class="dotted-row"
            :style="{ borderColor: propParam.headerInfo.label }"
          ></div>
          <!-- calculator row -->
          <div class="centr-col__calculator">
            <div class="calculator__sum-col centr-col">
              <h4 class="calculator__title">Тело кредита</h4>
              <p class="calculator__text">
                <span class="calculator__sum-group">
                  <span class="calculator__sum">
                    {{ $store.getters.formatNum(values.sum) }}
                  </span>
                  <span class="calculator__qur">
                    грн.
                  </span>
                </span>
              </p>
            </div>
            <div class="centr-col">
              <p class="calculator__text">
                <span class="calculator__sum-group">
                  <span class="calculator__sum">
                    +
                  </span>
                </span>
              </p>
            </div>
            <div class="calculator__percent-col centr-col">
              <h4 class="calculator__title">Комиссия</h4>
              <p class="calculator__text">
                <span class="calculator__sum-group">
                  <span class="calculator__sum">
                    {{ $store.getters.formatNum(getCommission) }}
                  </span>
                  <span class="calculator__qur">
                    грн.
                  </span>
                </span>
              </p>
            </div>
            <div class="centr-col">
              <p class="calculator__text">
                <span class="calculator__sum-group">
                  <span class="calculator__sum">
                    =
                  </span>
                </span>
              </p>
            </div>
            <div class="calculator__toreturn-col centr-col">
              <h4 class="calculator__title">К возврату</h4>
              <p class="calculator__text">
                <span class="calculator__sum-group">
                  <span
                    class="calculator__sum"
                    :style="{ color: propParam.headerInfo.label }"
                  >
                    {{ $store.getters.formatNum(getCommission + values.sum) }}
                  </span>
                  <span class="calculator__qur">
                    грн.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="main-content__right-col">
          <a
            href="#"
            class="right-col__btn small"
            @click.prevent="
              $router.push({ name: 'Propos', params: { name: keyname } })
            "
            ><span>Подробнее</span></a
          >
          <a :href="$store.state.mfo[`${keyname}`].contact.site" class="right-col__btn big" @click.prevent="$store.dispatch('sendGtag', `${keyname}`)">
            <span class="btn-text">
              <span>Отправить</span>
              <span>Отправить</span>
            </span>
          </a>
        </div>
      </div>
    </li>
</template>

<script>
export default {
  name: 'ProposalCard',
  props: {
    propParam: Object,
    values: Object,
    keyname: String,
    accented: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    getCommission () {
      let baseComission
      if (this.propParam.fees.first.dayCommission || this.propParam.fees.first.dayCommission === 0) {
        baseComission = (this.values.sum <= this.propParam.sum.maxsum_first) ? this.propParam.fees.first.dayCommission : this.propParam.fees.other.dayCommission
      } else {
        baseComission = this.propParam.fees.other.dayCommission
      }
      const comission = Math.round(
        (this.values.sum *
          (baseComission / 100) *
          this.values.days *
          10) /
          10
      )

      return comission
    }
  }
}
</script>

<style lang="scss">
.proposal-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.proposal-item {
  /* padding: 30px; */
  background: #fff;

  // border-radius: 15px;
  // overflow: hidden;
  margin: 60px 0;
  position: relative;
  padding: 0;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.15);

  @include sm {
    margin: 30px 0;
  }

  &.accented {
    animation: neon infinite 1s alternate;
    box-shadow: 0 1px 15px 5px rgb(255, 0, 0);
  }

  @keyframes neon {
    to {
      box-shadow: 0 1px 8px 2px rgba(255, 0, 0, 0.589);
    }
  }
}
.free-percent {
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(20%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 87px;
  height: 87px;
  background: linear-gradient(180deg,#f57474 0,#cd1616);
  border: 5px solid #f1f3f4;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,.125);
  border-radius: 50%;
  z-index: 1;
  color: #fff;
  padding: 0 15px;
  text-align: center;

  @include sm {
    transform: translate(0%, -20%);
  }
}
.free-percent__title {
  font-size: 55px;
    line-height: 20px;
    margin-top: 0.3em;
    font-weight: 600;
    white-space: nowrap;
    letter-spacing: 0;

    span {
      font-size: 20px;
    }
}
.free-percent__subtitle {
  font-size: 9px;
  // font-weight: 600;

  line-height: 0.9;
}
.proposal-item__accent-label {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 1em;
  background: green;
}
.proposal-item__header {
  border-bottom: 2px solid $mainAccent;
}
.proposal-item__title {
  margin: 0;
  font-size: 1.5rem;
  padding-left: 1em;
  font-weight: 900;
  padding: 7px 1em 7px 1.5em;

  @include sm {
    padding: 7px 80px 7px 0.5em;
    font-size: 1.2rem;
  }
}
.proposal-item__main-content {
  display: flex;

  @include md {
    flex-direction: column;
  }
}
.main-content__logo-col {
  max-width: 170px;
  width: 15%;
  min-width: 150px;
  display: flex;
  align-items: center;
  // align-self: center;
  padding: 20px 20px;

  @include lg {
    max-width: 120px;
    min-width: 120px;
    padding: 20px 10px;
  }

  @include md {
    padding: 20px 20px;
    max-width: 200px;
    width: 100%;
  }

  img {
    max-width: 100%;
    display: block;
  }
}
.main-content__centr-col {
  padding: 20px 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  // background: $mainAccent;

  @include lg {
    padding: 20px;
  }
  @include sm {
    padding: 10px 15px;
  }
}

// conditions
.centr-col__conditions {
  display: flex;
}
.conditions__col {
  width: 33.33333%;
  color: $gray;
}
.conditions__title {
  font-weight: 400;
  font-size: 0.75rem;
}
.conditions__text {
  font-weight: 700;
  font-size: 0.75rem;
  margin: 3px 0 0 0;
}

// dotted row
.dotted-row {
  margin: 15px 0;
  // border-bottom: 2px solid $secondAccent;
  border-bottom: 2px solid $mainAccent;
}

// calculator
.centr-col__calculator {
  display: flex;
  justify-content: space-between;
}
.centr-col {
  padding: 0 40px 0 0;
  flex-grow: 1;

  @include lg {
    padding: 0 20px 0 0;
  }
  @include sm {
    padding: 0 10px 0 0;
  }
}
.calculator__toreturn-col {
  color: #333;
  .calculator__sum {
    color: $secondAccent;
  }
}
.calculator__title {
  font-weight: 400;
  font-size: 0.75rem;
}
.calculator__text {
  margin: 3px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.calculator__sum {
  white-space: nowrap;
  font-size: 1.75rem;
  font-weight: 900;

  @include lg {
    font-size: 1.5rem;
  }
  @include sm {
    font-size: 1.1rem;
  }
}
.calculator__qur {
  font-size: 0.75rem;
}
.calculator__symbol {
  padding: 0 10px;
}
.main-content__right-col {
  max-width: 150px;
  min-width: 150px;
  padding: 10px;
  width: 15%;
  display: flex;
  flex-direction: column;

  @include md {
    width: 100%;
    max-width: none;
  }
}
.right-col__btn {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  padding: 15px;
  text-align: center;

  &.big {
    background: $higthAccent;
    border-radius: 15px;
    flex-grow: 3;
    color: #fff;
  }
  &.small {
    // background: $secondAccent;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
    color: $gray;
    flex-grow: 2;
  }

  .btn-text {
    display: block;
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;

    span {
      display: block;
      transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
    }

    span:first-child {
      opacity: 1;
    }
    span:last-child {
      position: absolute;
      top:100%;
      left: 0;
      opacity: 0;
      transform: rotateX(90deg);
    }
  }

  &:hover {
    .btn-text {

      span:first-child {
        transform: translateY(-100%) rotateX(-90deg);
        opacity: 0;
      }
      span:last-child {
        opacity: 1;
        transform: translateY(-100%) rotateX(0deg);
      }
    }
  }
}
</style>
