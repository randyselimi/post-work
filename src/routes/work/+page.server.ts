import * as db from '$lib/db';
import type { Task } from '$lib/Task';

export function load() {
	const loggedId = 2;

	const tasks: Task[] = db.getTasks(loggedId);

	return {
		tasks
	};
}
