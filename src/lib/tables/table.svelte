<script lang="ts">
	export let columns: { label: string; key: string }[] = [];
	export let data: any[] = [];
</script>

<table>
	<thead>
		<tr>
			{#each columns as column}
				<th>{column.label}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				{#each columns as column}
					<td>{row[column.key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
	<tfoot></tfoot>
</table>
