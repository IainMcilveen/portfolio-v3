<template>
	<navbar-component />
	<welcome-component />
	<about-component />
	<experiences-component />
	<projects-component />
	<photography-component />
	<contact-component />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import WelcomeComponent from './components/WelcomeComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ExperiencesComponent from './components/ExperiencesComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import PhotographyComponent from './components/PhotographyComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

export default {
	name: 'App',
	components: {
		NavbarComponent,
		WelcomeComponent,
		AboutComponent,
		ExperiencesComponent,
		ProjectsComponent,
		PhotographyComponent,
		ContactComponent,
	}
}
</script>

<style>
#a,
AboutComponentpp {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

</style>
