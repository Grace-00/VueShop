<template>
  <div class="header__container">
    <div class="header__container-inner">
      <div class="header__content">
        <h3>VueShop</h3>
        <ul>
          <li><a href="#" class="link">Products</a></li>
          <li><a href="#" class="link">Cart</a></li>
          <li><a href="#" class="link">{{cart.quantity}}</a></li>
        </ul>
        <button class="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "theHeader",
  inject: ['isLoggedIn', 'cart',]
};
</script>


<style scoped>

.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 1.7rem;
}

h3 {
  font-size: 2rem;
  font-weight: 700 ;
}

ul {
  list-style-type: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
  font-size: 1.7rem;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: transparent;

}
a:hover {
  text-underline-offset: 0.25em;
  text-decoration-thickness: 3px;
  transition: all 0.3s ease-in-out;
  text-decoration-color: #42b983;
  }

li:nth-child(3) {
  text-decoration: none;
  pointer-events: none;
}

button {
  color: #42b983;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: transparent;
  padding: 8px 24px;
  cursor: pointer;
  border: 2px solid #42b983;
  border-radius: 18px;
}
</style>
