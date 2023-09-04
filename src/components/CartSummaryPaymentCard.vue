<template>
    <div>
        <div class="card" v-if="cart_total">
            <div class="card-header">
                <h6>Cart Total</h6>
            </div>
            <div class="card-body">
                <h5 class="card-title">${{ cart_total.toFixed(2) }}</h5>
                <p class="card-text">Proceed to checkout and make payment.</p>
                <button class="btn btn-dark">Checkout</button>
            </div>
        </div>
        <div class="card" v-else>
            <div class="card-header">
                <h6>Cart</h6>
            </div>
            <div class="card-body">
                <p class="card-text">Your cart is empty.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CartSummaryPaymentCardComponent',
    computed: {
        cart_total() {
            return this.$store.getters.cartTotal
        }
    }
}
</script>

<style>

</style>