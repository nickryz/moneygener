<template>
  <div class="home">
    <section-wrap class="range-section">
        <div class="range-list">
          <div class="calltoaction">
            <h2>Нужны деньги?</h2>
            <p>Все довольно просто и быстро. Выбирай МФО* и отправляй заявку. При положительном решении - получай займ.</p>
            <p class="small">*Микрофинансовые организации</p>
          </div>
          <h2>Выберите параметры</h2>
          <div class="range-custom__wrap">
            <sum-range
              class="range-custom"
              v-for="slide in slides"
              :key="slide.name"
              :slider="slide.props"
              :value.sync="values[slide.name]"
              :title="slide.title"
              :valueIcon="slide.valueIcon"
            ></sum-range>
          </div>
          <a class="results-btn" href="#results" @click.prevent="$store.dispatch('scrollTo', { e: $event })">К результатам</a>
        </div>
    </section-wrap>
    <section-wrap class="propos-section">
      <div v-if="filteredList(filterList, values).length == 0" id="results">
        <h2 class="propos-title">
          <p>Упс, по заданным параметрам ничего не найдено :( <br> Попробуйте задать другие параметры.</p>
        </h2>
      </div>

      <div v-else id="results">
        <h2 class="propos-title">
          <p>Вот что мы подобрали под Ваши параметры.</p>
        </h2>
        <ul class="proposal-list">
          <proposal-card
            v-for="(item, name, index) in filteredList(filterList, values)"
            :key="name"
            :keyname="name"
            :values="values"
            :propParam="item"
            :accented="(index == 0) ? true : false"
          >
          <span>{{name}}</span>
          </proposal-card>
        </ul>
      </div>
    </section-wrap>
  </div>
</template>

<script>
// @ is an alias to /src
import SumRange from '@/components/SumRange/SumRange.vue'
import SectionWrap from '@/components/SectionWrap'
import ProposalCard from '@/components/ProposalCard'

// import wNumb from 'wnumb/wNumb'

export default {
  name: 'Home',
  components: {
    SumRange,
    SectionWrap,
    ProposalCard
  },
  data () {
    return {
      filterList: ['sum', 'days'],
      values: {
        sum: 3000,
        days: 15
      },
      slides: [
        {
          name: 'sum',
          title: 'Сумма',
          valueIcon: '₴',
          value: 3000,
          props: {
            start: 3000,
            connect: 'lower',
            step: 100,
            range: {
              min: [100],
              '60%': [5000, 500],
              '80%': [10000, 500],
              max: [30000]
            },
            pips: {
              mode: 'values',
              values: [100, 3000, 5000, 10000, 30000],
              density: 2,
              stepped: true
              /* format: wNumb({
                thousand: ' ',
                decimals: 0
              }) */
            }
          }
        },
        {
          name: 'days',
          title: 'Дней',
          value: 15,
          props: {
            start: 15,
            connect: 'lower',
            step: 1,
            range: {
              min: [1],
              max: [30]
            },
            pips: {
              mode: 'values',
              values: [1, 5, 10, 15, 20, 25, 30],
              density: 2,
              stepped: true
              /* format: wNumb({
                thousand: ' ',
                decimals: 0
              }) */
            }
          }
        }
      ]
    }
  },
  methods: {
    filteredList (filterList, values) {
      // console.log(1231)
      return this.$store.getters.filterMinMax(filterList, values)
    }
  }
}
</script>

<style lang="scss">
.propos-title {
  font-size: 1.75rem;
  text-align: center;
  // background: rgba(255, 255, 255, 0.45);
  background: #ffd60885;
  color: #fff;
  padding: 20px 5px;
  // font-weight: 500;
}
.results-btn {
  display: block;
  text-decoration: none;
  width: 160px;
  background: $higthAccent;
  padding: 10px 15px;
  font-size: 14px;
  margin-top: 1em;
  border-radius: 6px;
  margin-left: auto;
  color: #fff;
  text-align: center;
  animation: pulse 1s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
    100% {
      transform: scale(1);
    }
  }
}
.range-section {
  padding: 400px 0 0;
  position: relative;
  background: $mainAccent;
  box-shadow: inset 0 -2px 15px rgba(0, 0, 0, 0.15);
  background: url('~@/assets/bg.jpeg') 30% 0% no-repeat;
  background-size: cover;
  margin-bottom: 170px;

  @include xl {
    padding: 320px 0 30px 0;
    margin-bottom: 30px;
  }
  @include md {
    padding: 300px 0 20px 0;
  }
  @include sm {
    padding: 60px 0 20px 0;
    margin-bottom: 200px;
    background: url('~@/assets/bg_mob.jpg') 30% 0% no-repeat;
    background-size: cover;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.range-list {
  position: relative;
  padding: 30px;
  margin: 0 -15px;
  background: rgba(255, 255, 255, 1);
  box-shadow:  0 -2px 15px rgba(0, 0, 0, 0.45);
  border-radius: 16px;
  transform: translateY(50%);
  @include xl {
    width: 50%;
    transform: translateY(0);
    margin-left: auto;
  }
  @include md {
    width: 100%;
    margin-left: initial;
  }
  @include sm {
    transform: translateY(50%);
    padding: 25px 15px;
  }
  h2 {
    margin-bottom: 0.7em;
    font-size: 1.5rem;
  }
}
.range-custom__wrap {
  display: flex;

  @include xl {
    flex-direction: column;
    // padding: 20px;
    margin: 0 0 0 auto;
  }
}
.range-custom {
  width: 50%;
  padding: 10px 30px 50px 30px;

  @include xl {
    width: initial;
    padding: 20px 0 50px 0;
  }

  .range-block__range-row {
    padding: 0 40px;

    @include sm {
      padding: 0 30px;
    }
  }

  .range-block__range-btn {
    width: 17px;
    height: 17px;

    img {
      width: 8px;
    }
  }
  .noUi-value-large {
    @include xl {
      font-size: 0.65rem !important;
      margin-top: 0.5em;
    }
  }
  .range-block__title {
     @include lg {
       font-size: 1.2rem;
     }
  }
}

.propos-section {

}

.calltoaction {
  position: absolute;
  background: $higthAccent;
  color: #fff;
  padding: 15px;
  font-size: 28px;
  border-radius: 16px;
  top: -300px;
  right: 0;
  max-width: 360px;
  transform: rotate(-10deg);

  @include lg {
    font-size: 18px;
    max-width: 240px;
    top: -250px;
  }
   @include sm {
    font-size: 13px;
    top: -200px;
    max-width: 180px;
  }

  p {
    font-size: 16px;
    margin: 1em 0;

     @include lg {
        font-size: 14px;
        margin-top: 1em 0;
      }

       @include sm {
        font-size: 12px;
      }

    &.small {
      margin-top: 2em;
      font-size: 12px;

      @include lg {
        margin-top: 1.5em;
        font-size: 10px;
      }

    }
  }

  &:before {
    content: '';
    width: 140px;
    height: 140px;
    right: 102%;
    top: 50%;
    position: absolute;
    background: url('~@/assets/icons/increase.svg') center no-repeat;
  background-size: contain;
  transform: rotate(180deg);

    @include lg {
      width: 100px;
      height: 100px;
    }
    @include md {
      width: 80px;
      height: 80px;
    }
  }

}

</style>
