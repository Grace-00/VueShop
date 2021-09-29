<template>
  <section>
    <products-item
      v-for="product in products"
      :prdt="product"
      :key="product.id"
    ></products-item>
  </section>
</template>

<script>
import productsItem from "./productsItem.vue";
export default {
  name: "productsList",
  inject: ["products"],
  components: {
    productsItem,
  },
};
</script>