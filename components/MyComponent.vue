<template>
  <div>MyComponent.vue</div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from '@nuxtjs/composition-api'
  import { useStore } from '~/store'

  export default defineComponent({
    name: 'MyComponent',
    setup() {
      const store = useStore()

      onMounted(() => {
        if (store.state.shop.cart.isComplete) {
          // Execute some code
        }
      })
    },
  })
  </script>