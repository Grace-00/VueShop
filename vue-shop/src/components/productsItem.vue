<template>
  <div class="product">
    <div class="product-image">
      <img :src="prdt.image" alt="product-img" />
    </div>
    <div class="product-text">
      <div class="product-title">
        <h2>{{ prdt.title }}</h2>
      </div>
      <div class="product-price">
        <h3>{{ prdt.price }}</h3>
      </div>
      <div class="product-description">
        <p>{{ prdt.description }}</p>
      </div>
      <div class="product-button">
        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsItem",
  inject: ['addProductToCart'],
  props: {
    prdt: {
      type: Object,
    },
  },
  methods: {
    addToCart() {
      this.addProductToCart({
        id: this.prdt.id,
        image: this.prdt.image,
        title: this.prdt.title,
        description: this.prdt.description,
        price: this.prdt.price,
      });
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  border: 0.5px solid transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 25px;
  margin: 20px;
}

img {
  height: 200px;
  width: 220px;
}

.product-text {
  margin-left: 10px;
}

.product-price {
  margin: 5px 5px;
}

.product-button {
  margin-top: 10px;
  background-color: transparent;
}

button {
  padding: 10px 10px;
  background-color: #42b983;
  border-radius: 20px;
  width: 120px;
  font-family: "Lato";
  font-size: 1rem;
  font-weight: 700;
  color: white;
  outline-color: transparent;
  cursor: pointer;
  border: none;
}
</style>