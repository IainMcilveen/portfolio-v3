<template>
    <section id="Experiences"></section>
	<div class="App-Experiences" id="#Experiences">
		<div class="Experiences-Title">
			<h1>My Experiences</h1>
		</div>
		<div v-for="(exp, index) in experienceData" :class="'Experience-Box ' + flipped(index)" :key="'experience-'+index">
            <div class="Experience-Info">
                <div class="Experience-Title">
                    <h2>{{exp.title}}</h2>
                    <h4>{{exp.subtitle}}</h4>
                </div>
                <h4>{{exp.time}}</h4>
                <p>{{exp.text}}</p>
            </div>
            <div class="Experience-Image">
                <a :href="exp.link">
                    <img v-show="exp.img_loaded" :src="exp.pic" @load="setLoaded(index)" />
                    <div class="img-loading" v-show="!exp.img_loaded">
                        <font-awesome-icon class="load-icon" icon="fa-solid fa-spinner" />
                    </div>
                </a>
            </div>
        </div>
	</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import picsesimg from '../img/experience/pisceslogo.png';
import chartdimg from '../img/experience/chartd.png';
import innovaimg from '../img/experience/innova.jpg';
import statcanimg from '../img/experience/stat-can-new.png';
import scsimg from '../img/experience/scs.png';
import carletonimg from '../img/experience/carleton.png';


// configure FontAwesome
library.add(faSpinner);

let experienceData = [
    {
		title: "Full Stack Developer",
		subtitle: "Chartd",
		time: "May 2023 - Present",
		text: "As a Full Stack Developer I am responsible for working on a variety of a different projects with a variety of different languages and frameworks. This includes but is not limited to working with Python, FastAPI, openPyXl and MongoDB to add back-end Features to an application such as User Management and automatic generation of Excel reports. As well as creating the front-end for an application from the ground up using Asp.net core and Telerik UI, with automatic deployments to Azure using Github Actions.",
		pic: chartdimg,
        img_loaded: false,
		link: "https://gochartd.com/"
	},
	{
		title: "Jr. Ocean Programmer",
		subtitle: "Pisces Research Project Management Inc.",
		time: "May 2022 - August 2022",
		text: "As a Jr Ocean Programmer was responsible for doing full-stack web development in Django and Vue.js to make improvements and add a variety of new features to their internal reporting software. This included making use of Chart.js to create a dashboard which would visualize many different statistics based on responses to forms from users of the application.",
		pic: picsesimg,
        img_loaded: false,
		link: "https://piscesrpm.com/"
	},
	{
		title: "Web Application Developer",
		subtitle: "Chartd",
		time: "January 2022 - April 2022",
		text: "As a Web Applications Developer my responsibilities included working on web applications in Vue.js with Nuxt.js, Vuetify and SCSS. This included adding many new features and improvements as well as designing custom templated layouts which are used in a variety of places in the application.",
		pic: chartdimg,
        img_loaded: false,
		link: "https://gochartd.com/"
	},
	{
		title: "Junior Cloud Engineer",
		subtitle: "Innovapost",
		time: "May 2021 - August 2021",
		text: "As a Junior Cloud Engineer I wrote scripts to automate and complete tasks in Azure, these tasks included creating several scripts which comprised the backup infrastructure which is used to backup and restore all of the resources in Azure in the event of an emergency. I also was responsible for creating visualizations in PowerBi regarding the security of the resources in Azure.",
		pic: innovaimg,
        img_loaded: false,
		link: "https://innovapost.com/"
	},
	{
		title: "Application Developer",
		subtitle: "Statistics Canada",
		time: "June 2020 - December 2020",
		text: "As a Application Developer I created and improved internal tools used by many different clients within Statistics Canada, this included creating a user interface in VB.Net which interfaced with an Oracle database to allow the clients to more easily work with the data in their databases. This meant I had to be able to work with clients to create the programs to suit their needs.",
		pic: statcanimg,
        img_loaded: false,
		link: "https://www.statcan.gc.ca/eng/start"
	},
	{
		title: "Computer Science Teaching Assistant",
		subtitle: "Carleton University: School of Computer Science",
		time: "September 2019 - December 2019",
		text: "As a teaching assistant I got to help students gain a better understanding of the fundemental concepts of programming. I held office hours, lead tutorials and work with a team of other teaching assistants to help students and complete marking of assignments in a timely manner.",
		pic: scsimg,
        img_loaded: false,
		link: "https://admissions.carleton.ca/programs/computer-science/"
	},
	{
		title: "B.S.C. Computer Science (Honours) ",
		subtitle: "Carleton University",
		time: "September 2018 - April 2023",
		text: "Competed a degree in Computer Science at Carleton University where I learned about a wide range of computer science related topics such as: Systems Programming, Software engineering, Web developement as well as many others.",
		pic: carletonimg,
        img_loaded: false,
		link: "https://carleton.ca/"
	}
];

