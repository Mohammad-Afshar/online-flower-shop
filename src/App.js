import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Products } from "./Pages/Products";
import { Blog } from "./Pages/Blog";
import { Description } from "./Pages/Description";
import { SignIn } from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/products" component={Products} />
      <Route path="/description" component={Description} />
      <Route path="/blog" component={Blog} />
      <Route path="/signin" component={SignIn} />
    </BrowserRouter>
  );
}

export default App;
