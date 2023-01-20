import EditableProTable from '@ant-design/pro-table';
import { columns } from './columns';
import { Input, Button } from 'antd';
import { useState } from 'react';
import { useTableContext } from './context/context';

const Table = () => {
  const { dataSource, setDataSource, setIsAdd, intialData, setTagModal } =
    useTableContext();
  const [keywords, setKeywords] = useState('');
  const handleSearch = () => {
    if (keywords.length === 0) return;
    const searchingArray = dataSource.filter((element, index) => {
      const valueReg = new RegExp(keywords, 'i');
      let isMatch = false;
      const keyArray = Object.keys(element);
      for (let i = 0; i < Object.keys(element).length; i++) {
        let keyName = dataSource[index][keyArray[i]];
        if (typeof keyName === 'string') {
          isMatch = valueReg.test(keyName);
          if (isMatch) break;
        }
        if (typeof keyName === 'number') {
          keyName = new Date(keyName).toDateString();
          isMatch = valueReg.test(keyName);
          if (isMatch) break;
        }
        if (typeof keyName === 'object') {
          keyName = keyName.join(' ');
          isMatch = valueReg.test(keyName);
          if (isMatch) break;
        }
      }
      if (isMatch) return element;
    });
    setDataSource([...searchingArray]);
    setKeywords('');
  };
  const reset = () => {
    setDataSource([...intialData]);
  };
  return (
    <EditableProTable
      search={false}
      columns={columns}
      dataSource={dataSource}
      rowKey='name'
      params={{ keywords }}
      // toolBarRender={false}
      toolBarRender={(action) => [
        <Button key={'add'} onClick={() => setIsAdd(true)}>
          Add new row
        </Button>,
        <Input.Search
          style={{
            width: 200,
          }}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder='Search for any columns'
          onSearch={handleSearch}
        />,
        <Button onClick={() => setTagModal(true)}>Add new tag</Button>,
        <Button onClick={reset}>Reset</Button>,
      ]}
      pagination={{
        defaultPageSize: 10,
      }}
    />
  );
};

export default Table;
