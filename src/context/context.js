import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { examapleData } from '../utils/data';
const Context = React.createContext();

export const ContextProvider = ({ children }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [isAdd, setIsAdd] = useState(false);
	const [tagModal, setTagModal] = useState(false);
	const [recordData, setRecordData] = useState(null);
	const [dataSource, setDataSource] = useState(examapleData);
	const [intialData, setIntialData] = useState(examapleData);
	const fetchData = async () => {
		try {
			const response = await axios(
				'https://6395335a4df9248eadb5030c.mockapi.io/api/v1/title'
			);
			setIntialData((pre) => {
				return [...pre, ...response.data];
			});
			setDataSource((pre) => {
				return [...pre, ...response.data];
			});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<Context.Provider
			value={{
				isEdit,
				setIsEdit,
				dataSource,
				setDataSource,
				recordData,
				setRecordData,
				isAdd,
				setIsAdd,
				intialData,
				tagModal,
				setTagModal,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useTableContext = () => {
	return useContext(Context);
};
