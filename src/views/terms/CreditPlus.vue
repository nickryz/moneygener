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

          <h2 class="title--md s-bold">
            <a :href="$store.state.mfo[`${name}`].contact.site"
              @click.prevent="$store.dispatch('sendGtag', `${name}`)"
              :title="`Перейти на сайт ${name}`">{{ name }}
            </a> - сервис простого онлайн-кредитования. Получение кредита не выходя из дома или работы прямо на банковскую карточку. Компания является частью международной группы с опытом успешной работы в различных странах Европы.</h2>

          <h3 class="title--md">Конкурентные преимущества и особенности:</h3>
          <ul class="list">
            <li class="text--md">кредит можно оформить не выходя из дома или работы прямо на банковскую карту;</li>
            <li class="text--md">обработка заявок на кредит - круглосуточно, без выходных;</li>
            <li class="text--md">первый кредит до 10 000 грн со ставкой 0,01%;</li>
            <li class="text--md">повторный кредит до 12 000 грн со ставкой 1,8%</li>
            <li class="text--md">время рассмотрения заявки – до 7 минут</li>
            <li class="text--md">прозрачные условия получения кредита</li>
            <li class="text--md">без справки о доходах</li>
            <li class="text--md">без поручителей</li>
            <li class="text--md">удобный интерфейс сайта</li>
          </ul>

          <h3 class="title--md">Требования к клиенту:</h3>
          <ul class="list">
            <li class="text--md">граждане Украины;</li>
            <li class="text--md">возраст от 18 до 55 лет;</li>
            <li class="text--md">наличие банковской карты (для перечисления кредитных средств) и мобильного телефона;</li>
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
              <td>
                <a :href="$store.state.mfo[`${name}`].contact.site"
                    @click.prevent="$store.dispatch('sendGtag', `${name}`)"
                    rel="nofollow">creditplus.ua
                </a>
              </td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>0 (800) 753-363</td>
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
              <td>Время работы службы поддержки:</td>
              <td>Пн-Пт c 8:00 до 23:00, СБ-ВС с 9:00 до 21:00</td>
            </tr>
            <tr>
              <td>Номер лицензии:</td>
              <td>№1860 від 24.09.2019, №756 від 28.02.2017</td>
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
  name: 'CreditPlus',
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
