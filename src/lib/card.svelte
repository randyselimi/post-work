<script>
</script>

<div class="container">
	<slot name="header" />
	<slot name="content" />
	<slot name="footer" />
</div>

<style>
	.container {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
		margin: 0.25em;
		padding: 0.5em;
		border-radius: 10px;
	}
</style>
