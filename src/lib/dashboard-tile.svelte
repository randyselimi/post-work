<script lang="ts">
	export let title = '';
</script>

<div class="tile">
	<h3 class="title">{title}</h3>
	<slot />
</div>

<style>
	.tile {
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		align-items: center;
		justify-content: space-between;
		padding: 5px 0px;
	}
	.title {
		text-align: center;
	}
</style>
