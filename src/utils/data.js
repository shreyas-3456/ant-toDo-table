const options = [
	{
		label: 'OPEN',
		value: 'OPEN',
	},
	{
		label: 'WORKING',
		value: 'WORKING',
	},
	{
		label: 'DONE',
		value: 'DONE',
	},
	{
		label: 'OVERDUE',
		value: 'OVERDUE',
	},
];

const optionsFilter = [
	{
		text: 'OPEN',
		value: 'OPEN',
	},
	{
		text: 'WORKING',
		value: 'WORKING',
	},
	{
		text: 'DONE',
		value: 'DONE',
	},
	{
		text: 'OVERDUE',
		value: 'OVERDUE',
	},
];

const tag = [
	{ text: 'React', value: 'React' },
	{ text: 'To-Do-List', value: 'To-Do-List' },
	{ text: 'Ant-Design', value: 'Ant-Design' },
	{ text: 'Blog', value: 'Blog' },
];

const examapleData = [
	{
		id: Date.now() - Math.floor(Math.random() * 20000000),
		key: Date.now() - Math.floor(Math.random() * 20000000),
		timestamp: Date.now() - Math.floor(Math.random() * 200000),
		title: 'Finish To-Do List App',
		description: 'Design and implement a To-Do List App using React',
		dueDate: Date.now() + Math.floor(Math.random() * 900000000),
		tag: ['React', 'To-Do-List'],
		status: 'OPEN',
	},
	{
		id: Date.now() - Math.floor(Math.random() * 20000000),
		key: Date.now() - Math.floor(Math.random() * 20000000),
		timestamp: Date.now() - Math.floor(Math.random() * 20000000),
		title: 'Write blog post',
		description: 'Write a blog post on using Ant Design Pro table component',
		dueDate: Date.now() + Math.floor(Math.random() * 900000000),
		tag: ['Ant-Design', 'Blog'],
		status: 'WORKING',
	},
	{
		id: Date.now() - Math.floor(Math.random() * 20000000),
		key: Date.now() - Math.floor(Math.random() * 20000000),
		timestamp: Date.now() - Math.floor(Math.random() * 20000000),
		title: 'Make a youtube video',
		description: 'Make a youtube video about React',
		dueDate: Date.now() + Math.floor(Math.random() * 900000000),
		tag: ['React'],
		status: 'CLOSE',
	},
	{
		id: Date.now() - Math.floor(Math.random() * 20000000),
		key: Date.now() - Math.floor(Math.random() * 20000000),
		timestamp: Date.now() - Math.floor(Math.random() * 20000000),
		title: 'Teach Programming',
		description: 'Teach how to make responsive websites',
		dueDate: Date.now() + 1000000 + Math.floor(Math.random() * 900000000),
		tag: ['To-Do-List', 'Ant-Design'],
		status: 'DONE',
	},
];
export { options, examapleData, tag, optionsFilter };
