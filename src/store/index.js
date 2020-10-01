import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mfo: {
      // ========== Miloan
      Miloan: {
        name: 'Miloan',
        advantages: [
          'первый займ под 0%',
          '100% онлайн-процесс',
          'высокий уровень одобрения'
        ],
        headerInfo: {
          title: 'РЕКОМЕНДУЕМ! Автоматическое рассмотрение'
          // label: 'green'
          // bG: 'linear-gradient(to right, #a0a0f3, #a4bbea, #7ecac4)',
          // color: '#fff'
        },
        logo: '/logos/miloan.svg',
        sum: {
          minsum: 500,
          maxsum_first: 12000,
          maxsum: 15000
        },
        days: {
          mindays: 1,
          maxdays: 30
        },
        fees: {
          first: {
            is0: true,
            dayCommission: 0.01
          },
          other: {
            dayCommission: 1.5
          }
        },
        contact: {
          site: 'https://ad.admitad.com/g/hn6ktpwj7qc0570453233248e03c70/'
        }
      },
      // ========== Швидко Гроші
      SGroshi: {
        name: 'ШвидкоГроші',
        advantages: [
          'первый займ под 0%',
          'Займ можно получить на карту/наличными',
          'высокий уровень одобрения'
        ],
        headerInfo: {
          title: 'Быстрое получение наличных или на карту'
          // label: 'green'
          // bG: 'linear-gradient(to right, #a0a0f3, #a4bbea, #7ecac4)',
          // color: '#fff'
        },
        logo: '/logos/sgroshi.jpg',
        sum: {
          minsum: 400,
          maxsum_first: 10000,
          maxsum: 15000
        },
        days: {
          mindays: 1,
          maxdays: 30
        },
        fees: {
          first: {
            is0: false,
            dayCommission: 2
          },
          other: {
            dayCommission: 2
          }
        },
        contact: {
          site: 'https://ad.admitad.com/g/wplg83nwqdc057045323ce8fd7bb71/'
        }
      }

      // ========== E Groshi
      /* EGroshi: {
        name: 'E Groshi',
        advantages: [
          'первый займ под 0%',
          '100% онлайн-процесс',
          'наивысшая вероятность одобрения'
        ],
        headerInfo: {
          title: '100% онлайн-процесс'
          // label: 'green'
          // bG: 'linear-gradient(to right, #a0a0f3, #a4bbea, #7ecac4)',
          // color: '#fff'
        },
        logo: '/logos/egroshi.png',
        sum: {
          minsum: 100,
          maxsum_first: 7000,
          maxsum: 20000
        },
        days: {
          mindays: 1,
          maxdays: 30
        },
        fees: {
          first: {
            is0: true,
            dayCommission: 0
          },
          other: {
            dayCommission: 1.9
          }
        },
        contact: {
          site: 'https://ad.admitad.com/g/8egqbt4jnbc057045323a6ba44f7f5/'
        }
      }, */

      // ========== MONEYVEO

      /* Moneyveo: {
        name: "Moneyveo",
        advantages: [
          "первый займ под 0.5%",
          "заявка рассматривается системой автоматиески",
          "решение по кредиту до 2-х минут"
        ],
        headerInfo: {
          title: "100% онлайн-процесс"
          // label: 'green'
          // bG: 'linear-gradient(to right, #a0a0f3, #a4bbea, #7ecac4)',
          // color: '#fff'
        },
        logo: "/logos/moneyveo.svg",
        sum: {
          minsum: 100,
          maxsum_first: 17000,
          maxsum: 30000
        },
        days: {
          mindays: 1,
          maxdays: 30
        },
        fees: {
          first: {
            is0: true,
            dayCommission: 0.01
          },
          other: {
            dayCommission: 1.7
          }
        },
        contact: {
          site:
            "https://ad.admitad.com/g/c5a6d342abc0570453233b7d435982/?ulp=https%3A%2F%2Fmoneyveo.ua%2Fru%2Fregisternew%2F"
        }
      }, */

      // ========== KFUA

      /* Kfua: {
        name: 'Kfua',
        advantages: [
          'первый займ под 0.1%',
          'на любую банковскую карту',
          'возможность получить деньги меньше чем за 15 минут'
        ],
        headerInfo: {
          title: 'Автоматическое рассмотрение'
          // label: 'green'
          // bG: 'linear-gradient(to right, #a0a0f3, #a4bbea, #7ecac4)',
          // color: '#fff'
        },
        logo: '/logos/kfua.svg',
        sum: {
          minsum: 500,
          maxsum_first: 5000,
          maxsum: 15000
        },
        days: {
          mindays: 5,
          maxdays: 30
        },
        fees: {
          first: {
            is0: true,
            dayCommission: 0.01
          },
          other: {
            dayCommission: 1.5
          }
        },
        contact: {
          site: 'https://ad.admitad.com/g/8g2qyo8kofc0570453238bb4d842e0/'
        }
      }, */
      /* CreditPlus: {
        name: 'CreditPlus',
        advantages: [
          'первый займ под 0.01%',
          'на банковскую карту',
          'решение по кредиту до 7-ми минут'
        ],
        headerInfo: {
          title: '100% онлайн-процесс'
        },
        logo: '/logos/creditplus.svg',
        sum: {
          minsum: 500,
          maxsum_first: 10000,
          maxsum: 15000
        },
        days: {
          mindays: 3,
          maxdays: 30
        },
        fees: {
          first: {
            is0: true,
            dayCommission: 0.01
          },
          other: {
            dayCommission: 1.9
          }
        },
        contact: {
          site: 'https://ad.admitad.com/g/i5kt6km3hxc0570453233287c13284/'
        }
      } */
      /* Forza: {
        name: 'Forza',
        advantages: [
          'скидка -25% для новых клиентов',
          'на банковскую карту',
          'решение по кредиту до 15-ми минут'
        ],
        headerInfo: {
          title: '100% онлайн-процесс'
        },
        logo: '/logos/forza.png',
        sum: {
          minsum: 1000,
          maxsum_first: 4000,
          maxsum: 10000
        },
        days: {
          mindays: 5,
          maxdays: 15
        },
        fees: {
          first: {
            dayCommission: 1.5
          },
          other: {
            dayCommission: 2
          }
        },
        contact: {
          site: 'https://forzacredit.com.ua/'
        }
      },
      VashaGotivochka: {
        name: 'VashaGotivochka',
        advantages: [
          'кредит оформляется онлайн без личного присутствия',
          'не просят у клиента телефон родственника',
          'не просят у клиента фото с паспортом или банковской картой',
          'не просят у клиента ксерокопию документов или фото документов',
          'не просят у клиента справку о доходах'
        ],
        headerInfo: {
          title: '100% онлайн-процесс'
        },
        logo: '/logos/vasha_gotivochka.svg',
        sum: {
          minsum: 200,
          maxsum_first: 9000,
          maxsum: 9000
        },
        days: {
          mindays: 1,
          maxdays: 16
        },
        fees: {
          first: {
            dayCommission: 2
          },
          other: {
            dayCommission: 2
          }
        },
        contact: {
          site: 'https://vashagotivochka.ua/'
        }
      } */
    }
  },
  getters: {
    formatNum: state => value => {
      return new Intl.NumberFormat('ru-RU', {
        // currency: 'uah',
        style: 'decimal'
      }).format(value)
    },
    filterMinMax: state => (filtersList, values) => {
      const filteredObj = {}

      for (const key in state.mfo) {
        let isOk
        const mfo = state.mfo[key]

        for (let k = 0; filtersList.length > k; k++) {
          if (
            values[filtersList[k]] >=
              mfo[filtersList[k]][`min${filtersList[k]}`] &&
            values[filtersList[k]] <=
              mfo[filtersList[k]][`max${filtersList[k]}`]
          ) {
            isOk = true
          } else {
            isOk = false
            break
          }
        }
        if (isOk) {
          filteredObj[key] = mfo
        }
      }

      return filteredObj
    }
  },
  mutations: {},
  actions: {
    scrollTo (state, { e }) {
      const id = e.currentTarget.getAttribute('href')
      const scrollToEl = document.querySelector(id)
      if (!scrollToEl) return
      window.scrollTo({
        top: scrollToEl.getBoundingClientRect().top + window.pageYOffset,
        behavior: 'smooth'
      })
    },
    sendGtag ({ commit, state }, label) {
      window.gtag('event', 'go_to_partner_link', {
        event_category: 'PartersLink',
        event_label: label,
        value: 1
      })

      window.gtag('event', 'conversion', {
        send_to: 'AW-627606314/OTx1CP7dnNIBEKqGoqsC',
        description: label,
        name: label,
        event_callback () {
          window.open(state.mfo[label].contact.site, '_blank')
        }
      })
    }
  },
  modules: {}
})
