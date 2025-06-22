import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs.send(
      'service_uz1gbuh', 
      'template_eney5i1',
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      'kf4kYailHT9jlcLz5' // your new EmailJS user ID (public key)
    )
      .then((result) => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatus('Failed to send message. Please try again later.');
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
        <button className="btn-accent" type="submit">Send Message</button>
      </form>
      {status && <p style={{ color: status.includes('successfully') ? 'lightgreen' : '#e94560', marginTop: '1em' }}>{status}</p>}
    </section>
  );
}

export default Contact;
