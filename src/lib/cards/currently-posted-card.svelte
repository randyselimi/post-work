<script lang="ts">
	import Card from './card.svelte';
	import WorkLargeSegment from '../segments/work-large-segment.svelte';

	export let work: any;
</script>

<Card>
	<WorkLargeSegment {work} slot="header" />

	<div slot="footer">
		<button>Pending</button>
	</div>
</Card>
