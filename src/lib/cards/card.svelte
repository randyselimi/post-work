<script>
</script>

<div class="card">
	<slot class="full" name="full" />
	<slot class="large" name="large" />
	<slot class="small" name="small" />
	<slot class="footer" name="footer" />
</div>

<style>
	.card {
		background-color: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
		margin: 0.25em;
		padding: 0.5em;
		border-radius: 10px;
	}
	.full {
		flex: 1;
	}
	.large {
		flex: 1;
	}
	.small {
		flex: 1;
	}
	.footer {
		flex: 1;
	}
</style>
