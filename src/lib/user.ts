import type { Team } from './Team';
import type { Task } from './Task';

export interface UserData {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	avatarType: string;
	role: string;
	team: number;
	workPosted: number[];
	workAssigned: number[];
}

export interface User {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	avatarType: string;
	role: string;
	team: Team | number;
	workPosted: Task[] | number[];
	workAssigned: Task[] | number[];
	workAvailable?: Task[] | number[];
}

export enum UserRole {
	Associate,
	SeniorAssociate,
	Manager,
	SeniorManager,
	Director,
	Partner
}
