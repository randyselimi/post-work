<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';

	export let team: any;
</script>

<ActionCard>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/team/' + team.id)}
		on:click={(e) => softRoute(e, '/team/' + team.id)}
	>
		<h4>{team.name}</h4>
		<div class="vertical-detail">
			<p class="vertical-detail-top">Members</p>
			<p class="vertical-detail-bottom">{team.members.length}</p>
		</div>
	</div>
	<div slot="footer">
		<button>Pending</button>
	</div>
</ActionCard>
