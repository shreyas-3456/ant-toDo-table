const DueDate = ({ text, record }) => {
	return (
		<>
			<p>{new Date(text).toDateString()}</p>
		</>
	);
};

export default DueDate;
