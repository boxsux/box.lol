<script>
    import Button from '../components/Button.svelte';
    export let header;
</script>

<div class="top-wrapper">
    <img src="./package.png" alt="logo" width="180" />
    <div class="wrapper-text">
        <h1 class="title">{@html header}</h1>
        <slot />
    </div>
    <div class="line-break" />
    <div class="nav-buttons">
        <Button title="About Me" description="Who I am and what I do" url="about" />
        <Button title="Cat Facts" description="Fun facts about cats" url="catfacts" />
        <Button title="Projects" description="Projects I've made" url="projects" />
    </div>
</div>

<style>
    .top-wrapper {
        margin: 15em 2em;
        /* padding: 0 5em 0 3em; */
        display: flex;
        flex-flow: row wrap;
        align-items: center;
    }

    .top-wrapper h1 {
        word-spacing: 100vw;
    }

    .wrapper-text {
        width: 440px;
    }

    img {
        margin-right: 20px;
    }

    .nav-buttons {
        display: flex;
        flex-direction: column;
        margin-left: auto;
    }

    .line-break {
        display: none;
        width: 100%;
    }

    @media (max-width: 1015px) {
        .line-break {
            display: block;
        }

        .nav-buttons {
            flex-direction: row;
            margin-left: 0;
            margin-right: auto;
            margin-top: 20px;
        }
    }

    @media (max-width: 754px) {
        .top-wrapper {
            display: block;
            margin: 5em auto 10em;
            padding: 0 2em;
            text-align: center;
        }

        .wrapper-text,
        .wrapper-text > * {
            text-align: center;
            margin: 0 auto;
            width: 100%;
        }

        img {
            padding-bottom: 50px;
            width: 216px;
        }

        .nav-buttons {
            flex-direction: column;
            text-align: center;
            margin: 20px 0 0;
        }

        :global(.nav-buttons > * > * > *) {
            text-align: center;
        }
    }

    @media (max-height: 608px) {
        .top-wrapper {
            margin: 2em auto;
        }
    }
</style>
