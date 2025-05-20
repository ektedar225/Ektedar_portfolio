import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../data/userData';
import { AtSign, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll('.reveal');
            elements?.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('active');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    const whatsappMessage =
      `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/918960255100?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="content-section py-20 bg-secondary"
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-display font-bold mb-12 text-center reveal">
          Get In <span className="text-accent">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal">
            <h3 className="text-2xl font-display font-semibold mb-6">
              Let's Connect
            </h3>
            <p className="text-text-secondary mb-8">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat. I'm always open to discussing new projects and ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary mb-1">Email Address</h4>
                  <p className="font-medium">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary mb-1">Phone Number</h4>
                  <p className="font-medium">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4">
                  <AtSign size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm text-text-secondary mb-1">Social Profiles</h4>
                  <div className="flex space-x-4">
                    <a
                      href={`https://github.com/${personalInfo.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={personalInfo.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="hover-card h-full">
              <h3 className="text-2xl font-display font-semibold mb-6">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-primary/40 border border-text-secondary/20 rounded-lg focus:outline-none focus:border-accent text-text-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-primary/40 border border-text-secondary/20 rounded-lg focus:outline-none focus:border-accent text-text-primary"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm text-text-secondary mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-primary/40 border border-text-secondary/20 rounded-lg focus:outline-none focus:border-accent text-text-primary"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-text-secondary mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-primary/40 border border-text-secondary/20 rounded-lg focus:outline-none focus:border-accent text-text-primary resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent hover:bg-opacity-80 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;