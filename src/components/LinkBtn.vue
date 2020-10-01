<template>
  <a :href="href" class="btn-link">{{ text }}</a>
</template>

<script>
export default {
  name: 'LinkBtn',
  props: {
    text: {
      type: String,
      default: 'Перейти'
    },
    href: {
      type: String,
      default: '#'
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.btn-link {
  display: block;
  text-decoration: none;
  // width: 160px;
  padding: 15px;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  background: $higthAccent;
  color: #fff;
  border-radius: 10px;
}
</style>
