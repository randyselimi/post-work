<script lang="ts">
	import Carousel from './carousel.svelte';
	import OpportunityCard from '../cards/opportunity-card.svelte';
	import { loggedUser } from '$lib/db';
	export let opportunityItems: any;
	let cards = [];

	function hasAvailability(weeks) {
		return weeks.find((week) => week.days.find((day) => day.hours));
	}
	$: weeks = $loggedUser && $loggedUser.availability;
</script>

{#if weeks && !hasAvailability(weeks)}
	<h3 style="text-align: center;">Please update available hours to see opportunities</h3>
{:else}
	<Carousel items={opportunityItems} let:item={card}>
		<OpportunityCard work={card} user={card.getPostedBy()} />
	</Carousel>
{/if}
