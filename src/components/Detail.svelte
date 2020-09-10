<script>
    import { isSidebarExpanded, isDownloading } from '../store';

    export let selected;

    $: gridColumnStart = $isSidebarExpanded ? 4 : 2;
    $: gridRowEnd = $isDownloading ? -2 : -1;

</script>

<div id="detail" style="grid-area: 2 / {gridColumnStart} / {gridRowEnd} / -1" >
    {#if selected}
        <h2>{selected.title}</h2>
    {:else}
        <p class="hint">Select a game in the list beside</p>
    {/if}
</div>

<style>
    #detail {
        grid-row: 2 / -2;
        background-color: #C1A5A9;
    }

    h2, p {
        text-align: center;
    }
</style>