<script lang="ts">
	import type { Task } from '$lib/Task';
	import Carousel from './carousel.svelte';
	import AssignedToYouCard from '../cards/assigned-to-you-card.svelte';
	export let assignedToYouItems: Task[];
	console.log(assignedToYouItems);
</script>

<Carousel items={assignedToYouItems} let:item={card}>
	<AssignedToYouCard work={card} user={card.getPostedBy()} />
</Carousel>
