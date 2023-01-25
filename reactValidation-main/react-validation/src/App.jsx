import React, { Fragment } from "react";
import { useRoutes } from "react-router";
import Footer from "./Components/SheardComponents/Footer/Footer";
import Header from "./Components/SheardComponents/Header/Header";
import Routes from "./Routes";
import GlobalStyle from "./Styles/globalStyles";

const App = () => {
  // return <SignUp />;
  const element = useRoutes(Routes)
  return (
    <>
      <Fragment>
        <GlobalStyle />
        <Header />
        {element}
        <Footer />
      </Fragment>
    </>
  );
};

export default App;
