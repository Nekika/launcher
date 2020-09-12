<script>
    import { isSidebarExpanded, isInstalling } from '../store';

    export let items;
    export let onItemClick;

    $: toggleIconDirection = $isSidebarExpanded ? 'left' : 'right';
    $: gridColumnEnd = $isSidebarExpanded ? 4 : 2;
    $: gridRowEnd = $isInstalling ? -2 : -1;

    const toggle = () => {
        isSidebarExpanded.update(value => !value);
    }
</script>

<div id="sidebar" style="grid-area: 2 / 1 / {gridRowEnd} / {gridColumnEnd}">
    <ul>
        {#each items as item}
            <li on:click="{onItemClick(item)}">
                <figure>
                    <img src="{item.icon}" alt="{item.name} icon">
                    {#if $isSidebarExpanded}
                        <figcaption>{item.title}</figcaption>
                    {/if}
                </figure>
            </li>
        {/each}
    </ul>
    <div class="button-container">
        <img id="toggle-button" 
             src="/images/arrow-{toggleIconDirection}.icon.svg" 
             alt="toggle button icon" 
             on:click="{toggle}"
        >
    </div>
</div>

<style>
    div {
        grid-row: 2 / -2;
        position: relative;
        background-color: #4D2D52;
    }

    ul {
        padding: 0;
    }

    li {
        list-style: none;
        margin: 8px auto;
        color: #C1A5A9;
    }

    li:hover {
        color: #FAFAFA;
    }

    li:hover, #toggle-button:hover {
        cursor: pointer
    }

    li:hover > figure > img, #toggle-button:hover {
        transform: scale(1.25);
    }

    figure {
        margin: 0;
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    figure > img {
        margin: 8px auto;
    }

    .button-container {
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        display: flex;
    }

    #toggle-button {
        margin: auto;
    }
</style>