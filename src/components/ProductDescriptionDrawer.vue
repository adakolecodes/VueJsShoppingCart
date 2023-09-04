<template>
    <div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="productDrawer" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Product</h5>
            <button @click="closeOffcanvas" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div v-if="product">
              <h3>{{ product.name }}</h3>
              <h5>${{ product.price.toFixed(2) }}</h5>
              <p>{{ product.description }}</p>
            </div>

            <div v-if="product_total">
              <hr>
              <h4>In Cart</h4>
              <h5>{{ product_total }}</h5>
            </div>

            <div>
              <button class="btn btn-secondary btn-sm" @click="removeFromCart()" style="margin-right: 5px;">Remove</button>
              <button class="btn btn-dark btn-sm" @click="addToCart()">Add to Cart</button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDescriptionDrawerComponent',
    props: ['product'],
    computed: {
        product_total() {
            return this.$store.getters.productQuantity(this.product)
        }
    },
    methods: {
      closeOffcanvas() {
        // Close the Offcanvas when the close button is clicked
        document.getElementById('productDrawer').classList.remove('show');
      },
      addToCart() {
        this.$store.commit('addToCart', this.product);
      },
      removeFromCart() {
        this.$store.commit('removeFromCart', this.product);
      }
  }
}
</script>

<style>

</style>