<script lang="ts">
	import Card from './card.svelte';
	import UserLargeSegment from '../segments/user-large-segment.svelte';

	export let user: any;
</script>

<Card>
	<UserLargeSegment {user} slot="header" />

	<div slot="footer">
		<button>Pending</button>
	</div>
</Card>
