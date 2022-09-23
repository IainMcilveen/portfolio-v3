<template>
	<section id="About"></section>
	<div class="App-main" id="#About">
		<div class="About">
			<div class="profile">
				<img :src="profile" alt="nope" />
			</div>
			<div class="intro">
				<div class="introText">
					<h1>Hi! I'm Iain</h1>
					<hr/>
					<p>I am an aspiring software developer and full time student in my final year at Carleton University studying computer science. I am passionate about all things computer science and enjoy learning new things.</p>
					<p>I'm currently seeking a full time position starting summer 2023!</p>
				</div>
				<div class="resume">
					<a href="https://drive.google.com/file/d/1vc3YE8QbbwAOsMwPRsMMc-kPIpJYF0Pa/view?usp=sharing">Resume</a>
					<a href="https://github.com/IainMcilveen">GitHub</a>
					<a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/">Linkedin</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import profile from '../img/profile.jpg';

export default {
    name: 'AboutComponent',
    data() {
        return({
            profile: profile,
        })
    }
}
</script>

<style lang="scss" scoped>

.App-main {
    background-color: $bgDark;
    color: $bgLight;
	height: 75vh;
	padding-bottom: 25px;
   
	.About{
		display: flex;
		width: 80%;
		height: 100%;
		margin: auto;
		padding: 1em;
		
		.profile{ 
			margin:auto;
			padding: 0.5em;
			padding-right: 2em;

			width: 35vw;
			height: 30vw;

			img {
				border-radius: 5px;
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
		
		.intro{
			color: $bgLight;
			
			hr{
				color: #949494;
				border: 0;
				border-bottom: 2px dashed;
				margin: 2px;
			}
			h1{
				margin: 0;
				margin-bottom: 0.25em;
                text-align: center;
			}
			p{
				margin: 0;
				margin-top: 0.25em;
				margin-bottom: 0.75em;
				text-align: left;
				font-size: 1.1em;
			}
            .resume {
                text-align: center;
                padding-top: 10px;
                a{
                    transition: 300ms ease all;
                    padding: 5px;
                    margin-right: 5px;
                    border-radius: 5px;
                    color: $bgLight;
                    text-decoration: none;
                }
                a:hover{
                    color: white;
                    background-color: #181b20;

                }
            }
			margin: auto;
			max-width: 50vw;
			padding: 1em;
		} 
		//font-size: calc(10px + 1vmin);
	}
	
    color: $bgLight;
}

@media screen and (max-width: 759px) {
	.App-main{

		height: 105vh;

		.About{
			flex-direction: column;
			align-items: center;

			width: 100vw;
			padding: 0;

			
			.profile{
				margin: auto;
				margin-bottom: 0.5em;
				padding: 0;
				width: 75vw;
				height: 75vw;
				img{
					object-fit: cover;
					max-width: 475px;
					width: 90%;
					height: 100%;
				}
	
			}

			.intro{
				margin: auto;
				margin-top: 0.5em;
				max-width: 90%;
				width: 90%;
			}
			
		}
		
	}
}

</style>