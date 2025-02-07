import PageBanner from "../../components/PageBanner";
import InfoBanner from "../../components/InfoBanner";
import ContactPage from "./ContactSection";

const Contact = () => {
  return (
    <div>
      <PageBanner 
      currentPage="Contact"
      backgroundImage="/src/assets/images/bgteste.png"
      />
      <ContactPage/>
      <InfoBanner/>
    </div>
  );
};

export default Contact;