import type { User } from './User';

export interface TaskData {
	id: number;
	title: string;
	description: string;
	skills: string[];
	role: string;
	hours: number;
	billable: boolean;
	billingInfo: object;
	postedBy: number;
	assignedTo: number | null;
	applicants?: number[];
	status: string;
	startDate: string;
	endDate: string;
}

export interface Task {
	id: number;
	title: string;
	description: string;
	skills: string[];
	role: string;
	hours: number;
	billable: boolean;
	billingInfo: object;
	postedBy: User | number;
	assignedTo: User | number | null;
	applicants?: User[] | number[];
	status: string;
	startDate: string;
	endDate: string;
}

export enum TaskStatus {
	Invalid,
	Posted,
	Assigned,
	PendingSignoff,
	Complete,
	Cancelled
}
