<template>


  <div class="addvue">
    <div class="container">
     <form action="" @submit.prevent="sendADD" >
          <div class="input-group mb-3 ">
        <label class="input-group-text" for="inputGroupSelect01">Kateqoriya</label>
        <select class="form-select" id="inputGroupSelect01">
          <option selected disabled>Sec</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="inputGroup">
           <input type="text"  v-model="mehsulData.Name"  placeholder="Mehsul adi" class="form-control">
            <input type="text"  v-model="mehsulData.Price"  placeholder="Mehsul qiymeti" class="form-control">
             <input type="text"  v-model="mehsulData.About"  placeholder="Mehsul haqqinda" class="form-control">
             <button type="submit" class=" btn btn-warning  form-control">Gonder</button>
      </div>
    </form>
    </div>
  </div>
</template>




<script>

export default{
    data(){
        return{

            mehsulData:{
                Name : "",
                Price :null,
                About : " "
            }




        }
    },

    methods:{
        sendADD(){
            this.$store.dispatch('SendReal', this.mehsulData)
            //  this.$store.dispatch('SendReall', this.mehsulData)
console.log('option.value');
        }
    }
}





</script>








<style scoped>
.addvue {
  height: 100vh;
  background-color: #eee;
}

.input-group{
    padding-top: 20px;
    width: 400px;
    margin: auto;
    margin-bottom: 5px  !important;
}

.inputGroup{
    width: 400px;
    margin: auto;

}

.form-control{
    margin-bottom: 5px;
}

</style>


