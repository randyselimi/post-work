<script lang="ts">
	export let text = '';
</script>

<!-- <div class="container"> -->

{#if text}
	<div class="divider-container">
		<div class="dash" />
		<p style="padding: 0 .7rem">{text}</p>
		<div class="dash" />
	</div>
{:else}
	<div class="dash" />
{/if}

<style>
	.divider-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80%;
	}
	.dash {
		border: 1px solid gray;
		width: 120px;
		height: 0px;
	}
</style>
