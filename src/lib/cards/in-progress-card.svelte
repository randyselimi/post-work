<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';
	import Avatar from '$lib/avatar.svelte';

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
		<div class="segment-container">
			<h4 class="segment-title">{user.fullName}</h4>
			<Avatar size={75} email={user.email} />
			<p class="segment-element">{user.role}</p>
		</div>
	</div>
	<div
		tabindex="0"
		role="button"
		on:keydown={(e) => softRoute(e, '/work/' + work.id)}
		on:click={(e) => softRoute(e, '/work/' + work.id)}
	>
		<h4 class="segment-title">{work.title}</h4>
		<p class="segment-element">Hours: {work.hours} Due: {work.endDate}</p>
	</div>
	<div slot="footer">
		<button>Sign Off</button>
	</div>
</ActionCard>
