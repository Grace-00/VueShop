<template>
  <div class="cart">
    <h2>Your cart</h2>
    <h3>Total Amount: {{ cart.total }}</h3>
  </div>
</template>

<script>
export default {
  inject: ["cart"],
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