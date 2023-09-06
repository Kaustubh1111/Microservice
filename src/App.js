import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmpListing from './EmpListing'
import EmpCreate from "./EmpCreate";
import EmpDetails from "./EmpDetails";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      {/* <div className="container my-3">
        <TextForm heading="Enter text" />

      </div> */}
      <center>
        {/* <NotesListPage /> */}
      </center>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/:empId" element={<EmpDetails />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );


}

export default App;
