<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { mapGetters } from 'vuex';



</script>

<template>

<div class="main">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Project</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <RouterLink class="nav-item"  tag="li" to="/">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </RouterLink>
        <RouterLink class="nav-item" tag="li" to="/about" >
          <a class="nav-link" href="#">Haqqinda</a>
        </RouterLink>
       <RouterLink class="nav-item" tag="li" to="/add"  >
          <a class="nav-link" href="#">Add</a>
        </RouterLink>

        <RouterLink class="nav-item" tag="li" to="/login" v-if="!pollToken" >
          <a class="nav-link" href="#">Login</a>
        </RouterLink>

         <li v-if="pollToken" @click="cixis">
                <a class="nav-link">Logout</a>
                </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kateqoriya
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Apple</a></li>
            <li><a class="dropdown-item" href="#">Mac</a></li>
            <li><a class="dropdown-item" href="#">Ipad</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<RouterView/>
</div>

</template>





<script>
export default {
  
  created(){
   this.$store.commit('localdanGetir');
   this.$store.dispatch('BringReal');
  },

  computed:{
    ...mapGetters(['pollToken'])
  },

  methods:{
    cixis(){
      this.$store.dispatch('CixisData')
    }
  }


}
</script>

















<style>

body {
    background-color: #eee;
    text-align: center;
    /* padding-top: 50px; */
}



.nav {
    display: block;
    font: 13px Helvetica, Tahoma, serif;
    text-transform: uppercase;
    margin: 0; 
    padding: 0;
}

.nav li {
    display: inline-block;
    list-style: none;
}

.nav .button-dropdown {
    position: relative;
}

a{
  text-decoration: none !important;
}

.nav li a {
    display: block;
    color: #333;
    background-color: #fff;
    padding: 10px 20px;
    text-decoration: none;
}

.nav li a span {
    display: inline-block;
    margin-left: 5px;
    font-size: 10px;
    color: #999;
}

.nav li a:hover, .nav li a.dropdown-toggle.active {
    background-color: #289dcc;
    color: #fff;
}

.nav li a:hover span, .nav li a.dropdown-toggle.active span {
    color: #fff;
}

.nav li .dropdown-menu {
    display: none;
    position: absolute;
    left: 0;
    padding: 0;
    margin: 0;
    margin-top: 3px;
    text-align: left;
}

.nav li .dropdown-menu.active {
    display: block;
}

.nav li .dropdown-menu a {
    width: 150px;
}

</style>
