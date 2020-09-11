<script>
    import { isInstalling } from '../store';

    $: display = $isInstalling ? 'inherit' : 'none';

</script>

<div style="display: {display}"></div>

<style>
    div {
        grid-column: 1 / -1;
        grid-row-start: -2;
        background-color: #9A4C95;
    }
</style>