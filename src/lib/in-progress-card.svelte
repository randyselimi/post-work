<script lang="ts">
	import Card from './card.svelte';
	import UserLargeSegment from './user-large-segment.svelte';
	import WorkSmallSegment from './work-small-segment.svelte';

	export let user: any;
	export let work: any;
</script>

<Card>
	<UserLargeSegment {user} slot="header" />
	<WorkSmallSegment {work} slot="content" />

	<div slot="footer">
		<button>Sign Off</button>
	</div>
</Card>
