<template>
	<header class="header min-header">
		<nav class="navbar navbar-expand-lg header-nav">
			<div class="navbar-header">
				<a id="mobile_btn" href="javascript:void(0);">
					<span class="bar-icon">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</a>
				<a href="" class="navbar-brand logo">
					<img src="assets/logo.png" class="img-fluid" alt="Logo" height="15%" width="14%">
				</a>
			</div>
			<div class="main-menu-wrapper">
				<div class="menu-header">
					<a href="index.html" class="menu-logo">
						<img src="assets/logo.png" class="img-fluid" alt="Logo" >
					</a>
					<a id="menu_close" class="menu-close" href="javascript:void(0);">
						<i class="fas fa-times"></i>
					</a>
				</div>
				<ul class="main-nav">
					<li :class="{ active: routeName == 'Home'}">
						<router-link :to="{name:'Home'}">HOME {{name}}</router-link>
					</li>
					<li :class="{ active: routeName == 'BraiderList'}">
						<router-link :to="{name:'BraiderList'}">Find A Stylist</router-link>
					</li>
					<li :class="{ active: routeName == 'BusinessRegister'}" v-if="loginedUser == ''">
						<router-link :to="{name:'BusinessRegister'}">Register My Business</router-link>
					</li>
					<li :class="{ active: (routeName == 'Dashboard' || routeName == 'TheraphistDashboard') }" v-if="loginedUser != ''">
						<router-link :to="{name: loginedUser == 'customer'?'Dashboard':'TheraphistDashboard'}">Dashboard</router-link>
					</li>
					
				</ul>
			</div>
			<ul class="nav header-navbar-rht">
				<li>
					<router-link :to="{name:loginedUser == ''?'Login':(loginedUser == 'customer'?'Dashboard':'TheraphistDashboard')}" class="login-btn"><i class="fa fa-user login-action"></i>
					{{loginedUser?'Welcome '+loginedUser:'Login / Signup'}}  </router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>
<script>
export default {
	name: 'Menu',
	computed: {
		routeName(){
			return this.$route.name;
		},
		loginedUser(){
			return localStorage.getItem('user');
		}
	}
}
</script>