<script lang="ts">
	import type { Task } from '$lib/Task';
	import PostWorkList from '$lib/lists/post-work-list.svelte';

	export let data;

	const postWorkItems: Task[] = data.postTasks;
</script>

<PostWorkList {postWorkItems} />
