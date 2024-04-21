<script lang="ts">
	import { softRoute } from '$lib/SoftRoute';

	export let columns: { label: string; key: string }[] = [];
	export let route = '';
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
			<tr
				tabindex="0"
				role="button"
				on:keydown={(e) => softRoute(e, route, row.id)}
				on:click={(e) => softRoute(e, route, row.id)}
			>
				{#each columns as column}
					<td>{row[column.key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
	<tfoot></tfoot>
</table>
