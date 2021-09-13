<template>
<MenuComponent/>	
<div class="breadcrumb-bar">
	<div class="container-fluid">
		<div class="row align-items-center">
			<div class="col-md-8 col-12">
				<nav aria-label="breadcrumb" class="page-breadcrumb">
					<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="">Home</a></li>
					<li class="breadcrumb-item active" aria-current="page">Search</li>
					</ol>
				</nav>
				<h2 class="breadcrumb-title">2245 matches found for : Theraphist In Bangalore</h2>
			</div>
			<div class="col-md-4 col-12 d-md-block d-none">
				<div class="sort-by">
					<span class="sort-title">Sort by</span>
					<span class="sortby-fliter">
					<select class="select">
					<option>Select</option>
					<option class="sorting">Rating</option>
					<option class="sorting">Popular</option>
					<option class="sorting">Latest</option>
					<option class="sorting">Free</option>
					</select>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>


<div class="content">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
				<div class="card search-filter">
					<div class="card-header">
						<h4 class="card-title mb-0">Search Filter</h4>
					</div>
					<div class="card-body">
						<div class="filter-widget">
							<div class="cal-icon">
								<input type="text" class="form-control datetimepicker" placeholder="Select Date">
							</div>
						</div>
						<div class="filter-widget">
							<h4>Gender</h4>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="gender_type" checked>
								<span class="checkmark"></span> Male Theraphist
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="gender_type">
								<span class="checkmark"></span> Female Theraphist
								</label>
							</div>
						</div>
						<div class="filter-widget">
							<h4>Select Theraphist</h4>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="select_specialist" checked>
								<span class="checkmark"></span> Hair Stylist
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="select_specialist" checked>
								<span class="checkmark"></span> Face massage
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="select_specialist">
								<span class="checkmark"></span> Back massage
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="select_specialist">
								<span class="checkmark"></span> Skin Care
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="select_specialist">
								<span class="checkmark"></span> Couple Theraphy
								</label>
							</div>
							<div>
								<label class="custom_check">
								<input type="checkbox" name="select_specialist">
								<span class="checkmark"></span> Cryo Skin Theraphy
								</label>
							</div>
						</div>
						<div class="btn-search">
							<button type="button" class="btn btn-block">Search</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-12 col-lg-8 col-xl-9">

				<div class="card" v-for="i in 10" :key="i">
					<div class="card-body">
						<div class="provider-widget">
							<div class="pro-info-left">

								<div class="provider-img">
									<a href="theraphist-profile.html">
									<img src="assets/img/theraphist/theraphist-thumb-01.jpg" class="img-fluid" alt="User Image">
									</a>
								</div>

								<div class="pro-info-cont">

									<h4 class="pro-name"><a href="theraphist-profile.html">
									Ashley Willes</a>
									</h4>
									<p class="pro-speciality">Hair Stylist, Theraphist</p>
									<h5 class="pro-department"><img src="assets/img/spa.png" class="img-fluid" alt="Speciality">Theraphist</h5>

									<div class="rating">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
										<span class="d-inline-block average-rating">(17)</span>
									</div>

									<div class="clinic-details">
										<p class="pro-location"><i class="fas fa-map-marker-alt"></i> Florida, USA</p>

										<ul class="clinic-gallery">
											<li>
												<a href="assets/img/services/1.png" data-fancybox="gallery">
												<img src="assets/img/services/1.png" alt="Feature">
												</a>
											</li>
											<li>
												<a href="assets/img/services/2.png" data-fancybox="gallery">
												<img src="assets/img/services/2.png" alt="Feature">
												</a>
											</li>
											<li>
												<a href="assets/img/services/3.png" data-fancybox="gallery">
												<img src="assets/img/services/3.png" alt="Feature">
												</a>
											</li>
											<li>
												<a href="assets/img/services/4.png" data-fancybox="gallery">
												<img src="assets/img/services/4.png" alt="Feature">
												</a>
											</li>
										</ul>

									</div>
									<div class="clinic-services">
										<span>Hair Treatment</span>
										<span> Facial</span>
									</div>
								</div>
							</div>
							<div class="pro-info-right">

								<div class="clini-infos">
									<ul>
										<li><i class="far fa-thumbs-up"></i> 98%</li>
										<li><i class="far fa-comment"></i> 17 Feedback</li>
										<li><i class="fas fa-map-marker-alt"></i> Florida, USA</li>
										<li><i class="far fa-money-bill-alt"></i> $300 - $1000 <i class="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum"></i> </li>
									</ul>
								</div>

								<div class="clinic-booking">
									<router-link :to="{name:'Profile'}" class="view-pro-btn">
									View Profile</router-link>
									<router-link :to="{name:'Booking'}" class="apt-btn">Book Appointment
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="load-more text-center">
					<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
				</div>
			</div>
		</div>
	</div>
</div>

</template>
<script>
import MenuComponent from '../../components/Layout/Menu'
	export default {
		name:'List',
		components:{MenuComponent},
	}
</script>