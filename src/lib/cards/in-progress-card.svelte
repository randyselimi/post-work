<script lang="ts">
	import * as db from '$lib/db';
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import MediumDivider from '$lib/dividers/medium-divider.svelte';

	export let user: any;
	export let work: any;
	debugger;
</script>

<ActionCard>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, 'user', user.id)}
		on:click={(e) => softRoute(e, 'user', user.id)}
	>
		<TallAvatarChip {user}></TallAvatarChip>
	</div>
	<MediumDivider text="Assigned To"></MediumDivider>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, 'work', work.id)}
		on:click={(e) => softRoute(e, 'work', work.id)}
	>
		<h4>{work.title}</h4>
		<p class="segment-element">Hours: {work.hours} Due: 7 days</p>
	</div>
	<div slot="footer">
		{#if work.status === 'Sign-off'}
			<button on:click={() => db.updateState(work.id, 'Complete')}>Sign Off</button>
		{:else if work.status === 'Late'}
			<button disabled>Contact</button>
		{:else}
			<button disabled>No Action</button>
		{/if}
	</div>
</ActionCard>
