<script lang="ts">
	import Card from './card.svelte';
	import WorkLargeSegment from '../segments/work-large-segment.svelte';
	import UserSmallSegment from '../segments/user-small-segment.svelte';

	export let work: any;
	export let user: any;
</script>

<Card>
	<WorkLargeSegment {work} slot="large" />
	<UserSmallSegment {user} slot="small" />
	<div slot="footer">
		<button>Accept</button>
	</div>
</Card>
