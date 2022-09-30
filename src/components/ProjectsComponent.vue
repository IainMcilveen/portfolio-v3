<template>
    <section id="Projects"></section>
    <div class="App-Projects" id="#Projects">
        <div class="Projects-Title">
            <h1>My Projects</h1>
        </div>
        <div class="Projects-All">
            <div v-for="(proj, index) in projectData" class="Project-Box" :key="'project-'+index">
                <div class="Project-Image">
                    <a v-if="proj.url !== ''" :href="proj.url"> 
                        <img v-show="proj.img_loaded" :src="proj.img" @load="setLoaded(index)" />
                        <div class="img-loading" v-show="!proj.img_loaded">
                            <font-awesome-icon class="load-icon" icon="fa-solid fa-spinner" />
                        </div>
                    </a>
                    <img v-if="proj.url == ''" v-show="proj.img_loaded" :src="proj.img" @load="setLoaded(index)" />
                    <div v-if="proj.url == ''" class="img-loading" v-show="!proj.img_loaded">
                        <font-awesome-icon class="load-icon" icon="fa-solid fa-spinner" />
                    </div>
                </div>
                <div class="Project-Title">
                    <a v-if="proj.url !== ''" :href="proj.url"><h4>{{proj.title}}</h4></a>
                    <h4 v-else>{{proj.title}}</h4>
                    <h6>{{proj.desc}}</h6>
                </div>
                <div class="Project-Info">
                    <p>{{proj.text}}</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// configure FontAwesome
library.add(faSpinner);

let projectData = [
    {
        url: "https://github.com/IainMcilveen",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/1022643569699332207/ai.png",
        img_loaded: false,
        title: "Better Basket",
        desc: "Algorithms",
        text: "This program is the final group project for COMP 3106, I was primarily responsible for the implementation of A* and had to design the heuristic which would best optimize distance while factoring in the cost of products at each store. We used data scraped from UberEats and Time-Distance Matrix API from OpenRouteService.org"
    },
    {
        url: "https://github.com/IainMcilveen/comp3005pg",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754853854108975244/unknown.png",
        img_loaded: false,
        title: "COMP 3005 Database Project",
        desc: "Web Application",
        date: "April 2020",
        text: "This program is my final project for COMP 3005, it is a web application designed to be the platform for a online book store. I made use of postgreSQL to store book and order information, and nodeJS for the backend. For the frontend, I made use of Pug for the templates which pull information from the database."
    },
    {
        url: "https://github.com/IainMcilveen/Whos-That-Pokemon",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754850059824267344/unknown.png",
        img_loaded: false,
        title: "Who's That Pokemon",
        desc: "Mobile Web Application",
        date: "January 2020",
        text: "This is a program written for the CUHacking 2020 hackathon, this is a web application written in React which is designed to work well on mobile devices. I made use of the Hooks API to save the quiz state and determine whether the user answered correctly or incorrectly."
    },
    {
        url: "https://github.com/IainMcilveen/pathfinding-visualizer",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754846093556187216/pathfinding-vis-gif.gif",
        img_loaded: false,
        title: "Pathfinding visualizer",
        desc: "Algorithms",
        date: "July 2020",
        text: "I wrote this application as a way to visualize the A star pathfinding algorithm, allowing the user to create different obstacles and set a start and end point for the algorithm to use. It was written in python using pygame to display the graphics."
    },
    {
        url: "https://github.com/IainMcilveen/termtris",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/935680885414572122/termtris_cropped.gif",
        img_loaded: false,
        title: "TermTris",
        desc: "Terminal Application",
        text: "This is a program written in C, which allows you to play a simple version of tetris from the convience of your terminal. I used ncurses to draw the game within the terminal."
    },
    {
        url: "https://github.com/IainMcilveen",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/1022640579009577060/device.png",
        img_loaded: false,
        title: "MCT Device Simulator",
        desc: "Desktop Application",
        text: "This program is my final project does in a group for COMP 3004: Object-Oriented Software Engineering and was written in C++ using QT. It Simulates the user interface as well as various features of the DENAS PCM6 Electroneurostimulation device."
    },
    {
        url: "https://github.com/IainMcilveen/GridWorld",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/758103143606386688/gridworld.gif",
        img_loaded: false,
        title: "Grid World",
        desc: "Game",
        date: "October 2019",
        text: "This is a in-progess game being written from scratch in Java using AWT, currently the player can walk around and explore the world and can naviagate to different procedurally generated screens."
    },
    {
        url: "https://github.com/IainMcilveen/portfolio-react",
        img: "https://cdn.discordapp.com/attachments/665849154186248202/754843218356731954/unknown.png",
        img_loaded: false,
        title: "Portfolio",
        desc: "Web Application",
        date: "September 2020",
        text: "This is my portfolio website which you are currently viewing! This was written using Vue with Sass styling and was created to demonstrate my current projects, skills and experience. I designed to work well on the desktop as well as on mobile devices."
    },
];

export default {
    name: 'ProjectsComponent',
    data() {
        return({
            projectData: projectData,
        })
    },
    methods: {
        setLoaded(index) {
            let temp = {...projectData[index]};
            temp.img_loaded = true;
            this.projectData.splice(index, 1, temp);
        }
    }
}
</script>

<style lang='scss' scoped>

.App-Projects{

    background-color: $bgDark;
    padding-bottom: 35px;
    text-align: center;

    .Projects-Title{
        padding-top: 15px;
        color: $bgLight;

        h1{
            margin-bottom: 10px;
        }
    }

    .Projects-All{

        margin: auto;
        width: 95vw;

        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        
        .Project-Box{

            transition: 300ms ease all;

            width: 500px;
            height: 500px;

            background-color: $bgLight;
            border-radius: 2px;
            
            margin: 1em 1.35em 1em 1.35em;
            padding: 5px;

            text-align:left;
   
                
            .Project-Image{
    
                height: 50%;
                width: 100%;
    
                img{
                    object-fit:cover;
                    width: 100%;
                    height: 100%;
                }

                .img-loading {
                    width: 100%;
                    height: 100%;
                }
    
            }

            .Project-Title{
                a{
                    text-decoration: none;
                    color: $bgDark;
                }
                h4{
                    font-size: 22px;
                    margin: 5px;
                    margin-left: 0;
                    margin-bottom: 0;
                    color: $bgDark;
                }
                h6{
                    font-size: 15px;
                    margin-top: 0;
                    margin-bottom: 2px;
                }
                p{
                    font-size: 13px;
                    margin: 7px 0 0 0;
                }
            }

            .Project-Info{
                p{
                    margin: 3px 5px 0 0;
                }
            }
            
            

        }

        .Project-Box:hover{
            width: 505px;
            height: 505px;
            box-shadow: 0 5px 5px $bgMid;
        }

    }
    
}

@media screen and (max-width: 400px){
    
    .App-Projects{
    
        .Projects-All{

            .Project-Box{
                margin: 0.5em 1em 0.5em 1em;
                height: 600px;
            }
        }
    }
}
</style>