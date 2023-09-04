<template>
    <div>
        <ol class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold"><h4>{{ product.name }}</h4></div>
                ${{ product.price }}
                <p><strong>Total Cost:</strong> {{ item_cost.toFixed(2) }}</p>
                <p>{{ description }}</p>
                </div>
                <span class="badge bg-primary rounded-pill">{{ product.quantity }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'CartItemCardComponent',
    props: ['product'],
    computed: {
        description() {
            return this.product.description.substring(0, 150) + '...';
        },
        item_cost() {
            return this.product.price * this.product.quantity
        }
    }
}
</script>

<style scoped>

</style>