<template>
  {{ msg }}
</template>

<script>
import { get } from '@/util'

export default {
  name: 'App',
  data() {
    return {
      msg: 'testing...',
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      get('/test', data => {
        this.msg = data
      }, reason => {
        this.msg = `error: ${reason}`
      })
    },
  },
}
</script>
