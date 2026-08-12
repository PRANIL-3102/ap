import SocialCard from "./components/SocialCard";
import logo from "./assets/logo.png";
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
<div className="logo">
  <img src={logo} alt="Business Logo" />
</div>

        <h1>PhotographerVaiya</h1>

        <p>AVISHEK PATRA</p>
      </section>

      <section className="social-links">
<SocialCard
  name="Instagram"
  icon={<FaInstagram size={20} />}
  url="https://www.instagram.com/photographervaiya?igsh=eXRiMWYwZ2tpd2k5"
/>

<SocialCard
  name="Facebook"
  icon={<FaFacebookF size={20} />}
  url="https://www.facebook.com/profile.php?id=61576611087250"
/>

<SocialCard
  name="WhatsApp"
  icon={<FaWhatsapp size={20} />}
  url="https://wa.me/+917679148499"
/>

<SocialCard
  name="YouTube"
  icon={<FaYoutube size={20} />}
  url="https://youtube.com/@photographervaiya?si=E-LeLftkU7HQJHEz"
/>

<SocialCard
name="Website"
url="https://photographervaiya.vercel.app/"
/>
      </section>
    </main>
  );
}

export default App;