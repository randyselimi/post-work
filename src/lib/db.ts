import { teamData, userData, taskData } from './data';
import type { TeamData, Team } from './Team';
import type { UserData, User } from './User';
import type { TaskData, Task } from './Task';

// // lib/db.ts
// import { Pool } from 'pg';

// /**
//  * Create a new connection pool to the database.
//  */
// const pool = new Pool({
// 	database: import.meta.env.POSTGRES_DB || 'postgres',
// 	user: import.meta.env.POSTGRES_USERNAME || 'postgres',
// 	host: import.meta.env.POSTGRES_HOST || 'localhost',
// 	port: Number(import.meta.env.POSTGRES_PORT || 5432)
// });

// /**
//  * Connect to the PostgreSQL database.
//  * @returns {Promise<import("pg").Client>} A new client from the connection pool.
//  */
// export const connectToDB = async () => await pool.connect();

export function getTeam(teamId: number): Team {
	const data: TeamData = teamData.find((data) => data.id === teamId)!;
	const team: Team = {
		id: data.id,
		name: data.name,
		members: data.members,
		connectedTeams: data.connectedTeams
	};
	team.members = team.members.map((member) => {
		const data: UserData = userData.find((data) => data.id === member)!;
		const user: User = {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			fullName: data.fullName,
			email: data.email,
			avatarType: data.avatarType,
			role: data.role,
			team: data.team,
			workPosted: data.workPosted,
			workAssigned: data.workAssigned
		};
		return user;
	}) as User[];
	return team;
}

export function getTeams(teamId: number): Team[] {
	const data: TeamData = teamData.find((data) => data.id === teamId)!;
	const team: Team = {
		id: data.id,
		name: data.name,
		members: data.members,
		connectedTeams: data.connectedTeams
	};
	const teams: Team[] = team.connectedTeams.map((connectedTeam) => {
		const data: TeamData = teamData.find((data) => data.id === connectedTeam)!;
		const team: Team = {
			id: data.id,
			name: data.name,
			members: data.members,
			connectedTeams: data.connectedTeams
		};
		return team;
	});
	return teams;
}

export function getUser(userId: number): User {
	const data: UserData = userData.find((data) => data.id === userId)!;
	const user: User = {
		id: data.id,
		firstName: data.firstName,
		lastName: data.lastName,
		fullName: data.fullName,
		email: data.email,
		avatarType: data.avatarType,
		role: data.role,
		team: data.team,
		workPosted: data.workPosted,
		workAssigned: data.workAssigned
	};

	user.team = getTeam(user.team as number);

	user.workPosted = user.workPosted.map((postedTask) => {
		const data: TaskData = taskData.find((data) => data.id === postedTask)!;
		const task: Task = {
			id: data.id,
			title: data.title,
			description: data.description,
			skills: data.skills,
			role: data.role,
			hours: data.hours,
			billable: data.billable,
			billingInfo: data.billingInfo,
			postedBy: data.postedBy,
			assignedTo: data.assignedTo,
			status: data.status,
			startDate: data.startDate,
			endDate: data.endDate
		};
		return task;
	}) as Task[];
	user.workAssigned = user.workAssigned.map((assignedTask) => {
		const data: TaskData = taskData.find((data) => data.id === assignedTask)!;
		const task: Task = {
			id: data.id,
			title: data.title,
			description: data.description,
			skills: data.skills,
			role: data.role,
			hours: data.hours,
			billable: data.billable,
			billingInfo: data.billingInfo,
			postedBy: data.postedBy,
			assignedTo: data.assignedTo,
			status: data.status,
			startDate: data.startDate,
			endDate: data.endDate
		};
		return task;
	}) as Task[];
	user.workAvailable = taskData
		.filter((task) => task.status === 'Pending')
		.map((taskData) => {
			const data: TaskData = taskData;
			const task: Task = {
				id: data.id,
				title: data.title,
				description: data.description,
				skills: data.skills,
				role: data.role,
				hours: data.hours,
				billable: data.billable,
				billingInfo: data.billingInfo,
				postedBy: data.postedBy,
				assignedTo: data.assignedTo,
				status: data.status,
				startDate: data.startDate,
				endDate: data.endDate
			};
			return task;
		}) as Task[];
	user.workAvailable = user.workAvailable.slice(0, 5);
	user.workPosted.forEach((task) => {
		const data: UserData = userData.find((data) => data.id === task.assignedTo)!;
		if (data) {
			const user: User = {
				id: data.id,
				firstName: data.firstName,
				lastName: data.lastName,
				fullName: data.fullName,
				email: data.email,
				avatarType: data.avatarType,
				role: data.role,
				team: data.team,
				workPosted: data.workPosted,
				workAssigned: data.workAssigned
			};
			task.assignedTo = user;
		} else {
			task.assignedTo = null;
		}
	});
	user.workAssigned.forEach((task) => {
		const data: UserData = userData.find((data) => data.id === task.postedBy)!;
		const user: User = {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			fullName: data.fullName,
			email: data.email,
			avatarType: data.avatarType,
			role: data.role,
			team: data.team,
			workPosted: data.workPosted,
			workAssigned: data.workAssigned
		};
		task.assignedTo = user;
	});
	user.workAvailable.forEach((task) => {
		const data: UserData = userData.find((data) => data.id === task.postedBy)!;
		const user: User = {
			id: data.id,
			firstName: data.firstName,
			lastName: data.lastName,
			fullName: data.fullName,
			email: data.email,
			avatarType: data.avatarType,
			role: data.role,
			team: data.team,
			workPosted: data.workPosted,
			workAssigned: data.workAssigned
		};
		task.postedBy = user;
	});

	return user;
}

export function getTask(taskId: number): Task {
	const data: TaskData = taskData.find((data) => data.id === taskId)!;
	const task: Task = {
		id: data.id,
		title: data.title,
		description: data.description,
		skills: data.skills,
		role: data.role,
		hours: data.hours,
		billable: data.billable,
		billingInfo: data.billingInfo,
		postedBy: data.postedBy,
		assignedTo: data.assignedTo,
		status: data.status,
		startDate: data.startDate,
		endDate: data.endDate
	};
	const postedByData: UserData = userData.find((data) => data.id === task.postedBy)!;
	const postedByUser: User = {
		id: postedByData.id,
		firstName: postedByData.firstName,
		lastName: postedByData.lastName,
		fullName: postedByData.fullName,
		email: postedByData.email,
		avatarType: postedByData.avatarType,
		role: postedByData.role,
		team: postedByData.team,
		workPosted: postedByData.workPosted,
		workAssigned: postedByData.workAssigned
	};
	task.postedBy = postedByUser;
	const assignedToData: UserData = userData.find((data) => data.id === task.assignedTo)!;
	if (assignedToData) {
		const assignedToUser: User = {
			id: assignedToData.id,
			firstName: assignedToData.firstName,
			lastName: assignedToData.lastName,
			fullName: assignedToData.fullName,
			email: assignedToData.email,
			avatarType: assignedToData.avatarType,
			role: assignedToData.role,
			team: assignedToData.team,
			workPosted: assignedToData.workPosted,
			workAssigned: assignedToData.workAssigned
		};
		task.assignedTo = assignedToUser;
	} else {
		task.assignedTo = null;
	}
	return task;
}

export function getTasks(userId: number): Task[] {
	const user = getUser(userId);
	return user.workPosted.concat(user.workAssigned).concat(user.workAvailable!) as Task[];
}