export default {
    name: 'ExperiencesComponent',
    data() {
        return({
			experienceData: experienceData,
        })
    },
	methods: {
		flipped(index) {
			if(index % 2 !== 0){
				return 'flipped';
			}
			return '';
		},
        setLoaded(index) {
            let temp = {...experienceData[index]};
            temp.img_loaded = true;
            this.experienceData.splice(index, 1, temp);
        }
	}
}
</script>

<style lang='scss' scoped>

.App-Experiences{

    background-color: $bgLight;
	text-align: center;

    .Experiences-Title{
        padding-top: 15px;
    }

    .Experience-Box{

        transition: 200ms ease all;

        background-color: white;

        margin: auto;
        margin-bottom: 10px;
        display:flex;

        text-align: left;

        width: 85vw;
        height: 270px;

        box-shadow: 0 3px 3px $bgDark;
        border-radius: 0.15em;

        .Experience-Info{

            display:flex;
            flex-direction: column;
            
            .Experiences-Title {
                margin-top: 10px;
            }
            
            h2{
                margin: 0;
                margin-bottom: 5px;
            }

            h4 {
                margin: 0;
            }

            p {
                margin: 0;
                margin-top: 10px;
            }

            #subtitle{
                margin: 0;
                text-align: left;
            }


            width: 50%;
            margin-left: 10px;
            padding: 10px;
            padding-right: 0;
            
        }

        .Experience-Image{

            padding: 10px;
            padding-left: 0px;
            
            width: 50%;

            img{
                border-radius: 0.10em;
                object-fit:cover;
                width: 100%;
                height: 100%;
            }

            .img-loading {
                width: 100%;
                height: 100%;
            }
        }

    }

    .Experience-Box:hover{
        box-shadow: 0 7px 7px $bgDark;
        width: calc(85vw + 5px);
        height: 275px;
    }

    .flipped{
        flex-direction: row-reverse;

        .Experience-Image{
            padding-left: 10px;
            padding-right: 0;

        }
        
        .Experience-Info{

            padding-left: 0;
            padding-right: 10px;

            h2,h4,p{
                margin-right: 0;
            }

        }
    }

    padding-bottom: 25px;

}

$mobile-height: 560px;

@media screen and (max-width: 640px){

    .App-Experiences{

        .Experience-Box{
            
            width: 95vw;
            height: $mobile-height;

            display: block;
            overflow: hidden;

            .Experience-Info{

                padding: 3px;
                margin: 0;
                
                align-items: center;
                width: 100%;

                p,h4,h2 {
                    margin: 5px;
                    
                }

                h2, h4 {
                    text-align: center;
                }

                h2{
                    font-size: 1.3em;
                }

                h4 {
                    margin: 0;
                    font-size: 0.9em;
                }

                p {
                    font-size: 0.95em;
                }

            }
            
            .Experience-Image{

                display:flex;
                flex-direction: column;
                justify-content: center;

                width:100%;
                padding: 3px;

                img{
                    object-fit: scale-down;
                    width:99%;
                    height: 100%;
                   
                }

            }
        }

        .Experience-Box:hover{
            height: calc( #{$mobile-height} + 5px);
            width: 95vw;
        }
    }
}

</style>