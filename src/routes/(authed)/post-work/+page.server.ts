import * as db from '$lib/db';
import type { Task } from '$lib/Task';

export function load() {
	const loggedId = 43;

	const tasks: Task[] = db.getTasks(loggedId);
	const postTasks = tasks.filter((task) => task.postedBy === loggedId);
	return {
		postTasks
	};
}
