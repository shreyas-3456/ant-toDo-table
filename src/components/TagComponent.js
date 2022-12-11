import { Tag } from 'antd';
import { useTableContext } from '../context/context';

const TagComponent = ({ text, record }) => {
	text = typeof text === 'string' ? text.split(' ') : text;

	const { isEdit, setIsEdit } = useTableContext();
	const arr = [...new Set(text)];

	return (
		<>
			{arr.map((tag) => (
				<Tag color="blue" key={tag}>
					{tag}
				</Tag>
			))}
		</>
	);
};

export default TagComponent;
