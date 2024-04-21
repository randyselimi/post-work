<script lang="ts">
	import Carousel from './carousel.svelte';
	import OpportunityCard from '../cards/opportunity-card.svelte';
	export let opportunityItems: any;
	let cards = [];
</script>

<Carousel items={opportunityItems} let:item={card}>
	<OpportunityCard work={card} user={card.getPostedBy()} />
</Carousel>
