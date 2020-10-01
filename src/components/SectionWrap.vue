<template>
  <section class="section">
    <div class="my-container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionWrap'
}
</script>

<style lang="scss">
.section {
  padding: 30px 0;
}
</style>
