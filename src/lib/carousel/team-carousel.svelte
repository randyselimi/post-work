<script lang="ts">
	import Carousel from './carousel.svelte';
	import TeamCard from '../cards/team-card.svelte';
	export let teams: any;
</script>

<Carousel items={teams} let:item={team}>
	<TeamCard {team} />
</Carousel>
