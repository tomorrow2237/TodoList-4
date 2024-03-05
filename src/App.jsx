import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Title from "./component/Title";
import Input from "./component/Input";
import RmTask from "./component/RmTask";
import { TaskProvider } from "./context/SetComtext";

function App() {

  return (
    <>
    <TaskProvider>
    <ToastContainer/>
    <Title/>
    <Input/>
    <RmTask/>
    </TaskProvider>
    </>
  )
}

export default App
