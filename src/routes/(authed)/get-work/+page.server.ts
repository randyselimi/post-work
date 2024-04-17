import * as db from '$lib/db';
import type { Task } from '$lib/Task';

export function load() {
	const loggedId = 43;

	const tasks: Task[] = db.getTasks(loggedId);
	const getTasks = tasks.filter(
		(task) =>
			task.assignedTo === loggedId || (task.assignedTo === null && task.postedBy !== loggedId)
	);
	return {
		getTasks
	};
}
