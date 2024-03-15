import Image from "next/image";
import Link from "next/link";
import Card from "./componants/detailCard"
import Nav from "./componants/nav"
import HeroSection from "./componants/hero"

export default function Home() {
  return (
    <div>
      <Nav></Nav>
      <HeroSection></HeroSection>
    </div> 
  );
}
