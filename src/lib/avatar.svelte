<script lang="ts">
	import type { User } from './User';

	const api = 'https://api.dicebear.com/8.x/personas/svg?';
	export let size = 1;
	export let email = '';
	let seed = email;
</script>

<img
	style="border-radius: 50%;  box-shadow: 0px 2px 1px 0px rgba(0,0,0,0.2);"
	width="{size}rem"
	height="{size}rem"
	src="{api}seed={seed}"
	alt={email}
/>
