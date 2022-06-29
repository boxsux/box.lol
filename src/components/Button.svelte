<script>
    export let title;
    export let description;
    export let url;
</script>

<a href={url}>
    <div class="button">
        <h1>{@html title}</h1>
        <p>{@html description}</p>
    </div>
</a>

<style>
    a {
        text-decoration: none;
    }

    .button {
        display: inline-block;
        border: 1px solid rgb(var(--pink));
        border-radius: 5px;
        background-color: rgb(var(--bg-bright));
        padding: 20px;
        margin: 5px;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        text-decoration: none;
        line-height: 1em;
        color: rgb(var(--paragraph));
        width: 22em;
    }

    .button:hover {
        background-color: rgb(var(--bg-brighter));
        color: rgb(var(--header));
        border: 1px solid rgb(var(--pink));
    }

    .button h1 {
        font-size: 20px;
        font-weight: 700;
        line-height: 0.3em;
        padding-bottom: 14px;
        color: rgb(var(--header));
    }

    @media (max-width: 754px) {
        .button h1 {
            font-size: 3.5em;
            line-height: 0.5em;
        }

        .button p {
            font-size: 1.5em;
            text-align: center;
        }
    }
</style>
