import About from "./_component/layouts/about";
import Collaborate from "./_component/layouts/collaborate";
import Consultation from "./_component/layouts/consultation";
import Feature from "./_component/layouts/feature";
import Main from "./_component/layouts/main";
import Reason from "./_component/layouts/reason";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Reason />
      <Feature />
      <Consultation />
      <Collaborate />
    </>
  );
}
