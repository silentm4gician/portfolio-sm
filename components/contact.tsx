import {
  Check,
  Instagram,
  Link,
  Mail,
  MapPin,
  Notebook,
  Phone,
} from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <div className="space-y-4 text-muted-foreground grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=leandroGonzalezMat@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              leandroGonzalezMat@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link className="h-5 w-5 text-primary" />
            <a
              href="https://www.linkedin.com/in/leandro-gonzález-matkovich"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <a
              href="tel:+543858506372"
              className="hover:text-primary transition-colors"
            >
              +54 3858506372
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Instagram className="h-5 w-5 text-primary" />
            <a
              href="https://www.instagram.com/leandro_gm5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <a
              href="https://www.google.com/maps/place/Ushuaia,+Tierra+del+Fuego,+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Ushuaia, Tierra del Fuego, Argentina
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Notebook className="h-5 w-5 text-primary" />
            <a
              href="https://drive.google.com/file/d/1IuL5-7lo1Qwgdhl-mRvQOjKIdOHe68OJ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
