<script lang="ts">
	import Carousel from './carousel.svelte';
	import OpportunityCard from './cards/opportunity-card.svelte';
	export let opportunityItems: any;
</script>

<Carousel>
	{#each opportunityItems as item}
		<OpportunityCard work={item.work} user={item.user} />
	{/each}
</Carousel>
