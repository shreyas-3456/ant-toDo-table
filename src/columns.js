import Actions from './components/Actions';
import Description from './components/Description';
import DueDate from './components/DueDate';
import Status from './components/Status';
import TagComponent from './components/TagComponent';
import Title from './components/Title';
import { optionsFilter, tag } from './utils/data';

export const columns = [
	{
		title: 'Timestamp created',
		dataIndex: 'timestamp',
		valueType: 'dateTime',
		key: 'timestamp',
		width: 300,
		sorter: (a, b) => {
			if (typeof a.timestamp === 'string') {
				a.timestamp = new Date(a.timestamp).getTime();
			}
			if (typeof b.timestamp === 'string') {
				b.timestamp = new Date(b.timestamp).getTime();
			}
			return a.timestamp - b.timestamp;
		},
	},
	{
		title: 'Title',
		dataIndex: 'title',
		key: 'title',

		sorter: (a, b) => a.title.localeCompare(b.title),
		render: (text, record) => <Title text={text} record={record} />,
	},
	{
		title: 'Description',
		dataIndex: 'description',
		key: 'description',
		sorter: (a, b) => a.description.localeCompare(b.description),
		render: (text, record) => <Description text={text} record={record} />,
	},
	{
		title: 'Due Date',
		dataIndex: 'dueDate',
		key: 'dueDate',
		width: 220,
		sorter: (a, b) => {
			if (typeof a.dueDate === 'string') {
				a.dueDate = new Date(a.dueDate).getTime();
			}
			if (typeof b.dueDate === 'string') {
				b.dueDate = new Date(b.dueDate).getTime();
			}
			return a.dueDate - b.dueDate;
		},
		render: (text, record) => <DueDate text={text} record={record} />,
	},
	{
		title: 'Tag',
		dataIndex: 'tag',
		key: 'tag',
		filters: tag,
		onFilter: (value, record) => {
			if (typeof record.tag === 'object') {
				record.tag = record.tag.join(' ');
			}
			const valueReg = new RegExp(value, 'i');
			const exists = valueReg.test(record.tag);
			if (exists === false) {
				return false;
			} else {
				return true;
			}
		},
		filterSearch: true,
		render: (text, record) => <TagComponent text={text} record={record} />,
	},
	{
		title: 'status',
		dataIndex: 'status',
		key: 'status',
		filters: optionsFilter,
		onFilter: (value, record) => record.status.startsWith(value),
		filterSearch: true,
		render: (text, record) => {
			return <Status text={text} record={record} />;
		},
	},
	{
		title: 'Actions',
		key: 'actions',
		align: 'center',
		editable: false,
		render: (value, record) => <Actions record={record} />,
	},
];
