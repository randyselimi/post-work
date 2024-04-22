<script lang="ts">
	import SkillChip from './skill-chip.svelte';

	export let skills: string[] = [];
	let value = '';
</script>

<label for="chips-input" class="chips">
	<input
		bind:value
		on:keyup|stopPropagation={(e) => {
			e.preventDefault();
			e.stopPropagation();
			if (e.key === 'Enter') {
				skills = [...skills, value];
				value = '';
			}
		}}
		type="text"
		id="chips-input"
	/>
	{#each skills as skill}
		<SkillChip {skill} />
	{/each}
</label>

<style>
	.chips {
		border: 1px solid #ccc;
		border-radius: 2px;
		padding: 10px;
		display: block;
		width: 400px;
		max-width: 100%;
	}
	input {
		border: none;
		appearance: none;
	}
</style>
