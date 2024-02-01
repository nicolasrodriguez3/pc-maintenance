import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ListOfComputers from "./components/ListOfComputers"
import "./App.css"
import ComputerView from "./components/ComputerView"

const router = createBrowserRouter([
	{
		path: "/",
		element: <ListOfComputers />,
	},
	{
		path: ":sucursal/:id",
		element: <ComputerView />,
	},
])
function App() {
	return <RouterProvider router={router} />
}

export default App
