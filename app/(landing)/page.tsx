import About from "./_component/layouts/about";
import Client from "./_component/layouts/client";
import Collaborate from "./_component/layouts/collaborate";
import Consultation from "./_component/layouts/consultation";
import Faq from "./_component/layouts/faq";
import Feature from "./_component/layouts/feature";
import Footer from "./_component/layouts/footer";
import How from "./_component/layouts/how";
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
      <How />
      <Client />
      <Faq />
      <Footer />
    </>
  );
}
