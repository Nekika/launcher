<script>
    import { isSidebarExpanded, isInstalling } from '../store';

    export let game;

    $: gridColumnStart = $isSidebarExpanded ? 4 : 2;
    $: gridRowEnd = $isInstalling ? -2 : -1;

    const runInstall = () => {
        $isInstalling = true;
    }

    const runUninstall = () => {
        game.installed = false;
    }

</script>

<div id="detail" style="grid-area: 2 / {gridColumnStart} / {gridRowEnd} / -1" >
    {#if game}
        <h2>{game.title}</h2>
        {#if game.installed}
            <input id="uninstall-button"
                   type="button" 
                   value="Uninstall"
                   on:click="{runUninstall}"
            >
        {:else}
            <input id="install-button"
                   type="button" 
                   value="Install"
                   on:click="{runInstall}"
            >
        {/if}
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

    input[type=button] {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    input[type=button]:hover {
        cursor: pointer;
    }
</style>