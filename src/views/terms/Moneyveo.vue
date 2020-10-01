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

          <h2 class="title--md s-bold"><a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" :title="`Перейти на сайт ${name}`">{{ name }}</a> - сервис онлайн-кредитования в Украине №1.</h2>

          <p class="text--md">У {{ name }} вы сможете получить быстрый онлайн-кредит на банковскую карту. При этом вам не будут звонить операторы, от вас не потребуется справка о доходах и данные поручителей.</p>

          <h3 class="title--md">Преимущества</h3>
          <ul class="list">
            <li class="text--md"><b>Высокая скорость обслуживания.</b> Получить онлайн-кредит можно за 8 минут!</li>
            <li class="text--md"><b>Надежность.</b> Все персональные данные клиентов надежно защищены новейшим программным обеспечением. Мы соответствуем международным стандартам безопасности данных платежных карт PCI DSS Level 1 и имеем соответствующие сертификаты.</li>
            <li class="text--md"><b>Простота.</b> Процедура получения денег в сервисе удобная и понятная: вы заполняете анкету и отправляете заявку. Система рассматривает ее автоматически.</li>
            <li class="text--md"><b>Доступность.</b> Мы выдаем кредиты заемщикам без официальной работы, студентам, пенсионерам и даже клиентам с неидеальной кредитной историей.</li>
            <li class="text--md"><b>Минимум документов.</b> Для получения кредита вам понадобится лишь банковская карта, паспорт и ИНН.</li>
            <li class="text--md"><b>Прозрачность.</b> Процентная ставка по кредитам указывается сразу в заявке — и она неизменна. У нас нет скрытых платежей и дополнительных комиссий.</li>
          </ul>
          <h3 class="title--md">Почему Moneyveo</h3>
          <ul class="list">
            <li class="text--md"><b>Быстрая обработка заявки.</b> Решение по кредиту занимает не более 2-х минут.</li>
            <li class="text--md"><b>Нет поручителей.</b> Мы полностью доверяем вам. Поэтому не требуем привлекать поручителей.</li>
            <li class="text--md"><b>Продление и льготный период.</b> Мы поможем вам избежать просрочки по кредиту.</li>
            <li class="text--md"><b>Снижена процентная ставка. </b> Первый кредит вы сможете взять под 0,5%.</li>
            <li class="text--md"><b>Нет привязки ко времени.</b> Наша система работает 24/7. Вы в любой момент сможете оформить кредит.</li>
            <li class="text--md"><b>Без справки о доходах.</b> Мы не требуем у вас никакой информации о ваших доходах.</li>
          </ul>
          <!-- <h3 class="title--md">Преимущества партнерской программы:</h3>

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
          </ul> -->

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
              <td><a :href="$store.state.mfo[`${name}`].contact.site" @click.prevent="$store.dispatch('sendGtag', `${name}`)" rel="nofollow">moneyveo.ua</a></td>
            </tr>
            <tr>
              <td>Телефон:</td>
              <td>0 800 21 9393</td>
            </tr>
            <tr>
              <td>Условия кредитования:</td>
              <td>на сайте МФО</td>
            </tr>
            <tr>
              <td>Юридический адрес:</td>
              <td>01015, г. Киев, улица Лейпцигская, дом 15 Б, первый этаж</td>
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
  name: 'Moneyveo',
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
