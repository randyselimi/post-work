import * as db from '$lib/db';
import type { Task } from '$lib/Task';

export function load({ params }) {
	const task: Task = db.getTask(Number(params.slug));

	return {
		task
	};
}
