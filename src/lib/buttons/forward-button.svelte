<script lang="ts">
	import './button.css';
	export let disabled = false;
</script>

<button class:no-hover={disabled} class="invisible-button" on:click>
	<svg
		class:disabled
		class:enabled={!disabled}
		xmlns="http://www.w3.org/2000/svg"
		height="1em"
		viewBox="0 0 320 512"
		><path
			d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
		/></svg
	>
</button>

<style>
	.enabled {
		fill: #000000;
	}
	.disabled {
		fill: rgba(135, 133, 134, 0.43);
	}
	.no-hover {
		pointer-events: none;
	}
</style>
