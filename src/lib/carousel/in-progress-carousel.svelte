<script lang="ts">
	import Carousel from './carousel.svelte';
	import InProgressCard from '../cards/in-progress-card.svelte';
	export let inProgressItems: any;
</script>

<Carousel items={inProgressItems} let:item={card}>
	<InProgressCard user={card.getAssignedTo()} work={card} />
</Carousel>
