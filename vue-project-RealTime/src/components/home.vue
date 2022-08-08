<script setup>
import { mapGetters } from "vuex";
</script>




<template>
  <div class="homevue">
    <div class="container">
      <div class="card" v-for="product in RealDataGo" :key="product">
        <div class="face face1">
          <div class="content">
            <img src="../assets/aplle.jpeg" />
            <h3>Design</h3>
          </div>
        </div>

       






        
            <div class="face face2">
              <div class="content">
                <h1>Ad: {{ product.Name }}</h1>
                <h2>Qiymet: {{ product.Price }}</h2>
                <h2>Haqqinda: {{ product.About }}</h2>
                <h2>ID: {{ product.key }}</h2>
              </div>
            </div>

            
      








      </div>
      <!-- <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true">
                    <h3>Code</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true">
                    <h3>Launch</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        <a href="#">Read More</a>
                </div>
            </div>
        </div> -->
    </div>
  </div>
</template>



<script>
export default {
//   created() {
//     this.$store.commit("localdanGetir");
//     this.$store.dispatch("BringReal");
//   },
  computed: {
    ...mapGetters(["RealDataGo"]),
  },
};
</script>





<style scoped>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: consolas;
}

.homevue {
  /* height: 100vh; */
  background-color: #d3d3d3;
  padding-top: 50px;
}
td{
        /* display: flex; */
    /* flex-wrap: wrap; */
    margin-top: 20px;

}

.container {
  width: 1000px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}

.container .card {
  position: relative;
  cursor: pointer;
}

.container .card .face {
  /* width: 300px; */
  height: 200px;
  transition: 0.5s;
}

.container .card .face.face1 {
  position: relative;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transform: translateY(100px);
}

.container .card:hover .face.face1 {
  background: #ff0057;
  transform: translateY(0);
}

.container .card .face.face1 .content {
  opacity: 0.2;
  transition: 0.5s;
}

.container .card:hover .face.face1 .content {
  opacity: 1;
}

.container .card .face.face1 .content img {
  max-width: 100px;
}

.container .card .face.face1 .content h3 {
  margin: 10px 0 0;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 1.5em;
}

.container .card .face.face2 {
  position: relative;
  background: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
  /* margin-left: 20px; */
  box-sizing: border-box;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  transform: translateY(-100px);
}

.container .card:hover .face.face2 {
  transform: translateY(0);
}

.container .card .face.face2 .content p {
  margin: 0;
  padding: 0;
}

.container .card .face.face2 .content a {
  margin: 15px 0 0;
  display: inline-block;
  text-decoration: none;
  font-weight: 900;
  color: #333;
  padding: 5px;
  border: 1px solid #333;
}

.container .card .face.face2 .content a:hover {
  background: #333;
  color: #fff;
}

.content h1,
h2 {
  text-align: left;
  font-size: 15px;
}
</style>