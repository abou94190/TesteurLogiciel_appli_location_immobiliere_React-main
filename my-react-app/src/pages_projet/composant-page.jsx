import { Outlet } from "react-router-dom";
import Header from "../composants/header";
import Footer from "../composants/footer";


function Root() {

  return (
    <>
      <Header />

        <Outlet />


      <Footer />
    </>
  );
}

export default Root;