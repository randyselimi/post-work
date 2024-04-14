<script lang="ts">
	import Carousel from './carousel.svelte';
	import InProgressCard from '../cards/in-progress-card.svelte';
	export let inProgressItems: any;
</script>

<Carousel>
	{#each inProgressItems as item}
		<InProgressCard user={item.assignedTo} work={item} />
	{/each}
</Carousel>
