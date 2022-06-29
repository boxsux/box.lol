<section>
    <slot />
</section>

<style>
    section {
        margin: 64px;
        padding: 24px;
    }

    section:nth-child(2) {
        width: 800px;
    }

    :global(li) {
        text-align: left;
        margin: 0 auto;
        font-size: 1.5em;
    }

    :global(section > p) {
        padding-bottom: 12px;
    }

    @media (max-width: 754px) {
        section {
            margin: 0;
        }
        section:nth-child(2) {
            width: auto;
        }
        :global(li) {
            text-align: center;
        }
        :global(ul, ol) {
            padding-left: 0;
        }
    }
</style>
