<script>
</script>

<div class="container">
	<slot name="header" />
	<slot name="content" />
	<slot name="footer" />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0px 8px 12px -5px #00000026;
		margin: 0.5em;
		padding: 0.5em;
	}
</style>
