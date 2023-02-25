import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";

export function Layout(props) {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
}
