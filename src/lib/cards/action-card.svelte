<script>
	import Card from './card.svelte';
	import MediumDivider from '$lib/dividers/medium-divider.svelte';
</script>

<Card>
	<div class="content">
		<slot />
	</div>
	<MediumDivider text=""></MediumDivider>
	<div class="footer">
		<slot name="footer" />
	</div>
</Card>

<style>
	.content {
		height: 75%;
	}
	.footer {
		height: 25%;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
</style>
