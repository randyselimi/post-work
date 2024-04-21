<script lang="ts">
	import Carousel from './carousel.svelte';
	import CurrentlyPostedCard from '../cards/currently-posted-card.svelte';
	export let currentlyPostedItems: any;
</script>

<Carousel items={currentlyPostedItems} let:item={card}>
	<CurrentlyPostedCard work={card} />
</Carousel>
