import { DatePicker, Form, Input, Modal, Select } from 'antd';
import moment from 'moment/moment';
import React from 'react';
import { useTableContext } from '../context/context';
import { options, tag } from '../utils/data';

const EditModalForm = () => {
  const { isEdit, setIsEdit, recordData, setDataSource } = useTableContext();
  console.log(recordData);
  const [form] = Form.useForm();

  const disableDueDate = (value) => {
    if (!value) return false;
    return value.valueOf() < Date.now();
  };

  const onFinish = (value) => {
    console.log(recordData.id);
    value = { id: recordData.id, timestamp: recordData.timestamp, ...value };
    value.dueDate = value.dueDate
      ? new Date(String(value.dueDate.$d).slice(0, 15)).getTime()
      : recordData.dueDate;
    value.tag = value.tag ? value.tag.join(' ') : recordData.tag;
    value.status = value.status ? value.status : 'OPEN';
    console.log(value);
    setDataSource((pre) => {
      return pre.map((item) => {
        if (item.id === value.id) {
          return value;
        }
        return item;
      });
    });
    setIsEdit(false);
  };
  return (
    <>
      <Modal
        title='Edit row'
        open={isEdit}
        okText='save'
        okButtonProps={{ type: 'primary' }}
        cancelText='no'
        onCancel={() => setIsEdit(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item
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
            initialValue={recordData?.title}
          >
            <Input placeholder='title' />
          </Form.Item>
          <Form.Item
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
            initialValue={recordData?.description}
          >
            <Input placeholder='Description' />
          </Form.Item>
          <Form.Item name='dueDate'>
            <DatePicker
              picker='date'
              placeholder='enter date'
              disabledDate={disableDueDate}
              defaultValue={moment(recordData?.dueDate)}
            />
          </Form.Item>
          <Form.Item name={'tag'} initialValue={recordData?.tag}>
            <Select mode='multiple' allowClear options={tag}></Select>
          </Form.Item>
          <Form.Item name={'status'} initialValue={recordData?.status}>
            <Select options={options}></Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditModalForm;
