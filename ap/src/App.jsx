import SocialCard from "./components/SocialCard";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function App() {
  return (
    <main className="home">
      <section className="profile">
        <div className="logo">LOGO</div>

        <h1>Abhishek Patra</h1>

        <p>Connect with us</p>
      </section>

      <section className="social-links">
<SocialCard
  name="Instagram"
  icon={<FaInstagram size={20} />}
  url="https://instagram.com/"
/>

<SocialCard
  name="Facebook"
  icon={<FaFacebookF size={20} />}
  url="https://facebook.com/"
/>

<SocialCard
  name="WhatsApp"
  icon={<FaWhatsapp size={20} />}
  url="https://wa.me/"
/>

<SocialCard
  name="YouTube"
  icon={<FaYoutube size={20} />}
  url="https://youtube.com/"
/>

<SocialCard
name="PhotographerVaiya"
url="https://photographervaiya.vercel.app/"

/>
      </section>
    </main>
  );
}

export default App;