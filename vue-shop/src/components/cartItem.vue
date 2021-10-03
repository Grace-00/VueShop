<template>
  <div class="item">
    <div class="item-image">
      <img :src="image" alt="item-img" />
    </div>
    <div class="item-text">
      <div class="item-title">
        <h2>{{ title }}</h2>
      </div>
      <div class="item-price">
        <h3>{{ price }}</h3>
      </div>
      <div class="item-description">
        <p>{{ description }}</p>
      </div>
      <div class="item-button">
        <button @click="remove">Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartItem",
  props: ["prodId", "title", 'description', "image", "price", "quantity"],
  inject: ['removeProductFromCart'],
  methods: {
    remove() {
      this.removeProductFromCart(this.prodId);
    }
  }
};
</script>

<style scoped>
.item {
  display: flex;
  text-align: left;
  border: 0.5px solid transparent;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 25px;
  margin: 50px 20px 20px 20px;
}

img {
  height: 200px;
  width: 220px;
}

.item-text {
  margin-left: 10px;
}

.item-price {
  margin: 5px 5px;
}

.item-button {
  margin-top: 10px;
  background-color: transparent;
}

button {
  padding: 10px 10px;
  background-color: #42b983;
  border-radius: 20px;
  width: 200px;
  font-family: "Lato";
  font-size: 1rem;
  font-weight: 700;
  color: white;
  outline-color: transparent;
  cursor: pointer;
  border: none;
}
</style>