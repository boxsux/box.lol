<script>
    import { page } from '$app/stores';
</script>

<nav>
    <ul>
        <li class:navbar-active={$page.url.pathname === '/'}><a href="/">home</a></li>
        <li class:navbar-active={$page.url.pathname.includes('/about')}><a href="/about">about</a></li>
        <li class:navbar-active={$page.url.pathname.includes('/blog')}><a sveltekit:prefetch href="/blog">blog</a></li>
        <li class:navbar-active={$page.url.pathname.includes('/catfacts')}><a sveltekit:prefetch href="/catfacts">cat facts</a></li>
        <li class:navbar-active={$page.url.pathname.includes('/projects')}><a href="/projects">projects</a></li>
    </ul>
</nav>

<style>
    nav {
        border-bottom: 1px solid rgba(var(--pink), 0.1);
        font-weight: 300;
        padding: 0 1em;
        background-color: rgb(var(--bg-bright));
    }

    ul {
        margin: 0;
        padding: 0;
    }

    /* clearfix */
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li {
        display: block;
        float: left;
    }

    .navbar-active {
        position: relative;
        display: inline-block;
    }

    .navbar-active::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 2px;
        background-color: rgb(var(--pink));
        display: block;
        bottom: -1px;
    }

    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
    }
</style>
