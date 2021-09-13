<template>
	<router-view />
	<FooterComponent/> 
	<ModelComponent/>
</template>

<script>
import FooterComponent from './components/Layout/Footer'
import ModelComponent from './components/Layout/Model'

export default {
	name: 'App',
	components: {
		FooterComponent,
		ModelComponent
	},
}
</script>

<style>
#app {
  font-family: raleway !important;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
}

</style>
