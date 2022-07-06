<script lang="ts">
    import { createForm } from 'svelte-forms-lib'

    let licenses = [
            {
                id: 1,
                text: 'NoD-1.0',
                fullName: 'No outside Distribution, version 1.0',
                summary:
                    'Strong copyright license that prevents content from being shared outside the group or organization it was created in, unless excluded by the author of the content. Stating your changes is necessary, and the same copyright notice and license must be used in the modified work.',
            },
            {
                id: 2,
                text: 'NoD-ER-1.0',
                fullName:
                    'No outside Distribution - Exclusions Removed, version 1.0',
                summary:
                    'Strong copyright license that prevents content from being shared outside the group or organization it was created in. Stating your changes is necessary, and the same copyright notice and license must be used in the modified work. <u>Exclusions do not apply to this license, and must be removed before distributing any modified content.</u>',
            },
        ],
        selected: any

    const { form, errors, state, handleChange, handleSubmit } = createForm({
        initialValues: {
            copyrightHolder: '',
            email: '',
            license: '',
            origin: '',
        },
        validate: (values) => {
            let errs = {}
            if (values.copyrightHolder === '') {
                errs['copyrightHolder'] = "the author's name is required"
            }
            if (values.email === '') {
                errs['email'] = 'an email address is required'
            }
            if (
                !values.email.match(
                    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                ) &&
                values.email !== ''
            ) {
                errs['email'] = 'email address is invalid'
            }
            if (values.origin === '') {
                errs['name'] = 'a name is required'
            }
            return errs
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        },
    })
</script>

<h1>Personal License Generator</h1>
<p>
    From time to time, I write my own licenses for the stuff I make. If you want
    to generate your own license from the ones I have, this page is for you.
</p>

<div class="flex">
    <form on:submit={handleSubmit}>
        <fieldset>
            <select
                id="license"
                name="license"
                bind:value={selected}
                on:change={handleChange}
            >
                <option value="" disabled selected>Select a license</option>
                {#each licenses as L}
                    <option value={L}>
                        {L.text}
                    </option>
                {/each}
            </select>
            {#if selected && selected.id > 0}
                <small class="info"
                    >{@html `<i><b>${selected.fullName}</b> - ${selected.summary}</i>`}</small
                >
            {/if}
            <label for="license">license to create</label>
        </fieldset>
        <fieldset>
            <input
                id="copyrightHolder"
                name="copyrightHolder"
                on:change={handleChange}
                bind:value={$form.copyrightHolder}
            />
            {#if $errors.copyrightHolder}
                <small>{$errors.copyrightHolder}</small>
            {/if}
            <label for="copyrightHolder">copyright holder (author)</label>
        </fieldset>
        <fieldset>
            <input
                id="email"
                name="email"
                on:change={handleChange}
                bind:value={$form.email}
            />
            {#if $errors.email}
                <small>{$errors.email}</small>
            {/if}
            <label for="email">author's email</label>
        </fieldset>
        <fieldset>
            <input
                id="origin"
                name="origin"
                on:change={handleChange}
                bind:value={$form.origin}
            />
            {#if $errors.origin}
                <small>{$errors.origin}</small>
            {/if}
            <label for="origin">origin of the content</label>
        </fieldset>
        <button type="submit">download pre-filled license</button>
    </form>

    <div class="right">
        <h2>Preview</h2>
    </div>
</div>

<style>
    :root {
        --primary-light: #a6f9d6;
        --primary: #5be2a9;
        --primary-dark: #53ce9a;
        --secondary: #1e2145;
        --white: #fff;
        --grey: #e6e6ff;
        --grey-dark: #6d7098;
        /* --red: #ff6b6b; */
    }

    .flex {
        display: flex;
        flex-direction: row;
    }

    .flex > * {
        flex: 1;
    }

    .flex > .right {
        padding: 1rem;
    }

    input,
    select {
        font-family: inherit;
        font-size: inherit;
        max-width: 400px;
        width: 100%;
        padding: 12px;
        box-sizing: border-box;
        border: 1px solid var(--white);
        border-radius: 4px;
        transition: all 150ms ease;
        background: rgb(var(--bg-brighter));
        color: var(--white);
    }

    select {
        height: 45px;
    }

    input:focus,
    select:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgb(var(--pink));
        border-color: rgb(0, 0, 0, 0);
        /* background: rgb(var(--bg-brightest); */
        background: rgba(var(--pink), 0.1);
        transform: scale(1.02);
    }

    input:disabled,
    select:disabled {
        color: #ccc;
    }

    fieldset {
        border: none;
        display: flex;
        flex-direction: column;
    }

    input,
    select {
        order: 2;
    }
    label {
        order: 1;
        transition: all 0.1s ease-in-out;
    }
    input:focus + label {
        color: white;
        transform: scale(1.03) translateX(1%);
    }

    button {
        color: #fff;
        background-color: var(--primary);
        border: none;
        text-transform: uppercase;
        letter-spacing: 1.8px;
        outline: none;
        border-radius: 4px;
        display: block;
        margin-top: 12px;
        line-height: 1.8;
        font-size: 12px;
        padding: 10px 18px;
        min-width: 120px;
        transition: all 150ms ease;
        cursor: pointer;
    }

    button:disabled {
        background-color: var(--grey);
    }

    button:focus:not(:disabled) {
        box-shadow: 0 0 0 4px var(--primary-light);
    }

    button:hover:not(:disabled) {
        background-color: var(--primary-dark);
    }

    label {
        display: block;
        color: var(--grey-dark);
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 4px;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1.9px;
        line-height: 2;
    }

    /* used for errors */
    small {
        display: block;
        font-size: 12px;
        color: rgb(var(--red));
        margin-top: 10px;
        order: 2;
    }

    small.info {
        color: rgb(var(--pg));
        opacity: 0.5;
    }
</style>
