<template>
	
<div>

<div class="signin">
	<form action="" @submit.prevent="send" >
		<h1>{{user.Show == true ? "SIGN IN" : 'SIGN UP' }}</h1>
		<input type="email" placeholder="email daxil edin" class="form-control" v-model="user.email"  >
		<input type="password" placeholder="password daxil edin" class="form-control" v-model="user.password"  >
		<a href="#" @click="user.Show = !user.Show">Qeydiyyatiniz var?</a>
		<button class="btn btn-success form-control"  :class="  {'btn-danger' :!user.Show} " > 
			{{user.Show == true ? "Giris edin" : ' Qeydiyyatdan kecin' }}
			
		</button>

	</form>

</div>
	
</div>

</template>




<script>
export default {
	data(){
		return{
			user:{
				email : " ",
				password :null,
				Show:false

			},
			
		}
	},

	methods:{
	send(){
    this.$store.dispatch('sendData', this.user)
  }
	}
}
</script>






<style scoped>
.signin{
	display: flex;
    justify-content: center;
	margin: auto;
	background-color: #d3d3d3;
	height: 100vh;
}


.signin h1{
text-align: center;
color: rgb(14, 11, 11);
}
.signin form{
	width: 300px;
	height: 400px;
	background-color: transparent;
	padding: 15px;
	margin-top: 110px;
}
.signin input{
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
}

.signin button{
	/* display: flex;
	justify-content: center;
	align-items: center; */
	margin-top: 20px;
}

.signin a{
    display: block;
	color: rgb(0, 0, 0);
	text-align: center;
	text-decoration: none;
	margin-top: 10px;

}
</style>