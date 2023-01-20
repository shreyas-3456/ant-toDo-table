import { DatePicker, Form, Input, Modal, Select } from 'antd';
import React from 'react';
import { useTableContext } from '../context/context';
import { options, tag } from '../utils/data';

const AddModalForm = () => {
  const { isAdd, setIsAdd, setDataSource } = useTableContext();
  const [form] = Form.useForm();

  const disableDueDate = (value) => {
    if (!value) return false;
    return value.valueOf() < Date.now();
  };

  const onFinish = (value) => {
    value = {
      id: Date.now() - Math.floor(Math.random() * 2000000),
      timestamp: Date.now(),
      ...value,
    };
    value.dueDate = value.dueDate
      ? new Date(String(value.dueDate.$d).slice(0, 15)).getTime()
      : 'no date selected';
    value.tag = value.tag ? value.tag.join(' ') : 'no-tag';
    value.status = value.status ? value.status : 'OPEN';
    setDataSource((pre) => [...pre, value]);
    form.resetFields();
    setIsAdd(false);
  };
  return (
    <>
      <Modal
        title='add a new row'
        open={isAdd}
        okText='Add'
        okButtonProps={{ type: 'primary' }}
        cancelText='no'
        onCancel={() => setIsAdd(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label={'Title'}
            name='title'
            rules={[
              {
                required: true,
                message: 'Title is required',
              },
              {
                whitespace: true,
              },
              {
                max: 100,
              },
            ]}
          >
            <Input placeholder='title' />
          </Form.Item>
          <Form.Item
            label='Description'
            name='description'
            rules={[
              {
                required: true,
                message: 'Description is required',
              },
              {
                whitespace: true,
              },
              {
                max: 1000,
              },
            ]}
            hasFeedback
          >
            <Input placeholder='Description' />
          </Form.Item>
          <Form.Item name='dueDate' label={'DueDate'}>
            <DatePicker
              picker='date'
              placeholder='enter date'
              disabledDate={disableDueDate}
            />
          </Form.Item>
          <Form.Item name={'tag'} label='Tag'>
            <Select mode='multiple' allowClear options={tag}></Select>
          </Form.Item>
          <Form.Item name={'status'} label='status'>
            <Select options={options}></Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddModalForm;
