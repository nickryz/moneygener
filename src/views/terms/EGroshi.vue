<template>
  <section-wrap>
    <v-expansion-panels :hover="true">
      <!-- Main Info -->
      <v-expansion-panel>
        <v-expansion-panel-header
          class="space-between v-expansion-panel-header"
          expand-icon="mdi-chevron-down"
          color="#f5f5f5"
          >Описание от {{ $store.state.mfo[`${name}`].name }}</v-expansion-panel-header
        >
        <v-expansion-panel-content>

          <h2 class="title--md s-bold"><a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" :title="`Перейти на сайт ${$store.state.mfo[`${name}`].name}`">{{ $store.state.mfo[`${name}`].name }}</a> - сервис простого онлайн-кредитования. Получение кредита не выходя из дома или работы прямо на банковскую карточку. Компания является частью международной группы с опытом успешной работы в различных странах Европы.</h2>

          <h3 class="title--md">Конкурентные преимущества и особенности:</h3>
          <ul class="list">
            <li class="text--md">cамые выгодные условия — первый кредит до 7 000 грн;</li>
            <li class="text--md">96% — наивысшая вероятность одобрения заявки на получение кредита;</li>
            <li class="text--md">решение принимается до 5 минут и зачисление средств на банковскую карту в течение 5 минут;</li>
            <li class="text--md">вы платите ту сумму, которую видите на экране, без скрытых переплат и комиссий, без справок о доходах, залогов и поручителей;</li>
            <li class="text--md">всегда и полностью онлайн — сервис работает 24/7 без перерывов, выходных и праздничных дней;</li>
            <li class="text--md">удобный и простой интерфейс Личного кабинета позволяет легко отправить заявку и быстро получить нужную сумму.</li>
          </ul>

          <h3 class="title--md">Требования к клиенту:</h3>
          <ul class="list">
            <li class="text--md">граждане Украины;</li>
            <li class="text--md">возраст от 18 лет;</li>
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
                    rel="nofollow">e-groshi.com
                </a>
              </td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>0 800 300 330</td>
            </tr>
            <tr>
              <td>Условия кредитования:</td>
              <td>на сайте МФО</td>
            </tr>
            <tr>
              <td>Юридический адрес:</td>
              <td>г. Днепр, проспект Богдана Хмельницкого, дом.180, офис 211</td>
            </tr>
            <tr>
              <td>Время работы службы поддержки:</td>
              <td>Пн-ВС, круглосуточно</td>
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
  name: 'EGroshi',
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
