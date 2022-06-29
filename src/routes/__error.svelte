<script context="module">
    /** @type {import('@sveltejs/kit').Load} */ export function load({ error, status }) {
        return {
            props: {
                title: status,
                message: error?.message.includes('could not be found') ? error?.message : 'This page has an error. Check the console for details.',
            },
        };
    }
</script>

<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Roach from '../components/Roach.svelte';

    function doMagic() {
        const headerNames = [
            '404',
            'Aw, jeez!',
            'Oh noes!',
            "Darn man, what'd you do this time?",
            "What's this now?",
            'Four-o-Four?',
            'Congrats, you broke it.',
            'Are you proud of yourself?',
            'Something strange is going on here...',
            'Well gang, it looks like we have another mystery on our hands.',
            'When life gives you lemons, you fix this error!',
            'SyntaxError: Invalid URL',
            'Huh?',
            'Oopsie poopsie!',
            'How deep does this trash bin go?',
            'How many times are you gonna try to find that?',
            'Ouch, that spider bit me!',
            'Beware of the Dog!',
            'Did you just soil yourself?',
            'Welcome to the bone zone!',
            "You're gonna need a bigger boat.",
            'Oh yee gods!',
            'The ride never ends!',
        ];

        const afterFirstLineTexts = [
            'Today is a sad day :(',
            'Things got <b>real</b> bad, <b>real</b> quick.',
            'Did you accidentally trip on a cable or something?',
            'You sure you got that thing working?',
            "This isn't me, I swear!",
            'Looks like this is just a dead end.',
            "Maybe it's just you.",
            "I feel like you're constantly refreshing this page just to get a funny message.",
            'Could have just been a typo.',
            'Nothing to see here 👀',
            "Please don't tell me you're mashing your keyboard out of frustration.",
            "Don't panic! You might have typed it wrong.",
            "Make sure you've typed the right address.",
            'Something could have moved in the server room while you were gone.',
            'Or, less excitingly, the page was moved...',
            "Don't forget to like and subscribe!",
            "Let's say, for the sake of the argument, you're my sussy baka.",
            'How do ya like me now?',
            `weeeeeeeeew. wew wew weeew weeew, <b>weeeeeeeeeeeeeeee</b> `,
            '<span title="this is an inside joke between me and a few friends, i understand if this doesn\'t make sense to you but it\'s excruciatingly funny to me">bo :)</span>',
            'My roast is ruined!',
        ];

        const forceroach = $page.url.searchParams.get('forceroach');

        const selectedHeader = headerNames[Math.floor(Math.random() * headerNames.length)];
        const selectedText = forceroach ? afterFirstLineTexts[18] : afterFirstLineTexts[Math.floor(Math.random() * afterFirstLineTexts.length)];
        return { selectedHeader, selectedText };
    }

    var selectedHeader = '404',
        selectedText = '';

    onMount(() => {
        ({ selectedHeader, selectedText } = doMagic());
        const el = document.getElementById('content');
        if (!el) return;
        el.style.opacity = '100%';
    });

    export let message: string;
    export { selectedHeader, selectedText };
</script>

<sveltekit:head>
    <title>404 :: box supremacy</title>
</sveltekit:head>

<section>
    <div id="content">
        <h1>{@html selectedHeader}</h1>
        <p>
            {message}{#if message.includes('could not be found')}<i>{@html ` ${selectedText}`}</i>{/if}{#if selectedText.includes('wew wew')}<Roach
                />{/if}
        </p>
    </div>
</section>

<style>
    #content {
        opacity: 0%;
        transition: 0.2s linear;
    }

    h1,
    p {
        margin: 0 auto;
    }

    h1 {
        font-size: 2.8em;
        font-weight: 700;
        margin: 0 0 0.5em 0;
    }

    p {
        margin: 1em auto;
    }

    @media (min-width: 480px) {
        h1 {
            font-size: 4em;
        }
    }
</style>
