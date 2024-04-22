<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import SkillChip from '$lib/chips/skill-chip.svelte';

	export let work: any;
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
				<div class="vertical-detail">
					<p class="vertical-detail-top">Due</p>
					<p class="vertical-detail-bottom">{work.endDate}</p>
				</div>
			</div>
			<div class="horizontal-detail">
				<p class="horizontal-detail-right">
					Skills: {#each work.skills as skill}
						<SkillChip {skill} />
					{/each}
				</p>
			</div>
		</div>
	</div>
	<div slot="footer">
		<button disabled>No Action</button>
	</div>
</ActionCard>

<style>
	.detail-container {
		display: flex;
		justify-content: space-between;
	}
</style>
