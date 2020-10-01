<template>
  <section-wrap>
    <v-expansion-panels :hover="true">
      <!-- Main Info -->
      <v-expansion-panel>
        <v-expansion-panel-header
          class="space-between v-expansion-panel-header"
          expand-icon="mdi-chevron-down"
          color="#f5f5f5"
          >Описание от {{ name }}</v-expansion-panel-header
        >
        <v-expansion-panel-content>

          <h2 class="title--md s-bold"><a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" :title="`Перейти на сайт ${name}`">{{ name }}</a> - простой сервис моментального кредитования на банковские карты.</h2>

          <h3 class="title--md">Преимущества партнерской программы:</h3>
          <ul class="list">
            <li class="text--md">первый займ под 0%*; </li>
            <li class="text--md">100% онлайн-процесс; </li>
            <li class="text--md">высокий уровень одобрения.</li>
          </ul>

          <h3 class="title--md">Конкурентные преимущества и особенности:</h3>
          <ul class="list">
            <li class="text--md">для новых клиентов – первый займ под 0%*; </li>
            <li class="text--md">предоставляет возможность клиентам получить быстрый кредит до 15 000 гривен со сроком погашения до 30 дней и возможностью пролонгации на 3, 7 и 15 дней; </li>
            <li class="text--md">удобный интерфейс сайта и личного кабинета, кредитный калькулятор и форма онлайн-поддержки - все это создано для комфорта клиентов и еще более быстрого оформления займов.</li>
          </ul>

          <h3 class="title--md">Требования к клиенту:</h3>
          <ul class="list">
            <li class="text--md">оригинал паспорта и идентификационного кода;</li>
            <li class="text--md"> от 18 до 69 лет;</li>
            <li class="text--md">заинтересованность в получении кредита на карту;</li>
            <li class="text--md">проживает в одном из городов, кроме Донецкой, Луганской области и Крыма.</li>
          </ul>

          <p></p>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <!-- Contact Info -->
      <v-expansion-panel>
        <v-expansion-panel-header
          class="space-between"
          expand-icon="mdi-chevron-down"
          color="#f5f5f5"
          >Контакты</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <table>
            <tbody>
            <tr>
              <td>Сайт:</td>
              <td><a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" rel="nofollow">miloan.ua</a></td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>+38&nbsp;044&nbsp;337 36 67</td>
            </tr>
            <tr>
              <td>Условия кредитования:</td>
              <td>на сайте МФО</td>
            </tr>
            <tr>
              <td>Юридический адрес:</td>
              <td>вул. В. Чорновола, 12,&nbsp;01135,&nbsp;Київ</td>
            </tr>
            <tr>
              <td>Время работы:</td>
              <td>Пн-Вс, круглосуточно</td>
            </tr>
            <tr>
              <td>Номер лицензии:</td>
              <td>№2843 від 10.11.2016</td>
            </tr>
            </tbody>
          </table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </section-wrap>
</template>

<script>
import SectionWrap from '@/components/SectionWrap'
export default {
  name: 'Miloan',
  components: {
    SectionWrap
  },
  props: ['name'],
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
