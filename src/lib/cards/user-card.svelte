<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';

	export let user: any;
</script>

<ActionCard>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/user/' + user.id)}
		on:click={(e) => softRoute(e, '/user/' + user.id)}
	>
		<TallAvatarChip {user} />
	</div>
	<div slot="footer">
		<button>Pending</button>
	</div>
</ActionCard>
