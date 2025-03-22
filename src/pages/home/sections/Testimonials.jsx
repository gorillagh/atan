// src/sections/TestimonialsSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mensah",
      role: "Software Developer & ATAN Alumnus",
      company: "TechCorp Ghana",
      quote:
        "The ATAN program gave me practical skills that my university courses didn't cover. Within 3 months of completing my apprenticeship, I was hired full-time.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Michael Okafor",
      role: "HR Director",
      company: "AfriTech Solutions",
      quote:
        "Hiring through ATAN has transformed our junior developer onboarding. The apprentices come ready to contribute with minimal training time required.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Dr. Aminata Diallo",
      role: "Dean of Computer Sciences",
      company: "Senegal Institute of Technology",
      quote:
        "Our partnership with ATAN has significantly improved our curriculum relevance and strengthened our industry connections.",
      image: "/api/placeholder/100/100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Success <span className="text-burgundy">Stories</span>
          </motion.h2>
          <div className="w-20 h-1 bg-burgundy mx-auto mt-4 mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community of employers, universities, and apprentices
            across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg relative border border-gray-100"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-burgundy/5 rounded-full -mr-8 -mt-8"></div>

              <div className="relative">
                <svg
                  className="text-burgundy w-10 h-10 mb-4 opacity-20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="text-gray-600 mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-burgundy">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-burgundy font-medium hover:text-burgundy/80"
          >
            View more success stories <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
