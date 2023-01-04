import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Admin from "./components/Admin";

function App() {

	return (
		<Routes>
			<Route path="/registration" exact element={<Signup />} />
			<Route path="/result" exact element={<Admin />} />
			<Route path="/" element={<Navigate replace to="/registration" />} />
		</Routes>

	);
}

export default App;
