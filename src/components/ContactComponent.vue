<template>
    <section id="Contact"></section>
    <div class="App-Contact" id="#Contact">
        <div class="Contact-Title">
            <h1>Contact Me</h1>
        </div>
        <div class="Contact-Links">
            <a href="https://github.com/IainMcilveen"><font-awesome-icon icon="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
            <a href="https://drive.google.com/file/d/1P-3NAXoleGS5Vkq5UAQbExlAARSXi4PA/view?usp=share_link"><font-awesome-icon icon="fa-scroll" /></a>
        </div>
        <div class="Contact-Copyright">
            <p>© 2024 by Iain Mcilveen</p>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faScroll } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// configure FontAwesome
library.add(faScroll);
library.add(faGithub);
library.add(faLinkedin);

export default {
    name: 'ContactComponent',
}
</script>

<style lang="scss" scoped>

.App-Contact{

    text-align: center;
    background-color: $bgDark;

    color: white;

    .Contact-Title {
        h1 {
            padding: 10px 0 8px 0;
            margin: 0;
        }
    }

    .Contact-Links{
        a{
            padding: 25px;
            font-size: 3em;
            color: white;
        }
    }

    .Contact-Copyright {
        padding: 10px;
        padding-top: 15px;
        font-size: 0.85em;

        p {
            padding: 0;
            margin: 0;
        }
    }
    
}

</style>