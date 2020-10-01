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
            <li class="text--md">НАДЕЖНО - работаем на рынке микрозаймов 5 лет. Нам доверяют по всей стране! </li>
            <li class="text--md">УДОБНО - самая большая сеть отделений в Украине. </li>
            <li class="text--md">ПРАКТИЧНО - возможность выплатить кредит досрочно или увеличить отсрочку.</li>
            <li class="text--md">БЫСТРО - выдаем деньги всего за 20 минут. Нужен только паспорт и код.</li>
          </ul>

          <h3 class="title--md">Требования к клиенту:</h3>
          <ul class="list">
            <li class="text--md">оригинал паспорта и идентификационного кода;</li>
            <li class="text--md"> от 18 до 60 лет;</li>
            <li class="text--md">должен быть постоянный трудовой доход (официально и неофициально);</li>
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
              <td><a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" rel="nofollow">sgroshi.com.ua</a></td>
            </tr>
            <!-- <tr>
              <td>Телефон:</td>
              <td>+38&nbsp;044&nbsp;337 36 67</td>
            </tr> -->
            <tr>
              <td>Условия кредитования:</td>
              <td>на сайте МФО</td>
            </tr>
            <tr>
              <td>Юридический адрес:</td>
              <td>01032, г. Киев, Шевченковский район, ул. Саксаганского, 133 А </td>
            </tr>
            <tr>
              <td>Время работы:</td>
              <td>Пн-Вс, круглосуточно</td>
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
  name: 'SGroshi',
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
