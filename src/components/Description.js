import { Form, Input } from 'antd';
import React from 'react';
import { useTableContext } from '../context/context';

const Description = ({ text, record }) => {
	return <p>{text}</p>;
};

export default Description;
