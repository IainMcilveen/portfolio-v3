<template>
    <nav :class="'navbar ' + navbarClass">
        <ul class="navbar-list">
            <figure @mousedown="navHidden = !navHidden">
                <i :class="iClass"></i>
            </figure>
            <li 
                v-for="(option, index) in navOptions" 
                :key="'nav-'+index"
                class="navbar-element"
                :style="{'backgroundColor': (hoverIndex === index ? '#323742' : '') }"
                @mouseover="hoverIndex = index"
                @mouseleave="hoverIndex = -1"
            >
                <a v-if="option.text == 'About'" class="navbar-link" :href="option.loc" v-smooth-scroll={offset:-100}>{{option.text}}</a>
                <a v-else class="navbar-link" :href="option.loc" v-smooth-scroll>{{option.text}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    data() {
        let navOptions = [
        {
            text: "About",
            loc: "#About"
        },
        {
            text: "Experiences",
            loc: "#Experiences"
        },
        {
            text: "Projects",
            loc: "#Projects"
        },
        /*{
            text:"Photography",
            loc:"#Photography"
        },*/
        {
            text:"Contact",
            loc:"#Contact"
        }]; 

        return({
            hoverIndex: -1,
            navHidden: false,
            navTran: false,
            navOptions: navOptions
        })
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    },
    methods: {
        onScroll() {
            if(window.top.scrollY > 140) {
                this.navTran = true;
            } else {
                this.navTran = false;
            }
        }
    },
    computed: {
        navbarClass() {
            return (this.navHidden ? "navbar-hidden " : "") +  (this.navTran ? "navbar-transparent" : "");
        },
        iClass() {
            return this.navHidden ? "hidden" : "visible";
        }
    }
}
</script>

<style lang="scss" scoped>

.navbar {

    height: 40px;
    width: 100vw;
    background-color: #282c34;
    z-index: 1;
    position: fixed;    

    transition: 300ms ease all;

}

.navbar-list {
    display: flex;
    padding: 0;
    padding-left:10px;
    margin-block-start: 0;
    margin-block-end: 0;
    height: 100%;
    align-items: center;

    figure{
        width: 15px;
        margin: 0;
        padding: 10px;
        cursor: pointer;

        .visible {
            position: relative;
            bottom: 5px;
            border: solid white;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(45deg);
            -webkit-transform: rotate(45deg);   
        }
    
        .hidden{
            border: solid white;
            border-width: 0 3px 3px 0;
            display: inline-block;
            padding: 3px;
            transform: rotate(-135deg);
            -webkit-transform: rotate(-135deg);
        }
    }

    .navbar-element{
        transition: 250ms ease all;
        
        align-items: center;
        border-radius: 2px;
        padding: 5px 8px 8px 5px;
        list-style-type: none;
        cursor: pointer;
    }

    .navbar-link{
        color: white;
        text-decoration: none;
        padding: 5px;
    }
}

.navbar-hidden{
    height: 20px;
    .navbar-element{
        display:none;
    }
}

.navbar-transparent{
    opacity: 0.70;
}


@media screen and (max-width: 759px){
    nav{
        .navbar-list{
            padding-left: 3px;

            .navbar-element{
                padding: 3px;
                padding-left: 1px;
                padding-right: 1px;
            }

            .navbar-link{
                padding: 0.1em;
                padding-right: 0.3em;
                font-size: 0.85em;
            }

        }
    }
}

</style>