import { FC } from "react";
//import { Wrapper, Title, Button, Input } from "./App.styles";
import { PropsType } from "./App.types";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: FC<PropsType> = () => {
  // const { primary } = props;

  return (
    <div>
      {/* <Wrapper>
        <Title>Hello World!</Title>
        <Button>Primary</Button>
        <Button primary={primary}>Primary</Button>
        <Input placeholder="A small text input" />
        <br />
        <Input placeholder="A bigger text input" size="2em" />
      </Wrapper> */}

      <Router>
        <Navbar/>
        <Routes>
          <Route path ="/"/>
          <Route path ="/products"/> 
          <Route path ="/contacts"/> 
          <Route path ="/about "/> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
