'use client';

import { useState } from 'react';
import './contact.scss';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import decor from '@/public/decor.svg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="container contactPage">
      <section className="topSection">
        <div className="titleBlock">
          <span className="subHead">Get in Touch</span>
          <h1 className="title">Let&apos;s Work Together</h1>
          <p className="desc">
            Have a project in mind or just want to say hi? I&apos;m always open to new opportunities and interesting projects.
          </p>
        </div>

        <div className="socialLinks">
          <a href="#" className="socialIcon" aria-label="LinkedIn">
            <Icon icon="et:linkedin" width="24" height="24" />
          </a>
          <a href="#" className="socialIcon" aria-label="GitHub">
            <Icon icon="teenyicons:git-outline" width="24" height="24" />
          </a>
          <a href="mailto:contact@example.com" className="socialIcon" aria-label="Email">
            <Icon icon="mdi:email-outline" width="24" height="24" />
          </a>
        </div>
      </section>

      <div className="contentGrid">
        <aside className="infoCard">
          <div className="infoItem">
            <span className="label">Contact Details</span>
            <a href="mailto:info@ashimshrestha.com" className="value">info@ashimshrestha.com</a>
            <a href="tel:+1234567890" className="value">+977 9800000000</a>
          </div>

          <div className="infoItem">
            <span className="label">Location</span>
            <span className="value">Kathmandu, Nepal</span>
          </div>

          <div className="infoItem">
            <span className="label">Availability</span>
            <span className="value">Open for Freelance</span>
          </div>
        </aside>

        <form className="formCard" onSubmit={handleSubmit}>
          <div className="formHeader">
            <h3>Send a Message</h3>
            <p>Fill out the form below and I&apos;ll get back to you shortly.</p>
          </div>

          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Inquiry"
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className="submitBtn" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="statusMessage success">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
