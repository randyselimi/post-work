<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import MediumDivider from '$lib/dividers/medium-divider.svelte';

	export let user: any;
	export let work: any;
</script>

<ActionCard>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/user/' + user.id)}
		on:click={(e) => softRoute(e, '/user/' + user.id)}
	>
		<TallAvatarChip {user}></TallAvatarChip>
	</div>
	<MediumDivider text="Assigned To"></MediumDivider>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/work/' + work.id)}
		on:click={(e) => softRoute(e, '/work/' + work.id)}
	>
		<h4>{work.title}</h4>
		<p class="segment-element">Hours: {work.hours} Due: 7 days</p>
	</div>
	<div slot="footer">
		<button>Sign Off</button>
	</div>
</ActionCard>
