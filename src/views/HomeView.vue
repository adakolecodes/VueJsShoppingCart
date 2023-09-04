<template>
  <div class="container mt-5 mb-5">
    <div class="mb-5">
      <h1>Products</h1>
      <hr>
    </div>
    <div>
      <ProductDescriptionDrawer :product="product" />
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div class="col" v-for="product in items" :key="product.id">
        <ProductSummaryCard :product="product" @view-product="viewProduct($event)" />
        <!-- @click="viewProduct(product)" or v-on:view-product="viewProduct(product)" or @view-product="viewProduct(product)". @click: This is a shorthand for the v-on:click -->
      </div>
    </div>
  </div>
</template>

<script>
import items from '../data/items.js'
import ProductSummaryCard from '../components/ProductSummaryCard.vue'
import 'bootstrap/dist/js/bootstrap.bundle'
import ProductDescriptionDrawer from '../components/ProductDescriptionDrawer.vue'

export default {
  name: 'HomeView',
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer
  },
  data() {
    return {
      items: items,
      product: {
        id: 1,
        name: 'Comfy Slippers',
        price: 12.99,
        category: 'Footwear',
        description: "Experience the ultimate comfort with our Comfy Slippers. Made with premium materials, these slippers provide excellent support and cushioning for your feet. Perfect for lounging around the house or a quick trip outside."
      },
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.openOffcanvas()
      console.log(this.product)
    },
    openOffcanvas() {
      document.getElementById('productDrawer').classList.add('show');
    }
  }
}
</script>
