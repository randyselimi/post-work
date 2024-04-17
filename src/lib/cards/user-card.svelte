<script lang="ts">
	import Card from './card.svelte';
	import UserFullSegment from '../segments/user-full-segment.svelte';

	export let user: any;
</script>

<Card>
	<UserFullSegment {user} slot="primary" />

	<div slot="footer">
		<button>Pending</button>
	</div>
</Card>
