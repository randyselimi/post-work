<script lang="ts">
	import Card from './card.svelte';
	import TeamLargeSegment from '../segments/team-large-segment.svelte';

	export let team: any;
</script>

<Card>
	<TeamLargeSegment {team} slot="full" />

	<div slot="footer">
		<button>Pending</button>
	</div>
</Card>
