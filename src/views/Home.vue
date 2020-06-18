<template>
  <main role="main" class="inner cover">
    <CountDown />
  </main>
</template>

<script>
// @ is an alias to /src
import CountDown from '@/components/CountDown.vue'

export default {
  name: 'Home',
  components: {
    CountDown,
  }
}
</script>
<style scoped>

.cover {
  padding: 0 1.5rem;
  margin-top: 10rem;
}

</style>
