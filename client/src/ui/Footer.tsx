import { payment } from "../assets";
import Container from "./Container";
import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@2025 E-commerce solutions. All rights reserved.</p>
        <img src={payment} alt="payment-img" className=" object-cover" />
      </Container>      
    </footer>
  )
}