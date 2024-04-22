<script lang="ts">
	import * as db from '$lib/db';
	import { softRoute } from '../SoftRoute';
	import ActionCard from './action-card.svelte';
	import WideAvatarChip from '$lib/chips/wide-avatar-chip.svelte';
	import MediumDivider from '$lib/dividers/medium-divider.svelte';
	import { loggedUser } from '$lib/db';

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
	<MediumDivider text="Posted By"></MediumDivider>
	<div tabindex="0" role="button" on:click={(e) => softRoute(e, 'user', user.id)}>
		<WideAvatarChip {user}></WideAvatarChip>
	</div>
	<div slot="footer">
		<button on:click={() => db.assignTask(work.id, $loggedUser.id)}>Accept</button>
	</div>
</ActionCard>

<style>
	.detail-container {
		display: flex;
		justify-content: space-between;
	}
</style>
