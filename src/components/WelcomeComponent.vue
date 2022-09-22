<template>
    <div class="App-Welcome" id="#Top">
        <img class="Welcome-Image" alt="background" :src="bgImg" />
        <div class="Welcome-Tran"></div>
        <div class="Welcome">
            <h1>Welcome</h1>
            <h2>Iain Mcilveen's Portfolio Website</h2>
        </div>
    </div>
</template>

<script>
import bgImg from "../img/background.jpg"

export default {
    name: 'WelcomeComponent',
    data() {
        return({
            bgImg: bgImg,
        })
    }
}
</script>

<style lang='scss' scoped>

.App-Welcome {
    display: flex;
    height: 100vh;

    text-align: center;


    .Welcome-Image{
        width: 100%;
        user-select: none;
        object-fit: cover;
        z-index: -1;
    }

    .Welcome-Tran{
        background-color: black;
        border-radius: 300px;
        z-index: 0;
        opacity: 0.03;
        width: 420px;
        height: 100px;
        position: absolute;
        left: calc(50vw - 210px);
        top: calc(50vh - 107px);
    }

    .Welcome{
        display: inline-block;
        width: 450px;
        position: absolute;
        left: calc(50vw - 225px);
        top: calc(50vh - 100px);
        
        color: white;
        font-size: 1em;
        h1,h2{
            margin:0;
            margin-bottom: 5px;
            text-shadow: 0 0 10px black;
            
        }

    }

}

@media screen and (max-width: 600px){
    .App-Welcome{
        .Welcome{
            width: 300px;
            left: calc(50vw - 150px);
        }
        .Welcome-Tran{
            width: 300px;
            height: 120px;
            left: calc(50vw - 150px);
            top: calc(50vh - 101px);
        }
    }
}
</style>