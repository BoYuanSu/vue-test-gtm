<template>
  <div class="product-list">
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }}
        <br />
        <button
          :disabled="!product.inventory"
          :gtm-product="product.title"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
    <router-link tag="button" to="/shoppint-cart">cart</router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  metaInfo: {
    title: 'product'
  },
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
