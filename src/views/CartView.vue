<template>
    <div class="container mt-5 mb-5">
        <div class="mb-5">
            <h1>Cart</h1>
        </div>
        <div v-for="product in items" :key="product.id" class="mb-5">
            <CartItemCard :product="product" />
        </div>
        <div>
            <CartSummaryPaymentCard />
        </div>
    </div>
</template>

<script>
import CartItemCard from '@/components/CartItemCard.vue';
import CartSummaryPaymentCard from '@/components/CartSummaryPaymentCard.vue';

export default {
    name: 'CartView',
    components: {
        CartItemCard,
        CartSummaryPaymentCard
    },
    computed: {
        items() {
            return this.$store.getters.cartItems
        }
    }
}
</script>

<style>

</style>