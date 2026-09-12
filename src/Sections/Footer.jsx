import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GraduationCap } from "lucide-react";
import Button from "../components/Button";
import FooterColumn from "../components/FooterColumn";

const socialLinks = [
  { icon: <FaFacebookF size={14} />, href: "#" },
  { icon: <FaTwitter size={14} />, href: "#" },
  { icon: <FaLinkedinIn size={14} />, href: "#" },
  { icon: <FaInstagram size={14} />, href: "#" },
];

const footerColumns = [
  {
    title: "Quick Links",
    links: ["Home", "Courses", "About Us", "Pricing", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "Terms of Service", "Privacy Policy", "Refund Policy"],
  },
];

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-container padding-x py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <GraduationCap size={26} className="text-secondary" />
              <span className="font-roboto text-lg font-bold text-white">EduLearn</span>
            </div>
            <p className="mt-1 text-[10px]  text-secondary/80">
              Learn. Grow. Succeed.
            </p>

            <p className="mt-4 max-w-[220px] text-sm leading-6 text-white/60">
              Empowering learners worldwide with quality online education.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                
                <a key={index}
                  href={social.href}
                  className="flex h-9 w-9 items-center  justify-center rounded-full bg-white/10 text-white transition hover:bg-secondary hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          {/* <div >   */}
          <FooterColumn {...footerColumns[0]} />
          <FooterColumn {...footerColumns[1]} />
              {/* </div> */}
          {/* Newsletter */}
          <div>
            <h4 className="font-roboto text-lg font-semibold text-white">Newsletter</h4>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Subscribe to get the latest updates and learning resources.
            </p>

            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:ring-1 focus:ring-secondary"
              />
              <Button variant="primary" size="sm" radius="full" className="shrink-0">
                Subscribe
              </Button>
            </form>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} EduLearn. All rights reserved.
          </p>
        </div>

      </div>  
    </footer>
  );
}

export default Footer;