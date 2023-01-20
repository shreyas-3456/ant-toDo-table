import { Button } from 'antd';
import { Modal } from 'antd';
import { useEffect } from 'react';
import { useTableContext } from '../context/context';

const Actions = ({ record }) => {
  const { setIsEdit, setDataSource, setRecordData, recordData } =
    useTableContext();

  const editRecord = () => {
    setIsEdit(true);
    setRecordData({ ...record });
  };
  const deleteRecord = () => {
    Modal.confirm({
      title: 'Are you sure want to delete this row ?',
      okText: 'Yes',
      cancelText: 'No',
      okType: 'danger',
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((item) => {
            return item.id !== record.id;
          });
        });
      },
    });
  };

  return (
    <>
      <Button onClick={() => editRecord()}>Edit</Button>
      <Button
        onClick={deleteRecord}
        style={{ color: 'red', marginLeft: '4px' }}
      >
        Delete
      </Button>
    </>
  );
};

export default Actions;
