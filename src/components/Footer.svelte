<script>
    import { isDownloading } from '../store';

    $: display = $isDownloading ? 'inherit' : 'none';

</script>

<div style="display: {display}"></div>

<style>
    div {
        grid-column: 1 / -1;
        grid-row-start: -2;
        background-color: #9A4C95;
    }
</style>