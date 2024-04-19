<script lang="ts">
	import ActionCard from './action-card.svelte';
	import { softRoute } from '../SoftRoute';

	export let work: any;
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
	<div slot="footer">
		<button>Pending</button>
	</div>
</ActionCard>
