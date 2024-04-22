<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import TeamColorChipLarge from '$lib/chips/team-color-chip-large.svelte';

	export let team: any;
</script>

<ActionCard>
	<div tabindex="0" role="button" on:click={(e) => softRoute(e, 'team', team.id)}>
		<h4><TeamColorChipLarge color={team.color}></TeamColorChipLarge>{team.name}</h4>
		<div class="vertical-detail">
			<p class="vertical-detail-top">Members</p>
			<p class="vertical-detail-bottom">{team.members.length}</p>
		</div>
	</div>
	<div slot="footer">
		<button>Contact</button>
	</div>
</ActionCard>
