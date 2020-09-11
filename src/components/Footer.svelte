<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { isInstalling } from '../store';

    export let game;

    const downloadSpeed = 1000; // MB/s
    const progress = tweened(0, {
        duration: 2500,
        easing: cubicOut
    });

    $: downloadSize = game.size; // MB
    $: downloadTime = downloadSize / downloadSpeed; // s
    $: downloadCurrentSize = $progress * downloadSize;
    $: downloadProgress = downloadCurrentSize / downloadSize * 100;

    $: if ($progress === 1) {
        game.installed = true;
        $isInstalling = false;
    }
    
    const download = () => {
        for (let sec = 1; sec <= downloadTime; sec++) {
            setTimeout(() => {
                const ratio = sec * downloadSpeed / downloadSize;
                progress.set(ratio);
            }, sec * 1000);
        }
    }

    onMount(() => {
        download();
    })

</script>

<div>
    <p class="hint">{downloadProgress.toFixed(2)} % - {downloadCurrentSize.toFixed(2)} MB / {downloadSize} MB ({downloadSpeed} MB/s)</p>
    <progress value={$progress}></progress>
</div>

<style>
    div {
        grid-column: 1 / -1;
        grid-row-start: -2;
        padding: 0 8px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #9A4C95;
    }

    progress {
        width: 100%;
    }

    p.hint {
        margin: 0;
        font-size: x-small;
        text-align: center;
    }
</style>