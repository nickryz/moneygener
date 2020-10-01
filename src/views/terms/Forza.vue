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

          <h2 class="title--md s-bold"><a href="#" :title="`Перейти на сайт ${name}`">{{ name }}</a> - сервис простого онлайн-кредитования. Получение кредита не выходя из дома или работы прямо на банковскую карточку.</h2>

          <h3 class="title--md">Конкурентные преимущества и особенности:</h3>
          <ul class="list">
            <li class="text--md">заполнение заявки онлайн;</li>
            <li class="text--md">оперативное принятие решения;</li>
            <li class="text--md">прозрачность (нет скрытых комиссий);</li>
            <li class="text--md">без залога или поручителей</li>
          </ul>

          <h3 class="title--md">Требования к клиенту:</h3>
          <ul class="list">
            <li class="text--md">граждане Украины;</li>
            <li class="text--md">возраст от 18 до 65 лет;</li>
            <li class="text--md">документы: украинский паспорт (хоть бумажный, хоть ID), ИНН;</li>
            <li class="text--md">наличие стабильного источника дохода (справку с места работы приносить не надо);</li>
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
              <td><a :href="$store.state.mfo[`${name}`].contact.site" rel="nofollow">forzacredit.com.ua</a></td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>0 (800) 300770</td>
            </tr>
            <tr>
              <td>Условия кредитования:</td>
              <td>на сайте МФО</td>
            </tr>
            <tr>
              <td>Юридический адрес:</td>
              <td>г.Киев, ул. В.Хвойки, д.15/15</td>
            </tr>
            <tr>
              <td>Время работы службы поддержки:</td>
              <td>Пн-Вс круглосуточно</td>
            </tr>
            <tr>
              <td>Номер лицензии:</td>
              <td>№559 від 13.04.2018</td>
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
  name: 'Forza',
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
