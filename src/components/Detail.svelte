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
    <h2 class="game-title">{game.title}</h2>
    <div class="game-content">
        {@html game.content}
    </div>
    {#if game.installed}
        <input type="button"
               value="Uninstall"
               on:click="{runUninstall}"
        >
    {:else}
        <input type="button"
               value="Install"
               on:click="{runInstall}"
        >
    {/if}
</div>

<style>
    #detail {
        grid-row: 2 / -2;
        background-color: #C1A5A9;
        position: relative;
        margin: 12px;
    }

    h2 {
        text-align: center;
    }

    .game-content {
        text-align: justify;
    }

    input[type=button] {
        position: absolute;
        bottom: 0;
        right: 0;
        margin-bottom: 0;
        width: 120px;
        height: 80px;
        border-radius: 4px;
        color: #D9D9D9;
        border-color: #D9D9D9;
        background-color: #1D1A31;
    }

    input[type=button]:hover {
        cursor: pointer;
    }


</style>