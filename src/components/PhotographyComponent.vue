<template>
    <section id="Photography"></section>
    <div class="App-Photography" id="#Photography">
        <nav class="photo-nav">
            <ul class="photo-nav-list">
                <li 
                    v-for="(option, index) in optionArray" 
                    :key="'photo-'+index"
                    :class="(selectedOption === index ? 'photo-nav-element element-selected' : 'photo-nav-element')"
                    @mouseover="hoverIndex = index"
                    @mouseleave="hoverIndex = -1"
                >
                    <p class="photo-nav-option" @click="selectedOption = index">{{option.title}}</p>
                </li>
            </ul>
        </nav>
        <div class="Photography-Header">
            <p>{{optionArray[selectedOption].description}}</p>
        </div>
        <div class="Photography-photos">
            <div v-for="(index) in optionArray[selectedOption].pics" class="Photo-Box" :key="'photo-'+index">
                <a v-cloak :href="photoArray[index].img">
                    <img v-show="photoArray[index].loaded" :src="photoArray[index].img" @load="setLoaded(index)" alt="oops" />
                    <div class="img-loading" v-show="!photoArray[index].loaded">
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

// configure FontAwesome
library.add(faSpinner);


let optionArray = [
    {
        pics: [0,1,2,3,4,5],
        description: "In my spare time I enjoy going out and taking pictures of the various places around me. It is a good way to relax and gets me to go outside and enjoy some of the great scenery around where ever I am at the time. Here are a few of my favourite photos which I have taken.",
        title: "Photography"
    },
    {
        pics: [3,4,5],
        description: "Film photography is based or something",
        title: "Film"
    },
    {
        pics: [0,1,2],
        description: "Powershots are based moment",
        title: "Point and Shoot"
    }
];

let photoArray = [{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/794298932721090590/IMG_0039.jpg",
    loaded: false
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/794298947744169994/IMG_0251.jpg",
    loaded: false
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/794298962914836500/IMG_8236.jpg",
    loaded: false
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/794298982876184613/IMG_9056.jpg",
    loaded: false
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/794298987108368394/IMG_8620.jpg",
    loaded: false
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/794298994523897856/IMG_9138.jpg",
    loaded: false
}]

export default {
    name: 'PhotographyComponent',
    data() {
        return({
            photoArray: photoArray,
            optionArray: optionArray,
            hoverIndex: -1,
            selectedOption: 0,
        })
    },
    methods: {
        setLoaded(index) {
            let temp = {...photoArray[index]};
            temp.loaded = true;
            this.photoArray.splice(index, 1, temp);
        }
    },
}
</script>

<style lang='scss' scoped>

.App-Photography{
    
    width: 100%;
    background-color: $bgLight;
    text-align: center;

    .photo-nav {

        padding: 35px 0 10px 0;

        .photo-nav-list {
            display: flex;
            padding: 0 10px 0 10px;
            margin-block-start: 0;
            margin-block-end: 0;
            height: 100%;
            align-items: center;
            justify-content: center;

            .photo-nav-element {
                transition: 250ms ease all;

                width:#{"min(32vw, 200px)"};
                padding: 5px 8px 8px 5px;
        
                border-radius: 2px;

                align-items: center;
                text-align: center;
                list-style-type: none;
                cursor: pointer;
                user-select: none;

                .photo-nav-option {
                    font-weight: bold;
                    font-size: 1.1em;
                    color: $bgDark;
                }
            }

            .photo-nav-element.element-selected {
                
                background-color: $bgMid;

            }


        }
    }
    
    .Photography-Header{

        h1{
            margin: 0;
        }
        p{
            margin: auto;
            font-size: 1.25em;
            text-align: left;
            padding-bottom: 20px;
            width: 65vw;
        }
        padding-bottom: 0.5em;
    }
    .Photography-photos{
        
        width: 95vw;
        margin: auto;

        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        
        .Photo-Box{

            width: 44vw;
            padding: 8px;
            margin: 0;

            display: flex;

            img{
                border-radius: 1px;
                width: 100%;
                height: 100%;
            }

            .img-loading {
                border-radius: 1px;
                width: 44vw;
                height: calc(2/3 * 44vw);
            }

        }
    }
    padding-bottom: 25px;
}

@media screen and (max-width: 1000px){
    .App-Photography{
        .photo-nav-list {
            .photo-nav-element {
                .photo-nav-option {
                    font-size: 0.87em;
                }
                
            }
        }
        .Photography-Header{
            p{
                width: 85vw;
            }
        }
        .Photography-photos{
            
            width: 99vw;

            .Photo-Box {
                width: 100%;
                padding: 0;
                padding: 0 5px 5px 5px;
            }

        }
    }
}

</style>