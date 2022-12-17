import AddModalForm from './components/AddModalForm';
import AddTagModal from './components/AddTagModal';
import EditModalForm from './components/EditModalForm';
import Table from './Table';

function App() {
	return (
		<div className="App">
			<AddModalForm />
			<Table />
			<EditModalForm />
			<AddTagModal />
		</div>
	);
}

export default App;
