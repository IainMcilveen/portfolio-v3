<template>
    <div class="App-Photography" id="#Photography">
        <div class="Photography-Header">
            <h1>My Photography</h1>
            <p>In my spare time I enjoy going out and taking pictures of the various places around me. It is a good way to relax and gets me to go outside and enjoy some of the great scenery around where ever I am at the time. Here are a few of my favourite photos which I have taken.</p>
        </div>
        <div class="Photography-photos">
            <div v-for="(photo, index) in photoArray" class="Photo-Box" :key="'photo-'+index">
                <a :href="photo"><img :src="photo" alt="oops" /></a>
            </div>
        </div>
    </div>
</template>

<script>
let photoArray = [
    "https://cdn.discordapp.com/attachments/665849154186248202/794298932721090590/IMG_0039.jpg",
    "https://cdn.discordapp.com/attachments/665849154186248202/794298947744169994/IMG_0251.jpg",
    "https://cdn.discordapp.com/attachments/665849154186248202/794298962914836500/IMG_8236.jpg",
    "https://cdn.discordapp.com/attachments/665849154186248202/794298982876184613/IMG_9056.jpg",
    "https://cdn.discordapp.com/attachments/665849154186248202/794298987108368394/IMG_8620.jpg",
    "https://cdn.discordapp.com/attachments/665849154186248202/794298994523897856/IMG_9138.jpg",
];

export default {
    name: 'PhotographyComponent',
    data() {
        return({
            photoArray: photoArray
        })
    }
}
</script>

<style lang='scss' scoped>

.App-Photography{
    
    width: 100%;
    background-color: $bgLight;
    text-align: center;
    
    .Photography-Header{
        h1{
            margin: 0;
            padding-top: 35px;
            padding-bottom: 10px;
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
        
        width: 90%;
        margin: auto;

        display: grid;
        grid-template-columns: repeat(auto-fit, 49%);
        grid-column-gap: 0.4em;
        grid-row-gap: 0.4em;

        justify-content: center;
        
        .Photo-Box{
            img{
                border-radius: 1px;
                width: 100%;
                height: 100%
            }
        }
    }
    padding-bottom: 25px;
}

@media screen and (max-width: 1000px){
    .App-Photography{
        .Photography-Header{
            p{
                width: 85vw;
            }
        }
        .Photography-photos{
            grid-template-columns: repeat(auto-fit, 95vw);
        }
    }
}

</style>