import { Form, Input, Modal } from 'antd';
import React from 'react';
import { useTableContext } from '../context/context';
import { tag } from '../utils/data';
const AddTagModal = () => {
	const { tagModal, setTagModal } = useTableContext();
	const [form] = Form.useForm();

	const onFinish = (value) => {
		console.log('hello');
		const newTag = { text: value.tag, value: value.tag };
		tag.push(newTag);
		setTagModal(false);
	};
	return (
		<>
			<Modal
				title="add a new tag"
				open={tagModal}
				okText="Add Tag"
				okButtonProps={{ type: 'primary' }}
				cancelText="no"
				onCancel={() => setTagModal(false)}
				onOk={() => form.submit()}
			>
				<Form form={form} onFinish={onFinish}>
					<Form.Item
						name={'tag'}
						label="Tag name"
						rules={[
							{
								required: true,
								message: 'tag is required',
							},
							{
								whitespace: true,
							},
						]}
					>
						<Input></Input>
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default AddTagModal;
