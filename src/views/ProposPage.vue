<template>
  <div class="propos">
    <section-wrap class="header-section">
      <div class="header-section__inner">
        <div class="header-section__logo-col">
          <a
            :href="$store.state.mfo[`${name}`].contact.site"
            @click.prevent="$store.dispatch('sendGtag', `${name}`)"
            class="header-section__logo-link"
            :title="'перейти на сайт ' + $store.state.mfo[name].name"
          >
            <img
              :src="require('@/assets' + $store.state.mfo[name].logo)"
              :alt="$store.state.mfo[name].name"
            />
          </a>
          <link-btn :href="$store.state.mfo[`${name}`].contact.site" @click.native.prevent="$store.dispatch('sendGtag', `${name}`)" text="Заявка"></link-btn>
          </div>
        <div class="header-section__other">
          <div class="header-section__conditions-col">
            <h2 class="conditions-table__title">Основные условия</h2>
            <table class="conditions-table">
              <tbody>
                <tr>
                  <td class="item">Сумма 1-го кредита</td>
                  <td class="item item--two-lines">
                    {{
                      $store.getters.formatNum(
                        $store.state.mfo[name].sum.minsum
                      )
                    }}
                    -
                    {{
                      $store.getters.formatNum(
                        $store.state.mfo[name].sum.maxsum_first
                      )
                    }}грн.
                  </td>
                </tr>
                <tr>
                  <td class="item">Ставка 1-го кредита</td>
                  <td class="item item--two-lines">
                    {{ $store.state.mfo[name].fees.first.dayCommission }}% / в
                    день
                  </td>
                </tr>
                <tr>
                  <td class="item">Сумма последующего кредита</td>
                  <td class="item item--two-lines">
                    {{
                      $store.getters.formatNum(
                        $store.state.mfo[name].sum.minsum
                      )
                    }}
                    -
                    {{
                      $store.getters.formatNum(
                        $store.state.mfo[name].sum.maxsum
                      )
                    }}грн.
                  </td>
                </tr>
                <tr>
                  <td class="item">Ставка последующего кредита</td>
                  <td class="item item--two-lines">
                    {{ $store.state.mfo[name].fees.other.dayCommission }}% / в
                    день
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="header-section__regards-col">
            <h2 class="conditions-table__title">Особенности</h2>
            <table class="conditions-table accented">
              <tbody>
                <tr
                  v-for="advantage in $store.state.mfo[name].advantages"
                  :key="advantage"
                >
                  <td class="item accented">
                    <span class="item__markered">{{ advantage }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section-wrap>
    <section-wrap class="propos__top-section">
      <h2 class="top-section__title">Расчитай кредит</h2>
      <div class="top-section__inner">
        <div class="top-section__range-list">
          <sum-range
            class="range-mini"
            v-for="slide in slides"
            :key="slide.name"
            :slider="slide.props"
            :value.sync="values[slide.name]"
            :title="slide.title"
            :valueIcon="slide.valueIcon"
          ></sum-range>
          <div class="top-section__result-col"></div>
        </div>
        <div class="top-section__result-col">
          <!-- <h2 class="result-col__title">Расчет</h2> -->
          <table class="tariffs-table">
            <tbody>
              <tr>
                <th class="item table-header"></th>
                <th class="item table-header">Первый кредит</th>
                <th class="item table-header">Повторный</th>
              </tr>
              <tr>
                <td class="item">Сумма за кредит</td>
                <td class="item item--two-lines">
                  {{
                    $store.state.mfo[name].sum.maxsum_first >= values.sum
                      ? `${$store.getters.formatNum(values.sum)} грн.`
                      : "-"
                  }}
                </td>
                <td class="item item--two-lines">
                  {{ $store.getters.formatNum(values.sum) }} грн.
                </td>
              </tr>
              <tr>
                <td class="item">Плата за кредит</td>
                <td class="item item--two-lines">
                  {{
                    getFirstCommission
                      ? `${$store.getters.formatNum(getFirstCommission)} грн.`
                      : "-"
                  }}
                </td>
                <td class="item item--two-lines">
                  {{ $store.getters.formatNum(getCommission) }} грн.
                </td>
              </tr>
              <tr>
                <td class="item">Всего к возврату</td>
                <td class="item item--two-lines">
                  {{
                    $store.state.mfo[name].sum.maxsum_first >= values.sum
                      ? `${$store.getters.formatNum(
                          values.sum + getFirstCommission
                        )} грн.`
                      : "-"
                  }}
                </td>
                <td class="item item--two-lines">
                  {{ $store.getters.formatNum(getCommission + values.sum) }}
                  грн.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="top-section__btn-row">
        <a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" class="top-section__btn">Отправить заявку</a>
      </div>
    </section-wrap>
    <component :is="name" :name="name"></component>
  </div>
</template>

<script>
import SumRange from '@/components/SumRange/SumRange.vue'
import SectionWrap from '@/components/SectionWrap'
import LinkBtn from '@/components/LinkBtn'

export default {
  name: 'ProposPage',
  components: {
    SumRange,
    SectionWrap,
    LinkBtn
  },
  props: ['name'],
  data () {
    return {
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
              min: this.$store.state.mfo[this.name].sum.minsum,
              max: this.$store.state.mfo[this.name].sum.maxsum
            },
            pips: {
              mode: 'values',
              values: [
                this.$store.state.mfo[this.name].sum.minsum,
                this.$store.state.mfo[this.name].sum.maxsum_first,
                this.$store.state.mfo[this.name].sum.maxsum
              ],
              density: 2,
              stepped: true
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
              min: this.$store.state.mfo[this.name].days.mindays,
              max: this.$store.state.mfo[this.name].days.maxdays
            },
            pips: {
              mode: 'values',
              values: [
                this.$store.state.mfo[this.name].days.mindays,
                this.$store.state.mfo[this.name].days.maxdays
              ],
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
  computed: {
    getFirstCommission () {
      if (
        this.$store.state.mfo[this.name].sum.maxsum_first >= this.values.sum
      ) {
        return Math.round(
          (this.values.sum *
            (this.$store.state.mfo[this.name].fees.first.dayCommission / 100) *
            this.values.days *
            10) /
            10
        )
      } else {
        return false
      }
    },
    getCommission () {
      return Math.round(
        (this.values.sum *
          (this.$store.state.mfo[this.name].fees.other.dayCommission / 100) *
          this.values.days *
          10) /
          10
      )
    }
  }
}
</script>

<style lang="scss">
.space-between {
  justify-content: space-between;
}
// header
.header-section__inner {
  display: flex;
  margin: 0 -15px;
  padding: 30px 0;

  @include md {
    flex-direction: column;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    margin: 3em 0;

    @include md {
      margin: 2em 0;
    }
  }
}

.header-section__logo-col {
  width: 20%;
  padding: 0 35px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 200px;

  @include xl {
    padding: 0 15px;
    align-self: flex-start;
  }
  @include md {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    .header-section__logo-link {
      width: 150px;
    }
  }
}
.header-section__other {
  padding: 0 15px;
  width: 80%;
  display: flex;
  flex-grow: 1;
  margin: 0 -15px;

  @include lg {
    flex-direction: column;
    margin: 0;
  }
  @include md {
    width: 100%;
  }
}
.header-section__conditions-col {
  padding: 0 15px;
  width: 50%;

  @include lg {
    width: 100%;
    padding: 0;
    margin-top: 20px;
  }
}

.conditions-table__title {
  text-align: left;
  font-weight: 700;
  font-size: 1.5rem;
  margin: 0 0 16px 16px;
}
.conditions-table {
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);

  &.accented {
    border: 2px solid;
    background: $secondAccent;
    font-weight: 700;
  }

  .item {
    padding: 16px;
  }

  tr:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    overflow: hidden;
  }
  tr:nth-child(odd) {
    .item {
      background: #f5f5f5;
    }
  }
  tr:nth-child(even) {
    .item {
      background: #fcfcfc;
    }
  }
}

.header-section__regards-col {
  width: 50%;
  padding: 0 15px;

  @include lg {
    width: 100%;
    padding: 0;
    order: -1;
  }
}

// //////

.propos__top-section {
  background: #f5f5f5;
}
.top-section__title {
  font-size: 2rem;
  color: $gray;
  text-align: center;
  margin: 0 0 30px;
}
.top-section__inner {
  display: flex;
  margin: 0 -15px;

  @include lg {
    flex-direction: column;
  }
}
.top-section__range-list {
  width: 40%;
  padding: 0 15px 0 15px;

  @include lg {
    width: 100%;
  }
}
.top-section__result-col {
  width: 60%;
  padding: 0 15px;
  // border-left: 4px dotted #fff;
  @include lg {
    width: 100%;
    margin-top: 50px;
  }
  @include sm {
    margin-top: 30px;
  }
}
.result-col__title {
  font-size: 2rem;
  color: $secondAccent;
}
// table
.tariffs-table {
  color: $gray;
  width: 100%;
  border-collapse: collapse;

  @include sm {
    font-size: 0.875rem;
  }
}
.tariffs-table {
  .item:nth-child(2) {
    background-color: $secondAccent;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    // color: #fff;
  }
  tr {
    td {
      @include sm {
        padding: 8px !important;
      }
    }
    td:not(:first-child) {
      text-align: center;
    }
  }

  tr:first-child .item:nth-child(2) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  tr:last-child .item:nth-child(2) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .item {
    padding: 16px;
    &:not(.table-header) {
      border-top: 1px solid #d3d3d33f;
    }
  }
}
.item__markered {
  display: block;
  padding-left: 18px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: url(../assets/icons/arrows2.svg) center no-repeat;
    background-size: contain;
    width: 13px;
    height: 13px;
    left: 0;
    top: 0.25em;
  }
}

.top-section__btn-row {
  margin-top: 30px;
}
.top-section__btn {
  background: $higthAccent;
  text-decoration: none;
  display: block;
  max-width: 320px;
  margin-left: auto;
  // margin-right: -30px;
  padding: 16px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 10px;

  @include sm {
    margin: 0 auto;
    max-width: none;
  }
}

// ranges
</style>
