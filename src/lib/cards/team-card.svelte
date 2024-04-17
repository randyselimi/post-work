<script lang="ts">
	import Card from './card.svelte';
	import TeamFullSegment from '../segments/team-full-segment.svelte';

	export let team: any;
</script>

<Card>
	<TeamFullSegment {team} slot="primary" />

	<div slot="footer">
		<button>Pending</button>
	</div>
</Card>
