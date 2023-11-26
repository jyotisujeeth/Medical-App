import React, { useState } from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ContextProvider from "./Store/ContextProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const cartHandler = () => {
    if (cartShown === true) setCartShown(false);
    else setCartShown(true);
  };

  return (
    <ContextProvider>
      {cartShown && <Cart onClick={cartHandler} />}
      <Header onClick={cartHandler} />
      <main>
        <Form />
        <List />
      </main>
    </ContextProvider>
  );
}

export default App;
