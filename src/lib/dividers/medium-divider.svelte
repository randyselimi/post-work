<script lang="ts">
	export let text = '';
</script>

<!-- <div class="container"> -->

{#if text}
	<div class="divider-container">
		<div class="dash" />
		<p style="padding: 0 8px; font-size: .6rem; white-space: nowrap;">{text}</p>
		<div class="dash" />
	</div>
{:else}
	<div class="divider-container">
		<div class="dash" />
	</div>
{/if}

<style>
	.divider-container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 1rem;
	}
	.dash {
		border: 1px solid rgb(0, 0, 0);
		width: 100%;
		height: 0px;
	}
</style>
