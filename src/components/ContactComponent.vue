<template>
    <div className="App-Contact" id="#Contact">
        <div className="Contact-Title">
            <h1>Contact Me</h1>
        </div>
        <div className="Contact-Links">
            <a href="https://github.com/IainMcilveen"><font-awesome-icon icon="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/iain-mcilveen-64b14a185/"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
            <a href="https://drive.google.com/file/d/1vc3YE8QbbwAOsMwPRsMMc-kPIpJYF0Pa/view?usp=sharing"><font-awesome-icon icon="fa-scroll" /></a>
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

    .Contact-Links{
        a{
            padding: 25px;
            font-size: 3em;
            color: black;
        }
    }
    
}

</style>