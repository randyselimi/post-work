<script lang="ts">
	import Carousel from './carousel.svelte';
	import AssignedToYouCard from '../cards/assigned-to-you-card.svelte';
	export let assignedToYouItems: any;
</script>

<Carousel>
	{#each assignedToYouItems as item}
		<AssignedToYouCard work={item.work} user={item.user} />
	{/each}
</Carousel>
