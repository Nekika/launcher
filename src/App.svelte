<script>
	import { onMount } from 'svelte';
	import { isInstalling } from './store';
	import Navbar from './components/Navbar.svelte';
	import Sidebar from './components/Sidebar.svelte';
	import Detail from './components/Detail.svelte';
	import Footer from './components/Footer.svelte';

	let games = [];
	let selected;

	$: footerVisible = selected && $isInstalling;

	onMount(async () => {
		const response = await fetch('/api/games.json');
		games = await response.json();
	})

	const onGameClick = game => {
		selected = game;
	}	
</script>

<main>
	<Navbar />
	<Sidebar items={games} onItemClick={onGameClick} />
	<Detail game={selected} />
	{#if footerVisible}
		<Footer game={selected} />
	{/if}
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(12, 1fr);
		background-color: #C1A5A9;
	}
</style>