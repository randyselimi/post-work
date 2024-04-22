<script lang="ts">
	import * as db from '$lib/db';
	import './card.css';
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import WideAvatarChip from '$lib/chips/wide-avatar-chip.svelte';
	import MediumDivider from '$lib/dividers/medium-divider.svelte';

	export let work: any;
	export let user: any;
</script>

<ActionCard>
	<div tabindex="0" role="button" on:click={(e) => softRoute(e, 'work', work.id)}>
		<h4>{work.title}</h4>
		<div>
			<div class="detail-container">
				<div class="vertical-detail">
					<p class="vertical-detail-top">Hours</p>
					<p class="vertical-detail-bottom">{work.hours}</p>
				</div>
				<div>
					<p class="vertical-detail-top">Due</p>
					<p class="vertical-detail-bottom">{work.endDate}</p>
				</div>
			</div>
			<div class="horizontal-detail">
				<p class="horizontal-detail-right">Skills: {work.skills}</p>
			</div>
		</div>
	</div>
	{#if work.status === 'Sign-off'}
		<MediumDivider text="Pending Sign-off"></MediumDivider>
	{:else}
		<MediumDivider text="Doing for"></MediumDivider>
	{/if}
	<div tabindex="0" role="button" on:click={(e) => softRoute(e, 'user', user.id)}>
		<WideAvatarChip {user}></WideAvatarChip>
	</div>

	<div slot="footer">
		{#if work.status === 'Assigned'}
			<button on:click={() => db.updateState(work.id, 'Sign-off')}>Complete</button>
		{:else if work.status === 'Late'}
			<button disabled>Contact</button>
		{:else}
			<button disabled>No Action</button>
		{/if}
	</div>
</ActionCard>

<style>
	.detail-container {
		display: flex;
		justify-content: space-between;
	}
</style>
