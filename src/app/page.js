import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/cards";
import Addnew from "@/components/addnew"
import '@fontsource/inter';
import Testimonials from "@/components/testimonials";
import Community from "@/components/community";
import Footer from "@/components/footer";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ScrollUp from "@/components/scrollup";


export default function Home() {
  return (
    
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
    <Navbar/>
      <Hero/>
      <Cards/>
      <Addnew/>
      <Testimonials/>
      <Community/>
<Footer/>
<ScrollUp/>
      </div>
  );
}
