<script lang="ts">
	import Card from './card.svelte';
	import WorkLargeSegment from './work-large-segment.svelte';
	import UserSmallSegment from './user-small-segment.svelte';

	export let work: any;
	export let user: any;
</script>

<Card>
	<WorkLargeSegment {work} slot="header" />
	<UserSmallSegment {user} slot="content" />
	<div slot="footer">
		<button>Accept</button>
	</div>
</Card>
