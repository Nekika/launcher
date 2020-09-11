<script>
    import { isSidebarExpanded, isInstalling } from '../store';

    export let selected;

    $: gridColumnStart = $isSidebarExpanded ? 4 : 2;
    $: gridRowEnd = $isInstalling ? -2 : -1;

    const runInstall = () => {
        isInstalling.set(true);
    }

</script>

<div id="detail" style="grid-area: 2 / {gridColumnStart} / {gridRowEnd} / -1" >
    {#if selected}
        <h2>{selected.title}</h2>
        <input id="install-button"
           type="button" 
           value="Install"
           on:click="{runInstall}">
    {:else}
        <p class="hint">Select a game in the list beside</p>
    {/if}
</div>

<style>
    #detail {
        grid-row: 2 / -2;
        background-color: #C1A5A9;
        position: relative;
    }

    h2, p {
        text-align: center;
    }

    #install-button {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    #install-button:hover {
        cursor: pointer;
    }
</style>