<script>
    import { onMount } from 'svelte';

    let promise;
    onMount(async () => {
        promise = getRandomCatFact();
    });

    const getRandomCatFact = async () => {
        const res = await fetch('https://catfact.ninja/fact');
        const json = await res.json();

        if (!json.fact) throw new Error('Could not find anything interesting about cats.');
        return json.fact;
    };

    const reload = () => {
        promise = getRandomCatFact();
    };
</script>

<svelte:head>
    <title>cat facts :: box supremacy</title>
</svelte:head>

<main>
    <h1>Cat Facts!</h1>
    <div class="fact-container">
        {#await promise}
            <p>Loading...</p>
        {:then fact}
            <p>{fact}</p>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>

    <button on:click={() => reload()}>Generate another</button>
</main>

<style>
    .fact-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 10rem;
        border: 0.2rem solid #cccccc62;
        padding: 2rem;
        margin: 2rem;
        border-radius: 1rem;
        background-color: #40403a;
    }

    button {
        padding: 1rem 2rem;
        background-color: darkolivegreen;
        color: white;
        font-weight: bold;
        text-transform: uppercase;
        border: 0;
        border-radius: 1rem;
        box-shadow: 2px 2px 5px gray;
        cursor: pointer;
    }

    button:hover {
        filter: brightness(1.2);
    }

    button:active {
        filter: brightness(0.8);
    }
</style>
