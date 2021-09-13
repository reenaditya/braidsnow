import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("@/views/Home");
const Login = () => import("@/views/Auth/Login");
const Register = () => import("@/views/Auth/Register");
const ForgotPassword = () => import("@/views/Auth/ForgetPassword");
const BusinessRegister = () => import("@/views/Auth/BusinessRegister");
const BraiderList = () => import("@/views/Customer/List");
const Profile = () => import("@/views/Customer/Profile");
const Booking = () => import("@/views/Customer/Booking");
const Checkout = () => import("@/views/Customer/Checkout");
const BookingSuccess = () => import("@/views/Customer/BookingSuccess");
const Invoice = () => import("@/views/Customer/Invoice");
const Dashboard = () => import("@/views/Customer/CustomerDashboard");
const Favourite = () => import("@/views/Customer/Favourite");
const ProfileSetting = () => import("@/views/Customer/ProfileSetting");
const ChangePassword = () => import("@/views/Customer/ChangePassword");
const TheraphistDashboard = () => import("@/views/Therapist/TheraphistDashboard");
const Appointments = () => import("@/views/Therapist/Appointments");
const MyCustomer = () => import("@/views/Therapist/MyCustomer");
const ScheduleTiming = () => import("@/views/Therapist/ScheduleTiming");


const routes = [{
	path: "/",
	name: "Home",
	component: Home,
},
{
	path: "/login",
	name: "Login",
	component: Login,
},
{
	path: "/register",
	name: "Register",
	component: Register,
},
{
	path: "/forgot-password",
	name: "ForgotPassword",
	component: ForgotPassword,
},
{
	path: "/business-register",
	name: "BusinessRegister",
	component: BusinessRegister,
},
{
	path: "/braider-list",
	name: "BraiderList",
	component: BraiderList,
},

{
	path: "/profile",
	name: "Profile",
	component: Profile,
},
{
	path: "/booking",
	name: "Booking",
	component: Booking,
},
{
	path: "/checkout",
	name: "Checkout",
	component: Checkout,
},
{
	path: "/booking-success",
	name: "BookingSuccess",
	component: BookingSuccess,
},
{
	path: "/invoice",
	name: "Invoice",
	component: Invoice,
},
{
	path: "/customer-dashboard",
	name: "Dashboard",
	component: Dashboard,
},
{
	path: "/favourite",
	name: "Favourite",
	component: Favourite,
},
{
	path: "/profile-setting",
	name: "ProfileSetting",
	component: ProfileSetting,
},
{
	path: "/change-password",
	name: "ChangePassword",
	component: ChangePassword,
},
{
	path: "/braider-dashboard",
	name: "TheraphistDashboard",
	component: TheraphistDashboard,
},
{
	path: "/appointments",
	name: "Appointments",
	component: Appointments,
},
{
	path: "/my-customer",
	name: "MyCustomer",
	component: MyCustomer,
},
{
	path: "/schedule-timing",
	name: "ScheduleTiming",
	component: ScheduleTiming,
},

];


const router = createRouter({
	mode: 'history',
	history: createWebHistory(),
	routes,
});

export default router;