export const teamData = [
	{
		id: 1,
		name: 'Technical Integrations',
		members: [
			2, 3, 4, 5, 6, 10, 11, 13, 15, 16, 17, 19, 20, 21, 22, 26, 27, 28, 31, 32, 33, 34, 35, 39, 41,
			42, 43, 45, 48, 49, 51, 52, 53, 55, 56, 58, 60, 61, 63, 64, 65, 66, 67, 69, 71, 74, 75, 76,
			79, 81, 82, 83, 87, 90, 93, 95, 96, 98, 99, 100, 102, 105, 107, 108, 110
		],
		connectedTeams: [2],
		color: 'purple'
	},
	{
		id: 2,
		name: 'Custom Application Solutions',
		members: [
			1, 7, 8, 9, 12, 14, 18, 23, 24, 25, 29, 30, 36, 37, 38, 40, 44, 46, 47, 50, 54, 57, 59, 62,
			68, 70, 72, 73, 77, 78, 80, 84, 85, 86, 88, 89, 91, 92, 94, 97, 101, 103, 104, 106, 109
		],
		connectedTeams: [1],
		color: 'blue'
	}
];

export const userData = [
	{
		id: 1,
		firstName: 'Elise',
		lastName: 'Schober',
		fullName: 'Elise Schober',
		role: 'Supervisor',
		email: 'elise.schober@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'eliseschober' },
			{ method: 'Teams', contact: 'eliseschober' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'API Development',
			'E-commerce Security',
			'Data Encryption',
			'Network Security',
			'Regulatory Compliance',
			'User Testing',
			'C#'
		],
		workPosted: [1, 112, 221, 331, 441, 552, 661, 774, 882, 991],
		workAssigned: [6, 168, 340, 499, 691, 929]
	},
	{
		id: 2,
		firstName: 'Ryann',
		lastName: 'Skein',
		fullName: 'Ryann Skein',
		role: 'Senior Associate',
		email: 'ryann.skein@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'ryannskein' },
			{ method: 'Teams', contact: 'ryannskein' },
			{ method: 'Phone', contact: '229-605-3815' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: [
			'Backend Development',
			'HIPAA Compliance',
			'UI/UX Design',
			'E-commerce Security',
			'JavaScript'
		],
		workPosted: [2, 114, 222, 334, 442, 553, 662, 775, 884, 992],
		workAssigned: [1, 130, 210, 316, 445, 530, 640, 741, 808, 914]
	},
	{
		id: 3,
		firstName: 'Lek',
		lastName: 'Janacek',
		fullName: 'Lek Janacek',
		role: 'Associate',
		email: 'lek.janacek@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'lekjanacek' },
			{ method: 'Teams', contact: 'lekjanacek' },
			{ method: 'Phone', contact: '149-840-9439' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: [
			'JavaScript',
			'UI/UX Design',
			'Frontend Development',
			'Report Generation',
			'Business Intelligence',
			'E-commerce Security'
		],
		workPosted: [3, 121, 224, 341, 448, 563, 664, 776, 885, 996],
		workAssigned: [2, 82, 173, 266, 364, 471, 577, 678, 768, 878, 965]
	},
	{
		id: 4,
		firstName: 'Sacha',
		lastName: 'Folan',
		fullName: 'Sacha Folan',
		role: 'Senior Associate',
		email: 'sacha.folan@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'sachafolan' },
			{ method: 'Teams', contact: 'sachafolan' },
			{ method: 'Phone', contact: '566-387-0003' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: [
			'Frontend Development',
			'Analytics',
			'Report Generation',
			'Data Analysis',
			'Inventory Database',
			'Cloud Services',
			'User Testing',
			'JavaScript'
		],
		workPosted: [4, 122, 223, 335, 444, 556, 663, 777, 886, 993],
		workAssigned: [8, 133, 211, 327, 442, 534, 651, 748, 809, 917]
	},
	{
		id: 5,
		firstName: 'Gwennie',
		lastName: 'Bumby',
		fullName: 'Gwennie Bumby',
		role: 'Associate',
		email: 'gwennie.bumby@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'gwenniebumby' },
			{ method: 'Teams', contact: 'gwenniebumby' },
			{ method: 'Phone', contact: '540-712-8685' },
			{ method: 'LinkedIn', contact: 'gwenniebumby' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'Payment Solutions',
			'Cloud Services',
			'Inventory Database',
			'Regulatory Compliance',
			'Frontend Development',
			'C#',
			'Analytics',
			'Database Management'
		],
		workPosted: [5, 123, 225, 344, 452, 564, 667, 778, 888, 999],
		workAssigned: [3, 85, 178, 268, 365, 472, 582, 679, 770, 886, 967]
	},
	{
		id: 6,
		firstName: 'Ruthe',
		lastName: 'Greydon',
		fullName: 'Ruthe Greydon',
		role: 'Supervisor',
		email: 'ruthe.greydon@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'ruthegreydon' },
			{ method: 'Teams', contact: 'ruthegreydon' },
			{ method: 'Phone', contact: '589-566-7992' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Operational Efficiency',
			'Payment Solutions',
			'Healthcare IT',
			'Audit Trail Management',
			'Python'
		],
		workPosted: [6, 113, 226, 332, 445, 557, 666, 779, 889, 994],
		workAssigned: [9, 176, 342, 504, 696, 934]
	},
	{
		id: 7,
		firstName: 'Carolann',
		lastName: 'Shillum',
		fullName: 'Carolann Shillum',
		role: 'Associate',
		email: 'carolann.shillum@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'carolannshillum' },
			{ method: 'Teams', contact: 'carolannshillum' },
			{ method: 'Phone', contact: '296-899-2947' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: ['API Development', 'Analytics', 'C#'],
		workPosted: [7, 124, 228, 348, 456, 566, 668, 782, 893],
		workAssigned: [4, 86, 185, 276, 369, 475, 583, 681, 771, 888, 970]
	},
	{
		id: 8,
		firstName: 'Coop',
		lastName: 'Gillean',
		fullName: 'Coop Gillean',
		role: 'Associate',
		email: 'coop.gillean@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'coopgillean' },
			{ method: 'Teams', contact: 'coopgillean' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'Analytics',
			'Frontend Development',
			'Operational Efficiency',
			'Data Analysis',
			'System Architecture',
			'Performance Tuning',
			'Payment Solutions',
			'C#'
		],
		workPosted: [10, 125, 229, 351, 457, 567, 669, 783, 894],
		workAssigned: [5, 87, 190, 278, 370, 476, 584, 684, 776, 889, 973]
	},
	{
		id: 9,
		firstName: 'Faythe',
		lastName: 'Lauret',
		fullName: 'Faythe Lauret',
		role: 'Associate',
		email: 'faythe.lauret@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'faythelauret' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'Regulatory Compliance',
			'Client Communication',
			'Report Generation',
			'HIPAA Compliance',
			'Backend Development',
			'C#'
		],
		workPosted: [11, 126, 230, 352, 459, 568, 670, 785, 899],
		workAssigned: [7, 88, 196, 282, 373, 482, 588, 693, 778, 893, 974]
	},
	{
		id: 10,
		firstName: 'Karel',
		lastName: 'Futcher',
		fullName: 'Karel Futcher',
		role: 'Supervisor',
		email: 'karel.futcher@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'karelfutcher' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['HIPAA Compliance', 'Report Generation', 'JavaScript'],
		workPosted: [9, 115, 227, 333, 446, 558, 671, 780, 890, 995],
		workAssigned: [14, 180, 343, 510, 699, 944]
	},
	{
		id: 11,
		firstName: 'Hedvige',
		lastName: 'Angrick',
		fullName: 'Hedvige Angrick',
		role: 'Associate',
		email: 'hedvige.angrick@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: ['Backend Development', 'Data Visualization', 'C#'],
		workPosted: [13, 131, 231, 353, 461, 572, 676, 787, 902],
		workAssigned: [10, 89, 197, 283, 380, 483, 592, 694, 782, 905, 975]
	},
	{
		id: 12,
		firstName: 'Esther',
		lastName: 'Zuan',
		fullName: 'Esther Zuan',
		role: 'Associate',
		email: 'esther.zuan@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'estherzuan' },
			{ method: 'Teams', contact: 'estherzuan' },
			{ method: 'Phone', contact: '645-532-5215' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Regulatory Compliance',
			'Audit Trail Management',
			'Database Management',
			'Cloud Services',
			'JavaScript'
		],
		workPosted: [15, 132, 233, 354, 462, 573, 678, 789, 905],
		workAssigned: [11, 91, 198, 288, 384, 485, 593, 695, 783, 902, 976]
	},
	{
		id: 13,
		firstName: 'Rob',
		lastName: 'Orbell',
		fullName: 'Rob Orbell',
		role: 'Senior Associate',
		email: 'rob.orbell@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'roborbell' },
			{ method: 'Teams', contact: 'roborbell' },
			{ method: 'Phone', contact: '780-828-1042' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['Business Intelligence', 'User Testing', 'Python'],
		workPosted: [12, 127, 232, 336, 450, 565, 673, 781, 900, 997],
		workAssigned: [16, 137, 213, 328, 446, 539, 653, 751, 810, 920]
	},
	{
		id: 14,
		firstName: 'Agretha',
		lastName: 'Pelosi',
		fullName: 'Agretha Pelosi',
		role: 'Manager',
		email: 'agretha.pelosi@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'agrethapelosi' },
			{ method: 'Teams', contact: 'agrethapelosi' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['Data Analysis', 'System Architecture', 'Python'],
		workPosted: [14, 106, 234, 337, 438, 535, 665, 761, 897, 998],
		workAssigned: [31, 182, 388, 517, 749, 960]
	},
	{
		id: 15,
		firstName: 'Tommy',
		lastName: 'Giannazzi',
		fullName: 'Tommy Giannazzi',
		role: 'Associate',
		email: 'tommy.giannazzi@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'tommygiannazzi' },
			{ method: 'Teams', contact: 'tommygiannazzi' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['SQL', 'E-commerce Security', 'JavaScript'],
		workPosted: [19, 134, 238, 358, 464, 577, 679, 798, 906],
		workAssigned: [12, 92, 199, 290, 385, 486, 597, 697, 785, 909, 977]
	},
	{
		id: 16,
		firstName: 'Paxon',
		lastName: 'Branca',
		fullName: 'Paxon Branca',
		role: 'Senior Associate',
		email: 'paxon.branca@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'paxonbranca' },
			{ method: 'Teams', contact: 'paxonbranca' },
			{ method: 'Phone', contact: '770-233-7273' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: ['Data Analysis', 'Data Encryption', 'Network Security', 'C#'],
		workPosted: [16, 128, 239, 359, 451, 569, 674, 784, 901],
		workAssigned: [17, 138, 222, 330, 450, 541, 654, 754, 812, 925]
	},
	{
		id: 17,
		firstName: 'Emilio',
		lastName: 'Tidcombe',
		fullName: 'Emilio Tidcombe',
		role: 'Senior Manager',
		email: 'emilio.tidcombe@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'emiliotidcombe' },
			{ method: 'Teams', contact: 'emiliotidcombe' },
			{ method: 'Phone', contact: '736-536-5221' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Network Security',
			'HIPAA Compliance',
			'Frontend Development',
			'UI/UX Design',
			'Report Generation',
			'Regulatory Compliance',
			'Audit Trail Management',
			'Python'
		],
		workPosted: [8, 100, 235, 338, 449, 540, 672, 766, 881, 1000],
		workAssigned: [55, 306, 643, 746, 969]
	},
	{
		id: 18,
		firstName: 'Jocelyn',
		lastName: 'Nelmes',
		fullName: 'Jocelyn Nelmes',
		role: 'Supervisor',
		email: 'jocelyn.nelmes@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'jocelynnelmes' },
			{ method: 'Teams', contact: 'jocelynnelmes' },
			{ method: 'Phone', contact: '648-461-1487' },
			{ method: 'LinkedIn', contact: 'jocelynnelmes' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Network Security',
			'Inventory Database',
			'C#',
			'Supply Chain Management',
			'Operational Efficiency',
			'Business Intelligence',
			'Report Generation'
		],
		workPosted: [17, 116, 236, 340, 453, 560, 675, 786, 898],
		workAssigned: [23, 186, 346, 525, 706, 964]
	},
	{
		id: 19,
		firstName: 'Avis',
		lastName: 'Storrie',
		fullName: 'Avis Storrie',
		role: 'Associate',
		email: 'avis.storrie@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'avisstorrie' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: ['Client Communication', 'Analytics', 'JavaScript'],
		workPosted: [20, 135, 240, 361, 471, 582, 681, 799, 909],
		workAssigned: [13, 93, 202, 292, 386, 487, 598, 700, 787, 910, 978]
	},
	{
		id: 20,
		firstName: 'Stormi',
		lastName: 'Iverson',
		fullName: 'Stormi Iverson',
		role: 'Associate',
		email: 'stormi.iverson@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'stormiiverson' },
			{ method: 'Teams', contact: 'stormiiverson' },
			{ method: 'Phone', contact: '993-376-2270' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['Regulatory Compliance', 'Payment Solutions', 'Python'],
		workPosted: [21, 136, 241, 362, 472, 583, 684, 803, 910],
		workAssigned: [15, 94, 207, 296, 387, 494, 599, 701, 789, 912, 980]
	},
	{
		id: 21,
		firstName: 'Barby',
		lastName: 'Braunfeld',
		fullName: 'Barby Braunfeld',
		role: 'Associate',
		email: 'barby.braunfeld@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: ['C#', 'Client Communication', 'Database Management', 'Frontend Development'],
		workPosted: [25, 139, 243, 364, 474, 584, 693, 805, 912],
		workAssigned: [18, 95, 212, 297, 398, 497, 600, 702, 799, 913, 981]
	},
	{
		id: 22,
		firstName: 'Myles',
		lastName: 'Flatte',
		fullName: 'Myles Flatte',
		role: 'Associate',
		email: 'myles.flatte@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'mylesflatte' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: [
			'User Testing',
			'Network Security',
			'Python',
			'Frontend Development',
			'API Development',
			'Database Management',
			'Healthcare IT'
		],
		workPosted: [27, 140, 246, 365, 475, 587, 694, 807, 913],
		workAssigned: [19, 97, 215, 298, 400, 506, 601, 703, 803, 916, 982]
	},
	{
		id: 23,
		firstName: 'Kevon',
		lastName: 'Crackel',
		fullName: 'Kevon Crackel',
		role: 'Manager',
		email: 'kevon.crackel@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'kevoncrackel' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'Inventory Database',
			'Healthcare IT',
			'Client Communication',
			'User Testing',
			'Network Security',
			'API Development',
			'HIPAA Compliance',
			'JavaScript'
		],
		workPosted: [18, 118, 237, 339, 454, 554, 677, 767, 903],
		workAssigned: [33, 244, 393, 535, 761, 998]
	},
	{
		id: 24,
		firstName: 'Tamiko',
		lastName: 'Gissop',
		fullName: 'Tamiko Gissop',
		role: 'Senior Associate',
		email: 'tamiko.gissop@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: ['C#', 'Client Communication'],
		workPosted: [22, 129, 242, 363, 455, 571, 687, 788, 904],
		workAssigned: [24, 150, 223, 337, 451, 551, 657, 762, 813, 931]
	},
	{
		id: 25,
		firstName: 'Greta',
		lastName: 'Philot',
		fullName: 'Greta Philot',
		role: 'Senior Manager',
		email: 'greta.philot@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'gretaphilot' },
			{ method: 'Teams', contact: 'gretaphilot' },
			{ method: 'Phone', contact: '114-817-1661' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: [
			'HIPAA Compliance',
			'System Architecture',
			'Supply Chain Management',
			'Payment Solutions',
			'API Development',
			'Regulatory Compliance',
			'Data Analysis',
			'Operational Efficiency',
			'C#'
		],
		workPosted: [23, 104, 244, 342, 458, 559, 680, 790, 883],
		workAssigned: [56, 377, 718, 835]
	},
	{
		id: 26,
		firstName: 'Celestyna',
		lastName: 'Hulks',
		fullName: 'Celestyna Hulks',
		role: 'Senior Associate',
		email: 'celestyna.hulks@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'celestynahulks' },
			{ method: 'Teams', contact: 'celestynahulks' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'System Architecture',
			'User Testing',
			'Performance Tuning',
			'JavaScript',
			'Python',
			'Cloud Services',
			'Client Communication',
			'Operational Efficiency'
		],
		workPosted: [28, 130, 245, 366, 460, 574, 688, 792, 911],
		workAssigned: [22, 151, 227, 363, 455, 552, 660, 763, 814, 938]
	},
	{
		id: 27,
		firstName: 'Francis',
		lastName: 'Kennifeck',
		fullName: 'Francis Kennifeck',
		role: 'Associate',
		email: 'francis.kennifeck@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'franciskennifeck' },
			{ method: 'Teams', contact: 'franciskennifeck' },
			{ method: 'Phone', contact: '658-936-8716' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: ['Data Analysis', 'Report Generation', 'E-commerce Security', 'C#'],
		workPosted: [30, 141, 247, 369, 476, 588, 695, 811, 916],
		workAssigned: [20, 99, 216, 301, 404, 512, 602, 704, 805, 919, 986]
	},
	{
		id: 28,
		firstName: 'Clark',
		lastName: 'Gutcher',
		fullName: 'Clark Gutcher',
		role: 'Director',
		email: 'clark.gutcher@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'clarkgutcher' },
			{ method: 'Teams', contact: 'clarkgutcher' },
			{ method: 'Phone', contact: '823-843-5282' },
			{ method: 'LinkedIn', contact: 'clarkgutcher' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Analytics',
			'API Development',
			'Report Generation',
			'Data Analysis',
			'Data Visualization',
			'Inventory Database',
			'JavaScript'
		],
		workPosted: [24, 107, 248, 343, 420, 533, 682, 791, 887],
		workAssigned: [360, 824]
	},
	{
		id: 29,
		firstName: 'Ronica',
		lastName: 'Suttell',
		fullName: 'Ronica Suttell',
		role: 'Associate',
		email: 'ronica.suttell@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'ronicasuttell' },
			{ method: 'Teams', contact: 'ronicasuttell' },
			{ method: 'Phone', contact: '740-865-4522' },
			{ method: 'LinkedIn', contact: 'ronicasuttell' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'Payment Solutions',
			'E-commerce Security',
			'Analytics',
			'Cloud Services',
			'Frontend Development',
			'C#'
		],
		workPosted: [34, 142, 249, 370, 477, 590, 697, 815, 919],
		workAssigned: [21, 105, 217, 302, 405, 513, 604, 708, 807, 921, 987]
	},
	{
		id: 30,
		firstName: 'Bernardo',
		lastName: 'Holdall',
		fullName: 'Bernardo Holdall',
		role: 'Manager',
		email: 'bernardo.holdall@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: [
			'System Architecture',
			'Analytics',
			'Audit Trail Management',
			'Cloud Services',
			'Network Security',
			'Frontend Development',
			'User Testing',
			'C#'
		],
		workPosted: [26, 133, 250, 345, 463, 562, 683, 793, 907],
		workAssigned: [50, 248, 394, 540, 766]
	},
	{
		id: 31,
		firstName: 'Lissy',
		lastName: 'Flanders',
		fullName: 'Lissy Flanders',
		role: 'Supervisor',
		email: 'lissy.flanders@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Analytics',
			'C#',
			'Business Intelligence',
			'Frontend Development',
			'HIPAA Compliance',
			'System Architecture'
		],
		workPosted: [29, 137, 251, 346, 465, 570, 685, 794, 908],
		workAssigned: [26, 200, 347, 537, 710, 966]
	},
	{
		id: 32,
		firstName: 'Dorothea',
		lastName: 'Leades',
		fullName: 'Dorothea Leades',
		role: 'Associate',
		email: 'dorothea.leades@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'dorothealeades' },
			{ method: 'Teams', contact: 'dorothealeades' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: ['Cloud Services', 'Client Communication', 'Python'],
		workPosted: [37, 143, 253, 373, 482, 592, 698, 816, 921],
		workAssigned: [25, 109, 218, 305, 407, 514, 605, 709, 815, 922, 992]
	},
	{
		id: 33,
		firstName: 'Lucien',
		lastName: 'Prew',
		fullName: 'Lucien Prew',
		role: 'Associate',
		email: 'lucien.prew@astarconsulting.com',
		avatarType: 'animal',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'lucienprew' },
			{ method: 'Teams', contact: 'lucienprew' },
			{ method: 'Phone', contact: '940-505-6831' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Report Generation',
			'System Architecture',
			'Business Intelligence',
			'Cloud Services',
			'UI/UX Design',
			'Data Visualization',
			'C#'
		],
		workPosted: [38, 145, 256, 376, 483, 593, 700, 817, 922],
		workAssigned: [27, 117, 219, 313, 408, 516, 607, 717, 816, 923, 996]
	},
	{
		id: 34,
		firstName: 'Augusta',
		lastName: 'Fortey',
		fullName: 'Augusta Fortey',
		role: 'Manager',
		email: 'augusta.fortey@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'augustafortey' },
			{ method: 'Teams', contact: 'augustafortey' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Network Security',
			'Regulatory Compliance',
			'Frontend Development',
			'Payment Solutions',
			'Data Visualization',
			'Report Generation',
			'C#'
		],
		workPosted: [32, 138, 252, 347, 466, 575, 686, 796, 914],
		workAssigned: [81, 291, 396, 554, 767]
	},
	{
		id: 35,
		firstName: 'Jeffry',
		lastName: 'Ivancevic',
		fullName: 'Jeffry Ivancevic',
		role: 'Associate',
		email: 'jeffry.ivancevic@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'jeffryivancevic' },
			{ method: 'Teams', contact: 'jeffryivancevic' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'Report Generation',
			'Python',
			'User Testing',
			'C#',
			'API Development',
			'Operational Efficiency',
			'Network Security'
		],
		workPosted: [40, 147, 263, 380, 485, 597, 701, 820, 923],
		workAssigned: [28, 119, 220, 314, 409, 518, 609, 719, 819, 924, 999]
	},
	{
		id: 36,
		firstName: 'Dorotea',
		lastName: 'Do',
		fullName: 'Dorotea Do',
		role: 'Manager',
		email: 'dorotea.do@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'doroteado' },
			{ method: 'Teams', contact: 'doroteado' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: [
			'Analytics',
			'User Testing',
			'Data Encryption',
			'Frontend Development',
			'Data Visualization',
			'C#'
		],
		workPosted: [33, 144, 254, 349, 467, 576, 689, 797, 915],
		workAssigned: [84, 338, 413, 559, 796]
	},
	{
		id: 37,
		firstName: 'Corly',
		lastName: 'Mollindinia',
		fullName: 'Corly Mollindinia',
		role: 'Senior Associate',
		email: 'corly.mollindinia@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Audit Trail Management',
			'SQL',
			'Healthcare IT',
			'Operational Efficiency',
			'Inventory Database',
			'Frontend Development',
			'Client Communication',
			'Network Security',
			'C#'
		],
		workPosted: [35, 148, 257, 368, 468, 579, 690, 800, 917],
		workAssigned: [29, 156, 232, 372, 460, 569, 663, 765, 822, 939]
	},
	{
		id: 38,
		firstName: 'Terrell',
		lastName: 'Gleadhall',
		fullName: 'Terrell Gleadhall',
		role: 'Associate',
		email: 'terrell.gleadhall@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'terrellgleadhall' },
			{ method: 'Teams', contact: 'terrellgleadhall' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: [
			'Python',
			'UI/UX Design',
			'Performance Tuning',
			'User Testing',
			'SQL',
			'C#',
			'API Development',
			'Report Generation'
		],
		workPosted: [43, 149, 266, 381, 486, 598, 702, 821, 924],
		workAssigned: [30, 120, 221, 315, 412, 519, 610, 728, 820, 926]
	},
	{
		id: 39,
		firstName: 'Amata',
		lastName: 'Coxall',
		fullName: 'Amata Coxall',
		role: 'Director',
		email: 'amata.coxall@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'amatacoxall' },
			{ method: 'Teams', contact: 'amatacoxall' },
			{ method: 'Phone', contact: '768-281-5330' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'SQL',
			'C#',
			'Inventory Database',
			'Database Management',
			'Payment Solutions',
			'Healthcare IT'
		],
		workPosted: [31, 146, 255, 350, 469, 578, 691, 795, 891],
		workAssigned: [420, 892]
	},
	{
		id: 40,
		firstName: 'Lennard',
		lastName: 'Robelet',
		fullName: 'Lennard Robelet',
		role: 'Associate',
		email: 'lennard.robelet@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'E-commerce Security',
			'Frontend Development',
			'Supply Chain Management',
			'Data Visualization',
			'UI/UX Design',
			'Regulatory Compliance',
			'JavaScript'
		],
		workPosted: [44, 153, 267, 384, 487, 599, 703, 826, 926],
		workAssigned: [32, 123, 225, 317, 414, 520, 612, 729, 823, 927]
	},
	{
		id: 41,
		firstName: 'Ad',
		lastName: 'Cuskery',
		fullName: 'Ad Cuskery',
		role: 'Associate',
		email: 'ad.cuskery@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'adcuskery' },
			{ method: 'Teams', contact: 'adcuskery' },
			{ method: 'Phone', contact: '777-884-8575' },
			{ method: 'LinkedIn', contact: 'adcuskery' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: [
			'Client Communication',
			'Cloud Services',
			'UI/UX Design',
			'Python',
			'Frontend Development'
		],
		workPosted: [46, 155, 268, 385, 494, 600, 704, 828, 927],
		workAssigned: [34, 124, 226, 318, 416, 522, 617, 730, 826, 928]
	},
	{
		id: 42,
		firstName: 'Inessa',
		lastName: 'Tuohy',
		fullName: 'Inessa Tuohy',
		role: 'Supervisor',
		email: 'inessa.tuohy@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'inessatuohy' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'Healthcare IT',
			'Cloud Services',
			'Operational Efficiency',
			'Data Visualization',
			'Client Communication',
			'Python'
		],
		workPosted: [36, 150, 258, 355, 470, 581, 692, 801, 918],
		workAssigned: [39, 203, 357, 549, 721, 972]
	},
	{
		id: 43,
		firstName: 'Saree',
		lastName: 'Morrell',
		fullName: 'Saree Morrell',
		role: 'Senior Associate',
		email: 'saree.morrell@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'sareemorrell' },
			{ method: 'Teams', contact: 'sareemorrell' },
			{ method: 'Phone', contact: '160-265-4527' },
			{ method: 'LinkedIn', contact: 'sareemorrell' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'System Architecture',
			'Data Visualization',
			'E-commerce Security',
			'Regulatory Compliance',
			'Data Encryption',
			'Payment Solutions',
			'Performance Tuning',
			'JavaScript'
		],
		workPosted: [41, 151, 259, 372, 478, 586, 705, 802, 920],
		workAssigned: [35, 159, 242, 368, 463, 571, 666, 769, 829, 943]
	},
	{
		id: 44,
		firstName: 'Benyamin',
		lastName: 'Fermin',
		fullName: 'Benyamin Fermin',
		role: 'Senior Associate',
		email: 'benyamin.fermin@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'benyaminfermin' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'API Development',
			'Python',
			'Supply Chain Management',
			'Operational Efficiency',
			'Data Analysis',
			'Database Management'
		],
		workPosted: [45, 156, 262, 374, 479, 591, 707, 804, 925],
		workAssigned: [36, 163, 245, 378, 465, 576, 673, 772, 837, 946]
	},
	{
		id: 45,
		firstName: 'Betsey',
		lastName: 'Suero',
		fullName: 'Betsey Suero',
		role: 'Supervisor',
		email: 'betsey.suero@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'betseysuero' },
			{ method: 'Teams', contact: 'betseysuero' },
			{ method: 'Phone', contact: '121-354-4621' },
			{ method: 'LinkedIn', contact: 'betseysuero' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['JavaScript', 'Backend Development', 'Cloud Services'],
		workPosted: [39, 152, 260, 357, 473, 589, 699, 806, 928],
		workAssigned: [42, 204, 355, 557, 745, 984]
	},
	{
		id: 46,
		firstName: 'Zara',
		lastName: 'Rawll',
		fullName: 'Zara Rawll',
		role: 'Associate',
		email: 'zara.rawll@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'zararawll' },
			{ method: 'Teams', contact: 'zararawll' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['Analytics', 'JavaScript'],
		workPosted: [47, 157, 276, 386, 497, 601, 708, 836, 930],
		workAssigned: [37, 125, 228, 319, 417, 524, 623, 731, 838, 932]
	},
	{
		id: 47,
		firstName: 'Layney',
		lastName: 'Bartlet',
		fullName: 'Layney Bartlet',
		role: 'Associate',
		email: 'layney.bartlet@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'layneybartlet' },
			{ method: 'Teams', contact: 'layneybartlet' },
			{ method: 'Phone', contact: '249-476-5178' },
			{ method: 'LinkedIn', contact: 'layneybartlet' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: ['JavaScript', 'Analytics', 'Payment Solutions', 'Client Communication'],
		workPosted: [48, 160, 278, 387, 506, 602, 709, 838, 932],
		workAssigned: [38, 126, 229, 321, 419, 526, 624, 733, 836, 930]
	},
	{
		id: 48,
		firstName: 'Jenn',
		lastName: 'Ivanchikov',
		fullName: 'Jenn Ivanchikov',
		role: 'Supervisor',
		email: 'jenn.ivanchikov@astarconsulting.com',
		avatarType: 'animal',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'User Testing',
			'Data Encryption',
			'UI/UX Design',
			'C#',
			'Data Analysis',
			'Regulatory Compliance'
		],
		workPosted: [42, 154, 264, 367, 480, 594, 706, 808, 929],
		workAssigned: [61, 209, 371, 558, 780, 989]
	},
	{
		id: 49,
		firstName: 'Paige',
		lastName: 'Gokes',
		fullName: 'Paige Gokes',
		role: 'Senior Associate',
		email: 'paige.gokes@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'paigegokes' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: ['API Development', 'HIPAA Compliance', 'C#'],
		workPosted: [49, 159, 269, 375, 481, 596, 711, 809, 931],
		workAssigned: [51, 165, 254, 374, 467, 579, 677, 773, 839, 952]
	},
	{
		id: 50,
		firstName: 'Clea',
		lastName: 'Bamber',
		fullName: 'Clea Bamber',
		role: 'Senior Associate',
		email: 'clea.bamber@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'cleabamber' },
			{ method: 'Teams', contact: 'cleabamber' },
			{ method: 'Phone', contact: '993-685-2064' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['UI/UX Design', 'Data Analysis', 'E-commerce Security', 'Python'],
		workPosted: [51, 162, 270, 378, 488, 603, 712, 810, 933],
		workAssigned: [58, 169, 257, 379, 478, 586, 687, 774, 840, 955]
	},
	{
		id: 51,
		firstName: 'Roxane',
		lastName: 'Vankeev',
		fullName: 'Roxane Vankeev',
		role: 'Associate',
		email: 'roxane.vankeev@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'roxanevankeev' },
			{ method: 'Teams', contact: 'roxanevankeev' },
			{ method: 'Phone', contact: '684-728-5233' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Report Generation',
			'Business Intelligence',
			'C#',
			'Data Visualization',
			'User Testing',
			'Payment Solutions',
			'Cloud Services'
		],
		workPosted: [53, 170, 280, 398, 512, 604, 717, 842, 935],
		workAssigned: [40, 132, 230, 322, 422, 529, 632, 734, 841, 933]
	},
	{
		id: 52,
		firstName: 'Emmalyn',
		lastName: 'Buggs',
		fullName: 'Emmalyn Buggs',
		role: 'Supervisor',
		email: 'emmalyn.buggs@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Performance Tuning',
			'API Development',
			'Operational Efficiency',
			'Supply Chain Management',
			'Audit Trail Management',
			'UI/UX Design',
			'Python'
		],
		workPosted: [54, 158, 265, 371, 490, 595, 710, 812, 934],
		workAssigned: [78, 214, 367, 560, 791, 1000]
	},
	{
		id: 53,
		firstName: 'Willi',
		lastName: 'Cheesworth',
		fullName: 'Willi Cheesworth',
		role: 'Associate',
		email: 'willi.cheesworth@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'willicheesworth' },
			{ method: 'Teams', contact: 'willicheesworth' },
			{ method: 'Phone', contact: '698-220-9320' },
			{ method: 'LinkedIn', contact: 'willicheesworth' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: ['Operational Efficiency', 'Backend Development', 'JavaScript'],
		workPosted: [57, 172, 282, 400, 513, 605, 719, 844, 936],
		workAssigned: [43, 134, 231, 325, 425, 536, 633, 737, 842, 935]
	},
	{
		id: 54,
		firstName: 'Cornie',
		lastName: 'Cominoli',
		fullName: 'Cornie Cominoli',
		role: 'Supervisor',
		email: 'cornie.cominoli@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: [
			'E-commerce Security',
			'Inventory Database',
			'API Development',
			'Business Intelligence',
			'C#',
			'HIPAA Compliance',
			'Cloud Services'
		],
		workPosted: [58, 161, 271, 379, 491, 606, 713, 813, 937],
		workAssigned: [90, 235, 382, 570, 793]
	},
	{
		id: 55,
		firstName: 'Sondra',
		lastName: 'Revelle',
		fullName: 'Sondra Revelle',
		role: 'Associate',
		email: 'sondra.revelle@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'sondrarevelle' },
			{ method: 'Teams', contact: 'sondrarevelle' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Performance Tuning',
			'Data Encryption',
			'Audit Trail Management',
			'Frontend Development',
			'Operational Efficiency',
			'Healthcare IT',
			'Python'
		],
		workPosted: [60, 173, 283, 402, 514, 607, 723, 845, 940],
		workAssigned: [44, 135, 233, 326, 426, 538, 641, 739, 843, 936]
	},
	{
		id: 56,
		firstName: 'Allen',
		lastName: 'Byford',
		fullName: 'Allen Byford',
		role: 'Associate',
		email: 'allen.byford@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'allenbyford' },
			{ method: 'Teams', contact: 'allenbyford' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'C#',
			'Network Security',
			'Database Management',
			'Operational Efficiency',
			'JavaScript',
			'Cloud Services'
		],
		workPosted: [62, 178, 284, 404, 516, 609, 727, 848, 945],
		workAssigned: [46, 136, 234, 329, 427, 542, 644, 740, 844, 937]
	},
	{
		id: 57,
		firstName: 'Selene',
		lastName: 'Osbiston',
		fullName: 'Selene Osbiston',
		role: 'Associate',
		email: 'selene.osbiston@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'seleneosbiston' },
			{ method: 'Teams', contact: 'seleneosbiston' },
			{ method: 'Phone', contact: '738-365-2949' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: ['Database Management', 'C#', 'Data Encryption', 'Analytics'],
		workPosted: [64, 184, 286, 405, 518, 610, 728, 852, 947],
		workAssigned: [47, 140, 238, 334, 429, 543, 647, 742, 848, 940]
	},
	{
		id: 58,
		firstName: 'Janessa',
		lastName: 'Crush',
		fullName: 'Janessa Crush',
		role: 'Supervisor',
		email: 'janessa.crush@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'janessacrush' },
			{ method: 'Teams', contact: 'janessacrush' },
			{ method: 'Phone', contact: '348-307-9011' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'Client Communication',
			'Analytics',
			'Data Encryption',
			'JavaScript',
			'Inventory Database',
			'Regulatory Compliance',
			'Performance Tuning'
		],
		workPosted: [59, 163, 272, 382, 492, 608, 714, 814, 938],
		workAssigned: [96, 236, 383, 575, 797]
	},
	{
		id: 59,
		firstName: 'Waiter',
		lastName: 'Malins',
		fullName: 'Waiter Malins',
		role: 'Senior Associate',
		email: 'waiter.malins@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'waitermalins' },
			{ method: 'Teams', contact: 'waitermalins' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'Cloud Services',
			'User Testing',
			'Client Communication',
			'Database Management',
			'Data Encryption',
			'Payment Solutions',
			'Backend Development',
			'C#'
		],
		workPosted: [63, 165, 273, 391, 498, 612, 716, 819, 939],
		workAssigned: [59, 171, 259, 392, 479, 591, 688, 775, 850, 962]
	},
	{
		id: 60,
		firstName: 'Odilia',
		lastName: 'Challener',
		fullName: 'Odilia Challener',
		role: 'Supervisor',
		email: 'odilia.challener@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'odiliachallener' },
			{ method: 'Teams', contact: 'odiliachallener' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['Frontend Development', 'C#', 'E-commerce Security'],
		workPosted: [61, 164, 274, 383, 493, 613, 720, 818, 943],
		workAssigned: [98, 237, 389, 578, 830]
	},
	{
		id: 61,
		firstName: 'Rickie',
		lastName: 'Ivanyutin',
		fullName: 'Rickie Ivanyutin',
		role: 'Senior Associate',
		email: 'rickie.ivanyutin@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'Regulatory Compliance',
			'Cloud Services',
			'Network Security',
			'Frontend Development',
			'Client Communication',
			'JavaScript'
		],
		workPosted: [65, 169, 277, 392, 500, 614, 724, 822, 946],
		workAssigned: [63, 174, 262, 391, 481, 594, 689, 777, 851, 968]
	},
	{
		id: 62,
		firstName: 'Belia',
		lastName: 'Helleker',
		fullName: 'Belia Helleker',
		role: 'Senior Associate',
		email: 'belia.helleker@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'beliahelleker' },
			{ method: 'Teams', contact: 'beliahelleker' },
			{ method: 'Phone', contact: '168-255-0573' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Backend Development',
			'Audit Trail Management',
			'Supply Chain Management',
			'Payment Solutions',
			'Data Visualization',
			'JavaScript'
		],
		workPosted: [66, 171, 281, 395, 501, 615, 729, 823, 949],
		workAssigned: [65, 175, 269, 397, 491, 596, 690, 779, 855, 979]
	},
	{
		id: 63,
		firstName: 'Stafani',
		lastName: 'Masson',
		fullName: 'Stafani Masson',
		role: 'Senior Manager',
		email: 'stafani.masson@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'stafanimasson' },
			{ method: 'Teams', contact: 'stafanimasson' },
			{ method: 'Phone', contact: '618-445-4945' },
			{ method: 'LinkedIn', contact: 'stafanimasson' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Data Encryption',
			'User Testing',
			'Backend Development',
			'Client Communication',
			'System Architecture',
			'Data Visualization',
			'JavaScript'
		],
		workPosted: [50, 166, 261, 356, 484, 580, 696, 825, 895],
		workAssigned: [100, 502, 680, 883]
	},
	{
		id: 64,
		firstName: 'Babs',
		lastName: 'Wedon',
		fullName: 'Babs Wedon',
		role: 'Associate',
		email: 'babs.wedon@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'babswedon' },
			{ method: 'Teams', contact: 'babswedon' },
			{ method: 'Phone', contact: '794-415-5019' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['Database Management', 'Network Security', 'Data Analysis', 'C#'],
		workPosted: [67, 185, 288, 407, 519, 617, 730, 856, 950],
		workAssigned: [49, 142, 239, 341, 430, 544, 648, 743, 852, 945]
	},
	{
		id: 65,
		firstName: 'Katha',
		lastName: 'Wynter',
		fullName: 'Katha Wynter',
		role: 'Senior Manager',
		email: 'katha.wynter@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'kathawynter' },
			{ method: 'Teams', contact: 'kathawynter' },
			{ method: 'Phone', contact: '989-221-1065' },
			{ method: 'LinkedIn', contact: 'kathawynter' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: ['User Testing', 'Data Analysis', 'Data Encryption', 'Python'],
		workPosted: [52, 167, 275, 377, 489, 585, 718, 827, 896],
		workAssigned: [104, 503, 722, 887]
	},
	{
		id: 66,
		firstName: 'Bennie',
		lastName: 'Itscowicz',
		fullName: 'Bennie Itscowicz',
		role: 'Supervisor',
		email: 'bennie.itscowicz@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'bennieitscowicz' },
			{ method: 'Teams', contact: 'bennieitscowicz' },
			{ method: 'Phone', contact: '646-819-2404' },
			{ method: 'LinkedIn', contact: 'bennieitscowicz' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'Backend Development',
			'Data Visualization',
			'E-commerce Security',
			'JavaScript'
		],
		workPosted: [68, 168, 285, 389, 495, 616, 721, 829, 944],
		workAssigned: [101, 252, 390, 580, 818]
	},
	{
		id: 67,
		firstName: 'Sheela',
		lastName: 'Gowman',
		fullName: 'Sheela Gowman',
		role: 'Supervisor',
		email: 'sheela.gowman@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'sheelagowman' },
			{ method: 'Teams', contact: 'sheelagowman' },
			{ method: 'Phone', contact: '676-724-6074' },
			{ method: 'LinkedIn', contact: 'sheelagowman' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: [
			'Data Visualization',
			'Audit Trail Management',
			'UI/UX Design',
			'Payment Solutions',
			'Python'
		],
		workPosted: [69, 174, 287, 390, 496, 618, 731, 830, 951],
		workAssigned: [102, 258, 399, 589, 831]
	},
	{
		id: 68,
		firstName: 'Ynes',
		lastName: 'Howel',
		fullName: 'Ynes Howel',
		role: 'Senior Associate',
		email: 'ynes.howel@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'yneshowel' },
			{ method: 'Teams', contact: 'yneshowel' },
			{ method: 'Phone', contact: '320-191-5955' },
			{ method: 'LinkedIn', contact: 'yneshowel' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: ['Healthcare IT', 'UI/UX Design', 'JavaScript', 'Audit Trail Management', 'Python'],
		workPosted: [70, 175, 289, 397, 505, 620, 732, 837, 952],
		workAssigned: [66, 177, 270, 395, 498, 603, 692, 781, 858, 983]
	},
	{
		id: 69,
		firstName: 'Gauthier',
		lastName: "O'Lunney",
		fullName: "Gauthier O'Lunney",
		role: 'Associate',
		email: "gauthier.o'lunney@astarconsulting.com",
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: "gauthiero'lunney" },
			{ method: 'Teams', contact: "gauthiero'lunney" }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'HIPAA Compliance',
			'Report Generation',
			'Database Management',
			'Regulatory Compliance',
			'Cloud Services',
			'Client Communication',
			'Business Intelligence',
			'C#'
		],
		workPosted: [71, 190, 290, 408, 520, 623, 733, 857, 954],
		workAssigned: [53, 143, 240, 344, 433, 546, 649, 747, 856, 947]
	},
	{
		id: 70,
		firstName: 'Fae',
		lastName: 'Kealey',
		fullName: 'Fae Kealey',
		role: 'Manager',
		email: 'fae.kealey@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'faekealey' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'Data Encryption',
			'Payment Solutions',
			'User Testing',
			'Performance Tuning',
			'Cloud Services',
			'Data Visualization',
			'Healthcare IT',
			'Python'
		],
		workPosted: [72, 176, 291, 388, 499, 611, 734, 831, 941],
		workAssigned: [106, 339, 438, 619, 833]
	},
	{
		id: 71,
		firstName: 'Sianna',
		lastName: 'Cridlin',
		fullName: 'Sianna Cridlin',
		role: 'Senior Associate',
		email: 'sianna.cridlin@astarconsulting.com',
		avatarType: 'animal',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'siannacridlin' },
			{ method: 'Teams', contact: 'siannacridlin' },
			{ method: 'Phone', contact: '277-684-9385' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: ['C#', 'Backend Development', 'Database Management', 'Data Analysis'],
		workPosted: [73, 177, 292, 403, 507, 624, 735, 839, 955],
		workAssigned: [76, 179, 272, 415, 500, 606, 705, 784, 861, 990]
	},
	{
		id: 72,
		firstName: 'Shelby',
		lastName: 'Reason',
		fullName: 'Shelby Reason',
		role: 'Manager',
		email: 'shelby.reason@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'shelbyreason' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: ['JavaScript', 'API Development', 'UI/UX Design', 'Cloud Services', 'Python'],
		workPosted: [74, 179, 293, 393, 504, 619, 736, 832, 942],
		workAssigned: [107, 345, 449, 611, 867]
	},
	{
		id: 73,
		firstName: 'Anthia',
		lastName: 'Henworth',
		fullName: 'Anthia Henworth',
		role: 'Director',
		email: 'anthia.henworth@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'anthiahenworth' },
			{ method: 'Teams', contact: 'anthiahenworth' },
			{ method: 'Phone', contact: '946-917-5133' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['Payment Solutions', 'Data Visualization', 'User Testing', 'C#'],
		workPosted: [55, 180, 279, 360, 502, 621, 715, 824, 892],
		workAssigned: [533]
	},
	{
		id: 74,
		firstName: 'Fayette',
		lastName: 'Durning',
		fullName: 'Fayette Durning',
		role: 'Manager',
		email: 'fayette.durning@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'fayettedurning' },
			{ method: 'Teams', contact: 'fayettedurning' },
			{ method: 'Phone', contact: '450-526-6710' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Frontend Development',
			'Inventory Database',
			'Data Visualization',
			'Analytics',
			'Business Intelligence',
			'C#',
			'Python'
		],
		workPosted: [75, 181, 294, 394, 508, 622, 737, 833, 948],
		workAssigned: [118, 349, 458, 625, 915]
	},
	{
		id: 75,
		firstName: 'Dorette',
		lastName: 'Bouller',
		fullName: 'Dorette Bouller',
		role: 'Associate',
		email: 'dorette.bouller@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'dorettebouller' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'Healthcare IT',
			'HIPAA Compliance',
			'Client Communication',
			'API Development',
			'JavaScript'
		],
		workPosted: [80, 192, 296, 409, 522, 629, 739, 859, 956],
		workAssigned: [60, 145, 241, 348, 435, 548, 652, 750, 857, 949]
	},
	{
		id: 76,
		firstName: 'Pietrek',
		lastName: 'Swann',
		fullName: 'Pietrek Swann',
		role: 'Associate',
		email: 'pietrek.swann@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Payment Solutions',
			'System Architecture',
			'Performance Tuning',
			'Data Analysis',
			'JavaScript',
			'Healthcare IT',
			'Inventory Database',
			'Analytics'
		],
		workPosted: [82, 196, 297, 411, 524, 632, 740, 860, 957],
		workAssigned: [62, 147, 243, 351, 443, 555, 656, 753, 862, 950]
	},
	{
		id: 77,
		firstName: 'Walther',
		lastName: 'Yendle',
		fullName: 'Walther Yendle',
		role: 'Senior Associate',
		email: 'walther.yendle@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'waltheryendle' },
			{ method: 'Teams', contact: 'waltheryendle' },
			{ method: 'Phone', contact: '693-227-9458' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 6 }
				]
			}
		],
		skills: [
			'Network Security',
			'Data Analysis',
			'Analytics',
			'Backend Development',
			'Database Management',
			'JavaScript'
		],
		workPosted: [76, 183, 298, 412, 509, 626, 741, 840, 958],
		workAssigned: [77, 187, 273, 403, 501, 608, 707, 786, 865, 993]
	},
	{
		id: 78,
		firstName: 'Becki',
		lastName: 'Cometto',
		fullName: 'Becki Cometto',
		role: 'Manager',
		email: 'becki.cometto@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'beckicometto' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: [
			'Performance Tuning',
			'SQL',
			'Frontend Development',
			'Business Intelligence',
			'Supply Chain Management',
			'Report Generation',
			'Python'
		],
		workPosted: [77, 182, 295, 396, 510, 625, 738, 834, 959],
		workAssigned: [166, 350, 469, 646, 941]
	},
	{
		id: 79,
		firstName: 'Silvano',
		lastName: 'Allred',
		fullName: 'Silvano Allred',
		role: 'Supervisor',
		email: 'silvano.allred@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'silvanoallred' },
			{ method: 'Teams', contact: 'silvanoallred' },
			{ method: 'Phone', contact: '222-252-8159' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Audit Trail Management',
			'HIPAA Compliance',
			'Cloud Services',
			'Supply Chain Management',
			'C#'
		],
		workPosted: [78, 186, 299, 399, 511, 627, 742, 841, 961],
		workAssigned: [103, 260, 410, 616, 832]
	},
	{
		id: 80,
		firstName: 'Stewart',
		lastName: 'Kirkhouse',
		fullName: 'Stewart Kirkhouse',
		role: 'Associate',
		email: 'stewart.kirkhouse@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'stewartkirkhouse' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: ['Supply Chain Management', 'Regulatory Compliance', 'Python'],
		workPosted: [85, 197, 301, 414, 526, 633, 743, 862, 963],
		workAssigned: [64, 148, 246, 352, 447, 561, 659, 755, 863, 954]
	},
	{
		id: 81,
		firstName: 'Lorita',
		lastName: 'Woolatt',
		fullName: 'Lorita Woolatt',
		role: 'Senior Associate',
		email: 'lorita.woolatt@astarconsulting.com',
		avatarType: 'animal',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'loritawoolatt' },
			{ method: 'Teams', contact: 'loritawoolatt' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 4 }
				]
			}
		],
		skills: [
			'HIPAA Compliance',
			'Data Encryption',
			'Payment Solutions',
			'Regulatory Compliance',
			'C#',
			'Frontend Development'
		],
		workPosted: [79, 187, 300, 415, 515, 628, 747, 843, 962],
		workAssigned: [83, 183, 277, 418, 505, 614, 711, 788, 868, 994]
	},
	{
		id: 82,
		firstName: 'Maurine',
		lastName: 'Kneller',
		fullName: 'Maurine Kneller',
		role: 'Associate',
		email: 'maurine.kneller@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'maurinekneller' },
			{ method: 'Teams', contact: 'maurinekneller' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Performance Tuning',
			'Frontend Development',
			'Client Communication',
			'Inventory Database',
			'Analytics',
			'Operational Efficiency',
			'API Development',
			'C#'
		],
		workPosted: [86, 198, 302, 416, 529, 641, 750, 863, 965],
		workAssigned: [67, 153, 247, 353, 448, 563, 664, 756, 866, 956]
	},
	{
		id: 83,
		firstName: 'Shea',
		lastName: 'Lamboll',
		fullName: 'Shea Lamboll',
		role: 'Senior Manager',
		email: 'shea.lamboll@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'Data Analysis',
			'Network Security',
			'User Testing',
			'Supply Chain Management',
			'Operational Efficiency',
			'C#'
		],
		workPosted: [56, 189, 303, 401, 503, 630, 722, 835, 953],
		workAssigned: [208, 531, 725, 891]
	},
	{
		id: 84,
		firstName: 'Barr',
		lastName: 'Ballendine',
		fullName: 'Barr Ballendine',
		role: 'Supervisor',
		email: 'barr.ballendine@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'barrballendine' },
			{ method: 'Teams', contact: 'barrballendine' },
			{ method: 'Phone', contact: '283-634-9594' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'Client Communication',
			'System Architecture',
			'Analytics',
			'Performance Tuning',
			'Database Management',
			'JavaScript'
		],
		workPosted: [83, 191, 304, 410, 521, 631, 744, 846, 966],
		workAssigned: [112, 264, 424, 622, 834]
	},
	{
		id: 85,
		firstName: 'Chuck',
		lastName: 'Cunniffe',
		fullName: 'Chuck Cunniffe',
		role: 'Supervisor',
		email: 'chuck.cunniffe@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'Cloud Services',
			'Audit Trail Management',
			'Operational Efficiency',
			'Python',
			'Database Management',
			'UI/UX Design',
			'Data Analysis'
		],
		workPosted: [87, 193, 305, 417, 523, 634, 745, 847, 967],
		workAssigned: [113, 265, 440, 630, 849]
	},
	{
		id: 86,
		firstName: 'Cliff',
		lastName: 'Lazenbury',
		fullName: 'Cliff Lazenbury',
		role: 'Senior Associate',
		email: 'cliff.lazenbury@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'clifflazenbury' },
			{ method: 'Teams', contact: 'clifflazenbury' },
			{ method: 'Phone', contact: '421-952-6521' },
			{ method: 'LinkedIn', contact: 'clifflazenbury' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: [
			'API Development',
			'Business Intelligence',
			'Regulatory Compliance',
			'System Architecture',
			'Healthcare IT',
			'Data Visualization',
			'Python'
		],
		workPosted: [88, 194, 309, 418, 527, 635, 748, 850, 968],
		workAssigned: [79, 189, 285, 421, 507, 615, 712, 790, 873, 995]
	},
	{
		id: 87,
		firstName: 'Sim',
		lastName: 'Brandsma',
		fullName: 'Sim Brandsma',
		role: 'Senior Associate',
		email: 'sim.brandsma@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'API Development',
			'HIPAA Compliance',
			'SQL',
			'C#',
			'Report Generation',
			'Data Encryption',
			'Backend Development'
		],
		workPosted: [89, 195, 310, 419, 528, 636, 751, 851, 970],
		workAssigned: [108, 191, 287, 423, 508, 620, 713, 792, 874, 997]
	},
	{
		id: 88,
		firstName: 'Karolina',
		lastName: 'Saban',
		fullName: 'Karolina Saban',
		role: 'Senior Associate',
		email: 'karolina.saban@astarconsulting.com',
		avatarType: 'animal',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'karolinasaban' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: ['Client Communication', 'Report Generation', 'JavaScript'],
		workPosted: [91, 199, 311, 421, 530, 638, 752, 855, 971],
		workAssigned: [111, 193, 289, 428, 509, 628, 714, 794, 884]
	},
	{
		id: 89,
		firstName: 'Eulalie',
		lastName: 'Cavey',
		fullName: 'Eulalie Cavey',
		role: 'Supervisor',
		email: 'eulalie.cavey@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [{ method: 'Slack', contact: 'eulaliecavey' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'Frontend Development',
			'Inventory Database',
			'Data Encryption',
			'Healthcare IT',
			'API Development',
			'HIPAA Compliance',
			'C#'
		],
		workPosted: [92, 200, 307, 422, 534, 637, 753, 849, 972],
		workAssigned: [115, 271, 441, 650, 853]
	},
	{
		id: 90,
		firstName: 'Kenn',
		lastName: 'Pettett',
		fullName: 'Kenn Pettett',
		role: 'Senior Manager',
		email: 'kenn.pettett@astarconsulting.com',
		avatarType: 'animal',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'kennpettett' },
			{ method: 'Teams', contact: 'kennpettett' },
			{ method: 'Phone', contact: '535-910-3930' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Performance Tuning',
			'Data Visualization',
			'Regulatory Compliance',
			'C#',
			'Backend Development',
			'Network Security',
			'Data Encryption',
			'Analytics'
		],
		workPosted: [81, 201, 306, 413, 517, 639, 725, 853, 960],
		workAssigned: [261, 532, 726, 895]
	},
	{
		id: 91,
		firstName: 'Ikey',
		lastName: 'Cowthart',
		fullName: 'Ikey Cowthart',
		role: 'Associate',
		email: 'ikey.cowthart@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'ikeycowthart' },
			{ method: 'Teams', contact: 'ikeycowthart' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 7 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: ['Python', 'Cloud Services'],
		workPosted: [93, 202, 312, 425, 536, 642, 755, 864, 973],
		workAssigned: [68, 155, 249, 354, 456, 564, 667, 757, 869, 957]
	},
	{
		id: 92,
		firstName: 'Harriot',
		lastName: 'Pettegre',
		fullName: 'Harriot Pettegre',
		role: 'Supervisor',
		email: 'harriot.pettegre@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'harriotpettegre' },
			{ method: 'Teams', contact: 'harriotpettegre' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['E-commerce Security', 'Inventory Database', 'Audit Trail Management', 'C#'],
		workPosted: [94, 203, 308, 423, 537, 640, 754, 854, 974],
		workAssigned: [116, 274, 454, 658, 871]
	},
	{
		id: 93,
		firstName: 'Simone',
		lastName: 'Sibthorp',
		fullName: 'Simone Sibthorp',
		role: 'Associate',
		email: 'simone.sibthorp@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'simonesibthorp' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'Operational Efficiency',
			'Cloud Services',
			'Inventory Database',
			'System Architecture',
			'Python'
		],
		workPosted: [95, 207, 313, 426, 538, 644, 756, 866, 975],
		workAssigned: [69, 157, 250, 358, 457, 567, 668, 758, 870, 958]
	},
	{
		id: 94,
		firstName: 'Reagen',
		lastName: 'Harbour',
		fullName: 'Reagen Harbour',
		role: 'Senior Associate',
		email: 'reagen.harbour@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['Python', 'E-commerce Security', 'HIPAA Compliance'],
		workPosted: [97, 205, 314, 427, 539, 645, 757, 858, 976],
		workAssigned: [114, 194, 293, 431, 511, 631, 716, 800, 890]
	},
	{
		id: 95,
		firstName: 'Giles',
		lastName: 'Cruise',
		fullName: 'Giles Cruise',
		role: 'Senior Associate',
		email: 'giles.cruise@astarconsulting.com',
		avatarType: 'animal',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'gilescruise' },
			{ method: 'Teams', contact: 'gilescruise' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'UI/UX Design',
			'Audit Trail Management',
			'Database Management',
			'Supply Chain Management',
			'Healthcare IT',
			'HIPAA Compliance',
			'User Testing',
			'Python'
		],
		workPosted: [99, 206, 315, 428, 541, 647, 758, 861, 977],
		workAssigned: [122, 195, 299, 432, 515, 634, 720, 801, 900]
	},
	{
		id: 96,
		firstName: 'Nevil',
		lastName: 'Auchterlonie',
		fullName: 'Nevil Auchterlonie',
		role: 'Supervisor',
		email: 'nevil.auchterlonie@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 7 }
				]
			}
		],
		skills: [
			'Inventory Database',
			'Frontend Development',
			'Supply Chain Management',
			'Payment Solutions',
			'C#'
		],
		workPosted: [96, 204, 316, 424, 542, 648, 759, 865, 978],
		workAssigned: [144, 275, 466, 665, 875]
	},
	{
		id: 97,
		firstName: 'Alanah',
		lastName: 'Huncote',
		fullName: 'Alanah Huncote',
		role: 'Senior Associate',
		email: 'alanah.huncote@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'alanahhuncote' },
			{ method: 'Teams', contact: 'alanahhuncote' },
			{ method: 'Phone', contact: '294-518-5992' },
			{ method: 'LinkedIn', contact: 'alanahhuncote' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'Healthcare IT',
			'Supply Chain Management',
			'Frontend Development',
			'E-commerce Security',
			'Business Intelligence',
			'API Development',
			'Audit Trail Management',
			'Performance Tuning',
			'C#'
		],
		workPosted: [105, 210, 317, 429, 543, 649, 760, 868, 979],
		workAssigned: [127, 201, 300, 434, 521, 635, 724, 802, 901]
	},
	{
		id: 98,
		firstName: 'Filippa',
		lastName: 'Berns',
		fullName: 'Filippa Berns',
		role: 'Senior Associate',
		email: 'filippa.berns@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'filippaberns' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			}
		],
		skills: [
			'HIPAA Compliance',
			'Healthcare IT',
			'E-commerce Security',
			'C#',
			'Operational Efficiency'
		],
		workPosted: [108, 211, 318, 430, 544, 651, 762, 869, 980],
		workAssigned: [128, 205, 303, 437, 527, 636, 735, 804, 904]
	},
	{
		id: 99,
		firstName: 'Maudie',
		lastName: 'Pulhoster',
		fullName: 'Maudie Pulhoster',
		role: 'Senior Associate',
		email: 'maudie.pulhoster@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'maudiepulhoster' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['Healthcare IT', 'Python', 'C#', 'Inventory Database', 'System Architecture'],
		workPosted: [109, 212, 319, 431, 546, 652, 763, 870, 981],
		workAssigned: [129, 206, 311, 439, 528, 638, 736, 806, 911]
	},
	{
		id: 100,
		firstName: 'Clerissa',
		lastName: 'Yitshak',
		fullName: 'Clerissa Yitshak',
		role: 'Associate',
		email: 'clerissa.yitshak@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'clerissayitshak' },
			{ method: 'Teams', contact: 'clerissayitshak' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Payment Solutions',
			'Backend Development',
			'Regulatory Compliance',
			'Data Analysis',
			'Client Communication',
			'Performance Tuning',
			'Inventory Database',
			'C#'
		],
		workPosted: [117, 215, 320, 433, 548, 655, 764, 872, 982],
		workAssigned: [71, 160, 251, 359, 459, 568, 669, 759, 876, 959]
	},
	{
		id: 101,
		firstName: 'Miguelita',
		lastName: 'Coch',
		fullName: 'Miguelita Coch',
		role: 'Supervisor',
		email: 'miguelita.coch@astarconsulting.com',
		avatarType: 'female',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'miguelitacoch' },
			{ method: 'Teams', contact: 'miguelitacoch' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 3 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Supply Chain Management',
			'Database Management',
			'HIPAA Compliance',
			'Healthcare IT',
			'UI/UX Design',
			'Backend Development',
			'SQL',
			'JavaScript'
		],
		workPosted: [101, 209, 321, 432, 545, 650, 765, 871, 983],
		workAssigned: [146, 295, 473, 672, 880]
	},
	{
		id: 102,
		firstName: 'Elora',
		lastName: 'Sutliff',
		fullName: 'Elora Sutliff',
		role: 'Manager',
		email: 'elora.sutliff@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'elorasutliff' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'E-commerce Security',
			'User Testing',
			'Database Management',
			'Data Analysis',
			'Analytics',
			'Business Intelligence',
			'JavaScript'
		],
		workPosted: [90, 213, 322, 434, 525, 646, 749, 867, 964],
		workAssigned: [167, 356, 484, 682, 948]
	},
	{
		id: 103,
		firstName: 'Fifi',
		lastName: 'Tennant',
		fullName: 'Fifi Tennant',
		role: 'Director',
		email: 'fifi.tennant@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'fifitennant' },
			{ method: 'Teams', contact: 'fifitennant' },
			{ method: 'Phone', contact: '486-693-4590' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: ['Analytics', 'Client Communication', 'API Development', 'Network Security', 'Python'],
		workPosted: [84, 188, 323, 406, 531, 643, 726, 873, 969],
		workAssigned: [715]
	},
	{
		id: 104,
		firstName: 'Buffy',
		lastName: 'Van Brug',
		fullName: 'Buffy Van Brug',
		role: 'Senior Manager',
		email: 'buffy.van brug@astarconsulting.com',
		avatarType: 'animal',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'buffyvan brug' },
			{ method: 'Teams', contact: 'buffyvan brug' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 2 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 4 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'UI/UX Design',
			'Data Encryption',
			'Audit Trail Management',
			'Inventory Database',
			'HIPAA Compliance',
			'SQL',
			'Supply Chain Management',
			'Regulatory Compliance',
			'JavaScript'
		],
		workPosted: [98, 208, 324, 435, 532, 653, 746, 874, 984],
		workAssigned: [279, 585, 795, 953]
	},
	{
		id: 105,
		firstName: 'Blanche',
		lastName: 'Umfrey',
		fullName: 'Blanche Umfrey',
		role: 'Supervisor',
		email: 'blanche.umfrey@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'blancheumfrey' },
			{ method: 'Teams', contact: 'blancheumfrey' },
			{ method: 'Phone', contact: '385-832-9334' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 1 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 3 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: ['SQL', 'Backend Development', 'Data Encryption', 'Audit Trail Management', 'Python'],
		workPosted: [102, 214, 325, 436, 547, 654, 768, 875, 985],
		workAssigned: [152, 307, 480, 675, 897]
	},
	{
		id: 106,
		firstName: 'Elizabeth',
		lastName: 'Roath',
		fullName: 'Elizabeth Roath',
		role: 'Associate',
		email: 'elizabeth.roath@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [
			{ method: 'Slack', contact: 'elizabethroath' },
			{ method: 'Teams', contact: 'elizabethroath' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 7 },
					{ day: 'Tuesday', hours: 8 },
					{ day: 'Wednesday', hours: 6 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 5 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 6 },
					{ day: 'Friday', hours: 5 }
				]
			}
		],
		skills: [
			'Business Intelligence',
			'Database Management',
			'Payment Solutions',
			'Data Analysis',
			'Data Encryption',
			'Analytics',
			'Backend Development',
			'HIPAA Compliance',
			'Python'
		],
		workPosted: [119, 216, 326, 443, 555, 656, 770, 876, 986],
		workAssigned: [73, 170, 253, 361, 461, 572, 671, 760, 872, 961]
	},
	{
		id: 107,
		firstName: 'Victoria',
		lastName: 'Casarili',
		fullName: 'Victoria Casarili',
		role: 'Associate',
		email: 'victoria.casarili@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [{ method: 'Slack', contact: 'victoriacasarili' }],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 3 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 3 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 4 },
					{ day: 'Tuesday', hours: 6 },
					{ day: 'Wednesday', hours: 1 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 6 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 7 },
					{ day: 'Thursday', hours: 4 },
					{ day: 'Friday', hours: 1 }
				]
			}
		],
		skills: [
			'Payment Solutions',
			'Supply Chain Management',
			'Frontend Development',
			'Operational Efficiency',
			'C#'
		],
		workPosted: [120, 217, 329, 447, 561, 659, 771, 878, 987],
		workAssigned: [75, 172, 256, 362, 462, 573, 676, 764, 885, 963]
	},
	{
		id: 108,
		firstName: 'Shelba',
		lastName: 'Wilkennson',
		fullName: 'Shelba Wilkennson',
		role: 'Supervisor',
		email: 'shelba.wilkennson@astarconsulting.com',
		avatarType: 'female',
		team: 1,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 2 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 3 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 2 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 2 },
					{ day: 'Friday', hours: 4 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 7 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 1 },
					{ day: 'Friday', hours: 2 }
				]
			}
		],
		skills: [
			'Cloud Services',
			'Data Encryption',
			'Data Analysis',
			'Operational Efficiency',
			'SQL',
			'Python'
		],
		workPosted: [103, 218, 327, 437, 549, 657, 769, 877, 988],
		workAssigned: [154, 308, 490, 683, 898]
	},
	{
		id: 109,
		firstName: 'Steve',
		lastName: 'Sotworth',
		fullName: 'Steve Sotworth',
		role: 'Manager',
		email: 'steve.sotworth@astarconsulting.com',
		avatarType: 'male',
		team: 2,
		contactMethods: [],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 6 },
					{ day: 'Tuesday', hours: 1 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 8 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 4 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 5 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 1 },
					{ day: 'Tuesday', hours: 5 },
					{ day: 'Wednesday', hours: 5 },
					{ day: 'Thursday', hours: 8 },
					{ day: 'Friday', hours: 5 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 8 },
					{ day: 'Tuesday', hours: 2 },
					{ day: 'Wednesday', hours: 8 },
					{ day: 'Thursday', hours: 7 },
					{ day: 'Friday', hours: 8 }
				]
			}
		],
		skills: [
			'E-commerce Security',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Network Security',
			'Python'
		],
		workPosted: [110, 219, 328, 439, 550, 658, 772, 879, 989],
		workAssigned: [158, 323, 493, 685, 903]
	},
	{
		id: 110,
		firstName: 'Maryann',
		lastName: 'Biaggioli',
		fullName: 'Maryann Biaggioli',
		role: 'Supervisor',
		email: 'maryann.biaggioli@astarconsulting.com',
		avatarType: 'male',
		team: 1,
		contactMethods: [
			{ method: 'Slack', contact: 'maryannbiaggioli' },
			{ method: 'Teams', contact: 'maryannbiaggioli' },
			{ method: 'Phone', contact: '744-759-5904' }
		],
		availability: [
			{
				week: 'Week 16',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 17',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 18',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			},
			{
				week: 'Week 19',
				days: [
					{ day: 'Monday', hours: 0 },
					{ day: 'Tuesday', hours: 0 },
					{ day: 'Wednesday', hours: 0 },
					{ day: 'Thursday', hours: 0 },
					{ day: 'Friday', hours: 0 }
				]
			}
		],
		skills: ['Business Intelligence', 'Audit Trail Management', 'Python'],
		workPosted: [111, 220, 330, 440, 551, 660, 773, 880, 990],
		workAssigned: [164, 332, 495, 686, 907]
	}
];

export const taskData = [
	{
		id: 1,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Support',
			supportCase: 'SBEVO0ZUX8'
		},
		startDate: '02/09/2024',
		endDate: '05/04/2024',
		skills: ['Operational Efficiency', 'Data Visualization', 'Payment Solutions'],
		title: 'Adjust Payment Solutions in Data Cleansing',
		description:
			'Your main task will be Payment Solutions within the Data Cleansing. Your next steps should include Payment Solutions to enhance overall outcomes. Focus also on Operational Efficiency to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 1,
		assignedTo: 2
	},
	{
		id: 2,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBIM22MYHT'
		},
		startDate: '01/20/2024',
		endDate: '05/20/2024',
		skills: [
			'Healthcare IT',
			'JavaScript',
			'Network Security',
			'Operational Efficiency',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Payment Solutions'
		],
		title: 'Create Operational Efficiency in Client Onboarding Process',
		description:
			'You will begin by Payment Solutions within the Client Onboarding Process. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on JavaScript to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 2,
		assignedTo: 3
	},
	{
		id: 3,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Testing',
			supportCase: 'SB1ZF6TMH1'
		},
		startDate: '09/06/2023',
		endDate: '05/01/2024',
		skills: [
			'Audit Trail Management',
			'Business Intelligence',
			'HIPAA Compliance',
			'Data Analysis'
		],
		title: 'Material Specification Tool Needs Data Analysis Fixed',
		description:
			'Your main task will be HIPAA Compliance within the Material Specification Tool. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 3,
		assignedTo: 5
	},
	{
		id: 4,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SBXGOU8ZM0'
		},
		startDate: '03/30/2024',
		endDate: '05/11/2024',
		skills: [
			'Performance Tuning',
			'Report Generation',
			'Payment Solutions',
			'HIPAA Compliance',
			'UI/UX Design',
			'Data Visualization'
		],
		title: 'Mobile Application Framework Needs UI/UX Design Fixed',
		description:
			'The focus is on HIPAA Compliance within the Mobile Application Framework. From there, move on to UI/UX Design to enhance overall outcomes. Focus also on Report Generation to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 4,
		assignedTo: 7
	},
	{
		id: 5,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 5,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'UAT',
			supportCase: 'SBACN46MDL'
		},
		startDate: '03/22/2023',
		endDate: '05/07/2024',
		skills: ['Database Management', 'Supply Chain Management', 'E-commerce Security', 'SQL'],
		title: 'Fix E-commerce Security in Full Stack Web Development',
		description:
			'You will begin by Supply Chain Management within the Full Stack Web Development. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on E-commerce Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 5,
		assignedTo: 8
	},
	{
		id: 6,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Testing',
			supportCase: 'SB63458SUZ'
		},
		startDate: '01/17/2024',
		endDate: '05/02/2024',
		skills: [
			'SQL',
			'Data Encryption',
			'Healthcare IT',
			'E-commerce Security',
			'Cloud Services',
			'Inventory Database',
			'Data Analysis'
		],
		title: 'Create Inventory Database in Audience Analytics',
		description:
			'The objective here is Inventory Database within the Audience Analytics. Once completed, proceed to SQL to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 6,
		assignedTo: 1
	},
	{
		id: 7,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Development',
			supportCase: 'SBK4ULR20I'
		},
		startDate: '03/02/2024',
		endDate: '04/30/2024',
		skills: ['Supply Chain Management', 'Healthcare IT', 'HIPAA Compliance'],
		title: 'Help Healthcare IT in Financial Forecasting Tool',
		description:
			'You will begin by HIPAA Compliance within the Financial Forecasting Tool. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 7,
		assignedTo: 9
	},
	{
		id: 8,
		role: 'Senior Manager',
		team: 1,
		status: 'Cancelled',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Project Management',
			supportCase: 'SBS2EY4WSQ'
		},
		startDate: '03/12/2024',
		endDate: '05/16/2024',
		skills: ['Performance Tuning', 'SQL', 'Data Analysis', 'Inventory Database'],
		title: 'Create Inventory Database in Digital Distribution Network',
		description:
			'Your main task will be SQL within the Digital Distribution Network. Once completed, proceed to Inventory Database to enhance overall outcomes. Focus also on SQL to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 17,
		assignedTo: 4
	},
	{
		id: 9,
		role: 'Supervisor',
		team: 2,
		status: 'Sign-off',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'UAT',
			supportCase: 'SB4PXAC3SN'
		},
		startDate: '03/26/2023',
		endDate: '05/03/2024',
		skills: [
			'Performance Tuning',
			'E-commerce Security',
			'Client Communication',
			'Data Analysis',
			'Healthcare IT'
		],
		title: 'Building Maintenance App Needs E-commerce Security Fixed',
		description:
			'The focus is on Performance Tuning within the Building Maintenance App. From there, move on to Performance Tuning to enhance overall outcomes. Focus also on Performance Tuning to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 10,
		assignedTo: 6
	},
	{
		id: 10,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Development',
			supportCase: 'SB6VDGOEC6'
		},
		startDate: '06/07/2023',
		endDate: '05/10/2024',
		skills: [
			'Business Intelligence',
			'Cloud Services',
			'Audit Trail Management',
			'HIPAA Compliance',
			'Operational Efficiency',
			'Client Communication',
			'Healthcare IT'
		],
		title: 'Create Client Communication in Customer Loyalty Programs',
		description:
			'You will begin by Operational Efficiency within the Customer Loyalty Programs. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 8,
		assignedTo: 11
	},
	{
		id: 11,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Project Management',
			supportCase: 'SBLA8YGRSR'
		},
		startDate: '03/04/2024',
		endDate: '05/17/2024',
		skills: ['E-commerce Security', 'Audit Trail Management', 'Data Encryption'],
		title: 'Help Audit Trail Management in Customer Segmentation Analysis',
		description:
			'You will begin by E-commerce Security within the Customer Segmentation Analysis. Once completed, proceed to Data Encryption to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 9,
		assignedTo: 12
	},
	{
		id: 12,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Development',
			supportCase: 'SBNIKXO9VA'
		},
		startDate: '03/20/2023',
		endDate: '05/01/2024',
		skills: [
			'Business Intelligence',
			'Audit Trail Management',
			'HIPAA Compliance',
			'Operational Efficiency'
		],
		title: 'Create Operational Efficiency in Telemedicine Platform',
		description:
			'You will begin by Operational Efficiency within the Telemedicine Platform. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on Operational Efficiency to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 13,
		assignedTo: 15
	},
	{
		id: 13,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SBOJ8GDV67'
		},
		startDate: '12/22/2023',
		endDate: '05/27/2024',
		skills: [
			'User Testing',
			'Data Analysis',
			'Operational Efficiency',
			'Inventory Database',
			'Backend Development'
		],
		title: 'Media Storage Solutions Needs Data Analysis Fixed',
		description:
			'We aim to Operational Efficiency within the Media Storage Solutions. Your next steps should include Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 11,
		assignedTo: 19
	},
	{
		id: 14,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SBXTO6WPZ1'
		},
		startDate: '12/01/2023',
		endDate: '05/25/2024',
		skills: [
			'Operational Efficiency',
			'Payment Solutions',
			'Network Security',
			'Healthcare IT',
			'Cloud Services'
		],
		title: 'Resolve Healthcare IT in Customer Segmentation Analysis',
		description:
			'The objective here is Payment Solutions within the Customer Segmentation Analysis. Your next steps should include Network Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 14,
		assignedTo: 10
	},
	{
		id: 15,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Support',
			supportCase: 'SBL8HSYG0O'
		},
		startDate: '04/22/2024',
		endDate: '05/13/2024',
		skills: [
			'Performance Tuning',
			'HIPAA Compliance',
			'Audit Trail Management',
			'Database Management'
		],
		title: 'Support Performance Tuning in CRM Integration',
		description:
			'Your main task will be Audit Trail Management within the CRM Integration. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 12,
		assignedTo: 20
	},
	{
		id: 16,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Development',
			supportCase: 'SBC6YPE3GV'
		},
		startDate: '12/07/2023',
		endDate: '05/18/2024',
		skills: [
			'HIPAA Compliance',
			'Report Generation',
			'Python',
			'Data Analysis',
			'Performance Tuning'
		],
		title: 'Create Data Analysis in Inventory Management Application',
		description:
			'The objective here is HIPAA Compliance within the Inventory Management Application. Once completed, proceed to Data Analysis to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 16,
		assignedTo: 13
	},
	{
		id: 17,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBL0BAQ3LQ'
		},
		startDate: '03/15/2024',
		endDate: '05/19/2024',
		skills: [
			'Regulatory Compliance',
			'Healthcare IT',
			'Client Communication',
			'Operational Efficiency'
		],
		title: 'Resolve Client Communication in SaaS Platform Integration',
		description:
			'The objective here is Regulatory Compliance within the SaaS Platform Integration. Following initial steps, you should Operational Efficiency to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 18,
		assignedTo: 16
	},
	{
		id: 18,
		role: 'Senior Associate',
		team: 2,
		status: 'Cancelled',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Testing',
			supportCase: 'SBNDZJMQAN'
		},
		startDate: '02/28/2024',
		endDate: '05/16/2024',
		skills: [
			'Analytics',
			'Supply Chain Management',
			'Business Intelligence',
			'Database Management',
			'Inventory Database',
			'Client Communication'
		],
		title: 'Optimize Supply Chain Management in Product Design Simulation',
		description:
			'We aim to Inventory Database within the Product Design Simulation. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 23,
		assignedTo: 21
	},
	{
		id: 19,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Support',
			supportCase: 'SBGEQ0O1EC'
		},
		startDate: '11/13/2023',
		endDate: '05/09/2024',
		skills: ['Performance Tuning', 'Healthcare IT', 'Audit Trail Management', 'UI/UX Design'],
		title: 'Adjust Performance Tuning in Data Cleansing',
		description:
			'Your main task will be UI/UX Design within the Data Cleansing. From there, move on to Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 15,
		assignedTo: 22
	},
	{
		id: 20,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SBMOZGB2NL'
		},
		startDate: '06/30/2023',
		endDate: '05/29/2024',
		skills: ['E-commerce Security', 'Cloud Services', 'SQL'],
		title: 'Payment Gateway Integration Needs E-commerce Security Fixed',
		description:
			'The focus is on SQL within the Payment Gateway Integration. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 19,
		assignedTo: 27
	},
	{
		id: 21,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SBAMNISIZ3'
		},
		startDate: '03/05/2024',
		endDate: '05/23/2024',
		skills: [
			'Client Communication',
			'Network Security',
			'Analytics',
			'Cloud Services',
			'Healthcare IT',
			'API Development'
		],
		title: 'Adjust Client Communication in Data Reporting Tools',
		description:
			'You will begin by Client Communication within the Data Reporting Tools. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 20,
		assignedTo: 29
	},
	{
		id: 22,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SBKX6XXTF7'
		},
		startDate: '04/01/2023',
		endDate: '05/14/2024',
		skills: ['Cloud Services', 'Performance Tuning', 'Network Security', 'System Architecture'],
		title: 'Fix Cloud Services in Retail Management Suite',
		description:
			'This task involves Network Security within the Retail Management Suite. Your next steps should include Cloud Services to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 24,
		assignedTo: 26
	},
	{
		id: 23,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Support',
			supportCase: 'SBYV5BL8ZU'
		},
		startDate: '03/30/2023',
		endDate: '04/27/2024',
		skills: ['Business Intelligence', 'Operational Efficiency', 'SQL'],
		title: 'Support Business Intelligence in Workflow Automation',
		description:
			'We aim to Business Intelligence within the Workflow Automation. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 25,
		assignedTo: 18
	},
	{
		id: 24,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SBJ7XD7F7B'
		},
		startDate: '11/29/2023',
		endDate: '05/14/2024',
		skills: ['System Architecture', 'JavaScript', 'E-commerce Security', 'Healthcare IT'],
		title: 'Web Application Security Needs JavaScript Fixed',
		description:
			'The objective here is System Architecture within the Web Application Security. Your next steps should include JavaScript to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 28,
		assignedTo: 24
	},
	{
		id: 25,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SBUDRIQ2UG'
		},
		startDate: '05/07/2023',
		endDate: '05/21/2024',
		skills: ['Performance Tuning', 'SQL', 'Supply Chain Management'],
		title: 'Project Cost Tracking Needs Supply Chain Management Fixed',
		description:
			'You will begin by SQL within the Project Cost Tracking. Your next steps should include Supply Chain Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 21,
		assignedTo: 32
	},
	{
		id: 26,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'UAT',
			supportCase: 'SBXZRYPW91'
		},
		startDate: '11/09/2023',
		endDate: '05/02/2024',
		skills: [
			'Business Intelligence',
			'Operational Efficiency',
			'Performance Tuning',
			'Inventory Database',
			'C#',
			'HIPAA Compliance'
		],
		title: 'Point of Sale System Needs Business Intelligence Fixed',
		description:
			'You will begin by C# within the Point of Sale System. From there, move on to HIPAA Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 30,
		assignedTo: 31
	},
	{
		id: 27,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBKCA17460'
		},
		startDate: '04/09/2023',
		endDate: '05/03/2024',
		skills: [
			'E-commerce Security',
			'Operational Efficiency',
			'Data Encryption',
			'Data Visualization'
		],
		title: 'Fix Data Encryption in Client Onboarding Process',
		description:
			'Your main task will be E-commerce Security within the Client Onboarding Process. From there, move on to Data Encryption to enhance overall outcomes. Focus also on Data Visualization to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 22,
		assignedTo: 33
	},
	{
		id: 28,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Development',
			supportCase: 'SBUOWLSY6V'
		},
		startDate: '09/27/2023',
		endDate: '05/27/2024',
		skills: ['SQL', 'Performance Tuning', 'C#', 'Operational Efficiency'],
		title: 'Create SQL in Audience Analytics',
		description:
			'We aim to C# within the Audience Analytics. Your next steps should include Performance Tuning to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 26,
		assignedTo: 35
	},
	{
		id: 29,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SBOGHAU7G4'
		},
		startDate: '04/05/2024',
		endDate: '05/29/2024',
		skills: [
			'Healthcare IT',
			'Analytics',
			'Business Intelligence',
			'Inventory Database',
			'Payment Solutions',
			'Data Analysis'
		],
		title: 'Create Inventory Database in Compliance Tracking System',
		description:
			'The focus is on Data Analysis within the Compliance Tracking System. Your next steps should include Inventory Database to enhance overall outcomes. Focus also on Healthcare IT to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 31,
		assignedTo: 37
	},
	{
		id: 30,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'UAT',
			supportCase: 'SBF2JETSB8'
		},
		startDate: '06/19/2023',
		endDate: '05/28/2024',
		skills: [
			'E-commerce Security',
			'Inventory Database',
			'HIPAA Compliance',
			'User Testing',
			'Healthcare IT',
			'Data Visualization',
			'Frontend Development'
		],
		title: 'Resolve Healthcare IT in Lead Tracking Software',
		description:
			'The objective here is HIPAA Compliance within the Lead Tracking Software. Following initial steps, you should Healthcare IT to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 27,
		assignedTo: 38
	},
	{
		id: 31,
		role: 'Director',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBWLF2QATF'
		},
		startDate: '08/06/2023',
		endDate: '05/10/2024',
		skills: ['SQL', 'Business Intelligence', 'Python', 'Operational Efficiency'],
		title: 'Support Business Intelligence in Product Customization Tool',
		description:
			'You will begin by Operational Efficiency within the Product Customization Tool. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 39,
		assignedTo: 14
	},
	{
		id: 32,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Support',
			supportCase: 'SBKR4Z5M2Y'
		},
		startDate: '11/13/2023',
		endDate: '05/16/2024',
		skills: [
			'Client Communication',
			'HIPAA Compliance',
			'Supply Chain Management',
			'Operational Efficiency'
		],
		title: 'Resolve Supply Chain Management in Supply Chain Management System',
		description:
			'The objective here is Supply Chain Management within the Supply Chain Management System. Your next steps should include Supply Chain Management to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 34,
		assignedTo: 40
	},
	{
		id: 33,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SBP1C758FN'
		},
		startDate: '11/25/2023',
		endDate: '05/07/2024',
		skills: [
			'C#',
			'JavaScript',
			'Healthcare IT',
			'Audit Trail Management',
			'Business Intelligence',
			'E-commerce Security',
			'Operational Efficiency'
		],
		title: 'Optimize C# in Social Media Integration',
		description:
			'Your main task will be Healthcare IT within the Social Media Integration. Once completed, proceed to E-commerce Security to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 36,
		assignedTo: 23
	},
	{
		id: 34,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Support',
			supportCase: 'SBYEB9J86G'
		},
		startDate: '04/09/2023',
		endDate: '05/02/2024',
		skills: ['Report Generation', 'E-commerce Security', 'Regulatory Compliance'],
		title: 'Create Regulatory Compliance in Branding Portal',
		description:
			'This task involves Regulatory Compliance within the Branding Portal. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Focus also on Report Generation to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 29,
		assignedTo: 41
	},
	{
		id: 35,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'UAT',
			supportCase: 'SBW33B3I4K'
		},
		startDate: '12/06/2023',
		endDate: '05/05/2024',
		skills: [
			'Operational Efficiency',
			'Report Generation',
			'Analytics',
			'HIPAA Compliance',
			'Performance Tuning',
			'Network Security',
			'Data Encryption'
		],
		title: 'Create Analytics in Web Performance Monitoring',
		description:
			'The focus is on Performance Tuning within the Web Performance Monitoring. From there, move on to Data Encryption to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 37,
		assignedTo: 43
	},
	{
		id: 36,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Testing',
			supportCase: 'SBXRXJOPVJ'
		},
		startDate: '06/14/2023',
		endDate: '04/27/2024',
		skills: [
			'System Architecture',
			'Data Encryption',
			'SQL',
			'Operational Efficiency',
			'Data Analysis',
			'API Development',
			'E-commerce Security'
		],
		title: 'Resolve E-commerce Security in Retail Management Suite',
		description:
			'This task involves Data Encryption within the Retail Management Suite. Your next steps should include System Architecture to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 42,
		assignedTo: 44
	},
	{
		id: 37,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Development',
			supportCase: 'SBESBPYSA5'
		},
		startDate: '12/20/2023',
		endDate: '05/10/2024',
		skills: ['User Testing', 'Analytics', 'Inventory Database', 'UI/UX Design', 'Data Analysis'],
		title: 'Workflow Automation Needs User Testing Fixed',
		description:
			'This task involves UI/UX Design within the Workflow Automation. Your next steps should include Inventory Database to enhance overall outcomes. Focus also on UI/UX Design to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 32,
		assignedTo: 46
	},
	{
		id: 38,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Support',
			supportCase: 'SBCM093PKK'
		},
		startDate: '05/02/2023',
		endDate: '05/11/2024',
		skills: ['Supply Chain Management', 'Analytics', 'API Development'],
		title: 'Adjust API Development in Sales Dashboard',
		description:
			'You will begin by Supply Chain Management within the Sales Dashboard. From there, move on to Analytics to enhance overall outcomes. Focus also on Analytics to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 33,
		assignedTo: 47
	},
	{
		id: 39,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Support',
			supportCase: 'SBLZ1ZXUWC'
		},
		startDate: '11/22/2023',
		endDate: '05/21/2024',
		skills: [
			'Regulatory Compliance',
			'Data Analysis',
			'Network Security',
			'Supply Chain Management',
			'HIPAA Compliance'
		],
		title: 'Data Reporting Tools Needs Network Security Fixed',
		description:
			'The objective here is Supply Chain Management within the Data Reporting Tools. From there, move on to Regulatory Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 45,
		assignedTo: 42
	},
	{
		id: 40,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Development',
			supportCase: 'SB45BGI4UY'
		},
		startDate: '03/28/2023',
		endDate: '05/25/2024',
		skills: ['C#', 'Healthcare IT', 'Regulatory Compliance', 'Frontend Development'],
		title: 'Adjust Frontend Development in Inventory Management Application',
		description:
			'We aim to Frontend Development within the Inventory Management Application. Once completed, proceed to Frontend Development to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 35,
		assignedTo: 51
	},
	{
		id: 41,
		role: 'Senior Associate',
		team: 1,
		status: 'Pending',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Testing',
			supportCase: 'SBVMQHWAYC'
		},
		startDate: '03/31/2024',
		endDate: '05/05/2024',
		skills: ['Cloud Services', 'Regulatory Compliance', 'Python'],
		title: 'Implement Regulatory Compliance in Order Fulfillment Automation',
		description:
			'We aim to Python within the Order Fulfillment Automation. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 43,
		assignedTo: null
	},
	{
		id: 42,
		role: 'Supervisor',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Support',
			supportCase: 'SBRIV7DB3L'
		},
		startDate: '01/12/2024',
		endDate: '05/04/2024',
		skills: [
			'Audit Trail Management',
			'User Testing',
			'Analytics',
			'Healthcare IT',
			'Data Visualization',
			'Client Communication'
		],
		title: 'Optimize Client Communication in Business Analytics Interface',
		description:
			'The objective here is Healthcare IT within the Business Analytics Interface. Your next steps should include User Testing to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 48,
		assignedTo: 45
	},
	{
		id: 43,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Support',
			supportCase: 'SB0CKFM361'
		},
		startDate: '02/04/2024',
		endDate: '05/25/2024',
		skills: [
			'Performance Tuning',
			'API Development',
			'System Architecture',
			'Python',
			'Audit Trail Management',
			'Inventory Database'
		],
		title: 'Support System Architecture in Responsive Web Design',
		description:
			'The focus is on Inventory Database within the Responsive Web Design. Following initial steps, you should Performance Tuning to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 38,
		assignedTo: 53
	},
	{
		id: 44,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Development',
			supportCase: 'SB06RULO2J'
		},
		startDate: '10/28/2023',
		endDate: '05/25/2024',
		skills: ['Healthcare IT', 'Business Intelligence', 'Audit Trail Management'],
		title: 'Business Analytics Interface Needs Healthcare IT Fixed',
		description:
			'The objective here is Audit Trail Management within the Business Analytics Interface. Once completed, proceed to Audit Trail Management to enhance overall outcomes. Focus also on Audit Trail Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 40,
		assignedTo: 55
	},
	{
		id: 45,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SB0G0HY5QV'
		},
		startDate: '12/30/2023',
		endDate: '05/04/2024',
		skills: [
			'Cloud Services',
			'Business Intelligence',
			'Network Security',
			'Supply Chain Management',
			'Payment Solutions',
			'Data Analysis',
			'SQL'
		],
		title: 'Optimize Cloud Services in Real-Time Data Analysis',
		description:
			'We aim to Supply Chain Management within the Real-Time Data Analysis. Once completed, proceed to Business Intelligence to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 44,
		assignedTo: null
	},
	{
		id: 46,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SB3BZHL0PL'
		},
		startDate: '01/31/2024',
		endDate: '04/27/2024',
		skills: ['Data Encryption', 'Performance Tuning', 'Operational Efficiency'],
		title: 'Adjust Operational Efficiency in Visualization of Data Insights',
		description:
			'Your main task will be Operational Efficiency within the Visualization of Data Insights. From there, move on to Performance Tuning to enhance overall outcomes. Focus also on Data Encryption to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 41,
		assignedTo: 56
	},
	{
		id: 47,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Support',
			supportCase: 'SBAS1TR0F5'
		},
		startDate: '04/14/2024',
		endDate: '05/01/2024',
		skills: [
			'HIPAA Compliance',
			'Supply Chain Management',
			'Report Generation',
			'Healthcare IT',
			'JavaScript'
		],
		title: 'Optimize Supply Chain Management in Telemedicine Platform',
		description:
			'You will begin by HIPAA Compliance within the Telemedicine Platform. From there, move on to Report Generation to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 46,
		assignedTo: 57
	},
	{
		id: 48,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SBDWTV9NAE'
		},
		startDate: '01/21/2024',
		endDate: '05/25/2024',
		skills: [
			'System Architecture',
			'Business Intelligence',
			'Cloud Services',
			'API Development',
			'Payment Solutions'
		],
		title: 'Help Payment Solutions in Payment Gateway Integration',
		description:
			'We aim to API Development within the Payment Gateway Integration. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 47,
		assignedTo: null
	},
	{
		id: 49,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Testing',
			supportCase: 'SB39WRDEXY'
		},
		startDate: '12/21/2023',
		endDate: '04/30/2024',
		skills: [
			'Business Intelligence',
			'API Development',
			'Data Encryption',
			'Regulatory Compliance',
			'Data Visualization',
			'SQL',
			'Operational Efficiency'
		],
		title: 'Help Regulatory Compliance in Business Analytics Interface',
		description:
			'We aim to SQL within the Business Analytics Interface. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Business Intelligence to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 49,
		assignedTo: 64
	},
	{
		id: 50,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBWPVBETP3'
		},
		startDate: '11/06/2023',
		endDate: '05/08/2024',
		skills: [
			'Operational Efficiency',
			'Analytics',
			'Data Analysis',
			'Healthcare IT',
			'Inventory Database',
			'Payment Solutions'
		],
		title: 'Help Healthcare IT in Sales Dashboard',
		description:
			'The focus is on Inventory Database within the Sales Dashboard. From there, move on to Operational Efficiency to enhance overall outcomes. Focus also on Payment Solutions to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 63,
		assignedTo: 30
	},
	{
		id: 51,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'UAT',
			supportCase: 'SBP60KIWKF'
		},
		startDate: '02/28/2024',
		endDate: '05/02/2024',
		skills: ['Healthcare IT', 'Analytics', 'Report Generation', 'Regulatory Compliance'],
		title: 'Resolve Healthcare IT in Online Marketing Strategy',
		description:
			'The objective here is Analytics within the Online Marketing Strategy. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 50,
		assignedTo: 49
	},
	{
		id: 52,
		role: 'Manager',
		team: 2,
		status: 'Completed',
		hours: 12,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Testing',
			supportCase: 'SB0A03ZFWM'
		},
		startDate: '04/26/2023',
		endDate: '05/11/2024',
		skills: ['Performance Tuning', 'Operational Efficiency', 'Python'],
		title: 'Database Optimization Needs Python Fixed',
		description:
			'Your main task will be Operational Efficiency within the Database Optimization. Following initial steps, you should Performance Tuning to enhance overall outcomes. Focus also on Python to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 65,
		assignedTo: null
	},
	{
		id: 53,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'UAT',
			supportCase: 'SBMMJH9PN7'
		},
		startDate: '01/26/2024',
		endDate: '05/17/2024',
		skills: ['Business Intelligence', 'Cloud Services', 'Regulatory Compliance'],
		title: 'Create Business Intelligence in Customer Segmentation Analysis',
		description:
			'This task involves Regulatory Compliance within the Customer Segmentation Analysis. Your next steps should include Cloud Services to enhance overall outcomes. Focus also on Business Intelligence to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 51,
		assignedTo: 69
	},
	{
		id: 54,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Testing',
			supportCase: 'SBIU6ND07J'
		},
		startDate: '07/19/2023',
		endDate: '05/22/2024',
		skills: [
			'Data Analysis',
			'SQL',
			'Data Encryption',
			'E-commerce Security',
			'Data Visualization'
		],
		title: 'Create Data Encryption in E-commerce SEO Optimization',
		description:
			'This task involves Data Encryption within the E-commerce SEO Optimization. Once completed, proceed to Data Encryption to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 52,
		assignedTo: null
	},
	{
		id: 55,
		role: 'Senior Manager',
		team: 2,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'UAT',
			supportCase: 'SB3BX26OBU'
		},
		startDate: '04/29/2023',
		endDate: '05/24/2024',
		skills: [
			'Payment Solutions',
			'Business Intelligence',
			'Operational Efficiency',
			'Audit Trail Management',
			'JavaScript',
			'Performance Tuning',
			'UI/UX Design'
		],
		title: 'Adjust JavaScript in E-commerce SEO Optimization',
		description:
			'Your main task will be Payment Solutions within the E-commerce SEO Optimization. From there, move on to Performance Tuning to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 73,
		assignedTo: 17
	},
	{
		id: 56,
		role: 'Senior Manager',
		team: 1,
		status: 'Cancelled',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Requirements',
			supportCase: 'SB8DQUHID2'
		},
		startDate: '09/02/2023',
		endDate: '05/11/2024',
		skills: ['E-commerce Security', 'SQL', 'Data Encryption', 'Business Intelligence'],
		title: 'Optimize E-commerce Security in Customer Engagement Platform',
		description:
			'Your main task will be Data Encryption within the Customer Engagement Platform. Following initial steps, you should Business Intelligence to enhance overall outcomes. Focus also on E-commerce Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 83,
		assignedTo: 25
	},
	{
		id: 57,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Development',
			supportCase: 'SB22VZP4JJ'
		},
		startDate: '06/23/2023',
		endDate: '05/25/2024',
		skills: [
			'Network Security',
			'System Architecture',
			'Data Analysis',
			'Supply Chain Management',
			'Audit Trail Management'
		],
		title: 'Fix Network Security in Risk Assessment Software',
		description:
			'You will begin by Network Security within the Risk Assessment Software. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 53,
		assignedTo: null
	},
	{
		id: 58,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SBHYALVFSX'
		},
		startDate: '05/22/2023',
		endDate: '05/10/2024',
		skills: [
			'Python',
			'Regulatory Compliance',
			'Audit Trail Management',
			'E-commerce Security',
			'UI/UX Design'
		],
		title: 'Enterprise Resource Planning Needs UI/UX Design Fixed',
		description:
			'You will begin by UI/UX Design within the Enterprise Resource Planning. Once completed, proceed to Python to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 54,
		assignedTo: 50
	},
	{
		id: 59,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'UAT',
			supportCase: 'SBQ5TN1JZ8'
		},
		startDate: '10/24/2023',
		endDate: '05/10/2024',
		skills: ['Report Generation', 'Database Management', 'Supply Chain Management'],
		title: 'Support Report Generation in Lead Tracking Software',
		description:
			'The focus is on Report Generation within the Lead Tracking Software. Your next steps should include Supply Chain Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 58,
		assignedTo: 59
	},
	{
		id: 60,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Support',
			supportCase: 'SBCBCGCYI5'
		},
		startDate: '07/29/2023',
		endDate: '05/07/2024',
		skills: [
			'Regulatory Compliance',
			'Frontend Development',
			'Data Visualization',
			'Payment Solutions',
			'Client Communication',
			'UI/UX Design'
		],
		title: 'Order Fulfillment Automation Needs Data Visualization Fixed',
		description:
			'This task involves Regulatory Compliance within the Order Fulfillment Automation. From there, move on to UI/UX Design to enhance overall outcomes. Focus also on UI/UX Design to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 55,
		assignedTo: 75
	},
	{
		id: 61,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SBHE9P59CX'
		},
		startDate: '09/07/2023',
		endDate: '05/03/2024',
		skills: [
			'Business Intelligence',
			'User Testing',
			'Analytics',
			'Operational Efficiency',
			'Inventory Database',
			'Client Communication'
		],
		title: 'Optimize Operational Efficiency in Payment Gateway Integration',
		description:
			'Your main task will be Inventory Database within the Payment Gateway Integration. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Focus also on Analytics to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 60,
		assignedTo: 48
	},
	{
		id: 62,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Support',
			supportCase: 'SBZ1CQ6OBI'
		},
		startDate: '04/01/2023',
		endDate: '05/13/2024',
		skills: [
			'Data Analysis',
			'Supply Chain Management',
			'Inventory Database',
			'Network Security',
			'Healthcare IT'
		],
		title: 'Create Inventory Database in Content Management System',
		description:
			'Your main task will be Inventory Database within the Content Management System. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Focus also on Supply Chain Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 56,
		assignedTo: 76
	},
	{
		id: 63,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Discovery',
			supportCase: 'SBIJLOR1Q7'
		},
		startDate: '01/27/2024',
		endDate: '04/29/2024',
		skills: ['Network Security', 'Cloud Services', 'Regulatory Compliance', 'Report Generation'],
		title: 'Support Report Generation in Digital Catalogue',
		description:
			'The focus is on Network Security within the Digital Catalogue. Your next steps should include Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 59,
		assignedTo: 61
	},
	{
		id: 64,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Testing',
			supportCase: 'SBOCTPPAOE'
		},
		startDate: '03/16/2024',
		endDate: '04/27/2024',
		skills: [
			'UI/UX Design',
			'Client Communication',
			'Inventory Database',
			'Supply Chain Management',
			'E-commerce Security',
			'Operational Efficiency'
		],
		title: 'Media Storage Solutions Needs E-commerce Security Fixed',
		description:
			'You will begin by E-commerce Security within the Media Storage Solutions. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Supply Chain Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 57,
		assignedTo: 80
	},
	{
		id: 65,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBV44VQLP5'
		},
		startDate: '02/21/2024',
		endDate: '04/28/2024',
		skills: ['UI/UX Design', 'SQL', 'User Testing', 'Healthcare IT'],
		title: 'Help User Testing in Product Customization Tool',
		description:
			'The focus is on UI/UX Design within the Product Customization Tool. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on UI/UX Design to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 61,
		assignedTo: 62
	},
	{
		id: 66,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Support',
			supportCase: 'SBNGCQP5DE'
		},
		startDate: '09/23/2023',
		endDate: '05/20/2024',
		skills: [
			'Data Encryption',
			'Analytics',
			'HIPAA Compliance',
			'Inventory Database',
			'Cloud Services',
			'Supply Chain Management'
		],
		title: 'Fix Cloud Services in Branding Portal',
		description:
			'We aim to Data Encryption within the Branding Portal. Following initial steps, you should Inventory Database to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 62,
		assignedTo: 68
	},
	{
		id: 67,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Testing',
			supportCase: 'SBL28FGM54'
		},
		startDate: '08/16/2023',
		endDate: '05/09/2024',
		skills: ['Data Encryption', 'Inventory Database', 'Report Generation', 'C#'],
		title: 'Implement Data Encryption in Inventory Management Application',
		description:
			'The focus is on Report Generation within the Inventory Management Application. Your next steps should include Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 64,
		assignedTo: 82
	},
	{
		id: 68,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SBS12JKBDT'
		},
		startDate: '01/27/2024',
		endDate: '05/22/2024',
		skills: [
			'Business Intelligence',
			'Frontend Development',
			'Payment Solutions',
			'Analytics',
			'Supply Chain Management',
			'SQL',
			'Operational Efficiency'
		],
		title: 'Adjust Frontend Development in Point of Sale System',
		description:
			'The focus is on Supply Chain Management within the Point of Sale System. From there, move on to Supply Chain Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 66,
		assignedTo: 91
	},
	{
		id: 69,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Project Management',
			supportCase: 'SB8FNF5Y89'
		},
		startDate: '07/20/2023',
		endDate: '05/02/2024',
		skills: ['Data Analysis', 'Data Encryption', 'Python'],
		title: 'Resolve Data Encryption in Responsive Web Design',
		description:
			'Your main task will be Data Encryption within the Responsive Web Design. Your next steps should include Data Analysis to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 67,
		assignedTo: 93
	},
	{
		id: 70,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 4,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Development',
			supportCase: 'SBULVGW93T'
		},
		startDate: '08/30/2023',
		endDate: '05/08/2024',
		skills: [
			'Data Analysis',
			'SQL',
			'Healthcare IT',
			'Operational Efficiency',
			'Python',
			'Data Visualization'
		],
		title: 'Support Operational Efficiency in Internal Communication Tool',
		description:
			'This task involves Python within the Internal Communication Tool. From there, move on to Healthcare IT to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 68,
		assignedTo: null
	},
	{
		id: 71,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Testing',
			supportCase: 'SBYTIKXN9S'
		},
		startDate: '12/11/2023',
		endDate: '04/29/2024',
		skills: ['SQL', 'Data Analysis', 'Inventory Database', 'Cloud Services'],
		title: 'Support Data Analysis in Data Cleansing',
		description:
			'This task involves Cloud Services within the Data Cleansing. Once completed, proceed to Cloud Services to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 69,
		assignedTo: 100
	},
	{
		id: 72,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SB983DGG7W'
		},
		startDate: '07/24/2023',
		endDate: '05/17/2024',
		skills: [
			'HIPAA Compliance',
			'Data Visualization',
			'Healthcare IT',
			'Business Intelligence',
			'API Development'
		],
		title: 'Web Application Security Needs Data Visualization Fixed',
		description:
			'You will begin by Business Intelligence within the Web Application Security. Your next steps should include HIPAA Compliance to enhance overall outcomes. Focus also on Business Intelligence to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 70,
		assignedTo: null
	},
	{
		id: 73,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SBC1YHQ2TV'
		},
		startDate: '03/23/2023',
		endDate: '05/15/2024',
		skills: [
			'Data Visualization',
			'Supply Chain Management',
			'Analytics',
			'Performance Tuning',
			'Operational Efficiency',
			'Regulatory Compliance',
			'UI/UX Design'
		],
		title: 'Fix Regulatory Compliance in Media Storage Solutions',
		description:
			'The objective here is Analytics within the Media Storage Solutions. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 71,
		assignedTo: 106
	},
	{
		id: 74,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Development',
			supportCase: 'SBM2ZBIBRY'
		},
		startDate: '05/02/2023',
		endDate: '05/05/2024',
		skills: [
			'Regulatory Compliance',
			'Operational Efficiency',
			'Audit Trail Management',
			'UI/UX Design'
		],
		title: 'Create Operational Efficiency in Branding Portal',
		description:
			'You will begin by Audit Trail Management within the Branding Portal. From there, move on to Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 72,
		assignedTo: null
	},
	{
		id: 75,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Project Management',
			supportCase: 'SBQSZSEMJK'
		},
		startDate: '06/20/2023',
		endDate: '05/19/2024',
		skills: [
			'Payment Solutions',
			'Regulatory Compliance',
			'SQL',
			'Frontend Development',
			'Report Generation',
			'Operational Efficiency'
		],
		title: 'Support Operational Efficiency in Market Analysis Tool',
		description:
			'The focus is on Operational Efficiency within the Market Analysis Tool. Subsequently, your efforts will involve SQL to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 74,
		assignedTo: 107
	},
	{
		id: 76,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Development',
			supportCase: 'SBLC1WEOG4'
		},
		startDate: '04/12/2023',
		endDate: '04/28/2024',
		skills: [
			'UI/UX Design',
			'Data Visualization',
			'SQL',
			'E-commerce Security',
			'Performance Tuning'
		],
		title: 'Optimize Data Visualization in Point of Sale System',
		description:
			'This task involves Data Visualization within the Point of Sale System. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on Performance Tuning to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 77,
		assignedTo: 71
	},
	{
		id: 77,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'UAT',
			supportCase: 'SB28KR3TLI'
		},
		startDate: '12/04/2023',
		endDate: '05/12/2024',
		skills: ['Data Encryption', 'HIPAA Compliance', 'Regulatory Compliance'],
		title: 'Adjust Data Encryption in Mobile Application Framework',
		description:
			'The focus is on HIPAA Compliance within the Mobile Application Framework. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 78,
		assignedTo: 77
	},
	{
		id: 78,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Testing',
			supportCase: 'SBUNM32FWZ'
		},
		startDate: '04/28/2023',
		endDate: '05/10/2024',
		skills: ['API Development', 'C#', 'Payment Solutions'],
		title: 'Fix C# in Sales Dashboard',
		description:
			'This task involves API Development within the Sales Dashboard. From there, move on to Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 79,
		assignedTo: 52
	},
	{
		id: 79,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Support',
			supportCase: 'SB9NAZ3W0H'
		},
		startDate: '01/06/2024',
		endDate: '04/29/2024',
		skills: [
			'Healthcare IT',
			'Audit Trail Management',
			'Analytics',
			'Payment Solutions',
			'Network Security',
			'Inventory Database'
		],
		title: 'CRM Integration Needs Analytics Fixed',
		description:
			'Your main task will be Payment Solutions within the CRM Integration. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 81,
		assignedTo: 86
	},
	{
		id: 80,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SBPTAVUX5G'
		},
		startDate: '02/24/2024',
		endDate: '04/29/2024',
		skills: ['Data Visualization', 'Audit Trail Management', 'Analytics', 'User Testing'],
		title: 'Resolve User Testing in Health Records Integration',
		description:
			'The objective here is Audit Trail Management within the Health Records Integration. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 75,
		assignedTo: null
	},
	{
		id: 81,
		role: 'Manager',
		team: 2,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Development',
			supportCase: 'SBCW3774AF'
		},
		startDate: '11/14/2023',
		endDate: '04/30/2024',
		skills: ['Payment Solutions', 'Data Visualization', 'UI/UX Design'],
		title: 'Resolve Payment Solutions in Data Cleansing',
		description:
			'You will begin by Data Visualization within the Data Cleansing. Following initial steps, you should Data Visualization to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 90,
		assignedTo: 34
	},
	{
		id: 82,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Development',
			supportCase: 'SB3VTF076U'
		},
		startDate: '10/17/2023',
		endDate: '05/09/2024',
		skills: [
			'Analytics',
			'Network Security',
			'Data Visualization',
			'Inventory Database',
			'E-commerce Security'
		],
		title: 'Create E-commerce Security in Digital Distribution Network',
		description:
			'We aim to Analytics within the Digital Distribution Network. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 76,
		assignedTo: 3
	},
	{
		id: 83,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Development',
			supportCase: 'SBTV8DN8N4'
		},
		startDate: '09/07/2023',
		endDate: '05/17/2024',
		skills: [
			'SQL',
			'Data Visualization',
			'Client Communication',
			'Performance Tuning',
			'E-commerce Security',
			'Frontend Development',
			'JavaScript'
		],
		title: 'Point of Sale System Needs JavaScript Fixed',
		description:
			'Your main task will be Data Visualization within the Point of Sale System. Your next steps should include E-commerce Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 84,
		assignedTo: 81
	},
	{
		id: 84,
		role: 'Senior Manager',
		team: 1,
		status: 'Cancelled',
		hours: 11,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Support',
			supportCase: 'SBPBYFUA54'
		},
		startDate: '06/27/2023',
		endDate: '05/08/2024',
		skills: [
			'Network Security',
			'Business Intelligence',
			'Audit Trail Management',
			'Client Communication',
			'Payment Solutions',
			'Cloud Services',
			'Supply Chain Management'
		],
		title: 'Optimize Cloud Services in Compliance Tracking System',
		description:
			'You will begin by Cloud Services within the Compliance Tracking System. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: 36
	},
	{
		id: 85,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 18,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Development',
			supportCase: 'SBYIHE9OIP'
		},
		startDate: '09/10/2023',
		endDate: '04/29/2024',
		skills: ['SQL', 'Payment Solutions', 'JavaScript', 'System Architecture', 'Cloud Services'],
		title: 'Create Cloud Services in Branding Portal',
		description:
			'Your main task will be Cloud Services within the Branding Portal. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 80,
		assignedTo: 5
	},
	{
		id: 86,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Support',
			supportCase: 'SBWKFZFXYB'
		},
		startDate: '08/06/2023',
		endDate: '04/30/2024',
		skills: [
			'Regulatory Compliance',
			'Operational Efficiency',
			'C#',
			'JavaScript',
			'Client Communication'
		],
		title: 'Create Regulatory Compliance in Order Fulfillment Automation',
		description:
			'The objective here is JavaScript within the Order Fulfillment Automation. Your next steps should include Client Communication to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 82,
		assignedTo: 7
	},
	{
		id: 87,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Support',
			supportCase: 'SBXP4SX05G'
		},
		startDate: '09/16/2023',
		endDate: '05/13/2024',
		skills: ['Healthcare IT', 'SQL', 'Inventory Database'],
		title: 'Help Healthcare IT in Client Onboarding Process',
		description:
			'Your main task will be Healthcare IT within the Client Onboarding Process. Following initial steps, you should Healthcare IT to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 85,
		assignedTo: 8
	},
	{
		id: 88,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Development',
			supportCase: 'SBAEBSITK3'
		},
		startDate: '05/20/2023',
		endDate: '05/05/2024',
		skills: [
			'Network Security',
			'API Development',
			'Performance Tuning',
			'Payment Solutions',
			'Data Analysis',
			'Python'
		],
		title: 'Resolve Performance Tuning in Predictive Analytics Modeling',
		description:
			'You will begin by API Development within the Predictive Analytics Modeling. Your next steps should include Payment Solutions to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 86,
		assignedTo: 9
	},
	{
		id: 89,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Support',
			supportCase: 'SB91KLJLJS'
		},
		startDate: '02/19/2024',
		endDate: '05/08/2024',
		skills: ['System Architecture', 'Analytics', 'Business Intelligence'],
		title: 'Adjust System Architecture in E-commerce SEO Optimization',
		description:
			'We aim to Business Intelligence within the E-commerce SEO Optimization. Once completed, proceed to System Architecture to enhance overall outcomes. Focus also on Analytics to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 87,
		assignedTo: 11
	},
	{
		id: 90,
		role: 'Manager',
		team: 1,
		status: 'Cancelled',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Development',
			supportCase: 'SBLSF2NYP0'
		},
		startDate: '10/05/2023',
		endDate: '05/25/2024',
		skills: [
			'System Architecture',
			'Performance Tuning',
			'Business Intelligence',
			'Audit Trail Management',
			'Report Generation',
			'Inventory Database'
		],
		title: 'Optimize Inventory Database in Online Marketing Strategy',
		description:
			'This task involves Audit Trail Management within the Online Marketing Strategy. Following initial steps, you should Business Intelligence to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 102,
		assignedTo: 54
	},
	{
		id: 91,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'UAT',
			supportCase: 'SBF5DZKWLO'
		},
		startDate: '03/06/2024',
		endDate: '04/28/2024',
		skills: [
			'Performance Tuning',
			'Data Encryption',
			'Operational Efficiency',
			'Supply Chain Management'
		],
		title: 'Adjust Performance Tuning in Product Design Simulation',
		description:
			'The focus is on Supply Chain Management within the Product Design Simulation. Your next steps should include Performance Tuning to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 88,
		assignedTo: 12
	},
	{
		id: 92,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SBWSAJFQV2'
		},
		startDate: '11/26/2023',
		endDate: '05/01/2024',
		skills: [
			'Data Encryption',
			'Python',
			'Data Visualization',
			'Network Security',
			'JavaScript',
			'Analytics',
			'Cloud Services'
		],
		title: 'Tenant Screening Process Needs JavaScript Fixed',
		description:
			'The focus is on Data Encryption within the Tenant Screening Process. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Focus also on Analytics to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 89,
		assignedTo: 15
	},
	{
		id: 93,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Development',
			supportCase: 'SBUC47RGQ4'
		},
		startDate: '09/15/2023',
		endDate: '04/27/2024',
		skills: ['Cloud Services', 'Healthcare IT', 'Inventory Database'],
		title: 'Help Cloud Services in Inventory Management Application',
		description:
			'The focus is on Cloud Services within the Inventory Management Application. Your next steps should include Cloud Services to enhance overall outcomes. Focus also on Cloud Services to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 91,
		assignedTo: 19
	},
	{
		id: 94,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Requirements',
			supportCase: 'SBB02O2PMS'
		},
		startDate: '10/16/2023',
		endDate: '05/28/2024',
		skills: ['HIPAA Compliance', 'Inventory Database', 'User Testing', 'SQL', 'Data Analysis'],
		title: 'Create Data Analysis in Project Cost Tracking',
		description:
			'Your main task will be HIPAA Compliance within the Project Cost Tracking. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 92,
		assignedTo: 20
	},
	{
		id: 95,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SBH56S4LBO'
		},
		startDate: '08/04/2023',
		endDate: '05/21/2024',
		skills: [
			'Analytics',
			'Client Communication',
			'Audit Trail Management',
			'Inventory Database',
			'E-commerce Security',
			'Regulatory Compliance',
			'Business Intelligence'
		],
		title: 'Customer Engagement Platform Needs E-commerce Security Fixed',
		description:
			'This task involves Regulatory Compliance within the Customer Engagement Platform. Once completed, proceed to Audit Trail Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 93,
		assignedTo: 21
	},
	{
		id: 96,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'UAT',
			supportCase: 'SBIUYHMXSN'
		},
		startDate: '01/10/2024',
		endDate: '05/10/2024',
		skills: ['API Development', 'Audit Trail Management', 'Data Visualization'],
		title: 'Support API Development in Financial Forecasting Tool',
		description:
			'The objective here is API Development within the Financial Forecasting Tool. Following initial steps, you should Data Visualization to enhance overall outcomes. Focus also on Data Visualization to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 96,
		assignedTo: 58
	},
	{
		id: 97,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Support',
			supportCase: 'SB1CBSG5WE'
		},
		startDate: '09/07/2023',
		endDate: '05/09/2024',
		skills: [
			'Data Analysis',
			'E-commerce Security',
			'Healthcare IT',
			'Supply Chain Management',
			'Operational Efficiency'
		],
		title: 'Technical Support Portal Needs Operational Efficiency Fixed',
		description:
			'The focus is on Data Analysis within the Technical Support Portal. Following initial steps, you should Data Analysis to enhance overall outcomes. Focus also on Supply Chain Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 94,
		assignedTo: 22
	},
	{
		id: 98,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Support',
			supportCase: 'SB8JCX1PY6'
		},
		startDate: '04/11/2024',
		endDate: '05/24/2024',
		skills: ['Supply Chain Management', 'Data Analysis', 'Data Visualization'],
		title: 'Optimize Supply Chain Management in Client Onboarding Process',
		description:
			'This task involves Supply Chain Management within the Client Onboarding Process. Following initial steps, you should Data Analysis to enhance overall outcomes. Focus also on Data Analysis to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 104,
		assignedTo: 60
	},
	{
		id: 99,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SB6WQTIW1L'
		},
		startDate: '05/03/2023',
		endDate: '04/27/2024',
		skills: ['Backend Development', 'Audit Trail Management', 'Database Management'],
		title: 'Optimize Audit Trail Management in Retail Management Suite',
		description:
			'This task involves Backend Development within the Retail Management Suite. Once completed, proceed to Audit Trail Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 95,
		assignedTo: 27
	},
	{
		id: 100,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SBOGRPITDI'
		},
		startDate: '09/11/2023',
		endDate: '05/02/2024',
		skills: [
			'HIPAA Compliance',
			'API Development',
			'Operational Efficiency',
			'SQL',
			'Data Visualization',
			'Python'
		],
		title: 'Fix Python in Data Reporting Tools',
		description:
			'The objective here is Python within the Data Reporting Tools. Following initial steps, you should API Development to enhance overall outcomes. Focus also on API Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 17,
		assignedTo: 63
	},
	{
		id: 101,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SB6J5LJ8SW'
		},
		startDate: '03/09/2024',
		endDate: '05/26/2024',
		skills: ['Client Communication', 'Data Analysis', 'HIPAA Compliance'],
		title: 'Point of Sale System Needs Data Analysis Fixed',
		description:
			'This task involves Client Communication within the Point of Sale System. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Client Communication to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 101,
		assignedTo: 66
	},
	{
		id: 102,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Testing',
			supportCase: 'SBZD3NUHJC'
		},
		startDate: '09/11/2023',
		endDate: '05/06/2024',
		skills: [
			'UI/UX Design',
			'Healthcare IT',
			'Supply Chain Management',
			'Audit Trail Management',
			'Database Management',
			'Business Intelligence',
			'Inventory Database'
		],
		title: 'Project Cost Tracking Needs Supply Chain Management Fixed',
		description:
			'This task involves Healthcare IT within the Project Cost Tracking. Following initial steps, you should UI/UX Design to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 105,
		assignedTo: 67
	},
	{
		id: 103,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Development',
			supportCase: 'SBI9RUB02F'
		},
		startDate: '02/21/2024',
		endDate: '05/21/2024',
		skills: [
			'Business Intelligence',
			'Backend Development',
			'Python',
			'User Testing',
			'Analytics',
			'JavaScript'
		],
		title: 'Create Analytics in Logistics Tracking Interface',
		description:
			'Your main task will be User Testing within the Logistics Tracking Interface. Subsequently, your efforts will involve Python to enhance overall outcomes. Focus also on JavaScript to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 108,
		assignedTo: 79
	},
	{
		id: 104,
		role: 'Senior Manager',
		team: 2,
		status: 'Assigned',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SB4E52SGS9'
		},
		startDate: '08/25/2023',
		endDate: '05/18/2024',
		skills: ['E-commerce Security', 'Payment Solutions', 'Performance Tuning', 'Analytics'],
		title: 'Help Performance Tuning in Digital Catalogue',
		description:
			'The focus is on E-commerce Security within the Digital Catalogue. Once completed, proceed to Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 25,
		assignedTo: 65
	},
	{
		id: 105,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBK1HRGE88'
		},
		startDate: '03/28/2023',
		endDate: '05/05/2024',
		skills: [
			'Audit Trail Management',
			'Regulatory Compliance',
			'Operational Efficiency',
			'Report Generation',
			'Inventory Database',
			'Payment Solutions'
		],
		title: 'Sales Dashboard Needs Report Generation Fixed',
		description:
			'We aim to Regulatory Compliance within the Sales Dashboard. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Audit Trail Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 97,
		assignedTo: 29
	},
	{
		id: 106,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBGLGICAHS'
		},
		startDate: '06/23/2023',
		endDate: '05/01/2024',
		skills: ['SQL', 'Performance Tuning', 'Supply Chain Management'],
		title: 'Optimize Performance Tuning in E-commerce SEO Optimization',
		description:
			'Your main task will be Supply Chain Management within the E-commerce SEO Optimization. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 14,
		assignedTo: 70
	},
	{
		id: 107,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Development',
			supportCase: 'SBIS8P0XQI'
		},
		startDate: '10/12/2023',
		endDate: '05/06/2024',
		skills: ['Inventory Database', 'System Architecture', 'Operational Efficiency'],
		title: 'Front-end Development Needs Operational Efficiency Fixed',
		description:
			'This task involves Inventory Database within the Front-end Development. Once completed, proceed to Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 28,
		assignedTo: 72
	},
	{
		id: 108,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'UAT',
			supportCase: 'SBF9RKNZXG'
		},
		startDate: '10/31/2023',
		endDate: '05/21/2024',
		skills: [
			'Performance Tuning',
			'Python',
			'E-commerce Security',
			'Payment Solutions',
			'Frontend Development',
			'Business Intelligence',
			'HIPAA Compliance'
		],
		title: 'Resolve Python in Technical Support Portal',
		description:
			'The focus is on Frontend Development within the Technical Support Portal. Following initial steps, you should Python to enhance overall outcomes. Focus also on Frontend Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 98,
		assignedTo: 87
	},
	{
		id: 109,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Testing',
			supportCase: 'SBPBJ51YOK'
		},
		startDate: '07/05/2023',
		endDate: '05/05/2024',
		skills: [
			'Client Communication',
			'Report Generation',
			'Data Analysis',
			'Analytics',
			'Audit Trail Management'
		],
		title: 'Fix Audit Trail Management in Customer Segmentation Analysis',
		description:
			'We aim to Report Generation within the Customer Segmentation Analysis. From there, move on to Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 99,
		assignedTo: 32
	},
	{
		id: 110,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Support',
			supportCase: 'SB8FUGLO7E'
		},
		startDate: '04/20/2024',
		endDate: '05/16/2024',
		skills: [
			'API Development',
			'Report Generation',
			'HIPAA Compliance',
			'Data Encryption',
			'Client Communication',
			'Healthcare IT',
			'Analytics'
		],
		title: 'Enterprise Resource Planning Needs Data Encryption Fixed',
		description:
			'Your main task will be Report Generation within the Enterprise Resource Planning. Following initial steps, you should Client Communication to enhance overall outcomes. Focus also on Analytics to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 109,
		assignedTo: null
	},
	{
		id: 111,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SBCIIJIKMQ'
		},
		startDate: '03/25/2024',
		endDate: '05/20/2024',
		skills: ['HIPAA Compliance', 'SQL', 'System Architecture'],
		title: 'Optimize HIPAA Compliance in Web Performance Monitoring',
		description:
			'You will begin by SQL within the Web Performance Monitoring. Your next steps should include System Architecture to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 110,
		assignedTo: 88
	},
	{
		id: 112,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Testing',
			supportCase: 'SBRMDUU4V4'
		},
		startDate: '11/27/2023',
		endDate: '05/25/2024',
		skills: [
			'Regulatory Compliance',
			'Inventory Database',
			'Cloud Services',
			'API Development',
			'System Architecture'
		],
		title: 'Lead Tracking Software Needs Inventory Database Fixed',
		description:
			'The focus is on Cloud Services within the Lead Tracking Software. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 1,
		assignedTo: 84
	},
	{
		id: 113,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Discovery',
			supportCase: 'SBKIPT0EZ2'
		},
		startDate: '01/27/2024',
		endDate: '05/03/2024',
		skills: [
			'System Architecture',
			'Audit Trail Management',
			'JavaScript',
			'Operational Efficiency',
			'Inventory Database',
			'Supply Chain Management'
		],
		title: 'Building Maintenance App Needs JavaScript Fixed',
		description:
			'This task involves Supply Chain Management within the Building Maintenance App. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Focus also on Audit Trail Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 6,
		assignedTo: 85
	},
	{
		id: 114,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SBFPJ7SJ8F'
		},
		startDate: '07/23/2023',
		endDate: '05/06/2024',
		skills: ['E-commerce Security', 'Audit Trail Management', 'Inventory Database'],
		title: 'Customer Data Platform Needs Inventory Database Fixed',
		description:
			'We aim to E-commerce Security within the Customer Data Platform. Following initial steps, you should E-commerce Security to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 2,
		assignedTo: 94
	},
	{
		id: 115,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBC0F7Z6HM'
		},
		startDate: '12/06/2023',
		endDate: '05/11/2024',
		skills: ['Business Intelligence', 'User Testing', 'SQL'],
		title: 'Fix SQL in Building Maintenance App',
		description:
			'Your main task will be SQL within the Building Maintenance App. Subsequently, your efforts will involve SQL to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 10,
		assignedTo: 89
	},
	{
		id: 116,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SBJ5VTZ9KT'
		},
		startDate: '10/06/2023',
		endDate: '05/02/2024',
		skills: [
			'Regulatory Compliance',
			'Performance Tuning',
			'Payment Solutions',
			'Data Encryption',
			'HIPAA Compliance',
			'E-commerce Security',
			'Audit Trail Management'
		],
		title: 'Support Audit Trail Management in Technical Support Portal',
		description:
			'Your main task will be Data Encryption within the Technical Support Portal. Your next steps should include Audit Trail Management to enhance overall outcomes. Focus also on Performance Tuning to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 18,
		assignedTo: 92
	},
	{
		id: 117,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'UAT',
			supportCase: 'SB7OJDMU5M'
		},
		startDate: '02/26/2024',
		endDate: '05/03/2024',
		skills: [
			'Inventory Database',
			'E-commerce Security',
			'Regulatory Compliance',
			'Business Intelligence',
			'Payment Solutions'
		],
		title: 'Help E-commerce Security in CRM Integration',
		description:
			'The focus is on E-commerce Security within the CRM Integration. Following initial steps, you should E-commerce Security to enhance overall outcomes. Focus also on E-commerce Security to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 100,
		assignedTo: 33
	},
	{
		id: 118,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'UAT',
			supportCase: 'SBKG475CGO'
		},
		startDate: '10/14/2023',
		endDate: '05/17/2024',
		skills: [
			'Payment Solutions',
			'Supply Chain Management',
			'JavaScript',
			'Analytics',
			'Regulatory Compliance',
			'Data Analysis'
		],
		title: 'Real-Time Data Analysis Needs Analytics Fixed',
		description:
			'The objective here is Data Analysis within the Real-Time Data Analysis. Following initial steps, you should Payment Solutions to enhance overall outcomes. Focus also on Data Analysis to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 23,
		assignedTo: 74
	},
	{
		id: 119,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'UAT',
			supportCase: 'SB3RXOIOKI'
		},
		startDate: '04/15/2024',
		endDate: '04/27/2024',
		skills: [
			'HIPAA Compliance',
			'Network Security',
			'Healthcare IT',
			'E-commerce Security',
			'API Development',
			'Audit Trail Management'
		],
		title: 'Visualization of Data Insights Needs Network Security Fixed',
		description:
			'This task involves HIPAA Compliance within the Visualization of Data Insights. From there, move on to Network Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 106,
		assignedTo: 35
	},
	{
		id: 120,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBL21OSCY9'
		},
		startDate: '11/05/2023',
		endDate: '05/04/2024',
		skills: [
			'Performance Tuning',
			'Report Generation',
			'Supply Chain Management',
			'JavaScript',
			'Data Visualization',
			'Analytics',
			'E-commerce Security'
		],
		title: 'Create Data Visualization in Real-Time Data Analysis',
		description:
			'We aim to Report Generation within the Real-Time Data Analysis. Following initial steps, you should Data Visualization to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 107,
		assignedTo: 38
	},
	{
		id: 121,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Development',
			supportCase: 'SBUHTBHUF6'
		},
		startDate: '02/02/2024',
		endDate: '05/17/2024',
		skills: [
			'SQL',
			'C#',
			'Client Communication',
			'Inventory Database',
			'Supply Chain Management',
			'Data Analysis'
		],
		title: 'Implement Supply Chain Management in Risk Assessment Software',
		description:
			'Your main task will be C# within the Risk Assessment Software. From there, move on to Supply Chain Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 3,
		assignedTo: null
	},
	{
		id: 122,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Development',
			supportCase: 'SBJDRDOQD1'
		},
		startDate: '09/12/2023',
		endDate: '05/23/2024',
		skills: ['Healthcare IT', 'Performance Tuning', 'Database Management', 'Data Analysis'],
		title: 'Fix Healthcare IT in Order Fulfillment Automation',
		description:
			'Your main task will be Performance Tuning within the Order Fulfillment Automation. From there, move on to Performance Tuning to enhance overall outcomes. Focus also on Database Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 4,
		assignedTo: 95
	},
	{
		id: 123,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SBUJQOYVKL'
		},
		startDate: '03/21/2024',
		endDate: '05/21/2024',
		skills: [
			'Audit Trail Management',
			'Report Generation',
			'Operational Efficiency',
			'E-commerce Security'
		],
		title: 'Fix Report Generation in Customer Segmentation Analysis',
		description:
			'The focus is on Audit Trail Management within the Customer Segmentation Analysis. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on Operational Efficiency to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 5,
		assignedTo: 40
	},
	{
		id: 124,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'UAT',
			supportCase: 'SBKO52WRL9'
		},
		startDate: '05/14/2023',
		endDate: '05/16/2024',
		skills: [
			'Operational Efficiency',
			'Data Analysis',
			'Business Intelligence',
			'Data Visualization',
			'HIPAA Compliance',
			'Analytics'
		],
		title: 'Create HIPAA Compliance in Front-end Development',
		description:
			'Your main task will be Business Intelligence within the Front-end Development. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 7,
		assignedTo: 41
	},
	{
		id: 125,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'UAT',
			supportCase: 'SBQT1D1UP5'
		},
		startDate: '05/27/2023',
		endDate: '05/03/2024',
		skills: [
			'Data Encryption',
			'API Development',
			'Report Generation',
			'HIPAA Compliance',
			'Performance Tuning',
			'System Architecture',
			'Operational Efficiency'
		],
		title: 'Fix Report Generation in Real-Time Data Analysis',
		description:
			'You will begin by Operational Efficiency within the Real-Time Data Analysis. Following initial steps, you should System Architecture to enhance overall outcomes. Focus also on Report Generation to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 8,
		assignedTo: 46
	},
	{
		id: 126,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Development',
			supportCase: 'SBJ4IRJRG1'
		},
		startDate: '01/03/2024',
		endDate: '05/17/2024',
		skills: [
			'Report Generation',
			'Payment Solutions',
			'Data Encryption',
			'API Development',
			'Business Intelligence'
		],
		title: 'Business Analytics Interface Needs Payment Solutions Fixed',
		description:
			'This task involves API Development within the Business Analytics Interface. From there, move on to Data Encryption to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 9,
		assignedTo: 47
	},
	{
		id: 127,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 18,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Project Management',
			supportCase: 'SB03ODJEVN'
		},
		startDate: '04/02/2024',
		endDate: '05/24/2024',
		skills: [
			'Performance Tuning',
			'Report Generation',
			'Client Communication',
			'Audit Trail Management',
			'E-commerce Security',
			'Cloud Services'
		],
		title: 'Predictive Analytics Modeling Needs Report Generation Fixed',
		description:
			'The focus is on Audit Trail Management within the Predictive Analytics Modeling. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on Audit Trail Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 13,
		assignedTo: 97
	},
	{
		id: 128,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Testing',
			supportCase: 'SBYMHFMPG1'
		},
		startDate: '07/05/2023',
		endDate: '05/20/2024',
		skills: [
			'Report Generation',
			'Regulatory Compliance',
			'HIPAA Compliance',
			'API Development',
			'Inventory Database'
		],
		title: 'Create Inventory Database in Compliance Tracking System',
		description:
			'The focus is on HIPAA Compliance within the Compliance Tracking System. Following initial steps, you should Regulatory Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 16,
		assignedTo: 98
	},
	{
		id: 129,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Support',
			supportCase: 'SB7D115BCR'
		},
		startDate: '05/30/2023',
		endDate: '05/26/2024',
		skills: ['Network Security', 'System Architecture', 'Healthcare IT', 'SQL', 'Cloud Services'],
		title: 'Help Healthcare IT in Content Management System',
		description:
			'The objective here is System Architecture within the Content Management System. Your next steps should include Healthcare IT to enhance overall outcomes. Focus also on Network Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 24,
		assignedTo: 99
	},
	{
		id: 130,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Project Management',
			supportCase: 'SBBEMG74AZ'
		},
		startDate: '08/31/2023',
		endDate: '05/12/2024',
		skills: ['Analytics', 'Data Visualization', 'API Development'],
		title: 'Digital Distribution Network Needs API Development Fixed',
		description:
			'You will begin by Analytics within the Digital Distribution Network. Your next steps should include API Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 26,
		assignedTo: 2
	},
	{
		id: 131,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Testing',
			supportCase: 'SB47NLDMH6'
		},
		startDate: '11/26/2023',
		endDate: '05/20/2024',
		skills: ['JavaScript', 'Analytics', 'Data Visualization', 'SQL'],
		title: 'Fix SQL in Compliance Tracking System',
		description:
			'We aim to Data Visualization within the Compliance Tracking System. Your next steps should include JavaScript to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 11,
		assignedTo: null
	},
	{
		id: 132,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Requirements',
			supportCase: 'SBIL3O8X3I'
		},
		startDate: '10/04/2023',
		endDate: '05/15/2024',
		skills: ['Analytics', 'Business Intelligence', 'C#'],
		title: 'Help Business Intelligence in Rental Management Software',
		description:
			'Your main task will be C# within the Rental Management Software. Your next steps should include Business Intelligence to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 12,
		assignedTo: 51
	},
	{
		id: 133,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Project Management',
			supportCase: 'SB0WLSYTVW'
		},
		startDate: '12/07/2023',
		endDate: '05/15/2024',
		skills: ['Report Generation', 'HIPAA Compliance', 'Data Encryption'],
		title: 'Customer Data Platform Needs Report Generation Fixed',
		description:
			'We aim to Data Encryption within the Customer Data Platform. Following initial steps, you should Report Generation to enhance overall outcomes. Focus also on Report Generation to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 30,
		assignedTo: 4
	},
	{
		id: 134,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Support',
			supportCase: 'SBTIRKV5W5'
		},
		startDate: '07/14/2023',
		endDate: '05/13/2024',
		skills: [
			'Python',
			'Inventory Database',
			'System Architecture',
			'Data Analysis',
			'Data Encryption',
			'Performance Tuning'
		],
		title: 'Support Data Analysis in Multi-Tenant Systems',
		description:
			'We aim to System Architecture within the Multi-Tenant Systems. Once completed, proceed to Data Analysis to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 15,
		assignedTo: 53
	},
	{
		id: 135,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SBXPP3YFWI'
		},
		startDate: '03/29/2024',
		endDate: '05/19/2024',
		skills: [
			'API Development',
			'Regulatory Compliance',
			'Cloud Services',
			'Supply Chain Management',
			'HIPAA Compliance',
			'Audit Trail Management',
			'Healthcare IT'
		],
		title: 'Optimize Healthcare IT in Client Reporting System',
		description:
			'The objective here is HIPAA Compliance within the Client Reporting System. Your next steps should include HIPAA Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 19,
		assignedTo: 55
	},
	{
		id: 136,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Testing',
			supportCase: 'SB0VIMMTNH'
		},
		startDate: '12/14/2023',
		endDate: '05/10/2024',
		skills: ['C#', 'Healthcare IT', 'HIPAA Compliance', 'Python'],
		title: 'Adjust HIPAA Compliance in Client Reporting System',
		description:
			'The focus is on C# within the Client Reporting System. Following initial steps, you should C# to enhance overall outcomes. Focus also on C# to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 20,
		assignedTo: 56
	},
	{
		id: 137,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Development',
			supportCase: 'SB2QP3IYA3'
		},
		startDate: '06/12/2023',
		endDate: '05/23/2024',
		skills: [
			'Cloud Services',
			'Client Communication',
			'Data Visualization',
			'Analytics',
			'Payment Solutions'
		],
		title: 'Online Marketing Strategy Needs Client Communication Fixed',
		description:
			'You will begin by Analytics within the Online Marketing Strategy. Following initial steps, you should Analytics to enhance overall outcomes. Focus also on Payment Solutions to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 31,
		assignedTo: 13
	},
	{
		id: 138,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Project Management',
			supportCase: 'SBW2DRCIKD'
		},
		startDate: '06/11/2023',
		endDate: '05/25/2024',
		skills: [
			'Frontend Development',
			'Healthcare IT',
			'Regulatory Compliance',
			'Data Analysis',
			'SQL',
			'UI/UX Design',
			'C#'
		],
		title: 'Mobile Application Framework Needs Frontend Development Fixed',
		description:
			'Your main task will be Healthcare IT within the Mobile Application Framework. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on SQL to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 34,
		assignedTo: 16
	},
	{
		id: 139,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SBC22U1OL8'
		},
		startDate: '04/05/2023',
		endDate: '04/27/2024',
		skills: ['HIPAA Compliance', 'Business Intelligence', 'Analytics'],
		title: 'Media Storage Solutions Needs Business Intelligence Fixed',
		description:
			'The objective here is Business Intelligence within the Media Storage Solutions. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on Analytics to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 21,
		assignedTo: null
	},
	{
		id: 140,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Development',
			supportCase: 'SBUVFOWMCT'
		},
		startDate: '12/20/2023',
		endDate: '04/27/2024',
		skills: [
			'Performance Tuning',
			'Supply Chain Management',
			'Business Intelligence',
			'User Testing',
			'Client Communication',
			'Regulatory Compliance'
		],
		title: 'Adjust Supply Chain Management in Digital Distribution Network',
		description:
			'You will begin by Supply Chain Management within the Digital Distribution Network. Your next steps should include Client Communication to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 22,
		assignedTo: 57
	},
	{
		id: 141,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Development',
			supportCase: 'SB1GPC7X2A'
		},
		startDate: '04/06/2023',
		endDate: '05/25/2024',
		skills: [
			'JavaScript',
			'Healthcare IT',
			'Operational Efficiency',
			'SQL',
			'Audit Trail Management',
			'Regulatory Compliance',
			'Frontend Development'
		],
		title: 'Support Audit Trail Management in Market Analysis Tool',
		description:
			'The focus is on Audit Trail Management within the Market Analysis Tool. Your next steps should include Healthcare IT to enhance overall outcomes. Focus also on JavaScript to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 27,
		assignedTo: null
	},
	{
		id: 142,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Development',
			supportCase: 'SBJUQM76F0'
		},
		startDate: '05/25/2023',
		endDate: '05/18/2024',
		skills: [
			'Client Communication',
			'E-commerce Security',
			'Analytics',
			'Performance Tuning',
			'Supply Chain Management',
			'Audit Trail Management',
			'Inventory Database'
		],
		title: 'Fix Client Communication in Cloud Data Solutions',
		description:
			'Your main task will be Audit Trail Management within the Cloud Data Solutions. Following initial steps, you should Client Communication to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 29,
		assignedTo: 64
	},
	{
		id: 143,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Development',
			supportCase: 'SBR5IH7WJU'
		},
		startDate: '04/21/2023',
		endDate: '05/27/2024',
		skills: [
			'Database Management',
			'Regulatory Compliance',
			'Data Visualization',
			'E-commerce Security',
			'Operational Efficiency',
			'Performance Tuning',
			'UI/UX Design'
		],
		title: 'Resolve Operational Efficiency in Predictive Analytics Modeling',
		description:
			'You will begin by E-commerce Security within the Predictive Analytics Modeling. Once completed, proceed to Database Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 32,
		assignedTo: 69
	},
	{
		id: 144,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Development',
			supportCase: 'SBB056M3NS'
		},
		startDate: '08/27/2023',
		endDate: '05/03/2024',
		skills: ['System Architecture', 'Client Communication', 'Business Intelligence'],
		title: 'Multi-Tenant Systems Needs Business Intelligence Fixed',
		description:
			'This task involves System Architecture within the Multi-Tenant Systems. Following initial steps, you should Business Intelligence to enhance overall outcomes. Focus also on Business Intelligence to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 36,
		assignedTo: 96
	},
	{
		id: 145,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'UAT',
			supportCase: 'SBZU7RB8TI'
		},
		startDate: '08/13/2023',
		endDate: '05/22/2024',
		skills: [
			'Payment Solutions',
			'SQL',
			'API Development',
			'Data Encryption',
			'System Architecture',
			'E-commerce Security'
		],
		title: 'Front-end Development Needs System Architecture Fixed',
		description:
			'We aim to E-commerce Security within the Front-end Development. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Data Encryption to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 33,
		assignedTo: 75
	},
	{
		id: 146,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'UAT',
			supportCase: 'SBCAGPZ8WY'
		},
		startDate: '06/10/2023',
		endDate: '05/07/2024',
		skills: ['HIPAA Compliance', 'Cloud Services', 'Operational Efficiency'],
		title: 'Resolve Operational Efficiency in Compliance Tracking System',
		description:
			'Your main task will be HIPAA Compliance within the Compliance Tracking System. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 39,
		assignedTo: 101
	},
	{
		id: 147,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Project Management',
			supportCase: 'SBHZD2DSMX'
		},
		startDate: '04/13/2024',
		endDate: '05/16/2024',
		skills: [
			'JavaScript',
			'Analytics',
			'Cloud Services',
			'Operational Efficiency',
			'Data Visualization',
			'SQL',
			'Report Generation'
		],
		title: 'Product Design Simulation Needs Report Generation Fixed',
		description:
			'You will begin by Analytics within the Product Design Simulation. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 35,
		assignedTo: 76
	},
	{
		id: 148,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SBSNQGG3YL'
		},
		startDate: '11/02/2023',
		endDate: '05/17/2024',
		skills: [
			'UI/UX Design',
			'Business Intelligence',
			'Supply Chain Management',
			'Operational Efficiency'
		],
		title: 'Support UI/UX Design in Compliance Tracking System',
		description:
			'The objective here is Supply Chain Management within the Compliance Tracking System. Subsequently, your efforts will involve Supply Chain Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 37,
		assignedTo: 80
	},
	{
		id: 149,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBWZDDFXMC'
		},
		startDate: '01/25/2024',
		endDate: '05/16/2024',
		skills: [
			'Regulatory Compliance',
			'Cloud Services',
			'Client Communication',
			'API Development',
			'HIPAA Compliance',
			'Healthcare IT',
			'Business Intelligence'
		],
		title: 'Support Client Communication in E-commerce SEO Optimization',
		description:
			'The focus is on HIPAA Compliance within the E-commerce SEO Optimization. Your next steps should include Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 38,
		assignedTo: null
	},
	{
		id: 150,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Support',
			supportCase: 'SB0786J82L'
		},
		startDate: '03/23/2024',
		endDate: '05/01/2024',
		skills: [
			'Report Generation',
			'E-commerce Security',
			'Data Visualization',
			'Network Security',
			'Analytics',
			'Operational Efficiency',
			'Inventory Database'
		],
		title: 'Optimize Inventory Database in Business Analytics Interface',
		description:
			'The focus is on Inventory Database within the Business Analytics Interface. Following initial steps, you should Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 42,
		assignedTo: 24
	},
	{
		id: 151,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Development',
			supportCase: 'SB9T23FZ9F'
		},
		startDate: '01/23/2024',
		endDate: '04/28/2024',
		skills: ['API Development', 'Data Visualization', 'Cloud Services', 'Performance Tuning'],
		title: 'Create Performance Tuning in Workflow Automation',
		description:
			'The focus is on Performance Tuning within the Workflow Automation. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Focus also on Data Visualization to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 43,
		assignedTo: 26
	},
	{
		id: 152,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Project Management',
			supportCase: 'SBAOO1QN42'
		},
		startDate: '09/16/2023',
		endDate: '05/22/2024',
		skills: ['UI/UX Design', 'Backend Development', 'SQL', 'Payment Solutions', 'User Testing'],
		title: 'Building Maintenance App Needs Backend Development Fixed',
		description:
			'Your main task will be User Testing within the Building Maintenance App. Following initial steps, you should Payment Solutions to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 45,
		assignedTo: 105
	},
	{
		id: 153,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Development',
			supportCase: 'SB0UB6M3NC'
		},
		startDate: '08/07/2023',
		endDate: '05/19/2024',
		skills: [
			'Data Analysis',
			'Healthcare IT',
			'Business Intelligence',
			'System Architecture',
			'Analytics',
			'Data Visualization',
			'JavaScript'
		],
		title: 'Support Analytics in Rental Management Software',
		description:
			'The focus is on Analytics within the Rental Management Software. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Focus also on Data Visualization to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 40,
		assignedTo: 82
	},
	{
		id: 154,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Support',
			supportCase: 'SBRQ8ZWGWC'
		},
		startDate: '02/24/2024',
		endDate: '04/27/2024',
		skills: [
			'Analytics',
			'Healthcare IT',
			'Audit Trail Management',
			'API Development',
			'Data Analysis'
		],
		title: 'Optimize Healthcare IT in Data Reporting Tools',
		description:
			'The focus is on API Development within the Data Reporting Tools. From there, move on to Healthcare IT to enhance overall outcomes. Focus also on Audit Trail Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 48,
		assignedTo: 108
	},
	{
		id: 155,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'UAT',
			supportCase: 'SBH4LVWXNV'
		},
		startDate: '11/16/2023',
		endDate: '04/28/2024',
		skills: ['API Development', 'Inventory Database', 'Data Analysis', 'SQL', 'Analytics'],
		title: 'Support Data Analysis in Database Optimization',
		description:
			'Your main task will be Data Analysis within the Database Optimization. From there, move on to Data Analysis to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 41,
		assignedTo: 91
	},
	{
		id: 156,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SBU2ZP9TC3'
		},
		startDate: '10/14/2023',
		endDate: '05/16/2024',
		skills: ['Business Intelligence', 'Inventory Database', 'Analytics', 'Data Encryption'],
		title: 'Support Analytics in Mobile Application Framework',
		description:
			'The objective here is Business Intelligence within the Mobile Application Framework. Your next steps should include Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 44,
		assignedTo: 37
	},
	{
		id: 157,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Development',
			supportCase: 'SBVHFSYVA3'
		},
		startDate: '11/25/2023',
		endDate: '05/18/2024',
		skills: [
			'Supply Chain Management',
			'Performance Tuning',
			'Network Security',
			'Cloud Services',
			'Healthcare IT'
		],
		title: 'Implement Supply Chain Management in Market Analysis Tool',
		description:
			'We aim to Cloud Services within the Market Analysis Tool. Your next steps should include Cloud Services to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 46,
		assignedTo: 93
	},
	{
		id: 158,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Project Management',
			supportCase: 'SBPC02MMST'
		},
		startDate: '04/19/2024',
		endDate: '05/13/2024',
		skills: ['Performance Tuning', 'Report Generation', 'Data Encryption', 'Regulatory Compliance'],
		title: 'Adjust Report Generation in Web Application Security',
		description:
			'The focus is on Report Generation within the Web Application Security. Your next steps should include Report Generation to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 52,
		assignedTo: 109
	},
	{
		id: 159,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Development',
			supportCase: 'SB4QJ9EWV2'
		},
		startDate: '02/24/2024',
		endDate: '05/18/2024',
		skills: ['Cloud Services', 'Data Analysis', 'E-commerce Security'],
		title: 'Support E-commerce Security in Full Stack Web Development',
		description:
			'Your main task will be E-commerce Security within the Full Stack Web Development. Your next steps should include Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 49,
		assignedTo: 43
	},
	{
		id: 160,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'UAT',
			supportCase: 'SBX10WHIZE'
		},
		startDate: '11/27/2023',
		endDate: '05/09/2024',
		skills: [
			'Supply Chain Management',
			'Payment Solutions',
			'UI/UX Design',
			'Frontend Development'
		],
		title: 'Adjust Payment Solutions in Cloud Data Solutions',
		description:
			'Your main task will be Payment Solutions within the Cloud Data Solutions. Subsequently, your efforts will involve Supply Chain Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 47,
		assignedTo: 100
	},
	{
		id: 161,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Development',
			supportCase: 'SBVRZV4H81'
		},
		startDate: '05/22/2023',
		endDate: '05/09/2024',
		skills: ['Analytics', 'JavaScript', 'Business Intelligence', 'Operational Efficiency'],
		title: 'Create Operational Efficiency in Logistics Tracking Interface',
		description:
			'We aim to Business Intelligence within the Logistics Tracking Interface. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 54,
		assignedTo: null
	},
	{
		id: 162,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Development',
			supportCase: 'SBZRCJ12ER'
		},
		startDate: '03/15/2024',
		endDate: '05/26/2024',
		skills: [
			'Audit Trail Management',
			'Analytics',
			'JavaScript',
			'Healthcare IT',
			'Data Analysis',
			'System Architecture',
			'Regulatory Compliance'
		],
		title: 'Supply Chain Management System Needs JavaScript Fixed',
		description:
			'Your main task will be Analytics within the Supply Chain Management System. Your next steps should include Analytics to enhance overall outcomes. Focus also on System Architecture to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 50,
		assignedTo: null
	},
	{
		id: 163,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SB5Z5XXB1Z'
		},
		startDate: '04/13/2023',
		endDate: '05/03/2024',
		skills: [
			'Python',
			'Inventory Database',
			'Audit Trail Management',
			'Backend Development',
			'Supply Chain Management',
			'Analytics'
		],
		title: 'Building Maintenance App Needs Python Fixed',
		description:
			'The objective here is Python within the Building Maintenance App. Following initial steps, you should Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 58,
		assignedTo: 44
	},
	{
		id: 164,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Testing',
			supportCase: 'SB2BQ4QV0C'
		},
		startDate: '04/20/2024',
		endDate: '05/19/2024',
		skills: [
			'Frontend Development',
			'Data Visualization',
			'User Testing',
			'Regulatory Compliance',
			'Healthcare IT',
			'Supply Chain Management'
		],
		title: 'Optimize Healthcare IT in Building Maintenance App',
		description:
			'We aim to User Testing within the Building Maintenance App. Once completed, proceed to Data Visualization to enhance overall outcomes. Focus also on User Testing to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 60,
		assignedTo: 110
	},
	{
		id: 165,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'UAT',
			supportCase: 'SB6HQ9EJYH'
		},
		startDate: '03/20/2024',
		endDate: '04/29/2024',
		skills: [
			'SQL',
			'Regulatory Compliance',
			'Data Visualization',
			'Healthcare IT',
			'API Development',
			'Inventory Database',
			'Client Communication'
		],
		title: 'Adjust Healthcare IT in Safety Compliance Check',
		description:
			'You will begin by Data Visualization within the Safety Compliance Check. From there, move on to Regulatory Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 59,
		assignedTo: 49
	},
	{
		id: 166,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'UAT',
			supportCase: 'SBGMTJ5SRC'
		},
		startDate: '09/27/2023',
		endDate: '05/19/2024',
		skills: [
			'E-commerce Security',
			'Regulatory Compliance',
			'Audit Trail Management',
			'HIPAA Compliance',
			'UI/UX Design',
			'Client Communication',
			'Operational Efficiency'
		],
		title: 'Adjust HIPAA Compliance in Digital Catalogue',
		description:
			'We aim to Audit Trail Management within the Digital Catalogue. Your next steps should include Audit Trail Management to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 63,
		assignedTo: 78
	},
	{
		id: 167,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBTCRMHSJR'
		},
		startDate: '11/10/2023',
		endDate: '05/16/2024',
		skills: [
			'UI/UX Design',
			'Healthcare IT',
			'Inventory Database',
			'User Testing',
			'Client Communication'
		],
		title: 'Implement UI/UX Design in Client Onboarding Process',
		description:
			'The objective here is Inventory Database within the Client Onboarding Process. Once completed, proceed to User Testing to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 65,
		assignedTo: 102
	},
	{
		id: 168,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Support',
			supportCase: 'SBDZ6B9RJ3'
		},
		startDate: '10/24/2023',
		endDate: '05/05/2024',
		skills: ['System Architecture', 'Data Analysis', 'Inventory Database', 'SQL', 'Cloud Services'],
		title: 'Create System Architecture in Compliance Tracking System',
		description:
			'You will begin by SQL within the Compliance Tracking System. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Focus also on Cloud Services to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 66,
		assignedTo: 1
	},
	{
		id: 169,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SB21I78E7L'
		},
		startDate: '06/19/2023',
		endDate: '05/23/2024',
		skills: [
			'User Testing',
			'Data Analysis',
			'Client Communication',
			'E-commerce Security',
			'Database Management'
		],
		title: 'Implement Data Analysis in Enterprise Resource Planning',
		description:
			'Your main task will be E-commerce Security within the Enterprise Resource Planning. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Focus also on User Testing to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 61,
		assignedTo: 50
	},
	{
		id: 170,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SB15NANV0K'
		},
		startDate: '04/30/2023',
		endDate: '05/10/2024',
		skills: [
			'Payment Solutions',
			'Supply Chain Management',
			'UI/UX Design',
			'Audit Trail Management',
			'JavaScript'
		],
		title: 'Support Payment Solutions in Product Design Simulation',
		description:
			'We aim to Supply Chain Management within the Product Design Simulation. Your next steps should include UI/UX Design to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 51,
		assignedTo: 106
	},
	{
		id: 171,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Project Management',
			supportCase: 'SBFD6G61HE'
		},
		startDate: '04/16/2023',
		endDate: '05/29/2024',
		skills: [
			'SQL',
			'Supply Chain Management',
			'User Testing',
			'Healthcare IT',
			'Audit Trail Management',
			'Data Visualization',
			'Report Generation'
		],
		title: 'Resolve Audit Trail Management in Inventory Management Application',
		description:
			'Your main task will be Report Generation within the Inventory Management Application. From there, move on to Supply Chain Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 62,
		assignedTo: 59
	},
	{
		id: 172,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SBA6SRO2D0'
		},
		startDate: '08/27/2023',
		endDate: '05/23/2024',
		skills: [
			'SQL',
			'Supply Chain Management',
			'Report Generation',
			'System Architecture',
			'Healthcare IT',
			'Cloud Services',
			'Analytics'
		],
		title: 'Resolve Supply Chain Management in Product Design Simulation',
		description:
			'We aim to SQL within the Product Design Simulation. Once completed, proceed to System Architecture to enhance overall outcomes. Focus also on Supply Chain Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 53,
		assignedTo: 107
	},
	{
		id: 173,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Testing',
			supportCase: 'SBDQKTA12K'
		},
		startDate: '02/27/2024',
		endDate: '05/06/2024',
		skills: ['Python', 'Performance Tuning', 'Data Analysis'],
		title: 'Content Management System Needs Performance Tuning Fixed',
		description:
			'This task involves Data Analysis within the Content Management System. Your next steps should include Python to enhance overall outcomes. Focus also on Python to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 55,
		assignedTo: 3
	},
	{
		id: 174,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Development',
			supportCase: 'SBS7RMN1JN'
		},
		startDate: '11/18/2023',
		endDate: '05/02/2024',
		skills: [
			'Payment Solutions',
			'Data Analysis',
			'Operational Efficiency',
			'JavaScript',
			'API Development'
		],
		title: 'Implement Payment Solutions in Safety Compliance Check',
		description:
			'The objective here is Data Analysis within the Safety Compliance Check. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on Data Analysis to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 67,
		assignedTo: 61
	},
	{
		id: 175,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SB96GF9Y7J'
		},
		startDate: '10/13/2023',
		endDate: '05/25/2024',
		skills: ['Data Analysis', 'Cloud Services', 'SQL', 'Data Visualization'],
		title: 'Support SQL in Digital Distribution Network',
		description:
			'The focus is on Data Visualization within the Digital Distribution Network. Once completed, proceed to Data Analysis to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 68,
		assignedTo: 62
	},
	{
		id: 176,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'UAT',
			supportCase: 'SBWEK3ZX6N'
		},
		startDate: '12/25/2023',
		endDate: '05/04/2024',
		skills: ['Analytics', 'Inventory Database', 'Data Visualization', 'Regulatory Compliance'],
		title: 'Adjust Regulatory Compliance in Cloud Data Solutions',
		description:
			'The focus is on Analytics within the Cloud Data Solutions. From there, move on to Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 70,
		assignedTo: 6
	},
	{
		id: 177,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Development',
			supportCase: 'SBAEHYWIYQ'
		},
		startDate: '08/08/2023',
		endDate: '05/12/2024',
		skills: [
			'HIPAA Compliance',
			'Data Visualization',
			'Database Management',
			'Data Analysis',
			'Backend Development'
		],
		title: 'Help Backend Development in Multi-Tenant Systems',
		description:
			'This task involves Backend Development within the Multi-Tenant Systems. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 71,
		assignedTo: 68
	},
	{
		id: 178,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Support',
			supportCase: 'SBJRMPYGEW'
		},
		startDate: '06/26/2023',
		endDate: '05/19/2024',
		skills: ['Inventory Database', 'Data Analysis', 'Audit Trail Management'],
		title: 'Resolve Data Analysis in Data Cleansing',
		description:
			'Your main task will be Data Analysis within the Data Cleansing. From there, move on to Audit Trail Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 56,
		assignedTo: 5
	},
	{
		id: 179,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Project Management',
			supportCase: 'SBNQ9Q2RUV'
		},
		startDate: '04/21/2024',
		endDate: '04/27/2024',
		skills: [
			'System Architecture',
			'Payment Solutions',
			'Healthcare IT',
			'JavaScript',
			'Network Security'
		],
		title: 'Adjust Payment Solutions in Mobile Application Framework',
		description:
			'We aim to Network Security within the Mobile Application Framework. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Focus also on JavaScript to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 72,
		assignedTo: 71
	},
	{
		id: 180,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Development',
			supportCase: 'SBK5CVMOV4'
		},
		startDate: '03/14/2024',
		endDate: '04/28/2024',
		skills: ['Supply Chain Management', 'Python', 'Network Security'],
		title: 'Support Python in Financial Forecasting Tool',
		description:
			'Your main task will be Python within the Financial Forecasting Tool. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Focus also on Supply Chain Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 73,
		assignedTo: 10
	},
	{
		id: 181,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 4,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SBZSCPUS91'
		},
		startDate: '11/18/2023',
		endDate: '05/04/2024',
		skills: [
			'Business Intelligence',
			'Report Generation',
			'Client Communication',
			'Analytics',
			'Data Encryption'
		],
		title: 'Resolve Client Communication in Data Reporting Tools',
		description:
			'This task involves Business Intelligence within the Data Reporting Tools. Following initial steps, you should Business Intelligence to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 74,
		assignedTo: null
	},
	{
		id: 182,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Support',
			supportCase: 'SBKSWPG1TN'
		},
		startDate: '05/16/2023',
		endDate: '04/29/2024',
		skills: [
			'Inventory Database',
			'Data Visualization',
			'Cloud Services',
			'SQL',
			'Audit Trail Management',
			'Network Security'
		],
		title: 'Help Cloud Services in Efficiency Audit Tools',
		description:
			'You will begin by SQL within the Efficiency Audit Tools. Following initial steps, you should Network Security to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 78,
		assignedTo: 14
	},
	{
		id: 183,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SBCKGTCQJ3'
		},
		startDate: '08/16/2023',
		endDate: '04/28/2024',
		skills: ['Inventory Database', 'Healthcare IT', 'Data Analysis', 'E-commerce Security'],
		title: 'Project Cost Tracking Needs E-commerce Security Fixed',
		description:
			'The objective here is Healthcare IT within the Project Cost Tracking. From there, move on to Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 77,
		assignedTo: 81
	},
	{
		id: 184,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Support',
			supportCase: 'SBLM53L4Z6'
		},
		startDate: '03/02/2024',
		endDate: '05/11/2024',
		skills: ['Data Visualization', 'Client Communication', 'Frontend Development'],
		title: 'Optimize Data Visualization in Efficiency Audit Tools',
		description:
			'We aim to Frontend Development within the Efficiency Audit Tools. Your next steps should include Client Communication to enhance overall outcomes. Focus also on Data Visualization to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 57,
		assignedTo: null
	},
	{
		id: 185,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'UAT',
			supportCase: 'SBB8TC7GDJ'
		},
		startDate: '11/18/2023',
		endDate: '05/23/2024',
		skills: [
			'Backend Development',
			'JavaScript',
			'Analytics',
			'Client Communication',
			'Regulatory Compliance',
			'HIPAA Compliance',
			'Inventory Database'
		],
		title: 'Resolve JavaScript in Transaction Processing System',
		description:
			'You will begin by Client Communication within the Transaction Processing System. From there, move on to Regulatory Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 64,
		assignedTo: 7
	},
	{
		id: 186,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'UAT',
			supportCase: 'SBSAE9D8Q9'
		},
		startDate: '06/20/2023',
		endDate: '05/10/2024',
		skills: ['Inventory Database', 'Cloud Services', 'SQL', 'Regulatory Compliance'],
		title: 'Fix SQL in Media Storage Solutions',
		description:
			'The focus is on SQL within the Media Storage Solutions. Your next steps should include SQL to enhance overall outcomes. Focus also on Cloud Services to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 79,
		assignedTo: 18
	},
	{
		id: 187,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBI7UCMEPY'
		},
		startDate: '03/11/2024',
		endDate: '05/15/2024',
		skills: [
			'Performance Tuning',
			'Report Generation',
			'API Development',
			'Inventory Database',
			'Client Communication'
		],
		title: 'Create Performance Tuning in SaaS Platform Integration',
		description:
			'We aim to Inventory Database within the SaaS Platform Integration. Your next steps should include Report Generation to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 81,
		assignedTo: 77
	},
	{
		id: 188,
		role: 'Director',
		team: 1,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SBHXUD9AIK'
		},
		startDate: '05/29/2023',
		endDate: '05/05/2024',
		skills: ['Report Generation', 'Analytics', 'E-commerce Security'],
		title: 'Optimize Analytics in Efficiency Audit Tools',
		description:
			'This task involves E-commerce Security within the Efficiency Audit Tools. Once completed, proceed to Analytics to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: null
	},
	{
		id: 189,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Project Management',
			supportCase: 'SBPO8AW4B5'
		},
		startDate: '05/31/2023',
		endDate: '04/27/2024',
		skills: [
			'Healthcare IT',
			'Inventory Database',
			'Payment Solutions',
			'Data Visualization',
			'Business Intelligence',
			'SQL'
		],
		title: 'Help Data Visualization in Business Analytics Interface',
		description:
			'Your main task will be Healthcare IT within the Business Analytics Interface. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 83,
		assignedTo: 86
	},
	{
		id: 190,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'UAT',
			supportCase: 'SBBX14JHAX'
		},
		startDate: '07/02/2023',
		endDate: '05/22/2024',
		skills: [
			'Performance Tuning',
			'System Architecture',
			'SQL',
			'Payment Solutions',
			'E-commerce Security',
			'JavaScript',
			'Report Generation'
		],
		title: 'Help SQL in Database Optimization',
		description:
			'The focus is on Performance Tuning within the Database Optimization. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on Report Generation to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 69,
		assignedTo: 8
	},
	{
		id: 191,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Support',
			supportCase: 'SBQC2S5U01'
		},
		startDate: '02/01/2024',
		endDate: '05/25/2024',
		skills: [
			'Healthcare IT',
			'Regulatory Compliance',
			'Audit Trail Management',
			'E-commerce Security',
			'Inventory Database',
			'Analytics',
			'Performance Tuning'
		],
		title: 'Implement Performance Tuning in Sales Dashboard',
		description:
			'You will begin by E-commerce Security within the Sales Dashboard. Following initial steps, you should Performance Tuning to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 84,
		assignedTo: 87
	},
	{
		id: 192,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Dynamic Pricing Engine',
			projectCode: 'Development',
			supportCase: 'SBH6U47Q1T'
		},
		startDate: '01/22/2024',
		endDate: '05/10/2024',
		skills: ['SQL', 'Performance Tuning', 'API Development'],
		title: 'Resolve API Development in Dynamic Pricing Engine',
		description:
			'You will begin by API Development within the Dynamic Pricing Engine. Following initial steps, you should SQL to enhance overall outcomes. Focus also on Performance Tuning to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 75,
		assignedTo: null
	},
	{
		id: 193,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Development',
			supportCase: 'SBF192PBRX'
		},
		startDate: '09/23/2023',
		endDate: '05/12/2024',
		skills: [
			'Healthcare IT',
			'SQL',
			'Data Analysis',
			'Inventory Database',
			'Report Generation',
			'Payment Solutions'
		],
		title: 'Optimize Payment Solutions in Supply Chain Management System',
		description:
			'This task involves Healthcare IT within the Supply Chain Management System. Your next steps should include Report Generation to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 85,
		assignedTo: 88
	},
	{
		id: 194,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Project Management',
			supportCase: 'SB6X2XPAV6'
		},
		startDate: '07/26/2023',
		endDate: '05/04/2024',
		skills: [
			'Performance Tuning',
			'Client Communication',
			'Regulatory Compliance',
			'HIPAA Compliance'
		],
		title: 'Resolve Regulatory Compliance in Multi-Tenant Systems',
		description:
			'The focus is on HIPAA Compliance within the Multi-Tenant Systems. Your next steps should include Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 86,
		assignedTo: 94
	},
	{
		id: 195,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Testing',
			supportCase: 'SBOBA63PI3'
		},
		startDate: '11/13/2023',
		endDate: '05/08/2024',
		skills: ['E-commerce Security', 'Inventory Database', 'Supply Chain Management', 'Analytics'],
		title: 'Implement Analytics in Compliance Tracking System',
		description:
			'This task involves E-commerce Security within the Compliance Tracking System. From there, move on to Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 87,
		assignedTo: 95
	},
	{
		id: 196,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'UAT',
			supportCase: 'SBN2QS233Q'
		},
		startDate: '04/11/2024',
		endDate: '04/27/2024',
		skills: ['Healthcare IT', 'Audit Trail Management', 'Data Analysis'],
		title: 'Adjust Healthcare IT in Workflow Automation',
		description:
			'Your main task will be Data Analysis within the Workflow Automation. Following initial steps, you should Healthcare IT to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 76,
		assignedTo: 9
	},
	{
		id: 197,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Development',
			supportCase: 'SBICRV4BRK'
		},
		startDate: '08/16/2023',
		endDate: '05/23/2024',
		skills: ['Report Generation', 'Inventory Database', 'System Architecture', 'Analytics'],
		title: 'Help Analytics in Digital Distribution Network',
		description:
			'We aim to Report Generation within the Digital Distribution Network. Your next steps should include Analytics to enhance overall outcomes. Focus also on System Architecture to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 80,
		assignedTo: 11
	},
	{
		id: 198,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Development',
			supportCase: 'SBUAD9CC1H'
		},
		startDate: '01/12/2024',
		endDate: '04/27/2024',
		skills: [
			'API Development',
			'Payment Solutions',
			'HIPAA Compliance',
			'Client Communication',
			'Operational Efficiency'
		],
		title: 'Optimize Operational Efficiency in CRM Integration',
		description:
			'Your main task will be Operational Efficiency within the CRM Integration. Following initial steps, you should API Development to enhance overall outcomes. Focus also on Client Communication to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 82,
		assignedTo: 12
	},
	{
		id: 199,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Support',
			supportCase: 'SBSMVEF1VS'
		},
		startDate: '01/13/2024',
		endDate: '05/19/2024',
		skills: [
			'Network Security',
			'SQL',
			'Payment Solutions',
			'Business Intelligence',
			'Cloud Services',
			'Audit Trail Management',
			'Python'
		],
		title: 'Support SQL in Social Media Integration',
		description:
			'This task involves Python within the Social Media Integration. Your next steps should include Network Security to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 88,
		assignedTo: 15
	},
	{
		id: 200,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Development',
			supportCase: 'SB8WQWLI94'
		},
		startDate: '05/12/2023',
		endDate: '05/07/2024',
		skills: [
			'Data Visualization',
			'System Architecture',
			'Operational Efficiency',
			'SQL',
			'Payment Solutions'
		],
		title: 'Support Operational Efficiency in Transaction Processing System',
		description:
			'The objective here is SQL within the Transaction Processing System. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 89,
		assignedTo: 31
	},
	{
		id: 201,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Development',
			supportCase: 'SBXAM0CKL2'
		},
		startDate: '03/06/2024',
		endDate: '05/15/2024',
		skills: [
			'Healthcare IT',
			'Data Visualization',
			'Performance Tuning',
			'C#',
			'HIPAA Compliance',
			'Business Intelligence',
			'API Development'
		],
		title: 'Branding Portal Needs Performance Tuning Fixed',
		description:
			'You will begin by Performance Tuning within the Branding Portal. Once completed, proceed to API Development to enhance overall outcomes. Focus also on Business Intelligence to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 90,
		assignedTo: 97
	},
	{
		id: 202,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Development',
			supportCase: 'SBIJUH191J'
		},
		startDate: '06/25/2023',
		endDate: '05/05/2024',
		skills: [
			'Audit Trail Management',
			'Report Generation',
			'Healthcare IT',
			'JavaScript',
			'Inventory Database',
			'Operational Efficiency',
			'Data Analysis'
		],
		title: 'Customer Loyalty Programs Needs Data Analysis Fixed',
		description:
			'The focus is on Operational Efficiency within the Customer Loyalty Programs. Following initial steps, you should JavaScript to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 91,
		assignedTo: 19
	},
	{
		id: 203,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBHFLNYB0O'
		},
		startDate: '10/02/2023',
		endDate: '05/20/2024',
		skills: ['JavaScript', 'Audit Trail Management', 'Performance Tuning', 'Client Communication'],
		title: 'Adjust Performance Tuning in Sales Dashboard',
		description:
			'Your main task will be Audit Trail Management within the Sales Dashboard. Your next steps should include Audit Trail Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 92,
		assignedTo: 42
	},
	{
		id: 204,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBFU6S7Y7L'
		},
		startDate: '08/18/2023',
		endDate: '04/29/2024',
		skills: ['SQL', 'Client Communication', 'Regulatory Compliance'],
		title: 'Adjust Regulatory Compliance in Real-Time Data Analysis',
		description:
			'The focus is on Client Communication within the Real-Time Data Analysis. Following initial steps, you should Regulatory Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 96,
		assignedTo: 45
	},
	{
		id: 205,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Development',
			supportCase: 'SBN2XV5ID2'
		},
		startDate: '03/03/2024',
		endDate: '05/09/2024',
		skills: ['Performance Tuning', 'SQL', 'UI/UX Design'],
		title: 'Adjust Performance Tuning in Risk Assessment Software',
		description:
			'We aim to UI/UX Design within the Risk Assessment Software. Once completed, proceed to SQL to enhance overall outcomes. Focus also on UI/UX Design to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 94,
		assignedTo: 98
	},
	{
		id: 206,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Testing',
			supportCase: 'SBFH06JIKU'
		},
		startDate: '10/25/2023',
		endDate: '05/03/2024',
		skills: ['Analytics', 'Network Security', 'Operational Efficiency', 'Data Analysis'],
		title: 'Support Analytics in Project Cost Tracking',
		description:
			'You will begin by Analytics within the Project Cost Tracking. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Operational Efficiency to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 95,
		assignedTo: 99
	},
	{
		id: 207,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Development',
			supportCase: 'SBMAKQ9NVU'
		},
		startDate: '08/19/2023',
		endDate: '05/04/2024',
		skills: ['Network Security', 'JavaScript', 'SQL', 'Supply Chain Management', 'Cloud Services'],
		title: 'Database Optimization Needs SQL Fixed',
		description:
			'We aim to Cloud Services within the Database Optimization. Once completed, proceed to Supply Chain Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 93,
		assignedTo: 20
	},
	{
		id: 208,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Development',
			supportCase: 'SBKHZ8GHMY'
		},
		startDate: '03/27/2024',
		endDate: '05/16/2024',
		skills: ['Python', 'Performance Tuning', 'Supply Chain Management', 'Data Analysis'],
		title: 'Adjust Data Analysis in Cloud Data Solutions',
		description:
			'This task involves Data Analysis within the Cloud Data Solutions. Once completed, proceed to Performance Tuning to enhance overall outcomes. Focus also on Supply Chain Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 104,
		assignedTo: 83
	},
	{
		id: 209,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SBQXKGVZGI'
		},
		startDate: '03/28/2023',
		endDate: '04/29/2024',
		skills: [
			'E-commerce Security',
			'Payment Solutions',
			'Operational Efficiency',
			'Data Analysis',
			'Report Generation'
		],
		title: 'Optimize Report Generation in Mobile Application Framework',
		description:
			'You will begin by Payment Solutions within the Mobile Application Framework. Your next steps should include E-commerce Security to enhance overall outcomes. Focus also on Operational Efficiency to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 101,
		assignedTo: 48
	},
	{
		id: 210,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Development',
			supportCase: 'SBAN8W4GYP'
		},
		startDate: '01/13/2024',
		endDate: '04/28/2024',
		skills: [
			'Analytics',
			'Audit Trail Management',
			'Client Communication',
			'Performance Tuning',
			'Business Intelligence',
			'Python',
			'Network Security'
		],
		title: 'Support Python in Responsive Web Design',
		description:
			'Your main task will be Python within the Responsive Web Design. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on Analytics to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 97,
		assignedTo: 2
	},
	{
		id: 211,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'UAT',
			supportCase: 'SBHSEGQDR9'
		},
		startDate: '11/06/2023',
		endDate: '05/12/2024',
		skills: [
			'Business Intelligence',
			'E-commerce Security',
			'Data Encryption',
			'SQL',
			'Client Communication',
			'JavaScript'
		],
		title: 'Fix JavaScript in Customer Loyalty Programs',
		description:
			'The objective here is E-commerce Security within the Customer Loyalty Programs. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on Business Intelligence to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 98,
		assignedTo: 4
	},
	{
		id: 212,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'UAT',
			supportCase: 'SB0S8RLQSP'
		},
		startDate: '02/07/2024',
		endDate: '05/28/2024',
		skills: [
			'E-commerce Security',
			'JavaScript',
			'Supply Chain Management',
			'Data Encryption',
			'Regulatory Compliance'
		],
		title: 'Support E-commerce Security in Business Analytics Interface',
		description:
			'You will begin by Data Encryption within the Business Analytics Interface. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 99,
		assignedTo: 21
	},
	{
		id: 213,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SBCL4LE80X'
		},
		startDate: '03/13/2024',
		endDate: '05/02/2024',
		skills: ['User Testing', 'Healthcare IT', 'Backend Development', 'Data Visualization'],
		title: 'Support Data Visualization in Customer Engagement Platform',
		description:
			'You will begin by Data Visualization within the Customer Engagement Platform. From there, move on to Healthcare IT to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 102,
		assignedTo: 13
	},
	{
		id: 214,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'UAT',
			supportCase: 'SBOMMXHH1H'
		},
		startDate: '05/21/2023',
		endDate: '05/26/2024',
		skills: [
			'Performance Tuning',
			'Regulatory Compliance',
			'Network Security',
			'HIPAA Compliance',
			'Supply Chain Management',
			'Operational Efficiency'
		],
		title: 'Implement Supply Chain Management in Risk Assessment Software',
		description:
			'We aim to Performance Tuning within the Risk Assessment Software. From there, move on to Network Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 105,
		assignedTo: 52
	},
	{
		id: 215,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 11,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SBCERU6J9V'
		},
		startDate: '08/10/2023',
		endDate: '05/11/2024',
		skills: [
			'Network Security',
			'API Development',
			'Report Generation',
			'Operational Efficiency',
			'Healthcare IT',
			'System Architecture',
			'Inventory Database'
		],
		title: 'Fix API Development in Insurance Claim Automation',
		description:
			'The objective here is Inventory Database within the Insurance Claim Automation. From there, move on to Network Security to enhance overall outcomes. Focus also on Report Generation to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 100,
		assignedTo: 22
	},
	{
		id: 216,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Testing',
			supportCase: 'SB2HQJXG1E'
		},
		startDate: '04/08/2023',
		endDate: '04/29/2024',
		skills: ['Supply Chain Management', 'Data Encryption', 'JavaScript', 'Inventory Database'],
		title: 'Implement Data Encryption in Real-Time Data Analysis',
		description:
			'You will begin by Inventory Database within the Real-Time Data Analysis. Once completed, proceed to JavaScript to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 106,
		assignedTo: 27
	},
	{
		id: 217,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Testing',
			supportCase: 'SB4E87QOL5'
		},
		startDate: '04/26/2023',
		endDate: '05/05/2024',
		skills: ['Supply Chain Management', 'Data Analysis', 'E-commerce Security'],
		title: 'SaaS Platform Integration Needs E-commerce Security Fixed',
		description:
			'The focus is on Data Analysis within the SaaS Platform Integration. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on Data Analysis to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 107,
		assignedTo: 29
	},
	{
		id: 218,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Support',
			supportCase: 'SB48GP80YW'
		},
		startDate: '04/30/2023',
		endDate: '05/17/2024',
		skills: ['C#', 'API Development', 'Regulatory Compliance', 'Performance Tuning', 'SQL'],
		title: 'Full Stack Web Development Needs Performance Tuning Fixed',
		description:
			'We aim to C# within the Full Stack Web Development. Your next steps should include Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 108,
		assignedTo: 32
	},
	{
		id: 219,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SB7WRPUQIJ'
		},
		startDate: '04/29/2023',
		endDate: '05/26/2024',
		skills: [
			'Data Visualization',
			'Data Encryption',
			'HIPAA Compliance',
			'Supply Chain Management',
			'System Architecture',
			'Payment Solutions'
		],
		title: 'Adjust Supply Chain Management in Customer Segmentation Analysis',
		description:
			'The objective here is Data Visualization within the Customer Segmentation Analysis. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 109,
		assignedTo: 33
	},
	{
		id: 220,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Testing',
			supportCase: 'SBCBOE9DID'
		},
		startDate: '03/01/2024',
		endDate: '05/15/2024',
		skills: ['E-commerce Security', 'Report Generation', 'Data Analysis', 'Frontend Development'],
		title: 'Fix E-commerce Security in Internal Communication Tool',
		description:
			'The focus is on Frontend Development within the Internal Communication Tool. Following initial steps, you should Report Generation to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 110,
		assignedTo: 35
	},
	{
		id: 221,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Testing',
			supportCase: 'SBR13L7TAO'
		},
		startDate: '01/11/2024',
		endDate: '05/09/2024',
		skills: [
			'Audit Trail Management',
			'Performance Tuning',
			'HIPAA Compliance',
			'Analytics',
			'SQL',
			'Supply Chain Management'
		],
		title: 'Adjust HIPAA Compliance in Customer Loyalty Programs',
		description:
			'The objective here is Analytics within the Customer Loyalty Programs. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 1,
		assignedTo: 38
	},
	{
		id: 222,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Testing',
			supportCase: 'SBKUA193C6'
		},
		startDate: '03/28/2023',
		endDate: '05/06/2024',
		skills: [
			'System Architecture',
			'Supply Chain Management',
			'Cloud Services',
			'C#',
			'API Development',
			'Regulatory Compliance',
			'Audit Trail Management'
		],
		title: 'Help C# in Tenant Screening Process',
		description:
			'We aim to System Architecture within the Tenant Screening Process. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 2,
		assignedTo: 16
	},
	{
		id: 223,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SB5PVVJBTA'
		},
		startDate: '02/09/2024',
		endDate: '05/17/2024',
		skills: [
			'Report Generation',
			'Regulatory Compliance',
			'Data Analysis',
			'Performance Tuning',
			'Healthcare IT',
			'Business Intelligence'
		],
		title: 'Create Performance Tuning in Web Performance Monitoring',
		description:
			'We aim to Report Generation within the Web Performance Monitoring. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 4,
		assignedTo: 24
	},
	{
		id: 224,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Development',
			supportCase: 'SB8ZCVOC2T'
		},
		startDate: '03/17/2024',
		endDate: '05/02/2024',
		skills: [
			'Network Security',
			'Data Encryption',
			'SQL',
			'Inventory Database',
			'Analytics',
			'Supply Chain Management',
			'Report Generation'
		],
		title: 'Fix Data Encryption in Transaction Processing System',
		description:
			'The objective here is Network Security within the Transaction Processing System. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 3,
		assignedTo: null
	},
	{
		id: 225,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'UAT',
			supportCase: 'SBLDK1Z7NF'
		},
		startDate: '03/28/2024',
		endDate: '04/28/2024',
		skills: ['Report Generation', 'Backend Development', 'Client Communication'],
		title: 'Telemedicine Platform Needs Report Generation Fixed',
		description:
			'Your main task will be Report Generation within the Telemedicine Platform. From there, move on to Report Generation to enhance overall outcomes. Focus also on Report Generation to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 5,
		assignedTo: 40
	},
	{
		id: 226,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Development',
			supportCase: 'SBO0TC87EE'
		},
		startDate: '08/03/2023',
		endDate: '05/20/2024',
		skills: [
			'E-commerce Security',
			'Analytics',
			'API Development',
			'Operational Efficiency',
			'Data Analysis',
			'Business Intelligence'
		],
		title: 'Internal Communication Tool Needs Business Intelligence Fixed',
		description:
			'We aim to E-commerce Security within the Internal Communication Tool. Your next steps should include Business Intelligence to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 6,
		assignedTo: 41
	},
	{
		id: 227,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBLI2SJFZJ'
		},
		startDate: '10/26/2023',
		endDate: '05/29/2024',
		skills: [
			'Performance Tuning',
			'Network Security',
			'E-commerce Security',
			'C#',
			'Business Intelligence',
			'Inventory Database',
			'Data Analysis'
		],
		title: 'Help E-commerce Security in Visualization of Data Insights',
		description:
			'You will begin by Data Analysis within the Visualization of Data Insights. Following initial steps, you should Network Security to enhance overall outcomes. Focus also on Data Analysis to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 10,
		assignedTo: 26
	},
	{
		id: 228,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Support',
			supportCase: 'SBRIS96GY7'
		},
		startDate: '04/23/2024',
		endDate: '04/30/2024',
		skills: [
			'JavaScript',
			'User Testing',
			'Python',
			'Inventory Database',
			'Operational Efficiency',
			'Healthcare IT',
			'Data Visualization'
		],
		title: 'Adjust Healthcare IT in Digital Catalogue',
		description:
			'You will begin by Operational Efficiency within the Digital Catalogue. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 7,
		assignedTo: 46
	},
	{
		id: 229,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SBS0LWPQPO'
		},
		startDate: '05/13/2023',
		endDate: '05/04/2024',
		skills: [
			'API Development',
			'E-commerce Security',
			'Data Visualization',
			'Client Communication',
			'Inventory Database',
			'JavaScript',
			'Cloud Services'
		],
		title: 'Point of Sale System Needs JavaScript Fixed',
		description:
			'The objective here is E-commerce Security within the Point of Sale System. Once completed, proceed to E-commerce Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 8,
		assignedTo: 47
	},
	{
		id: 230,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'UAT',
			supportCase: 'SB7OSCUHP6'
		},
		startDate: '09/03/2023',
		endDate: '05/07/2024',
		skills: [
			'Analytics',
			'JavaScript',
			'Report Generation',
			'UI/UX Design',
			'Client Communication'
		],
		title: 'Create Analytics in Full Stack Web Development',
		description:
			'This task involves Report Generation within the Full Stack Web Development. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on UI/UX Design to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 9,
		assignedTo: 51
	},
	{
		id: 231,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Development',
			supportCase: 'SBWJE2P4UH'
		},
		startDate: '06/06/2023',
		endDate: '05/25/2024',
		skills: ['Data Visualization', 'UI/UX Design', 'Inventory Database', 'Data Analysis'],
		title: 'Fix UI/UX Design in Logistics Tracking Interface',
		description:
			'You will begin by Data Visualization within the Logistics Tracking Interface. Once completed, proceed to Data Visualization to enhance overall outcomes. Focus also on Data Visualization to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 11,
		assignedTo: 53
	},
	{
		id: 232,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Requirements',
			supportCase: 'SBPWA3JFLQ'
		},
		startDate: '06/11/2023',
		endDate: '05/12/2024',
		skills: ['Client Communication', 'Data Encryption', 'SQL', 'Cloud Services'],
		title: 'Optimize Client Communication in Cloud Data Solutions',
		description:
			'This task involves Cloud Services within the Cloud Data Solutions. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on Client Communication to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 13,
		assignedTo: 37
	},
	{
		id: 233,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SBAS5IADA1'
		},
		startDate: '04/19/2023',
		endDate: '04/29/2024',
		skills: [
			'Report Generation',
			'Regulatory Compliance',
			'Performance Tuning',
			'Healthcare IT',
			'Data Analysis'
		],
		title: 'Help Healthcare IT in Social Media Integration',
		description:
			'Your main task will be Regulatory Compliance within the Social Media Integration. Your next steps should include Regulatory Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 12,
		assignedTo: 55
	},
	{
		id: 234,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Development',
			supportCase: 'SB7FZA7DUJ'
		},
		startDate: '01/26/2024',
		endDate: '04/30/2024',
		skills: [
			'Frontend Development',
			'Business Intelligence',
			'Inventory Database',
			'User Testing',
			'Data Visualization'
		],
		title: 'Cloud Data Solutions Needs Frontend Development Fixed',
		description:
			'The focus is on Data Visualization within the Cloud Data Solutions. Your next steps should include Data Visualization to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 14,
		assignedTo: 56
	},
	{
		id: 235,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SBFULUGP6Q'
		},
		startDate: '03/30/2024',
		endDate: '04/30/2024',
		skills: [
			'Business Intelligence',
			'Analytics',
			'Operational Efficiency',
			'C#',
			'SQL',
			'Frontend Development'
		],
		title: 'Optimize Analytics in Web Application Security',
		description:
			'This task involves SQL within the Web Application Security. Following initial steps, you should Frontend Development to enhance overall outcomes. Focus also on Frontend Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 17,
		assignedTo: 54
	},
	{
		id: 236,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'UAT',
			supportCase: 'SBVRL2K4FV'
		},
		startDate: '01/19/2024',
		endDate: '04/28/2024',
		skills: [
			'Supply Chain Management',
			'HIPAA Compliance',
			'Client Communication',
			'Performance Tuning',
			'Data Encryption'
		],
		title: 'Optimize HIPAA Compliance in Payment Gateway Integration',
		description:
			'Your main task will be Client Communication within the Payment Gateway Integration. Following initial steps, you should Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 18,
		assignedTo: 58
	},
	{
		id: 237,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Testing',
			supportCase: 'SBOVCHKTDI'
		},
		startDate: '03/01/2024',
		endDate: '05/05/2024',
		skills: [
			'Performance Tuning',
			'HIPAA Compliance',
			'Audit Trail Management',
			'Inventory Database',
			'Client Communication',
			'Data Visualization',
			'Payment Solutions'
		],
		title: 'Lead Tracking Software Needs Performance Tuning Fixed',
		description:
			'This task involves Performance Tuning within the Lead Tracking Software. Following initial steps, you should Data Visualization to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 23,
		assignedTo: 60
	},
	{
		id: 238,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBNSDOVZNB'
		},
		startDate: '10/27/2023',
		endDate: '05/21/2024',
		skills: ['Inventory Database', 'Regulatory Compliance', 'Business Intelligence'],
		title: 'Resolve Business Intelligence in Building Maintenance App',
		description:
			'Your main task will be Regulatory Compliance within the Building Maintenance App. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 15,
		assignedTo: 57
	},
	{
		id: 239,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Testing',
			supportCase: 'SBRM2EW1BA'
		},
		startDate: '01/01/2024',
		endDate: '05/04/2024',
		skills: [
			'Audit Trail Management',
			'Data Visualization',
			'Cloud Services',
			'Inventory Database',
			'JavaScript',
			'Performance Tuning',
			'System Architecture'
		],
		title: 'Mobile UX/UI Upgrade Needs System Architecture Fixed',
		description:
			'You will begin by System Architecture within the Mobile UX/UI Upgrade. Your next steps should include Performance Tuning to enhance overall outcomes. Focus also on Cloud Services to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 16,
		assignedTo: 64
	},
	{
		id: 240,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SBN7GCTA6L'
		},
		startDate: '04/11/2024',
		endDate: '05/15/2024',
		skills: [
			'Inventory Database',
			'HIPAA Compliance',
			'Supply Chain Management',
			'Performance Tuning',
			'Client Communication'
		],
		title: 'Tenant Screening Process Needs Supply Chain Management Fixed',
		description:
			'Your main task will be Performance Tuning within the Tenant Screening Process. Following initial steps, you should Performance Tuning to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 19,
		assignedTo: 69
	},
	{
		id: 241,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Development',
			supportCase: 'SBDP6OXV5J'
		},
		startDate: '12/25/2023',
		endDate: '05/14/2024',
		skills: ['Report Generation', 'Frontend Development', 'Performance Tuning', 'HIPAA Compliance'],
		title: 'Support Performance Tuning in Order Fulfillment Automation',
		description:
			'You will begin by Performance Tuning within the Order Fulfillment Automation. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 20,
		assignedTo: 75
	},
	{
		id: 242,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Development',
			supportCase: 'SB90BIUAGU'
		},
		startDate: '02/21/2024',
		endDate: '05/29/2024',
		skills: ['Inventory Database', 'Data Analysis', 'API Development', 'System Architecture'],
		title: 'Material Specification Tool Needs API Development Fixed',
		description:
			'The focus is on Data Analysis within the Material Specification Tool. From there, move on to Data Analysis to enhance overall outcomes. Focus also on API Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 24,
		assignedTo: 43
	},
	{
		id: 243,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 6,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Support',
			supportCase: 'SB2KIEJ02F'
		},
		startDate: '08/23/2023',
		endDate: '05/09/2024',
		skills: [
			'Operational Efficiency',
			'Business Intelligence',
			'Audit Trail Management',
			'Supply Chain Management',
			'E-commerce Security'
		],
		title: 'Lead Tracking Software Needs E-commerce Security Fixed',
		description:
			'This task involves Business Intelligence within the Lead Tracking Software. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 21,
		assignedTo: 76
	},
	{
		id: 244,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Support',
			supportCase: 'SBOWN5AHMA'
		},
		startDate: '01/18/2024',
		endDate: '05/23/2024',
		skills: [
			'Operational Efficiency',
			'Payment Solutions',
			'Inventory Database',
			'Healthcare IT',
			'HIPAA Compliance',
			'Business Intelligence',
			'Data Visualization'
		],
		title: 'Support Payment Solutions in Risk Assessment Software',
		description:
			'The objective here is Business Intelligence within the Risk Assessment Software. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 25,
		assignedTo: 23
	},
	{
		id: 245,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SB3NU62WWO'
		},
		startDate: '02/17/2024',
		endDate: '05/26/2024',
		skills: ['Backend Development', 'HIPAA Compliance', 'Operational Efficiency'],
		title: 'Tenant Screening Process Needs HIPAA Compliance Fixed',
		description:
			'We aim to Operational Efficiency within the Tenant Screening Process. Subsequently, your efforts will involve Backend Development to enhance overall outcomes. Focus also on Operational Efficiency to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 26,
		assignedTo: 44
	},
	{
		id: 246,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Discovery',
			supportCase: 'SBT8DAUTH3'
		},
		startDate: '10/11/2023',
		endDate: '05/19/2024',
		skills: [
			'Data Visualization',
			'HIPAA Compliance',
			'Payment Solutions',
			'Supply Chain Management',
			'Regulatory Compliance',
			'Performance Tuning'
		],
		title: 'Workflow Automation Needs Data Visualization Fixed',
		description:
			'Your main task will be Payment Solutions within the Workflow Automation. Following initial steps, you should Data Visualization to enhance overall outcomes. Focus also on Payment Solutions to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 22,
		assignedTo: 80
	},
	{
		id: 247,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Testing',
			supportCase: 'SB2OHF7SBH'
		},
		startDate: '04/10/2023',
		endDate: '05/14/2024',
		skills: [
			'HIPAA Compliance',
			'SQL',
			'Report Generation',
			'Analytics',
			'Client Communication',
			'C#',
			'Data Visualization'
		],
		title: 'Support Client Communication in Workflow Automation',
		description:
			'The focus is on Data Visualization within the Workflow Automation. Following initial steps, you should Analytics to enhance overall outcomes. Focus also on Client Communication to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 27,
		assignedTo: 82
	},
	{
		id: 248,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SBBCR6A4AD'
		},
		startDate: '04/17/2024',
		endDate: '05/10/2024',
		skills: ['Data Visualization', 'Analytics', 'Inventory Database'],
		title: 'Adjust Data Visualization in Client Reporting System',
		description:
			'You will begin by Inventory Database within the Client Reporting System. Your next steps should include Data Visualization to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 28,
		assignedTo: 30
	},
	{
		id: 249,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Development',
			supportCase: 'SB27HIBJKX'
		},
		startDate: '04/02/2023',
		endDate: '05/27/2024',
		skills: [
			'Cloud Services',
			'Operational Efficiency',
			'Payment Solutions',
			'C#',
			'Business Intelligence'
		],
		title: 'Customer Engagement Platform Needs C# Fixed',
		description:
			'This task involves Payment Solutions within the Customer Engagement Platform. From there, move on to Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 29,
		assignedTo: 91
	},
	{
		id: 250,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Support',
			supportCase: 'SBK7G4PFW6'
		},
		startDate: '03/25/2024',
		endDate: '05/05/2024',
		skills: ['Supply Chain Management', 'Client Communication', 'Healthcare IT', 'C#'],
		title: 'Predictive Analytics Modeling Needs Client Communication Fixed',
		description:
			'The focus is on Client Communication within the Predictive Analytics Modeling. Your next steps should include Supply Chain Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 30,
		assignedTo: 93
	},
	{
		id: 251,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Development',
			supportCase: 'SBQH9EFBO2'
		},
		startDate: '05/29/2023',
		endDate: '04/28/2024',
		skills: ['UI/UX Design', 'Payment Solutions', 'Regulatory Compliance', 'Healthcare IT'],
		title: 'Adjust Payment Solutions in Supply Chain Management System',
		description:
			'The focus is on UI/UX Design within the Supply Chain Management System. Once completed, proceed to Healthcare IT to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 31,
		assignedTo: 100
	},
	{
		id: 252,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Support',
			supportCase: 'SBGQ11GQSP'
		},
		startDate: '01/20/2024',
		endDate: '05/05/2024',
		skills: ['Operational Efficiency', 'Data Analysis', 'API Development', 'Data Visualization'],
		title: 'Business Analytics Interface Needs Data Analysis Fixed',
		description:
			'You will begin by Data Analysis within the Business Analytics Interface. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 34,
		assignedTo: 66
	},
	{
		id: 253,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Project Management',
			supportCase: 'SB50IKXF0D'
		},
		startDate: '11/13/2023',
		endDate: '05/16/2024',
		skills: ['Performance Tuning', 'Data Encryption', 'Business Intelligence'],
		title: 'Real-Time Data Analysis Needs Data Encryption Fixed',
		description:
			'We aim to Performance Tuning within the Real-Time Data Analysis. Following initial steps, you should Business Intelligence to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 32,
		assignedTo: 106
	},
	{
		id: 254,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Support',
			supportCase: 'SBKKGR480D'
		},
		startDate: '02/06/2024',
		endDate: '05/23/2024',
		skills: ['SQL', 'Operational Efficiency', 'Client Communication', 'Report Generation'],
		title: 'Create SQL in Online Marketing Strategy',
		description:
			'Your main task will be Report Generation within the Online Marketing Strategy. Following initial steps, you should SQL to enhance overall outcomes. Focus also on Operational Efficiency to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 36,
		assignedTo: 49
	},
	{
		id: 255,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Testing',
			supportCase: 'SBTU3982WM'
		},
		startDate: '04/08/2024',
		endDate: '05/29/2024',
		skills: ['E-commerce Security', 'Data Encryption', 'API Development'],
		title: 'Support Data Encryption in Risk Assessment Software',
		description:
			'The objective here is E-commerce Security within the Risk Assessment Software. Your next steps should include E-commerce Security to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 39,
		assignedTo: null
	},
	{
		id: 256,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Support',
			supportCase: 'SBHMUB03NV'
		},
		startDate: '06/06/2023',
		endDate: '05/27/2024',
		skills: [
			'API Development',
			'Operational Efficiency',
			'Cloud Services',
			'Healthcare IT',
			'Regulatory Compliance',
			'Data Analysis',
			'Data Visualization'
		],
		title: 'Create Operational Efficiency in Enterprise Resource Planning',
		description:
			'We aim to Operational Efficiency within the Enterprise Resource Planning. Subsequently, your efforts will involve API Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 33,
		assignedTo: 107
	},
	{
		id: 257,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Development',
			supportCase: 'SBKUG7FX5T'
		},
		startDate: '05/22/2023',
		endDate: '05/18/2024',
		skills: [
			'Inventory Database',
			'Regulatory Compliance',
			'Database Management',
			'Operational Efficiency',
			'SQL'
		],
		title: 'Risk Assessment Software Needs SQL Fixed',
		description:
			'We aim to Regulatory Compliance within the Risk Assessment Software. Your next steps should include Database Management to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 37,
		assignedTo: 50
	},
	{
		id: 258,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBZR84X89O'
		},
		startDate: '04/23/2023',
		endDate: '05/11/2024',
		skills: [
			'UI/UX Design',
			'Audit Trail Management',
			'Frontend Development',
			'C#',
			'Performance Tuning',
			'Inventory Database'
		],
		title: 'Optimize UI/UX Design in SaaS Platform Integration',
		description:
			'The objective here is Frontend Development within the SaaS Platform Integration. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on Performance Tuning to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 42,
		assignedTo: 67
	},
	{
		id: 259,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SBNHESMG3F'
		},
		startDate: '10/06/2023',
		endDate: '04/30/2024',
		skills: [
			'Inventory Database',
			'API Development',
			'Regulatory Compliance',
			'Data Analysis',
			'HIPAA Compliance',
			'E-commerce Security',
			'Data Visualization'
		],
		title: 'Create Inventory Database in Tenant Screening Process',
		description:
			'We aim to Data Visualization within the Tenant Screening Process. Subsequently, your efforts will involve API Development to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 43,
		assignedTo: 59
	},
	{
		id: 260,
		role: 'Supervisor',
		team: 1,
		status: 'Cancelled',
		hours: 8,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SB0EB5U8I0'
		},
		startDate: '09/09/2023',
		endDate: '05/24/2024',
		skills: [
			'Supply Chain Management',
			'HIPAA Compliance',
			'Analytics',
			'Regulatory Compliance',
			'Data Analysis'
		],
		title: 'Resolve Data Analysis in Tenant Screening Process',
		description:
			'The objective here is Data Analysis within the Tenant Screening Process. Your next steps should include HIPAA Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 45,
		assignedTo: 79
	},
	{
		id: 261,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBXHXF6SN7'
		},
		startDate: '10/17/2023',
		endDate: '04/27/2024',
		skills: [
			'Network Security',
			'Report Generation',
			'Operational Efficiency',
			'E-commerce Security',
			'Regulatory Compliance',
			'SQL',
			'Performance Tuning'
		],
		title: 'Resolve Report Generation in Product Customization Tool',
		description:
			'Your main task will be E-commerce Security within the Product Customization Tool. Once completed, proceed to E-commerce Security to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 63,
		assignedTo: 90
	},
	{
		id: 262,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'UAT',
			supportCase: 'SB0S85P42H'
		},
		startDate: '05/26/2023',
		endDate: '05/14/2024',
		skills: [
			'System Architecture',
			'Audit Trail Management',
			'Performance Tuning',
			'Cloud Services',
			'Analytics',
			'Python',
			'Network Security'
		],
		title: 'Client Onboarding Process Needs Network Security Fixed',
		description:
			'The objective here is Python within the Client Onboarding Process. From there, move on to Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 44,
		assignedTo: 61
	},
	{
		id: 263,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Project Management',
			supportCase: 'SBF1KQZVDB'
		},
		startDate: '02/13/2024',
		endDate: '05/20/2024',
		skills: [
			'Operational Efficiency',
			'Backend Development',
			'Inventory Database',
			'JavaScript',
			'Analytics'
		],
		title: 'Implement JavaScript in Logistics Tracking Interface',
		description:
			'The focus is on Inventory Database within the Logistics Tracking Interface. Once completed, proceed to Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 35,
		assignedTo: null
	},
	{
		id: 264,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Testing',
			supportCase: 'SBECN61PFJ'
		},
		startDate: '03/30/2024',
		endDate: '04/30/2024',
		skills: ['HIPAA Compliance', 'Performance Tuning', 'Healthcare IT'],
		title: 'Implement HIPAA Compliance in Web Application Security',
		description:
			'We aim to Performance Tuning within the Web Application Security. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 48,
		assignedTo: 84
	},
	{
		id: 265,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Third-Party API Integrations',
			projectCode: 'Development',
			supportCase: 'SBFFXMMT7L'
		},
		startDate: '09/15/2023',
		endDate: '05/13/2024',
		skills: [
			'Report Generation',
			'User Testing',
			'Client Communication',
			'Supply Chain Management'
		],
		title: 'Support Report Generation in Third-Party API Integrations',
		description:
			'This task involves Client Communication within the Third-Party API Integrations. Once completed, proceed to User Testing to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 52,
		assignedTo: 85
	},
	{
		id: 266,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SB7NIAXKQH'
		},
		startDate: '01/02/2024',
		endDate: '05/09/2024',
		skills: ['Python', 'Healthcare IT', 'Regulatory Compliance', 'Data Analysis'],
		title: 'Efficiency Audit Tools Needs Healthcare IT Fixed',
		description:
			'This task involves Regulatory Compliance within the Efficiency Audit Tools. Following initial steps, you should Data Analysis to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 38,
		assignedTo: 3
	},
	{
		id: 267,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Project Management',
			supportCase: 'SB5BYA1LTN'
		},
		startDate: '11/08/2023',
		endDate: '05/11/2024',
		skills: ['User Testing', 'Analytics', 'Operational Efficiency'],
		title: 'Enterprise Resource Planning Needs User Testing Fixed',
		description:
			'The objective here is Analytics within the Enterprise Resource Planning. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 40,
		assignedTo: null
	},
	{
		id: 268,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 20,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Support',
			supportCase: 'SB23KDP15G'
		},
		startDate: '06/14/2023',
		endDate: '05/22/2024',
		skills: [
			'Python',
			'E-commerce Security',
			'Performance Tuning',
			'Client Communication',
			'Analytics'
		],
		title: 'E-commerce SEO Optimization Needs Client Communication Fixed',
		description:
			'Your main task will be Python within the E-commerce SEO Optimization. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on Analytics to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 41,
		assignedTo: 5
	},
	{
		id: 269,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'UAT',
			supportCase: 'SB1WUS1H84'
		},
		startDate: '11/26/2023',
		endDate: '05/02/2024',
		skills: [
			'Data Visualization',
			'Inventory Database',
			'Healthcare IT',
			'Data Analysis',
			'Report Generation',
			'Payment Solutions',
			'E-commerce Security'
		],
		title: 'Digital Distribution Network Needs Data Visualization Fixed',
		description:
			'Your main task will be Report Generation within the Digital Distribution Network. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on Report Generation to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 49,
		assignedTo: 62
	},
	{
		id: 270,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Development',
			supportCase: 'SBQTGC8ETS'
		},
		startDate: '04/19/2023',
		endDate: '05/16/2024',
		skills: ['Cloud Services', 'API Development', 'SQL'],
		title: 'Help API Development in Content Management System',
		description:
			'You will begin by API Development within the Content Management System. Following initial steps, you should SQL to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 50,
		assignedTo: 68
	},
	{
		id: 271,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Development',
			supportCase: 'SBZOV82LJ2'
		},
		startDate: '04/20/2023',
		endDate: '04/30/2024',
		skills: ['Python', 'Data Encryption', 'Regulatory Compliance', 'Inventory Database'],
		title: 'Support Data Encryption in Data Cleansing',
		description:
			'Your main task will be Inventory Database within the Data Cleansing. Your next steps should include Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 54,
		assignedTo: 89
	},
	{
		id: 272,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'UAT',
			supportCase: 'SBV4NC4C0P'
		},
		startDate: '05/05/2023',
		endDate: '05/09/2024',
		skills: ['Network Security', 'Data Analysis', 'HIPAA Compliance'],
		title: 'Optimize HIPAA Compliance in Internal Communication Tool',
		description:
			'Your main task will be Network Security within the Internal Communication Tool. Your next steps should include Data Analysis to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 58,
		assignedTo: 71
	},
	{
		id: 273,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SBGVEAOXWQ'
		},
		startDate: '03/30/2023',
		endDate: '04/27/2024',
		skills: [
			'Python',
			'Network Security',
			'Client Communication',
			'JavaScript',
			'Analytics',
			'Report Generation',
			'HIPAA Compliance'
		],
		title: 'Help Analytics in Customer Engagement Platform',
		description:
			'You will begin by HIPAA Compliance within the Customer Engagement Platform. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 59,
		assignedTo: 77
	},
	{
		id: 274,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Development',
			supportCase: 'SB6U88K41I'
		},
		startDate: '11/16/2023',
		endDate: '05/18/2024',
		skills: [
			'Network Security',
			'SQL',
			'Business Intelligence',
			'Cloud Services',
			'Audit Trail Management',
			'Data Visualization',
			'Client Communication'
		],
		title: 'Resolve Business Intelligence in Multi-Tenant Systems',
		description:
			'Your main task will be Cloud Services within the Multi-Tenant Systems. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Focus also on Data Visualization to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 60,
		assignedTo: 92
	},
	{
		id: 275,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Third-Party API Integrations',
			projectCode: 'Discovery',
			supportCase: 'SBU2RROGMQ'
		},
		startDate: '08/21/2023',
		endDate: '05/03/2024',
		skills: [
			'Client Communication',
			'Report Generation',
			'Data Encryption',
			'E-commerce Security',
			'Cloud Services',
			'System Architecture'
		],
		title: 'Third-Party API Integrations Needs Client Communication Fixed',
		description:
			'Your main task will be Cloud Services within the Third-Party API Integrations. Your next steps should include Report Generation to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 65,
		assignedTo: 96
	},
	{
		id: 276,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Support',
			supportCase: 'SBI58PPRWP'
		},
		startDate: '09/24/2023',
		endDate: '05/14/2024',
		skills: [
			'Client Communication',
			'Analytics',
			'Inventory Database',
			'Performance Tuning',
			'Business Intelligence',
			'Network Security'
		],
		title: 'Support Inventory Database in Visualization of Data Insights',
		description:
			'We aim to Analytics within the Visualization of Data Insights. Following initial steps, you should Network Security to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 46,
		assignedTo: 7
	},
	{
		id: 277,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Support',
			supportCase: 'SB02IV25DM'
		},
		startDate: '10/15/2023',
		endDate: '05/26/2024',
		skills: ['UI/UX Design', 'Backend Development', 'Python'],
		title: 'Create UI/UX Design in Predictive Analytics Modeling',
		description:
			'This task involves Backend Development within the Predictive Analytics Modeling. From there, move on to Backend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 61,
		assignedTo: 81
	},
	{
		id: 278,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBIROO2A2Q'
		},
		startDate: '07/10/2023',
		endDate: '05/10/2024',
		skills: [
			'Network Security',
			'E-commerce Security',
			'Inventory Database',
			'Cloud Services',
			'JavaScript',
			'Performance Tuning'
		],
		title: 'Implement E-commerce Security in Building Maintenance App',
		description:
			'Your main task will be JavaScript within the Building Maintenance App. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 47,
		assignedTo: 8
	},
	{
		id: 279,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SBG5I13P20'
		},
		startDate: '01/28/2024',
		endDate: '05/04/2024',
		skills: [
			'UI/UX Design',
			'Data Analysis',
			'Audit Trail Management',
			'Payment Solutions',
			'HIPAA Compliance',
			'Analytics'
		],
		title: 'Adjust Payment Solutions in Web Performance Monitoring',
		description:
			'This task involves UI/UX Design within the Web Performance Monitoring. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 73,
		assignedTo: 104
	},
	{
		id: 280,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Dynamic Pricing Engine',
			projectCode: 'Project Management',
			supportCase: 'SBVRVAGZ0Y'
		},
		startDate: '11/18/2023',
		endDate: '05/26/2024',
		skills: ['Analytics', 'Regulatory Compliance', 'Data Visualization', 'Report Generation'],
		title: 'Resolve Regulatory Compliance in Dynamic Pricing Engine',
		description:
			'This task involves Report Generation within the Dynamic Pricing Engine. Following initial steps, you should Report Generation to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 51,
		assignedTo: null
	},
	{
		id: 281,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Testing',
			supportCase: 'SB243LTM6R'
		},
		startDate: '01/18/2024',
		endDate: '05/05/2024',
		skills: [
			'API Development',
			'Data Encryption',
			'E-commerce Security',
			'Inventory Database',
			'Report Generation'
		],
		title: 'Front-end Development Needs Data Encryption Fixed',
		description:
			'We aim to Report Generation within the Front-end Development. Your next steps should include Data Encryption to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 62,
		assignedTo: null
	},
	{
		id: 282,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Third-Party API Integrations',
			projectCode: 'Development',
			supportCase: 'SBYDW8XKHK'
		},
		startDate: '10/24/2023',
		endDate: '05/06/2024',
		skills: [
			'Regulatory Compliance',
			'E-commerce Security',
			'Data Visualization',
			'Performance Tuning'
		],
		title: 'Create Regulatory Compliance in Third-Party API Integrations',
		description:
			'This task involves Regulatory Compliance within the Third-Party API Integrations. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Focus also on E-commerce Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 53,
		assignedTo: 9
	},
	{
		id: 283,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Development',
			supportCase: 'SBXE95IEXQ'
		},
		startDate: '01/19/2024',
		endDate: '05/05/2024',
		skills: ['HIPAA Compliance', 'E-commerce Security', 'Client Communication'],
		title: 'Create Client Communication in Cloud Data Solutions',
		description:
			'Your main task will be Client Communication within the Cloud Data Solutions. From there, move on to HIPAA Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 55,
		assignedTo: 11
	},
	{
		id: 284,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Requirements',
			supportCase: 'SB87EH2F5E'
		},
		startDate: '01/18/2024',
		endDate: '05/26/2024',
		skills: [
			'E-commerce Security',
			'Business Intelligence',
			'Database Management',
			'User Testing',
			'Healthcare IT',
			'Inventory Database'
		],
		title: 'Resolve Business Intelligence in Customer Engagement Platform',
		description:
			'You will begin by Business Intelligence within the Customer Engagement Platform. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on E-commerce Security to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 56,
		assignedTo: null
	},
	{
		id: 285,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Testing',
			supportCase: 'SBTLPYG59D'
		},
		startDate: '08/15/2023',
		endDate: '05/05/2024',
		skills: ['Python', 'Frontend Development', 'Payment Solutions'],
		title: 'Create Frontend Development in Material Specification Tool',
		description:
			'The focus is on Frontend Development within the Material Specification Tool. Once completed, proceed to Frontend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 66,
		assignedTo: 86
	},
	{
		id: 286,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SB3QMUFEOD'
		},
		startDate: '07/06/2023',
		endDate: '05/05/2024',
		skills: [
			'E-commerce Security',
			'Regulatory Compliance',
			'Data Visualization',
			'Healthcare IT',
			'UI/UX Design'
		],
		title: 'Adjust UI/UX Design in Mobile Application Framework',
		description:
			'The focus is on Data Visualization within the Mobile Application Framework. Following initial steps, you should Healthcare IT to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 57,
		assignedTo: null
	},
	{
		id: 287,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SBL71RC1CV'
		},
		startDate: '08/16/2023',
		endDate: '05/05/2024',
		skills: ['C#', 'Audit Trail Management', 'Data Visualization'],
		title: 'Help Audit Trail Management in Customer Segmentation Analysis',
		description:
			'You will begin by C# within the Customer Segmentation Analysis. Following initial steps, you should Data Visualization to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 67,
		assignedTo: 87
	},
	{
		id: 288,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Project Management',
			supportCase: 'SBLJ8UMDTO'
		},
		startDate: '03/25/2024',
		endDate: '05/24/2024',
		skills: [
			'Business Intelligence',
			'Data Encryption',
			'Cloud Services',
			'Audit Trail Management',
			'Data Analysis',
			'Data Visualization',
			'C#'
		],
		title: 'Audience Analytics Needs Audit Trail Management Fixed',
		description:
			'We aim to Business Intelligence within the Audience Analytics. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 64,
		assignedTo: 12
	},
	{
		id: 289,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Development',
			supportCase: 'SBDR97ORUO'
		},
		startDate: '06/25/2023',
		endDate: '05/25/2024',
		skills: [
			'Cloud Services',
			'Regulatory Compliance',
			'Client Communication',
			'SQL',
			'E-commerce Security',
			'Report Generation'
		],
		title: 'Resolve Report Generation in Cloud Data Solutions',
		description:
			'The objective here is Client Communication within the Cloud Data Solutions. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Focus also on SQL to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 68,
		assignedTo: 88
	},
	{
		id: 290,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Testing',
			supportCase: 'SBRMNUAGET'
		},
		startDate: '03/19/2024',
		endDate: '05/04/2024',
		skills: [
			'HIPAA Compliance',
			'Data Visualization',
			'Operational Efficiency',
			'Healthcare IT',
			'E-commerce Security',
			'Payment Solutions',
			'Performance Tuning'
		],
		title: 'Help Data Visualization in Building Maintenance App',
		description:
			'The objective here is Healthcare IT within the Building Maintenance App. Once completed, proceed to Performance Tuning to enhance overall outcomes. Focus also on Operational Efficiency to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 69,
		assignedTo: 15
	},
	{
		id: 291,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Support',
			supportCase: 'SBTVMDFDHJ'
		},
		startDate: '10/25/2023',
		endDate: '05/20/2024',
		skills: [
			'System Architecture',
			'Inventory Database',
			'Analytics',
			'Report Generation',
			'Audit Trail Management',
			'Regulatory Compliance'
		],
		title: 'Resolve Regulatory Compliance in Client Onboarding Process',
		description:
			'We aim to Analytics within the Client Onboarding Process. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Focus also on Report Generation to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 70,
		assignedTo: 34
	},
	{
		id: 292,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SBHSZK428P'
		},
		startDate: '04/25/2024',
		endDate: '05/02/2024',
		skills: [
			'API Development',
			'Regulatory Compliance',
			'E-commerce Security',
			'SQL',
			'Data Visualization',
			'Inventory Database'
		],
		title: 'Support SQL in Social Media Integration',
		description:
			'The focus is on Data Visualization within the Social Media Integration. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 71,
		assignedTo: 19
	},
	{
		id: 293,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Development',
			supportCase: 'SB2IXW0IXP'
		},
		startDate: '04/09/2024',
		endDate: '05/19/2024',
		skills: [
			'Inventory Database',
			'Database Management',
			'Payment Solutions',
			'Supply Chain Management',
			'SQL',
			'Report Generation'
		],
		title: 'Help Supply Chain Management in Front-end Development',
		description:
			'We aim to Inventory Database within the Front-end Development. Your next steps should include Supply Chain Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 72,
		assignedTo: 94
	},
	{
		id: 294,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Testing',
			supportCase: 'SBLFJPDG89'
		},
		startDate: '05/08/2023',
		endDate: '05/13/2024',
		skills: [
			'Network Security',
			'HIPAA Compliance',
			'SQL',
			'Regulatory Compliance',
			'Inventory Database',
			'E-commerce Security',
			'Analytics'
		],
		title: 'Responsive Web Design Needs Inventory Database Fixed',
		description:
			'This task involves Network Security within the Responsive Web Design. From there, move on to HIPAA Compliance to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 74,
		assignedTo: null
	},
	{
		id: 295,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Support',
			supportCase: 'SBTOBJ2K1A'
		},
		startDate: '05/05/2023',
		endDate: '05/16/2024',
		skills: [
			'UI/UX Design',
			'E-commerce Security',
			'Analytics',
			'C#',
			'User Testing',
			'Database Management',
			'Regulatory Compliance'
		],
		title: 'Create C# in Supply Chain Management System',
		description:
			'The focus is on E-commerce Security within the Supply Chain Management System. Your next steps should include C# to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 78,
		assignedTo: 101
	},
	{
		id: 296,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Support',
			supportCase: 'SBPX6G2YA2'
		},
		startDate: '09/11/2023',
		endDate: '05/12/2024',
		skills: [
			'Network Security',
			'SQL',
			'Supply Chain Management',
			'System Architecture',
			'Data Analysis',
			'Cloud Services'
		],
		title: 'Internal Communication Tool Needs Network Security Fixed',
		description:
			'The focus is on System Architecture within the Internal Communication Tool. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 75,
		assignedTo: 20
	},
	{
		id: 297,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SB68ZQIJSV'
		},
		startDate: '05/14/2023',
		endDate: '04/28/2024',
		skills: [
			'Audit Trail Management',
			'C#',
			'Regulatory Compliance',
			'Data Encryption',
			'JavaScript',
			'System Architecture'
		],
		title: 'Fix JavaScript in Data Reporting Tools',
		description:
			'The focus is on System Architecture within the Data Reporting Tools. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 76,
		assignedTo: 21
	},
	{
		id: 298,
		role: 'Associate',
		team: 2,
		status: 'Cancelled',
		hours: 9,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Project Management',
			supportCase: 'SBWBI7LKT9'
		},
		startDate: '02/10/2024',
		endDate: '05/22/2024',
		skills: ['Payment Solutions', 'SQL', 'Regulatory Compliance'],
		title: 'Resolve SQL in SaaS Platform Integration',
		description:
			'The focus is on SQL within the SaaS Platform Integration. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 77,
		assignedTo: 22
	},
	{
		id: 299,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'UAT',
			supportCase: 'SBYZVEJDY9'
		},
		startDate: '02/29/2024',
		endDate: '05/11/2024',
		skills: [
			'SQL',
			'Business Intelligence',
			'Regulatory Compliance',
			'Supply Chain Management',
			'Backend Development',
			'Payment Solutions',
			'Audit Trail Management'
		],
		title: 'Retail Management Suite Needs Regulatory Compliance Fixed',
		description:
			'You will begin by Audit Trail Management within the Retail Management Suite. Following initial steps, you should Backend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 79,
		assignedTo: 95
	},
	{
		id: 300,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Testing',
			supportCase: 'SBNJRZWEDJ'
		},
		startDate: '01/27/2024',
		endDate: '05/13/2024',
		skills: [
			'Inventory Database',
			'Network Security',
			'Report Generation',
			'Audit Trail Management',
			'Data Encryption',
			'Payment Solutions'
		],
		title: 'Help Inventory Database in Product Customization Tool',
		description:
			'The focus is on Audit Trail Management within the Product Customization Tool. Following initial steps, you should Network Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 81,
		assignedTo: 97
	},
	{
		id: 301,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Testing',
			supportCase: 'SBBPVIDAXP'
		},
		startDate: '05/30/2023',
		endDate: '04/30/2024',
		skills: [
			'SQL',
			'Inventory Database',
			'Operational Efficiency',
			'API Development',
			'E-commerce Security',
			'Analytics',
			'Cloud Services'
		],
		title: 'Fix Analytics in Digital Catalogue',
		description:
			'The focus is on SQL within the Digital Catalogue. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on E-commerce Security to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 80,
		assignedTo: 27
	},
	{
		id: 302,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Testing',
			supportCase: 'SBYADUO94V'
		},
		startDate: '08/16/2023',
		endDate: '05/09/2024',
		skills: ['Data Visualization', 'Frontend Development', 'Python', 'Payment Solutions'],
		title: 'Support Frontend Development in Social Media Integration',
		description:
			'You will begin by Python within the Social Media Integration. From there, move on to Python to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 82,
		assignedTo: 29
	},
	{
		id: 303,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Support',
			supportCase: 'SBWMW1YX7E'
		},
		startDate: '07/29/2023',
		endDate: '05/18/2024',
		skills: [
			'JavaScript',
			'Analytics',
			'Business Intelligence',
			'Regulatory Compliance',
			'Operational Efficiency',
			'Healthcare IT',
			'Report Generation'
		],
		title: 'Resolve Business Intelligence in Health Records Integration',
		description:
			'Your main task will be Operational Efficiency within the Health Records Integration. Your next steps should include Analytics to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 83,
		assignedTo: 98
	},
	{
		id: 304,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBFO7C9LXR'
		},
		startDate: '08/19/2023',
		endDate: '05/08/2024',
		skills: [
			'SQL',
			'Performance Tuning',
			'Data Encryption',
			'API Development',
			'E-commerce Security',
			'JavaScript',
			'Audit Trail Management'
		],
		title: 'Help Audit Trail Management in Real-Time Data Analysis',
		description:
			'Your main task will be Audit Trail Management within the Real-Time Data Analysis. Subsequently, your efforts will involve API Development to enhance overall outcomes. Focus also on JavaScript to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 84,
		assignedTo: null
	},
	{
		id: 305,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBVZ9ND2CR'
		},
		startDate: '02/01/2024',
		endDate: '04/30/2024',
		skills: [
			'Analytics',
			'Payment Solutions',
			'Data Visualization',
			'System Architecture',
			'Supply Chain Management',
			'API Development'
		],
		title: 'Support Analytics in Visualization of Data Insights',
		description:
			'Your main task will be API Development within the Visualization of Data Insights. Your next steps should include Supply Chain Management to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 85,
		assignedTo: 32
	},
	{
		id: 306,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'UAT',
			supportCase: 'SBXLUTWF0C'
		},
		startDate: '02/08/2024',
		endDate: '05/02/2024',
		skills: ['SQL', 'HIPAA Compliance', 'Analytics', 'Cloud Services', 'Python'],
		title: 'Resolve HIPAA Compliance in Customer Data Platform',
		description:
			'This task involves Cloud Services within the Customer Data Platform. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 90,
		assignedTo: 17
	},
	{
		id: 307,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Support',
			supportCase: 'SBA3SZKL7M'
		},
		startDate: '04/14/2023',
		endDate: '05/28/2024',
		skills: [
			'Client Communication',
			'Supply Chain Management',
			'SQL',
			'Python',
			'API Development',
			'Data Analysis',
			'E-commerce Security'
		],
		title: 'Responsive Web Design Needs Python Fixed',
		description:
			'The objective here is Supply Chain Management within the Responsive Web Design. From there, move on to Python to enhance overall outcomes. Focus also on Supply Chain Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 89,
		assignedTo: 105
	},
	{
		id: 308,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Development',
			supportCase: 'SB4ISV586D'
		},
		startDate: '09/23/2023',
		endDate: '05/22/2024',
		skills: [
			'UI/UX Design',
			'Report Generation',
			'Frontend Development',
			'HIPAA Compliance',
			'Backend Development',
			'Operational Efficiency'
		],
		title: 'Data Cleansing Needs Backend Development Fixed',
		description:
			'This task involves HIPAA Compliance within the Data Cleansing. Following initial steps, you should UI/UX Design to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 92,
		assignedTo: 108
	},
	{
		id: 309,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SBHMP47YAO'
		},
		startDate: '09/04/2023',
		endDate: '05/20/2024',
		skills: [
			'Operational Efficiency',
			'Analytics',
			'Inventory Database',
			'SQL',
			'Data Encryption',
			'Payment Solutions',
			'Supply Chain Management'
		],
		title: 'Implement Data Encryption in Social Media Integration',
		description:
			'This task involves Analytics within the Social Media Integration. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 86,
		assignedTo: null
	},
	{
		id: 310,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Project Management',
			supportCase: 'SBF5S2YVIK'
		},
		startDate: '01/03/2024',
		endDate: '05/02/2024',
		skills: [
			'Network Security',
			'Data Visualization',
			'Data Analysis',
			'Performance Tuning',
			'API Development'
		],
		title: 'Resolve Network Security in Project Cost Tracking',
		description:
			'Your main task will be Performance Tuning within the Project Cost Tracking. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 87,
		assignedTo: null
	},
	{
		id: 311,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'UAT',
			supportCase: 'SB513UXJ2O'
		},
		startDate: '10/06/2023',
		endDate: '05/12/2024',
		skills: [
			'Frontend Development',
			'Audit Trail Management',
			'Report Generation',
			'JavaScript',
			'Client Communication',
			'E-commerce Security'
		],
		title: 'Product Design Simulation Needs Frontend Development Fixed',
		description:
			'We aim to Audit Trail Management within the Product Design Simulation. Your next steps should include E-commerce Security to enhance overall outcomes. Focus also on Audit Trail Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 88,
		assignedTo: 99
	},
	{
		id: 312,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'UAT',
			supportCase: 'SBHBR67RYX'
		},
		startDate: '07/08/2023',
		endDate: '05/27/2024',
		skills: ['Analytics', 'SQL', 'Network Security', 'Cloud Services'],
		title: 'Transaction Processing System Needs Network Security Fixed',
		description:
			'The focus is on Network Security within the Transaction Processing System. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Focus also on Network Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 91,
		assignedTo: null
	},
	{
		id: 313,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SBT64FQAM4'
		},
		startDate: '11/07/2023',
		endDate: '05/18/2024',
		skills: ['SQL', 'Audit Trail Management', 'Performance Tuning', 'C#', 'Network Security'],
		title: 'Optimize Network Security in Social Media Integration',
		description:
			'You will begin by SQL within the Social Media Integration. Once completed, proceed to C# to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 93,
		assignedTo: 33
	},
	{
		id: 314,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'UAT',
			supportCase: 'SB6EHRC8RB'
		},
		startDate: '07/07/2023',
		endDate: '05/24/2024',
		skills: [
			'Data Analysis',
			'HIPAA Compliance',
			'Audit Trail Management',
			'Backend Development',
			'Inventory Database'
		],
		title: 'Adjust Backend Development in Internal Communication Tool',
		description:
			'The focus is on Backend Development within the Internal Communication Tool. Once completed, proceed to Inventory Database to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 94,
		assignedTo: 35
	},
	{
		id: 315,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SB7B2KJ0FY'
		},
		startDate: '04/22/2023',
		endDate: '05/25/2024',
		skills: [
			'SQL',
			'Inventory Database',
			'System Architecture',
			'Data Analysis',
			'Audit Trail Management'
		],
		title: 'Adjust Data Analysis in Point of Sale System',
		description:
			'Your main task will be System Architecture within the Point of Sale System. Following initial steps, you should Data Analysis to enhance overall outcomes. Focus also on SQL to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 95,
		assignedTo: 38
	},
	{
		id: 316,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Support',
			supportCase: 'SBZ0L2K4KF'
		},
		startDate: '06/29/2023',
		endDate: '04/28/2024',
		skills: [
			'Data Visualization',
			'Business Intelligence',
			'SQL',
			'Python',
			'UI/UX Design',
			'Client Communication',
			'Healthcare IT'
		],
		title: 'Create UI/UX Design in Lead Tracking Software',
		description:
			'You will begin by Business Intelligence within the Lead Tracking Software. Following initial steps, you should Data Visualization to enhance overall outcomes. Focus also on Python to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 96,
		assignedTo: 2
	},
	{
		id: 317,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Support',
			supportCase: 'SB4Q5HMSB0'
		},
		startDate: '09/22/2023',
		endDate: '04/30/2024',
		skills: ['Payment Solutions', 'Data Analysis', 'Analytics', 'E-commerce Security'],
		title: 'Adjust Data Analysis in Social Media Integration',
		description:
			'We aim to E-commerce Security within the Social Media Integration. From there, move on to Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 97,
		assignedTo: 40
	},
	{
		id: 318,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Support',
			supportCase: 'SBWPBM321I'
		},
		startDate: '12/09/2023',
		endDate: '05/01/2024',
		skills: ['Data Analysis', 'Inventory Database', 'Healthcare IT', 'E-commerce Security'],
		title: 'Adjust Inventory Database in Risk Assessment Software',
		description:
			'We aim to E-commerce Security within the Risk Assessment Software. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 98,
		assignedTo: 41
	},
	{
		id: 319,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'UAT',
			supportCase: 'SBT3THUDZW'
		},
		startDate: '02/10/2024',
		endDate: '05/27/2024',
		skills: [
			'Analytics',
			'Supply Chain Management',
			'System Architecture',
			'Cloud Services',
			'Data Visualization',
			'Client Communication',
			'API Development'
		],
		title: 'Create API Development in Point of Sale System',
		description:
			'We aim to Client Communication within the Point of Sale System. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Focus also on Data Visualization to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 99,
		assignedTo: 46
	},
	{
		id: 320,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Project Management',
			supportCase: 'SBCHR9J5EV'
		},
		startDate: '08/02/2023',
		endDate: '05/23/2024',
		skills: ['Data Analysis', 'Audit Trail Management', 'Performance Tuning', 'Healthcare IT'],
		title: 'Fix Data Analysis in Predictive Analytics Modeling',
		description:
			'You will begin by Audit Trail Management within the Predictive Analytics Modeling. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on Audit Trail Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 100,
		assignedTo: null
	},
	{
		id: 321,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Development',
			supportCase: 'SBE93WCEUR'
		},
		startDate: '08/19/2023',
		endDate: '05/11/2024',
		skills: [
			'Inventory Database',
			'E-commerce Security',
			'Performance Tuning',
			'Frontend Development'
		],
		title: 'Optimize Performance Tuning in Database Optimization',
		description:
			'Your main task will be E-commerce Security within the Database Optimization. Your next steps should include Inventory Database to enhance overall outcomes. Focus also on Performance Tuning to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 101,
		assignedTo: 47
	},
	{
		id: 322,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SB2KHY301G'
		},
		startDate: '05/24/2023',
		endDate: '04/30/2024',
		skills: [
			'Payment Solutions',
			'Client Communication',
			'Audit Trail Management',
			'HIPAA Compliance',
			'Business Intelligence',
			'Frontend Development',
			'User Testing'
		],
		title: 'Insurance Claim Automation Needs Business Intelligence Fixed',
		description:
			'We aim to Frontend Development within the Insurance Claim Automation. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on Business Intelligence to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 102,
		assignedTo: 51
	},
	{
		id: 323,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Development',
			supportCase: 'SBV3HZUH6G'
		},
		startDate: '12/31/2023',
		endDate: '05/04/2024',
		skills: ['C#', 'Network Security', 'Regulatory Compliance'],
		title: 'Fix Network Security in Client Reporting System',
		description:
			'We aim to C# within the Client Reporting System. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: 109
	},
	{
		id: 324,
		role: 'Manager',
		team: 1,
		status: 'Completed',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Development',
			supportCase: 'SBB3FB5PYP'
		},
		startDate: '05/09/2023',
		endDate: '05/14/2024',
		skills: [
			'Supply Chain Management',
			'Analytics',
			'Payment Solutions',
			'JavaScript',
			'Business Intelligence'
		],
		title: 'Digital Distribution Network Needs Payment Solutions Fixed',
		description:
			'This task involves Business Intelligence within the Digital Distribution Network. From there, move on to JavaScript to enhance overall outcomes. Focus also on JavaScript to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 104,
		assignedTo: null
	},
	{
		id: 325,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SBTQMZ85YI'
		},
		startDate: '09/15/2023',
		endDate: '04/28/2024',
		skills: [
			'Supply Chain Management',
			'Client Communication',
			'Analytics',
			'API Development',
			'Regulatory Compliance',
			'Cloud Services',
			'Python'
		],
		title: 'Web Application Security Needs Client Communication Fixed',
		description:
			'We aim to Cloud Services within the Web Application Security. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 105,
		assignedTo: 53
	},
	{
		id: 326,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SBD254RO5F'
		},
		startDate: '11/25/2023',
		endDate: '05/07/2024',
		skills: [
			'Data Analysis',
			'Performance Tuning',
			'API Development',
			'SQL',
			'Report Generation',
			'Data Encryption',
			'HIPAA Compliance'
		],
		title: 'Adjust Data Encryption in Insurance Claim Automation',
		description:
			'The objective here is Report Generation within the Insurance Claim Automation. From there, move on to Data Analysis to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 106,
		assignedTo: 55
	},
	{
		id: 327,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Project Management',
			supportCase: 'SBLLCURGP8'
		},
		startDate: '07/25/2023',
		endDate: '05/02/2024',
		skills: ['Business Intelligence', 'Data Encryption', 'Analytics'],
		title: 'Adjust Business Intelligence in Enterprise Resource Planning',
		description:
			'The objective here is Business Intelligence within the Enterprise Resource Planning. Your next steps should include Data Encryption to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 108,
		assignedTo: 4
	},
	{
		id: 328,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SB52KK3TFP'
		},
		startDate: '06/04/2023',
		endDate: '05/08/2024',
		skills: ['Data Analysis', 'API Development', 'Client Communication', 'Data Visualization'],
		title: 'Resolve Data Analysis in Enterprise Resource Planning',
		description:
			'You will begin by Client Communication within the Enterprise Resource Planning. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 109,
		assignedTo: 13
	},
	{
		id: 329,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'UAT',
			supportCase: 'SB6NC0SR6V'
		},
		startDate: '09/04/2023',
		endDate: '05/14/2024',
		skills: [
			'Client Communication',
			'Performance Tuning',
			'Network Security',
			'HIPAA Compliance',
			'Report Generation',
			'Audit Trail Management'
		],
		title: 'Resolve Network Security in Responsive Web Design',
		description:
			'The focus is on Client Communication within the Responsive Web Design. Once completed, proceed to Client Communication to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 107,
		assignedTo: 56
	},
	{
		id: 330,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SBJ2CGQ4J7'
		},
		startDate: '09/13/2023',
		endDate: '05/22/2024',
		skills: ['HIPAA Compliance', 'Data Visualization', 'SQL'],
		title: 'Digital Catalogue Needs Data Visualization Fixed',
		description:
			'The focus is on HIPAA Compliance within the Digital Catalogue. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Focus also on SQL to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 110,
		assignedTo: 16
	},
	{
		id: 331,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SB2S8Q6SJT'
		},
		startDate: '01/05/2024',
		endDate: '05/02/2024',
		skills: [
			'Frontend Development',
			'Audit Trail Management',
			'Regulatory Compliance',
			'Healthcare IT',
			'Data Visualization'
		],
		title: 'Optimize Data Visualization in Visualization of Data Insights',
		description:
			'You will begin by Healthcare IT within the Visualization of Data Insights. Subsequently, your efforts will involve Frontend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 1,
		assignedTo: null
	},
	{
		id: 332,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Development',
			supportCase: 'SBFQVFTV4L'
		},
		startDate: '04/21/2023',
		endDate: '05/07/2024',
		skills: [
			'Regulatory Compliance',
			'Python',
			'Data Encryption',
			'System Architecture',
			'Business Intelligence',
			'SQL'
		],
		title: 'Support Regulatory Compliance in Payment Gateway Integration',
		description:
			'The focus is on Business Intelligence within the Payment Gateway Integration. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 6,
		assignedTo: 110
	},
	{
		id: 333,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SB6OCTC9WM'
		},
		startDate: '08/11/2023',
		endDate: '04/29/2024',
		skills: ['Data Analysis', 'HIPAA Compliance', 'Database Management', 'Client Communication'],
		title: 'Resolve Client Communication in Client Reporting System',
		description:
			'The focus is on Client Communication within the Client Reporting System. From there, move on to Database Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 10,
		assignedTo: null
	},
	{
		id: 334,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Support',
			supportCase: 'SBP6YIXX0T'
		},
		startDate: '10/10/2023',
		endDate: '05/28/2024',
		skills: ['Data Encryption', 'Report Generation', 'SQL'],
		title: 'Resolve SQL in Responsive Web Design',
		description:
			'The objective here is SQL within the Responsive Web Design. From there, move on to Data Encryption to enhance overall outcomes. Focus also on Report Generation to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 2,
		assignedTo: 57
	},
	{
		id: 335,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'UAT',
			supportCase: 'SBJT2FELWN'
		},
		startDate: '01/01/2024',
		endDate: '05/28/2024',
		skills: [
			'Report Generation',
			'UI/UX Design',
			'Backend Development',
			'Supply Chain Management',
			'Frontend Development',
			'E-commerce Security',
			'Database Management'
		],
		title: 'Support Report Generation in Client Onboarding Process',
		description:
			'The objective here is Frontend Development within the Client Onboarding Process. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 4,
		assignedTo: null
	},
	{
		id: 336,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Testing',
			supportCase: 'SBUG5O8IGR'
		},
		startDate: '10/18/2023',
		endDate: '05/04/2024',
		skills: [
			'Regulatory Compliance',
			'Supply Chain Management',
			'E-commerce Security',
			'Network Security'
		],
		title: 'Adjust Network Security in Sales Dashboard',
		description:
			'We aim to Network Security within the Sales Dashboard. Your next steps should include Regulatory Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 13,
		assignedTo: null
	},
	{
		id: 337,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SB5EW7QSU3'
		},
		startDate: '06/03/2023',
		endDate: '05/06/2024',
		skills: [
			'Business Intelligence',
			'Analytics',
			'SQL',
			'Report Generation',
			'Data Visualization'
		],
		title: 'Fix Data Visualization in Web Performance Monitoring',
		description:
			'Your main task will be Analytics within the Web Performance Monitoring. From there, move on to SQL to enhance overall outcomes. Focus also on Data Visualization to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 14,
		assignedTo: 24
	},
	{
		id: 338,
		role: 'Manager',
		team: 2,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SB98ZC5Y0I'
		},
		startDate: '06/30/2023',
		endDate: '05/07/2024',
		skills: ['Frontend Development', 'Audit Trail Management', 'Business Intelligence'],
		title: 'Product Design Simulation Needs Business Intelligence Fixed',
		description:
			'The objective here is Audit Trail Management within the Product Design Simulation. Following initial steps, you should Frontend Development to enhance overall outcomes. Focus also on Frontend Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 17,
		assignedTo: 36
	},
	{
		id: 339,
		role: 'Manager',
		team: 2,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Testing',
			supportCase: 'SBSKI433Y7'
		},
		startDate: '04/03/2024',
		endDate: '05/26/2024',
		skills: ['Data Visualization', 'UI/UX Design', 'Payment Solutions'],
		title: 'Efficiency Audit Tools Needs UI/UX Design Fixed',
		description:
			'You will begin by UI/UX Design within the Efficiency Audit Tools. Once completed, proceed to UI/UX Design to enhance overall outcomes. Focus also on Data Visualization to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 23,
		assignedTo: 70
	},
	{
		id: 340,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Development',
			supportCase: 'SBB1O6500Q'
		},
		startDate: '10/26/2023',
		endDate: '05/18/2024',
		skills: [
			'Supply Chain Management',
			'SQL',
			'Audit Trail Management',
			'JavaScript',
			'Network Security',
			'Analytics'
		],
		title: 'Fix SQL in Digital Distribution Network',
		description:
			'The focus is on JavaScript within the Digital Distribution Network. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on JavaScript to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 18,
		assignedTo: 1
	},
	{
		id: 341,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Testing',
			supportCase: 'SB9CJBDAAJ'
		},
		startDate: '12/08/2023',
		endDate: '05/18/2024',
		skills: [
			'Business Intelligence',
			'Operational Efficiency',
			'UI/UX Design',
			'E-commerce Security',
			'User Testing',
			'SQL'
		],
		title: 'Resolve User Testing in Customer Loyalty Programs',
		description:
			'We aim to Business Intelligence within the Customer Loyalty Programs. From there, move on to Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 3,
		assignedTo: 64
	},
	{
		id: 342,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Support',
			supportCase: 'SB9URH79DH'
		},
		startDate: '01/30/2024',
		endDate: '05/08/2024',
		skills: ['Python', 'UI/UX Design', 'Regulatory Compliance', 'Inventory Database'],
		title: 'Fix Regulatory Compliance in Mobile UX/UI Upgrade',
		description:
			'We aim to Inventory Database within the Mobile UX/UI Upgrade. Your next steps should include Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 25,
		assignedTo: 6
	},
	{
		id: 343,
		role: 'Supervisor',
		team: 2,
		status: 'Sign-off',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Support',
			supportCase: 'SBKJS21FXG'
		},
		startDate: '07/12/2023',
		endDate: '04/28/2024',
		skills: ['Payment Solutions', 'E-commerce Security', 'C#', 'Python'],
		title: 'Create E-commerce Security in Safety Compliance Check',
		description:
			'This task involves Payment Solutions within the Safety Compliance Check. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 28,
		assignedTo: 10
	},
	{
		id: 344,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Support',
			supportCase: 'SBF4CAN1DL'
		},
		startDate: '11/07/2023',
		endDate: '05/18/2024',
		skills: [
			'Audit Trail Management',
			'Data Analysis',
			'Data Visualization',
			'Operational Efficiency',
			'Report Generation'
		],
		title: 'Create Report Generation in Responsive Web Design',
		description:
			'Your main task will be Data Visualization within the Responsive Web Design. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Focus also on Audit Trail Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 5,
		assignedTo: 69
	},
	{
		id: 345,
		role: 'Manager',
		team: 1,
		status: 'Cancelled',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SBBG8JU6TP'
		},
		startDate: '07/18/2023',
		endDate: '05/11/2024',
		skills: [
			'Healthcare IT',
			'Analytics',
			'Payment Solutions',
			'E-commerce Security',
			'HIPAA Compliance',
			'Client Communication'
		],
		title: 'Web Application Security Needs Payment Solutions Fixed',
		description:
			'The focus is on HIPAA Compliance within the Web Application Security. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 30,
		assignedTo: 72
	},
	{
		id: 346,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SB9AYD5DD0'
		},
		startDate: '03/26/2024',
		endDate: '05/28/2024',
		skills: [
			'Client Communication',
			'Network Security',
			'Data Analysis',
			'Payment Solutions',
			'Report Generation',
			'Analytics',
			'Data Encryption'
		],
		title: 'Tenant Screening Process Needs Report Generation Fixed',
		description:
			'You will begin by Data Analysis within the Tenant Screening Process. Your next steps should include Data Analysis to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 31,
		assignedTo: 18
	},
	{
		id: 347,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Support',
			supportCase: 'SBYD5DQPQ2'
		},
		startDate: '12/27/2023',
		endDate: '05/29/2024',
		skills: ['Network Security', 'SQL', 'Healthcare IT'],
		title: 'Mobile Application Framework Needs Healthcare IT Fixed',
		description:
			'The focus is on Network Security within the Mobile Application Framework. Following initial steps, you should Healthcare IT to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 34,
		assignedTo: 31
	},
	{
		id: 348,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SB37DXU155'
		},
		startDate: '04/11/2024',
		endDate: '05/12/2024',
		skills: ['Performance Tuning', 'UI/UX Design', 'Business Intelligence', 'Inventory Database'],
		title: 'Resolve UI/UX Design in Sales Dashboard',
		description:
			'The focus is on Business Intelligence within the Sales Dashboard. Your next steps should include Performance Tuning to enhance overall outcomes. Focus also on UI/UX Design to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 7,
		assignedTo: 75
	},
	{
		id: 349,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Support',
			supportCase: 'SB1HB3Z9HB'
		},
		startDate: '05/11/2023',
		endDate: '05/13/2024',
		skills: ['Payment Solutions', 'Client Communication', 'Python'],
		title: 'Create Payment Solutions in Lead Tracking Software',
		description:
			'Your main task will be Python within the Lead Tracking Software. Once completed, proceed to Python to enhance overall outcomes. Focus also on Client Communication to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 36,
		assignedTo: 74
	},
	{
		id: 350,
		role: 'Manager',
		team: 1,
		status: 'Sign-off',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBYCZ4BFZU'
		},
		startDate: '04/12/2024',
		endDate: '05/15/2024',
		skills: ['SQL', 'Payment Solutions', 'Cloud Services'],
		title: 'Help Cloud Services in Building Maintenance App',
		description:
			'Your main task will be SQL within the Building Maintenance App. Your next steps should include SQL to enhance overall outcomes. Focus also on Cloud Services to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 39,
		assignedTo: 78
	},
	{
		id: 351,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SBH1VQOQC0'
		},
		startDate: '11/20/2023',
		endDate: '05/01/2024',
		skills: [
			'System Architecture',
			'Report Generation',
			'Inventory Database',
			'Client Communication',
			'Cloud Services',
			'Supply Chain Management',
			'E-commerce Security'
		],
		title: 'Adjust Inventory Database in Compliance Tracking System',
		description:
			'You will begin by Report Generation within the Compliance Tracking System. Once completed, proceed to System Architecture to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 8,
		assignedTo: 76
	},
	{
		id: 352,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Development',
			supportCase: 'SB96U1SWOI'
		},
		startDate: '07/14/2023',
		endDate: '05/21/2024',
		skills: [
			'Operational Efficiency',
			'Regulatory Compliance',
			'Cloud Services',
			'Inventory Database',
			'SQL'
		],
		title: 'Fix Regulatory Compliance in Client Reporting System',
		description:
			'Your main task will be SQL within the Client Reporting System. Following initial steps, you should Cloud Services to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 9,
		assignedTo: 80
	},
	{
		id: 353,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 5,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Testing',
			supportCase: 'SBISUEZ1X1'
		},
		startDate: '06/10/2023',
		endDate: '05/24/2024',
		skills: [
			'Report Generation',
			'HIPAA Compliance',
			'Data Visualization',
			'Business Intelligence',
			'Frontend Development'
		],
		title: 'Point of Sale System Needs HIPAA Compliance Fixed',
		description:
			'We aim to HIPAA Compliance within the Point of Sale System. Your next steps should include Frontend Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 11,
		assignedTo: 82
	},
	{
		id: 354,
		role: 'Associate',
		team: 2,
		status: 'Cancelled',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Support',
			supportCase: 'SB1ZNGCRV0'
		},
		startDate: '12/19/2023',
		endDate: '05/12/2024',
		skills: [
			'Audit Trail Management',
			'Database Management',
			'Operational Efficiency',
			'Data Analysis'
		],
		title: 'Resolve Operational Efficiency in Health Records Integration',
		description:
			'This task involves Data Analysis within the Health Records Integration. From there, move on to Database Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 12,
		assignedTo: 91
	},
	{
		id: 355,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Development',
			supportCase: 'SB1D1YLOEU'
		},
		startDate: '03/12/2024',
		endDate: '05/10/2024',
		skills: [
			'HIPAA Compliance',
			'Business Intelligence',
			'Cloud Services',
			'Report Generation',
			'Client Communication',
			'Operational Efficiency'
		],
		title: 'Fix Report Generation in Multi-Tenant Systems',
		description:
			'Your main task will be Business Intelligence within the Multi-Tenant Systems. Following initial steps, you should Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 42,
		assignedTo: 45
	},
	{
		id: 356,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Development',
			supportCase: 'SBT7CVJ3EF'
		},
		startDate: '03/31/2023',
		endDate: '05/27/2024',
		skills: [
			'HIPAA Compliance',
			'C#',
			'Backend Development',
			'Data Visualization',
			'Healthcare IT',
			'Supply Chain Management'
		],
		title: 'Safety Compliance Check Needs C# Fixed',
		description:
			'Your main task will be C# within the Safety Compliance Check. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 63,
		assignedTo: 102
	},
	{
		id: 357,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'UAT',
			supportCase: 'SBVS7XH4J7'
		},
		startDate: '04/30/2023',
		endDate: '05/19/2024',
		skills: [
			'Inventory Database',
			'Business Intelligence',
			'Data Analysis',
			'Supply Chain Management'
		],
		title: 'Fix Data Analysis in Logistics Tracking Interface',
		description:
			'You will begin by Business Intelligence within the Logistics Tracking Interface. From there, move on to Data Analysis to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 45,
		assignedTo: 42
	},
	{
		id: 358,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SBTWLYXEYE'
		},
		startDate: '11/08/2023',
		endDate: '05/24/2024',
		skills: [
			'SQL',
			'Operational Efficiency',
			'Supply Chain Management',
			'HIPAA Compliance',
			'Healthcare IT',
			'Analytics'
		],
		title: 'Support Healthcare IT in Web Application Security',
		description:
			'The focus is on Supply Chain Management within the Web Application Security. Once completed, proceed to SQL to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 15,
		assignedTo: 93
	},
	{
		id: 359,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SBCOX1K3WE'
		},
		startDate: '10/30/2023',
		endDate: '05/02/2024',
		skills: [
			'Report Generation',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Audit Trail Management',
			'SQL'
		],
		title: 'Health Records Integration Needs Audit Trail Management Fixed',
		description:
			'You will begin by Audit Trail Management within the Health Records Integration. From there, move on to HIPAA Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 16,
		assignedTo: 100
	},
	{
		id: 360,
		role: 'Director',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SB0DGSFZOL'
		},
		startDate: '05/04/2023',
		endDate: '05/23/2024',
		skills: ['Client Communication', 'E-commerce Security', 'API Development', 'Healthcare IT'],
		title: 'Product Customization Tool Needs Healthcare IT Fixed',
		description:
			'The objective here is Client Communication within the Product Customization Tool. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on API Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 73,
		assignedTo: 28
	},
	{
		id: 361,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SBFCIYJ5Y1'
		},
		startDate: '04/17/2023',
		endDate: '05/20/2024',
		skills: [
			'Frontend Development',
			'Analytics',
			'Healthcare IT',
			'Business Intelligence',
			'Payment Solutions'
		],
		title: 'Customer Engagement Platform Needs Analytics Fixed',
		description:
			'The objective here is Analytics within the Customer Engagement Platform. Subsequently, your efforts will involve Frontend Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 19,
		assignedTo: 106
	},
	{
		id: 362,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Discovery',
			supportCase: 'SB4I5FJ3T5'
		},
		startDate: '04/11/2023',
		endDate: '05/21/2024',
		skills: ['Healthcare IT', 'Frontend Development', 'Supply Chain Management'],
		title: 'Lead Tracking Software Needs Supply Chain Management Fixed',
		description:
			'The focus is on Supply Chain Management within the Lead Tracking Software. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 20,
		assignedTo: 107
	},
	{
		id: 363,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBZ4V1OE2L'
		},
		startDate: '04/12/2023',
		endDate: '05/11/2024',
		skills: ['HIPAA Compliance', 'Performance Tuning', 'Client Communication'],
		title: 'Building Maintenance App Needs Performance Tuning Fixed',
		description:
			'This task involves HIPAA Compliance within the Building Maintenance App. From there, move on to HIPAA Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 24,
		assignedTo: 26
	},
	{
		id: 364,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Support',
			supportCase: 'SBBKREMZR5'
		},
		startDate: '03/27/2024',
		endDate: '05/22/2024',
		skills: [
			'Client Communication',
			'Analytics',
			'Business Intelligence',
			'HIPAA Compliance',
			'JavaScript'
		],
		title: 'Support JavaScript in Cloud Data Solutions',
		description:
			'The objective here is JavaScript within the Cloud Data Solutions. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 21,
		assignedTo: 3
	},
	{
		id: 365,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Requirements',
			supportCase: 'SBF656QOFE'
		},
		startDate: '03/24/2024',
		endDate: '05/17/2024',
		skills: [
			'Frontend Development',
			'Healthcare IT',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'User Testing',
			'Audit Trail Management'
		],
		title: 'Support Healthcare IT in Multi-Tenant Systems',
		description:
			'The focus is on HIPAA Compliance within the Multi-Tenant Systems. Following initial steps, you should User Testing to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 22,
		assignedTo: 5
	},
	{
		id: 366,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Development',
			supportCase: 'SBHYKL2YC7'
		},
		startDate: '11/08/2023',
		endDate: '05/18/2024',
		skills: ['Inventory Database', 'Python', 'User Testing'],
		title: 'Support User Testing in Lead Tracking Software',
		description:
			'This task involves Python within the Lead Tracking Software. Subsequently, your efforts will involve User Testing to enhance overall outcomes. Focus also on User Testing to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 26,
		assignedTo: null
	},
	{
		id: 367,
		role: 'Supervisor',
		team: 2,
		status: 'Cancelled',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'UAT',
			supportCase: 'SBCPL26VY2'
		},
		startDate: '06/13/2023',
		endDate: '05/12/2024',
		skills: ['Performance Tuning', 'Supply Chain Management', 'Inventory Database'],
		title: 'Help Supply Chain Management in Mobile UX/UI Upgrade',
		description:
			'Your main task will be Supply Chain Management within the Mobile UX/UI Upgrade. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 48,
		assignedTo: 52
	},
	{
		id: 368,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Project Management',
			supportCase: 'SB9ZT7QTQP'
		},
		startDate: '12/07/2023',
		endDate: '05/04/2024',
		skills: ['Operational Efficiency', 'Python', 'Payment Solutions'],
		title: 'Support Payment Solutions in Web Performance Monitoring',
		description:
			'Your main task will be Operational Efficiency within the Web Performance Monitoring. Following initial steps, you should Operational Efficiency to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 37,
		assignedTo: 43
	},
	{
		id: 369,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Support',
			supportCase: 'SB8UD9ABX5'
		},
		startDate: '01/30/2024',
		endDate: '05/11/2024',
		skills: [
			'Client Communication',
			'Operational Efficiency',
			'Analytics',
			'Database Management',
			'Inventory Database'
		],
		title: 'API Backend Integration Needs Operational Efficiency Fixed',
		description:
			'We aim to Inventory Database within the API Backend Integration. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 27,
		assignedTo: 7
	},
	{
		id: 370,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Project Management',
			supportCase: 'SBEGUY2MG0'
		},
		startDate: '01/06/2024',
		endDate: '05/13/2024',
		skills: [
			'Healthcare IT',
			'JavaScript',
			'Report Generation',
			'Data Encryption',
			'E-commerce Security',
			'Regulatory Compliance'
		],
		title: 'Fix JavaScript in Client Onboarding Process',
		description:
			'The objective here is E-commerce Security within the Client Onboarding Process. Subsequently, your efforts will involve E-commerce Security to enhance overall outcomes. Focus also on JavaScript to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 29,
		assignedTo: 8
	},
	{
		id: 371,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Testing',
			supportCase: 'SBX9VB7TTX'
		},
		startDate: '04/20/2023',
		endDate: '05/29/2024',
		skills: [
			'Report Generation',
			'Supply Chain Management',
			'API Development',
			'Audit Trail Management'
		],
		title: 'Optimize Audit Trail Management in Media Storage Solutions',
		description:
			'You will begin by Audit Trail Management within the Media Storage Solutions. Once completed, proceed to Supply Chain Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 52,
		assignedTo: 48
	},
	{
		id: 372,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Support',
			supportCase: 'SBEX7NNB4L'
		},
		startDate: '09/15/2023',
		endDate: '05/17/2024',
		skills: [
			'E-commerce Security',
			'Data Visualization',
			'Performance Tuning',
			'Operational Efficiency',
			'Client Communication',
			'Network Security'
		],
		title: 'Support Data Visualization in Risk Assessment Software',
		description:
			'The focus is on Client Communication within the Risk Assessment Software. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Operational Efficiency to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 43,
		assignedTo: 37
	},
	{
		id: 373,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Development',
			supportCase: 'SBTHD220BA'
		},
		startDate: '05/24/2023',
		endDate: '05/05/2024',
		skills: [
			'E-commerce Security',
			'Data Analysis',
			'Client Communication',
			'Frontend Development'
		],
		title: 'Financial Forecasting Tool Needs Frontend Development Fixed',
		description:
			'This task involves E-commerce Security within the Financial Forecasting Tool. From there, move on to Frontend Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 32,
		assignedTo: 9
	},
	{
		id: 374,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Requirements',
			supportCase: 'SBYK3LA90O'
		},
		startDate: '05/12/2023',
		endDate: '05/08/2024',
		skills: ['Database Management', 'Supply Chain Management', 'HIPAA Compliance'],
		title: 'Resolve Database Management in E-commerce SEO Optimization',
		description:
			'The objective here is Database Management within the E-commerce SEO Optimization. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 44,
		assignedTo: 49
	},
	{
		id: 375,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SBVMCNKV5G'
		},
		startDate: '11/23/2023',
		endDate: '05/22/2024',
		skills: ['Analytics', 'E-commerce Security', 'HIPAA Compliance'],
		title: 'Create HIPAA Compliance in Web Application Security',
		description:
			'You will begin by Analytics within the Web Application Security. From there, move on to Analytics to enhance overall outcomes. Focus also on Analytics to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 49,
		assignedTo: null
	},
	{
		id: 376,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SBS3LIUPYF'
		},
		startDate: '02/02/2024',
		endDate: '05/22/2024',
		skills: [
			'System Architecture',
			'Payment Solutions',
			'Performance Tuning',
			'Inventory Database'
		],
		title: 'Adjust Performance Tuning in Product Design Simulation',
		description:
			'The focus is on Payment Solutions within the Product Design Simulation. Following initial steps, you should Payment Solutions to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 33,
		assignedTo: null
	},
	{
		id: 377,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Support',
			supportCase: 'SB49T4XK1J'
		},
		startDate: '06/11/2023',
		endDate: '04/28/2024',
		skills: ['Business Intelligence', 'Database Management', 'Inventory Database', 'Healthcare IT'],
		title: 'Optimize Database Management in API Backend Integration',
		description:
			'We aim to Inventory Database within the API Backend Integration. Following initial steps, you should Business Intelligence to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 65,
		assignedTo: 25
	},
	{
		id: 378,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'UAT',
			supportCase: 'SB43SDXRR2'
		},
		startDate: '10/27/2023',
		endDate: '05/22/2024',
		skills: [
			'E-commerce Security',
			'Business Intelligence',
			'SQL',
			'System Architecture',
			'Operational Efficiency',
			'HIPAA Compliance',
			'Cloud Services'
		],
		title: 'Optimize Business Intelligence in Point of Sale System',
		description:
			'This task involves SQL within the Point of Sale System. Following initial steps, you should System Architecture to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 50,
		assignedTo: 44
	},
	{
		id: 379,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Development',
			supportCase: 'SBFYFPWHCL'
		},
		startDate: '04/09/2023',
		endDate: '05/27/2024',
		skills: [
			'E-commerce Security',
			'HIPAA Compliance',
			'Data Analysis',
			'Regulatory Compliance',
			'Network Security',
			'Supply Chain Management'
		],
		title: 'Create Regulatory Compliance in Business Analytics Interface',
		description:
			'Your main task will be Supply Chain Management within the Business Analytics Interface. Following initial steps, you should Network Security to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 54,
		assignedTo: 50
	},
	{
		id: 380,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBGFVRPSI0'
		},
		startDate: '02/06/2024',
		endDate: '05/17/2024',
		skills: [
			'HIPAA Compliance',
			'UI/UX Design',
			'Performance Tuning',
			'SQL',
			'Payment Solutions',
			'User Testing'
		],
		title: 'Support SQL in Real-Time Data Analysis',
		description:
			'The objective here is HIPAA Compliance within the Real-Time Data Analysis. From there, move on to Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 35,
		assignedTo: 11
	},
	{
		id: 381,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'UAT',
			supportCase: 'SBKOD2BJ1R'
		},
		startDate: '03/23/2024',
		endDate: '05/12/2024',
		skills: ['Payment Solutions', 'Client Communication', 'Regulatory Compliance'],
		title: 'Visualization of Data Insights Needs Client Communication Fixed',
		description:
			'The objective here is Client Communication within the Visualization of Data Insights. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 38,
		assignedTo: null
	},
	{
		id: 382,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Support',
			supportCase: 'SBC9XO9NJH'
		},
		startDate: '05/13/2023',
		endDate: '04/29/2024',
		skills: ['Report Generation', 'E-commerce Security', 'API Development', 'System Architecture'],
		title: 'Adjust Report Generation in CRM Integration',
		description:
			'You will begin by System Architecture within the CRM Integration. Your next steps should include Report Generation to enhance overall outcomes. Focus also on E-commerce Security to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 58,
		assignedTo: 54
	},
	{
		id: 383,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SB0DQX8JAN'
		},
		startDate: '09/09/2023',
		endDate: '04/29/2024',
		skills: [
			'Operational Efficiency',
			'Business Intelligence',
			'Client Communication',
			'Report Generation',
			'Cloud Services',
			'Audit Trail Management'
		],
		title: 'Help Cloud Services in Digital Distribution Network',
		description:
			'This task involves Business Intelligence within the Digital Distribution Network. Your next steps should include Client Communication to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 60,
		assignedTo: 58
	},
	{
		id: 384,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'UAT',
			supportCase: 'SB0MVIBC8R'
		},
		startDate: '01/18/2024',
		endDate: '05/05/2024',
		skills: [
			'Healthcare IT',
			'Data Encryption',
			'System Architecture',
			'Performance Tuning',
			'Report Generation'
		],
		title: 'Internal Communication Tool Needs Data Encryption Fixed',
		description:
			'Your main task will be Healthcare IT within the Internal Communication Tool. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Focus also on Healthcare IT to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 40,
		assignedTo: 12
	},
	{
		id: 385,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Requirements',
			supportCase: 'SB42WUGK8P'
		},
		startDate: '06/02/2023',
		endDate: '05/17/2024',
		skills: ['HIPAA Compliance', 'E-commerce Security', 'Analytics', 'Cloud Services'],
		title: 'Fix Cloud Services in Telemedicine Platform',
		description:
			'This task involves Analytics within the Telemedicine Platform. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 41,
		assignedTo: 15
	},
	{
		id: 386,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBOEQW9P6E'
		},
		startDate: '09/22/2023',
		endDate: '05/23/2024',
		skills: ['SQL', 'System Architecture', 'Business Intelligence'],
		title: 'Client Onboarding Process Needs Business Intelligence Fixed',
		description:
			'You will begin by System Architecture within the Client Onboarding Process. From there, move on to SQL to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 46,
		assignedTo: 19
	},
	{
		id: 387,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Support',
			supportCase: 'SBQ63J0WL8'
		},
		startDate: '10/09/2023',
		endDate: '05/04/2024',
		skills: ['SQL', 'System Architecture', 'Inventory Database'],
		title: 'Adjust SQL in Web Performance Monitoring',
		description:
			'This task involves Inventory Database within the Web Performance Monitoring. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on Inventory Database to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 47,
		assignedTo: 20
	},
	{
		id: 388,
		role: 'Manager',
		team: 1,
		status: 'Sign-off',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBHZ6BA872'
		},
		startDate: '11/07/2023',
		endDate: '05/26/2024',
		skills: [
			'E-commerce Security',
			'Network Security',
			'Payment Solutions',
			'Healthcare IT',
			'Analytics',
			'Client Communication'
		],
		title: 'Visualization of Data Insights Needs E-commerce Security Fixed',
		description:
			'You will begin by Healthcare IT within the Visualization of Data Insights. Your next steps should include Network Security to enhance overall outcomes. Focus also on Healthcare IT to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 70,
		assignedTo: 14
	},
	{
		id: 389,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Development',
			supportCase: 'SBL2A016N0'
		},
		startDate: '04/15/2024',
		endDate: '05/20/2024',
		skills: ['Supply Chain Management', 'Data Visualization', 'Report Generation'],
		title: 'Optimize Data Visualization in Inventory Management Application',
		description:
			'You will begin by Report Generation within the Inventory Management Application. Following initial steps, you should Report Generation to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 66,
		assignedTo: 60
	},
	{
		id: 390,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SB88JKZ7KG'
		},
		startDate: '08/30/2023',
		endDate: '05/12/2024',
		skills: ['Analytics', 'Regulatory Compliance', 'Business Intelligence'],
		title: 'Resolve Business Intelligence in Customer Data Platform',
		description:
			'This task involves Business Intelligence within the Customer Data Platform. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 67,
		assignedTo: 66
	},
	{
		id: 391,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Development',
			supportCase: 'SBCSJSN0PE'
		},
		startDate: '09/16/2023',
		endDate: '05/24/2024',
		skills: ['Inventory Database', 'Analytics', 'Data Encryption'],
		title: 'Predictive Analytics Modeling Needs Analytics Fixed',
		description:
			'The objective here is Inventory Database within the Predictive Analytics Modeling. From there, move on to Analytics to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 59,
		assignedTo: 61
	},
	{
		id: 392,
		role: 'Senior Associate',
		team: 2,
		status: 'Cancelled',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'UAT',
			supportCase: 'SBPM3H042V'
		},
		startDate: '04/05/2024',
		endDate: '05/08/2024',
		skills: [
			'Operational Efficiency',
			'Database Management',
			'User Testing',
			'JavaScript',
			'Business Intelligence',
			'Report Generation'
		],
		title: 'Create Report Generation in Sales Dashboard',
		description:
			'We aim to Operational Efficiency within the Sales Dashboard. From there, move on to Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 61,
		assignedTo: 59
	},
	{
		id: 393,
		role: 'Manager',
		team: 2,
		status: 'Cancelled',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Project Management',
			supportCase: 'SBGTA2CJSN'
		},
		startDate: '11/24/2023',
		endDate: '05/24/2024',
		skills: ['Inventory Database', 'Healthcare IT', 'Frontend Development'],
		title: 'Create Inventory Database in E-commerce SEO Optimization',
		description:
			'We aim to Frontend Development within the E-commerce SEO Optimization. Your next steps should include Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 72,
		assignedTo: 23
	},
	{
		id: 394,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Project Management',
			supportCase: 'SBZNBHW3H4'
		},
		startDate: '02/12/2024',
		endDate: '05/28/2024',
		skills: [
			'Performance Tuning',
			'Inventory Database',
			'Audit Trail Management',
			'C#',
			'Data Visualization'
		],
		title: 'Support Performance Tuning in Product Customization Tool',
		description:
			'The focus is on C# within the Product Customization Tool. Your next steps should include Data Visualization to enhance overall outcomes. Focus also on Performance Tuning to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 74,
		assignedTo: 30
	},
	{
		id: 395,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Testing',
			supportCase: 'SB83697T2T'
		},
		startDate: '04/12/2024',
		endDate: '05/13/2024',
		skills: [
			'Data Encryption',
			'Healthcare IT',
			'Performance Tuning',
			'System Architecture',
			'Data Analysis',
			'Data Visualization',
			'Report Generation'
		],
		title: 'Support Performance Tuning in Safety Compliance Check',
		description:
			'The objective here is System Architecture within the Safety Compliance Check. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Focus also on Data Analysis to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 62,
		assignedTo: 68
	},
	{
		id: 396,
		role: 'Manager',
		team: 1,
		status: 'Cancelled',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Development',
			supportCase: 'SBY9KF1J98'
		},
		startDate: '03/09/2024',
		endDate: '04/28/2024',
		skills: [
			'Network Security',
			'SQL',
			'Performance Tuning',
			'Inventory Database',
			'Report Generation',
			'Data Encryption'
		],
		title: 'Create Inventory Database in Audience Analytics',
		description:
			'This task involves Inventory Database within the Audience Analytics. Your next steps should include Network Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 78,
		assignedTo: 34
	},
	{
		id: 397,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Testing',
			supportCase: 'SB6SFNFRB0'
		},
		startDate: '08/14/2023',
		endDate: '05/16/2024',
		skills: [
			'User Testing',
			'Data Visualization',
			'Report Generation',
			'Operational Efficiency',
			'Data Analysis',
			'Regulatory Compliance'
		],
		title: 'Support Data Visualization in Cloud Data Solutions',
		description:
			'The objective here is Regulatory Compliance within the Cloud Data Solutions. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on Operational Efficiency to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 68,
		assignedTo: 62
	},
	{
		id: 398,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Support',
			supportCase: 'SBWRJ7ZXX5'
		},
		startDate: '12/20/2023',
		endDate: '05/25/2024',
		skills: [
			'Payment Solutions',
			'Network Security',
			'Client Communication',
			'Data Analysis',
			'E-commerce Security'
		],
		title: 'Compliance Tracking System Needs E-commerce Security Fixed',
		description:
			'This task involves Payment Solutions within the Compliance Tracking System. Your next steps should include Data Analysis to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 51,
		assignedTo: 21
	},
	{
		id: 399,
		role: 'Supervisor',
		team: 2,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Development',
			supportCase: 'SBV9GD47JF'
		},
		startDate: '11/29/2023',
		endDate: '05/15/2024',
		skills: [
			'Backend Development',
			'Data Analysis',
			'Client Communication',
			'Data Visualization',
			'E-commerce Security',
			'Operational Efficiency'
		],
		title: 'Create Client Communication in Internal Communication Tool',
		description:
			'Your main task will be E-commerce Security within the Internal Communication Tool. Your next steps should include Data Visualization to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 79,
		assignedTo: 67
	},
	{
		id: 400,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Discovery',
			supportCase: 'SB1M51BAJ1'
		},
		startDate: '12/23/2023',
		endDate: '05/23/2024',
		skills: [
			'Payment Solutions',
			'Client Communication',
			'Report Generation',
			'Data Visualization',
			'SQL'
		],
		title: 'Efficiency Audit Tools Needs Data Visualization Fixed',
		description:
			'The objective here is Client Communication within the Efficiency Audit Tools. Once completed, proceed to Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 53,
		assignedTo: 22
	},
	{
		id: 401,
		role: 'Senior Manager',
		team: 2,
		status: 'Completed',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Testing',
			supportCase: 'SBRYEFGAZ3'
		},
		startDate: '09/22/2023',
		endDate: '05/05/2024',
		skills: [
			'Data Analysis',
			'UI/UX Design',
			'Operational Efficiency',
			'Python',
			'E-commerce Security',
			'Client Communication'
		],
		title: 'Support Data Analysis in Point of Sale System',
		description:
			'Your main task will be Python within the Point of Sale System. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on Data Analysis to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 83,
		assignedTo: null
	},
	{
		id: 402,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Support',
			supportCase: 'SBJK0R0YA2'
		},
		startDate: '09/01/2023',
		endDate: '05/21/2024',
		skills: [
			'Audit Trail Management',
			'Network Security',
			'Inventory Database',
			'Payment Solutions'
		],
		title: 'Resolve Payment Solutions in Data Reporting Tools',
		description:
			'The focus is on Inventory Database within the Data Reporting Tools. From there, move on to Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 55,
		assignedTo: null
	},
	{
		id: 403,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SBFC97DBO5'
		},
		startDate: '02/07/2024',
		endDate: '05/24/2024',
		skills: ['Audit Trail Management', 'Inventory Database', 'Regulatory Compliance'],
		title: 'Optimize Inventory Database in Tenant Screening Process',
		description:
			'The focus is on Regulatory Compliance within the Tenant Screening Process. Your next steps should include Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 71,
		assignedTo: 77
	},
	{
		id: 404,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'UAT',
			supportCase: 'SBW3WVNKI5'
		},
		startDate: '03/29/2023',
		endDate: '05/20/2024',
		skills: [
			'Report Generation',
			'Operational Efficiency',
			'User Testing',
			'Business Intelligence',
			'Data Analysis'
		],
		title: 'Implement Report Generation in Rental Management Software',
		description:
			'We aim to User Testing within the Rental Management Software. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Data Analysis to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 56,
		assignedTo: 27
	},
	{
		id: 405,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Support',
			supportCase: 'SBGMYRD4X1'
		},
		startDate: '09/29/2023',
		endDate: '05/25/2024',
		skills: [
			'System Architecture',
			'Regulatory Compliance',
			'JavaScript',
			'Network Security',
			'Inventory Database'
		],
		title: 'Optimize Regulatory Compliance in Project Cost Tracking',
		description:
			'The focus is on System Architecture within the Project Cost Tracking. Following initial steps, you should Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 57,
		assignedTo: 29
	},
	{
		id: 406,
		role: 'Director',
		team: 1,
		status: 'Completed',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SB192ZJAQ6'
		},
		startDate: '06/25/2023',
		endDate: '05/11/2024',
		skills: [
			'Network Security',
			'Business Intelligence',
			'HIPAA Compliance',
			'Cloud Services',
			'Report Generation'
		],
		title: 'Support Network Security in Client Reporting System',
		description:
			'The objective here is Business Intelligence within the Client Reporting System. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Focus also on Network Security to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: null
	},
	{
		id: 407,
		role: 'Associate',
		team: 2,
		status: 'Cancelled',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'UAT',
			supportCase: 'SBLS76R808'
		},
		startDate: '12/18/2023',
		endDate: '05/10/2024',
		skills: [
			'Operational Efficiency',
			'Report Generation',
			'Frontend Development',
			'Analytics',
			'Performance Tuning',
			'Data Analysis'
		],
		title: 'Adjust Report Generation in Technical Support Portal',
		description:
			'You will begin by Operational Efficiency within the Technical Support Portal. From there, move on to Operational Efficiency to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 64,
		assignedTo: 32
	},
	{
		id: 408,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Project Management',
			supportCase: 'SBXW1V52FF'
		},
		startDate: '04/23/2023',
		endDate: '05/17/2024',
		skills: [
			'Regulatory Compliance',
			'Performance Tuning',
			'Network Security',
			'Inventory Database',
			'Analytics'
		],
		title: 'Mobile UX/UI Upgrade Needs Performance Tuning Fixed',
		description:
			'We aim to Analytics within the Mobile UX/UI Upgrade. From there, move on to Inventory Database to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 69,
		assignedTo: 33
	},
	{
		id: 409,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SBWWPND2PN'
		},
		startDate: '04/26/2023',
		endDate: '05/20/2024',
		skills: ['Inventory Database', 'Audit Trail Management', 'Analytics', 'Data Analysis'],
		title: 'Support Analytics in Product Design Simulation',
		description:
			'The focus is on Inventory Database within the Product Design Simulation. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Focus also on Audit Trail Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 75,
		assignedTo: 35
	},
	{
		id: 410,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBBB8I2EV4'
		},
		startDate: '05/25/2023',
		endDate: '05/25/2024',
		skills: ['Performance Tuning', 'Healthcare IT', 'Audit Trail Management', 'Payment Solutions'],
		title: 'SaaS Platform Integration Needs Audit Trail Management Fixed',
		description:
			'The focus is on Healthcare IT within the SaaS Platform Integration. Once completed, proceed to Performance Tuning to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 84,
		assignedTo: 79
	},
	{
		id: 411,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'UAT',
			supportCase: 'SBK9TFMM8J'
		},
		startDate: '09/29/2023',
		endDate: '05/10/2024',
		skills: [
			'E-commerce Security',
			'Cloud Services',
			'Report Generation',
			'Data Visualization',
			'Audit Trail Management',
			'System Architecture'
		],
		title: 'Support Audit Trail Management in Risk Assessment Software',
		description:
			'This task involves Report Generation within the Risk Assessment Software. Your next steps should include Report Generation to enhance overall outcomes. Focus also on Audit Trail Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 76,
		assignedTo: null
	},
	{
		id: 412,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Support',
			supportCase: 'SBYJWOUU91'
		},
		startDate: '04/03/2023',
		endDate: '05/29/2024',
		skills: [
			'JavaScript',
			'Inventory Database',
			'Data Visualization',
			'Data Analysis',
			'HIPAA Compliance'
		],
		title: 'Adjust Inventory Database in Efficiency Audit Tools',
		description:
			'The focus is on HIPAA Compliance within the Efficiency Audit Tools. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 77,
		assignedTo: 38
	},
	{
		id: 413,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'UAT',
			supportCase: 'SB6BJVMBZ9'
		},
		startDate: '03/06/2024',
		endDate: '05/19/2024',
		skills: [
			'HIPAA Compliance',
			'Report Generation',
			'Audit Trail Management',
			'Cloud Services',
			'Supply Chain Management',
			'Healthcare IT'
		],
		title: 'Support Supply Chain Management in Media Storage Solutions',
		description:
			'We aim to Audit Trail Management within the Media Storage Solutions. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 90,
		assignedTo: 36
	},
	{
		id: 414,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SB2XZAPZKD'
		},
		startDate: '01/22/2024',
		endDate: '05/25/2024',
		skills: [
			'Payment Solutions',
			'Data Analysis',
			'Data Encryption',
			'Supply Chain Management',
			'Business Intelligence',
			'Network Security'
		],
		title: 'Optimize Business Intelligence in Real-Time Data Analysis',
		description:
			'This task involves Payment Solutions within the Real-Time Data Analysis. Following initial steps, you should Business Intelligence to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 80,
		assignedTo: 40
	},
	{
		id: 415,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Support',
			supportCase: 'SB97UQPJU3'
		},
		startDate: '08/25/2023',
		endDate: '05/15/2024',
		skills: ['Inventory Database', 'API Development', 'Cloud Services'],
		title: 'Support Inventory Database in Audience Analytics',
		description:
			'We aim to Inventory Database within the Audience Analytics. Your next steps should include API Development to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 81,
		assignedTo: 71
	},
	{
		id: 416,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Support',
			supportCase: 'SBE8ZV50SD'
		},
		startDate: '07/22/2023',
		endDate: '05/28/2024',
		skills: ['Performance Tuning', 'Data Encryption', 'Inventory Database', 'Healthcare IT'],
		title: 'Optimize Performance Tuning in Predictive Analytics Modeling',
		description:
			'Your main task will be Inventory Database within the Predictive Analytics Modeling. From there, move on to Data Encryption to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 82,
		assignedTo: 41
	},
	{
		id: 417,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Support',
			supportCase: 'SBTV61BO7X'
		},
		startDate: '06/02/2023',
		endDate: '05/08/2024',
		skills: [
			'C#',
			'Data Analysis',
			'Business Intelligence',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Data Encryption',
			'Performance Tuning'
		],
		title: 'Compliance Tracking System Needs Data Encryption Fixed',
		description:
			'The objective here is Performance Tuning within the Compliance Tracking System. Once completed, proceed to Business Intelligence to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 85,
		assignedTo: 46
	},
	{
		id: 418,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Support',
			supportCase: 'SB7P0JKECM'
		},
		startDate: '11/07/2023',
		endDate: '05/20/2024',
		skills: [
			'Client Communication',
			'Payment Solutions',
			'Regulatory Compliance',
			'Inventory Database',
			'Network Security',
			'Data Encryption'
		],
		title: 'Create Payment Solutions in Enterprise Resource Planning',
		description:
			'This task involves Network Security within the Enterprise Resource Planning. Following initial steps, you should Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 86,
		assignedTo: 81
	},
	{
		id: 419,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBU8VZ9YK2'
		},
		startDate: '04/10/2024',
		endDate: '04/28/2024',
		skills: [
			'E-commerce Security',
			'Operational Efficiency',
			'Healthcare IT',
			'C#',
			'Data Analysis'
		],
		title: 'Fix Operational Efficiency in Product Customization Tool',
		description:
			'The objective here is Healthcare IT within the Product Customization Tool. Following initial steps, you should Data Analysis to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 87,
		assignedTo: 47
	},
	{
		id: 420,
		role: 'Director',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SB5IU7HB1U'
		},
		startDate: '06/18/2023',
		endDate: '05/03/2024',
		skills: [
			'HIPAA Compliance',
			'E-commerce Security',
			'Report Generation',
			'Regulatory Compliance'
		],
		title: 'Support HIPAA Compliance in Health Records Integration',
		description:
			'The focus is on Report Generation within the Health Records Integration. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 28,
		assignedTo: 39
	},
	{
		id: 421,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Support',
			supportCase: 'SBLNPWR4RN'
		},
		startDate: '04/16/2024',
		endDate: '04/28/2024',
		skills: [
			'JavaScript',
			'Report Generation',
			'Healthcare IT',
			'HIPAA Compliance',
			'Data Analysis',
			'Business Intelligence'
		],
		title: 'Support JavaScript in Insurance Claim Automation',
		description:
			'This task involves JavaScript within the Insurance Claim Automation. Following initial steps, you should Healthcare IT to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 88,
		assignedTo: 86
	},
	{
		id: 422,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Testing',
			supportCase: 'SBCAFQ2X3G'
		},
		startDate: '03/08/2024',
		endDate: '05/16/2024',
		skills: [
			'Audit Trail Management',
			'Payment Solutions',
			'C#',
			'Database Management',
			'Frontend Development',
			'Inventory Database',
			'Operational Efficiency'
		],
		title: 'Branding Portal Needs Frontend Development Fixed',
		description:
			'The objective here is Frontend Development within the Branding Portal. From there, move on to Database Management to enhance overall outcomes. Focus also on C# to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 89,
		assignedTo: 51
	},
	{
		id: 423,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Project Management',
			supportCase: 'SBTE7YLBF6'
		},
		startDate: '01/20/2024',
		endDate: '04/27/2024',
		skills: ['SQL', 'JavaScript', 'Client Communication'],
		title: 'Help SQL in Transaction Processing System',
		description:
			'We aim to Client Communication within the Transaction Processing System. Your next steps should include JavaScript to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 92,
		assignedTo: 87
	},
	{
		id: 424,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Support',
			supportCase: 'SBSCDD5PYZ'
		},
		startDate: '05/07/2023',
		endDate: '04/27/2024',
		skills: ['Client Communication', 'Report Generation', 'System Architecture', 'JavaScript'],
		title: 'Adjust Client Communication in Telemedicine Platform',
		description:
			'Your main task will be System Architecture within the Telemedicine Platform. Once completed, proceed to JavaScript to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 96,
		assignedTo: 84
	},
	{
		id: 425,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Development',
			supportCase: 'SBSBK8YBRG'
		},
		startDate: '11/28/2023',
		endDate: '05/11/2024',
		skills: [
			'Operational Efficiency',
			'E-commerce Security',
			'Analytics',
			'Frontend Development',
			'Payment Solutions',
			'Regulatory Compliance',
			'Audit Trail Management'
		],
		title: 'Help Regulatory Compliance in Mobile UX/UI Upgrade',
		description:
			'The objective here is Analytics within the Mobile UX/UI Upgrade. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 91,
		assignedTo: 53
	},
	{
		id: 426,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBI0SJERUJ'
		},
		startDate: '10/09/2023',
		endDate: '05/09/2024',
		skills: [
			'Client Communication',
			'Healthcare IT',
			'Database Management',
			'Frontend Development',
			'Supply Chain Management',
			'Operational Efficiency',
			'Regulatory Compliance'
		],
		title: 'Adjust Database Management in Building Maintenance App',
		description:
			'This task involves Frontend Development within the Building Maintenance App. Subsequently, your efforts will involve Supply Chain Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 93,
		assignedTo: 55
	},
	{
		id: 427,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Testing',
			supportCase: 'SBYQR44A7U'
		},
		startDate: '12/23/2023',
		endDate: '05/06/2024',
		skills: [
			'Cloud Services',
			'Python',
			'Business Intelligence',
			'Regulatory Compliance',
			'Network Security',
			'Data Analysis',
			'Data Encryption'
		],
		title: 'Optimize Regulatory Compliance in Visualization of Data Insights',
		description:
			'This task involves Business Intelligence within the Visualization of Data Insights. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 94,
		assignedTo: 56
	},
	{
		id: 428,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SB0Y4NBGKE'
		},
		startDate: '07/17/2023',
		endDate: '05/13/2024',
		skills: [
			'SQL',
			'Data Encryption',
			'Healthcare IT',
			'Audit Trail Management',
			'Supply Chain Management',
			'Network Security',
			'Report Generation'
		],
		title: 'Retail Management Suite Needs Audit Trail Management Fixed',
		description:
			'Your main task will be Supply Chain Management within the Retail Management Suite. From there, move on to Healthcare IT to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 95,
		assignedTo: 88
	},
	{
		id: 429,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Development',
			supportCase: 'SBNRGDWH67'
		},
		startDate: '01/13/2024',
		endDate: '05/08/2024',
		skills: [
			'Regulatory Compliance',
			'Backend Development',
			'Operational Efficiency',
			'Payment Solutions',
			'Data Visualization'
		],
		title: 'Resolve Payment Solutions in Predictive Analytics Modeling',
		description:
			'This task involves Backend Development within the Predictive Analytics Modeling. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 97,
		assignedTo: 57
	},
	{
		id: 430,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Testing',
			supportCase: 'SBUNRFNM4Y'
		},
		startDate: '09/02/2023',
		endDate: '05/21/2024',
		skills: [
			'Performance Tuning',
			'Network Security',
			'API Development',
			'Payment Solutions',
			'Cloud Services',
			'Audit Trail Management',
			'Operational Efficiency'
		],
		title: 'Support Performance Tuning in Full Stack Web Development',
		description:
			'We aim to Cloud Services within the Full Stack Web Development. From there, move on to Payment Solutions to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 98,
		assignedTo: 64
	},
	{
		id: 431,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'UAT',
			supportCase: 'SB2JOCHBVG'
		},
		startDate: '11/10/2023',
		endDate: '04/29/2024',
		skills: [
			'Regulatory Compliance',
			'Business Intelligence',
			'C#',
			'E-commerce Security',
			'Audit Trail Management',
			'HIPAA Compliance'
		],
		title: 'Implement Business Intelligence in Inventory Management Application',
		description:
			'This task involves C# within the Inventory Management Application. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 99,
		assignedTo: 94
	},
	{
		id: 432,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'UAT',
			supportCase: 'SBB6OJHT8P'
		},
		startDate: '10/22/2023',
		endDate: '05/13/2024',
		skills: ['Supply Chain Management', 'Healthcare IT', 'Operational Efficiency'],
		title: 'Branding Portal Needs Healthcare IT Fixed',
		description:
			'This task involves Supply Chain Management within the Branding Portal. Your next steps should include Operational Efficiency to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 101,
		assignedTo: 95
	},
	{
		id: 433,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Support',
			supportCase: 'SB1DCZMJV2'
		},
		startDate: '08/29/2023',
		endDate: '05/17/2024',
		skills: [
			'Data Analysis',
			'Data Visualization',
			'E-commerce Security',
			'Inventory Database',
			'SQL',
			'Client Communication',
			'API Development'
		],
		title: 'Business Analytics Interface Needs Client Communication Fixed',
		description:
			'This task involves SQL within the Business Analytics Interface. Once completed, proceed to Client Communication to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 100,
		assignedTo: 69
	},
	{
		id: 434,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Development',
			supportCase: 'SBHBPVB9LQ'
		},
		startDate: '10/22/2023',
		endDate: '05/13/2024',
		skills: ['Report Generation', 'API Development', 'Business Intelligence', 'Payment Solutions'],
		title: 'Optimize API Development in Payment Gateway Integration',
		description:
			'You will begin by Report Generation within the Payment Gateway Integration. From there, move on to Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 102,
		assignedTo: 97
	},
	{
		id: 435,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Development',
			supportCase: 'SBEF26UE4D'
		},
		startDate: '12/09/2023',
		endDate: '05/15/2024',
		skills: [
			'Business Intelligence',
			'Data Visualization',
			'SQL',
			'System Architecture',
			'Supply Chain Management',
			'Operational Efficiency'
		],
		title: 'Optimize SQL in Rental Management Software',
		description:
			'The objective here is Operational Efficiency within the Rental Management Software. Once completed, proceed to SQL to enhance overall outcomes. Focus also on Data Visualization to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 104,
		assignedTo: 75
	},
	{
		id: 436,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Development',
			supportCase: 'SBPG194Q0H'
		},
		startDate: '08/21/2023',
		endDate: '05/27/2024',
		skills: [
			'Data Analysis',
			'Payment Solutions',
			'UI/UX Design',
			'E-commerce Security',
			'Client Communication',
			'Database Management'
		],
		title: 'Implement Database Management in Business Analytics Interface',
		description:
			'Your main task will be E-commerce Security within the Business Analytics Interface. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on Client Communication to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 105,
		assignedTo: null
	},
	{
		id: 437,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SBCOTO7O0Z'
		},
		startDate: '06/26/2023',
		endDate: '05/12/2024',
		skills: ['SQL', 'Inventory Database', 'Cloud Services'],
		title: 'Retail Management Suite Needs Inventory Database Fixed',
		description:
			'The objective here is Cloud Services within the Retail Management Suite. Following initial steps, you should SQL to enhance overall outcomes. Focus also on SQL to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 108,
		assignedTo: 98
	},
	{
		id: 438,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SBK1CUA7PA'
		},
		startDate: '06/18/2023',
		endDate: '05/20/2024',
		skills: [
			'Healthcare IT',
			'Performance Tuning',
			'Data Analysis',
			'Supply Chain Management',
			'Data Encryption',
			'Report Generation',
			'Audit Trail Management'
		],
		title: 'Implement Report Generation in Payment Gateway Integration',
		description:
			'The objective here is Performance Tuning within the Payment Gateway Integration. From there, move on to Performance Tuning to enhance overall outcomes. Focus also on Supply Chain Management to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 14,
		assignedTo: 70
	},
	{
		id: 439,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SBHCYVBFEL'
		},
		startDate: '06/26/2023',
		endDate: '05/05/2024',
		skills: [
			'Data Visualization',
			'Client Communication',
			'Network Security',
			'Analytics',
			'HIPAA Compliance'
		],
		title: 'Resolve Client Communication in Health Records Integration',
		description:
			'We aim to Client Communication within the Health Records Integration. Following initial steps, you should Client Communication to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 109,
		assignedTo: 99
	},
	{
		id: 440,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Support',
			supportCase: 'SBRUT9Q7QP'
		},
		startDate: '11/21/2023',
		endDate: '05/08/2024',
		skills: [
			'JavaScript',
			'Analytics',
			'Data Encryption',
			'Supply Chain Management',
			'SQL',
			'Client Communication'
		],
		title: 'Optimize Supply Chain Management in Data Reporting Tools',
		description:
			'The objective here is Data Encryption within the Data Reporting Tools. From there, move on to Analytics to enhance overall outcomes. Focus also on Supply Chain Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 110,
		assignedTo: 85
	},
	{
		id: 441,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Development',
			supportCase: 'SBCYBO3VSI'
		},
		startDate: '04/07/2024',
		endDate: '05/28/2024',
		skills: ['Backend Development', 'Inventory Database', 'Payment Solutions', 'User Testing'],
		title: 'Help Payment Solutions in Lead Tracking Software',
		description:
			'We aim to Backend Development within the Lead Tracking Software. From there, move on to User Testing to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 1,
		assignedTo: 89
	},
	{
		id: 442,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Development',
			supportCase: 'SBOEOGUP1I'
		},
		startDate: '06/25/2023',
		endDate: '05/28/2024',
		skills: [
			'JavaScript',
			'Business Intelligence',
			'Operational Efficiency',
			'Python',
			'Analytics'
		],
		title: 'Implement Business Intelligence in Data Cleansing',
		description:
			'We aim to Operational Efficiency within the Data Cleansing. Following initial steps, you should JavaScript to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 2,
		assignedTo: 4
	},
	{
		id: 443,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SB8OXRC1VU'
		},
		startDate: '07/17/2023',
		endDate: '05/14/2024',
		skills: [
			'C#',
			'UI/UX Design',
			'Inventory Database',
			'Backend Development',
			'Report Generation'
		],
		title: 'Optimize Report Generation in Point of Sale System',
		description:
			'You will begin by C# within the Point of Sale System. Following initial steps, you should Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 106,
		assignedTo: 76
	},
	{
		id: 444,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SBIIJYPIYY'
		},
		startDate: '10/04/2023',
		endDate: '05/28/2024',
		skills: ['Regulatory Compliance', 'Payment Solutions', 'Supply Chain Management'],
		title: 'Help Payment Solutions in Enterprise Resource Planning',
		description:
			'You will begin by Regulatory Compliance within the Enterprise Resource Planning. Once completed, proceed to Payment Solutions to enhance overall outcomes. Focus also on Supply Chain Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 4,
		assignedTo: null
	},
	{
		id: 445,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Support',
			supportCase: 'SBPBG5XA72'
		},
		startDate: '01/16/2024',
		endDate: '05/13/2024',
		skills: [
			'Payment Solutions',
			'Python',
			'Cloud Services',
			'System Architecture',
			'Network Security',
			'Data Visualization',
			'API Development'
		],
		title: 'Implement Payment Solutions in Enterprise Resource Planning',
		description:
			'The focus is on System Architecture within the Enterprise Resource Planning. Your next steps should include Python to enhance overall outcomes. Focus also on Cloud Services to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 6,
		assignedTo: 2
	},
	{
		id: 446,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Development',
			supportCase: 'SB0RIDUZE4'
		},
		startDate: '03/11/2024',
		endDate: '05/08/2024',
		skills: [
			'User Testing',
			'Business Intelligence',
			'Client Communication',
			'JavaScript',
			'Supply Chain Management',
			'Analytics'
		],
		title: 'Fix User Testing in Customer Loyalty Programs',
		description:
			'The focus is on Supply Chain Management within the Customer Loyalty Programs. From there, move on to Analytics to enhance overall outcomes. Focus also on Supply Chain Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 10,
		assignedTo: 13
	},
	{
		id: 447,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Support',
			supportCase: 'SB33NGSJON'
		},
		startDate: '12/20/2023',
		endDate: '05/06/2024',
		skills: [
			'Audit Trail Management',
			'Payment Solutions',
			'Network Security',
			'Cloud Services',
			'Operational Efficiency',
			'Data Encryption'
		],
		title: 'Fix Audit Trail Management in Safety Compliance Check',
		description:
			'The focus is on Payment Solutions within the Safety Compliance Check. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on Payment Solutions to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 107,
		assignedTo: 80
	},
	{
		id: 448,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Support',
			supportCase: 'SB9EIOBH5L'
		},
		startDate: '02/07/2024',
		endDate: '04/28/2024',
		skills: [
			'Analytics',
			'Audit Trail Management',
			'Business Intelligence',
			'Report Generation',
			'Payment Solutions',
			'SQL'
		],
		title: 'Adjust SQL in Workflow Automation',
		description:
			'Your main task will be Payment Solutions within the Workflow Automation. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Focus also on SQL to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 3,
		assignedTo: 82
	},
	{
		id: 449,
		role: 'Manager',
		team: 2,
		status: 'Assigned',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Support',
			supportCase: 'SBK6BGQIP4'
		},
		startDate: '01/10/2024',
		endDate: '05/22/2024',
		skills: ['User Testing', 'Database Management', 'Report Generation', 'SQL'],
		title: 'Inventory Management Application Needs User Testing Fixed',
		description:
			'This task involves Report Generation within the Inventory Management Application. Following initial steps, you should SQL to enhance overall outcomes. Focus also on User Testing to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 17,
		assignedTo: 72
	},
	{
		id: 450,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Development',
			supportCase: 'SBU1LHU8I8'
		},
		startDate: '08/26/2023',
		endDate: '05/21/2024',
		skills: [
			'Data Visualization',
			'Inventory Database',
			'Operational Efficiency',
			'E-commerce Security',
			'HIPAA Compliance',
			'Business Intelligence'
		],
		title: 'Create Inventory Database in Business Analytics Interface',
		description:
			'The focus is on Data Visualization within the Business Analytics Interface. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 13,
		assignedTo: 16
	},
	{
		id: 451,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SB6JKERDSJ'
		},
		startDate: '02/05/2024',
		endDate: '05/16/2024',
		skills: [
			'Cloud Services',
			'Network Security',
			'Performance Tuning',
			'Healthcare IT',
			'Data Encryption',
			'Client Communication'
		],
		title: 'Web Application Security Needs Cloud Services Fixed',
		description:
			'The focus is on Network Security within the Web Application Security. From there, move on to Healthcare IT to enhance overall outcomes. Focus also on Cloud Services to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 16,
		assignedTo: 24
	},
	{
		id: 452,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Development',
			supportCase: 'SB5C6RXMV2'
		},
		startDate: '08/27/2023',
		endDate: '05/02/2024',
		skills: ['UI/UX Design', 'Analytics', 'Payment Solutions', 'Supply Chain Management'],
		title: 'Resolve Supply Chain Management in Customer Engagement Platform',
		description:
			'This task involves Payment Solutions within the Customer Engagement Platform. Following initial steps, you should Payment Solutions to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 5,
		assignedTo: null
	},
	{
		id: 453,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'UAT',
			supportCase: 'SBIE2P3UQ8'
		},
		startDate: '05/27/2023',
		endDate: '05/21/2024',
		skills: [
			'Data Visualization',
			'UI/UX Design',
			'Healthcare IT',
			'Performance Tuning',
			'Regulatory Compliance'
		],
		title: 'Client Onboarding Process Needs Healthcare IT Fixed',
		description:
			'Your main task will be Data Visualization within the Client Onboarding Process. Following initial steps, you should Regulatory Compliance to enhance overall outcomes. Focus also on Healthcare IT to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 18,
		assignedTo: null
	},
	{
		id: 454,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBOXTH3KGD'
		},
		startDate: '10/10/2023',
		endDate: '05/23/2024',
		skills: [
			'Performance Tuning',
			'Data Analysis',
			'HIPAA Compliance',
			'Report Generation',
			'C#',
			'E-commerce Security',
			'Backend Development'
		],
		title: 'Product Customization Tool Needs Performance Tuning Fixed',
		description:
			'The objective here is Backend Development within the Product Customization Tool. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Focus also on C# to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 23,
		assignedTo: 92
	},
	{
		id: 455,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Support',
			supportCase: 'SBVYJF54AK'
		},
		startDate: '07/24/2023',
		endDate: '05/01/2024',
		skills: ['Performance Tuning', 'Report Generation', 'Data Analysis'],
		title: 'Optimize Data Analysis in Front-end Development',
		description:
			'You will begin by Performance Tuning within the Front-end Development. From there, move on to Report Generation to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 24,
		assignedTo: 26
	},
	{
		id: 456,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Testing',
			supportCase: 'SBV735DX3A'
		},
		startDate: '07/07/2023',
		endDate: '04/28/2024',
		skills: ['Analytics', 'UI/UX Design', 'Payment Solutions'],
		title: 'Fix UI/UX Design in Project Cost Tracking',
		description:
			'We aim to UI/UX Design within the Project Cost Tracking. Your next steps should include Analytics to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 7,
		assignedTo: 91
	},
	{
		id: 457,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBBGSXHH7J'
		},
		startDate: '01/14/2024',
		endDate: '05/26/2024',
		skills: [
			'Data Analysis',
			'Healthcare IT',
			'Operational Efficiency',
			'SQL',
			'Report Generation',
			'User Testing',
			'Database Management'
		],
		title: 'Help Healthcare IT in Real-Time Data Analysis',
		description:
			'You will begin by Report Generation within the Real-Time Data Analysis. Once completed, proceed to Healthcare IT to enhance overall outcomes. Focus also on Database Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 8,
		assignedTo: 93
	},
	{
		id: 458,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SBVTXOZ58Q'
		},
		startDate: '05/01/2023',
		endDate: '05/16/2024',
		skills: [
			'Data Analysis',
			'Python',
			'Healthcare IT',
			'Analytics',
			'JavaScript',
			'E-commerce Security',
			'SQL'
		],
		title: 'Adjust Python in Customer Data Platform',
		description:
			'You will begin by E-commerce Security within the Customer Data Platform. Your next steps should include JavaScript to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 25,
		assignedTo: 74
	},
	{
		id: 459,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Development',
			supportCase: 'SBXM90EIIM'
		},
		startDate: '07/26/2023',
		endDate: '05/20/2024',
		skills: ['Healthcare IT', 'Performance Tuning', 'Payment Solutions'],
		title: 'Resolve Performance Tuning in Content Management System',
		description:
			'You will begin by Performance Tuning within the Content Management System. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Focus also on Performance Tuning to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 9,
		assignedTo: 100
	},
	{
		id: 460,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'UAT',
			supportCase: 'SBWG768EZX'
		},
		startDate: '06/14/2023',
		endDate: '05/02/2024',
		skills: ['Performance Tuning', 'Client Communication', 'Supply Chain Management'],
		title: 'Support Client Communication in Lead Tracking Software',
		description:
			'Your main task will be Client Communication within the Lead Tracking Software. From there, move on to Client Communication to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 26,
		assignedTo: 37
	},
	{
		id: 461,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Development',
			supportCase: 'SBMOHLZWNC'
		},
		startDate: '06/11/2023',
		endDate: '05/04/2024',
		skills: ['Healthcare IT', 'Backend Development', 'UI/UX Design'],
		title: 'Optimize Backend Development in Telemedicine Platform',
		description:
			'You will begin by UI/UX Design within the Telemedicine Platform. Following initial steps, you should Healthcare IT to enhance overall outcomes. Focus also on Backend Development to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 11,
		assignedTo: 106
	},
	{
		id: 462,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SB7QPTO1FE'
		},
		startDate: '05/21/2023',
		endDate: '05/27/2024',
		skills: ['Inventory Database', 'SQL', 'HIPAA Compliance'],
		title: 'Implement HIPAA Compliance in Health Records Integration',
		description:
			'The focus is on SQL within the Health Records Integration. Your next steps should include HIPAA Compliance to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 12,
		assignedTo: 107
	},
	{
		id: 463,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'UAT',
			supportCase: 'SBEZW0KKZZ'
		},
		startDate: '04/03/2023',
		endDate: '05/02/2024',
		skills: [
			'Regulatory Compliance',
			'Supply Chain Management',
			'Payment Solutions',
			'Operational Efficiency',
			'Client Communication',
			'Audit Trail Management'
		],
		title: 'Create Regulatory Compliance in Front-end Development',
		description:
			'You will begin by Audit Trail Management within the Front-end Development. Your next steps should include Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 30,
		assignedTo: 43
	},
	{
		id: 464,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Support',
			supportCase: 'SBNEATIJJ0'
		},
		startDate: '01/18/2024',
		endDate: '05/09/2024',
		skills: ['Analytics', 'System Architecture', 'SQL', 'Data Visualization'],
		title: 'Real-Time Data Analysis Needs Analytics Fixed',
		description:
			'Your main task will be System Architecture within the Real-Time Data Analysis. Your next steps should include Analytics to enhance overall outcomes. Focus also on Data Visualization to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 15,
		assignedTo: null
	},
	{
		id: 465,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Development',
			supportCase: 'SBYBPKC1QK'
		},
		startDate: '04/02/2024',
		endDate: '05/03/2024',
		skills: [
			'Supply Chain Management',
			'HIPAA Compliance',
			'SQL',
			'Performance Tuning',
			'Data Analysis',
			'Business Intelligence',
			'Client Communication'
		],
		title: 'Optimize Business Intelligence in Customer Data Platform',
		description:
			'Your main task will be Data Analysis within the Customer Data Platform. From there, move on to Data Analysis to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 31,
		assignedTo: 44
	},
	{
		id: 466,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SBEQXRILBC'
		},
		startDate: '03/12/2024',
		endDate: '05/11/2024',
		skills: [
			'Healthcare IT',
			'Cloud Services',
			'Client Communication',
			'SQL',
			'E-commerce Security',
			'Data Visualization'
		],
		title: 'Media Storage Solutions Needs Healthcare IT Fixed',
		description:
			'This task involves E-commerce Security within the Media Storage Solutions. Following initial steps, you should Data Visualization to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 34,
		assignedTo: 96
	},
	{
		id: 467,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Project Management',
			supportCase: 'SBVS3EY0ER'
		},
		startDate: '04/19/2024',
		endDate: '05/18/2024',
		skills: ['SQL', 'HIPAA Compliance', 'Regulatory Compliance'],
		title: 'Fix HIPAA Compliance in Audience Analytics',
		description:
			'The focus is on SQL within the Audience Analytics. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 36,
		assignedTo: 49
	},
	{
		id: 468,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'UAT',
			supportCase: 'SB1IWN4RTZ'
		},
		startDate: '03/22/2023',
		endDate: '05/18/2024',
		skills: ['UI/UX Design', 'Database Management', 'Payment Solutions', 'User Testing'],
		title: 'Help UI/UX Design in Mobile UX/UI Upgrade',
		description:
			'Your main task will be User Testing within the Mobile UX/UI Upgrade. From there, move on to UI/UX Design to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 37,
		assignedTo: null
	},
	{
		id: 469,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Development',
			supportCase: 'SBHYUTMGZG'
		},
		startDate: '05/13/2023',
		endDate: '05/04/2024',
		skills: ['Business Intelligence', 'Data Visualization', 'Data Analysis', 'HIPAA Compliance'],
		title: 'Optimize HIPAA Compliance in CRM Integration',
		description:
			'You will begin by HIPAA Compliance within the CRM Integration. Following initial steps, you should Business Intelligence to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 39,
		assignedTo: 78
	},
	{
		id: 470,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'UAT',
			supportCase: 'SBE3GH9G10'
		},
		startDate: '03/15/2024',
		endDate: '05/19/2024',
		skills: ['API Development', 'System Architecture', 'Audit Trail Management', 'C#'],
		title: 'Front-end Development Needs API Development Fixed',
		description:
			'The objective here is System Architecture within the Front-end Development. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 42,
		assignedTo: null
	},
	{
		id: 471,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Development',
			supportCase: 'SBOIPPZ9HZ'
		},
		startDate: '01/18/2024',
		endDate: '05/26/2024',
		skills: [
			'Operational Efficiency',
			'Data Visualization',
			'Cloud Services',
			'Regulatory Compliance'
		],
		title: 'Support Regulatory Compliance in API Backend Integration',
		description:
			'You will begin by Data Visualization within the API Backend Integration. From there, move on to Cloud Services to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 19,
		assignedTo: 3
	},
	{
		id: 472,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'UAT',
			supportCase: 'SBTQIZW2UF'
		},
		startDate: '01/11/2024',
		endDate: '05/10/2024',
		skills: ['C#', 'Client Communication', 'Inventory Database', 'SQL', 'HIPAA Compliance'],
		title: 'Optimize Inventory Database in Social Media Integration',
		description:
			'We aim to HIPAA Compliance within the Social Media Integration. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 20,
		assignedTo: 5
	},
	{
		id: 473,
		role: 'Supervisor',
		team: 2,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Support',
			supportCase: 'SB75A9SVVK'
		},
		startDate: '06/13/2023',
		endDate: '05/20/2024',
		skills: [
			'HIPAA Compliance',
			'Report Generation',
			'Data Analysis',
			'E-commerce Security',
			'Analytics',
			'SQL',
			'Supply Chain Management'
		],
		title: 'Multi-Tenant Systems Needs E-commerce Security Fixed',
		description:
			'This task involves SQL within the Multi-Tenant Systems. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 45,
		assignedTo: 101
	},
	{
		id: 474,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SBPGXHC1Y3'
		},
		startDate: '07/24/2023',
		endDate: '04/29/2024',
		skills: [
			'Operational Efficiency',
			'Business Intelligence',
			'Client Communication',
			'Analytics'
		],
		title: 'Enterprise Resource Planning Needs Business Intelligence Fixed',
		description:
			'We aim to Operational Efficiency within the Enterprise Resource Planning. From there, move on to Operational Efficiency to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 21,
		assignedTo: null
	},
	{
		id: 475,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SB292F2SQJ'
		},
		startDate: '04/22/2024',
		endDate: '04/30/2024',
		skills: ['Backend Development', 'E-commerce Security', 'Regulatory Compliance'],
		title: 'Create Regulatory Compliance in Real-Time Data Analysis',
		description:
			'We aim to E-commerce Security within the Real-Time Data Analysis. Following initial steps, you should Backend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 22,
		assignedTo: 7
	},
	{
		id: 476,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SB1VLT9QY1'
		},
		startDate: '12/04/2023',
		endDate: '04/29/2024',
		skills: [
			'Performance Tuning',
			'Analytics',
			'HIPAA Compliance',
			'Client Communication',
			'Regulatory Compliance',
			'Data Visualization'
		],
		title: 'Adjust Client Communication in Media Storage Solutions',
		description:
			'You will begin by Data Visualization within the Media Storage Solutions. Your next steps should include HIPAA Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 27,
		assignedTo: 8
	},
	{
		id: 477,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Testing',
			supportCase: 'SBNJ810KYY'
		},
		startDate: '02/02/2024',
		endDate: '05/17/2024',
		skills: [
			'Database Management',
			'Performance Tuning',
			'Report Generation',
			'Analytics',
			'HIPAA Compliance',
			'UI/UX Design',
			'Frontend Development'
		],
		title: 'Fix Frontend Development in Rental Management Software',
		description:
			'The focus is on Performance Tuning within the Rental Management Software. Following initial steps, you should Frontend Development to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 29,
		assignedTo: null
	},
	{
		id: 478,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SBKD4EFDXH'
		},
		startDate: '07/05/2023',
		endDate: '05/16/2024',
		skills: ['JavaScript', 'Report Generation', 'Client Communication'],
		title: 'Customer Data Platform Needs Client Communication Fixed',
		description:
			'Your main task will be Report Generation within the Customer Data Platform. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 43,
		assignedTo: 50
	},
	{
		id: 479,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Project Management',
			supportCase: 'SBKTL2R3DH'
		},
		startDate: '03/03/2024',
		endDate: '05/16/2024',
		skills: [
			'Data Visualization',
			'Operational Efficiency',
			'Client Communication',
			'API Development',
			'C#'
		],
		title: 'Create C# in Financial Forecasting Tool',
		description:
			'You will begin by Client Communication within the Financial Forecasting Tool. From there, move on to Client Communication to enhance overall outcomes. Focus also on C# to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 44,
		assignedTo: 59
	},
	{
		id: 480,
		role: 'Supervisor',
		team: 2,
		status: 'Cancelled',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SBYQOUJNKW'
		},
		startDate: '11/08/2023',
		endDate: '05/02/2024',
		skills: [
			'UI/UX Design',
			'Analytics',
			'Operational Efficiency',
			'Inventory Database',
			'Database Management'
		],
		title: 'Adjust Inventory Database in Efficiency Audit Tools',
		description:
			'The focus is on UI/UX Design within the Efficiency Audit Tools. From there, move on to Operational Efficiency to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 48,
		assignedTo: 105
	},
	{
		id: 481,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Testing',
			supportCase: 'SBJQH8IEVB'
		},
		startDate: '12/10/2023',
		endDate: '05/21/2024',
		skills: ['UI/UX Design', 'C#', 'Inventory Database'],
		title: 'Create Inventory Database in Business Analytics Interface',
		description:
			'The focus is on Inventory Database within the Business Analytics Interface. Your next steps should include Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 49,
		assignedTo: 61
	},
	{
		id: 482,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Development',
			supportCase: 'SBLM50OWY4'
		},
		startDate: '12/12/2023',
		endDate: '05/02/2024',
		skills: [
			'Regulatory Compliance',
			'API Development',
			'Analytics',
			'Network Security',
			'C#',
			'Data Analysis'
		],
		title: 'Optimize Regulatory Compliance in Responsive Web Design',
		description:
			'The objective here is API Development within the Responsive Web Design. Once completed, proceed to Network Security to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 32,
		assignedTo: 9
	},
	{
		id: 483,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SB8GRZ85KQ'
		},
		startDate: '06/26/2023',
		endDate: '04/30/2024',
		skills: ['Supply Chain Management', 'SQL', 'Inventory Database', 'Network Security'],
		title: 'Support Network Security in Technical Support Portal',
		description:
			'The objective here is SQL within the Technical Support Portal. Following initial steps, you should Inventory Database to enhance overall outcomes. Focus also on Network Security to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 33,
		assignedTo: 11
	},
	{
		id: 484,
		role: 'Manager',
		team: 2,
		status: 'Assigned',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Testing',
			supportCase: 'SB2UPVV9AT'
		},
		startDate: '10/17/2023',
		endDate: '05/18/2024',
		skills: [
			'Frontend Development',
			'User Testing',
			'Database Management',
			'Data Visualization',
			'Audit Trail Management'
		],
		title: 'Create User Testing in Rental Management Software',
		description:
			'The focus is on Frontend Development within the Rental Management Software. From there, move on to Data Visualization to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 63,
		assignedTo: 102
	},
	{
		id: 485,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Testing',
			supportCase: 'SB2AXHDQFH'
		},
		startDate: '06/19/2023',
		endDate: '05/16/2024',
		skills: ['Data Analysis', 'Inventory Database', 'SQL'],
		title: 'Fix Data Analysis in Market Analysis Tool',
		description:
			'This task involves Data Analysis within the Market Analysis Tool. Following initial steps, you should Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 35,
		assignedTo: 12
	},
	{
		id: 486,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Discovery',
			supportCase: 'SBKLJQ7ZFG'
		},
		startDate: '05/16/2023',
		endDate: '05/21/2024',
		skills: [
			'Frontend Development',
			'Inventory Database',
			'Audit Trail Management',
			'User Testing',
			'UI/UX Design',
			'Report Generation',
			'E-commerce Security'
		],
		title: 'Adjust Report Generation in API Backend Integration',
		description:
			'You will begin by Report Generation within the API Backend Integration. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on User Testing to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 38,
		assignedTo: 15
	},
	{
		id: 487,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Testing',
			supportCase: 'SB2L3KG64T'
		},
		startDate: '08/22/2023',
		endDate: '05/17/2024',
		skills: ['Analytics', 'Data Visualization', 'Performance Tuning'],
		title: 'Optimize Data Visualization in Audience Analytics',
		description:
			'The focus is on Data Visualization within the Audience Analytics. From there, move on to Data Visualization to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 40,
		assignedTo: 19
	},
	{
		id: 488,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Testing',
			supportCase: 'SBKDKS9E9A'
		},
		startDate: '08/26/2023',
		endDate: '05/05/2024',
		skills: [
			'Operational Efficiency',
			'C#',
			'Supply Chain Management',
			'Audit Trail Management',
			'Performance Tuning',
			'Payment Solutions',
			'SQL'
		],
		title: 'Fix Performance Tuning in Media Storage Solutions',
		description:
			'Your main task will be Audit Trail Management within the Media Storage Solutions. Your next steps should include Supply Chain Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 50,
		assignedTo: null
	},
	{
		id: 489,
		role: 'Manager',
		team: 1,
		status: 'Completed',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBMILVC1DZ'
		},
		startDate: '03/31/2023',
		endDate: '04/27/2024',
		skills: [
			'Cloud Services',
			'Data Visualization',
			'Data Analysis',
			'Report Generation',
			'Analytics'
		],
		title: 'Real-Time Data Analysis Needs Data Analysis Fixed',
		description:
			'The objective here is Cloud Services within the Real-Time Data Analysis. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 65,
		assignedTo: null
	},
	{
		id: 490,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SBR9ZW1FZZ'
		},
		startDate: '11/22/2023',
		endDate: '05/17/2024',
		skills: [
			'Business Intelligence',
			'Database Management',
			'Performance Tuning',
			'User Testing',
			'Report Generation'
		],
		title: 'Implement Performance Tuning in Product Design Simulation',
		description:
			'You will begin by Performance Tuning within the Product Design Simulation. Your next steps should include User Testing to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 52,
		assignedTo: 108
	},
	{
		id: 491,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SBFYQCQP58'
		},
		startDate: '07/01/2023',
		endDate: '05/25/2024',
		skills: ['Healthcare IT', 'Analytics', 'Operational Efficiency'],
		title: 'Optimize Operational Efficiency in Insurance Claim Automation',
		description:
			'You will begin by Operational Efficiency within the Insurance Claim Automation. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 54,
		assignedTo: 62
	},
	{
		id: 492,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Development',
			supportCase: 'SBN1VA09Q3'
		},
		startDate: '08/13/2023',
		endDate: '05/18/2024',
		skills: [
			'Database Management',
			'Data Visualization',
			'Analytics',
			'Audit Trail Management',
			'Backend Development',
			'Client Communication',
			'Regulatory Compliance'
		],
		title: 'Optimize Analytics in Database Optimization',
		description:
			'The focus is on Client Communication within the Database Optimization. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Backend Development to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 58,
		assignedTo: null
	},
	{
		id: 493,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Support',
			supportCase: 'SBML4G2ZAW'
		},
		startDate: '09/27/2023',
		endDate: '05/14/2024',
		skills: [
			'Data Visualization',
			'Performance Tuning',
			'Client Communication',
			'Supply Chain Management',
			'Data Encryption',
			'Healthcare IT'
		],
		title: 'E-commerce SEO Optimization Needs Data Visualization Fixed',
		description:
			'Your main task will be Client Communication within the E-commerce SEO Optimization. Your next steps should include Supply Chain Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 60,
		assignedTo: 109
	},
	{
		id: 494,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Support',
			supportCase: 'SBHVG1JBQO'
		},
		startDate: '02/18/2024',
		endDate: '04/27/2024',
		skills: [
			'Business Intelligence',
			'UI/UX Design',
			'E-commerce Security',
			'Operational Efficiency',
			'Audit Trail Management',
			'Performance Tuning',
			'Analytics'
		],
		title: 'Support Performance Tuning in Business Analytics Interface',
		description:
			'The focus is on Business Intelligence within the Business Analytics Interface. From there, move on to Business Intelligence to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 41,
		assignedTo: 20
	},
	{
		id: 495,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SB6FWBUYYU'
		},
		startDate: '04/20/2023',
		endDate: '05/10/2024',
		skills: [
			'Inventory Database',
			'Audit Trail Management',
			'C#',
			'System Architecture',
			'Report Generation'
		],
		title: 'Tenant Screening Process Needs Audit Trail Management Fixed',
		description:
			'The objective here is Audit Trail Management within the Tenant Screening Process. Once completed, proceed to C# to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 66,
		assignedTo: 110
	},
	{
		id: 496,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SBL3MQI1L8'
		},
		startDate: '12/07/2023',
		endDate: '05/26/2024',
		skills: [
			'Operational Efficiency',
			'JavaScript',
			'Data Visualization',
			'Report Generation',
			'C#',
			'Inventory Database',
			'Backend Development'
		],
		title: 'Help C# in Customer Segmentation Analysis',
		description:
			'Your main task will be Inventory Database within the Customer Segmentation Analysis. Once completed, proceed to JavaScript to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 67,
		assignedTo: null
	},
	{
		id: 497,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Project Management',
			supportCase: 'SBL1GDD99X'
		},
		startDate: '03/09/2024',
		endDate: '05/26/2024',
		skills: [
			'HIPAA Compliance',
			'API Development',
			'E-commerce Security',
			'Operational Efficiency',
			'Data Analysis',
			'Network Security',
			'Business Intelligence'
		],
		title: 'Optimize Business Intelligence in Product Design Simulation',
		description:
			'The objective here is Operational Efficiency within the Product Design Simulation. Once completed, proceed to Network Security to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 46,
		assignedTo: 21
	},
	{
		id: 498,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Testing',
			supportCase: 'SBW68M5VII'
		},
		startDate: '06/23/2023',
		endDate: '05/28/2024',
		skills: ['Data Visualization', 'Backend Development', 'User Testing', 'Data Analysis'],
		title: 'Product Design Simulation Needs Data Analysis Fixed',
		description:
			'You will begin by Data Visualization within the Product Design Simulation. From there, move on to Data Visualization to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 59,
		assignedTo: 68
	},
	{
		id: 499,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBTIH89O5P'
		},
		startDate: '08/24/2023',
		endDate: '05/16/2024',
		skills: ['Performance Tuning', 'Report Generation', 'Network Security', 'API Development'],
		title: 'Fix Network Security in Client Onboarding Process',
		description:
			'Your main task will be Network Security within the Client Onboarding Process. Subsequently, your efforts will involve API Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 70,
		assignedTo: 1
	},
	{
		id: 500,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Testing',
			supportCase: 'SB2SKGBFYI'
		},
		startDate: '10/08/2023',
		endDate: '05/20/2024',
		skills: [
			'Data Encryption',
			'Data Analysis',
			'SQL',
			'Python',
			'Client Communication',
			'System Architecture',
			'Performance Tuning'
		],
		title: 'Fix Data Analysis in API Backend Integration',
		description:
			'We aim to Performance Tuning within the API Backend Integration. Once completed, proceed to Data Encryption to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 61,
		assignedTo: 71
	},
	{
		id: 501,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Development',
			supportCase: 'SBIEUKNLKA'
		},
		startDate: '01/30/2024',
		endDate: '05/06/2024',
		skills: [
			'Inventory Database',
			'Payment Solutions',
			'SQL',
			'Supply Chain Management',
			'Data Analysis',
			'Analytics',
			'E-commerce Security'
		],
		title: 'Adjust Analytics in Responsive Web Design',
		description:
			'You will begin by Analytics within the Responsive Web Design. From there, move on to Analytics to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 62,
		assignedTo: 77
	},
	{
		id: 502,
		role: 'Senior Manager',
		team: 1,
		status: 'Sign-off',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Testing',
			supportCase: 'SB7POENSIV'
		},
		startDate: '08/03/2023',
		endDate: '05/24/2024',
		skills: [
			'Data Encryption',
			'Data Analysis',
			'Data Visualization',
			'Supply Chain Management',
			'Inventory Database',
			'Report Generation'
		],
		title: 'Implement Supply Chain Management in Business Analytics Interface',
		description:
			'We aim to Data Encryption within the Business Analytics Interface. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 73,
		assignedTo: 63
	},
	{
		id: 503,
		role: 'Senior Manager',
		team: 1,
		status: 'Sign-off',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Support',
			supportCase: 'SBY31CH6Q6'
		},
		startDate: '02/04/2024',
		endDate: '05/16/2024',
		skills: [
			'Data Encryption',
			'System Architecture',
			'Data Visualization',
			'Report Generation',
			'Performance Tuning',
			'HIPAA Compliance',
			'Network Security'
		],
		title: 'Help Report Generation in API Backend Integration',
		description:
			'We aim to Network Security within the API Backend Integration. Once completed, proceed to Report Generation to enhance overall outcomes. Focus also on Data Encryption to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 83,
		assignedTo: 65
	},
	{
		id: 504,
		role: 'Manager',
		team: 1,
		status: 'Sign-off',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SB3X15V1FA'
		},
		startDate: '04/02/2023',
		endDate: '05/06/2024',
		skills: ['Inventory Database', 'Python', 'Business Intelligence'],
		title: 'Resolve Python in Customer Engagement Platform',
		description:
			'The focus is on Business Intelligence within the Customer Engagement Platform. From there, move on to Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 72,
		assignedTo: 6
	},
	{
		id: 505,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Support',
			supportCase: 'SBY8QQ51VH'
		},
		startDate: '06/17/2023',
		endDate: '05/04/2024',
		skills: [
			'E-commerce Security',
			'Business Intelligence',
			'C#',
			'Database Management',
			'Analytics',
			'SQL'
		],
		title: 'Help Database Management in Data Reporting Tools',
		description:
			'This task involves SQL within the Data Reporting Tools. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 68,
		assignedTo: 81
	},
	{
		id: 506,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Discovery',
			supportCase: 'SB4CJXNDHK'
		},
		startDate: '08/15/2023',
		endDate: '05/17/2024',
		skills: [
			'Business Intelligence',
			'Cloud Services',
			'HIPAA Compliance',
			'E-commerce Security',
			'Data Visualization',
			'Analytics',
			'System Architecture'
		],
		title: 'Implement Analytics in Media Storage Solutions',
		description:
			'We aim to Cloud Services within the Media Storage Solutions. Your next steps should include HIPAA Compliance to enhance overall outcomes. Focus also on System Architecture to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 47,
		assignedTo: 22
	},
	{
		id: 507,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Support',
			supportCase: 'SBC6W5PCUL'
		},
		startDate: '04/26/2024',
		endDate: '05/12/2024',
		skills: ['System Architecture', 'Data Analysis', 'Audit Trail Management'],
		title: 'Support Audit Trail Management in Content Management System',
		description:
			'The objective here is Audit Trail Management within the Content Management System. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 71,
		assignedTo: 86
	},
	{
		id: 508,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Project Management',
			supportCase: 'SBGQNCC5CG'
		},
		startDate: '11/04/2023',
		endDate: '05/27/2024',
		skills: [
			'Regulatory Compliance',
			'System Architecture',
			'Payment Solutions',
			'HIPAA Compliance'
		],
		title: 'Resolve Payment Solutions in Visualization of Data Insights',
		description:
			'Your main task will be System Architecture within the Visualization of Data Insights. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 74,
		assignedTo: 87
	},
	{
		id: 509,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Support',
			supportCase: 'SBCSS9FKJY'
		},
		startDate: '02/03/2024',
		endDate: '05/14/2024',
		skills: ['Data Analysis', 'JavaScript', 'Operational Efficiency', 'System Architecture'],
		title: 'Order Fulfillment Automation Needs Operational Efficiency Fixed',
		description:
			'The focus is on Operational Efficiency within the Order Fulfillment Automation. Following initial steps, you should Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 77,
		assignedTo: 88
	},
	{
		id: 510,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Development',
			supportCase: 'SBJAIE2V1V'
		},
		startDate: '11/17/2023',
		endDate: '05/05/2024',
		skills: ['Data Encryption', 'Inventory Database', 'C#'],
		title: 'Support Inventory Database in Telemedicine Platform',
		description:
			'You will begin by Data Encryption within the Telemedicine Platform. Subsequently, your efforts will involve C# to enhance overall outcomes. Focus also on Data Encryption to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 78,
		assignedTo: 10
	},
	{
		id: 511,
		role: 'Senior Associate',
		team: 2,
		status: 'Cancelled',
		hours: 17,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Testing',
			supportCase: 'SB7EQGRWL7'
		},
		startDate: '04/15/2024',
		endDate: '05/01/2024',
		skills: ['Performance Tuning', 'Analytics', 'JavaScript', 'Python'],
		title: 'Create JavaScript in Retail Management Suite',
		description:
			'We aim to JavaScript within the Retail Management Suite. Following initial steps, you should Analytics to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 79,
		assignedTo: 94
	},
	{
		id: 512,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Development',
			supportCase: 'SB4FZUW2PJ'
		},
		startDate: '08/20/2023',
		endDate: '05/23/2024',
		skills: [
			'Regulatory Compliance',
			'Healthcare IT',
			'Inventory Database',
			'Operational Efficiency',
			'JavaScript',
			'Analytics'
		],
		title: 'Supply Chain Management System Needs Healthcare IT Fixed',
		description:
			'The focus is on Regulatory Compliance within the Supply Chain Management System. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 51,
		assignedTo: 27
	},
	{
		id: 513,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Support',
			supportCase: 'SB2KPT8IK2'
		},
		startDate: '04/18/2023',
		endDate: '05/21/2024',
		skills: [
			'Client Communication',
			'Regulatory Compliance',
			'SQL',
			'Performance Tuning',
			'Data Analysis',
			'API Development'
		],
		title: 'Implement Data Analysis in Client Onboarding Process',
		description:
			'The objective here is Client Communication within the Client Onboarding Process. Following initial steps, you should SQL to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 53,
		assignedTo: 29
	},
	{
		id: 514,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Testing',
			supportCase: 'SB45BAKF4N'
		},
		startDate: '04/22/2023',
		endDate: '05/03/2024',
		skills: [
			'Performance Tuning',
			'Report Generation',
			'Inventory Database',
			'Regulatory Compliance',
			'Analytics',
			'Client Communication'
		],
		title: 'Support Analytics in Workflow Automation',
		description:
			'This task involves Client Communication within the Workflow Automation. Once completed, proceed to Report Generation to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 55,
		assignedTo: 32
	},
	{
		id: 515,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SB8FEO8Y31'
		},
		startDate: '06/04/2023',
		endDate: '05/12/2024',
		skills: [
			'Operational Efficiency',
			'User Testing',
			'Frontend Development',
			'Supply Chain Management',
			'Database Management',
			'Inventory Database',
			'Report Generation'
		],
		title: 'Implement Frontend Development in Web Performance Monitoring',
		description:
			'Your main task will be Operational Efficiency within the Web Performance Monitoring. Once completed, proceed to Database Management to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 81,
		assignedTo: 95
	},
	{
		id: 516,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Support',
			supportCase: 'SBWKLHO57Z'
		},
		startDate: '12/05/2023',
		endDate: '05/27/2024',
		skills: ['Operational Efficiency', 'Supply Chain Management', 'Business Intelligence', 'SQL'],
		title: 'Help Business Intelligence in Media Storage Solutions',
		description:
			'The focus is on Supply Chain Management within the Media Storage Solutions. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on SQL to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 56,
		assignedTo: 33
	},
	{
		id: 517,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Support',
			supportCase: 'SB6R2ALVK5'
		},
		startDate: '07/08/2023',
		endDate: '05/25/2024',
		skills: ['HIPAA Compliance', 'API Development', 'Cloud Services'],
		title: 'Fix API Development in Branding Portal',
		description:
			'The focus is on API Development within the Branding Portal. From there, move on to Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 90,
		assignedTo: 14
	},
	{
		id: 518,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SBVLWJQ8GB'
		},
		startDate: '10/29/2023',
		endDate: '05/13/2024',
		skills: [
			'Client Communication',
			'Database Management',
			'E-commerce Security',
			'Report Generation',
			'Data Analysis',
			'Frontend Development'
		],
		title: 'Help Client Communication in Media Storage Solutions',
		description:
			'Your main task will be Database Management within the Media Storage Solutions. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Focus also on Frontend Development to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 57,
		assignedTo: 35
	},
	{
		id: 519,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Development',
			supportCase: 'SBVMX721BT'
		},
		startDate: '04/05/2024',
		endDate: '05/27/2024',
		skills: ['Analytics', 'C#', 'Data Analysis'],
		title: 'Retail Management Suite Needs C# Fixed',
		description:
			'You will begin by Analytics within the Retail Management Suite. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on C# to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 64,
		assignedTo: 38
	},
	{
		id: 520,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Third-Party API Integrations',
			projectCode: 'UAT',
			supportCase: 'SBGDFL3VLE'
		},
		startDate: '02/19/2024',
		endDate: '05/11/2024',
		skills: ['Supply Chain Management', 'SQL', 'Frontend Development'],
		title: 'Adjust Frontend Development in Third-Party API Integrations',
		description:
			'You will begin by Supply Chain Management within the Third-Party API Integrations. Following initial steps, you should Frontend Development to enhance overall outcomes. Focus also on SQL to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 69,
		assignedTo: 40
	},
	{
		id: 521,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Development',
			supportCase: 'SBM4LHW8YT'
		},
		startDate: '10/09/2023',
		endDate: '05/29/2024',
		skills: [
			'Client Communication',
			'Operational Efficiency',
			'Performance Tuning',
			'Supply Chain Management'
		],
		title: 'Support Client Communication in Material Specification Tool',
		description:
			'This task involves Client Communication within the Material Specification Tool. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Supply Chain Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 84,
		assignedTo: 97
	},
	{
		id: 522,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Development',
			supportCase: 'SB9DHZ7GJ3'
		},
		startDate: '03/31/2023',
		endDate: '05/05/2024',
		skills: ['Data Analysis', 'Healthcare IT', 'Client Communication', 'C#'],
		title: 'Create C# in Financial Forecasting Tool',
		description:
			'The objective here is C# within the Financial Forecasting Tool. Following initial steps, you should Data Analysis to enhance overall outcomes. Focus also on Data Analysis to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 75,
		assignedTo: 41
	},
	{
		id: 523,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 9,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBFJL5P07K'
		},
		startDate: '08/05/2023',
		endDate: '05/23/2024',
		skills: [
			'Inventory Database',
			'Report Generation',
			'HIPAA Compliance',
			'Operational Efficiency',
			'Performance Tuning',
			'Payment Solutions',
			'Healthcare IT'
		],
		title: 'Adjust Healthcare IT in E-commerce SEO Optimization',
		description:
			'This task involves Performance Tuning within the E-commerce SEO Optimization. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 85,
		assignedTo: null
	},
	{
		id: 524,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Testing',
			supportCase: 'SBEV0Z6455'
		},
		startDate: '05/05/2023',
		endDate: '04/28/2024',
		skills: [
			'Operational Efficiency',
			'Payment Solutions',
			'Frontend Development',
			'Data Analysis',
			'Business Intelligence'
		],
		title: 'Mobile UX/UI Upgrade Needs Business Intelligence Fixed',
		description:
			'You will begin by Operational Efficiency within the Mobile UX/UI Upgrade. Following initial steps, you should Business Intelligence to enhance overall outcomes. Focus also on Frontend Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 76,
		assignedTo: 46
	},
	{
		id: 525,
		role: 'Manager',
		team: 2,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Support',
			supportCase: 'SBEL745NIJ'
		},
		startDate: '06/10/2023',
		endDate: '05/28/2024',
		skills: ['E-commerce Security', 'HIPAA Compliance', 'UI/UX Design', 'Backend Development'],
		title: 'Product Customization Tool Needs E-commerce Security Fixed',
		description:
			'You will begin by Backend Development within the Product Customization Tool. From there, move on to E-commerce Security to enhance overall outcomes. Focus also on E-commerce Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 102,
		assignedTo: 18
	},
	{
		id: 526,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SB6GY1EL9U'
		},
		startDate: '04/14/2023',
		endDate: '05/14/2024',
		skills: [
			'Data Visualization',
			'JavaScript',
			'Healthcare IT',
			'Backend Development',
			'Performance Tuning',
			'Database Management',
			'SQL'
		],
		title: 'Fix Database Management in Technical Support Portal',
		description:
			'You will begin by Database Management within the Technical Support Portal. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on Performance Tuning to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 80,
		assignedTo: 47
	},
	{
		id: 527,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'UAT',
			supportCase: 'SBCTLMG15I'
		},
		startDate: '09/13/2023',
		endDate: '05/14/2024',
		skills: [
			'Audit Trail Management',
			'Client Communication',
			'Data Visualization',
			'System Architecture'
		],
		title: 'Adjust Audit Trail Management in Compliance Tracking System',
		description:
			'The objective here is System Architecture within the Compliance Tracking System. Following initial steps, you should Data Visualization to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 86,
		assignedTo: 98
	},
	{
		id: 528,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'UAT',
			supportCase: 'SBN7LMP686'
		},
		startDate: '08/08/2023',
		endDate: '05/24/2024',
		skills: [
			'Client Communication',
			'Inventory Database',
			'Data Analysis',
			'Data Encryption',
			'Analytics'
		],
		title: 'Rental Management Software Needs Data Encryption Fixed',
		description:
			'We aim to Analytics within the Rental Management Software. From there, move on to Client Communication to enhance overall outcomes. Focus also on Data Analysis to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 87,
		assignedTo: 99
	},
	{
		id: 529,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'UAT',
			supportCase: 'SBJGEDWNOZ'
		},
		startDate: '03/09/2024',
		endDate: '04/29/2024',
		skills: ['Inventory Database', 'Report Generation', 'Data Analysis'],
		title: 'Implement Inventory Database in Customer Engagement Platform',
		description:
			'The focus is on Report Generation within the Customer Engagement Platform. Once completed, proceed to Report Generation to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 82,
		assignedTo: 51
	},
	{
		id: 530,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Development',
			supportCase: 'SBWUK147HO'
		},
		startDate: '12/21/2023',
		endDate: '05/03/2024',
		skills: ['Healthcare IT', 'Database Management', 'Frontend Development', 'C#'],
		title: 'Inventory Management Application Needs Healthcare IT Fixed',
		description:
			'This task involves C# within the Inventory Management Application. Your next steps should include Database Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 88,
		assignedTo: 2
	},
	{
		id: 531,
		role: 'Senior Manager',
		team: 2,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SBN750CQ84'
		},
		startDate: '03/13/2024',
		endDate: '05/19/2024',
		skills: ['HIPAA Compliance', 'UI/UX Design', 'Backend Development'],
		title: 'Adjust Backend Development in Tenant Screening Process',
		description:
			'The focus is on HIPAA Compliance within the Tenant Screening Process. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 103,
		assignedTo: 83
	},
	{
		id: 532,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Testing',
			supportCase: 'SBE6UVUPY2'
		},
		startDate: '01/14/2024',
		endDate: '05/12/2024',
		skills: ['Analytics', 'HIPAA Compliance', 'Network Security'],
		title: 'Help HIPAA Compliance in Market Analysis Tool',
		description:
			'This task involves HIPAA Compliance within the Market Analysis Tool. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 104,
		assignedTo: 90
	},
	{
		id: 533,
		role: 'Director',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SB21ZJD4NP'
		},
		startDate: '04/27/2023',
		endDate: '05/07/2024',
		skills: [
			'Audit Trail Management',
			'Healthcare IT',
			'E-commerce Security',
			'Inventory Database',
			'Business Intelligence',
			'System Architecture'
		],
		title: 'Adjust Inventory Database in Customer Data Platform',
		description:
			'Your main task will be Audit Trail Management within the Customer Data Platform. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Focus also on System Architecture to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 28,
		assignedTo: 73
	},
	{
		id: 534,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 8,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'UAT',
			supportCase: 'SBYWY0G8WY'
		},
		startDate: '07/22/2023',
		endDate: '05/24/2024',
		skills: ['HIPAA Compliance', 'Business Intelligence', 'Analytics'],
		title: 'Resolve Analytics in Client Onboarding Process',
		description:
			'You will begin by HIPAA Compliance within the Client Onboarding Process. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 89,
		assignedTo: 4
	},
	{
		id: 535,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Discovery',
			supportCase: 'SBPWD49VDA'
		},
		startDate: '07/21/2023',
		endDate: '05/24/2024',
		skills: ['E-commerce Security', 'Supply Chain Management', 'Performance Tuning', 'C#'],
		title: 'Responsive Web Design Needs Performance Tuning Fixed',
		description:
			'Your main task will be Supply Chain Management within the Responsive Web Design. Following initial steps, you should Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 14,
		assignedTo: 23
	},
	{
		id: 536,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Support',
			supportCase: 'SBLVIBAMPA'
		},
		startDate: '11/04/2023',
		endDate: '05/01/2024',
		skills: [
			'Python',
			'Operational Efficiency',
			'Client Communication',
			'Database Management',
			'Analytics',
			'Report Generation',
			'HIPAA Compliance'
		],
		title: 'Create Report Generation in SaaS Platform Integration',
		description:
			'We aim to Operational Efficiency within the SaaS Platform Integration. Following initial steps, you should Analytics to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 91,
		assignedTo: 53
	},
	{
		id: 537,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Development',
			supportCase: 'SBG127046I'
		},
		startDate: '12/30/2023',
		endDate: '04/28/2024',
		skills: [
			'Data Visualization',
			'Inventory Database',
			'Supply Chain Management',
			'User Testing',
			'Backend Development'
		],
		title: 'Full Stack Web Development Needs Inventory Database Fixed',
		description:
			'You will begin by Supply Chain Management within the Full Stack Web Development. Once completed, proceed to Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 92,
		assignedTo: 31
	},
	{
		id: 538,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SBWEJFDBJE'
		},
		startDate: '08/20/2023',
		endDate: '05/04/2024',
		skills: [
			'SQL',
			'Audit Trail Management',
			'Regulatory Compliance',
			'Payment Solutions',
			'Cloud Services'
		],
		title: 'Support SQL in Point of Sale System',
		description:
			'We aim to Regulatory Compliance within the Point of Sale System. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Focus also on Payment Solutions to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 93,
		assignedTo: 55
	},
	{
		id: 539,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Testing',
			supportCase: 'SBK78W9SBC'
		},
		startDate: '10/25/2023',
		endDate: '05/27/2024',
		skills: [
			'Business Intelligence',
			'Backend Development',
			'Healthcare IT',
			'UI/UX Design',
			'HIPAA Compliance',
			'Payment Solutions',
			'Data Analysis'
		],
		title: 'Fix UI/UX Design in Compliance Tracking System',
		description:
			'The objective here is Business Intelligence within the Compliance Tracking System. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Focus also on Payment Solutions to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 94,
		assignedTo: 13
	},
	{
		id: 540,
		role: 'Manager',
		team: 2,
		status: 'Sign-off',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SBKP1132G6'
		},
		startDate: '04/19/2024',
		endDate: '05/01/2024',
		skills: [
			'Supply Chain Management',
			'Performance Tuning',
			'SQL',
			'Frontend Development',
			'Regulatory Compliance',
			'Client Communication'
		],
		title: 'Implement Frontend Development in Retail Management Suite',
		description:
			'The objective here is Frontend Development within the Retail Management Suite. From there, move on to Regulatory Compliance to enhance overall outcomes. Focus also on Frontend Development to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 17,
		assignedTo: 30
	},
	{
		id: 541,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Development',
			supportCase: 'SBJW0N88WM'
		},
		startDate: '07/19/2023',
		endDate: '05/29/2024',
		skills: ['Payment Solutions', 'E-commerce Security', 'Healthcare IT', 'Operational Efficiency'],
		title: 'Responsive Web Design Needs E-commerce Security Fixed',
		description:
			'You will begin by Operational Efficiency within the Responsive Web Design. Your next steps should include Operational Efficiency to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 95,
		assignedTo: 16
	},
	{
		id: 542,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Testing',
			supportCase: 'SBBNA84Y50'
		},
		startDate: '06/04/2023',
		endDate: '05/28/2024',
		skills: ['SQL', 'User Testing', 'Report Generation', 'Analytics', 'Performance Tuning'],
		title: 'Fix SQL in Compliance Tracking System',
		description:
			'The objective here is Analytics within the Compliance Tracking System. Your next steps should include Report Generation to enhance overall outcomes. Focus also on Performance Tuning to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 96,
		assignedTo: 56
	},
	{
		id: 543,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Development',
			supportCase: 'SBL6BIURK3'
		},
		startDate: '05/07/2023',
		endDate: '04/30/2024',
		skills: [
			'UI/UX Design',
			'Frontend Development',
			'Payment Solutions',
			'C#',
			'Backend Development',
			'Business Intelligence'
		],
		title: 'Help Business Intelligence in Risk Assessment Software',
		description:
			'Your main task will be Payment Solutions within the Risk Assessment Software. Once completed, proceed to Payment Solutions to enhance overall outcomes. Focus also on UI/UX Design to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 97,
		assignedTo: 57
	},
	{
		id: 544,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Support',
			supportCase: 'SB3MGKEZ0P'
		},
		startDate: '01/11/2024',
		endDate: '05/26/2024',
		skills: ['Report Generation', 'Data Encryption', 'System Architecture'],
		title: 'Adjust System Architecture in Full Stack Web Development',
		description:
			'We aim to Report Generation within the Full Stack Web Development. Your next steps should include Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 98,
		assignedTo: 64
	},
	{
		id: 545,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Discovery',
			supportCase: 'SBF78VT64W'
		},
		startDate: '08/26/2023',
		endDate: '05/09/2024',
		skills: [
			'Python',
			'Client Communication',
			'Regulatory Compliance',
			'Performance Tuning',
			'Network Security',
			'Healthcare IT',
			'SQL'
		],
		title: 'Implement Client Communication in Transaction Processing System',
		description:
			'Your main task will be SQL within the Transaction Processing System. From there, move on to Python to enhance overall outcomes. Focus also on Network Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 101,
		assignedTo: null
	},
	{
		id: 546,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Support',
			supportCase: 'SBF0YQ13T2'
		},
		startDate: '10/25/2023',
		endDate: '05/25/2024',
		skills: [
			'System Architecture',
			'Supply Chain Management',
			'Business Intelligence',
			'Inventory Database',
			'Report Generation',
			'Audit Trail Management'
		],
		title: 'Help Audit Trail Management in Sales Dashboard',
		description:
			'You will begin by System Architecture within the Sales Dashboard. From there, move on to Audit Trail Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 99,
		assignedTo: 69
	},
	{
		id: 547,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Support',
			supportCase: 'SBTAN7UCSX'
		},
		startDate: '04/16/2023',
		endDate: '05/23/2024',
		skills: [
			'Cloud Services',
			'Regulatory Compliance',
			'Python',
			'Healthcare IT',
			'Data Encryption',
			'Supply Chain Management'
		],
		title: 'Help Healthcare IT in API Backend Integration',
		description:
			'We aim to Python within the API Backend Integration. Your next steps should include Healthcare IT to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 105,
		assignedTo: null
	},
	{
		id: 548,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Project Management',
			supportCase: 'SBA4VOG4JO'
		},
		startDate: '10/02/2023',
		endDate: '05/21/2024',
		skills: ['User Testing', 'UI/UX Design', 'Business Intelligence'],
		title: 'Implement User Testing in Telemedicine Platform',
		description:
			'This task involves Business Intelligence within the Telemedicine Platform. From there, move on to User Testing to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 100,
		assignedTo: 75
	},
	{
		id: 549,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SBU13NWUS9'
		},
		startDate: '03/06/2024',
		endDate: '05/28/2024',
		skills: [
			'Data Visualization',
			'JavaScript',
			'E-commerce Security',
			'Operational Efficiency',
			'Analytics',
			'Database Management'
		],
		title: 'Fix JavaScript in Technical Support Portal',
		description:
			'You will begin by E-commerce Security within the Technical Support Portal. Once completed, proceed to Database Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 108,
		assignedTo: 42
	},
	{
		id: 550,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Development',
			supportCase: 'SB8OGONG92'
		},
		startDate: '11/11/2023',
		endDate: '05/29/2024',
		skills: ['Data Encryption', 'E-commerce Security', 'Operational Efficiency'],
		title: 'Fix Data Encryption in Supply Chain Management System',
		description:
			'This task involves Operational Efficiency within the Supply Chain Management System. From there, move on to Operational Efficiency to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 109,
		assignedTo: null
	},
	{
		id: 551,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Development',
			supportCase: 'SBS5ALEPUI'
		},
		startDate: '05/20/2023',
		endDate: '05/28/2024',
		skills: [
			'Backend Development',
			'Payment Solutions',
			'Data Visualization',
			'E-commerce Security'
		],
		title: 'Optimize E-commerce Security in Multi-Tenant Systems',
		description:
			'The focus is on Payment Solutions within the Multi-Tenant Systems. From there, move on to Backend Development to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 110,
		assignedTo: 24
	},
	{
		id: 552,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBCHV8ZOM8'
		},
		startDate: '01/12/2024',
		endDate: '05/04/2024',
		skills: ['JavaScript', 'Client Communication', 'Business Intelligence'],
		title: 'Support JavaScript in Sales Dashboard',
		description:
			'The focus is on JavaScript within the Sales Dashboard. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 1,
		assignedTo: 26
	},
	{
		id: 553,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Development',
			supportCase: 'SB8S89LYDK'
		},
		startDate: '11/01/2023',
		endDate: '05/19/2024',
		skills: ['Audit Trail Management', 'Analytics', 'Python'],
		title: 'Logistics Tracking Interface Needs Audit Trail Management Fixed',
		description:
			'The objective here is Analytics within the Logistics Tracking Interface. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 2,
		assignedTo: null
	},
	{
		id: 554,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Project Management',
			supportCase: 'SBVYK449IQ'
		},
		startDate: '02/05/2024',
		endDate: '04/30/2024',
		skills: ['Client Communication', 'C#', 'Healthcare IT'],
		title: 'Payment Gateway Integration Needs Client Communication Fixed',
		description:
			'This task involves C# within the Payment Gateway Integration. Once completed, proceed to C# to enhance overall outcomes. Focus also on C# to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 23,
		assignedTo: 34
	},
	{
		id: 555,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Discovery',
			supportCase: 'SBIHF4IBPX'
		},
		startDate: '04/24/2024',
		endDate: '05/09/2024',
		skills: [
			'Operational Efficiency',
			'Performance Tuning',
			'User Testing',
			'Business Intelligence',
			'HIPAA Compliance',
			'Report Generation'
		],
		title: 'Help Business Intelligence in Full Stack Web Development',
		description:
			'Your main task will be Performance Tuning within the Full Stack Web Development. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Focus also on User Testing to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 106,
		assignedTo: 76
	},
	{
		id: 556,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 9,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Development',
			supportCase: 'SBX5FFJE9Q'
		},
		startDate: '12/02/2023',
		endDate: '05/16/2024',
		skills: [
			'Payment Solutions',
			'Inventory Database',
			'Data Visualization',
			'Client Communication',
			'UI/UX Design'
		],
		title: 'Create Inventory Database in Financial Forecasting Tool',
		description:
			'Your main task will be Data Visualization within the Financial Forecasting Tool. From there, move on to UI/UX Design to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 4,
		assignedTo: null
	},
	{
		id: 557,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Support',
			supportCase: 'SBOZEK3E6X'
		},
		startDate: '11/20/2023',
		endDate: '05/06/2024',
		skills: [
			'E-commerce Security',
			'Payment Solutions',
			'Data Visualization',
			'Inventory Database'
		],
		title: 'Fix Inventory Database in Supply Chain Management System',
		description:
			'You will begin by E-commerce Security within the Supply Chain Management System. Following initial steps, you should Data Visualization to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 6,
		assignedTo: 45
	},
	{
		id: 558,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Testing',
			supportCase: 'SBGMPB3N7Z'
		},
		startDate: '11/13/2023',
		endDate: '05/06/2024',
		skills: ['Business Intelligence', 'Audit Trail Management', 'Regulatory Compliance'],
		title: 'Digital Distribution Network Needs Regulatory Compliance Fixed',
		description:
			'Your main task will be Regulatory Compliance within the Digital Distribution Network. From there, move on to Regulatory Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 10,
		assignedTo: 48
	},
	{
		id: 559,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SB1L38DWK5'
		},
		startDate: '06/20/2023',
		endDate: '05/14/2024',
		skills: ['JavaScript', 'Inventory Database', 'Data Visualization'],
		title: 'Implement JavaScript in Product Design Simulation',
		description:
			'The focus is on JavaScript within the Product Design Simulation. From there, move on to Data Visualization to enhance overall outcomes. Focus also on Data Visualization to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 25,
		assignedTo: 36
	},
	{
		id: 560,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Development',
			supportCase: 'SBQBDA51MQ'
		},
		startDate: '04/10/2023',
		endDate: '05/17/2024',
		skills: ['Regulatory Compliance', 'Supply Chain Management', 'HIPAA Compliance'],
		title: 'Support HIPAA Compliance in Order Fulfillment Automation',
		description:
			'We aim to Regulatory Compliance within the Order Fulfillment Automation. Your next steps should include Supply Chain Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 18,
		assignedTo: 52
	},
	{
		id: 561,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Testing',
			supportCase: 'SBOS06JX4D'
		},
		startDate: '02/18/2024',
		endDate: '05/06/2024',
		skills: [
			'Regulatory Compliance',
			'Payment Solutions',
			'Inventory Database',
			'API Development',
			'Client Communication'
		],
		title: 'Optimize API Development in CRM Integration',
		description:
			'The objective here is API Development within the CRM Integration. From there, move on to Regulatory Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 107,
		assignedTo: 80
	},
	{
		id: 562,
		role: 'Manager',
		team: 1,
		status: 'Completed',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Development',
			supportCase: 'SBT4LHXJ5H'
		},
		startDate: '12/16/2023',
		endDate: '05/10/2024',
		skills: ['Data Encryption', 'Healthcare IT', 'Data Analysis'],
		title: 'Adjust Healthcare IT in Safety Compliance Check',
		description:
			'The focus is on Healthcare IT within the Safety Compliance Check. Once completed, proceed to Data Analysis to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 30,
		assignedTo: null
	},
	{
		id: 563,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Development',
			supportCase: 'SBPP4JPWPO'
		},
		startDate: '04/25/2023',
		endDate: '05/08/2024',
		skills: [
			'Inventory Database',
			'Analytics',
			'API Development',
			'Payment Solutions',
			'E-commerce Security'
		],
		title: 'Client Reporting System Needs E-commerce Security Fixed',
		description:
			'The objective here is Analytics within the Client Reporting System. From there, move on to E-commerce Security to enhance overall outcomes. Focus also on Payment Solutions to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 3,
		assignedTo: 82
	},
	{
		id: 564,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'UAT',
			supportCase: 'SB575S85IL'
		},
		startDate: '04/07/2023',
		endDate: '05/03/2024',
		skills: [
			'Data Analysis',
			'Analytics',
			'Data Encryption',
			'Operational Efficiency',
			'Cloud Services',
			'System Architecture',
			'API Development'
		],
		title: 'Project Cost Tracking Needs Cloud Services Fixed',
		description:
			'You will begin by Data Analysis within the Project Cost Tracking. From there, move on to System Architecture to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 5,
		assignedTo: 91
	},
	{
		id: 565,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Development',
			supportCase: 'SBLFVZBJ8F'
		},
		startDate: '02/14/2024',
		endDate: '05/16/2024',
		skills: ['Data Analysis', 'Payment Solutions', 'E-commerce Security', 'Client Communication'],
		title: 'Support E-commerce Security in CRM Integration',
		description:
			'The objective here is Client Communication within the CRM Integration. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on E-commerce Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 13,
		assignedTo: null
	},
	{
		id: 566,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SB8UH3QHEZ'
		},
		startDate: '07/07/2023',
		endDate: '05/15/2024',
		skills: [
			'C#',
			'Client Communication',
			'Cloud Services',
			'E-commerce Security',
			'Audit Trail Management',
			'Performance Tuning',
			'Regulatory Compliance'
		],
		title: 'Adjust C# in Health Records Integration',
		description:
			'We aim to Cloud Services within the Health Records Integration. Following initial steps, you should E-commerce Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 7,
		assignedTo: null
	},
	{
		id: 567,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Support',
			supportCase: 'SBOBTT7CE5'
		},
		startDate: '05/18/2023',
		endDate: '05/22/2024',
		skills: [
			'Payment Solutions',
			'Data Encryption',
			'System Architecture',
			'Data Visualization',
			'Audit Trail Management'
		],
		title: 'Fix Audit Trail Management in Customer Loyalty Programs',
		description:
			'The focus is on Audit Trail Management within the Customer Loyalty Programs. Your next steps should include Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 8,
		assignedTo: 93
	},
	{
		id: 568,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Development',
			supportCase: 'SBGIIN2PMG'
		},
		startDate: '07/29/2023',
		endDate: '05/01/2024',
		skills: ['Healthcare IT', 'Audit Trail Management', 'Operational Efficiency'],
		title: 'Internal Communication Tool Needs Audit Trail Management Fixed',
		description:
			'You will begin by Operational Efficiency within the Internal Communication Tool. From there, move on to Audit Trail Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 9,
		assignedTo: 100
	},
	{
		id: 569,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Support',
			supportCase: 'SBF5FLQOIH'
		},
		startDate: '01/12/2024',
		endDate: '05/03/2024',
		skills: [
			'Inventory Database',
			'Report Generation',
			'Client Communication',
			'Analytics',
			'Performance Tuning'
		],
		title: 'Support Report Generation in Compliance Tracking System',
		description:
			'The objective here is Analytics within the Compliance Tracking System. Following initial steps, you should Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 16,
		assignedTo: 37
	},
	{
		id: 570,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SBRZCG14E8'
		},
		startDate: '07/06/2023',
		endDate: '05/13/2024',
		skills: [
			'Client Communication',
			'UI/UX Design',
			'Backend Development',
			'Audit Trail Management'
		],
		title: 'Resolve Backend Development in Compliance Tracking System',
		description:
			'You will begin by Audit Trail Management within the Compliance Tracking System. Your next steps should include UI/UX Design to enhance overall outcomes. Focus also on UI/UX Design to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 31,
		assignedTo: 54
	},
	{
		id: 571,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Testing',
			supportCase: 'SBO3ZCZM2K'
		},
		startDate: '10/29/2023',
		endDate: '05/07/2024',
		skills: ['Cloud Services', 'Healthcare IT', 'Business Intelligence', 'Audit Trail Management'],
		title: 'Optimize Business Intelligence in Telemedicine Platform',
		description:
			'The focus is on Audit Trail Management within the Telemedicine Platform. Following initial steps, you should Business Intelligence to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 24,
		assignedTo: 43
	},
	{
		id: 572,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Support',
			supportCase: 'SBWS5YN9EY'
		},
		startDate: '04/09/2024',
		endDate: '05/08/2024',
		skills: [
			'Regulatory Compliance',
			'E-commerce Security',
			'Supply Chain Management',
			'Operational Efficiency'
		],
		title: 'Adjust E-commerce Security in CRM Integration',
		description:
			'The focus is on Operational Efficiency within the CRM Integration. Your next steps should include Supply Chain Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 11,
		assignedTo: 106
	},
	{
		id: 573,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Business Analytics Interface',
			projectCode: 'Support',
			supportCase: 'SB10D517JW'
		},
		startDate: '09/20/2023',
		endDate: '05/25/2024',
		skills: [
			'Healthcare IT',
			'SQL',
			'Frontend Development',
			'Report Generation',
			'Supply Chain Management'
		],
		title: 'Resolve Supply Chain Management in Business Analytics Interface',
		description:
			'The focus is on SQL within the Business Analytics Interface. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on Report Generation to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 12,
		assignedTo: 107
	},
	{
		id: 574,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Testing',
			supportCase: 'SB4ZISYEOT'
		},
		startDate: '11/03/2023',
		endDate: '05/01/2024',
		skills: [
			'User Testing',
			'Business Intelligence',
			'HIPAA Compliance',
			'Analytics',
			'Performance Tuning'
		],
		title: 'Help Analytics in E-commerce SEO Optimization',
		description:
			'Your main task will be Business Intelligence within the E-commerce SEO Optimization. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 26,
		assignedTo: null
	},
	{
		id: 575,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Dynamic Pricing Engine',
			projectCode: 'Development',
			supportCase: 'SBQWI4WQD1'
		},
		startDate: '01/10/2024',
		endDate: '05/07/2024',
		skills: [
			'UI/UX Design',
			'Data Visualization',
			'Data Analysis',
			'Database Management',
			'Supply Chain Management'
		],
		title: 'Dynamic Pricing Engine Needs UI/UX Design Fixed',
		description:
			'We aim to Data Visualization within the Dynamic Pricing Engine. Once completed, proceed to Supply Chain Management to enhance overall outcomes. Focus also on Data Analysis to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 34,
		assignedTo: 58
	},
	{
		id: 576,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'UAT',
			supportCase: 'SB6FVM531O'
		},
		startDate: '01/27/2024',
		endDate: '05/10/2024',
		skills: [
			'Inventory Database',
			'Payment Solutions',
			'Data Visualization',
			'Regulatory Compliance',
			'HIPAA Compliance',
			'Healthcare IT',
			'E-commerce Security'
		],
		title: 'Digital Catalogue Needs Regulatory Compliance Fixed',
		description:
			'The focus is on HIPAA Compliance within the Digital Catalogue. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 36,
		assignedTo: 44
	},
	{
		id: 577,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Development',
			supportCase: 'SBXAQGEWS1'
		},
		startDate: '07/12/2023',
		endDate: '05/09/2024',
		skills: [
			'Analytics',
			'Data Encryption',
			'API Development',
			'Cloud Services',
			'Audit Trail Management'
		],
		title: 'Payment Gateway Integration Needs Cloud Services Fixed',
		description:
			'We aim to API Development within the Payment Gateway Integration. From there, move on to Data Encryption to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 15,
		assignedTo: 3
	},
	{
		id: 578,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'UAT',
			supportCase: 'SBRX3GSC4T'
		},
		startDate: '11/30/2023',
		endDate: '05/21/2024',
		skills: ['SQL', 'Frontend Development', 'JavaScript', 'HIPAA Compliance'],
		title: 'Optimize HIPAA Compliance in Transaction Processing System',
		description:
			'We aim to JavaScript within the Transaction Processing System. Following initial steps, you should SQL to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 39,
		assignedTo: 60
	},
	{
		id: 579,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Testing',
			supportCase: 'SBUYPF29DG'
		},
		startDate: '05/18/2023',
		endDate: '05/20/2024',
		skills: [
			'API Development',
			'Network Security',
			'Performance Tuning',
			'HIPAA Compliance',
			'Data Analysis',
			'Data Visualization',
			'Business Intelligence'
		],
		title: 'Customer Segmentation Analysis Needs API Development Fixed',
		description:
			'Your main task will be Performance Tuning within the Customer Segmentation Analysis. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 37,
		assignedTo: 49
	},
	{
		id: 580,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Development',
			supportCase: 'SBQS5D6GY7'
		},
		startDate: '02/02/2024',
		endDate: '04/28/2024',
		skills: [
			'E-commerce Security',
			'Python',
			'Data Visualization',
			'Payment Solutions',
			'Data Encryption',
			'Regulatory Compliance'
		],
		title: 'Adjust Payment Solutions in Order Fulfillment Automation',
		description:
			'The focus is on Python within the Order Fulfillment Automation. From there, move on to E-commerce Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 63,
		assignedTo: 66
	},
	{
		id: 581,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Testing',
			supportCase: 'SB4GDJEPQ8'
		},
		startDate: '01/08/2024',
		endDate: '05/24/2024',
		skills: ['Data Visualization', 'Performance Tuning', 'Data Analysis'],
		title: 'Digital Distribution Network Needs Performance Tuning Fixed',
		description:
			'We aim to Data Visualization within the Digital Distribution Network. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on Data Analysis to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 42,
		assignedTo: null
	},
	{
		id: 582,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Support',
			supportCase: 'SBU6PYSM3R'
		},
		startDate: '09/24/2023',
		endDate: '05/22/2024',
		skills: [
			'C#',
			'Payment Solutions',
			'SQL',
			'Healthcare IT',
			'Business Intelligence',
			'Inventory Database'
		],
		title: 'Fix SQL in Internal Communication Tool',
		description:
			'The objective here is SQL within the Internal Communication Tool. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Focus also on C# to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 19,
		assignedTo: 5
	},
	{
		id: 583,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Discovery',
			supportCase: 'SBCJ48HNNH'
		},
		startDate: '07/28/2023',
		endDate: '05/22/2024',
		skills: [
			'Supply Chain Management',
			'Analytics',
			'E-commerce Security',
			'Cloud Services',
			'Data Encryption',
			'Data Visualization',
			'System Architecture'
		],
		title: 'Help Cloud Services in Database Optimization',
		description:
			'This task involves System Architecture within the Database Optimization. Following initial steps, you should Cloud Services to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 20,
		assignedTo: 7
	},
	{
		id: 584,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SBZR6PNRPJ'
		},
		startDate: '06/14/2023',
		endDate: '05/05/2024',
		skills: ['API Development', 'Supply Chain Management', 'Network Security'],
		title: 'Tenant Screening Process Needs Supply Chain Management Fixed',
		description:
			'This task involves Network Security within the Tenant Screening Process. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Focus also on Supply Chain Management to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 21,
		assignedTo: 8
	},
	{
		id: 585,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Testing',
			supportCase: 'SBJJ9V234I'
		},
		startDate: '04/12/2024',
		endDate: '05/06/2024',
		skills: [
			'Backend Development',
			'Healthcare IT',
			'Database Management',
			'Operational Efficiency'
		],
		title: 'Support Healthcare IT in Technical Support Portal',
		description:
			'Your main task will be Operational Efficiency within the Technical Support Portal. Your next steps should include Database Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 65,
		assignedTo: 104
	},
	{
		id: 586,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'UAT',
			supportCase: 'SBTPYK8BZY'
		},
		startDate: '12/11/2023',
		endDate: '05/04/2024',
		skills: [
			'Analytics',
			'Regulatory Compliance',
			'Client Communication',
			'Audit Trail Management'
		],
		title: 'Implement Client Communication in Internal Communication Tool',
		description:
			'Your main task will be Analytics within the Internal Communication Tool. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 43,
		assignedTo: 50
	},
	{
		id: 587,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Development',
			supportCase: 'SBUTHGYGWO'
		},
		startDate: '12/26/2023',
		endDate: '05/12/2024',
		skills: [
			'HIPAA Compliance',
			'Audit Trail Management',
			'Operational Efficiency',
			'Inventory Database',
			'C#',
			'UI/UX Design',
			'Supply Chain Management'
		],
		title: 'Resolve Supply Chain Management in Full Stack Web Development',
		description:
			'We aim to C# within the Full Stack Web Development. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 22,
		assignedTo: null
	},
	{
		id: 588,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Testing',
			supportCase: 'SB924NSER6'
		},
		startDate: '12/29/2023',
		endDate: '05/05/2024',
		skills: [
			'Data Visualization',
			'Audit Trail Management',
			'Performance Tuning',
			'Healthcare IT',
			'Report Generation'
		],
		title: 'API Backend Integration Needs Data Visualization Fixed',
		description:
			'We aim to Audit Trail Management within the API Backend Integration. Once completed, proceed to Healthcare IT to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 27,
		assignedTo: 9
	},
	{
		id: 589,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Support',
			supportCase: 'SBTWREKVNI'
		},
		startDate: '03/25/2024',
		endDate: '05/25/2024',
		skills: ['API Development', 'Supply Chain Management', 'SQL', 'Inventory Database'],
		title: 'Adjust SQL in Safety Compliance Check',
		description:
			'Your main task will be Supply Chain Management within the Safety Compliance Check. From there, move on to API Development to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 45,
		assignedTo: 67
	},
	{
		id: 590,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Testing',
			supportCase: 'SBSBDTDOWQ'
		},
		startDate: '09/11/2023',
		endDate: '05/29/2024',
		skills: [
			'Data Encryption',
			'Report Generation',
			'API Development',
			'Performance Tuning',
			'Operational Efficiency',
			'System Architecture',
			'HIPAA Compliance'
		],
		title: 'Help API Development in Sales Dashboard',
		description:
			'You will begin by System Architecture within the Sales Dashboard. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Focus also on Data Encryption to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 29,
		assignedTo: null
	},
	{
		id: 591,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Project Management',
			supportCase: 'SBJW4H3ZUB'
		},
		startDate: '01/26/2024',
		endDate: '04/30/2024',
		skills: [
			'Operational Efficiency',
			'SQL',
			'System Architecture',
			'Regulatory Compliance',
			'Python'
		],
		title: 'Create Operational Efficiency in Payment Gateway Integration',
		description:
			'We aim to SQL within the Payment Gateway Integration. Following initial steps, you should Python to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 44,
		assignedTo: 59
	},
	{
		id: 592,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SB3XNV3Y6D'
		},
		startDate: '07/06/2023',
		endDate: '05/14/2024',
		skills: [
			'Audit Trail Management',
			'SQL',
			'Database Management',
			'Client Communication',
			'Performance Tuning',
			'Data Visualization'
		],
		title: 'Optimize Audit Trail Management in Insurance Claim Automation',
		description:
			'Your main task will be Database Management within the Insurance Claim Automation. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 32,
		assignedTo: 11
	},
	{
		id: 593,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Development',
			supportCase: 'SBXIWF6D6T'
		},
		startDate: '12/31/2023',
		endDate: '05/15/2024',
		skills: [
			'Cloud Services',
			'Analytics',
			'Operational Efficiency',
			'E-commerce Security',
			'Supply Chain Management'
		],
		title: 'Fix Cloud Services in Customer Engagement Platform',
		description:
			'The focus is on Cloud Services within the Customer Engagement Platform. From there, move on to E-commerce Security to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 33,
		assignedTo: 12
	},
	{
		id: 594,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Development',
			supportCase: 'SBT3CVSY92'
		},
		startDate: '01/25/2024',
		endDate: '04/28/2024',
		skills: ['C#', 'Performance Tuning', 'API Development'],
		title: 'Fix Performance Tuning in Content Management System',
		description:
			'Your main task will be API Development within the Content Management System. Subsequently, your efforts will involve API Development to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 48,
		assignedTo: 61
	},
	{
		id: 595,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Project Management',
			supportCase: 'SB9R0YFRXY'
		},
		startDate: '02/19/2024',
		endDate: '05/26/2024',
		skills: [
			'SQL',
			'Performance Tuning',
			'Payment Solutions',
			'User Testing',
			'Client Communication'
		],
		title: 'Optimize User Testing in Front-end Development',
		description:
			'The objective here is Client Communication within the Front-end Development. Your next steps should include Performance Tuning to enhance overall outcomes. Focus also on Client Communication to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 52,
		assignedTo: null
	},
	{
		id: 596,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SB8F6HZCR4'
		},
		startDate: '09/29/2023',
		endDate: '05/08/2024',
		skills: [
			'Analytics',
			'Client Communication',
			'User Testing',
			'Supply Chain Management',
			'UI/UX Design',
			'Inventory Database',
			'Operational Efficiency'
		],
		title: 'Implement Analytics in Social Media Integration',
		description:
			'We aim to UI/UX Design within the Social Media Integration. Your next steps should include Supply Chain Management to enhance overall outcomes. Focus also on Inventory Database to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 49,
		assignedTo: 62
	},
	{
		id: 597,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Development',
			supportCase: 'SB1V16U2RA'
		},
		startDate: '10/28/2023',
		endDate: '05/08/2024',
		skills: [
			'SQL',
			'Data Visualization',
			'Data Analysis',
			'Network Security',
			'Analytics',
			'Report Generation',
			'Business Intelligence'
		],
		title: 'Adjust Data Visualization in Transaction Processing System',
		description:
			'This task involves Network Security within the Transaction Processing System. Your next steps should include SQL to enhance overall outcomes. Focus also on Business Intelligence to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 35,
		assignedTo: 15
	},
	{
		id: 598,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SBR2AJILWT'
		},
		startDate: '12/02/2023',
		endDate: '05/29/2024',
		skills: [
			'Data Encryption',
			'Regulatory Compliance',
			'Report Generation',
			'Operational Efficiency'
		],
		title: 'Adjust Data Encryption in Efficiency Audit Tools',
		description:
			'Your main task will be Operational Efficiency within the Efficiency Audit Tools. Your next steps should include Regulatory Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 38,
		assignedTo: 19
	},
	{
		id: 599,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SBUZXKWH6S'
		},
		startDate: '02/10/2024',
		endDate: '05/09/2024',
		skills: [
			'Data Encryption',
			'API Development',
			'Audit Trail Management',
			'Performance Tuning',
			'Analytics'
		],
		title: 'Implement Audit Trail Management in Efficiency Audit Tools',
		description:
			'This task involves Analytics within the Efficiency Audit Tools. Once completed, proceed to API Development to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 40,
		assignedTo: 20
	},
	{
		id: 600,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SB654VHD1A'
		},
		startDate: '11/06/2023',
		endDate: '05/09/2024',
		skills: [
			'Inventory Database',
			'Cloud Services',
			'E-commerce Security',
			'Analytics',
			'Business Intelligence',
			'System Architecture',
			'Operational Efficiency'
		],
		title: 'Implement System Architecture in Technical Support Portal',
		description:
			'The focus is on Operational Efficiency within the Technical Support Portal. Your next steps should include E-commerce Security to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 41,
		assignedTo: 21
	},
	{
		id: 601,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'UAT',
			supportCase: 'SB9O3NCF6U'
		},
		startDate: '05/02/2023',
		endDate: '04/27/2024',
		skills: [
			'Healthcare IT',
			'Audit Trail Management',
			'Data Encryption',
			'Inventory Database',
			'Data Analysis',
			'Regulatory Compliance'
		],
		title: 'Adjust Audit Trail Management in Social Media Integration',
		description:
			'This task involves Data Analysis within the Social Media Integration. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 46,
		assignedTo: 22
	},
	{
		id: 602,
		role: 'Associate',
		team: 2,
		status: 'Cancelled',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Support',
			supportCase: 'SBE7TSIP8U'
		},
		startDate: '06/30/2023',
		endDate: '05/16/2024',
		skills: [
			'Inventory Database',
			'Performance Tuning',
			'Report Generation',
			'C#',
			'Operational Efficiency',
			'Frontend Development',
			'Backend Development'
		],
		title: 'Real-Time Data Analysis Needs Report Generation Fixed',
		description:
			'We aim to Performance Tuning within the Real-Time Data Analysis. Once completed, proceed to Performance Tuning to enhance overall outcomes. Focus also on Inventory Database to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 47,
		assignedTo: 27
	},
	{
		id: 603,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Development',
			supportCase: 'SB130PD4YF'
		},
		startDate: '06/21/2023',
		endDate: '05/22/2024',
		skills: [
			'User Testing',
			'Audit Trail Management',
			'Data Analysis',
			'Payment Solutions',
			'Regulatory Compliance'
		],
		title: 'Create Payment Solutions in Branding Portal',
		description:
			'This task involves Data Analysis within the Branding Portal. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Payment Solutions to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 50,
		assignedTo: 68
	},
	{
		id: 604,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'UAT',
			supportCase: 'SB3V24AHTM'
		},
		startDate: '05/08/2023',
		endDate: '05/11/2024',
		skills: [
			'HIPAA Compliance',
			'Data Encryption',
			'Inventory Database',
			'Cloud Services',
			'Healthcare IT',
			'E-commerce Security'
		],
		title: 'Implement Inventory Database in Order Fulfillment Automation',
		description:
			'This task involves Data Encryption within the Order Fulfillment Automation. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Focus also on Cloud Services to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 51,
		assignedTo: 29
	},
	{
		id: 605,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Requirements',
			supportCase: 'SB79M8DF9Y'
		},
		startDate: '07/01/2023',
		endDate: '05/10/2024',
		skills: [
			'Audit Trail Management',
			'E-commerce Security',
			'Data Analysis',
			'Client Communication',
			'SQL',
			'Report Generation',
			'Python'
		],
		title: 'Resolve Audit Trail Management in Product Customization Tool',
		description:
			'You will begin by Client Communication within the Product Customization Tool. From there, move on to Client Communication to enhance overall outcomes. Focus also on Python to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 53,
		assignedTo: 32
	},
	{
		id: 606,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Support',
			supportCase: 'SB9G970GWK'
		},
		startDate: '01/14/2024',
		endDate: '05/11/2024',
		skills: ['Frontend Development', 'Backend Development', 'SQL', 'Analytics', 'Healthcare IT'],
		title: 'Implement Analytics in Inventory Management Application',
		description:
			'You will begin by Healthcare IT within the Inventory Management Application. From there, move on to Backend Development to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 54,
		assignedTo: 71
	},
	{
		id: 607,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SB8YENK24Y'
		},
		startDate: '10/21/2023',
		endDate: '05/15/2024',
		skills: [
			'Data Encryption',
			'Performance Tuning',
			'Inventory Database',
			'Business Intelligence',
			'Regulatory Compliance'
		],
		title: 'Resolve Inventory Database in Project Cost Tracking',
		description:
			'Your main task will be Inventory Database within the Project Cost Tracking. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 55,
		assignedTo: 33
	},
	{
		id: 608,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Development',
			supportCase: 'SB7EWD1EN3'
		},
		startDate: '05/19/2023',
		endDate: '05/13/2024',
		skills: [
			'Payment Solutions',
			'C#',
			'System Architecture',
			'Client Communication',
			'Data Analysis',
			'Analytics'
		],
		title: 'Create Analytics in Online Marketing Strategy',
		description:
			'You will begin by C# within the Online Marketing Strategy. Your next steps should include System Architecture to enhance overall outcomes. Focus also on Analytics to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 58,
		assignedTo: 77
	},
	{
		id: 609,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Development',
			supportCase: 'SBVSLM9RW7'
		},
		startDate: '12/14/2023',
		endDate: '04/28/2024',
		skills: ['User Testing', 'Healthcare IT', 'HIPAA Compliance'],
		title: 'Optimize Healthcare IT in Payment Gateway Integration',
		description:
			'The focus is on HIPAA Compliance within the Payment Gateway Integration. Subsequently, your efforts will involve User Testing to enhance overall outcomes. Focus also on Healthcare IT to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 56,
		assignedTo: 35
	},
	{
		id: 610,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Support',
			supportCase: 'SB49QKD7KU'
		},
		startDate: '03/06/2024',
		endDate: '05/12/2024',
		skills: ['Cloud Services', 'E-commerce Security', 'SQL', 'Inventory Database'],
		title: 'Implement E-commerce Security in Building Maintenance App',
		description:
			'We aim to SQL within the Building Maintenance App. Once completed, proceed to SQL to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 57,
		assignedTo: 38
	},
	{
		id: 611,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'UAT',
			supportCase: 'SBHKALK7T7'
		},
		startDate: '06/01/2023',
		endDate: '05/28/2024',
		skills: [
			'Backend Development',
			'Inventory Database',
			'C#',
			'E-commerce Security',
			'Client Communication',
			'Payment Solutions',
			'Audit Trail Management'
		],
		title: 'Media Storage Solutions Needs E-commerce Security Fixed',
		description:
			'You will begin by Client Communication within the Media Storage Solutions. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 70,
		assignedTo: 72
	},
	{
		id: 612,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'UAT',
			supportCase: 'SBSPNOL8R4'
		},
		startDate: '06/06/2023',
		endDate: '05/22/2024',
		skills: [
			'Audit Trail Management',
			'User Testing',
			'Business Intelligence',
			'E-commerce Security'
		],
		title: 'Create User Testing in Compliance Tracking System',
		description:
			'You will begin by Audit Trail Management within the Compliance Tracking System. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 59,
		assignedTo: 40
	},
	{
		id: 613,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Development',
			supportCase: 'SB36J0J4BG'
		},
		startDate: '03/23/2023',
		endDate: '05/17/2024',
		skills: ['Analytics', 'Backend Development', 'Inventory Database', 'User Testing'],
		title: 'Help User Testing in Audience Analytics',
		description:
			'This task involves Inventory Database within the Audience Analytics. Your next steps should include User Testing to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 60,
		assignedTo: null
	},
	{
		id: 614,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SB74J1FJHW'
		},
		startDate: '03/05/2024',
		endDate: '05/22/2024',
		skills: [
			'Healthcare IT',
			'Business Intelligence',
			'Inventory Database',
			'Regulatory Compliance',
			'Cloud Services'
		],
		title: 'Help Regulatory Compliance in Data Reporting Tools',
		description:
			'The objective here is Business Intelligence within the Data Reporting Tools. From there, move on to Cloud Services to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 61,
		assignedTo: 81
	},
	{
		id: 615,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Development',
			supportCase: 'SB78FYYOBZ'
		},
		startDate: '01/31/2024',
		endDate: '05/05/2024',
		skills: [
			'Cloud Services',
			'Data Visualization',
			'Healthcare IT',
			'Data Analysis',
			'Business Intelligence',
			'System Architecture'
		],
		title: 'Optimize Business Intelligence in Database Optimization',
		description:
			'Your main task will be Cloud Services within the Database Optimization. Once completed, proceed to System Architecture to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 62,
		assignedTo: 86
	},
	{
		id: 616,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SBTM888VFY'
		},
		startDate: '11/29/2023',
		endDate: '05/20/2024',
		skills: [
			'Data Analysis',
			'C#',
			'Regulatory Compliance',
			'Cloud Services',
			'Business Intelligence',
			'HIPAA Compliance',
			'Performance Tuning'
		],
		title: 'Customer Engagement Platform Needs Cloud Services Fixed',
		description:
			'Your main task will be Cloud Services within the Customer Engagement Platform. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 66,
		assignedTo: 79
	},
	{
		id: 617,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Project Management',
			supportCase: 'SB03DB8YKD'
		},
		startDate: '04/20/2023',
		endDate: '05/07/2024',
		skills: ['Payment Solutions', 'Analytics', 'Python'],
		title: 'Optimize Python in Transaction Processing System',
		description:
			'Your main task will be Analytics within the Transaction Processing System. From there, move on to Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 64,
		assignedTo: 41
	},
	{
		id: 618,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Support',
			supportCase: 'SBHL6522CR'
		},
		startDate: '09/11/2023',
		endDate: '05/06/2024',
		skills: [
			'Client Communication',
			'API Development',
			'Operational Efficiency',
			'E-commerce Security',
			'Supply Chain Management'
		],
		title: 'Support Operational Efficiency in Mobile UX/UI Upgrade',
		description:
			'You will begin by API Development within the Mobile UX/UI Upgrade. Your next steps should include Client Communication to enhance overall outcomes. Focus also on Client Communication to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 67,
		assignedTo: null
	},
	{
		id: 619,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Project Management',
			supportCase: 'SBM9V3UHJX'
		},
		startDate: '12/10/2023',
		endDate: '05/24/2024',
		skills: ['API Development', 'Operational Efficiency', 'Analytics'],
		title: 'Create Analytics in E-commerce SEO Optimization',
		description:
			'We aim to Operational Efficiency within the E-commerce SEO Optimization. Following initial steps, you should Analytics to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 72,
		assignedTo: 70
	},
	{
		id: 620,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Support',
			supportCase: 'SBUO5I29JB'
		},
		startDate: '03/25/2024',
		endDate: '05/06/2024',
		skills: [
			'Business Intelligence',
			'API Development',
			'Healthcare IT',
			'Data Analysis',
			'Data Encryption',
			'C#',
			'Operational Efficiency'
		],
		title: 'Fix Data Encryption in Safety Compliance Check',
		description:
			'This task involves Data Analysis within the Safety Compliance Check. Your next steps should include Healthcare IT to enhance overall outcomes. Focus also on API Development to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 68,
		assignedTo: 87
	},
	{
		id: 621,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Support',
			supportCase: 'SBHS2DDVLW'
		},
		startDate: '12/14/2023',
		endDate: '05/08/2024',
		skills: ['Business Intelligence', 'E-commerce Security', 'SQL', 'Analytics', 'UI/UX Design'],
		title: 'Support E-commerce Security in Logistics Tracking Interface',
		description:
			'We aim to SQL within the Logistics Tracking Interface. Subsequently, your efforts will involve UI/UX Design to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 73,
		assignedTo: null
	},
	{
		id: 622,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Testing',
			supportCase: 'SBKZU0TZDR'
		},
		startDate: '04/05/2024',
		endDate: '05/20/2024',
		skills: [
			'Data Encryption',
			'Regulatory Compliance',
			'Audit Trail Management',
			'HIPAA Compliance',
			'Cloud Services',
			'Payment Solutions',
			'Operational Efficiency'
		],
		title: 'Adjust Audit Trail Management in Workflow Automation',
		description:
			'Your main task will be Audit Trail Management within the Workflow Automation. From there, move on to Operational Efficiency to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 74,
		assignedTo: 84
	},
	{
		id: 623,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Support',
			supportCase: 'SBZ2WJ4UZE'
		},
		startDate: '05/01/2023',
		endDate: '05/12/2024',
		skills: [
			'Regulatory Compliance',
			'Client Communication',
			'Backend Development',
			'Business Intelligence',
			'Database Management',
			'Data Analysis',
			'Inventory Database'
		],
		title: 'Customer Loyalty Programs Needs Inventory Database Fixed',
		description:
			'The focus is on Regulatory Compliance within the Customer Loyalty Programs. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 69,
		assignedTo: 46
	},
	{
		id: 624,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Requirements',
			supportCase: 'SBOFD74SQ1'
		},
		startDate: '05/29/2023',
		endDate: '05/14/2024',
		skills: ['Data Analysis', 'Network Security', 'E-commerce Security'],
		title: 'Adjust Data Analysis in Lead Tracking Software',
		description:
			'The objective here is Data Analysis within the Lead Tracking Software. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on E-commerce Security to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 71,
		assignedTo: 47
	},
	{
		id: 625,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SBYJXNTYBL'
		},
		startDate: '02/20/2024',
		endDate: '05/25/2024',
		skills: ['HIPAA Compliance', 'Payment Solutions', 'SQL', 'Frontend Development'],
		title: 'Resolve SQL in Product Design Simulation',
		description:
			'This task involves Payment Solutions within the Product Design Simulation. Your next steps should include Frontend Development to enhance overall outcomes. Focus also on Frontend Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 78,
		assignedTo: 74
	},
	{
		id: 626,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'UAT',
			supportCase: 'SB9QC3NJ0I'
		},
		startDate: '05/18/2023',
		endDate: '05/26/2024',
		skills: [
			'Regulatory Compliance',
			'SQL',
			'Data Visualization',
			'Audit Trail Management',
			'Report Generation'
		],
		title: 'Help Audit Trail Management in Digital Distribution Network',
		description:
			'This task involves Data Visualization within the Digital Distribution Network. From there, move on to Report Generation to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 77,
		assignedTo: null
	},
	{
		id: 627,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Development',
			supportCase: 'SBO06JR8YY'
		},
		startDate: '09/10/2023',
		endDate: '05/06/2024',
		skills: [
			'E-commerce Security',
			'C#',
			'HIPAA Compliance',
			'Payment Solutions',
			'Inventory Database'
		],
		title: 'Fix Inventory Database in Customer Loyalty Programs',
		description:
			'The objective here is Inventory Database within the Customer Loyalty Programs. Once completed, proceed to Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 79,
		assignedTo: null
	},
	{
		id: 628,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'UAT',
			supportCase: 'SB2X4I7AD7'
		},
		startDate: '08/14/2023',
		endDate: '05/28/2024',
		skills: [
			'Data Encryption',
			'Performance Tuning',
			'Data Analysis',
			'SQL',
			'Supply Chain Management'
		],
		title: 'Support Data Encryption in Enterprise Resource Planning',
		description:
			'The objective here is Data Encryption within the Enterprise Resource Planning. Subsequently, your efforts will involve Data Analysis to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 81,
		assignedTo: 88
	},
	{
		id: 629,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 9,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Development',
			supportCase: 'SBY8T5ANOJ'
		},
		startDate: '08/25/2023',
		endDate: '05/03/2024',
		skills: ['Database Management', 'UI/UX Design', 'Operational Efficiency', 'Payment Solutions'],
		title: 'Fix Database Management in Rental Management Software',
		description:
			'The objective here is Operational Efficiency within the Rental Management Software. From there, move on to Database Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 75,
		assignedTo: null
	},
	{
		id: 630,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Testing',
			supportCase: 'SBU4WYGY0Y'
		},
		startDate: '03/15/2024',
		endDate: '05/24/2024',
		skills: ['C#', 'HIPAA Compliance', 'Performance Tuning'],
		title: 'Adjust HIPAA Compliance in Mobile UX/UI Upgrade',
		description:
			'This task involves HIPAA Compliance within the Mobile UX/UI Upgrade. From there, move on to C# to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 83,
		assignedTo: 85
	},
	{
		id: 631,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Support',
			supportCase: 'SBR96B0WT0'
		},
		startDate: '02/29/2024',
		endDate: '05/10/2024',
		skills: ['User Testing', 'Analytics', 'SQL', 'E-commerce Security'],
		title: 'Cloud Data Solutions Needs Analytics Fixed',
		description:
			'Your main task will be E-commerce Security within the Cloud Data Solutions. From there, move on to User Testing to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 84,
		assignedTo: 94
	},
	{
		id: 632,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 1,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Project Management',
			supportCase: 'SBNQOSNG56'
		},
		startDate: '06/27/2023',
		endDate: '05/03/2024',
		skills: [
			'Supply Chain Management',
			'Payment Solutions',
			'Audit Trail Management',
			'Analytics',
			'Business Intelligence'
		],
		title: 'Fix Supply Chain Management in E-commerce SEO Optimization',
		description:
			'The focus is on Payment Solutions within the E-commerce SEO Optimization. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Focus also on Business Intelligence to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 76,
		assignedTo: 51
	},
	{
		id: 633,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Third-Party API Integrations',
			projectCode: 'Project Management',
			supportCase: 'SBFBNUFZNI'
		},
		startDate: '04/10/2023',
		endDate: '04/30/2024',
		skills: [
			'Healthcare IT',
			'Business Intelligence',
			'SQL',
			'E-commerce Security',
			'Inventory Database'
		],
		title: 'Third-Party API Integrations Needs Business Intelligence Fixed',
		description:
			'We aim to E-commerce Security within the Third-Party API Integrations. Once completed, proceed to SQL to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 80,
		assignedTo: 53
	},
	{
		id: 634,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Development',
			supportCase: 'SBJ2P4EX9T'
		},
		startDate: '06/10/2023',
		endDate: '05/28/2024',
		skills: [
			'SQL',
			'Analytics',
			'Healthcare IT',
			'Network Security',
			'Cloud Services',
			'Supply Chain Management'
		],
		title: 'Adjust Network Security in Social Media Integration',
		description:
			'This task involves Network Security within the Social Media Integration. Following initial steps, you should Healthcare IT to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 85,
		assignedTo: 95
	},
	{
		id: 635,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBIYCCKVSX'
		},
		startDate: '07/20/2023',
		endDate: '05/22/2024',
		skills: [
			'Regulatory Compliance',
			'Database Management',
			'Report Generation',
			'Performance Tuning',
			'C#',
			'Frontend Development'
		],
		title: 'Support Report Generation in E-commerce SEO Optimization',
		description:
			'You will begin by Report Generation within the E-commerce SEO Optimization. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 86,
		assignedTo: 97
	},
	{
		id: 636,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Data Cleansing',
			projectCode: 'Support',
			supportCase: 'SBLVKTACYG'
		},
		startDate: '05/22/2023',
		endDate: '05/26/2024',
		skills: ['Data Analysis', 'Frontend Development', 'Report Generation'],
		title: 'Adjust Report Generation in Data Cleansing',
		description:
			'Your main task will be Report Generation within the Data Cleansing. Following initial steps, you should Report Generation to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 87,
		assignedTo: 98
	},
	{
		id: 637,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'UAT',
			supportCase: 'SBJMK75TIH'
		},
		startDate: '12/24/2023',
		endDate: '05/29/2024',
		skills: ['Regulatory Compliance', 'SQL', 'Operational Efficiency'],
		title: 'Fix Regulatory Compliance in Compliance Tracking System',
		description:
			'The objective here is Regulatory Compliance within the Compliance Tracking System. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 89,
		assignedTo: null
	},
	{
		id: 638,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Support',
			supportCase: 'SB3FJP6MNE'
		},
		startDate: '10/20/2023',
		endDate: '05/24/2024',
		skills: [
			'Operational Efficiency',
			'Data Visualization',
			'User Testing',
			'Report Generation',
			'Regulatory Compliance'
		],
		title: 'Efficiency Audit Tools Needs Data Visualization Fixed',
		description:
			'Your main task will be Operational Efficiency within the Efficiency Audit Tools. Once completed, proceed to User Testing to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 88,
		assignedTo: 99
	},
	{
		id: 639,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Discovery',
			supportCase: 'SBVJ717521'
		},
		startDate: '11/18/2023',
		endDate: '05/01/2024',
		skills: ['Operational Efficiency', 'Analytics', 'E-commerce Security', 'HIPAA Compliance'],
		title: 'Optimize Operational Efficiency in Front-end Development',
		description:
			'The focus is on Analytics within the Front-end Development. From there, move on to Analytics to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 90,
		assignedTo: null
	},
	{
		id: 640,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Development',
			supportCase: 'SBQTFJAS9G'
		},
		startDate: '11/18/2023',
		endDate: '05/05/2024',
		skills: [
			'Data Encryption',
			'Data Visualization',
			'Cloud Services',
			'Report Generation',
			'Operational Efficiency',
			'API Development',
			'HIPAA Compliance'
		],
		title: 'Implement API Development in Market Analysis Tool',
		description:
			'Your main task will be Report Generation within the Market Analysis Tool. Following initial steps, you should Report Generation to enhance overall outcomes. Focus also on Data Encryption to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 92,
		assignedTo: 2
	},
	{
		id: 641,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Support',
			supportCase: 'SB78AYYOYY'
		},
		startDate: '04/03/2023',
		endDate: '05/14/2024',
		skills: [
			'E-commerce Security',
			'Healthcare IT',
			'Performance Tuning',
			'Payment Solutions',
			'System Architecture',
			'Regulatory Compliance',
			'Data Analysis'
		],
		title: 'Fix Healthcare IT in Responsive Web Design',
		description:
			'We aim to Regulatory Compliance within the Responsive Web Design. Once completed, proceed to Payment Solutions to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 82,
		assignedTo: 55
	},
	{
		id: 642,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SBU5ESTK4Q'
		},
		startDate: '06/06/2023',
		endDate: '05/16/2024',
		skills: [
			'Network Security',
			'E-commerce Security',
			'SQL',
			'Performance Tuning',
			'Healthcare IT',
			'Audit Trail Management'
		],
		title: 'Help SQL in Product Design Simulation',
		description:
			'The focus is on Network Security within the Product Design Simulation. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 91,
		assignedTo: null
	},
	{
		id: 643,
		role: 'Senior Manager',
		team: 2,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Support',
			supportCase: 'SBWSHRANJ6'
		},
		startDate: '03/30/2024',
		endDate: '04/27/2024',
		skills: [
			'SQL',
			'User Testing',
			'Inventory Database',
			'Backend Development',
			'Performance Tuning',
			'Business Intelligence',
			'Data Analysis'
		],
		title: 'Implement Business Intelligence in Material Specification Tool',
		description:
			'The focus is on Inventory Database within the Material Specification Tool. Following initial steps, you should Backend Development to enhance overall outcomes. Focus also on User Testing to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 103,
		assignedTo: 17
	},
	{
		id: 644,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SBPX4BKYWM'
		},
		startDate: '04/22/2024',
		endDate: '05/20/2024',
		skills: ['Supply Chain Management', 'Performance Tuning', 'Client Communication'],
		title: 'Optimize Performance Tuning in Payment Gateway Integration',
		description:
			'Your main task will be Performance Tuning within the Payment Gateway Integration. From there, move on to Supply Chain Management to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 93,
		assignedTo: 56
	},
	{
		id: 645,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'UAT',
			supportCase: 'SB6NRBDURY'
		},
		startDate: '04/26/2024',
		endDate: '04/29/2024',
		skills: [
			'API Development',
			'Audit Trail Management',
			'Inventory Database',
			'Cloud Services',
			'Regulatory Compliance',
			'Operational Efficiency'
		],
		title: 'Implement API Development in Retail Management Suite',
		description:
			'The focus is on Audit Trail Management within the Retail Management Suite. From there, move on to Operational Efficiency to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 94,
		assignedTo: null
	},
	{
		id: 646,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Support',
			supportCase: 'SBEDMW3GJI'
		},
		startDate: '12/14/2023',
		endDate: '05/29/2024',
		skills: [
			'Supply Chain Management',
			'JavaScript',
			'Data Analysis',
			'Operational Efficiency',
			'Inventory Database',
			'Audit Trail Management',
			'Data Visualization'
		],
		title: 'Support Supply Chain Management in Visualization of Data Insights',
		description:
			'You will begin by Data Analysis within the Visualization of Data Insights. Your next steps should include JavaScript to enhance overall outcomes. Focus also on Audit Trail Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 102,
		assignedTo: 78
	},
	{
		id: 647,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Support',
			supportCase: 'SBDVMD3TAY'
		},
		startDate: '04/17/2023',
		endDate: '05/12/2024',
		skills: ['Healthcare IT', 'Data Encryption', 'HIPAA Compliance', 'Audit Trail Management'],
		title: 'Implement Data Encryption in Internal Communication Tool',
		description:
			'The objective here is Audit Trail Management within the Internal Communication Tool. Following initial steps, you should Healthcare IT to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 95,
		assignedTo: 57
	},
	{
		id: 648,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Support',
			supportCase: 'SBJ8M5G8QC'
		},
		startDate: '07/07/2023',
		endDate: '05/09/2024',
		skills: [
			'Analytics',
			'Cloud Services',
			'JavaScript',
			'Operational Efficiency',
			'System Architecture',
			'Data Encryption'
		],
		title: 'SaaS Platform Integration Needs Cloud Services Fixed',
		description:
			'We aim to JavaScript within the SaaS Platform Integration. Your next steps should include JavaScript to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 96,
		assignedTo: 64
	},
	{
		id: 649,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SBHGDPU2HS'
		},
		startDate: '08/28/2023',
		endDate: '05/18/2024',
		skills: ['Business Intelligence', 'C#', 'Data Analysis', 'Analytics'],
		title: 'Help C# in Mobile Application Framework',
		description:
			'Your main task will be Analytics within the Mobile Application Framework. From there, move on to C# to enhance overall outcomes. Focus also on Data Analysis to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 97,
		assignedTo: 69
	},
	{
		id: 650,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Support',
			supportCase: 'SBL6BGT5BM'
		},
		startDate: '08/01/2023',
		endDate: '05/06/2024',
		skills: ['Regulatory Compliance', 'Client Communication', 'SQL'],
		title: 'Help Client Communication in Lead Tracking Software',
		description:
			'You will begin by Regulatory Compliance within the Lead Tracking Software. From there, move on to Client Communication to enhance overall outcomes. Focus also on SQL to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 101,
		assignedTo: 89
	},
	{
		id: 651,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Development',
			supportCase: 'SBX33862S2'
		},
		startDate: '05/07/2023',
		endDate: '04/27/2024',
		skills: [
			'Business Intelligence',
			'Payment Solutions',
			'Data Analysis',
			'Regulatory Compliance'
		],
		title: 'Audience Analytics Needs Regulatory Compliance Fixed',
		description:
			'This task involves Payment Solutions within the Audience Analytics. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on Data Analysis to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 98,
		assignedTo: 4
	},
	{
		id: 652,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Development',
			supportCase: 'SBGB1LTXLZ'
		},
		startDate: '09/28/2023',
		endDate: '05/17/2024',
		skills: [
			'Supply Chain Management',
			'Client Communication',
			'Audit Trail Management',
			'Inventory Database',
			'Cloud Services',
			'Data Visualization'
		],
		title: 'Implement Inventory Database in Digital Distribution Network',
		description:
			'You will begin by Audit Trail Management within the Digital Distribution Network. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on Client Communication to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 99,
		assignedTo: 75
	},
	{
		id: 653,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Development',
			supportCase: 'SB8HH3KX1B'
		},
		startDate: '11/21/2023',
		endDate: '05/16/2024',
		skills: [
			'Audit Trail Management',
			'Business Intelligence',
			'HIPAA Compliance',
			'Report Generation'
		],
		title: 'Create Report Generation in Health Records Integration',
		description:
			'You will begin by Audit Trail Management within the Health Records Integration. From there, move on to HIPAA Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 104,
		assignedTo: 13
	},
	{
		id: 654,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Project Management',
			supportCase: 'SBADJF8RR9'
		},
		startDate: '02/10/2024',
		endDate: '05/17/2024',
		skills: ['Data Analysis', 'API Development', 'Network Security', 'Healthcare IT'],
		title: 'Workflow Automation Needs Network Security Fixed',
		description:
			'We aim to Data Analysis within the Workflow Automation. Your next steps should include API Development to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 105,
		assignedTo: 16
	},
	{
		id: 655,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Testing',
			supportCase: 'SB5JUET2MV'
		},
		startDate: '01/30/2024',
		endDate: '05/03/2024',
		skills: [
			'Healthcare IT',
			'Payment Solutions',
			'Client Communication',
			'Cloud Services',
			'HIPAA Compliance',
			'Inventory Database'
		],
		title: 'Efficiency Audit Tools Needs Healthcare IT Fixed',
		description:
			'You will begin by HIPAA Compliance within the Efficiency Audit Tools. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Inventory Database to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 100,
		assignedTo: null
	},
	{
		id: 656,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SBH0OXVRZK'
		},
		startDate: '01/31/2024',
		endDate: '04/29/2024',
		skills: [
			'Report Generation',
			'Network Security',
			'Payment Solutions',
			'Inventory Database',
			'HIPAA Compliance',
			'Supply Chain Management'
		],
		title: 'Fix HIPAA Compliance in Data Reporting Tools',
		description:
			'The focus is on Payment Solutions within the Data Reporting Tools. From there, move on to Network Security to enhance overall outcomes. Focus also on Report Generation to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 106,
		assignedTo: 76
	},
	{
		id: 657,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SB2YKL0TZX'
		},
		startDate: '08/25/2023',
		endDate: '05/29/2024',
		skills: ['Payment Solutions', 'JavaScript', 'E-commerce Security', 'UI/UX Design'],
		title: 'Create E-commerce Security in Visualization of Data Insights',
		description:
			'You will begin by JavaScript within the Visualization of Data Insights. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 108,
		assignedTo: 24
	},
	{
		id: 658,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Testing',
			supportCase: 'SBWCW9BVSY'
		},
		startDate: '10/28/2023',
		endDate: '05/22/2024',
		skills: [
			'Cloud Services',
			'Regulatory Compliance',
			'Operational Efficiency',
			'Python',
			'E-commerce Security'
		],
		title: 'Resolve Regulatory Compliance in Risk Assessment Software',
		description:
			'This task involves Operational Efficiency within the Risk Assessment Software. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 109,
		assignedTo: 92
	},
	{
		id: 659,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBPD2C4IY6'
		},
		startDate: '11/08/2023',
		endDate: '05/19/2024',
		skills: ['SQL', 'Payment Solutions', 'Client Communication'],
		title: 'Fix Client Communication in SaaS Platform Integration',
		description:
			'You will begin by Payment Solutions within the SaaS Platform Integration. From there, move on to Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 107,
		assignedTo: 80
	},
	{
		id: 660,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Testing',
			supportCase: 'SBWHIBHJS9'
		},
		startDate: '09/19/2023',
		endDate: '04/27/2024',
		skills: [
			'C#',
			'Payment Solutions',
			'Inventory Database',
			'Data Encryption',
			'E-commerce Security'
		],
		title: 'SaaS Platform Integration Needs C# Fixed',
		description:
			'We aim to Data Encryption within the SaaS Platform Integration. Following initial steps, you should Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 110,
		assignedTo: 26
	},
	{
		id: 661,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SB2SRZMPFN'
		},
		startDate: '07/24/2023',
		endDate: '05/28/2024',
		skills: [
			'Backend Development',
			'Client Communication',
			'E-commerce Security',
			'Regulatory Compliance'
		],
		title: 'Support Client Communication in Mobile Application Framework',
		description:
			'You will begin by Client Communication within the Mobile Application Framework. Your next steps should include Backend Development to enhance overall outcomes. Focus also on Client Communication to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 1,
		assignedTo: null
	},
	{
		id: 662,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'UAT',
			supportCase: 'SBO94U8CA5'
		},
		startDate: '04/01/2024',
		endDate: '05/09/2024',
		skills: [
			'API Development',
			'System Architecture',
			'Cloud Services',
			'Client Communication',
			'Data Encryption',
			'Inventory Database'
		],
		title: 'Help API Development in Digital Catalogue',
		description:
			'This task involves Data Encryption within the Digital Catalogue. Following initial steps, you should System Architecture to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 2,
		assignedTo: null
	},
	{
		id: 663,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 6,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Development',
			supportCase: 'SB0A8WGKF7'
		},
		startDate: '07/01/2023',
		endDate: '05/13/2024',
		skills: ['SQL', 'Business Intelligence', 'Cloud Services'],
		title: 'Fix Business Intelligence in Content Management System',
		description:
			'You will begin by Cloud Services within the Content Management System. Following initial steps, you should SQL to enhance overall outcomes. Focus also on SQL to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 4,
		assignedTo: 37
	},
	{
		id: 664,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Development',
			supportCase: 'SBFI84TFJ2'
		},
		startDate: '09/29/2023',
		endDate: '05/12/2024',
		skills: ['E-commerce Security', 'Supply Chain Management', 'HIPAA Compliance'],
		title: 'Rental Management Software Needs Supply Chain Management Fixed',
		description:
			'Your main task will be E-commerce Security within the Rental Management Software. Your next steps should include HIPAA Compliance to enhance overall outcomes. Focus also on E-commerce Security to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 3,
		assignedTo: 82
	},
	{
		id: 665,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'UAT',
			supportCase: 'SBYWUMDKVO'
		},
		startDate: '07/11/2023',
		endDate: '05/20/2024',
		skills: ['Inventory Database', 'Data Visualization', 'API Development', 'Client Communication'],
		title: 'Adjust Data Visualization in Mobile Application Framework',
		description:
			'We aim to API Development within the Mobile Application Framework. Your next steps should include Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 14,
		assignedTo: 96
	},
	{
		id: 666,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Development',
			supportCase: 'SB5YJOTFJ9'
		},
		startDate: '12/30/2023',
		endDate: '05/20/2024',
		skills: [
			'Cloud Services',
			'System Architecture',
			'Report Generation',
			'E-commerce Security',
			'Network Security'
		],
		title: 'Internal Communication Tool Needs Report Generation Fixed',
		description:
			'We aim to Cloud Services within the Internal Communication Tool. From there, move on to Network Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 6,
		assignedTo: 43
	},
	{
		id: 667,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Testing',
			supportCase: 'SBJUK168MV'
		},
		startDate: '09/26/2023',
		endDate: '05/19/2024',
		skills: ['Inventory Database', 'Operational Efficiency', 'Python'],
		title: 'Optimize Python in Supply Chain Management System',
		description:
			'This task involves Inventory Database within the Supply Chain Management System. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 5,
		assignedTo: 91
	},
	{
		id: 668,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Project Management',
			supportCase: 'SBMCQC3LRJ'
		},
		startDate: '11/27/2023',
		endDate: '05/24/2024',
		skills: [
			'Payment Solutions',
			'Healthcare IT',
			'Analytics',
			'E-commerce Security',
			'SQL',
			'Audit Trail Management'
		],
		title: 'Help Audit Trail Management in Media Storage Solutions',
		description:
			'Your main task will be Analytics within the Media Storage Solutions. From there, move on to Healthcare IT to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 7,
		assignedTo: 93
	},
	{
		id: 669,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Testing',
			supportCase: 'SBNTCEJ4YL'
		},
		startDate: '07/17/2023',
		endDate: '05/27/2024',
		skills: ['HIPAA Compliance', 'UI/UX Design', 'SQL', 'E-commerce Security', 'Report Generation'],
		title: 'Optimize UI/UX Design in Branding Portal',
		description:
			'Your main task will be E-commerce Security within the Branding Portal. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Focus also on SQL to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 8,
		assignedTo: 100
	},
	{
		id: 670,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'UAT',
			supportCase: 'SBUCNQ5MO7'
		},
		startDate: '07/23/2023',
		endDate: '04/27/2024',
		skills: [
			'JavaScript',
			'Cloud Services',
			'Network Security',
			'C#',
			'Inventory Database',
			'Audit Trail Management'
		],
		title: 'Project Cost Tracking Needs Inventory Database Fixed',
		description:
			'We aim to Inventory Database within the Project Cost Tracking. Your next steps should include Network Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 9,
		assignedTo: null
	},
	{
		id: 671,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Support',
			supportCase: 'SB8LLVVBEU'
		},
		startDate: '03/26/2023',
		endDate: '05/16/2024',
		skills: ['System Architecture', 'Analytics', 'Audit Trail Management'],
		title: 'Resolve System Architecture in E-commerce SEO Optimization',
		description:
			'We aim to Analytics within the E-commerce SEO Optimization. From there, move on to Analytics to enhance overall outcomes. Focus also on Audit Trail Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 10,
		assignedTo: 106
	},
	{
		id: 672,
		role: 'Supervisor',
		team: 2,
		status: 'Cancelled',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Development',
			supportCase: 'SBCIX2ZZKT'
		},
		startDate: '07/23/2023',
		endDate: '05/24/2024',
		skills: ['User Testing', 'Performance Tuning', 'Audit Trail Management'],
		title: 'Create User Testing in Customer Engagement Platform',
		description:
			'The objective here is User Testing within the Customer Engagement Platform. Subsequently, your efforts will involve User Testing to enhance overall outcomes. Focus also on User Testing to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 17,
		assignedTo: 101
	},
	{
		id: 673,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Support',
			supportCase: 'SBDYQ6XYUW'
		},
		startDate: '05/05/2023',
		endDate: '04/29/2024',
		skills: [
			'Payment Solutions',
			'User Testing',
			'Data Analysis',
			'Healthcare IT',
			'Data Visualization',
			'Frontend Development',
			'Regulatory Compliance'
		],
		title: 'Online Marketing Strategy Needs Payment Solutions Fixed',
		description:
			'You will begin by Frontend Development within the Online Marketing Strategy. From there, move on to Data Visualization to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 13,
		assignedTo: 44
	},
	{
		id: 674,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SB85A001QA'
		},
		startDate: '09/18/2023',
		endDate: '04/28/2024',
		skills: ['Analytics', 'Data Analysis', 'Operational Efficiency', 'Payment Solutions'],
		title: 'SaaS Platform Integration Needs Data Analysis Fixed',
		description:
			'We aim to Operational Efficiency within the SaaS Platform Integration. From there, move on to Operational Efficiency to enhance overall outcomes. Focus also on Data Analysis to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 16,
		assignedTo: null
	},
	{
		id: 675,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Testing',
			supportCase: 'SB8THUVXRS'
		},
		startDate: '08/10/2023',
		endDate: '04/27/2024',
		skills: [
			'Cloud Services',
			'Inventory Database',
			'Data Encryption',
			'E-commerce Security',
			'Audit Trail Management'
		],
		title: 'Support E-commerce Security in Social Media Integration',
		description:
			'This task involves Audit Trail Management within the Social Media Integration. Following initial steps, you should Data Encryption to enhance overall outcomes. Focus also on E-commerce Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 18,
		assignedTo: 105
	},
	{
		id: 676,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Support',
			supportCase: 'SB0PKQR8W5'
		},
		startDate: '06/12/2023',
		endDate: '05/11/2024',
		skills: [
			'API Development',
			'Analytics',
			'Regulatory Compliance',
			'HIPAA Compliance',
			'Performance Tuning'
		],
		title: 'Optimize Performance Tuning in Material Specification Tool',
		description:
			'You will begin by API Development within the Material Specification Tool. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 11,
		assignedTo: 107
	},
	{
		id: 677,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Testing',
			supportCase: 'SBPCCZNC86'
		},
		startDate: '02/05/2024',
		endDate: '05/02/2024',
		skills: ['JavaScript', 'Python', 'Operational Efficiency'],
		title: 'Fix Operational Efficiency in Sales Dashboard',
		description:
			'This task involves Operational Efficiency within the Sales Dashboard. Once completed, proceed to JavaScript to enhance overall outcomes. Focus also on JavaScript to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 23,
		assignedTo: 49
	},
	{
		id: 678,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Development',
			supportCase: 'SB20JYRWR6'
		},
		startDate: '01/20/2024',
		endDate: '05/23/2024',
		skills: ['Business Intelligence', 'Analytics', 'Client Communication'],
		title: 'Adjust Client Communication in Content Management System',
		description:
			'This task involves Business Intelligence within the Content Management System. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Client Communication to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 12,
		assignedTo: 3
	},
	{
		id: 679,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Testing',
			supportCase: 'SBWTH1JDGJ'
		},
		startDate: '09/27/2023',
		endDate: '05/06/2024',
		skills: [
			'User Testing',
			'Python',
			'Audit Trail Management',
			'Business Intelligence',
			'Data Visualization',
			'Report Generation'
		],
		title: 'Create User Testing in Workflow Automation',
		description:
			'The focus is on User Testing within the Workflow Automation. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 15,
		assignedTo: 5
	},
	{
		id: 680,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SBPCMU7K54'
		},
		startDate: '08/21/2023',
		endDate: '05/11/2024',
		skills: [
			'HIPAA Compliance',
			'User Testing',
			'Backend Development',
			'Supply Chain Management',
			'Regulatory Compliance'
		],
		title: 'Resolve Backend Development in Web Performance Monitoring',
		description:
			'The focus is on Backend Development within the Web Performance Monitoring. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Focus also on Backend Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 25,
		assignedTo: 63
	},
	{
		id: 681,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Testing',
			supportCase: 'SBFHBVKX7R'
		},
		startDate: '01/20/2024',
		endDate: '05/25/2024',
		skills: [
			'C#',
			'System Architecture',
			'E-commerce Security',
			'Business Intelligence',
			'Payment Solutions',
			'Healthcare IT'
		],
		title: 'Predictive Analytics Modeling Needs Healthcare IT Fixed',
		description:
			'The focus is on Healthcare IT within the Predictive Analytics Modeling. From there, move on to E-commerce Security to enhance overall outcomes. Focus also on Healthcare IT to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 19,
		assignedTo: 7
	},
	{
		id: 682,
		role: 'Manager',
		team: 1,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Support',
			supportCase: 'SB4PH0BHE7'
		},
		startDate: '09/14/2023',
		endDate: '05/26/2024',
		skills: [
			'System Architecture',
			'Data Encryption',
			'JavaScript',
			'Business Intelligence',
			'Client Communication',
			'Network Security'
		],
		title: 'Support Business Intelligence in Front-end Development',
		description:
			'You will begin by JavaScript within the Front-end Development. From there, move on to Network Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 28,
		assignedTo: 102
	},
	{
		id: 683,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Testing',
			supportCase: 'SBVA5GQGCE'
		},
		startDate: '09/24/2023',
		endDate: '05/27/2024',
		skills: ['Analytics', 'System Architecture', 'Payment Solutions', 'Supply Chain Management'],
		title: 'Support Payment Solutions in Audience Analytics',
		description:
			'You will begin by System Architecture within the Audience Analytics. Your next steps should include System Architecture to enhance overall outcomes. Focus also on Payment Solutions to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 30,
		assignedTo: 108
	},
	{
		id: 684,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Project Management',
			supportCase: 'SBBEFDIG1N'
		},
		startDate: '11/26/2023',
		endDate: '05/04/2024',
		skills: [
			'Healthcare IT',
			'Database Management',
			'Supply Chain Management',
			'UI/UX Design',
			'C#',
			'Analytics',
			'Frontend Development'
		],
		title: 'Help Supply Chain Management in Digital Catalogue',
		description:
			'The objective here is Database Management within the Digital Catalogue. Following initial steps, you should Frontend Development to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 20,
		assignedTo: 8
	},
	{
		id: 685,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Support',
			supportCase: 'SBEUCH99V4'
		},
		startDate: '05/31/2023',
		endDate: '05/17/2024',
		skills: ['C#', 'API Development', 'SQL', 'Inventory Database'],
		title: 'Create Inventory Database in Client Onboarding Process',
		description:
			'Your main task will be Inventory Database within the Client Onboarding Process. Once completed, proceed to SQL to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 31,
		assignedTo: 109
	},
	{
		id: 686,
		role: 'Supervisor',
		team: 1,
		status: 'Cancelled',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Support',
			supportCase: 'SBUTWNW45H'
		},
		startDate: '03/05/2024',
		endDate: '05/19/2024',
		skills: ['Inventory Database', 'Performance Tuning', 'HIPAA Compliance'],
		title: 'Fix Inventory Database in Safety Compliance Check',
		description:
			'You will begin by HIPAA Compliance within the Safety Compliance Check. Following initial steps, you should Inventory Database to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 34,
		assignedTo: 110
	},
	{
		id: 687,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Third-Party API Integrations',
			projectCode: 'Development',
			supportCase: 'SBVFTSNHE0'
		},
		startDate: '05/01/2023',
		endDate: '05/07/2024',
		skills: [
			'Supply Chain Management',
			'Healthcare IT',
			'Frontend Development',
			'Regulatory Compliance',
			'Database Management',
			'User Testing',
			'Report Generation'
		],
		title: 'Third-Party API Integrations Needs User Testing Fixed',
		description:
			'We aim to Regulatory Compliance within the Third-Party API Integrations. Once completed, proceed to Report Generation to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 24,
		assignedTo: 50
	},
	{
		id: 688,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'UAT',
			supportCase: 'SB24MNUBNZ'
		},
		startDate: '02/07/2024',
		endDate: '05/15/2024',
		skills: [
			'Audit Trail Management',
			'Network Security',
			'HIPAA Compliance',
			'Inventory Database'
		],
		title: 'Help Network Security in Rental Management Software',
		description:
			'This task involves Network Security within the Rental Management Software. Your next steps should include Network Security to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 26,
		assignedTo: 59
	},
	{
		id: 689,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Support',
			supportCase: 'SB502TAGOZ'
		},
		startDate: '04/19/2023',
		endDate: '05/15/2024',
		skills: [
			'Client Communication',
			'Performance Tuning',
			'API Development',
			'Audit Trail Management',
			'Operational Efficiency',
			'SQL'
		],
		title: 'Adjust Audit Trail Management in Content Management System',
		description:
			'We aim to SQL within the Content Management System. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 36,
		assignedTo: 61
	},
	{
		id: 690,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Testing',
			supportCase: 'SBCZB86A88'
		},
		startDate: '02/10/2024',
		endDate: '05/12/2024',
		skills: [
			'E-commerce Security',
			'C#',
			'Network Security',
			'API Development',
			'SQL',
			'Healthcare IT'
		],
		title: 'Help Network Security in SaaS Platform Integration',
		description:
			'This task involves Network Security within the SaaS Platform Integration. Following initial steps, you should API Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 37,
		assignedTo: 62
	},
	{
		id: 691,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Project Management',
			supportCase: 'SB09E1N6UN'
		},
		startDate: '03/24/2024',
		endDate: '05/26/2024',
		skills: ['Inventory Database', 'Client Communication', 'Operational Efficiency'],
		title: 'Implement Operational Efficiency in Enterprise Resource Planning',
		description:
			'This task involves Operational Efficiency within the Enterprise Resource Planning. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 39,
		assignedTo: 1
	},
	{
		id: 692,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Development',
			supportCase: 'SBGQ5TJRNZ'
		},
		startDate: '04/21/2023',
		endDate: '04/27/2024',
		skills: [
			'Supply Chain Management',
			'E-commerce Security',
			'Performance Tuning',
			'Network Security',
			'API Development',
			'Analytics',
			'Payment Solutions'
		],
		title: 'Help Payment Solutions in Transaction Processing System',
		description:
			'We aim to Supply Chain Management within the Transaction Processing System. Following initial steps, you should Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 42,
		assignedTo: 68
	},
	{
		id: 693,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Support',
			supportCase: 'SB8BMFIMJA'
		},
		startDate: '01/18/2024',
		endDate: '05/09/2024',
		skills: [
			'Inventory Database',
			'Healthcare IT',
			'Regulatory Compliance',
			'Payment Solutions',
			'Data Visualization',
			'Data Analysis',
			'E-commerce Security'
		],
		title: 'Real-Time Data Analysis Needs Payment Solutions Fixed',
		description:
			'The objective here is Healthcare IT within the Real-Time Data Analysis. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Focus also on E-commerce Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 21,
		assignedTo: 9
	},
	{
		id: 694,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Project Management',
			supportCase: 'SB8Q1HH4XD'
		},
		startDate: '11/18/2023',
		endDate: '05/23/2024',
		skills: [
			'Cloud Services',
			'E-commerce Security',
			'Data Analysis',
			'SQL',
			'Supply Chain Management',
			'Data Visualization'
		],
		title: 'Insurance Claim Automation Needs Data Analysis Fixed',
		description:
			'We aim to Data Visualization within the Insurance Claim Automation. Following initial steps, you should E-commerce Security to enhance overall outcomes. Focus also on E-commerce Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 22,
		assignedTo: 11
	},
	{
		id: 695,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Development',
			supportCase: 'SBCQRF2Y3U'
		},
		startDate: '07/21/2023',
		endDate: '05/16/2024',
		skills: [
			'E-commerce Security',
			'HIPAA Compliance',
			'System Architecture',
			'Report Generation',
			'Data Analysis',
			'Data Encryption'
		],
		title: 'Help Data Encryption in Multi-Tenant Systems',
		description:
			'Your main task will be System Architecture within the Multi-Tenant Systems. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Focus also on Data Analysis to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 27,
		assignedTo: 12
	},
	{
		id: 696,
		role: 'Manager',
		team: 2,
		status: 'Sign-off',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'UAT',
			supportCase: 'SB10SJYSV5'
		},
		startDate: '10/15/2023',
		endDate: '05/29/2024',
		skills: ['Business Intelligence', 'Supply Chain Management', 'Audit Trail Management'],
		title: 'Web Performance Monitoring Needs Business Intelligence Fixed',
		description:
			'The focus is on Business Intelligence within the Web Performance Monitoring. Your next steps should include Business Intelligence to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 63,
		assignedTo: 6
	},
	{
		id: 697,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Support',
			supportCase: 'SBIEUIMEN7'
		},
		startDate: '04/12/2023',
		endDate: '04/29/2024',
		skills: ['Frontend Development', 'Analytics', 'Audit Trail Management'],
		title: 'Support Audit Trail Management in Media Storage Solutions',
		description:
			'You will begin by Analytics within the Media Storage Solutions. Following initial steps, you should Frontend Development to enhance overall outcomes. Focus also on Frontend Development to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 29,
		assignedTo: 15
	},
	{
		id: 698,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Support',
			supportCase: 'SB6FH3T9LA'
		},
		startDate: '07/01/2023',
		endDate: '05/25/2024',
		skills: [
			'C#',
			'Inventory Database',
			'E-commerce Security',
			'Supply Chain Management',
			'System Architecture',
			'Analytics'
		],
		title: 'Rental Management Software Needs C# Fixed',
		description:
			'Your main task will be E-commerce Security within the Rental Management Software. Your next steps should include E-commerce Security to enhance overall outcomes. Focus also on E-commerce Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 32,
		assignedTo: null
	},
	{
		id: 699,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Project Management',
			supportCase: 'SB6EUTFQG0'
		},
		startDate: '03/11/2024',
		endDate: '05/23/2024',
		skills: [
			'Payment Solutions',
			'Network Security',
			'Supply Chain Management',
			'Audit Trail Management',
			'Cloud Services',
			'Regulatory Compliance'
		],
		title: 'Safety Compliance Check Needs Cloud Services Fixed',
		description:
			'You will begin by Audit Trail Management within the Safety Compliance Check. Your next steps should include Payment Solutions to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 45,
		assignedTo: 10
	},
	{
		id: 700,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SBYFQWFAE7'
		},
		startDate: '07/15/2023',
		endDate: '04/27/2024',
		skills: ['Cloud Services', 'Data Encryption', 'Data Analysis'],
		title: 'Adjust Data Analysis in Customer Segmentation Analysis',
		description:
			'Your main task will be Cloud Services within the Customer Segmentation Analysis. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Cloud Services to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 33,
		assignedTo: 19
	},
	{
		id: 701,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBSEC5PJUT'
		},
		startDate: '11/06/2023',
		endDate: '05/19/2024',
		skills: [
			'Business Intelligence',
			'Supply Chain Management',
			'Analytics',
			'Payment Solutions',
			'E-commerce Security',
			'Report Generation'
		],
		title: 'Implement Supply Chain Management in E-commerce SEO Optimization',
		description:
			'The focus is on Analytics within the E-commerce SEO Optimization. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Analytics to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 35,
		assignedTo: 20
	},
	{
		id: 702,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SB9ES289R2'
		},
		startDate: '06/22/2023',
		endDate: '05/02/2024',
		skills: [
			'Data Analysis',
			'Business Intelligence',
			'Healthcare IT',
			'Performance Tuning',
			'Client Communication',
			'Inventory Database',
			'Supply Chain Management'
		],
		title: 'Resolve Inventory Database in Efficiency Audit Tools',
		description:
			'The focus is on Business Intelligence within the Efficiency Audit Tools. Following initial steps, you should Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 38,
		assignedTo: 21
	},
	{
		id: 703,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Development',
			supportCase: 'SBPBMLH8X3'
		},
		startDate: '04/13/2023',
		endDate: '05/20/2024',
		skills: [
			'Data Analysis',
			'Performance Tuning',
			'User Testing',
			'Report Generation',
			'Analytics'
		],
		title: 'Fix Report Generation in Market Analysis Tool',
		description:
			'You will begin by Report Generation within the Market Analysis Tool. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Focus also on Performance Tuning to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 40,
		assignedTo: 22
	},
	{
		id: 704,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Support',
			supportCase: 'SBJGK2YLKP'
		},
		startDate: '10/30/2023',
		endDate: '05/15/2024',
		skills: ['Regulatory Compliance', 'SQL', 'API Development', 'Python', 'Data Encryption'],
		title: 'Help SQL in API Backend Integration',
		description:
			'This task involves Regulatory Compliance within the API Backend Integration. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Focus also on Python to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 41,
		assignedTo: 27
	},
	{
		id: 705,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SBMQ3RKW24'
		},
		startDate: '01/07/2024',
		endDate: '05/05/2024',
		skills: ['Inventory Database', 'Regulatory Compliance', 'API Development'],
		title: 'Optimize API Development in Technical Support Portal',
		description:
			'The objective here is API Development within the Technical Support Portal. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 43,
		assignedTo: 71
	},
	{
		id: 706,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Support',
			supportCase: 'SBBYI9GHUV'
		},
		startDate: '05/18/2023',
		endDate: '05/24/2024',
		skills: [
			'Network Security',
			'E-commerce Security',
			'Report Generation',
			'Inventory Database',
			'Data Encryption'
		],
		title: 'Optimize E-commerce Security in Front-end Development',
		description:
			'You will begin by Report Generation within the Front-end Development. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 48,
		assignedTo: 18
	},
	{
		id: 707,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Project Management',
			supportCase: 'SBTEGCQLUP'
		},
		startDate: '12/21/2023',
		endDate: '04/27/2024',
		skills: [
			'Cloud Services',
			'System Architecture',
			'Python',
			'Client Communication',
			'Operational Efficiency',
			'Data Visualization'
		],
		title: 'Help System Architecture in Product Design Simulation',
		description:
			'Your main task will be Cloud Services within the Product Design Simulation. From there, move on to Client Communication to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 44,
		assignedTo: 77
	},
	{
		id: 708,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Support',
			supportCase: 'SBYN8EEI64'
		},
		startDate: '07/24/2023',
		endDate: '05/07/2024',
		skills: [
			'Backend Development',
			'User Testing',
			'Data Visualization',
			'Business Intelligence',
			'Analytics'
		],
		title: 'Resolve Business Intelligence in Point of Sale System',
		description:
			'You will begin by User Testing within the Point of Sale System. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on User Testing to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 46,
		assignedTo: 29
	},
	{
		id: 709,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Support',
			supportCase: 'SBQXEVHCKI'
		},
		startDate: '08/15/2023',
		endDate: '04/29/2024',
		skills: ['Data Visualization', 'E-commerce Security', 'C#', 'Report Generation'],
		title: 'Adjust Report Generation in Rental Management Software',
		description:
			'We aim to E-commerce Security within the Rental Management Software. From there, move on to Report Generation to enhance overall outcomes. Focus also on E-commerce Security to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 47,
		assignedTo: 32
	},
	{
		id: 710,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SB3C4O3T18'
		},
		startDate: '04/09/2024',
		endDate: '05/27/2024',
		skills: ['Inventory Database', 'SQL', 'Analytics', 'Data Encryption'],
		title: 'Help SQL in Technical Support Portal',
		description:
			'Your main task will be Data Encryption within the Technical Support Portal. Your next steps should include SQL to enhance overall outcomes. Focus also on Inventory Database to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 52,
		assignedTo: 31
	},
	{
		id: 711,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 18,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SB02FGCPCQ'
		},
		startDate: '09/04/2023',
		endDate: '05/01/2024',
		skills: ['Client Communication', 'Report Generation', 'Python', 'Audit Trail Management'],
		title: 'Implement Report Generation in Digital Distribution Network',
		description:
			'We aim to Python within the Digital Distribution Network. Subsequently, your efforts will involve Python to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 49,
		assignedTo: 81
	},
	{
		id: 712,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Support',
			supportCase: 'SBPQSVHNJT'
		},
		startDate: '08/16/2023',
		endDate: '05/06/2024',
		skills: [
			'Operational Efficiency',
			'Data Analysis',
			'Network Security',
			'E-commerce Security',
			'Performance Tuning',
			'Data Encryption'
		],
		title: 'Fix Data Analysis in E-commerce SEO Optimization',
		description:
			'The objective here is E-commerce Security within the E-commerce SEO Optimization. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 50,
		assignedTo: 86
	},
	{
		id: 713,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 18,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Support',
			supportCase: 'SBDLMNFX86'
		},
		startDate: '06/22/2023',
		endDate: '05/03/2024',
		skills: [
			'Audit Trail Management',
			'Operational Efficiency',
			'Cloud Services',
			'Supply Chain Management',
			'Healthcare IT',
			'SQL',
			'Data Analysis'
		],
		title: 'Adjust Healthcare IT in Risk Assessment Software',
		description:
			'The focus is on SQL within the Risk Assessment Software. Your next steps should include Cloud Services to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 54,
		assignedTo: 87
	},
	{
		id: 714,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Testing',
			supportCase: 'SB9SSMF24D'
		},
		startDate: '07/06/2023',
		endDate: '04/28/2024',
		skills: ['E-commerce Security', 'Business Intelligence', 'Payment Solutions'],
		title: 'CRM Integration Needs E-commerce Security Fixed',
		description:
			'The focus is on E-commerce Security within the CRM Integration. From there, move on to Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 58,
		assignedTo: 88
	},
	{
		id: 715,
		role: 'Director',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SBDAXOOU9Y'
		},
		startDate: '04/19/2024',
		endDate: '05/12/2024',
		skills: [
			'Operational Efficiency',
			'UI/UX Design',
			'Client Communication',
			'Payment Solutions',
			'JavaScript'
		],
		title: 'Optimize Payment Solutions in Web Performance Monitoring',
		description:
			'This task involves Operational Efficiency within the Web Performance Monitoring. Following initial steps, you should Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 73,
		assignedTo: 103
	},
	{
		id: 716,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Support',
			supportCase: 'SBEGLQAWP9'
		},
		startDate: '12/10/2023',
		endDate: '05/15/2024',
		skills: [
			'SQL',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Audit Trail Management',
			'Report Generation',
			'Analytics'
		],
		title: 'Adjust Report Generation in Front-end Development',
		description:
			'We aim to Regulatory Compliance within the Front-end Development. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Focus also on SQL to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 59,
		assignedTo: 94
	},
	{
		id: 717,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Support',
			supportCase: 'SBK831LCXQ'
		},
		startDate: '04/07/2024',
		endDate: '05/29/2024',
		skills: [
			'Operational Efficiency',
			'Healthcare IT',
			'Audit Trail Management',
			'C#',
			'Analytics'
		],
		title: 'Create Audit Trail Management in Safety Compliance Check',
		description:
			'The objective here is Operational Efficiency within the Safety Compliance Check. Once completed, proceed to Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 51,
		assignedTo: 33
	},
	{
		id: 718,
		role: 'Senior Manager',
		team: 2,
		status: 'Cancelled',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'UAT',
			supportCase: 'SB7RVWY0UT'
		},
		startDate: '03/22/2023',
		endDate: '04/29/2024',
		skills: [
			'Client Communication',
			'Analytics',
			'SQL',
			'User Testing',
			'Database Management',
			'JavaScript',
			'Payment Solutions'
		],
		title: 'Help JavaScript in Project Cost Tracking',
		description:
			'The objective here is JavaScript within the Project Cost Tracking. Your next steps should include JavaScript to enhance overall outcomes. Focus also on User Testing to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 65,
		assignedTo: 25
	},
	{
		id: 719,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Development',
			supportCase: 'SBFRUT2UL0'
		},
		startDate: '10/29/2023',
		endDate: '05/14/2024',
		skills: ['Business Intelligence', 'Inventory Database', 'Data Analysis'],
		title: 'CRM Integration Needs Inventory Database Fixed',
		description:
			'Your main task will be Business Intelligence within the CRM Integration. From there, move on to Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 53,
		assignedTo: 35
	},
	{
		id: 720,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'UAT',
			supportCase: 'SBSFXW1PQY'
		},
		startDate: '04/27/2023',
		endDate: '04/29/2024',
		skills: [
			'UI/UX Design',
			'Data Analysis',
			'Backend Development',
			'SQL',
			'Healthcare IT',
			'Operational Efficiency'
		],
		title: 'Implement Data Analysis in Mobile Application Framework',
		description:
			'Your main task will be Data Analysis within the Mobile Application Framework. From there, move on to UI/UX Design to enhance overall outcomes. Focus also on UI/UX Design to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 60,
		assignedTo: 95
	},
	{
		id: 721,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBG2JFMB4K'
		},
		startDate: '04/25/2024',
		endDate: '05/25/2024',
		skills: [
			'Data Encryption',
			'Inventory Database',
			'Report Generation',
			'Performance Tuning',
			'Network Security',
			'Operational Efficiency',
			'Healthcare IT'
		],
		title: 'Help Network Security in Real-Time Data Analysis',
		description:
			'You will begin by Network Security within the Real-Time Data Analysis. Following initial steps, you should Network Security to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 66,
		assignedTo: 42
	},
	{
		id: 722,
		role: 'Senior Manager',
		team: 1,
		status: 'Assigned',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SB12UD9POT'
		},
		startDate: '10/14/2023',
		endDate: '05/20/2024',
		skills: ['SQL', 'HIPAA Compliance', 'Operational Efficiency'],
		title: 'Fix Operational Efficiency in Project Cost Tracking',
		description:
			'The focus is on SQL within the Project Cost Tracking. Your next steps should include SQL to enhance overall outcomes. Focus also on Operational Efficiency to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 83,
		assignedTo: 65
	},
	{
		id: 723,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SBI881I6F4'
		},
		startDate: '09/30/2023',
		endDate: '05/16/2024',
		skills: ['C#', 'System Architecture', 'Data Encryption'],
		title: 'Fix Data Encryption in Data Reporting Tools',
		description:
			'This task involves Data Encryption within the Data Reporting Tools. Your next steps should include C# to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 55,
		assignedTo: null
	},
	{
		id: 724,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'UAT',
			supportCase: 'SBZKLW6HD6'
		},
		startDate: '05/31/2023',
		endDate: '05/14/2024',
		skills: [
			'Data Visualization',
			'SQL',
			'Supply Chain Management',
			'Payment Solutions',
			'Analytics',
			'User Testing',
			'Frontend Development'
		],
		title: 'Resolve Analytics in Content Management System',
		description:
			'The focus is on Frontend Development within the Content Management System. Following initial steps, you should Payment Solutions to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 61,
		assignedTo: 97
	},
	{
		id: 725,
		role: 'Senior Manager',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Support',
			supportCase: 'SB25GLTNUO'
		},
		startDate: '12/26/2023',
		endDate: '05/23/2024',
		skills: [
			'Data Encryption',
			'Healthcare IT',
			'System Architecture',
			'C#',
			'Inventory Database',
			'Python'
		],
		title: 'Adjust System Architecture in Client Onboarding Process',
		description:
			'You will begin by Inventory Database within the Client Onboarding Process. Once completed, proceed to Healthcare IT to enhance overall outcomes. Focus also on C# to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 90,
		assignedTo: 83
	},
	{
		id: 726,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Testing',
			supportCase: 'SBOT09HIGK'
		},
		startDate: '11/23/2023',
		endDate: '05/16/2024',
		skills: [
			'Frontend Development',
			'Client Communication',
			'Inventory Database',
			'Performance Tuning'
		],
		title: 'Online Marketing Strategy Needs Client Communication Fixed',
		description:
			'We aim to Performance Tuning within the Online Marketing Strategy. From there, move on to Frontend Development to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: 90
	},
	{
		id: 727,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Testing',
			supportCase: 'SBXW4CD3R7'
		},
		startDate: '01/22/2024',
		endDate: '05/01/2024',
		skills: ['Network Security', 'Data Visualization', 'Data Analysis'],
		title: 'Resolve Network Security in Customer Data Platform',
		description:
			'You will begin by Network Security within the Customer Data Platform. Once completed, proceed to Network Security to enhance overall outcomes. Focus also on Data Analysis to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 56,
		assignedTo: null
	},
	{
		id: 728,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Support',
			supportCase: 'SB5T5GYVFX'
		},
		startDate: '09/17/2023',
		endDate: '05/28/2024',
		skills: [
			'Data Analysis',
			'Healthcare IT',
			'User Testing',
			'Performance Tuning',
			'Backend Development'
		],
		title: 'Help Data Analysis in Internal Communication Tool',
		description:
			'You will begin by Data Analysis within the Internal Communication Tool. Once completed, proceed to Backend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 57,
		assignedTo: 38
	},
	{
		id: 729,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Development',
			supportCase: 'SBHL6HQQMR'
		},
		startDate: '09/28/2023',
		endDate: '05/16/2024',
		skills: [
			'Business Intelligence',
			'Inventory Database',
			'User Testing',
			'Audit Trail Management',
			'Performance Tuning',
			'Frontend Development',
			'Payment Solutions'
		],
		title: 'Responsive Web Design Needs User Testing Fixed',
		description:
			'You will begin by Inventory Database within the Responsive Web Design. Following initial steps, you should User Testing to enhance overall outcomes. Focus also on Performance Tuning to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 62,
		assignedTo: 40
	},
	{
		id: 730,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Testing',
			supportCase: 'SBLTI6M53F'
		},
		startDate: '01/01/2024',
		endDate: '05/25/2024',
		skills: [
			'Business Intelligence',
			'Report Generation',
			'Data Visualization',
			'HIPAA Compliance'
		],
		title: 'Help Data Visualization in Client Reporting System',
		description:
			'This task involves Report Generation within the Client Reporting System. Following initial steps, you should Data Visualization to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 64,
		assignedTo: 41
	},
	{
		id: 731,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Support',
			supportCase: 'SBC5PBQFO5'
		},
		startDate: '01/25/2024',
		endDate: '05/16/2024',
		skills: [
			'User Testing',
			'Audit Trail Management',
			'E-commerce Security',
			'Backend Development'
		],
		title: 'Fix E-commerce Security in Building Maintenance App',
		description:
			'The focus is on Backend Development within the Building Maintenance App. Your next steps should include Backend Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 67,
		assignedTo: 46
	},
	{
		id: 732,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SB56WDM32C'
		},
		startDate: '04/26/2023',
		endDate: '05/23/2024',
		skills: [
			'Report Generation',
			'Data Visualization',
			'Audit Trail Management',
			'Performance Tuning'
		],
		title: 'Adjust Report Generation in Digital Catalogue',
		description:
			'The objective here is Data Visualization within the Digital Catalogue. From there, move on to Audit Trail Management to enhance overall outcomes. Focus also on Audit Trail Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 68,
		assignedTo: null
	},
	{
		id: 733,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBQCM7E3RT'
		},
		startDate: '10/20/2023',
		endDate: '05/29/2024',
		skills: ['Audit Trail Management', 'HIPAA Compliance', 'Data Encryption'],
		title: 'Implement Data Encryption in Sales Dashboard',
		description:
			'Your main task will be Audit Trail Management within the Sales Dashboard. Your next steps should include Data Encryption to enhance overall outcomes. Focus also on Audit Trail Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 69,
		assignedTo: 47
	},
	{
		id: 734,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Project Management',
			supportCase: 'SBW7K404CA'
		},
		startDate: '08/18/2023',
		endDate: '04/27/2024',
		skills: [
			'Audit Trail Management',
			'Network Security',
			'HIPAA Compliance',
			'Data Visualization',
			'Supply Chain Management'
		],
		title: 'Multi-Tenant Systems Needs Audit Trail Management Fixed',
		description:
			'You will begin by Supply Chain Management within the Multi-Tenant Systems. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on Data Visualization to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 70,
		assignedTo: 51
	},
	{
		id: 735,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Development',
			supportCase: 'SB56OLXRBT'
		},
		startDate: '12/18/2023',
		endDate: '04/29/2024',
		skills: ['Operational Efficiency', 'Data Encryption', 'Data Visualization'],
		title: 'Support Operational Efficiency in Customer Loyalty Programs',
		description:
			'We aim to Data Visualization within the Customer Loyalty Programs. Your next steps should include Data Encryption to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 71,
		assignedTo: 98
	},
	{
		id: 736,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Testing',
			supportCase: 'SBW9C5774D'
		},
		startDate: '07/08/2023',
		endDate: '05/03/2024',
		skills: ['Analytics', 'API Development', 'Network Security', 'Data Visualization'],
		title: 'Resolve API Development in E-commerce SEO Optimization',
		description:
			'The objective here is Network Security within the E-commerce SEO Optimization. From there, move on to Network Security to enhance overall outcomes. Focus also on API Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 72,
		assignedTo: 99
	},
	{
		id: 737,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Testing',
			supportCase: 'SBS7NZPA9I'
		},
		startDate: '12/01/2023',
		endDate: '04/29/2024',
		skills: [
			'JavaScript',
			'Supply Chain Management',
			'Regulatory Compliance',
			'System Architecture',
			'Performance Tuning',
			'HIPAA Compliance'
		],
		title: 'Create Regulatory Compliance in E-commerce SEO Optimization',
		description:
			'Your main task will be Regulatory Compliance within the E-commerce SEO Optimization. From there, move on to System Architecture to enhance overall outcomes. Focus also on Supply Chain Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 74,
		assignedTo: 53
	},
	{
		id: 738,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Dynamic Pricing Engine',
			projectCode: 'Development',
			supportCase: 'SBWPRF1CM8'
		},
		startDate: '04/08/2024',
		endDate: '04/27/2024',
		skills: [
			'User Testing',
			'Healthcare IT',
			'Backend Development',
			'UI/UX Design',
			'Performance Tuning'
		],
		title: 'Help UI/UX Design in Dynamic Pricing Engine',
		description:
			'The objective here is UI/UX Design within the Dynamic Pricing Engine. Following initial steps, you should Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 78,
		assignedTo: null
	},
	{
		id: 739,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'UAT',
			supportCase: 'SBEV3PP2C3'
		},
		startDate: '11/12/2023',
		endDate: '05/01/2024',
		skills: ['Python', 'C#', 'Supply Chain Management'],
		title: 'Help C# in Mobile UX/UI Upgrade',
		description:
			'This task involves Python within the Mobile UX/UI Upgrade. Your next steps should include Python to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 75,
		assignedTo: 55
	},
	{
		id: 740,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Development',
			supportCase: 'SBXNM0FMRE'
		},
		startDate: '12/29/2023',
		endDate: '04/30/2024',
		skills: [
			'Operational Efficiency',
			'E-commerce Security',
			'Report Generation',
			'Backend Development',
			'Inventory Database'
		],
		title: 'Fix Inventory Database in Inventory Management Application',
		description:
			'Your main task will be Backend Development within the Inventory Management Application. Following initial steps, you should E-commerce Security to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 76,
		assignedTo: 56
	},
	{
		id: 741,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Development',
			supportCase: 'SBKJYJ5IBP'
		},
		startDate: '01/23/2024',
		endDate: '05/10/2024',
		skills: [
			'Client Communication',
			'Performance Tuning',
			'Payment Solutions',
			'Cloud Services',
			'Supply Chain Management',
			'Audit Trail Management'
		],
		title: 'Support Cloud Services in Safety Compliance Check',
		description:
			'You will begin by Supply Chain Management within the Safety Compliance Check. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 77,
		assignedTo: 2
	},
	{
		id: 742,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SBOBIZ67WK'
		},
		startDate: '07/10/2023',
		endDate: '04/29/2024',
		skills: [
			'Frontend Development',
			'Healthcare IT',
			'Supply Chain Management',
			'Performance Tuning',
			'Inventory Database'
		],
		title: 'Support Inventory Database in Client Reporting System',
		description:
			'The objective here is Frontend Development within the Client Reporting System. Subsequently, your efforts will involve Supply Chain Management to enhance overall outcomes. Focus also on Supply Chain Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 79,
		assignedTo: 57
	},
	{
		id: 743,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Support',
			supportCase: 'SBGZZCQ44R'
		},
		startDate: '11/18/2023',
		endDate: '05/09/2024',
		skills: ['SQL', 'Performance Tuning', 'Report Generation', 'Audit Trail Management', 'C#'],
		title: 'Adjust SQL in Sales Dashboard',
		description:
			'This task involves Audit Trail Management within the Sales Dashboard. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 80,
		assignedTo: 64
	},
	{
		id: 744,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'UAT',
			supportCase: 'SBMO7XJDHC'
		},
		startDate: '04/03/2023',
		endDate: '05/20/2024',
		skills: [
			'Operational Efficiency',
			'Audit Trail Management',
			'Analytics',
			'Data Visualization',
			'Network Security',
			'JavaScript'
		],
		title: 'Resolve Analytics in Client Reporting System',
		description:
			'The focus is on Analytics within the Client Reporting System. Your next steps should include Data Visualization to enhance overall outcomes. Focus also on Audit Trail Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 84,
		assignedTo: null
	},
	{
		id: 745,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Support',
			supportCase: 'SB4CM7KCGS'
		},
		startDate: '10/01/2023',
		endDate: '05/10/2024',
		skills: [
			'Business Intelligence',
			'Data Visualization',
			'Python',
			'E-commerce Security',
			'Operational Efficiency',
			'Payment Solutions'
		],
		title: 'Order Fulfillment Automation Needs Business Intelligence Fixed',
		description:
			'This task involves Business Intelligence within the Order Fulfillment Automation. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 85,
		assignedTo: 45
	},
	{
		id: 746,
		role: 'Senior Manager',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'UAT',
			supportCase: 'SBEUVRUZXU'
		},
		startDate: '07/09/2023',
		endDate: '05/18/2024',
		skills: [
			'Analytics',
			'Client Communication',
			'Report Generation',
			'Inventory Database',
			'Payment Solutions',
			'Python'
		],
		title: 'Fix Inventory Database in Technical Support Portal',
		description:
			'The focus is on Python within the Technical Support Portal. Following initial steps, you should Payment Solutions to enhance overall outcomes. Focus also on Client Communication to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 104,
		assignedTo: 17
	},
	{
		id: 747,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Testing',
			supportCase: 'SB2K0JOQW1'
		},
		startDate: '08/29/2023',
		endDate: '05/27/2024',
		skills: [
			'JavaScript',
			'Data Analysis',
			'System Architecture',
			'Analytics',
			'Report Generation',
			'Healthcare IT',
			'E-commerce Security'
		],
		title: 'Insurance Claim Automation Needs Analytics Fixed',
		description:
			'The focus is on Healthcare IT within the Insurance Claim Automation. Subsequently, your efforts will involve JavaScript to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 81,
		assignedTo: 69
	},
	{
		id: 748,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Support',
			supportCase: 'SBVA6XETNF'
		},
		startDate: '04/26/2023',
		endDate: '05/05/2024',
		skills: ['Payment Solutions', 'Analytics', 'Operational Efficiency', 'Audit Trail Management'],
		title: 'Adjust Analytics in Multi-Tenant Systems',
		description:
			'We aim to Analytics within the Multi-Tenant Systems. Your next steps should include Payment Solutions to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 86,
		assignedTo: 4
	},
	{
		id: 749,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Testing',
			supportCase: 'SBCYBMCP7K'
		},
		startDate: '03/19/2024',
		endDate: '05/17/2024',
		skills: [
			'E-commerce Security',
			'Supply Chain Management',
			'Regulatory Compliance',
			'Operational Efficiency',
			'Cloud Services',
			'Report Generation'
		],
		title: 'Implement Supply Chain Management in API Backend Integration',
		description:
			'Your main task will be Regulatory Compliance within the API Backend Integration. Your next steps should include Report Generation to enhance overall outcomes. Focus also on Cloud Services to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 102,
		assignedTo: 14
	},
	{
		id: 750,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Development',
			supportCase: 'SBLUUUBK3T'
		},
		startDate: '12/21/2023',
		endDate: '04/30/2024',
		skills: ['Client Communication', 'HIPAA Compliance', 'Supply Chain Management'],
		title: 'Optimize Supply Chain Management in Point of Sale System',
		description:
			'The focus is on Client Communication within the Point of Sale System. Your next steps should include HIPAA Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 82,
		assignedTo: 75
	},
	{
		id: 751,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Support',
			supportCase: 'SBRZXSCUXQ'
		},
		startDate: '05/21/2023',
		endDate: '05/24/2024',
		skills: [
			'Data Visualization',
			'JavaScript',
			'UI/UX Design',
			'Database Management',
			'Healthcare IT'
		],
		title: 'Support UI/UX Design in Full Stack Web Development',
		description:
			'This task involves Data Visualization within the Full Stack Web Development. Following initial steps, you should Healthcare IT to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 87,
		assignedTo: 13
	},
	{
		id: 752,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SB2PNSNNJ4'
		},
		startDate: '01/19/2024',
		endDate: '05/26/2024',
		skills: ['Inventory Database', 'Healthcare IT', 'Data Encryption'],
		title: 'Resolve Healthcare IT in Digital Distribution Network',
		description:
			'The objective here is Data Encryption within the Digital Distribution Network. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Focus also on Healthcare IT to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 88,
		assignedTo: null
	},
	{
		id: 753,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'Development',
			supportCase: 'SBU4QXFVE1'
		},
		startDate: '03/04/2024',
		endDate: '05/19/2024',
		skills: ['Operational Efficiency', 'Inventory Database', 'Analytics', 'Regulatory Compliance'],
		title: 'Support Operational Efficiency in Data Reporting Tools',
		description:
			'This task involves Operational Efficiency within the Data Reporting Tools. Once completed, proceed to Inventory Database to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 89,
		assignedTo: 76
	},
	{
		id: 754,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Project Management',
			supportCase: 'SB1ZVTAEIC'
		},
		startDate: '03/30/2023',
		endDate: '05/18/2024',
		skills: ['Healthcare IT', 'Data Analysis', 'Performance Tuning'],
		title: 'Web Application Security Needs Healthcare IT Fixed',
		description:
			'You will begin by Performance Tuning within the Web Application Security. Subsequently, your efforts will involve Performance Tuning to enhance overall outcomes. Focus also on Performance Tuning to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 92,
		assignedTo: 16
	},
	{
		id: 755,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Support',
			supportCase: 'SBPFHS4FFP'
		},
		startDate: '03/21/2023',
		endDate: '05/01/2024',
		skills: [
			'Supply Chain Management',
			'Regulatory Compliance',
			'Payment Solutions',
			'Data Analysis',
			'Data Visualization'
		],
		title: 'Implement Payment Solutions in CRM Integration',
		description:
			'The objective here is Regulatory Compliance within the CRM Integration. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Focus also on Data Visualization to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 91,
		assignedTo: 80
	},
	{
		id: 756,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Testing',
			supportCase: 'SB5UKBZCBL'
		},
		startDate: '08/28/2023',
		endDate: '05/17/2024',
		skills: [
			'Data Analysis',
			'API Development',
			'Report Generation',
			'HIPAA Compliance',
			'Data Encryption',
			'Cloud Services'
		],
		title: 'Safety Compliance Check Needs API Development Fixed',
		description:
			'This task involves Data Encryption within the Safety Compliance Check. Once completed, proceed to API Development to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 93,
		assignedTo: 82
	},
	{
		id: 757,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Development',
			supportCase: 'SBN4VFU6RN'
		},
		startDate: '09/27/2023',
		endDate: '05/10/2024',
		skills: [
			'Report Generation',
			'User Testing',
			'Supply Chain Management',
			'Operational Efficiency',
			'Backend Development'
		],
		title: 'Support Operational Efficiency in Media Storage Solutions',
		description:
			'Your main task will be Report Generation within the Media Storage Solutions. Following initial steps, you should Backend Development to enhance overall outcomes. Focus also on Supply Chain Management to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 94,
		assignedTo: 91
	},
	{
		id: 758,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Support',
			supportCase: 'SBFLFSB0ML'
		},
		startDate: '04/11/2024',
		endDate: '05/01/2024',
		skills: ['JavaScript', 'SQL', 'C#'],
		title: 'Fix JavaScript in Media Storage Solutions',
		description:
			'We aim to C# within the Media Storage Solutions. Once completed, proceed to JavaScript to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 95,
		assignedTo: 93
	},
	{
		id: 759,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Testing',
			supportCase: 'SBW53KKD5D'
		},
		startDate: '10/16/2023',
		endDate: '05/26/2024',
		skills: [
			'User Testing',
			'Data Analysis',
			'Backend Development',
			'Frontend Development',
			'Inventory Database'
		],
		title: 'Implement Inventory Database in Client Reporting System',
		description:
			'The focus is on Backend Development within the Client Reporting System. Subsequently, your efforts will involve User Testing to enhance overall outcomes. Focus also on User Testing to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 96,
		assignedTo: 100
	},
	{
		id: 760,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'UAT',
			supportCase: 'SB5WMNI2E9'
		},
		startDate: '04/18/2023',
		endDate: '05/07/2024',
		skills: [
			'API Development',
			'System Architecture',
			'E-commerce Security',
			'Data Visualization',
			'Report Generation',
			'Performance Tuning'
		],
		title: 'Support Report Generation in Material Specification Tool',
		description:
			'Your main task will be API Development within the Material Specification Tool. Your next steps should include Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 97,
		assignedTo: 106
	},
	{
		id: 761,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Testing',
			supportCase: 'SBYO6WFJB6'
		},
		startDate: '12/24/2023',
		endDate: '04/30/2024',
		skills: [
			'Performance Tuning',
			'HIPAA Compliance',
			'Client Communication',
			'Data Encryption',
			'API Development',
			'Network Security'
		],
		title: 'Help API Development in Full Stack Web Development',
		description:
			'You will begin by API Development within the Full Stack Web Development. Your next steps should include Performance Tuning to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 14,
		assignedTo: 23
	},
	{
		id: 762,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBNROVNJ0C'
		},
		startDate: '06/21/2023',
		endDate: '05/21/2024',
		skills: [
			'Regulatory Compliance',
			'Data Encryption',
			'Audit Trail Management',
			'Data Visualization',
			'SQL',
			'Network Security'
		],
		title: 'Help Data Visualization in Building Maintenance App',
		description:
			'Your main task will be Regulatory Compliance within the Building Maintenance App. Subsequently, your efforts will involve SQL to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 98,
		assignedTo: 24
	},
	{
		id: 763,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBG0H5WLJM'
		},
		startDate: '03/20/2024',
		endDate: '05/26/2024',
		skills: ['Data Visualization', 'E-commerce Security', 'Audit Trail Management', 'SQL'],
		title: 'Building Maintenance App Needs Audit Trail Management Fixed',
		description:
			'Your main task will be Audit Trail Management within the Building Maintenance App. Your next steps should include Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 99,
		assignedTo: 26
	},
	{
		id: 764,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'UAT',
			supportCase: 'SBXR1JQ9WD'
		},
		startDate: '04/17/2023',
		endDate: '05/05/2024',
		skills: [
			'Data Analysis',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'SQL',
			'Cloud Services',
			'Performance Tuning',
			'Inventory Database'
		],
		title: 'Adjust Regulatory Compliance in Rental Management Software',
		description:
			'The focus is on SQL within the Rental Management Software. Subsequently, your efforts will involve Regulatory Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 100,
		assignedTo: 107
	},
	{
		id: 765,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'UAT',
			supportCase: 'SBWWUBVGA6'
		},
		startDate: '07/31/2023',
		endDate: '05/19/2024',
		skills: [
			'System Architecture',
			'Network Security',
			'Data Analysis',
			'Performance Tuning',
			'SQL',
			'Inventory Database',
			'Analytics'
		],
		title: 'Support Inventory Database in Tenant Screening Process',
		description:
			'The objective here is Inventory Database within the Tenant Screening Process. Following initial steps, you should Network Security to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 101,
		assignedTo: 37
	},
	{
		id: 766,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'UAT',
			supportCase: 'SBW275J6RD'
		},
		startDate: '05/07/2023',
		endDate: '05/06/2024',
		skills: ['Performance Tuning', 'Inventory Database', 'Cloud Services', 'Report Generation'],
		title: 'Fix Cloud Services in Data Reporting Tools',
		description:
			'We aim to Inventory Database within the Data Reporting Tools. From there, move on to Report Generation to enhance overall outcomes. Focus also on Report Generation to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 17,
		assignedTo: 30
	},
	{
		id: 767,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SBEHOX7SCM'
		},
		startDate: '09/02/2023',
		endDate: '05/11/2024',
		skills: [
			'HIPAA Compliance',
			'Data Analysis',
			'Business Intelligence',
			'E-commerce Security',
			'SQL',
			'Database Management'
		],
		title: 'Implement E-commerce Security in Efficiency Audit Tools',
		description:
			'This task involves Database Management within the Efficiency Audit Tools. Your next steps should include Database Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 23,
		assignedTo: 34
	},
	{
		id: 768,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SBRSVCHIOA'
		},
		startDate: '10/20/2023',
		endDate: '05/15/2024',
		skills: [
			'Network Security',
			'Data Encryption',
			'Report Generation',
			'E-commerce Security',
			'Business Intelligence'
		],
		title: 'Adjust Network Security in Insurance Claim Automation',
		description:
			'The objective here is Network Security within the Insurance Claim Automation. Following initial steps, you should Business Intelligence to enhance overall outcomes. Focus also on Report Generation to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 105,
		assignedTo: 3
	},
	{
		id: 769,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Discovery',
			supportCase: 'SBJV2505HD'
		},
		startDate: '12/26/2023',
		endDate: '05/04/2024',
		skills: ['Analytics', 'E-commerce Security', 'Data Analysis'],
		title: 'Help Data Analysis in Database Optimization',
		description:
			'The focus is on Data Analysis within the Database Optimization. From there, move on to Analytics to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 108,
		assignedTo: 43
	},
	{
		id: 770,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'UAT',
			supportCase: 'SB65IOYD8U'
		},
		startDate: '09/12/2023',
		endDate: '05/15/2024',
		skills: ['Supply Chain Management', 'JavaScript', 'Analytics'],
		title: 'Create Supply Chain Management in Supply Chain Management System',
		description:
			'This task involves Supply Chain Management within the Supply Chain Management System. Your next steps should include Supply Chain Management to enhance overall outcomes. Focus also on JavaScript to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 106,
		assignedTo: 5
	},
	{
		id: 771,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Development',
			supportCase: 'SBKLHTWP05'
		},
		startDate: '04/18/2023',
		endDate: '05/22/2024',
		skills: ['Data Analysis', 'Inventory Database', 'Client Communication', 'Performance Tuning'],
		title: 'Create Performance Tuning in Mobile UX/UI Upgrade',
		description:
			'Your main task will be Inventory Database within the Mobile UX/UI Upgrade. Following initial steps, you should Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 107,
		assignedTo: 7
	},
	{
		id: 772,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBUG9VYQU2'
		},
		startDate: '03/04/2024',
		endDate: '05/27/2024',
		skills: ['Data Analysis', 'System Architecture', 'Report Generation'],
		title: 'Optimize System Architecture in E-commerce SEO Optimization',
		description:
			'Your main task will be Report Generation within the E-commerce SEO Optimization. Once completed, proceed to Report Generation to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 109,
		assignedTo: 44
	},
	{
		id: 773,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Support',
			supportCase: 'SBOFWEK3QG'
		},
		startDate: '10/24/2023',
		endDate: '05/14/2024',
		skills: [
			'Regulatory Compliance',
			'Backend Development',
			'Operational Efficiency',
			'Analytics',
			'Report Generation'
		],
		title: 'Optimize Regulatory Compliance in Customer Loyalty Programs',
		description:
			'This task involves Operational Efficiency within the Customer Loyalty Programs. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 110,
		assignedTo: 49
	},
	{
		id: 774,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Support',
			supportCase: 'SB2KU2P10N'
		},
		startDate: '02/13/2024',
		endDate: '05/11/2024',
		skills: ['E-commerce Security', 'API Development', 'Python', 'Cloud Services'],
		title: 'Optimize Python in Mobile Application Framework',
		description:
			'You will begin by E-commerce Security within the Mobile Application Framework. Your next steps should include Python to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 1,
		assignedTo: 50
	},
	{
		id: 775,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Testing',
			supportCase: 'SBB5MSVOUO'
		},
		startDate: '03/30/2023',
		endDate: '05/19/2024',
		skills: ['Data Visualization', 'Backend Development', 'C#'],
		title: 'Branding Portal Needs Backend Development Fixed',
		description:
			'The objective here is Data Visualization within the Branding Portal. Once completed, proceed to C# to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 2,
		assignedTo: 59
	},
	{
		id: 776,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Support',
			supportCase: 'SBYMUEGB6T'
		},
		startDate: '12/14/2023',
		endDate: '05/21/2024',
		skills: [
			'Regulatory Compliance',
			'Data Visualization',
			'Operational Efficiency',
			'Backend Development',
			'Frontend Development',
			'HIPAA Compliance'
		],
		title: 'Technical Support Portal Needs HIPAA Compliance Fixed',
		description:
			'This task involves Data Visualization within the Technical Support Portal. Your next steps should include Data Visualization to enhance overall outcomes. Focus also on Operational Efficiency to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 3,
		assignedTo: 8
	},
	{
		id: 777,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBBEW6OYK7'
		},
		startDate: '05/31/2023',
		endDate: '05/22/2024',
		skills: [
			'Data Analysis',
			'Data Visualization',
			'Business Intelligence',
			'Network Security',
			'Analytics',
			'Payment Solutions'
		],
		title: 'Fix Network Security in Visualization of Data Insights',
		description:
			'The focus is on Business Intelligence within the Visualization of Data Insights. Once completed, proceed to Network Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 4,
		assignedTo: 61
	},
	{
		id: 778,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Testing',
			supportCase: 'SBDLW2GWBM'
		},
		startDate: '07/30/2023',
		endDate: '05/21/2024',
		skills: [
			'E-commerce Security',
			'Analytics',
			'Audit Trail Management',
			'Backend Development',
			'Inventory Database'
		],
		title: 'Adjust Analytics in Enterprise Resource Planning',
		description:
			'The objective here is E-commerce Security within the Enterprise Resource Planning. Your next steps should include Backend Development to enhance overall outcomes. Focus also on Backend Development to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 5,
		assignedTo: 9
	},
	{
		id: 779,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Support',
			supportCase: 'SB7VGKX4MN'
		},
		startDate: '12/07/2023',
		endDate: '05/29/2024',
		skills: ['Healthcare IT', 'Cloud Services', 'Data Encryption'],
		title: 'Customer Segmentation Analysis Needs Data Encryption Fixed',
		description:
			'Your main task will be Data Encryption within the Customer Segmentation Analysis. From there, move on to Healthcare IT to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 6,
		assignedTo: 62
	},
	{
		id: 780,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Development',
			supportCase: 'SB2YP5BWSM'
		},
		startDate: '08/18/2023',
		endDate: '05/18/2024',
		skills: [
			'Performance Tuning',
			'User Testing',
			'Inventory Database',
			'Database Management',
			'Regulatory Compliance',
			'Supply Chain Management'
		],
		title: 'Audience Analytics Needs Inventory Database Fixed',
		description:
			'The focus is on Performance Tuning within the Audience Analytics. From there, move on to Regulatory Compliance to enhance overall outcomes. Focus also on User Testing to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 10,
		assignedTo: 48
	},
	{
		id: 781,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'UAT',
			supportCase: 'SBUWMZLSXS'
		},
		startDate: '07/08/2023',
		endDate: '05/17/2024',
		skills: [
			'User Testing',
			'Backend Development',
			'Python',
			'Data Analysis',
			'Business Intelligence',
			'Supply Chain Management',
			'E-commerce Security'
		],
		title: 'Create Supply Chain Management in Client Reporting System',
		description:
			'You will begin by Supply Chain Management within the Client Reporting System. From there, move on to Data Analysis to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 13,
		assignedTo: 68
	},
	{
		id: 782,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - E-commerce SEO Optimization',
			projectCode: 'Development',
			supportCase: 'SBVJ5TMOMB'
		},
		startDate: '01/02/2024',
		endDate: '05/08/2024',
		skills: ['Analytics', 'HIPAA Compliance', 'Regulatory Compliance', 'UI/UX Design'],
		title: 'Support UI/UX Design in E-commerce SEO Optimization',
		description:
			'This task involves UI/UX Design within the E-commerce SEO Optimization. From there, move on to UI/UX Design to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 7,
		assignedTo: 11
	},
	{
		id: 783,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Project Management',
			supportCase: 'SBLMA96RH6'
		},
		startDate: '03/07/2024',
		endDate: '05/17/2024',
		skills: [
			'Client Communication',
			'E-commerce Security',
			'Payment Solutions',
			'Report Generation'
		],
		title: 'Create Report Generation in Visualization of Data Insights',
		description:
			'Your main task will be Report Generation within the Visualization of Data Insights. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 8,
		assignedTo: 12
	},
	{
		id: 784,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Testing',
			supportCase: 'SB2Z5J7TZV'
		},
		startDate: '03/24/2023',
		endDate: '05/15/2024',
		skills: [
			'Cloud Services',
			'Data Visualization',
			'Data Analysis',
			'System Architecture',
			'API Development',
			'Data Encryption'
		],
		title: 'Logistics Tracking Interface Needs Data Encryption Fixed',
		description:
			'The focus is on Data Visualization within the Logistics Tracking Interface. Following initial steps, you should Data Analysis to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 16,
		assignedTo: 71
	},
	{
		id: 785,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBYEKZ5KS8'
		},
		startDate: '04/04/2024',
		endDate: '05/12/2024',
		skills: ['SQL', 'Analytics', 'Regulatory Compliance'],
		title: 'Support Analytics in Real-Time Data Analysis',
		description:
			'Your main task will be Analytics within the Real-Time Data Analysis. Once completed, proceed to SQL to enhance overall outcomes. Focus also on SQL to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 9,
		assignedTo: 15
	},
	{
		id: 786,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Development',
			supportCase: 'SBI1F9SWUR'
		},
		startDate: '05/26/2023',
		endDate: '05/28/2024',
		skills: ['Regulatory Compliance', 'Client Communication', 'Report Generation', 'SQL'],
		title: 'Adjust SQL in Lead Tracking Software',
		description:
			'Your main task will be Report Generation within the Lead Tracking Software. Your next steps should include Client Communication to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 18,
		assignedTo: 77
	},
	{
		id: 787,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Support',
			supportCase: 'SB39L3UCKU'
		},
		startDate: '03/29/2024',
		endDate: '05/25/2024',
		skills: [
			'User Testing',
			'HIPAA Compliance',
			'Analytics',
			'Data Analysis',
			'Report Generation',
			'Database Management'
		],
		title: 'Logistics Tracking Interface Needs Database Management Fixed',
		description:
			'The focus is on Data Analysis within the Logistics Tracking Interface. From there, move on to User Testing to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 11,
		assignedTo: 19
	},
	{
		id: 788,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Testing',
			supportCase: 'SB2JU6IFEU'
		},
		startDate: '03/05/2024',
		endDate: '05/14/2024',
		skills: [
			'Business Intelligence',
			'E-commerce Security',
			'SQL',
			'Supply Chain Management',
			'C#',
			'Healthcare IT'
		],
		title: 'Inventory Management Application Needs Healthcare IT Fixed',
		description:
			'This task involves SQL within the Inventory Management Application. Subsequently, your efforts will involve Business Intelligence to enhance overall outcomes. Focus also on Business Intelligence to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 24,
		assignedTo: 81
	},
	{
		id: 789,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Requirements',
			supportCase: 'SB43U26TZX'
		},
		startDate: '11/18/2023',
		endDate: '05/03/2024',
		skills: [
			'Supply Chain Management',
			'HIPAA Compliance',
			'Business Intelligence',
			'Inventory Database',
			'API Development'
		],
		title: 'Create Supply Chain Management in Logistics Tracking Interface',
		description:
			'We aim to API Development within the Logistics Tracking Interface. Your next steps should include Supply Chain Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 12,
		assignedTo: 20
	},
	{
		id: 790,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Development',
			supportCase: 'SBLOOIVPCN'
		},
		startDate: '06/06/2023',
		endDate: '05/17/2024',
		skills: [
			'Python',
			'User Testing',
			'Data Analysis',
			'UI/UX Design',
			'Data Visualization',
			'Client Communication'
		],
		title: 'Market Analysis Tool Needs Data Visualization Fixed',
		description:
			'Your main task will be Data Visualization within the Market Analysis Tool. Once completed, proceed to Python to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 25,
		assignedTo: 86
	},
	{
		id: 791,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'UAT',
			supportCase: 'SBVTOGCNUK'
		},
		startDate: '04/09/2024',
		endDate: '05/01/2024',
		skills: ['Healthcare IT', 'Report Generation', 'Data Encryption', 'Audit Trail Management'],
		title: 'Fix Report Generation in Customer Loyalty Programs',
		description:
			'We aim to Healthcare IT within the Customer Loyalty Programs. Following initial steps, you should Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 28,
		assignedTo: 52
	},
	{
		id: 792,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Project Management',
			supportCase: 'SBYC1N1LTL'
		},
		startDate: '04/07/2023',
		endDate: '05/24/2024',
		skills: [
			'Client Communication',
			'System Architecture',
			'HIPAA Compliance',
			'Payment Solutions',
			'Cloud Services',
			'Python',
			'Data Analysis'
		],
		title: 'Adjust Payment Solutions in API Backend Integration',
		description:
			'This task involves HIPAA Compliance within the API Backend Integration. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Focus also on Payment Solutions to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 26,
		assignedTo: 87
	},
	{
		id: 793,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Support',
			supportCase: 'SBNM3OSPM5'
		},
		startDate: '04/02/2023',
		endDate: '05/05/2024',
		skills: [
			'API Development',
			'Report Generation',
			'Inventory Database',
			'E-commerce Security',
			'Python',
			'Operational Efficiency'
		],
		title: 'Implement Report Generation in Responsive Web Design',
		description:
			'You will begin by API Development within the Responsive Web Design. Your next steps should include Python to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 30,
		assignedTo: 54
	},
	{
		id: 794,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SBPNB8BQOU'
		},
		startDate: '02/27/2024',
		endDate: '05/29/2024',
		skills: [
			'Network Security',
			'Data Analysis',
			'Business Intelligence',
			'Operational Efficiency',
			'Payment Solutions'
		],
		title: 'Implement Business Intelligence in Product Design Simulation',
		description:
			'We aim to Data Analysis within the Product Design Simulation. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Network Security to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 31,
		assignedTo: 88
	},
	{
		id: 795,
		role: 'Senior Manager',
		team: 2,
		status: 'Cancelled',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Project Management',
			supportCase: 'SBM3RIFWMC'
		},
		startDate: '11/26/2023',
		endDate: '05/21/2024',
		skills: ['Frontend Development', 'Performance Tuning', 'Regulatory Compliance'],
		title: 'Fix Performance Tuning in Transaction Processing System',
		description:
			'The focus is on Regulatory Compliance within the Transaction Processing System. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 39,
		assignedTo: 104
	},
	{
		id: 796,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBKWIUKQSY'
		},
		startDate: '06/22/2023',
		endDate: '04/28/2024',
		skills: [
			'Client Communication',
			'E-commerce Security',
			'Python',
			'Data Visualization',
			'Regulatory Compliance'
		],
		title: 'Resolve Data Visualization in Visualization of Data Insights',
		description:
			'The objective here is Data Visualization within the Visualization of Data Insights. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 34,
		assignedTo: 36
	},
	{
		id: 797,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'UAT',
			supportCase: 'SBEL5TLEQP'
		},
		startDate: '07/06/2023',
		endDate: '05/24/2024',
		skills: [
			'System Architecture',
			'Operational Efficiency',
			'Data Visualization',
			'Python',
			'Regulatory Compliance',
			'HIPAA Compliance',
			'Client Communication'
		],
		title: 'Fix Regulatory Compliance in Technical Support Portal',
		description:
			'This task involves System Architecture within the Technical Support Portal. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on Python to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 36,
		assignedTo: 58
	},
	{
		id: 798,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SBKYCAVOA2'
		},
		startDate: '12/19/2023',
		endDate: '05/05/2024',
		skills: [
			'Payment Solutions',
			'E-commerce Security',
			'Backend Development',
			'JavaScript',
			'Supply Chain Management',
			'Analytics'
		],
		title: 'Help JavaScript in Project Cost Tracking',
		description:
			'Your main task will be E-commerce Security within the Project Cost Tracking. Subsequently, your efforts will involve E-commerce Security to enhance overall outcomes. Focus also on Analytics to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 15,
		assignedTo: null
	},
	{
		id: 799,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Development',
			supportCase: 'SBG3QVEBXN'
		},
		startDate: '04/12/2023',
		endDate: '05/12/2024',
		skills: ['Audit Trail Management', 'Client Communication', 'Analytics', 'User Testing'],
		title: 'Adjust Analytics in Mobile UX/UI Upgrade',
		description:
			'This task involves Client Communication within the Mobile UX/UI Upgrade. Once completed, proceed to Analytics to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 19,
		assignedTo: 21
	},
	{
		id: 800,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Inventory Management Application',
			projectCode: 'Discovery',
			supportCase: 'SBCXMHBC1Q'
		},
		startDate: '01/26/2024',
		endDate: '05/28/2024',
		skills: ['JavaScript', 'HIPAA Compliance', 'Audit Trail Management', 'E-commerce Security'],
		title: 'Resolve E-commerce Security in Inventory Management Application',
		description:
			'The focus is on Audit Trail Management within the Inventory Management Application. From there, move on to Audit Trail Management to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 37,
		assignedTo: 94
	},
	{
		id: 801,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Project Management',
			supportCase: 'SB79A0A2OL'
		},
		startDate: '02/13/2024',
		endDate: '05/13/2024',
		skills: [
			'Cloud Services',
			'Business Intelligence',
			'Data Visualization',
			'Regulatory Compliance'
		],
		title: 'Adjust Cloud Services in Efficiency Audit Tools',
		description:
			'This task involves Data Visualization within the Efficiency Audit Tools. Your next steps should include Data Visualization to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 42,
		assignedTo: 95
	},
	{
		id: 802,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Testing',
			supportCase: 'SBD2YP3IMA'
		},
		startDate: '07/15/2023',
		endDate: '05/01/2024',
		skills: ['Operational Efficiency', 'Data Encryption', 'SQL'],
		title: 'Help SQL in Rental Management Software',
		description:
			'We aim to Operational Efficiency within the Rental Management Software. Following initial steps, you should SQL to enhance overall outcomes. Focus also on Data Encryption to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 43,
		assignedTo: 97
	},
	{
		id: 803,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SBYDZ3BH77'
		},
		startDate: '02/23/2024',
		endDate: '04/29/2024',
		skills: ['Performance Tuning', 'Healthcare IT', 'SQL'],
		title: 'Adjust SQL in Web Application Security',
		description:
			'This task involves SQL within the Web Application Security. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on Performance Tuning to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 20,
		assignedTo: 22
	},
	{
		id: 804,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'UAT',
			supportCase: 'SBW9O6QBD6'
		},
		startDate: '01/21/2024',
		endDate: '05/22/2024',
		skills: [
			'Healthcare IT',
			'Backend Development',
			'User Testing',
			'Data Visualization',
			'Report Generation',
			'Business Intelligence'
		],
		title: 'Customer Segmentation Analysis Needs Report Generation Fixed',
		description:
			'The focus is on Backend Development within the Customer Segmentation Analysis. Subsequently, your efforts will involve Backend Development to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 44,
		assignedTo: 98
	},
	{
		id: 805,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Testing',
			supportCase: 'SBJI5QSJFU'
		},
		startDate: '09/10/2023',
		endDate: '05/13/2024',
		skills: [
			'Operational Efficiency',
			'Payment Solutions',
			'C#',
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Database Management'
		],
		title: 'Implement Operational Efficiency in Branding Portal',
		description:
			'The objective here is Regulatory Compliance within the Branding Portal. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Focus also on C# to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 21,
		assignedTo: 27
	},
	{
		id: 806,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Support',
			supportCase: 'SBXWTQUX43'
		},
		startDate: '07/08/2023',
		endDate: '05/28/2024',
		skills: [
			'HIPAA Compliance',
			'Regulatory Compliance',
			'Data Visualization',
			'SQL',
			'Cloud Services'
		],
		title: 'Support Regulatory Compliance in Telemedicine Platform',
		description:
			'The objective here is Regulatory Compliance within the Telemedicine Platform. Your next steps should include Data Visualization to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 45,
		assignedTo: 99
	},
	{
		id: 807,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBJLTIPERN'
		},
		startDate: '09/03/2023',
		endDate: '05/20/2024',
		skills: ['Data Visualization', 'User Testing', 'Client Communication'],
		title: 'Visualization of Data Insights Needs Client Communication Fixed',
		description:
			'We aim to Data Visualization within the Visualization of Data Insights. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Focus also on User Testing to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 22,
		assignedTo: 29
	},
	{
		id: 808,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Support',
			supportCase: 'SBKUK46LWW'
		},
		startDate: '08/18/2023',
		endDate: '05/29/2024',
		skills: [
			'Operational Efficiency',
			'Performance Tuning',
			'E-commerce Security',
			'Audit Trail Management',
			'Database Management'
		],
		title: 'Implement Performance Tuning in Lead Tracking Software',
		description:
			'The focus is on Audit Trail Management within the Lead Tracking Software. From there, move on to Performance Tuning to enhance overall outcomes. Focus also on Performance Tuning to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 48,
		assignedTo: 2
	},
	{
		id: 809,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SB2DK4DPYQ'
		},
		startDate: '10/02/2023',
		endDate: '05/18/2024',
		skills: ['Healthcare IT', 'Audit Trail Management', 'SQL', 'Regulatory Compliance'],
		title: 'Mobile Application Framework Needs SQL Fixed',
		description:
			'We aim to Audit Trail Management within the Mobile Application Framework. Once completed, proceed to Healthcare IT to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 49,
		assignedTo: 4
	},
	{
		id: 810,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Development',
			supportCase: 'SBJTJ4EH0D'
		},
		startDate: '07/14/2023',
		endDate: '04/30/2024',
		skills: [
			'HIPAA Compliance',
			'Business Intelligence',
			'Report Generation',
			'Regulatory Compliance',
			'Data Visualization'
		],
		title: 'Resolve Regulatory Compliance in Audience Analytics',
		description:
			'Your main task will be Report Generation within the Audience Analytics. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 50,
		assignedTo: 13
	},
	{
		id: 811,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'UAT',
			supportCase: 'SB0U77WF3D'
		},
		startDate: '11/20/2023',
		endDate: '05/07/2024',
		skills: [
			'User Testing',
			'Data Visualization',
			'Regulatory Compliance',
			'Performance Tuning',
			'Database Management',
			'Payment Solutions'
		],
		title: 'Logistics Tracking Interface Needs User Testing Fixed',
		description:
			'Your main task will be Data Visualization within the Logistics Tracking Interface. Following initial steps, you should Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 27,
		assignedTo: null
	},
	{
		id: 812,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBQE80NIXU'
		},
		startDate: '06/07/2023',
		endDate: '05/01/2024',
		skills: [
			'Performance Tuning',
			'Payment Solutions',
			'E-commerce Security',
			'API Development',
			'Cloud Services',
			'Audit Trail Management',
			'SQL'
		],
		title: 'Resolve SQL in Product Customization Tool',
		description:
			'You will begin by Cloud Services within the Product Customization Tool. Following initial steps, you should Payment Solutions to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 52,
		assignedTo: 16
	},
	{
		id: 813,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 13,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Development',
			supportCase: 'SB73BPWZH2'
		},
		startDate: '04/02/2023',
		endDate: '05/10/2024',
		skills: [
			'Supply Chain Management',
			'Business Intelligence',
			'Data Visualization',
			'Backend Development',
			'Frontend Development'
		],
		title: 'Help Backend Development in Online Marketing Strategy',
		description:
			'We aim to Frontend Development within the Online Marketing Strategy. From there, move on to Supply Chain Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 54,
		assignedTo: 24
	},
	{
		id: 814,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Support',
			supportCase: 'SBSU7LX6UX'
		},
		startDate: '05/17/2023',
		endDate: '05/22/2024',
		skills: ['Data Analysis', 'System Architecture', 'Payment Solutions', 'Python'],
		title: 'Implement Data Analysis in Workflow Automation',
		description:
			'We aim to System Architecture within the Workflow Automation. Once completed, proceed to Python to enhance overall outcomes. Focus also on Python to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 58,
		assignedTo: 26
	},
	{
		id: 815,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Discovery',
			supportCase: 'SBDLNU85JB'
		},
		startDate: '04/08/2023',
		endDate: '04/27/2024',
		skills: [
			'HIPAA Compliance',
			'E-commerce Security',
			'Report Generation',
			'Database Management',
			'Client Communication',
			'Payment Solutions',
			'Analytics'
		],
		title: 'Customer Segmentation Analysis Needs Analytics Fixed',
		description:
			'You will begin by HIPAA Compliance within the Customer Segmentation Analysis. Once completed, proceed to E-commerce Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 29,
		assignedTo: 32
	},
	{
		id: 816,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SBZ6670FTY'
		},
		startDate: '09/11/2023',
		endDate: '05/15/2024',
		skills: [
			'Analytics',
			'Data Analysis',
			'Database Management',
			'E-commerce Security',
			'Healthcare IT'
		],
		title: 'Resolve Database Management in Compliance Tracking System',
		description:
			'This task involves Data Analysis within the Compliance Tracking System. Once completed, proceed to Database Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 32,
		assignedTo: 33
	},
	{
		id: 817,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Development',
			supportCase: 'SB9KTIWHK2'
		},
		startDate: '06/01/2023',
		endDate: '05/06/2024',
		skills: [
			'Data Analysis',
			'Data Visualization',
			'API Development',
			'Network Security',
			'System Architecture',
			'Inventory Database'
		],
		title: 'Fix API Development in Lead Tracking Software',
		description:
			'This task involves System Architecture within the Lead Tracking Software. Following initial steps, you should System Architecture to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 33,
		assignedTo: null
	},
	{
		id: 818,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'Support',
			supportCase: 'SBUWZAWTML'
		},
		startDate: '04/20/2024',
		endDate: '05/21/2024',
		skills: [
			'Business Intelligence',
			'Client Communication',
			'Payment Solutions',
			'Data Visualization',
			'API Development'
		],
		title: 'Fix Client Communication in Multi-Tenant Systems',
		description:
			'The objective here is Data Visualization within the Multi-Tenant Systems. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 60,
		assignedTo: 66
	},
	{
		id: 819,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Support',
			supportCase: 'SBREI70XFF'
		},
		startDate: '11/17/2023',
		endDate: '05/15/2024',
		skills: ['Payment Solutions', 'Data Visualization', 'Business Intelligence', 'SQL'],
		title: 'Adjust SQL in Logistics Tracking Interface',
		description:
			'This task involves Business Intelligence within the Logistics Tracking Interface. Once completed, proceed to Payment Solutions to enhance overall outcomes. Focus also on SQL to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 59,
		assignedTo: 35
	},
	{
		id: 820,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SB7IJH8ZI2'
		},
		startDate: '03/08/2024',
		endDate: '04/30/2024',
		skills: [
			'Report Generation',
			'User Testing',
			'Audit Trail Management',
			'Frontend Development',
			'C#',
			'Data Analysis',
			'Business Intelligence'
		],
		title: 'Resolve Frontend Development in Digital Catalogue',
		description:
			'This task involves Business Intelligence within the Digital Catalogue. From there, move on to Frontend Development to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 35,
		assignedTo: 38
	},
	{
		id: 821,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SBI7RW9J71'
		},
		startDate: '09/18/2023',
		endDate: '05/17/2024',
		skills: [
			'Supply Chain Management',
			'Cloud Services',
			'Payment Solutions',
			'Data Encryption',
			'HIPAA Compliance'
		],
		title: 'Fix HIPAA Compliance in Product Design Simulation',
		description:
			'The objective here is HIPAA Compliance within the Product Design Simulation. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 38,
		assignedTo: null
	},
	{
		id: 822,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'Project Management',
			supportCase: 'SBPG3LTSQR'
		},
		startDate: '09/26/2023',
		endDate: '05/07/2024',
		skills: [
			'Supply Chain Management',
			'Client Communication',
			'Business Intelligence',
			'Operational Efficiency',
			'Data Visualization'
		],
		title: 'Adjust Business Intelligence in Financial Forecasting Tool',
		description:
			'Your main task will be Client Communication within the Financial Forecasting Tool. From there, move on to Client Communication to enhance overall outcomes. Focus also on Business Intelligence to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 61,
		assignedTo: 37
	},
	{
		id: 823,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Project Management',
			supportCase: 'SBTCD5P93V'
		},
		startDate: '03/10/2024',
		endDate: '05/07/2024',
		skills: [
			'SQL',
			'Data Analysis',
			'E-commerce Security',
			'Backend Development',
			'Regulatory Compliance'
		],
		title: 'Optimize Data Analysis in Safety Compliance Check',
		description:
			'Your main task will be Regulatory Compliance within the Safety Compliance Check. Following initial steps, you should Regulatory Compliance to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 62,
		assignedTo: 40
	},
	{
		id: 824,
		role: 'Director',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Support',
			supportCase: 'SBACI9P6DL'
		},
		startDate: '08/18/2023',
		endDate: '05/18/2024',
		skills: [
			'Healthcare IT',
			'Performance Tuning',
			'Supply Chain Management',
			'Audit Trail Management',
			'Report Generation',
			'Frontend Development'
		],
		title: 'Sales Dashboard Needs Frontend Development Fixed',
		description:
			'Your main task will be Frontend Development within the Sales Dashboard. From there, move on to Performance Tuning to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 73,
		assignedTo: 28
	},
	{
		id: 825,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SBQPHZETF5'
		},
		startDate: '03/25/2023',
		endDate: '05/02/2024',
		skills: [
			'Frontend Development',
			'E-commerce Security',
			'Audit Trail Management',
			'Data Visualization',
			'Performance Tuning',
			'Inventory Database'
		],
		title: 'Support Data Visualization in Web Application Security',
		description:
			'The objective here is Frontend Development within the Web Application Security. Your next steps should include Audit Trail Management to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 63,
		assignedTo: null
	},
	{
		id: 826,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Multi-Tenant Systems',
			projectCode: 'UAT',
			supportCase: 'SB4HL32QJY'
		},
		startDate: '07/20/2023',
		endDate: '05/17/2024',
		skills: ['Report Generation', 'HIPAA Compliance', 'Healthcare IT', 'SQL'],
		title: 'Support Report Generation in Multi-Tenant Systems',
		description:
			'The objective here is Report Generation within the Multi-Tenant Systems. Subsequently, your efforts will involve SQL to enhance overall outcomes. Focus also on Report Generation to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 40,
		assignedTo: 41
	},
	{
		id: 827,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Development',
			supportCase: 'SBUO7P0HVX'
		},
		startDate: '01/05/2024',
		endDate: '05/05/2024',
		skills: [
			'Report Generation',
			'SQL',
			'Cloud Services',
			'HIPAA Compliance',
			'Data Visualization'
		],
		title: 'Resolve HIPAA Compliance in Efficiency Audit Tools',
		description:
			'This task involves Data Visualization within the Efficiency Audit Tools. Once completed, proceed to Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 65,
		assignedTo: null
	},
	{
		id: 828,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'UAT',
			supportCase: 'SBPIR909HW'
		},
		startDate: '02/03/2024',
		endDate: '05/07/2024',
		skills: ['Cloud Services', 'Network Security', 'Inventory Database', 'Analytics'],
		title: 'Implement Network Security in Digital Catalogue',
		description:
			'The objective here is Network Security within the Digital Catalogue. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 41,
		assignedTo: null
	},
	{
		id: 829,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBR26GDD4C'
		},
		startDate: '04/09/2023',
		endDate: '05/02/2024',
		skills: [
			'Client Communication',
			'System Architecture',
			'Inventory Database',
			'Operational Efficiency',
			'Cloud Services',
			'Business Intelligence',
			'Network Security'
		],
		title: 'SaaS Platform Integration Needs Client Communication Fixed',
		description:
			'Your main task will be Client Communication within the SaaS Platform Integration. From there, move on to Operational Efficiency to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 66,
		assignedTo: 43
	},
	{
		id: 830,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Transaction Processing System',
			projectCode: 'Project Management',
			supportCase: 'SBRQ3F0SU5'
		},
		startDate: '05/08/2023',
		endDate: '05/27/2024',
		skills: [
			'UI/UX Design',
			'Inventory Database',
			'Data Analysis',
			'Report Generation',
			'Data Visualization',
			'Client Communication'
		],
		title: 'Implement Report Generation in Transaction Processing System',
		description:
			'Your main task will be Inventory Database within the Transaction Processing System. Your next steps should include Report Generation to enhance overall outcomes. Focus also on Inventory Database to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 67,
		assignedTo: 60
	},
	{
		id: 831,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Testing',
			supportCase: 'SBX7TBUWIE'
		},
		startDate: '10/16/2023',
		endDate: '05/14/2024',
		skills: [
			'Python',
			'System Architecture',
			'E-commerce Security',
			'Regulatory Compliance',
			'Data Visualization'
		],
		title: 'Help E-commerce Security in Product Design Simulation',
		description:
			'The objective here is System Architecture within the Product Design Simulation. Your next steps should include System Architecture to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 70,
		assignedTo: 67
	},
	{
		id: 832,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Testing',
			supportCase: 'SB5U668FP4'
		},
		startDate: '12/20/2023',
		endDate: '05/22/2024',
		skills: [
			'Supply Chain Management',
			'Payment Solutions',
			'Report Generation',
			'Cloud Services',
			'E-commerce Security',
			'SQL',
			'Analytics'
		],
		title: 'Point of Sale System Needs SQL Fixed',
		description:
			'The focus is on Supply Chain Management within the Point of Sale System. Once completed, proceed to Supply Chain Management to enhance overall outcomes. Focus also on Payment Solutions to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 72,
		assignedTo: 79
	},
	{
		id: 833,
		role: 'Manager',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Project Management',
			supportCase: 'SBFDCT7QX0'
		},
		startDate: '02/26/2024',
		endDate: '05/22/2024',
		skills: ['Inventory Database', 'Healthcare IT', 'Supply Chain Management'],
		title: 'Full Stack Web Development Needs Healthcare IT Fixed',
		description:
			'The focus is on Supply Chain Management within the Full Stack Web Development. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 74,
		assignedTo: 70
	},
	{
		id: 834,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SBOCX0BXZ3'
		},
		startDate: '04/16/2024',
		endDate: '05/12/2024',
		skills: [
			'Healthcare IT',
			'Regulatory Compliance',
			'Performance Tuning',
			'Python',
			'Payment Solutions',
			'Supply Chain Management'
		],
		title: 'Support Python in Digital Catalogue',
		description:
			'The objective here is Payment Solutions within the Digital Catalogue. Once completed, proceed to Performance Tuning to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 78,
		assignedTo: 84
	},
	{
		id: 835,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Development',
			supportCase: 'SBDKSKMVTC'
		},
		startDate: '07/15/2023',
		endDate: '04/30/2024',
		skills: [
			'Regulatory Compliance',
			'Data Analysis',
			'UI/UX Design',
			'Performance Tuning',
			'Healthcare IT'
		],
		title: 'Implement Data Analysis in Retail Management Suite',
		description:
			'The objective here is UI/UX Design within the Retail Management Suite. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on UI/UX Design to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 83,
		assignedTo: 25
	},
	{
		id: 836,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Support',
			supportCase: 'SBAZIVAA1X'
		},
		startDate: '11/22/2023',
		endDate: '05/07/2024',
		skills: ['SQL', 'Client Communication', 'Operational Efficiency'],
		title: 'Help Operational Efficiency in Mobile UX/UI Upgrade',
		description:
			'This task involves Operational Efficiency within the Mobile UX/UI Upgrade. Following initial steps, you should Operational Efficiency to enhance overall outcomes. Focus also on SQL to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 46,
		assignedTo: 47
	},
	{
		id: 837,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SBUXKYKNOY'
		},
		startDate: '03/15/2024',
		endDate: '05/13/2024',
		skills: ['Healthcare IT', 'Database Management', 'Audit Trail Management', 'Analytics'],
		title: 'Create Analytics in Tenant Screening Process',
		description:
			'You will begin by Database Management within the Tenant Screening Process. Once completed, proceed to Healthcare IT to enhance overall outcomes. Focus also on Analytics to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 68,
		assignedTo: 44
	},
	{
		id: 838,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'Development',
			supportCase: 'SBVEN6757J'
		},
		startDate: '09/04/2023',
		endDate: '04/29/2024',
		skills: [
			'Data Analysis',
			'Analytics',
			'C#',
			'Data Encryption',
			'API Development',
			'Network Security',
			'Performance Tuning'
		],
		title: 'Help API Development in Safety Compliance Check',
		description:
			'Your main task will be Analytics within the Safety Compliance Check. Subsequently, your efforts will involve Analytics to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 47,
		assignedTo: 46
	},
	{
		id: 839,
		role: 'Senior Associate',
		team: 2,
		status: 'Sign-off',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Support',
			supportCase: 'SB06JR8JCR'
		},
		startDate: '08/30/2023',
		endDate: '05/26/2024',
		skills: [
			'Report Generation',
			'Audit Trail Management',
			'Inventory Database',
			'Business Intelligence'
		],
		title: 'Adjust Report Generation in Customer Loyalty Programs',
		description:
			'You will begin by Inventory Database within the Customer Loyalty Programs. Your next steps should include Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 71,
		assignedTo: 49
	},
	{
		id: 840,
		role: 'Senior Associate',
		team: 2,
		status: 'Cancelled',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Project Management',
			supportCase: 'SBOYO2701Q'
		},
		startDate: '05/26/2023',
		endDate: '05/07/2024',
		skills: [
			'UI/UX Design',
			'Frontend Development',
			'Regulatory Compliance',
			'Backend Development'
		],
		title: 'Fix Backend Development in Web Application Security',
		description:
			'The focus is on Regulatory Compliance within the Web Application Security. From there, move on to UI/UX Design to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 77,
		assignedTo: 50
	},
	{
		id: 841,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Development',
			supportCase: 'SBSHBTP5Y0'
		},
		startDate: '10/04/2023',
		endDate: '05/10/2024',
		skills: [
			'Performance Tuning',
			'Inventory Database',
			'Regulatory Compliance',
			'Database Management',
			'Healthcare IT',
			'Audit Trail Management'
		],
		title: 'Help Healthcare IT in API Backend Integration',
		description:
			'The objective here is Performance Tuning within the API Backend Integration. Your next steps should include Audit Trail Management to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 79,
		assignedTo: 51
	},
	{
		id: 842,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Discovery',
			supportCase: 'SBBUULOWPU'
		},
		startDate: '11/28/2023',
		endDate: '04/27/2024',
		skills: [
			'Audit Trail Management',
			'Data Visualization',
			'Payment Solutions',
			'Analytics',
			'SQL',
			'Report Generation',
			'Client Communication'
		],
		title: 'Adjust Client Communication in Responsive Web Design',
		description:
			'This task involves Data Visualization within the Responsive Web Design. Once completed, proceed to Client Communication to enhance overall outcomes. Focus also on Payment Solutions to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 51,
		assignedTo: 53
	},
	{
		id: 843,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Development',
			supportCase: 'SBHIXHMF7I'
		},
		startDate: '03/04/2024',
		endDate: '05/17/2024',
		skills: ['Business Intelligence', 'Network Security', 'Data Analysis'],
		title: 'Resolve Business Intelligence in API Backend Integration',
		description:
			'You will begin by Data Analysis within the API Backend Integration. From there, move on to Network Security to enhance overall outcomes. Focus also on Network Security to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 81,
		assignedTo: 55
	},
	{
		id: 844,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Support',
			supportCase: 'SBCNBV8AWT'
		},
		startDate: '05/23/2023',
		endDate: '05/07/2024',
		skills: ['Healthcare IT', 'Inventory Database', 'Analytics', 'Business Intelligence'],
		title: 'Adjust Healthcare IT in Cloud Data Solutions',
		description:
			'This task involves Inventory Database within the Cloud Data Solutions. Once completed, proceed to Business Intelligence to enhance overall outcomes. Focus also on Analytics to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 53,
		assignedTo: 56
	},
	{
		id: 845,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Project Management',
			supportCase: 'SBCL9WHQBL'
		},
		startDate: '10/13/2023',
		endDate: '05/23/2024',
		skills: [
			'System Architecture',
			'E-commerce Security',
			'Performance Tuning',
			'Python',
			'Client Communication'
		],
		title: 'Resolve Python in CRM Integration',
		description:
			'The focus is on E-commerce Security within the CRM Integration. Following initial steps, you should Python to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 55,
		assignedTo: null
	},
	{
		id: 846,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Development',
			supportCase: 'SB0IGF8I4A'
		},
		startDate: '03/01/2024',
		endDate: '05/05/2024',
		skills: [
			'SQL',
			'Healthcare IT',
			'Performance Tuning',
			'E-commerce Security',
			'Cloud Services',
			'Inventory Database',
			'System Architecture'
		],
		title: 'Optimize Cloud Services in Retail Management Suite',
		description:
			'You will begin by E-commerce Security within the Retail Management Suite. Following initial steps, you should Cloud Services to enhance overall outcomes. Focus also on Cloud Services to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 84,
		assignedTo: null
	},
	{
		id: 847,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Project Management',
			supportCase: 'SB4W1UWGCW'
		},
		startDate: '12/29/2023',
		endDate: '05/24/2024',
		skills: [
			'Performance Tuning',
			'Report Generation',
			'Audit Trail Management',
			'System Architecture',
			'Data Encryption'
		],
		title: 'Front-end Development Needs Data Encryption Fixed',
		description:
			'We aim to Data Encryption within the Front-end Development. Your next steps should include Data Encryption to enhance overall outcomes. Focus also on Data Encryption to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 85,
		assignedTo: null
	},
	{
		id: 848,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Development',
			supportCase: 'SB318APHQZ'
		},
		startDate: '03/29/2024',
		endDate: '05/13/2024',
		skills: ['E-commerce Security', 'HIPAA Compliance', 'Analytics'],
		title: 'Optimize Analytics in Branding Portal',
		description:
			'Your main task will be HIPAA Compliance within the Branding Portal. Subsequently, your efforts will involve E-commerce Security to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 56,
		assignedTo: 57
	},
	{
		id: 849,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Material Specification Tool',
			projectCode: 'Testing',
			supportCase: 'SBGHIYG6ZX'
		},
		startDate: '06/22/2023',
		endDate: '05/14/2024',
		skills: ['HIPAA Compliance', 'Audit Trail Management', 'Data Visualization'],
		title: 'Material Specification Tool Needs HIPAA Compliance Fixed',
		description:
			'You will begin by Audit Trail Management within the Material Specification Tool. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on Data Visualization to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 89,
		assignedTo: 85
	},
	{
		id: 850,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Development',
			supportCase: 'SBT0IPBWAY'
		},
		startDate: '01/12/2024',
		endDate: '05/26/2024',
		skills: ['Data Visualization', 'Inventory Database', 'C#'],
		title: 'Building Maintenance App Needs Data Visualization Fixed',
		description:
			'We aim to C# within the Building Maintenance App. From there, move on to Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 86,
		assignedTo: 59
	},
	{
		id: 851,
		role: 'Senior Associate',
		team: 1,
		status: 'Cancelled',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Testing',
			supportCase: 'SBNM41OGZS'
		},
		startDate: '10/15/2023',
		endDate: '05/02/2024',
		skills: ['Business Intelligence', 'Regulatory Compliance', 'Data Analysis'],
		title: 'Create Data Analysis in Client Onboarding Process',
		description:
			'Your main task will be Business Intelligence within the Client Onboarding Process. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Data Analysis to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 87,
		assignedTo: 61
	},
	{
		id: 852,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Development',
			supportCase: 'SB8XL7OD5U'
		},
		startDate: '08/18/2023',
		endDate: '05/13/2024',
		skills: [
			'API Development',
			'SQL',
			'E-commerce Security',
			'Client Communication',
			'Python',
			'C#',
			'Data Encryption'
		],
		title: 'Insurance Claim Automation Needs C# Fixed',
		description:
			'We aim to Data Encryption within the Insurance Claim Automation. Subsequently, your efforts will involve C# to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 57,
		assignedTo: 64
	},
	{
		id: 853,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Testing',
			supportCase: 'SBDUGUGHIC'
		},
		startDate: '12/06/2023',
		endDate: '04/28/2024',
		skills: ['Regulatory Compliance', 'Report Generation', 'Data Encryption'],
		title: 'Support Report Generation in Efficiency Audit Tools',
		description:
			'You will begin by Regulatory Compliance within the Efficiency Audit Tools. Your next steps should include Report Generation to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 90,
		assignedTo: 89
	},
	{
		id: 854,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Support',
			supportCase: 'SBQVZCZGO2'
		},
		startDate: '04/20/2024',
		endDate: '05/28/2024',
		skills: [
			'Regulatory Compliance',
			'Client Communication',
			'SQL',
			'Report Generation',
			'Business Intelligence'
		],
		title: 'API Backend Integration Needs Business Intelligence Fixed',
		description:
			'The objective here is Client Communication within the API Backend Integration. Your next steps should include Client Communication to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 92,
		assignedTo: null
	},
	{
		id: 855,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'UAT',
			supportCase: 'SBNEKPZVZH'
		},
		startDate: '10/28/2023',
		endDate: '05/21/2024',
		skills: [
			'Payment Solutions',
			'API Development',
			'Analytics',
			'System Architecture',
			'Inventory Database',
			'Data Encryption'
		],
		title: 'Implement Payment Solutions in Audience Analytics',
		description:
			'The objective here is Analytics within the Audience Analytics. Your next steps should include Payment Solutions to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 88,
		assignedTo: 62
	},
	{
		id: 856,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Development',
			supportCase: 'SBME8U54ZT'
		},
		startDate: '07/28/2023',
		endDate: '05/16/2024',
		skills: ['API Development', 'Report Generation', 'HIPAA Compliance', 'Network Security'],
		title: 'Optimize HIPAA Compliance in Product Customization Tool',
		description:
			'This task involves Report Generation within the Product Customization Tool. Subsequently, your efforts will involve API Development to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 64,
		assignedTo: 69
	},
	{
		id: 857,
		role: 'Associate',
		team: 2,
		status: 'Cancelled',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'UAT',
			supportCase: 'SBH45434MV'
		},
		startDate: '04/05/2024',
		endDate: '05/15/2024',
		skills: ['Analytics', 'HIPAA Compliance', 'Data Analysis', 'Supply Chain Management'],
		title: 'Customer Engagement Platform Needs Data Analysis Fixed',
		description:
			'This task involves Analytics within the Customer Engagement Platform. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Focus also on Analytics to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 69,
		assignedTo: 75
	},
	{
		id: 858,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Rental Management Software',
			projectCode: 'Testing',
			supportCase: 'SBU5ABBU2A'
		},
		startDate: '03/21/2023',
		endDate: '05/21/2024',
		skills: [
			'API Development',
			'System Architecture',
			'Client Communication',
			'Performance Tuning',
			'Inventory Database',
			'Audit Trail Management'
		],
		title: 'Help Client Communication in Rental Management Software',
		description:
			'You will begin by Client Communication within the Rental Management Software. Following initial steps, you should Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 94,
		assignedTo: 68
	},
	{
		id: 859,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBSN8BDZQI'
		},
		startDate: '06/06/2023',
		endDate: '05/10/2024',
		skills: [
			'Cloud Services',
			'Network Security',
			'Report Generation',
			'HIPAA Compliance',
			'Data Visualization',
			'E-commerce Security',
			'Python'
		],
		title: 'Optimize Python in SaaS Platform Integration',
		description:
			'The focus is on Report Generation within the SaaS Platform Integration. Once completed, proceed to Cloud Services to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 75,
		assignedTo: null
	},
	{
		id: 860,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Support',
			supportCase: 'SBQWNP52IP'
		},
		startDate: '06/27/2023',
		endDate: '05/07/2024',
		skills: [
			'E-commerce Security',
			'Performance Tuning',
			'Payment Solutions',
			'Operational Efficiency',
			'Healthcare IT'
		],
		title: 'Fix Payment Solutions in Building Maintenance App',
		description:
			'The focus is on E-commerce Security within the Building Maintenance App. From there, move on to Operational Efficiency to enhance overall outcomes. Focus also on Operational Efficiency to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 76,
		assignedTo: null
	},
	{
		id: 861,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - Responsive Web Design',
			projectCode: 'Development',
			supportCase: 'SBKHZV0UBA'
		},
		startDate: '08/14/2023',
		endDate: '05/29/2024',
		skills: ['Database Management', 'Payment Solutions', 'Backend Development'],
		title: 'Implement Backend Development in Responsive Web Design',
		description:
			'Your main task will be Backend Development within the Responsive Web Design. Your next steps should include Payment Solutions to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 95,
		assignedTo: 71
	},
	{
		id: 862,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SBW6UST1MP'
		},
		startDate: '04/26/2024',
		endDate: '05/01/2024',
		skills: [
			'Report Generation',
			'API Development',
			'SQL',
			'Performance Tuning',
			'Payment Solutions'
		],
		title: 'Compliance Tracking System Needs Payment Solutions Fixed',
		description:
			'You will begin by Performance Tuning within the Compliance Tracking System. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 80,
		assignedTo: 76
	},
	{
		id: 863,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Support',
			supportCase: 'SBPP0OKEKO'
		},
		startDate: '01/04/2024',
		endDate: '05/04/2024',
		skills: [
			'Network Security',
			'Report Generation',
			'E-commerce Security',
			'Client Communication',
			'Analytics',
			'Supply Chain Management'
		],
		title: 'Fix Report Generation in Cloud Data Solutions',
		description:
			'You will begin by Analytics within the Cloud Data Solutions. From there, move on to E-commerce Security to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 82,
		assignedTo: 80
	},
	{
		id: 864,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Development',
			supportCase: 'SBDHKRFCHA'
		},
		startDate: '06/06/2023',
		endDate: '05/26/2024',
		skills: [
			'Supply Chain Management',
			'Healthcare IT',
			'Data Analysis',
			'HIPAA Compliance',
			'Payment Solutions',
			'User Testing'
		],
		title: 'Help Data Analysis in API Backend Integration',
		description:
			'The objective here is Data Analysis within the API Backend Integration. Once completed, proceed to User Testing to enhance overall outcomes. Focus also on Healthcare IT to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 91,
		assignedTo: null
	},
	{
		id: 865,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Support',
			supportCase: 'SBVUCR80R9'
		},
		startDate: '09/12/2023',
		endDate: '05/06/2024',
		skills: ['E-commerce Security', 'Data Analysis', 'Performance Tuning'],
		title: 'Supply Chain Management System Needs Data Analysis Fixed',
		description:
			'The focus is on E-commerce Security within the Supply Chain Management System. Subsequently, your efforts will involve E-commerce Security to enhance overall outcomes. Focus also on Performance Tuning to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 96,
		assignedTo: 77
	},
	{
		id: 866,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Testing',
			supportCase: 'SBBIZOPSMD'
		},
		startDate: '04/09/2023',
		endDate: '04/30/2024',
		skills: [
			'Backend Development',
			'Database Management',
			'Analytics',
			'Frontend Development',
			'Client Communication',
			'Inventory Database',
			'SQL'
		],
		title: 'Implement Frontend Development in Health Records Integration',
		description:
			'The focus is on Client Communication within the Health Records Integration. Once completed, proceed to Frontend Development to enhance overall outcomes. Focus also on SQL to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 93,
		assignedTo: 82
	},
	{
		id: 867,
		role: 'Manager',
		team: 2,
		status: 'Cancelled',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Project Management',
			supportCase: 'SB24IZ3SFR'
		},
		startDate: '07/14/2023',
		endDate: '05/16/2024',
		skills: [
			'Frontend Development',
			'Database Management',
			'Operational Efficiency',
			'Inventory Database',
			'JavaScript',
			'Client Communication',
			'Healthcare IT'
		],
		title: 'Adjust Operational Efficiency in Compliance Tracking System',
		description:
			'This task involves Operational Efficiency within the Compliance Tracking System. From there, move on to Client Communication to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 102,
		assignedTo: 72
	},
	{
		id: 868,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'UAT',
			supportCase: 'SBCUB23RHE'
		},
		startDate: '04/25/2024',
		endDate: '05/10/2024',
		skills: [
			'Healthcare IT',
			'Data Visualization',
			'Supply Chain Management',
			'JavaScript',
			'API Development',
			'SQL'
		],
		title: 'Implement SQL in Data Reporting Tools',
		description:
			'This task involves SQL within the Data Reporting Tools. Following initial steps, you should Healthcare IT to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 97,
		assignedTo: 81
	},
	{
		id: 869,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Testing',
			supportCase: 'SB9H1T7MT2'
		},
		startDate: '02/14/2024',
		endDate: '05/26/2024',
		skills: [
			'Performance Tuning',
			'Python',
			'Client Communication',
			'E-commerce Security',
			'Regulatory Compliance',
			'Audit Trail Management',
			'Payment Solutions'
		],
		title: 'Help E-commerce Security in Telemedicine Platform',
		description:
			'You will begin by Client Communication within the Telemedicine Platform. Subsequently, your efforts will involve Python to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 98,
		assignedTo: 91
	},
	{
		id: 870,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SBS0OCXBQ7'
		},
		startDate: '04/13/2024',
		endDate: '05/10/2024',
		skills: ['Client Communication', 'Healthcare IT', 'Operational Efficiency'],
		title: 'Resolve Operational Efficiency in Tenant Screening Process',
		description:
			'The focus is on Client Communication within the Tenant Screening Process. Your next steps should include Healthcare IT to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 99,
		assignedTo: 93
	},
	{
		id: 871,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBQNDB7TGM'
		},
		startDate: '01/11/2024',
		endDate: '04/27/2024',
		skills: [
			'HIPAA Compliance',
			'Python',
			'Performance Tuning',
			'Data Visualization',
			'System Architecture',
			'API Development'
		],
		title: 'Help HIPAA Compliance in Sales Dashboard',
		description:
			'The objective here is Data Visualization within the Sales Dashboard. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Focus also on API Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 101,
		assignedTo: 92
	},
	{
		id: 872,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Testing',
			supportCase: 'SBYQXHT0W1'
		},
		startDate: '04/20/2023',
		endDate: '05/27/2024',
		skills: ['Regulatory Compliance', 'Database Management', 'UI/UX Design'],
		title: 'Health Records Integration Needs Database Management Fixed',
		description:
			'We aim to Regulatory Compliance within the Health Records Integration. Once completed, proceed to Regulatory Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 100,
		assignedTo: 106
	},
	{
		id: 873,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SB4YX775EA'
		},
		startDate: '07/27/2023',
		endDate: '05/15/2024',
		skills: ['E-commerce Security', 'C#', 'Healthcare IT', 'SQL'],
		title: 'Help C# in Payment Gateway Integration',
		description:
			'Your main task will be E-commerce Security within the Payment Gateway Integration. From there, move on to C# to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: 86
	},
	{
		id: 874,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Project Management',
			supportCase: 'SBXSE3NVAD'
		},
		startDate: '09/08/2023',
		endDate: '05/22/2024',
		skills: ['Backend Development', 'Analytics', 'Data Visualization'],
		title: 'Resolve Analytics in Visualization of Data Insights',
		description:
			'We aim to Backend Development within the Visualization of Data Insights. From there, move on to Data Visualization to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 104,
		assignedTo: 87
	},
	{
		id: 875,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBCE9DU11D'
		},
		startDate: '04/10/2023',
		endDate: '05/20/2024',
		skills: [
			'E-commerce Security',
			'SQL',
			'Client Communication',
			'Cloud Services',
			'Business Intelligence',
			'C#',
			'Audit Trail Management'
		],
		title: 'Fix SQL in SaaS Platform Integration',
		description:
			'This task involves SQL within the SaaS Platform Integration. Subsequently, your efforts will involve C# to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 105,
		assignedTo: 96
	},
	{
		id: 876,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SB1ZAHMQNN'
		},
		startDate: '06/26/2023',
		endDate: '05/03/2024',
		skills: ['Performance Tuning', 'Python', 'Payment Solutions', 'Analytics', 'SQL', 'JavaScript'],
		title: 'Fix JavaScript in SaaS Platform Integration',
		description:
			'The objective here is Python within the SaaS Platform Integration. Subsequently, your efforts will involve Python to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 106,
		assignedTo: 100
	},
	{
		id: 877,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Development',
			supportCase: 'SB0BJGJ3BX'
		},
		startDate: '09/19/2023',
		endDate: '05/18/2024',
		skills: [
			'Python',
			'Payment Solutions',
			'Client Communication',
			'Frontend Development',
			'Data Analysis',
			'Data Visualization'
		],
		title: 'Implement Data Analysis in Workflow Automation',
		description:
			'The focus is on Python within the Workflow Automation. Following initial steps, you should Payment Solutions to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 108,
		assignedTo: null
	},
	{
		id: 878,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Development',
			supportCase: 'SBU1MCAB3O'
		},
		startDate: '10/16/2023',
		endDate: '05/15/2024',
		skills: [
			'Audit Trail Management',
			'Payment Solutions',
			'Supply Chain Management',
			'Network Security',
			'Cloud Services',
			'C#'
		],
		title: 'Support Network Security in Risk Assessment Software',
		description:
			'Your main task will be C# within the Risk Assessment Software. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Focus also on Cloud Services to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 107,
		assignedTo: 3
	},
	{
		id: 879,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SBAH07VN2B'
		},
		startDate: '03/30/2024',
		endDate: '05/26/2024',
		skills: [
			'System Architecture',
			'HIPAA Compliance',
			'Network Security',
			'C#',
			'Python',
			'Data Visualization',
			'Regulatory Compliance'
		],
		title: 'Help System Architecture in Tenant Screening Process',
		description:
			'We aim to Network Security within the Tenant Screening Process. Following initial steps, you should Network Security to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 109,
		assignedTo: null
	},
	{
		id: 880,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SBXX9U6FME'
		},
		startDate: '05/08/2023',
		endDate: '05/26/2024',
		skills: [
			'Supply Chain Management',
			'Operational Efficiency',
			'Cloud Services',
			'Data Visualization',
			'Network Security'
		],
		title: 'Fix Data Visualization in Web Application Security',
		description:
			'The focus is on Data Visualization within the Web Application Security. From there, move on to Operational Efficiency to enhance overall outcomes. Focus also on Supply Chain Management to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 110,
		assignedTo: 101
	},
	{
		id: 881,
		role: 'Senior Manager',
		team: 2,
		status: 'Completed',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'UAT',
			supportCase: 'SB008WH59U'
		},
		startDate: '03/18/2024',
		endDate: '04/30/2024',
		skills: ['User Testing', 'Data Analysis', 'Data Visualization'],
		title: 'Resolve Data Visualization in Supply Chain Management System',
		description:
			'The focus is on Data Analysis within the Supply Chain Management System. Subsequently, your efforts will involve Data Visualization to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 17,
		assignedTo: null
	},
	{
		id: 882,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Testing',
			supportCase: 'SBO5HLUKJA'
		},
		startDate: '11/07/2023',
		endDate: '05/11/2024',
		skills: ['Report Generation', 'Business Intelligence', 'HIPAA Compliance'],
		title: 'Audience Analytics Needs Business Intelligence Fixed',
		description:
			'You will begin by HIPAA Compliance within the Audience Analytics. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 1,
		assignedTo: null
	},
	{
		id: 883,
		role: 'Senior Manager',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Workflow Automation',
			projectCode: 'Support',
			supportCase: 'SB45WBGG3N'
		},
		startDate: '04/28/2023',
		endDate: '05/23/2024',
		skills: [
			'Regulatory Compliance',
			'API Development',
			'HIPAA Compliance',
			'Data Visualization',
			'Performance Tuning',
			'Audit Trail Management',
			'System Architecture'
		],
		title: 'Create HIPAA Compliance in Workflow Automation',
		description:
			'The focus is on API Development within the Workflow Automation. Once completed, proceed to System Architecture to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 25,
		assignedTo: 63
	},
	{
		id: 884,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'Development',
			supportCase: 'SBQYB79T23'
		},
		startDate: '06/30/2023',
		endDate: '05/18/2024',
		skills: [
			'Database Management',
			'Analytics',
			'Backend Development',
			'Data Analysis',
			'UI/UX Design',
			'Business Intelligence',
			'Frontend Development'
		],
		title: 'Resolve Analytics in Lead Tracking Software',
		description:
			'The focus is on Analytics within the Lead Tracking Software. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on Database Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 2,
		assignedTo: 88
	},
	{
		id: 885,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Development',
			supportCase: 'SBI2RIEWV5'
		},
		startDate: '11/15/2023',
		endDate: '05/16/2024',
		skills: [
			'Analytics',
			'System Architecture',
			'Data Visualization',
			'Audit Trail Management',
			'Operational Efficiency',
			'Cloud Services',
			'Report Generation'
		],
		title: 'Support Data Visualization in Supply Chain Management System',
		description:
			'You will begin by Data Visualization within the Supply Chain Management System. Your next steps should include Cloud Services to enhance overall outcomes. Focus also on Report Generation to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 3,
		assignedTo: 107
	},
	{
		id: 886,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Support',
			supportCase: 'SBTY0G7OU6'
		},
		startDate: '12/07/2023',
		endDate: '05/22/2024',
		skills: ['Network Security', 'Inventory Database', 'Analytics'],
		title: 'Fix Inventory Database in Internal Communication Tool',
		description:
			'The focus is on Inventory Database within the Internal Communication Tool. Following initial steps, you should Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 4,
		assignedTo: 5
	},
	{
		id: 887,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SB5N6SH4JV'
		},
		startDate: '04/02/2023',
		endDate: '05/17/2024',
		skills: [
			'Network Security',
			'Audit Trail Management',
			'Client Communication',
			'Performance Tuning'
		],
		title: 'Help Performance Tuning in Digital Distribution Network',
		description:
			'This task involves Client Communication within the Digital Distribution Network. Your next steps should include Audit Trail Management to enhance overall outcomes. Focus also on Network Security to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 28,
		assignedTo: 65
	},
	{
		id: 888,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'UAT',
			supportCase: 'SB7PRU37A8'
		},
		startDate: '03/29/2023',
		endDate: '05/11/2024',
		skills: [
			'Network Security',
			'Client Communication',
			'Audit Trail Management',
			'SQL',
			'API Development',
			'Report Generation'
		],
		title: 'Adjust API Development in Data Reporting Tools',
		description:
			'The focus is on SQL within the Data Reporting Tools. From there, move on to API Development to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 5,
		assignedTo: 7
	},
	{
		id: 889,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBT5NFIMST'
		},
		startDate: '10/16/2023',
		endDate: '05/16/2024',
		skills: [
			'UI/UX Design',
			'Supply Chain Management',
			'Healthcare IT',
			'SQL',
			'Analytics',
			'HIPAA Compliance'
		],
		title: 'Adjust UI/UX Design in SaaS Platform Integration',
		description:
			'The focus is on UI/UX Design within the SaaS Platform Integration. Once completed, proceed to SQL to enhance overall outcomes. Focus also on Analytics to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 6,
		assignedTo: 8
	},
	{
		id: 890,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SBEP0VOANQ'
		},
		startDate: '03/01/2024',
		endDate: '05/17/2024',
		skills: [
			'Data Encryption',
			'Client Communication',
			'System Architecture',
			'Healthcare IT',
			'SQL',
			'Report Generation',
			'Performance Tuning'
		],
		title: 'Digital Distribution Network Needs Healthcare IT Fixed',
		description:
			'Your main task will be Data Encryption within the Digital Distribution Network. From there, move on to SQL to enhance overall outcomes. Focus also on Healthcare IT to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 10,
		assignedTo: 94
	},
	{
		id: 891,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Lead Tracking Software',
			projectCode: 'UAT',
			supportCase: 'SBWDC0GXPE'
		},
		startDate: '11/25/2023',
		endDate: '04/27/2024',
		skills: [
			'Analytics',
			'HIPAA Compliance',
			'Network Security',
			'Payment Solutions',
			'Report Generation'
		],
		title: 'Adjust Payment Solutions in Lead Tracking Software',
		description:
			'We aim to Report Generation within the Lead Tracking Software. From there, move on to HIPAA Compliance to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 39,
		assignedTo: 83
	},
	{
		id: 892,
		role: 'Director',
		team: 1,
		status: 'Sign-off',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBGDBJEKHC'
		},
		startDate: '05/14/2023',
		endDate: '05/06/2024',
		skills: [
			'Data Visualization',
			'API Development',
			'Audit Trail Management',
			'Inventory Database',
			'SQL',
			'Business Intelligence',
			'Network Security'
		],
		title: 'Fix Business Intelligence in Sales Dashboard',
		description:
			'Your main task will be Network Security within the Sales Dashboard. Your next steps should include Audit Trail Management to enhance overall outcomes. Focus also on API Development to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 73,
		assignedTo: 39
	},
	{
		id: 893,
		role: 'Associate',
		team: 2,
		status: 'Cancelled',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'Development',
			supportCase: 'SB5QY2SIFQ'
		},
		startDate: '10/26/2023',
		endDate: '05/29/2024',
		skills: [
			'Performance Tuning',
			'Backend Development',
			'Data Analysis',
			'Database Management',
			'HIPAA Compliance'
		],
		title: 'Fix Data Analysis in API Backend Integration',
		description:
			'This task involves Performance Tuning within the API Backend Integration. Your next steps should include Backend Development to enhance overall outcomes. Focus also on Data Analysis to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 7,
		assignedTo: 9
	},
	{
		id: 894,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 7,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Development',
			supportCase: 'SB2PRQARUE'
		},
		startDate: '01/09/2024',
		endDate: '05/10/2024',
		skills: [
			'C#',
			'Analytics',
			'Operational Efficiency',
			'Healthcare IT',
			'Inventory Database',
			'Supply Chain Management',
			'API Development'
		],
		title: 'Support Healthcare IT in Compliance Tracking System',
		description:
			'This task involves Operational Efficiency within the Compliance Tracking System. From there, move on to Analytics to enhance overall outcomes. Focus also on Analytics to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 8,
		assignedTo: null
	},
	{
		id: 895,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Development',
			supportCase: 'SBMAGACBP1'
		},
		startDate: '04/26/2024',
		endDate: '05/23/2024',
		skills: [
			'System Architecture',
			'Data Analysis',
			'Report Generation',
			'Analytics',
			'Healthcare IT'
		],
		title: 'Resolve Analytics in Mobile UX/UI Upgrade',
		description:
			'This task involves Report Generation within the Mobile UX/UI Upgrade. Following initial steps, you should Data Analysis to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 63,
		assignedTo: 90
	},
	{
		id: 896,
		role: 'Senior Manager',
		team: 2,
		status: 'Completed',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Support',
			supportCase: 'SBRP0K706S'
		},
		startDate: '02/24/2024',
		endDate: '05/01/2024',
		skills: [
			'Data Analysis',
			'Database Management',
			'E-commerce Security',
			'Performance Tuning',
			'C#'
		],
		title: 'Product Customization Tool Needs C# Fixed',
		description:
			'Your main task will be E-commerce Security within the Product Customization Tool. Your next steps should include E-commerce Security to enhance overall outcomes. Focus also on Performance Tuning to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 65,
		assignedTo: null
	},
	{
		id: 897,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Order Fulfillment Automation',
			projectCode: 'Development',
			supportCase: 'SBVN3G7FWU'
		},
		startDate: '07/03/2023',
		endDate: '05/29/2024',
		skills: [
			'UI/UX Design',
			'Operational Efficiency',
			'User Testing',
			'Analytics',
			'Client Communication'
		],
		title: 'Order Fulfillment Automation Needs Operational Efficiency Fixed',
		description:
			'The focus is on Operational Efficiency within the Order Fulfillment Automation. Following initial steps, you should UI/UX Design to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 14,
		assignedTo: 105
	},
	{
		id: 898,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Online Marketing Strategy',
			projectCode: 'Development',
			supportCase: 'SB70B6BCQH'
		},
		startDate: '01/15/2024',
		endDate: '04/28/2024',
		skills: ['Performance Tuning', 'Operational Efficiency', 'Data Analysis'],
		title: 'Help Operational Efficiency in Online Marketing Strategy',
		description:
			'This task involves Data Analysis within the Online Marketing Strategy. Your next steps should include Data Analysis to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 18,
		assignedTo: 108
	},
	{
		id: 899,
		role: 'Associate',
		team: 1,
		status: 'Completed',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SB1TTKEP51'
		},
		startDate: '04/04/2023',
		endDate: '05/19/2024',
		skills: [
			'Operational Efficiency',
			'Data Encryption',
			'Healthcare IT',
			'Inventory Database',
			'Network Security'
		],
		title: 'Help Healthcare IT in Product Design Simulation',
		description:
			'Your main task will be Network Security within the Product Design Simulation. Your next steps should include Healthcare IT to enhance overall outcomes. Focus also on Operational Efficiency to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 9,
		assignedTo: null
	},
	{
		id: 900,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Development',
			supportCase: 'SBMZRXKXQJ'
		},
		startDate: '06/21/2023',
		endDate: '05/05/2024',
		skills: ['API Development', 'Client Communication', 'HIPAA Compliance'],
		title: 'Implement Client Communication in Market Analysis Tool',
		description:
			'This task involves API Development within the Market Analysis Tool. Subsequently, your efforts will involve API Development to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 13,
		assignedTo: 95
	},
	{
		id: 901,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SB2V4NJF06'
		},
		startDate: '09/12/2023',
		endDate: '05/17/2024',
		skills: [
			'Inventory Database',
			'HIPAA Compliance',
			'Database Management',
			'Regulatory Compliance',
			'Report Generation',
			'E-commerce Security'
		],
		title: 'Optimize Inventory Database in Retail Management Suite',
		description:
			'The focus is on Database Management within the Retail Management Suite. Once completed, proceed to Inventory Database to enhance overall outcomes. Focus also on Report Generation to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 16,
		assignedTo: 97
	},
	{
		id: 902,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 12,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Support',
			supportCase: 'SBDRVVR07U'
		},
		startDate: '04/14/2023',
		endDate: '04/30/2024',
		skills: [
			'E-commerce Security',
			'Cloud Services',
			'Operational Efficiency',
			'Client Communication',
			'Network Security',
			'System Architecture',
			'Data Encryption'
		],
		title: 'Support Client Communication in Database Optimization',
		description:
			'You will begin by Data Encryption within the Database Optimization. Once completed, proceed to E-commerce Security to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 11,
		assignedTo: 12
	},
	{
		id: 903,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Customer Engagement Platform',
			projectCode: 'Support',
			supportCase: 'SBG1GAWKIT'
		},
		startDate: '06/06/2023',
		endDate: '05/19/2024',
		skills: ['Report Generation', 'Business Intelligence', 'Analytics'],
		title: 'Adjust Report Generation in Customer Engagement Platform',
		description:
			'The focus is on Report Generation within the Customer Engagement Platform. Once completed, proceed to Analytics to enhance overall outcomes. Focus also on Business Intelligence to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 23,
		assignedTo: 109
	},
	{
		id: 904,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Development',
			supportCase: 'SB4LJZSEJU'
		},
		startDate: '12/05/2023',
		endDate: '05/22/2024',
		skills: ['Audit Trail Management', 'Data Encryption', 'Payment Solutions'],
		title: 'Create Audit Trail Management in Mobile UX/UI Upgrade',
		description:
			'This task involves Data Encryption within the Mobile UX/UI Upgrade. Once completed, proceed to Data Encryption to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 24,
		assignedTo: 98
	},
	{
		id: 905,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Testing',
			supportCase: 'SBV7BKM0J8'
		},
		startDate: '06/28/2023',
		endDate: '05/21/2024',
		skills: ['Analytics', 'Regulatory Compliance', 'Healthcare IT'],
		title: 'Create Healthcare IT in Sales Dashboard',
		description:
			'The objective here is Healthcare IT within the Sales Dashboard. Your next steps should include Analytics to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 12,
		assignedTo: 11
	},
	{
		id: 906,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SB7906AUSP'
		},
		startDate: '01/07/2024',
		endDate: '05/19/2024',
		skills: [
			'Supply Chain Management',
			'Business Intelligence',
			'Frontend Development',
			'Backend Development',
			'Report Generation',
			'HIPAA Compliance',
			'Database Management'
		],
		title: 'Create Business Intelligence in Enterprise Resource Planning',
		description:
			'We aim to Frontend Development within the Enterprise Resource Planning. From there, move on to Backend Development to enhance overall outcomes. Focus also on Report Generation to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 15,
		assignedTo: null
	},
	{
		id: 907,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Support',
			supportCase: 'SBQPQD4P4L'
		},
		startDate: '09/20/2023',
		endDate: '05/19/2024',
		skills: [
			'Report Generation',
			'Supply Chain Management',
			'Performance Tuning',
			'E-commerce Security',
			'Operational Efficiency'
		],
		title: 'Cloud Data Solutions Needs E-commerce Security Fixed',
		description:
			'The objective here is Performance Tuning within the Cloud Data Solutions. From there, move on to Report Generation to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 30,
		assignedTo: 110
	},
	{
		id: 908,
		role: 'Supervisor',
		team: 1,
		status: 'Completed',
		hours: 1,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SB74YVODA0'
		},
		startDate: '01/26/2024',
		endDate: '05/06/2024',
		skills: ['Client Communication', 'Report Generation', 'Data Analysis'],
		title: 'Optimize Report Generation in Web Performance Monitoring',
		description:
			'The objective here is Data Analysis within the Web Performance Monitoring. Once completed, proceed to Report Generation to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 31,
		assignedTo: null
	},
	{
		id: 909,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Testing',
			supportCase: 'SBKBFCYV36'
		},
		startDate: '05/06/2023',
		endDate: '05/08/2024',
		skills: [
			'Report Generation',
			'System Architecture',
			'SQL',
			'C#',
			'API Development',
			'Healthcare IT',
			'Regulatory Compliance'
		],
		title: 'Help SQL in Customer Segmentation Analysis',
		description:
			'We aim to Report Generation within the Customer Segmentation Analysis. Once completed, proceed to Healthcare IT to enhance overall outcomes. Focus also on System Architecture to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 19,
		assignedTo: 15
	},
	{
		id: 910,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Support',
			supportCase: 'SB36514WNC'
		},
		startDate: '05/15/2023',
		endDate: '05/04/2024',
		skills: [
			'Operational Efficiency',
			'Data Analysis',
			'Data Visualization',
			'Healthcare IT',
			'Analytics',
			'Client Communication'
		],
		title: 'Fix Data Analysis in Full Stack Web Development',
		description:
			'The objective here is Data Analysis within the Full Stack Web Development. From there, move on to Data Analysis to enhance overall outcomes. Focus also on Healthcare IT to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 20,
		assignedTo: 19
	},
	{
		id: 911,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Testing',
			supportCase: 'SBJYY4DB9J'
		},
		startDate: '08/05/2023',
		endDate: '05/11/2024',
		skills: ['Data Analysis', 'Regulatory Compliance', 'Payment Solutions'],
		title: 'Building Maintenance App Needs Data Analysis Fixed',
		description:
			'The focus is on Data Analysis within the Building Maintenance App. Subsequently, your efforts will involve Payment Solutions to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 26,
		assignedTo: 99
	},
	{
		id: 912,
		role: 'Associate',
		team: 1,
		status: 'Cancelled',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Development',
			supportCase: 'SB42J5I7HF'
		},
		startDate: '01/03/2024',
		endDate: '05/25/2024',
		skills: [
			'Inventory Database',
			'Healthcare IT',
			'API Development',
			'Operational Efficiency',
			'C#'
		],
		title: 'Web Application Security Needs Inventory Database Fixed',
		description:
			'This task involves Operational Efficiency within the Web Application Security. Following initial steps, you should Inventory Database to enhance overall outcomes. Focus also on Inventory Database to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 21,
		assignedTo: 20
	},
	{
		id: 913,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'UAT',
			supportCase: 'SBPR3O62J8'
		},
		startDate: '10/10/2023',
		endDate: '05/26/2024',
		skills: ['System Architecture', 'Client Communication', 'Healthcare IT', 'JavaScript'],
		title: 'Insurance Claim Automation Needs System Architecture Fixed',
		description:
			'Your main task will be JavaScript within the Insurance Claim Automation. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 22,
		assignedTo: 21
	},
	{
		id: 914,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Testing',
			supportCase: 'SBS1FEYS35'
		},
		startDate: '09/01/2023',
		endDate: '05/20/2024',
		skills: [
			'UI/UX Design',
			'Payment Solutions',
			'E-commerce Security',
			'Frontend Development',
			'Backend Development'
		],
		title: 'Resolve Backend Development in Client Reporting System',
		description:
			'The objective here is Frontend Development within the Client Reporting System. Once completed, proceed to Backend Development to enhance overall outcomes. Focus also on UI/UX Design to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 34,
		assignedTo: 2
	},
	{
		id: 915,
		role: 'Manager',
		team: 1,
		status: 'Cancelled',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Media Storage Solutions',
			projectCode: 'Support',
			supportCase: 'SBOUB96S8F'
		},
		startDate: '08/21/2023',
		endDate: '05/29/2024',
		skills: [
			'Cloud Services',
			'Network Security',
			'Inventory Database',
			'API Development',
			'Data Encryption',
			'Analytics'
		],
		title: 'Resolve Inventory Database in Media Storage Solutions',
		description:
			'You will begin by Data Encryption within the Media Storage Solutions. From there, move on to Analytics to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 36,
		assignedTo: 74
	},
	{
		id: 916,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Support',
			supportCase: 'SB2J12NALP'
		},
		startDate: '09/07/2023',
		endDate: '05/19/2024',
		skills: [
			'Business Intelligence',
			'Healthcare IT',
			'Operational Efficiency',
			'System Architecture'
		],
		title: 'Implement Healthcare IT in SaaS Platform Integration',
		description:
			'This task involves Healthcare IT within the SaaS Platform Integration. Following initial steps, you should System Architecture to enhance overall outcomes. Focus also on Healthcare IT to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 27,
		assignedTo: 22
	},
	{
		id: 917,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Internal Communication Tool',
			projectCode: 'Support',
			supportCase: 'SBXEEL49WC'
		},
		startDate: '04/22/2023',
		endDate: '05/17/2024',
		skills: [
			'Client Communication',
			'Analytics',
			'Payment Solutions',
			'Performance Tuning',
			'Operational Efficiency',
			'Regulatory Compliance'
		],
		title: 'Internal Communication Tool Needs Payment Solutions Fixed',
		description:
			'This task involves Client Communication within the Internal Communication Tool. Once completed, proceed to Analytics to enhance overall outcomes. Focus also on Payment Solutions to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 37,
		assignedTo: 4
	},
	{
		id: 918,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SB445O1UCZ'
		},
		startDate: '04/19/2024',
		endDate: '04/27/2024',
		skills: [
			'Client Communication',
			'Operational Efficiency',
			'Python',
			'Business Intelligence',
			'Regulatory Compliance',
			'User Testing',
			'Payment Solutions'
		],
		title: 'Project Cost Tracking Needs User Testing Fixed',
		description:
			'The objective here is User Testing within the Project Cost Tracking. Your next steps should include Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 42,
		assignedTo: null
	},
	{
		id: 919,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SB1XTACWVG'
		},
		startDate: '03/31/2024',
		endDate: '04/29/2024',
		skills: ['Performance Tuning', 'Data Visualization', 'Healthcare IT', 'E-commerce Security'],
		title: 'Resolve Data Visualization in Sales Dashboard',
		description:
			'The objective here is Data Visualization within the Sales Dashboard. Subsequently, your efforts will involve Healthcare IT to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 29,
		assignedTo: 27
	},
	{
		id: 920,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Database Optimization',
			projectCode: 'Development',
			supportCase: 'SBZRQKJ6FY'
		},
		startDate: '11/17/2023',
		endDate: '05/11/2024',
		skills: [
			'HIPAA Compliance',
			'Inventory Database',
			'Backend Development',
			'Operational Efficiency'
		],
		title: 'Support Inventory Database in Database Optimization',
		description:
			'The focus is on HIPAA Compliance within the Database Optimization. Your next steps should include Backend Development to enhance overall outcomes. Focus also on Backend Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 43,
		assignedTo: 13
	},
	{
		id: 921,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'UAT',
			supportCase: 'SBGG9ALS2Y'
		},
		startDate: '01/26/2024',
		endDate: '05/03/2024',
		skills: ['SQL', 'Performance Tuning', 'Supply Chain Management', 'System Architecture'],
		title: 'Help Supply Chain Management in Branding Portal',
		description:
			'This task involves Performance Tuning within the Branding Portal. Once completed, proceed to Supply Chain Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 32,
		assignedTo: 29
	},
	{
		id: 922,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Payment Gateway Integration',
			projectCode: 'Support',
			supportCase: 'SBKFIJIIUD'
		},
		startDate: '02/12/2024',
		endDate: '05/29/2024',
		skills: [
			'Performance Tuning',
			'Data Analysis',
			'Audit Trail Management',
			'Business Intelligence',
			'Cloud Services',
			'System Architecture'
		],
		title: 'Payment Gateway Integration Needs Business Intelligence Fixed',
		description:
			'Your main task will be Data Analysis within the Payment Gateway Integration. From there, move on to Performance Tuning to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 33,
		assignedTo: 32
	},
	{
		id: 923,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Support',
			supportCase: 'SBWQXTWWZX'
		},
		startDate: '01/02/2024',
		endDate: '05/14/2024',
		skills: [
			'Network Security',
			'System Architecture',
			'Client Communication',
			'Operational Efficiency',
			'C#',
			'Data Visualization'
		],
		title: 'Create Operational Efficiency in Real-Time Data Analysis',
		description:
			'The focus is on Operational Efficiency within the Real-Time Data Analysis. Once completed, proceed to Data Visualization to enhance overall outcomes. Focus also on Client Communication to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 35,
		assignedTo: 33
	},
	{
		id: 924,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Cloud Data Solutions',
			projectCode: 'Development',
			supportCase: 'SBLFDKZNUD'
		},
		startDate: '02/15/2024',
		endDate: '05/01/2024',
		skills: ['HIPAA Compliance', 'Database Management', 'Client Communication'],
		title: 'Optimize Client Communication in Cloud Data Solutions',
		description:
			'This task involves HIPAA Compliance within the Cloud Data Solutions. Subsequently, your efforts will involve HIPAA Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 38,
		assignedTo: 35
	},
	{
		id: 925,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'UAT',
			supportCase: 'SBAVZLBTT3'
		},
		startDate: '01/14/2024',
		endDate: '05/09/2024',
		skills: ['System Architecture', 'Data Encryption', 'Network Security', 'Python'],
		title: 'Create Data Encryption in Mobile Application Framework',
		description:
			'The objective here is Data Encryption within the Mobile Application Framework. Following initial steps, you should System Architecture to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 44,
		assignedTo: 16
	},
	{
		id: 926,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 2,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SB1R4YA365'
		},
		startDate: '12/10/2023',
		endDate: '05/29/2024',
		skills: ['Data Analysis', 'SQL', 'Inventory Database'],
		title: 'Support Inventory Database in Customer Data Platform',
		description:
			'The objective here is Inventory Database within the Customer Data Platform. Once completed, proceed to Inventory Database to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 40,
		assignedTo: 38
	},
	{
		id: 927,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Project Cost Tracking',
			projectCode: 'Development',
			supportCase: 'SBPWZV47JB'
		},
		startDate: '11/11/2023',
		endDate: '05/16/2024',
		skills: [
			'Data Analysis',
			'Performance Tuning',
			'SQL',
			'E-commerce Security',
			'Business Intelligence'
		],
		title: 'Create SQL in Project Cost Tracking',
		description:
			'Your main task will be Data Analysis within the Project Cost Tracking. Once completed, proceed to SQL to enhance overall outcomes. Focus also on Data Analysis to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 41,
		assignedTo: 40
	},
	{
		id: 928,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'UAT',
			supportCase: 'SBUMIWOS2G'
		},
		startDate: '08/29/2023',
		endDate: '05/28/2024',
		skills: ['Database Management', 'Operational Efficiency', 'Audit Trail Management'],
		title: 'Fix Database Management in Product Customization Tool',
		description:
			'You will begin by Operational Efficiency within the Product Customization Tool. From there, move on to Operational Efficiency to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 45,
		assignedTo: 41
	},
	{
		id: 929,
		role: 'Supervisor',
		team: 2,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBDLESFIC3'
		},
		startDate: '01/09/2024',
		endDate: '05/25/2024',
		skills: [
			'Python',
			'Business Intelligence',
			'Analytics',
			'E-commerce Security',
			'Client Communication',
			'JavaScript'
		],
		title: 'Create JavaScript in Client Onboarding Process',
		description:
			'The focus is on Analytics within the Client Onboarding Process. Once completed, proceed to E-commerce Security to enhance overall outcomes. Focus also on Business Intelligence to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 48,
		assignedTo: 1
	},
	{
		id: 930,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Support',
			supportCase: 'SBJTN3NPG0'
		},
		startDate: '03/24/2024',
		endDate: '05/16/2024',
		skills: [
			'Analytics',
			'Supply Chain Management',
			'Business Intelligence',
			'Report Generation',
			'Python',
			'Healthcare IT'
		],
		title: 'Optimize Python in Front-end Development',
		description:
			'You will begin by Report Generation within the Front-end Development. Your next steps should include Analytics to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 46,
		assignedTo: 47
	},
	{
		id: 931,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SBALJZ6CMO'
		},
		startDate: '08/09/2023',
		endDate: '05/06/2024',
		skills: [
			'Python',
			'Analytics',
			'Inventory Database',
			'Payment Solutions',
			'Frontend Development'
		],
		title: 'Digital Catalogue Needs Analytics Fixed',
		description:
			'The focus is on Python within the Digital Catalogue. Following initial steps, you should Python to enhance overall outcomes. Focus also on Python to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 49,
		assignedTo: 24
	},
	{
		id: 932,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Web Performance Monitoring',
			projectCode: 'Development',
			supportCase: 'SBDBATB1ZU'
		},
		startDate: '03/23/2023',
		endDate: '05/21/2024',
		skills: [
			'Data Visualization',
			'SQL',
			'HIPAA Compliance',
			'Inventory Database',
			'Data Analysis',
			'Database Management',
			'Regulatory Compliance'
		],
		title: 'Implement Database Management in Web Performance Monitoring',
		description:
			'The objective here is HIPAA Compliance within the Web Performance Monitoring. Following initial steps, you should HIPAA Compliance to enhance overall outcomes. Focus also on Data Visualization to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 47,
		assignedTo: 46
	},
	{
		id: 933,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 10,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Development',
			supportCase: 'SBDLO8914U'
		},
		startDate: '12/17/2023',
		endDate: '05/20/2024',
		skills: [
			'Healthcare IT',
			'HIPAA Compliance',
			'Data Encryption',
			'Audit Trail Management',
			'E-commerce Security'
		],
		title: 'Tenant Screening Process Needs Data Encryption Fixed',
		description:
			'Your main task will be Healthcare IT within the Tenant Screening Process. Once completed, proceed to Healthcare IT to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 50,
		assignedTo: 51
	},
	{
		id: 934,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 3,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Compliance Tracking System',
			projectCode: 'Support',
			supportCase: 'SBWGA7D6ZF'
		},
		startDate: '12/12/2023',
		endDate: '05/22/2024',
		skills: [
			'Report Generation',
			'Client Communication',
			'Payment Solutions',
			'Audit Trail Management',
			'API Development',
			'Cloud Services'
		],
		title: 'Implement Audit Trail Management in Compliance Tracking System',
		description:
			'Your main task will be Audit Trail Management within the Compliance Tracking System. Once completed, proceed to Payment Solutions to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 52,
		assignedTo: 6
	},
	{
		id: 935,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SBZHSHAB99'
		},
		startDate: '04/18/2023',
		endDate: '05/23/2024',
		skills: [
			'Audit Trail Management',
			'SQL',
			'JavaScript',
			'System Architecture',
			'Supply Chain Management',
			'Performance Tuning'
		],
		title: 'Support Performance Tuning in Client Reporting System',
		description:
			'Your main task will be Performance Tuning within the Client Reporting System. Your next steps should include SQL to enhance overall outcomes. Focus also on System Architecture to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 51,
		assignedTo: 53
	},
	{
		id: 936,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SBA47L2J15'
		},
		startDate: '09/20/2023',
		endDate: '05/13/2024',
		skills: [
			'Payment Solutions',
			'System Architecture',
			'Healthcare IT',
			'Supply Chain Management',
			'Audit Trail Management',
			'Client Communication'
		],
		title: 'Optimize Payment Solutions in Technical Support Portal',
		description:
			'You will begin by Payment Solutions within the Technical Support Portal. Subsequently, your efforts will involve Client Communication to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 53,
		assignedTo: 55
	},
	{
		id: 937,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 11,
		billable: false,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Market Analysis Tool',
			projectCode: 'Support',
			supportCase: 'SBTIVI9PQE'
		},
		startDate: '02/20/2024',
		endDate: '05/28/2024',
		skills: [
			'Healthcare IT',
			'Data Encryption',
			'Client Communication',
			'Audit Trail Management',
			'Inventory Database',
			'API Development'
		],
		title: 'Resolve API Development in Market Analysis Tool',
		description:
			'The objective here is Data Encryption within the Market Analysis Tool. Your next steps should include API Development to enhance overall outcomes. Focus also on API Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 54,
		assignedTo: 56
	},
	{
		id: 938,
		role: 'Senior Associate',
		team: 2,
		status: 'Cancelled',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Development',
			supportCase: 'SBDB2YT48C'
		},
		startDate: '03/18/2024',
		endDate: '05/18/2024',
		skills: [
			'Backend Development',
			'Data Analysis',
			'Client Communication',
			'Frontend Development'
		],
		title: 'Digital Catalogue Needs Data Analysis Fixed',
		description:
			'The objective here is Backend Development within the Digital Catalogue. From there, move on to Client Communication to enhance overall outcomes. Focus also on Backend Development to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 58,
		assignedTo: 26
	},
	{
		id: 939,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SB8FF3T66F'
		},
		startDate: '05/07/2023',
		endDate: '05/08/2024',
		skills: [
			'Supply Chain Management',
			'Data Analysis',
			'JavaScript',
			'Performance Tuning',
			'Report Generation',
			'Business Intelligence',
			'Database Management'
		],
		title: 'Optimize Report Generation in Web Application Security',
		description:
			'The objective here is Supply Chain Management within the Web Application Security. From there, move on to Performance Tuning to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 59,
		assignedTo: 37
	},
	{
		id: 940,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'UAT',
			supportCase: 'SB50IY20A1'
		},
		startDate: '03/28/2024',
		endDate: '05/19/2024',
		skills: [
			'Payment Solutions',
			'Business Intelligence',
			'JavaScript',
			'Database Management',
			'Inventory Database',
			'SQL'
		],
		title: 'Adjust JavaScript in SaaS Platform Integration',
		description:
			'This task involves Payment Solutions within the SaaS Platform Integration. From there, move on to JavaScript to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 55,
		assignedTo: 57
	},
	{
		id: 941,
		role: 'Manager',
		team: 2,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Data Reporting Tools',
			projectCode: 'UAT',
			supportCase: 'SB2XSXYTUW'
		},
		startDate: '07/27/2023',
		endDate: '05/22/2024',
		skills: ['Data Analysis', 'Business Intelligence', 'Audit Trail Management', 'User Testing'],
		title: 'Adjust Data Analysis in Data Reporting Tools',
		description:
			'The objective here is Audit Trail Management within the Data Reporting Tools. Following initial steps, you should Business Intelligence to enhance overall outcomes. Focus also on Data Analysis to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 70,
		assignedTo: 78
	},
	{
		id: 942,
		role: 'Manager',
		team: 1,
		status: 'Completed',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Support',
			supportCase: 'SB4JO6A9JX'
		},
		startDate: '08/16/2023',
		endDate: '05/17/2024',
		skills: [
			'Supply Chain Management',
			'Client Communication',
			'Performance Tuning',
			'API Development',
			'E-commerce Security',
			'Data Encryption',
			'Business Intelligence'
		],
		title: 'Optimize Performance Tuning in Health Records Integration',
		description:
			'The objective here is Performance Tuning within the Health Records Integration. Your next steps should include API Development to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 72,
		assignedTo: null
	},
	{
		id: 943,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SB9PSF4FGZ'
		},
		startDate: '12/21/2023',
		endDate: '05/06/2024',
		skills: [
			'Data Visualization',
			'Database Management',
			'User Testing',
			'JavaScript',
			'Business Intelligence',
			'UI/UX Design'
		],
		title: 'Support JavaScript in Sales Dashboard',
		description:
			'Your main task will be Database Management within the Sales Dashboard. Following initial steps, you should Business Intelligence to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 60,
		assignedTo: 43
	},
	{
		id: 944,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Risk Assessment Software',
			projectCode: 'Testing',
			supportCase: 'SBRG7WC9PT'
		},
		startDate: '06/18/2023',
		endDate: '04/30/2024',
		skills: ['Data Encryption', 'Supply Chain Management', 'SQL'],
		title: 'Create Data Encryption in Risk Assessment Software',
		description:
			'This task involves Supply Chain Management within the Risk Assessment Software. From there, move on to Supply Chain Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 66,
		assignedTo: 10
	},
	{
		id: 945,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Customer Data Platform',
			projectCode: 'Support',
			supportCase: 'SBUNNMI9XL'
		},
		startDate: '12/07/2023',
		endDate: '05/15/2024',
		skills: [
			'Business Intelligence',
			'Performance Tuning',
			'JavaScript',
			'User Testing',
			'Operational Efficiency',
			'Data Analysis'
		],
		title: 'Customer Data Platform Needs Performance Tuning Fixed',
		description:
			'Your main task will be Data Analysis within the Customer Data Platform. Once completed, proceed to Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 56,
		assignedTo: 64
	},
	{
		id: 946,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'DEF Media - Digital Distribution Network',
			projectCode: 'Support',
			supportCase: 'SB92MNSF48'
		},
		startDate: '02/07/2024',
		endDate: '05/05/2024',
		skills: [
			'Database Management',
			'Frontend Development',
			'Audit Trail Management',
			'Report Generation',
			'UI/UX Design',
			'Payment Solutions'
		],
		title: 'Fix Payment Solutions in Digital Distribution Network',
		description:
			'This task involves Report Generation within the Digital Distribution Network. From there, move on to Audit Trail Management to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 61,
		assignedTo: 44
	},
	{
		id: 947,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Project Management',
			supportCase: 'SB9PMN3E54'
		},
		startDate: '03/31/2023',
		endDate: '05/09/2024',
		skills: [
			'Report Generation',
			'Database Management',
			'HIPAA Compliance',
			'Analytics',
			'Business Intelligence'
		],
		title: 'Adjust Analytics in Efficiency Audit Tools',
		description:
			'The focus is on Database Management within the Efficiency Audit Tools. From there, move on to HIPAA Compliance to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 57,
		assignedTo: 69
	},
	{
		id: 948,
		role: 'Manager',
		team: 1,
		status: 'Assigned',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Health Records Integration',
			projectCode: 'Testing',
			supportCase: 'SB5A8K9A6J'
		},
		startDate: '05/04/2023',
		endDate: '05/13/2024',
		skills: [
			'Inventory Database',
			'Business Intelligence',
			'System Architecture',
			'SQL',
			'Supply Chain Management',
			'Operational Efficiency',
			'Data Encryption'
		],
		title: 'Adjust Business Intelligence in Health Records Integration',
		description:
			'We aim to Supply Chain Management within the Health Records Integration. Your next steps should include Business Intelligence to enhance overall outcomes. Focus also on SQL to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 74,
		assignedTo: 102
	},
	{
		id: 949,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Martin & Co. - Content Management System',
			projectCode: 'Development',
			supportCase: 'SB0YTF5C6X'
		},
		startDate: '10/31/2023',
		endDate: '05/16/2024',
		skills: [
			'Payment Solutions',
			'Inventory Database',
			'Analytics',
			'Regulatory Compliance',
			'C#',
			'Client Communication',
			'Report Generation'
		],
		title: 'Optimize Report Generation in Content Management System',
		description:
			'Your main task will be C# within the Content Management System. Your next steps should include Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 62,
		assignedTo: 75
	},
	{
		id: 950,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'DEF Media - Audience Analytics',
			projectCode: 'Discovery',
			supportCase: 'SB805RBEIN'
		},
		startDate: '11/20/2023',
		endDate: '05/15/2024',
		skills: [
			'Data Analysis',
			'Backend Development',
			'Inventory Database',
			'Audit Trail Management',
			'Report Generation',
			'Healthcare IT',
			'Frontend Development'
		],
		title: 'Audience Analytics Needs Healthcare IT Fixed',
		description:
			'The objective here is Report Generation within the Audience Analytics. Once completed, proceed to Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 64,
		assignedTo: 76
	},
	{
		id: 951,
		role: 'Supervisor',
		team: 2,
		status: 'Completed',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Martin & Co. - Social Media Integration',
			projectCode: 'Testing',
			supportCase: 'SBO1J2Y2VA'
		},
		startDate: '06/09/2023',
		endDate: '05/27/2024',
		skills: [
			'User Testing',
			'Regulatory Compliance',
			'Payment Solutions',
			'HIPAA Compliance',
			'Inventory Database'
		],
		title: 'Support Inventory Database in Social Media Integration',
		description:
			'The focus is on Regulatory Compliance within the Social Media Integration. Once completed, proceed to Inventory Database to enhance overall outcomes. Focus also on User Testing to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 67,
		assignedTo: null
	},
	{
		id: 952,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 9,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Digital Catalogue',
			projectCode: 'Support',
			supportCase: 'SB9HBGK9AX'
		},
		startDate: '02/20/2024',
		endDate: '05/01/2024',
		skills: [
			'E-commerce Security',
			'System Architecture',
			'Audit Trail Management',
			'Client Communication',
			'Inventory Database'
		],
		title: 'Resolve Inventory Database in Digital Catalogue',
		description:
			'Your main task will be Inventory Database within the Digital Catalogue. Subsequently, your efforts will involve Audit Trail Management to enhance overall outcomes. Focus also on Inventory Database to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 68,
		assignedTo: 49
	},
	{
		id: 953,
		role: 'Senior Manager',
		team: 2,
		status: 'Complete',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - SaaS Platform Integration',
			projectCode: 'Development',
			supportCase: 'SBXIFCQF8F'
		},
		startDate: '04/05/2024',
		endDate: '04/28/2024',
		skills: [
			'Audit Trail Management',
			'Python',
			'Regulatory Compliance',
			'Payment Solutions',
			'Inventory Database',
			'UI/UX Design'
		],
		title: 'Help Regulatory Compliance in SaaS Platform Integration',
		description:
			'This task involves Payment Solutions within the SaaS Platform Integration. Your next steps should include UI/UX Design to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 83,
		assignedTo: 104
	},
	{
		id: 954,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Allen Industries - Dynamic Pricing Engine',
			projectCode: 'UAT',
			supportCase: 'SB6T0QKANW'
		},
		startDate: '05/27/2023',
		endDate: '05/10/2024',
		skills: [
			'Healthcare IT',
			'Cloud Services',
			'Audit Trail Management',
			'Operational Efficiency',
			'Inventory Database',
			'HIPAA Compliance'
		],
		title: 'Optimize Healthcare IT in Dynamic Pricing Engine',
		description:
			'The objective here is Healthcare IT within the Dynamic Pricing Engine. Following initial steps, you should Operational Efficiency to enhance overall outcomes. Focus also on HIPAA Compliance to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 69,
		assignedTo: 80
	},
	{
		id: 955,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Project Management',
			supportCase: 'SB4PVRCXN4'
		},
		startDate: '05/12/2023',
		endDate: '05/11/2024',
		skills: ['Payment Solutions', 'HIPAA Compliance', 'Client Communication', 'Inventory Database'],
		title: 'Web Application Security Needs Inventory Database Fixed',
		description:
			'You will begin by Payment Solutions within the Web Application Security. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 71,
		assignedTo: 50
	},
	{
		id: 956,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 20,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Support',
			supportCase: 'SBQIQ4IFSA'
		},
		startDate: '07/20/2023',
		endDate: '05/01/2024',
		skills: [
			'C#',
			'Backend Development',
			'Healthcare IT',
			'Database Management',
			'Python',
			'Payment Solutions',
			'Operational Efficiency'
		],
		title: 'Support Database Management in Supply Chain Management System',
		description:
			'The objective here is Database Management within the Supply Chain Management System. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Focus also on Python to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 75,
		assignedTo: 82
	},
	{
		id: 957,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'Development',
			supportCase: 'SBGT17AOYF'
		},
		startDate: '06/26/2023',
		endDate: '05/04/2024',
		skills: [
			'E-commerce Security',
			'Operational Efficiency',
			'Performance Tuning',
			'SQL',
			'Client Communication',
			'Data Encryption',
			'Inventory Database'
		],
		title: 'Fix Data Encryption in Customer Segmentation Analysis',
		description:
			'The objective here is Data Encryption within the Customer Segmentation Analysis. Following initial steps, you should Inventory Database to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 76,
		assignedTo: 91
	},
	{
		id: 958,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 2,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'BCD Technologies - CRM Integration',
			projectCode: 'Development',
			supportCase: 'SB4M7587C6'
		},
		startDate: '03/08/2024',
		endDate: '05/29/2024',
		skills: [
			'HIPAA Compliance',
			'Business Intelligence',
			'Supply Chain Management',
			'Data Encryption'
		],
		title: 'CRM Integration Needs Data Encryption Fixed',
		description:
			'We aim to HIPAA Compliance within the CRM Integration. Once completed, proceed to Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 77,
		assignedTo: 93
	},
	{
		id: 959,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Allen Industries - Dynamic Pricing Engine',
			projectCode: 'Support',
			supportCase: 'SBDZQP1Q73'
		},
		startDate: '10/19/2023',
		endDate: '05/23/2024',
		skills: [
			'Operational Efficiency',
			'Data Visualization',
			'Audit Trail Management',
			'Network Security',
			'Data Encryption'
		],
		title: 'Dynamic Pricing Engine Needs Audit Trail Management Fixed',
		description:
			'We aim to Network Security within the Dynamic Pricing Engine. Subsequently, your efforts will involve Operational Efficiency to enhance overall outcomes. Focus also on Data Visualization to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 78,
		assignedTo: 100
	},
	{
		id: 960,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 4,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Smith Enterprises - Web Application Security',
			projectCode: 'Support',
			supportCase: 'SBQ4YCCU6R'
		},
		startDate: '11/26/2023',
		endDate: '05/08/2024',
		skills: [
			'Analytics',
			'Backend Development',
			'Report Generation',
			'HIPAA Compliance',
			'UI/UX Design'
		],
		title: 'Fix UI/UX Design in Web Application Security',
		description:
			'This task involves Analytics within the Web Application Security. Subsequently, your efforts will involve Report Generation to enhance overall outcomes. Focus also on Analytics to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 90,
		assignedTo: 14
	},
	{
		id: 961,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - API Backend Integration',
			projectCode: 'UAT',
			supportCase: 'SBC09657LN'
		},
		startDate: '02/26/2024',
		endDate: '04/27/2024',
		skills: [
			'Payment Solutions',
			'Operational Efficiency',
			'SQL',
			'Data Visualization',
			'Analytics'
		],
		title: 'API Backend Integration Needs Analytics Fixed',
		description:
			'This task involves SQL within the API Backend Integration. Your next steps should include SQL to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 79,
		assignedTo: 106
	},
	{
		id: 962,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Davis Financial - Financial Forecasting Tool',
			projectCode: 'UAT',
			supportCase: 'SBWAU0QV4G'
		},
		startDate: '04/02/2023',
		endDate: '05/01/2024',
		skills: [
			'API Development',
			'Data Analysis',
			'Python',
			'Data Encryption',
			'Data Visualization',
			'Business Intelligence'
		],
		title: 'Financial Forecasting Tool Needs Python Fixed',
		description:
			'Your main task will be API Development within the Financial Forecasting Tool. Your next steps should include Data Visualization to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 81,
		assignedTo: 59
	},
	{
		id: 963,
		role: 'Associate',
		team: 2,
		status: 'Sign-off',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Development',
			supportCase: 'SBOMLYHG8Z'
		},
		startDate: '03/09/2024',
		endDate: '04/27/2024',
		skills: ['Client Communication', 'User Testing', 'Regulatory Compliance'],
		title: 'Implement Client Communication in Product Design Simulation',
		description:
			'You will begin by Client Communication within the Product Design Simulation. Your next steps should include Regulatory Compliance to enhance overall outcomes. Focus also on Client Communication to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 80,
		assignedTo: 107
	},
	{
		id: 964,
		role: 'Manager',
		team: 2,
		status: 'Complete',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Testing',
			supportCase: 'SBAWCIPBU3'
		},
		startDate: '04/15/2023',
		endDate: '05/01/2024',
		skills: [
			'Performance Tuning',
			'Backend Development',
			'User Testing',
			'Audit Trail Management',
			'Database Management'
		],
		title: 'Building Maintenance App Needs Audit Trail Management Fixed',
		description:
			'You will begin by User Testing within the Building Maintenance App. Once completed, proceed to Audit Trail Management to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 102,
		assignedTo: 18
	},
	{
		id: 965,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 11,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'IJK Properties - Tenant Screening Process',
			projectCode: 'Support',
			supportCase: 'SBLDU9DL8L'
		},
		startDate: '10/18/2023',
		endDate: '05/29/2024',
		skills: [
			'Analytics',
			'Audit Trail Management',
			'Client Communication',
			'Network Security',
			'Report Generation',
			'Healthcare IT',
			'Payment Solutions'
		],
		title: 'Tenant Screening Process Needs Analytics Fixed',
		description:
			'This task involves Payment Solutions within the Tenant Screening Process. Subsequently, your efforts will involve Network Security to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 82,
		assignedTo: 3
	},
	{
		id: 966,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Thompson Group - Sales Dashboard',
			projectCode: 'Development',
			supportCase: 'SBTKROA76U'
		},
		startDate: '11/28/2023',
		endDate: '05/12/2024',
		skills: [
			'HIPAA Compliance',
			'Supply Chain Management',
			'Payment Solutions',
			'Client Communication',
			'Healthcare IT'
		],
		title: 'Help Healthcare IT in Sales Dashboard',
		description:
			'We aim to Supply Chain Management within the Sales Dashboard. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 84,
		assignedTo: 31
	},
	{
		id: 967,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Client Onboarding Process',
			projectCode: 'Development',
			supportCase: 'SBZWTWM9FN'
		},
		startDate: '10/10/2023',
		endDate: '04/30/2024',
		skills: [
			'Data Analysis',
			'Frontend Development',
			'Regulatory Compliance',
			'Database Management',
			'E-commerce Security',
			'SQL',
			'Healthcare IT'
		],
		title: 'Client Onboarding Process Needs E-commerce Security Fixed',
		description:
			'Your main task will be Data Analysis within the Client Onboarding Process. Following initial steps, you should SQL to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 85,
		assignedTo: 5
	},
	{
		id: 968,
		role: 'Senior Associate',
		team: 1,
		status: 'Assigned',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Project Management',
			supportCase: 'SBXDPJ5NQJ'
		},
		startDate: '05/30/2023',
		endDate: '05/04/2024',
		skills: ['System Architecture', 'Performance Tuning', 'SQL', 'HIPAA Compliance'],
		title: 'Resolve System Architecture in Mobile Application Framework',
		description:
			'Your main task will be Performance Tuning within the Mobile Application Framework. From there, move on to Performance Tuning to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 86,
		assignedTo: 61
	},
	{
		id: 969,
		role: 'Senior Manager',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'Development',
			supportCase: 'SBGJERN8FV'
		},
		startDate: '12/11/2023',
		endDate: '04/29/2024',
		skills: [
			'Regulatory Compliance',
			'Inventory Database',
			'Network Security',
			'Business Intelligence',
			'Data Visualization'
		],
		title: 'Adjust Inventory Database in Technical Support Portal',
		description:
			'The objective here is Inventory Database within the Technical Support Portal. Your next steps should include Network Security to enhance overall outcomes. Focus also on Data Visualization to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 103,
		assignedTo: 17
	},
	{
		id: 970,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 6,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Development',
			supportCase: 'SBRW9DMVSA'
		},
		startDate: '02/11/2024',
		endDate: '05/11/2024',
		skills: ['Performance Tuning', 'Analytics', 'UI/UX Design', 'Operational Efficiency'],
		title: 'Create UI/UX Design in Mobile UX/UI Upgrade',
		description:
			'Your main task will be Performance Tuning within the Mobile UX/UI Upgrade. Your next steps should include Operational Efficiency to enhance overall outcomes. Focus also on Performance Tuning to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 87,
		assignedTo: 7
	},
	{
		id: 971,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Brown Design Group - Product Design Simulation',
			projectCode: 'Support',
			supportCase: 'SBD0ZTMIC0'
		},
		startDate: '11/30/2023',
		endDate: '05/21/2024',
		skills: [
			'Report Generation',
			'Operational Efficiency',
			'User Testing',
			'Healthcare IT',
			'Performance Tuning',
			'Frontend Development',
			'Business Intelligence'
		],
		title: 'Help Operational Efficiency in Product Design Simulation',
		description:
			'This task involves Report Generation within the Product Design Simulation. From there, move on to Frontend Development to enhance overall outcomes. Focus also on Frontend Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 88,
		assignedTo: null
	},
	{
		id: 972,
		role: 'Supervisor',
		team: 2,
		status: 'Assigned',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Testing',
			supportCase: 'SBY7P48QOX'
		},
		startDate: '05/14/2023',
		endDate: '05/22/2024',
		skills: [
			'Client Communication',
			'Operational Efficiency',
			'Performance Tuning',
			'User Testing',
			'Data Visualization'
		],
		title: 'Optimize Data Visualization in Telemedicine Platform',
		description:
			'The focus is on Performance Tuning within the Telemedicine Platform. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Focus also on Performance Tuning to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 89,
		assignedTo: 42
	},
	{
		id: 973,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Product Customization Tool',
			projectCode: 'Support',
			supportCase: 'SBE3CGBF6M'
		},
		startDate: '12/06/2023',
		endDate: '05/26/2024',
		skills: [
			'Inventory Database',
			'Data Visualization',
			'Analytics',
			'Business Intelligence',
			'Operational Efficiency'
		],
		title: 'Support Data Visualization in Product Customization Tool',
		description:
			'We aim to Operational Efficiency within the Product Customization Tool. Your next steps should include Business Intelligence to enhance overall outcomes. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 91,
		assignedTo: 8
	},
	{
		id: 974,
		role: 'Associate',
		team: 2,
		status: 'Assigned',
		hours: 3,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Visualization of Data Insights',
			projectCode: 'Development',
			supportCase: 'SBM1ZM9TD5'
		},
		startDate: '04/01/2024',
		endDate: '05/13/2024',
		skills: [
			'Supply Chain Management',
			'Operational Efficiency',
			'Backend Development',
			'Business Intelligence'
		],
		title: 'Visualization of Data Insights Needs Business Intelligence Fixed',
		description:
			'The objective here is Supply Chain Management within the Visualization of Data Insights. Subsequently, your efforts will involve Backend Development to enhance overall outcomes. Focus also on Backend Development to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 92,
		assignedTo: 9
	},
	{
		id: 975,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'HIJ Services - Technical Support Portal',
			projectCode: 'UAT',
			supportCase: 'SBJ7EP4Z1R'
		},
		startDate: '01/06/2024',
		endDate: '05/14/2024',
		skills: [
			'Network Security',
			'Data Encryption',
			'Client Communication',
			'Cloud Services',
			'System Architecture',
			'Performance Tuning',
			'Inventory Database'
		],
		title: 'Technical Support Portal Needs Cloud Services Fixed',
		description:
			'You will begin by Network Security within the Technical Support Portal. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Focus also on Network Security to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 93,
		assignedTo: 11
	},
	{
		id: 976,
		role: 'Associate',
		team: 2,
		status: 'Complete',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Support',
			supportCase: 'SB5LHZNKLS'
		},
		startDate: '04/21/2024',
		endDate: '05/16/2024',
		skills: ['Report Generation', 'Frontend Development', 'Regulatory Compliance'],
		title: 'Client Reporting System Needs Report Generation Fixed',
		description:
			'Your main task will be Frontend Development within the Client Reporting System. From there, move on to Regulatory Compliance to enhance overall outcomes. Focus also on Regulatory Compliance to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 94,
		assignedTo: 12
	},
	{
		id: 977,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'IJK Properties - Building Maintenance App',
			projectCode: 'Project Management',
			supportCase: 'SBR2M7UR41'
		},
		startDate: '08/01/2023',
		endDate: '05/06/2024',
		skills: ['Data Analysis', 'Report Generation', 'Analytics', 'HIPAA Compliance'],
		title: 'Support HIPAA Compliance in Building Maintenance App',
		description:
			'The objective here is Analytics within the Building Maintenance App. Following initial steps, you should Analytics to enhance overall outcomes. Focus also on Data Analysis to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 95,
		assignedTo: 15
	},
	{
		id: 978,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 10,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Peterson Analytics - Predictive Analytics Modeling',
			projectCode: 'Development',
			supportCase: 'SB83QY45NZ'
		},
		startDate: '12/10/2023',
		endDate: '05/26/2024',
		skills: [
			'Data Analysis',
			'Data Encryption',
			'Analytics',
			'Regulatory Compliance',
			'E-commerce Security'
		],
		title: 'Fix Analytics in Predictive Analytics Modeling',
		description:
			'Your main task will be Analytics within the Predictive Analytics Modeling. Subsequently, your efforts will involve Data Encryption to enhance overall outcomes. Focus also on Data Encryption to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 96,
		assignedTo: 19
	},
	{
		id: 979,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Support',
			supportCase: 'SB0R4AIWAC'
		},
		startDate: '04/15/2023',
		endDate: '05/16/2024',
		skills: ['Data Analysis', 'Analytics', 'SQL', 'Operational Efficiency'],
		title: 'Fix Analytics in Mobile Application Framework',
		description:
			'You will begin by Data Analysis within the Mobile Application Framework. Once completed, proceed to Analytics to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 97,
		assignedTo: 62
	},
	{
		id: 980,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 5,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Logistics Tracking Interface',
			projectCode: 'Support',
			supportCase: 'SBWG5EYEPU'
		},
		startDate: '05/21/2023',
		endDate: '05/10/2024',
		skills: ['Data Analysis', 'JavaScript', 'Data Encryption', 'Payment Solutions'],
		title: 'Logistics Tracking Interface Needs Data Encryption Fixed',
		description:
			'You will begin by Data Analysis within the Logistics Tracking Interface. From there, move on to Payment Solutions to enhance overall outcomes. Focus also on Payment Solutions to add value. Finalize the project by ensuring all functionalities are integrated smoothly and efficiently.',
		postedBy: 98,
		assignedTo: 20
	},
	{
		id: 981,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 7,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Development',
			supportCase: 'SBH8O8QSR7'
		},
		startDate: '10/25/2023',
		endDate: '05/28/2024',
		skills: ['Inventory Database', 'Performance Tuning', 'E-commerce Security', 'HIPAA Compliance'],
		title: 'Help E-commerce Security in Front-end Development',
		description:
			'You will begin by Inventory Database within the Front-end Development. Once completed, proceed to HIPAA Compliance to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 99,
		assignedTo: 21
	},
	{
		id: 982,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 19,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Telemedicine Platform',
			projectCode: 'Project Management',
			supportCase: 'SBWKVLB896'
		},
		startDate: '03/10/2024',
		endDate: '04/30/2024',
		skills: [
			'SQL',
			'Business Intelligence',
			'Data Visualization',
			'Cloud Services',
			'Data Analysis',
			'HIPAA Compliance',
			'Performance Tuning'
		],
		title: 'Optimize Performance Tuning in Telemedicine Platform',
		description:
			'The focus is on Performance Tuning within the Telemedicine Platform. Once completed, proceed to Data Analysis to enhance overall outcomes. Focus also on Cloud Services to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 100,
		assignedTo: 22
	},
	{
		id: 983,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'ABC Consulting - Front-end Development',
			projectCode: 'Support',
			supportCase: 'SB4KMOIH99'
		},
		startDate: '05/16/2023',
		endDate: '05/10/2024',
		skills: [
			'Payment Solutions',
			'Healthcare IT',
			'Performance Tuning',
			'E-commerce Security',
			'Report Generation',
			'Regulatory Compliance'
		],
		title: 'Front-end Development Needs Performance Tuning Fixed',
		description:
			'This task involves Performance Tuning within the Front-end Development. Your next steps should include E-commerce Security to enhance overall outcomes. Focus also on E-commerce Security to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 101,
		assignedTo: 68
	},
	{
		id: 984,
		role: 'Supervisor',
		team: 1,
		status: 'Complete',
		hours: 13,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Testing',
			supportCase: 'SBEO7YWT76'
		},
		startDate: '01/13/2024',
		endDate: '05/26/2024',
		skills: [
			'Cloud Services',
			'Healthcare IT',
			'Inventory Database',
			'Operational Efficiency',
			'Regulatory Compliance',
			'Network Security'
		],
		title: 'Full Stack Web Development Needs Operational Efficiency Fixed',
		description:
			'This task involves Network Security within the Full Stack Web Development. From there, move on to Network Security to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 104,
		assignedTo: 45
	},
	{
		id: 985,
		role: 'Associate',
		team: 2,
		status: 'Completed',
		hours: 13,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'UAT',
			supportCase: 'SBGGZTYNUR'
		},
		startDate: '09/18/2023',
		endDate: '05/29/2024',
		skills: [
			'Regulatory Compliance',
			'Backend Development',
			'Payment Solutions',
			'Business Intelligence'
		],
		title: 'Efficiency Audit Tools Needs Backend Development Fixed',
		description:
			'The objective here is Business Intelligence within the Efficiency Audit Tools. Your next steps should include Business Intelligence to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 105,
		assignedTo: null
	},
	{
		id: 986,
		role: 'Associate',
		team: 1,
		status: 'Sign-off',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'YZ Solutions - Customer Segmentation Analysis',
			projectCode: 'UAT',
			supportCase: 'SBM3C7RNTN'
		},
		startDate: '02/04/2024',
		endDate: '05/27/2024',
		skills: ['Payment Solutions', 'System Architecture', 'Client Communication'],
		title: 'Fix System Architecture in Customer Segmentation Analysis',
		description:
			'We aim to Client Communication within the Customer Segmentation Analysis. Following initial steps, you should System Architecture to enhance overall outcomes. Focus also on Client Communication to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 106,
		assignedTo: 27
	},
	{
		id: 987,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Mobile Application Framework',
			projectCode: 'Development',
			supportCase: 'SBI79Q2WZG'
		},
		startDate: '08/28/2023',
		endDate: '04/30/2024',
		skills: [
			'Data Encryption',
			'Network Security',
			'Cloud Services',
			'C#',
			'Payment Solutions',
			'Data Visualization',
			'Report Generation'
		],
		title: 'Create Cloud Services in Mobile Application Framework',
		description:
			'We aim to Payment Solutions within the Mobile Application Framework. Subsequently, your efforts will involve Cloud Services to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 107,
		assignedTo: 29
	},
	{
		id: 988,
		role: 'Senior Associate',
		team: 1,
		status: 'Completed',
		hours: 16,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'KLM Corp. - Client Reporting System',
			projectCode: 'Discovery',
			supportCase: 'SBBXP33HK9'
		},
		startDate: '02/22/2024',
		endDate: '05/28/2024',
		skills: ['E-commerce Security', 'Supply Chain Management', 'Payment Solutions'],
		title: 'Resolve E-commerce Security in Client Reporting System',
		description:
			'Your main task will be E-commerce Security within the Client Reporting System. Following initial steps, you should Supply Chain Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 108,
		assignedTo: null
	},
	{
		id: 989,
		role: 'Supervisor',
		team: 1,
		status: 'Sign-off',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Larson Engineering - Safety Compliance Check',
			projectCode: 'UAT',
			supportCase: 'SBGKI6AAVJ'
		},
		startDate: '08/14/2023',
		endDate: '05/04/2024',
		skills: [
			'SQL',
			'Report Generation',
			'System Architecture',
			'JavaScript',
			'Operational Efficiency',
			'Healthcare IT'
		],
		title: 'Optimize Report Generation in Safety Compliance Check',
		description:
			'Your main task will be JavaScript within the Safety Compliance Check. Your next steps should include Healthcare IT to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 109,
		assignedTo: 48
	},
	{
		id: 990,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 17,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'Jones Manufacturing - Real-Time Data Analysis',
			projectCode: 'Development',
			supportCase: 'SBFP301NEG'
		},
		startDate: '10/11/2023',
		endDate: '05/24/2024',
		skills: [
			'Payment Solutions',
			'E-commerce Security',
			'Data Visualization',
			'Audit Trail Management',
			'Performance Tuning'
		],
		title: 'Help Data Visualization in Real-Time Data Analysis',
		description:
			'The focus is on Data Visualization within the Real-Time Data Analysis. Following initial steps, you should Data Visualization to enhance overall outcomes. Focus also on Audit Trail Management to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 110,
		assignedTo: 71
	},
	{
		id: 991,
		role: 'Senior Associate',
		team: 2,
		status: 'Completed',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'NOP Inc. - Full Stack Web Development',
			projectCode: 'Support',
			supportCase: 'SBP2BE1RTQ'
		},
		startDate: '06/16/2023',
		endDate: '05/05/2024',
		skills: [
			'Client Communication',
			'Data Analysis',
			'SQL',
			'Business Intelligence',
			'Report Generation'
		],
		title: 'Optimize Report Generation in Full Stack Web Development',
		description:
			'The objective here is Client Communication within the Full Stack Web Development. Once completed, proceed to SQL to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 1,
		assignedTo: null
	},
	{
		id: 992,
		role: 'Associate',
		team: 1,
		status: 'Assigned',
		hours: 14,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Point of Sale System',
			projectCode: 'Testing',
			supportCase: 'SBIS4O7JE3'
		},
		startDate: '06/26/2023',
		endDate: '05/01/2024',
		skills: [
			'Business Intelligence',
			'Network Security',
			'Data Encryption',
			'System Architecture',
			'Python',
			'Report Generation',
			'SQL'
		],
		title: 'Adjust Report Generation in Point of Sale System',
		description:
			'This task involves Data Encryption within the Point of Sale System. From there, move on to Business Intelligence to enhance overall outcomes. Focus also on Business Intelligence to add value. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 2,
		assignedTo: 32
	},
	{
		id: 993,
		role: 'Senior Associate',
		team: 1,
		status: 'Sign-off',
		hours: 1,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'GHQ Retailers - Customer Loyalty Programs',
			projectCode: 'Development',
			supportCase: 'SBZ68CCA2H'
		},
		startDate: '10/11/2023',
		endDate: '05/13/2024',
		skills: ['Data Visualization', 'Python', 'Inventory Database'],
		title: 'Implement Data Visualization in Customer Loyalty Programs',
		description:
			'The objective here is Data Visualization within the Customer Loyalty Programs. Subsequently, your efforts will involve Inventory Database to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 4,
		assignedTo: 77
	},
	{
		id: 994,
		role: 'Senior Associate',
		team: 1,
		status: 'Complete',
		hours: 18,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Carter Healthcare - Insurance Claim Automation',
			projectCode: 'Support',
			supportCase: 'SB06S6OQ7O'
		},
		startDate: '10/11/2023',
		endDate: '05/24/2024',
		skills: [
			'Regulatory Compliance',
			'Client Communication',
			'Data Encryption',
			'Operational Efficiency',
			'API Development'
		],
		title: 'Create Regulatory Compliance in Insurance Claim Automation',
		description:
			'The focus is on API Development within the Insurance Claim Automation. Following initial steps, you should Client Communication to enhance overall outcomes. Focus also on API Development to add value. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 6,
		assignedTo: 81
	},
	{
		id: 995,
		role: 'Senior Associate',
		team: 2,
		status: 'Assigned',
		hours: 11,
		billable: false,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'YZ Solutions - Branding Portal',
			projectCode: 'Development',
			supportCase: 'SBGH7L0DNM'
		},
		startDate: '08/28/2023',
		endDate: '05/19/2024',
		skills: [
			'Inventory Database',
			'Supply Chain Management',
			'Database Management',
			'E-commerce Security',
			'User Testing',
			'UI/UX Design'
		],
		title: 'Branding Portal Needs Inventory Database Fixed',
		description:
			'We aim to Supply Chain Management within the Branding Portal. Following initial steps, you should Database Management to enhance overall outcomes. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 10,
		assignedTo: 86
	},
	{
		id: 996,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 8,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'Jones Manufacturing - Supply Chain Management System',
			projectCode: 'Support',
			supportCase: 'SB9KQHVPK6'
		},
		startDate: '01/07/2024',
		endDate: '05/07/2024',
		skills: [
			'Regulatory Compliance',
			'Audit Trail Management',
			'Report Generation',
			'System Architecture'
		],
		title: 'Help Report Generation in Supply Chain Management System',
		description:
			'We aim to Regulatory Compliance within the Supply Chain Management System. Subsequently, your efforts will involve System Architecture to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 3,
		assignedTo: 33
	},
	{
		id: 997,
		role: 'Senior Associate',
		team: 2,
		status: 'Complete',
		hours: 14,
		billable: true,
		billingInfo: {
			type: 'RSSupport',
			projectFolder: 'EFG Solutions - Mobile UX/UI Upgrade',
			projectCode: 'Project Management',
			supportCase: 'SBEFTTSHVF'
		},
		startDate: '07/19/2023',
		endDate: '04/28/2024',
		skills: ['Analytics', 'Payment Solutions', 'E-commerce Security'],
		title: 'Implement Payment Solutions in Mobile UX/UI Upgrade',
		description:
			'This task involves E-commerce Security within the Mobile UX/UI Upgrade. From there, move on to Analytics to enhance overall outcomes. Focus also on E-commerce Security to add value. Wrap up the task by submitting a report on the outcomes and any recommendations for future improvements.',
		postedBy: 13,
		assignedTo: 87
	},
	{
		id: 998,
		role: 'Manager',
		team: 2,
		status: 'Cancelled',
		hours: 12,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'GHQ Retailers - Retail Management Suite',
			projectCode: 'Support',
			supportCase: 'SBVPZDXTE3'
		},
		startDate: '07/18/2023',
		endDate: '05/13/2024',
		skills: [
			'Operational Efficiency',
			'Supply Chain Management',
			'User Testing',
			'Frontend Development',
			'Backend Development',
			'HIPAA Compliance',
			'Performance Tuning'
		],
		title: 'Optimize Supply Chain Management in Retail Management Suite',
		description:
			'The objective here is User Testing within the Retail Management Suite. Once completed, proceed to Operational Efficiency to enhance overall outcomes. Conclude with detailed checks to verify everything operates as intended.',
		postedBy: 14,
		assignedTo: 23
	},
	{
		id: 999,
		role: 'Associate',
		team: 1,
		status: 'Complete',
		hours: 15,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'VWX Logistics - Efficiency Audit Tools',
			projectCode: 'Support',
			supportCase: 'SBUTTH8FUT'
		},
		startDate: '09/09/2023',
		endDate: '05/03/2024',
		skills: [
			'SQL',
			'Payment Solutions',
			'Data Encryption',
			'E-commerce Security',
			'HIPAA Compliance',
			'Report Generation'
		],
		title: 'Help HIPAA Compliance in Efficiency Audit Tools',
		description:
			'The objective here is SQL within the Efficiency Audit Tools. Once completed, proceed to Report Generation to enhance overall outcomes. Ensure comprehensive documentation is maintained throughout the process.',
		postedBy: 5,
		assignedTo: 35
	},
	{
		id: 1000,
		role: 'Supervisor',
		team: 1,
		status: 'Assigned',
		hours: 20,
		billable: true,
		billingInfo: {
			type: 'SolidBill',
			projectFolder: 'QRSTU Systems - Enterprise Resource Planning',
			projectCode: 'Development',
			supportCase: 'SBWIQ5RK1W'
		},
		startDate: '07/26/2023',
		endDate: '04/27/2024',
		skills: [
			'Data Analysis',
			'Report Generation',
			'Business Intelligence',
			'System Architecture',
			'API Development'
		],
		title: 'Adjust Business Intelligence in Enterprise Resource Planning',
		description:
			'This task involves Report Generation within the Enterprise Resource Planning. Following initial steps, you should System Architecture to enhance overall outcomes. Focus also on Data Analysis to add value. Complete this phase with a thorough review and testing to confirm all standards are met.',
		postedBy: 17,
		assignedTo: 52
	}
];
