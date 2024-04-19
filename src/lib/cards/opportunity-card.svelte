<script lang="ts">
	import { softRoute } from '../SoftRoute';
	import ActionCard from './action-card.svelte';
	import WideAvatarChip from '$lib/chips/wide-avatar-chip.svelte';

	export let work: any;
	export let user: any;
</script>

<ActionCard>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/work/' + work.id)}
		on:click={(e) => softRoute(e, '/work/' + work.id)}
	>
		<h4 class="segment-title">{work.title}</h4>
		<div>
			<div class="segment-container">
				<div>
					<p class="segment-element">Hours</p>
					<p class="segment-element">{work.hours}</p>
				</div>
				<div>
					<p class="segment-element">Due</p>
					<p class="segment-element">{work.endDate}</p>
				</div>
			</div>
			<p class="segment-element">Skills {work.skills}</p>
		</div>
	</div>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/user/' + user.id)}
		on:click={(e) => softRoute(e, '/user/' + user.id)}
	>
		<WideAvatarChip {user}></WideAvatarChip>
	</div>
	<div slot="footer">
		<button>Accept</button>
	</div>
</ActionCard>
