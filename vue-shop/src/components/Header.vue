<template>
  <div class="header__container">
    <div class="header__container-inner">
      <div class="header__content">
        <h3>VueShop</h3>
        <ul>
          <li><a href="#" class="link">Products</a></li>
          <li><a href="#" class="link">Cart</a></li>
        </ul>
        <a class="login">  Login</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",

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
  padding: 0;
}
li {
  display: inline-block;
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
  cursor: pointer;
  text-decoration-color: #42b983;
}

.login {
  color: #42b983;
  font-size: 1.2rem;
  padding: 8px 24px;

  border: 2px solid #42b983;
  border-radius: 18px;
}
</style>
