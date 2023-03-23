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
            <div v-for="(index) in optionArray[selectedOption].pics" :class="'Photo-Box ' +photoArray[index].type" :key="'photo-'+index">
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
        pics: [8,9,10,11,12,13,14,15],
        description: "In my spare time I enjoy going out and taking pictures of the various places around me. It is a good way to relax and gets me to go outside and enjoy some of the great scenery around where ever I am at the time. Here are a few of my favourite photos which I have taken.",
        title: "Photography"
    },
    {
        pics: [16,17,18,19,20,21,22,23,24],
        description: "Film photography is based or something",
        title: "Film"
    },
    {
        pics: [0,1,2,3,4,5,6,7,25],
        description: "Powershots are based moment",
        title: "Point and Shoot"
    }
];

let photoArray = [{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542618197184632/IMG_1745.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542618423672903/IMG_1794.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542618943750154/IMG_1808.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542619350618193/IMG_1810.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542619619049574/IMG_1522.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542619824553995/IMG_1544.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542620155920414/IMG_1708.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542620478865479/IMG_1709.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542646840070176/IMG_1385.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542647217569842/IMG_8236.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542647687336018/IMG_8620.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542647980920942/IMG_9056.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542648387780749/IMG_9138.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542648803020910/IMG_0039.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542649151143996/IMG_0251.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542649499275294/IMG_0372.jpg",
    loaded: false,
    type: "landscape"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542673671028776/img010.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542674082078760/img014.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542674388258927/img017.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542674727993414/img018.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542675264868453/img024-2.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542675642359877/img003.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542676107923506/img006.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542676468629575/img008.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088542676745461870/img009.jpg",
    loaded: false,
    type: "portrait"
},
{
    img: "https://cdn.discordapp.com/attachments/665849154186248202/1088554711977828362/IMG_1501.jpg",
    loaded: false,
    type: "portrait"
}];

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

        .Photo-Box.landscape {
            width: 44vw;
            img {
                aspect-ratio: 3/2;
            }
        }
        .Photo-Box.portrait {
            height: 88vh;
            img {
                aspect-ratio: 2/3;
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

            .Photo-Box.landscape {
                width: 98vw;
                img {
                    aspect-ratio: 3/2;
                }
            }

        }
    }
}

</style>