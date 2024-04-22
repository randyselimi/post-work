<script lang="ts">
	export let skill: string;
	export let size = 5;
</script>

<span class="skill-chip">{skill}</span>

<style>
	.skill-chip {
		border-radius: 4px;
		padding: 3px;
		display: inline-block;
		border: 1px solid black;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		max-width: 5rem;
		font-size: 0.55rem;
		margin: 0 1px;
	}
</style>
