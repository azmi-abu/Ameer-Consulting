// src/components/Section.jsx
import ContactForm from './ContactForm';

const Section = ({ title, children }) => (
  <section className="p-6 md:p-12 border-b border-gray-300">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">{title}</h2>
    <div className="text-gray-800 leading-relaxed mb-6">{children}</div>
    <ContactForm />
  </section>
);

export default Section;
