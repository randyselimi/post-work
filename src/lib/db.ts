import { browser } from '$app/environment';
import { get, writable, type Writable } from 'svelte/store';
import { teamData, userData, taskData } from './data';
import { type TeamData, Team } from './Team';
import { type UserData, User } from './User';
import { type TaskData, Task } from './Task';

export const storedTeams: Writable<TeamData[]> = writable(getTeamData());

export const storedUsers: Writable<UserData[]> = writable(getUserData());

export const storedTasks: Writable<TaskData[]> = writable(getTaskData());

export const loggedUser: Writable<User> = writable();

export function getTeamData(): TeamData[] {
	if (!browser) {
		return [];
	}

	let data: TeamData[] =
		localStorage.getItem('teams') && JSON.parse(localStorage.getItem('teams') as string);
	if (!data) {
		localStorage.setItem('teams', JSON.stringify(teamData));
		data = JSON.parse(localStorage.getItem('teams') as string);
	}
	return data;
}

export function getUserData(): UserData[] {
	if (!browser) {
		return [];
	}

	let data: UserData[] =
		localStorage.getItem('users') && JSON.parse(localStorage.getItem('users') as string);
	if (!data) {
		localStorage.setItem('users', JSON.stringify(userData));
		data = JSON.parse(localStorage.getItem('users') as string);
	}
	return data;
}

export function getTaskData(): TaskData[] {
	if (!browser) {
		return [];
	}

	let data: TaskData[] =
		localStorage.getItem('tasks') && JSON.parse(localStorage.getItem('tasks') as string);
	if (!data) {
		localStorage.setItem('tasks', JSON.stringify(taskData));
		data = JSON.parse(localStorage.getItem('tasks') as string);
	}
	return data;
}

export function resetData() {
	if (browser) {
		localStorage.clear();
	}
	storedTeams.set(teamData);
	storedUsers.set(userData);
	storedTasks.set(taskData);
}

export function postTask(taskData: TaskData): void {
	storedTasks.update((tasks) => {
		tasks.push(taskData);
		return tasks;
	});
	storedUsers.update((users) => {
		const user = users.find((data) => data.id === taskData.postedBy)!;
		user.workPosted.push(taskData.id);
		return users;
	});
}

export function assignTask(taskId: number, userId: number): void {
	storedTasks.update((tasks) => {
		const task = tasks.find((data) => data.id === taskId)!;
		task.assignedTo = userId;
		task.status = 'Assigned';
		return tasks;
	});
	storedUsers.update((users) => {
		const user = users.find((data) => data.id === userId)!;
		user.workAssigned.push(taskId);
		return users;
	});
}

export function updateState(taskId: number, state: string): void {
	debugger;
	storedTasks.update((tasks) => {
		const task = tasks.find((data) => data.id === taskId)!;
		task.status = state;
		return tasks;
	});
}

export function updateAvailability(userId: number, availability: object): void {
	storedUsers.update((users) => {
		const user = users.find((data) => data.id === userId)!;
		user.availability = availability;
		return users;
	});
}

export function getTeam(teamId: number): Team {
	const data: TeamData = get(storedTeams).find((data) => data.id === teamId)!;
	const team = new Team(data);
	return team;
}

export function getTeams(teamIds: number[]): Team[] {
	const data: TeamData[] = teamIds.map((teamId) => getTeam(teamId));
	const teams: Team[] = data.map((data) => {
		return new Team(data);
	});
	// const team: Team = {
	// 	id: data.id,
	// 	name: data.name,
	// 	members: data.members,
	// 	connectedTeams: data.connectedTeams,
	// 	color: data.color
	// };
	// const teams: Team[] = team.connectedTeams.map((connectedTeam) => {
	// 	const data: TeamData = teamData.find((data) => data.id === connectedTeam)!;
	// 	const team: Team = {
	// 		id: data.id,
	// 		name: data.name,
	// 		members: data.members,
	// 		connectedTeams: data.connectedTeams,
	// 		color: data.color
	// 	};
	// 	return team;
	// });
	return teams;
}

export function getUser(userId: number): User {
	const data: UserData = get(storedUsers).find((data) => data.id === userId)!;
	const user = new User(data);

	return user;
}

export function getUsers(userIds: number[]): User[] {
	const data: UserData[] = userIds.map((userId) => getUser(userId));
	const users: User[] = data.map((data) => {
		return new User(data);
	});
	// const users: User[] = data.map((data) => {
	// 	const user: User = {
	// 		id: data.id,
	// 		firstName: data.firstName,
	// 		lastName: data.lastName,
	// 		fullName: data.fullName,
	// 		email: data.email,
	// 		avatarType: data.avatarType,
	// 		role: data.role,
	// 		team: data.team,
	// 		workPosted: data.workPosted,
	// 		workAssigned: data.workAssigned
	// 	};
	// 	return user;
	// });
	return users;
}

export function getTask(taskId: number): Task {
	const data: TaskData = get(storedTasks).find((data) => data.id === taskId)!;
	const task: Task = new Task(data);

	return task;
}

export function getTasks(taskIds: number[]): Task[] {
	const data: TaskData[] = taskIds.map((taskId) => getTask(taskId));
	const tasks: Task[] = data.map((data) => {
		return new Task(data);
	});
	return tasks;
}

export function getAvailableTasks(): Task[] {
	const data: TaskData[] = get(storedTasks).filter((data) => data.status === 'Pending');
	const tasks: Task[] = data.map((data) => {
		return new Task(data);
	});
	return tasks;
}
