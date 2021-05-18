<template>
  <div class="product-list">
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }}
        <br />
        <button
          :disabled="!product.inventory"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>

<style lang="scss">
.product-list {
}
</style>
