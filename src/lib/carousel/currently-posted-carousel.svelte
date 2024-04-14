<script lang="ts">
	import Carousel from './carousel.svelte';
	import CurrentlyPostedCard from '../cards/currently-posted-card.svelte';
	export let currentlyPostedItems: any;
</script>

<Carousel>
	{#each currentlyPostedItems as item}
		<CurrentlyPostedCard work={item} />
	{/each}
</Carousel>
