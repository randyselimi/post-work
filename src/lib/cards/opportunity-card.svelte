<script lang="ts">
	import Card from './card.svelte';
	import WorkLargeSegment from '../segments/work-large-segment.svelte';
	import UserSmallSegment from '../segments/user-small-segment.svelte';

	export let work: any;
	export let user: any;
</script>

<Card>
	<WorkLargeSegment {work} slot="header" />
	<UserSmallSegment {user} slot="content" />
	<div slot="footer">
		<button>Accept</button>
	</div>
</Card>

<style>
	button {
		background-color: #202123;
		border-radius: 4px 4px 0px 0px;
		border: 0px;
		color: white;
		cursor: pointer;
		font-family: arial, sans-serif;
		font-size: 14px;
		height: 36px;
		line-height: 27px;
		min-width: 54px;
		padding: 0 16px;
		text-align: center;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		white-space: pre;
	}

	button:hover {
		opacity: 0.75;
	}
</style>
