import { Mail, Phone, MapPin } from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-left">
        <h1>Contact Us</h1>
        <div className="contact-divider" />
        <p>Have a project in mind? Let's work together and build something amazing.</p>

        <div className="contact-info">
          <div className="contact-info-item">
            <div className="contact-icon">
              <Mail size={20} color="#fff" />
            </div>
            <div>
              <strong>Email</strong>
              <p>hello@cbeagency.com</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <Phone size={20} color="#fff" />
            </div>
            <div>
              <strong>Phone</strong>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <MapPin size={20} color="#fff" />
            </div>
            <div>
              <strong>Location</strong>
              <p>123 Creative Street, Design City, DC 10001, USA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <div className="contact-row">
          <div className="contact-field">
            <label>Your Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="contact-field">
            <label>Your Email</label>
            <input type="email" placeholder="john@gmail.com" />
          </div>
        </div>

        <div className="contact-field">
          <label>Subject</label>
          <input type="text" placeholder="How can we help you?" />
        </div>

        <div className="contact-field">
          <label>Message</label>
          <textarea placeholder="Tell us about your project..." rows={6} />
        </div>

        <button className="contact-btn">Send Message</button>
      </div>
    </section>
  );
}

export default Contact;