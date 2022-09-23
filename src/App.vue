<template>
	<navbar-component />
	<welcome-component />
	<about-component />
	<experiences-component />
	<projects-component />
	<photography-component />
	<contact-component />
	<a :class="linkClass" href="#Welcome" v-smooth-scroll><figure class="return-top"></figure></a>
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
	},
	data() {
		return({
			showUpArrow: false,
		})
	},
	mounted() {
		window.addEventListener("scroll", this.onScroll)
	},
	methods: {
		onScroll() {
			if(window.top.scrollY > 140) {
				this.showUpArrow = true;
			} else {
				this.showUpArrow = false;
			}
		}
	},
	computed: {
		linkClass() {
			if(this.showUpArrow) {
				return "up-link up-visible";
			}
			return "up-link up-hidden";
		}
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
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* hide scrollbar */
html {
	-ms-overflow-style: none;  /* IE and Edge */
	scrollbar-width: none;  /* Firefox */
}
::-webkit-scrollbar {
	display: none; /* Chrome */
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

.up-link {
	transition: 220ms ease all;
}

.up-visible {
	opacity: 0.70;
}

.up-hidden {
	opacity: 0;
	visibility: hidden;
}

.return-top{
	width: 12px;
	height: 12px;
	margin: 0;
	padding: 10px;
	cursor: pointer;

	z-index: 99;

	position: fixed;
	bottom: 5px;
	right: 15px;

	border: solid rgb(105, 110, 150);
	border-width: 0 4px 4px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-135deg);
	-webkit-transform: rotate(-135deg);

}

</style>
