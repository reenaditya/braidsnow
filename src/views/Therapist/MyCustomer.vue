<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">My Customer</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> My Customer</h2>
				</div>
				
			</div>
		</div>
	</div>
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">

					<div class="profile-sidebar">
						<div class="widget-profile pro-widget-content">
							<div class="profile-info-widget">
								<a href="#" class="booking-pro-img">
								<img src="assets/img/theraphist/theraphist-thumb-01.jpg" alt="User Image">
								</a>
								<div class="profile-det-info">
									<h3>Ashley Willes</h3>
									<div class="customer-details">
										<h5 class="mb-0">Hair Stylist, Theraphist</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="dashboard-widget">
							<nav class="dashboard-menu">
								<ul>
									<li>
										<router-link :to="{name:'TheraphistDashboard'}">
											<i class="fas fa-columns"></i>
											<span>Dashboard</span>
										</router-link>
										
									</li>
									<li>
										<router-link :to="{name:'Appointments'}">
											<i class="fas fa-calendar-check"></i>
											<span>Appointments</span>
										</router-link>
									</li>
									<li class="active">
										<router-link :to="{name:'MyCustomer'}">
										<i class="fas fa-user-injured"></i>
										<span>My customers</span>
										</router-link>
									
									</li>
									<li>
									<a href="schedule-timings.html">
									<i class="fas fa-hourglass-start"></i>
									<span>Schedule Timings</span>
									</a>
									</li>
									<li>
									<a href="invoices.html">
									<i class="fas fa-file-invoice"></i>
									<span>Invoices</span>
									</a>
									</li>
									<li>
									<a href="reviews.html">
									<i class="fas fa-star"></i>
									<span>Reviews</span>
									</a>
									</li>
									<li>
									<a href="chat-theraphist.html">
									<i class="fas fa-comments"></i>
									<span>Message</span>
									<small class="unread-msg">23</small>
									</a>
									</li>
									<li>
									<a href="theraphist-profile-settings.html">
									<i class="fas fa-user-cog"></i>
									<span>Profile Settings</span>
									</a>
									</li>
									<li>
									<a href="social-media.html">
									<i class="fas fa-share-alt"></i>
									<span>Social Media</span>
									</a>
									</li>
									<li>
										<a href="javascript:;" @click="onLogout">
											<i class="fas fa-sign-out-alt"></i>
											<span>Logout</span>
										</a>
									</li>
									<li>
										<router-link :to="{name:'Home'}">
											<i class="fas fa-sign-out-alt"></i>
											<span>Logout</span>
										</router-link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="row row-grid" v-for="i in 3" :key="i">
						<div class="col-md-6 col-lg-4 col-xl-3">
							<div class="card widget-profile pat-widget-profile">
								<div class="card-body">
									<div class="pro-widget-content">
										<div class="profile-info-widget">
											<a href="customer-profile.html" class="booking-pro-img">
											<img src="assets/img/customers/customer.jpg" alt="User Image">
											</a>
											<div class="profile-det-info">
												<h3><a href="customer-profile.html">Richard Wilson</a></h3>
												<div class="customer-details">
													<h5><b>Customer ID :</b> P0016</h5>
													<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Alabama, USA</h5>
												</div>
											</div>
										</div>
									</div>
									<div class="customer-info">
										<ul>
										<li>Phone <span>+1 952 001 8563</span></li>
										<li>Age <span>38 Years, Male</span></li>
										<li>Blood Group <span>AB+</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-3">
							<div class="card widget-profile pat-widget-profile">
								<div class="card-body">
									<div class="pro-widget-content">
										<div class="profile-info-widget">
											<a href="customer-profile.html" class="booking-pro-img">
											<img src="assets/img/customers/customer1.jpg" alt="User Image">
											</a>
											<div class="profile-det-info">
												<h3><a href="customer-profile.html">Charlene Reed</a></h3>
												<div class="customer-details">
													<h5><b>Customer ID :</b> P0001</h5>
													<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> North Carolina, USA</h5>
												</div>
											</div>
										</div>
									</div>
									<div class="customer-info">
										<ul>
										<li>Phone <span>+1 828 632 9170</span></li>
										<li>Age <span>29 Years, Female</span></li>
										<li>Blood Group <span>O+</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-3">
							<div class="card widget-profile pat-widget-profile">
								<div class="card-body">
									<div class="pro-widget-content">
										<div class="profile-info-widget">
											<a href="customer-profile.html" class="booking-pro-img">
											<img src="assets/img/customers/customer.jpg" alt="User Image">
											</a>
											<div class="profile-det-info">
												<h3><a href="customer-profile.html">Richard Wilson</a></h3>
												<div class="customer-details">
													<h5><b>Customer ID :</b> P0016</h5>
													<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> Alabama, USA</h5>
												</div>
											</div>
										</div>
									</div>
									<div class="customer-info">
										<ul>
										<li>Phone <span>+1 952 001 8563</span></li>
										<li>Age <span>38 Years, Male</span></li>
										<li>Blood Group <span>AB+</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6 col-lg-4 col-xl-3">
							<div class="card widget-profile pat-widget-profile">
								<div class="card-body">
									<div class="pro-widget-content">
										<div class="profile-info-widget">
											<a href="customer-profile.html" class="booking-pro-img">
											<img src="assets/img/customers/customer1.jpg" alt="User Image">
											</a>
											<div class="profile-det-info">
												<h3><a href="customer-profile.html">Charlene Reed</a></h3>
												<div class="customer-details">
													<h5><b>Customer ID :</b> P0001</h5>
													<h5 class="mb-0"><i class="fas fa-map-marker-alt"></i> North Carolina, USA</h5>
												</div>
											</div>
										</div>
									</div>
									<div class="customer-info">
										<ul>
										<li>Phone <span>+1 828 632 9170</span></li>
										<li>Age <span>29 Years, Female</span></li>
										<li>Blood Group <span>O+</span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import MenuComponent from '../../components/Layout/Menu'
	export default{
		name:'MyCustomer',
		components:{MenuComponent},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>