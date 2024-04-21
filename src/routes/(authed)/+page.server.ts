export function load({ cookies }) {
	const loggedId = Number(cookies.get('loggedId'));

	return {
		loggedId
	};
}

export const actions = {
	default: async ({ request }) => {}
};
// 	postTask: async ({ cookies, request }) => {
// const loggedId = Number(cookies.get('loggedId'));
// const data = await request.formData();

// const task: TaskData = {
// 	id: 2000 + Math.floor(Math.random() * 1000),
// 	title: data.get('title') as string,
// 	description: data.get('description') as string,
// 	skills: (data.get('skills') as string).split(',') as string[],
// 	role: data.get('role') as string,
// 	hours: Number(data.get('hours')),
// 	billable: data.get('billable') === 'true' ? true : false,
// 	billingInfo: {
// 		billingType: data.get('billingType'),
// 		projectFolder: data.get('projectFolder'),
// 		projectCode: data.get('projectCode')
// 	},
// 	postedBy: loggedId,
// 	assignedTo: null,
// 	applicants: [],
// 	status: 'Posted',
// 	startDate: data.get('startDate') as string,
// 	endDate: data.get('endDate') as string
// };
// db.postTask(task);
// 	},
// 	advanceTask: async ({ request }) => {
// 		const data = await request.formData();
// 		db.advanceTask(Number(data.get('id')));
// 	},
// 	updateAvailability: async ({ cookies, request }) => {
// 		const loggedId = Number(cookies.get('loggedId'));
// 		const data = await request.formData();
// 		db.updateAvailability(loggedId, JSON.parse(data.get('availability') as string));
// 	}
// };
