<script>
    import { onMount } from 'svelte';

    var audioPlaying;
    onMount(() => {
        const roachElement = document.getElementById('roach');
        if (!roachElement) throw new Error('roach element not found');

        roachElement.addEventListener('touchstart', () => {
            doRoachSound();
        });
    });

    function doRoachSound() {
        if (audioPlaying) return;

        const roachElement = document.getElementById('roach');
        if (!roachElement) throw new Error('roach element not found');

        const selectedAudio = Math.floor(Math.random() * 9);
        const audio = new Audio(`./audio/roach${selectedAudio}.mp3`);
        audio.autoplay = true;

        audioPlaying = true;

        roachElement.style.cursor = 'default';
        audio.play();

        audio.addEventListener('play', () => {
            setTimeout(() => {
                roachElement.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    roachElement.style.transform = 'translateY(0)';
                }, 200);
            }, 100);
        });

        audio.addEventListener('ended', () => {
            var delayTime = Math.random() * 2000;
            setTimeout(() => {
                audioPlaying = false;
                roachElement.style.cursor = 'pointer';
            }, delayTime);
        });
    }
</script>

<img style="position: relative; cursor: pointer" id="roach" src="./roach.gif" alt="roach" width="16" on:click={doRoachSound} />

<style>
    #roach {
        transition: 0.15s ease-in-out;
    }
</style>
