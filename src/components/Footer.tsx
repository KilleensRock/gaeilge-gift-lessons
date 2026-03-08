import celticKnot from "@/assets/celtic-knot.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6" style={{ background: "hsl(145, 30%, 12%)" }}>
      <div className="max-w-4xl mx-auto text-center">
        <img src={celticKnot} alt="Celtic knot" className="w-12 h-12 mx-auto mb-4 opacity-60" />
        <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">Gaeilge Beo</h3>
        <p className="font-body text-primary-foreground/50 mb-6">Live Irish Language Lessons for Beginners</p>
        <p className="font-body text-primary-foreground/40 text-sm">
          © {new Date().getFullYear()} Gaeilge Beo. All rights reserved. · <a href="mailto:gaeilgetoday@gmail.com" className="hover:text-primary-foreground/70 transition-colors">gaeilgetoday@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
