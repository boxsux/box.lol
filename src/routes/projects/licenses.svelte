<script>
    import { createForm } from 'svelte-forms-lib';
    import * as yup from 'yup';

    const { form, errors, state, handleChange, handleSubmit } = createForm({
        initialValues: {
            name: '',
            email: '',
        },
        validate: (values) => {
            let errs = {};
            if (values.name === '') {
                errs['name'] = 'custom validation: name is required';
            }
            if (values.email === '') {
                errs['email'] = 'custom validation: email is required';
            }
            return errs;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    });
</script>

<h1>Personal License Generator</h1>
<p>
    From time to time, I write my own licenses for the stuff I make. If you want to generate your own license from the ones I have, this page is for you.
</p>

<form on:submit={handleSubmit}>
    <label for="license">license</label>
    <select id="license" name="license">
        <option value="" disabled selected>Select a license</option>
        <option value="NoD-1.0" title="No outside Distribution, version 1.0">NoD-1.0</option>
        <option value="NoD-ER-1.0" title="No outside Distribution - Exclusions Removed, verison 1.0">NoD-ER-1.0</option>
    </select>
    <label for="name">name</label>
    <input id="name" name="name" on:change={handleChange} bind:value={$form.name} />
    {#if $errors.name}
        <small>{$errors.name}</small>
    {/if}
    <label for="email">email</label>
    <input id="email" name="email" on:change={handleChange} bind:value={$form.email} />
    {#if $errors.email}
        <small>{$errors.email}</small>
    {/if}
    <button type="submit">submit</button>
</form>

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

    input,
    select,
    textarea {
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
    select:focus,
    textarea:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgb(var(--pink));
        border-color: rgb(0, 0, 0, 0);
        /* background: rgb(var(--bg-brightest); */
        background: rgba(var(--pink), 1);
        transform: scale(1.02);
    }

    input:disabled,
    select:disabled,
    textarea:disabled {
        color: #ccc;
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
    }
</style>
