<script lang="ts">
	export let title = '';
</script>

<div class="dashboard">
	<h2 class="title">{title}</h2>
	<slot name="actions" />
	<div class="content">
		<slot name="content" />
	</div>
</div>

<style>
	.dashboard {
		margin: 10px;
	}
	.title {
		margin-bottom: 10px;
	}
	.content {
		border-radius: 0 10px 10px;
		display: flex;
		padding: 10px;
		flex-direction: column;
		align-items: stretch;
		background-color: white;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	}
</style>
