import React, { useState } from 'react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnndqdob", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contactPage pagesContainer">
      <h2 className="section-title">Inquire Within</h2>

      <div className="contact-grid">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="adeena.chatriwala@gmail.com">adeena.chatriwala@gmail.com</a></p>
          {/* <p><strong>Phone:</strong> +92 312 3456789</p> */}
          <p><strong>Instagram:</strong> <a href="https://instagram.com/adeena.chatriwala" target="_blank">/adeena.chatriwala</a></p>
          <p><strong>Based in:</strong> Karachi, Pakistan</p>
          <p className="quote">"Art is not what you see, but what you make others see." – Edgar Degas</p>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-row">
            <input type="text" name="firstName" placeholder="First Name" required />
            <input type="text" name="lastName" placeholder="Last Name" required />
          </div>
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {submitted && <p className="success-message">🎉 Message sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
