import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#ba1c41] text-white py-10 px-4 font-mono">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-sm leading-relaxed">
            We are dedicated to raising awareness, offering support, and sharing trusted information about HIV and AIDS to help build a healthier community.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Resources</h4>
          <ul className="text-sm space-y-1">
            <li><Link to="/prevention" className="hover:underline">Prevention</Link></li>
            <li><Link to="/treatment" className="hover:underline">Treatment</Link></li>
            <li><Link to="/support" className="hover:underline">Support</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Stay Connected</h4>
          <p className="text-sm">Email: support@hivawareness.org</p>
          <p className="text-sm">Phone: +84 123 456 789</p>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/80">
        © {new Date().getFullYear()} HIV Awareness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
