interface User {
	name: string;
	age: number;
	skills: string[];

	log: (id: number) => string;
}

interface UserWithRole extends User {
	roleId: number;
}

let user: UserWithRole = {
	name: 'John',
	age: 36,
	skills: ['1', '2', '3'],
	roleId: 1,
	log(id) {
		return '';
	},
};
