<template>
  <div class="cart">
    <h2>Your cart</h2>
    <h3>Total Amount: {{ cart.total.toFixed(2) }}</h3>
    <cart-item
      v-for="item in cart.items"
      :key="item.productId"
      :prod-id="item.productId"
      :title="item.title"
      :description="item.description"
      :image="item.image"
      :price="item.price"
      :quantity="item.quantity"
    ></cart-item>
  </div>
</template>

<script>
import cartItem from "./cartItem.vue";
export default {
  inject: ["cart"],
  components: {
    cartItem,
  },
};
</script>

<style scoped>
.cart {
  margin: 0 auto;
  width: 100%;
  padding-top: 80px;
  text-align: center;
}

h2 {
  margin: 10px 100px 50px 100px;
}

h2::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgba(216, 216, 216, 1);
  margin-top: 50px;
}
</style>