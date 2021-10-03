<template>
  <div class="app">
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import theHeader from "./components/theHeader.vue";

export default {
  components: {
    theHeader,
  },
  data() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Food Box",
          description:
            "May be partially expired when it arrives but at least it is cheap!",
          price: 6.99,
        },
      ],
      cart: { items: [], total: 0, quantity: 0 },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      products: this.products,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
    };
  },
  methods: {
    addProductToCart(productData) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.cart.items[productInCartIndex].quantity++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          description: productData.description,
          price: productData.price,
          quantity: 1,
        };
        this.cart.items.push(newItem);
      }
      this.cart.quantity++;
      this.cart.total += productData.price;
    },
    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.cart.items[productInCartIndex];
      this.cart.items.splice(productInCartIndex, 1);
      this.cart.quantity -= prodData.quantity;
      this.cart.total -= prodData.price * prodData.quantity;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;700&family=Lato:wght@300;400;700&family=Spartan:wght@700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
