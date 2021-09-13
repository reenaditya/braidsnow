<template>
	<MenuComponent/>
	<div class="breadcrumb-bar">
		<div class="container-fluid">
			<div class="row align-items-center">
				<div class="col-md-8 col-12">
					<nav aria-label="breadcrumb" class="page-breadcrumb">
						<ol class="breadcrumb">
						<li class="breadcrumb-item"><a href="">Home</a></li>
						<li class="breadcrumb-item active" aria-current="page">Dashboard</li>
						</ol>
					</nav>
					<h2 class="breadcrumb-title"> Dashboard</h2>
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
									<li class="active">
										<router-link :to="{name:'Appointments'}">
											<i class="fas fa-calendar-check"></i>
											<span>Appointments</span>
										</router-link>
									</li>
									<li>
									<a href="my-customer.html">
									<i class="fas fa-user-injured"></i>
									<span>My customers</span>
									</a>
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
									<a href="theraphist-change-password.html">
									<i class="fas fa-lock"></i>
									<span>Change Password</span>
									</a>
									</li>
									<li>
										<a href="javascript:;" @click="onLogout">
											<i class="fas fa-sign-out-alt"></i>
											<span>Logout</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>

				</div>
				<div class="col-md-7 col-lg-8 col-xl-9">
					<div class="appointments">

						<div class="appointment-list" v-for="i in 5" :key="i">
							<div class="profile-info-widget">
								<a href="customer-profile.html" class="booking-pro-img">
								<img src="assets/img/customers/customer.jpg" alt="User Image">
								</a>
								<div class="profile-det-info">
									<h3><a href="customer-profile.html">Richard Wilson</a></h3>
									<div class="customer-details">
										<h5><i class="far fa-clock"></i> 14 Apr 2021, 10.00 AM</h5>
										<h5><i class="fas fa-map-marker-alt"></i> Newyork, United States</h5>
										<h5><i class="fas fa-envelope"></i> <a href="https://pathivu.dreamguystech.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="86f4efe5eee7f4e2c6e3fee7ebf6eae3a8e5e9eb">[email&#160;protected]</a></h5>
										<h5 class="mb-0"><i class="fas fa-phone"></i> +1 923 782 4575</h5>
									</div>
								</div>
							</div>
							<div class="appointment-action">
								<a href="#" class="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
								<i class="far fa-eye"></i> View
								</a>
								<a href="javascript:void(0);" class="btn btn-sm bg-success-light">
								<i class="fas fa-check"></i> Accept
								</a>
								<a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
								<i class="fas fa-times"></i> Cancel
								</a>
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
		name:'Appointments',
		components:{MenuComponent},
		methods:{
			onLogout(){
				localStorage.setItem('user','');
				this.$router.push({ name: 'Home'});
			}
		}
	}
</script>