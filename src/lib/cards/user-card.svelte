<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import TallAvatarChip from '$lib/chips/tall-avatar-chip.svelte';
	import SkillChip from '$lib/chips/skill-chip.svelte';

	export let user: any;
</script>

<ActionCard>
	<div tabindex="0" role="button" on:click={(e) => softRoute(e, 'user', user.id)}>
		<TallAvatarChip {user} />
		<p class="horizontal-detail-right">
			Skills: {#each user.skills as skill}
				<SkillChip {skill} />
			{/each}
		</p>
	</div>
	<div slot="footer">
		<button>Contact</button>
	</div>
</ActionCard>
