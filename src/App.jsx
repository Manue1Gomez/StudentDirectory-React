import './style.css';
import HeaderContainer from "./components/HeaderContainer";
import HeaderstudentForm from "./components/HeaderContainer";
import HeaderstudentList from "./components/HeaderContainer";
function App() {
  

  return (
    <>
      <HeaderContainer />
      <HeaderstudentForm />
      <HeaderstudentList />

      <header>
          <h1>Student Directory</h1>
          <p>Manage and display student information.</p>
      </header>

   
    </>
  )
}

export default App
