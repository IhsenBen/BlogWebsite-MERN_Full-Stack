import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
function App() {
  return (
    <>
       <TopBar />
       {/* <Single /> */}
       {/* <Write /> */}
      {/* <Setting /> */}
      {/* <Login /> */}
      <Register />
    </>
 
  );
}

export default App;
