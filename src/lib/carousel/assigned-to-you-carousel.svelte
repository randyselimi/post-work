<script lang="ts">
	import type { Task } from '$lib/Task';
	import Carousel from './carousel.svelte';
	import AssignedToYouCard from '../cards/assigned-to-you-card.svelte';
	export let assignedToYouItems: Task[];
</script>

<Carousel>
	{#each assignedToYouItems as item}
		<AssignedToYouCard work={item} user={item.postedBy} />
	{/each}
</Carousel>
