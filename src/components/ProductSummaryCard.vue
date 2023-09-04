<template>
    <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <h5 class="card-title">${{ product.price.toFixed(2) }}</h5>
            <p class="card-text">{{ description }}</p>
            <p class="card-text text-muted">{{ product.category }}</p>
            <button class="btn btn-secondary btn-sm" @click="$emit('view-product', product)">View Product</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductSummaryCardComponent',
    props: ['product'],
    computed: {
        description() {
            return this.product.description.substring(0, 150) + '...';
        }
    }
}
</script>

<style>

</style>