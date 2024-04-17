<script lang="ts">
	import type { Task } from '$lib/Task';
	import GetWorkList from '$lib/lists/get-work-list.svelte';

	export let data;

	const getWorkItems: Task[] = data.getTasks;
</script>

<GetWorkList {getWorkItems} />
