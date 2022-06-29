<script>
    import TopWrapper from '../components/TopWrapper.svelte';
    import Block from '../components/Block.svelte';

    // const v = new Audio('/boxsux.mp3');
    // document.getElementById('ipa').addEventListener('click', () => {
    //     (v.currentTime = 0), v.play();
    // });
</script>

<svelte:head>
    <title>home :: box supremacy</title>
</svelte:head>

<TopWrapper header="box supremacy">
    <p>web human and <strong>professional screwup.</strong></p>
</TopWrapper>

<main>
    <Block>
        <p>hey hi hello i'm box aka <em>boxsux</em> in many corners of the internet</p>
        <p>
            i'm a nonbinary web human that loves all things technology, and i like to type in all lowercase unless i'm sending something actually
            professional
        </p>
    </Block>
    <Block>
        <h2>i am a:</h2>
        <ul>
            <li>web developer</li>
            <li>typescript enthusiast</li>
            <li>professional screwup</li>
        </ul>
    </Block>
</main>

<style>
    :global(.title) {
        font-size: 6em;
        font-weight: 700;
        line-height: 0.8em;
        padding-bottom: 24px;
    }

    main {
        padding: 200px auto;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 754px) {
        main {
            display: block;
            text-align: center;
        }

        :global(.title) {
            font-size: 3.5em;
        }

        :global(p) {
            font-size: 1.2em;
            text-align: center;
        }
    }
</style>
