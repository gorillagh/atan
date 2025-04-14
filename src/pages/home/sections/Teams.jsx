import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLinkedin, FaTwitter } from "react-icons/fa";

const Teams = () => {
  const teamMembers = [
    {
      name: "Ivan Mbowa",
      role: "West Africa Program Lead",
      bio: "15+ years experience in tech education and workforce development across Africa.",
      image: "/Ivan.avif",
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
    {
      name: "Maria Addolorata Nyaga",
      role: "ATAN Associate Kenya",
      bio: "Former director at Microsoft Africa with expertise in scaling technical operations.",
      image: "/Maria.avif", // Replace with actual image path
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
    {
      name: "Emelia Dede Quist",
      role: "ATAN Associate - Ghana",
      bio: "Background in building university-industry collaborations across 12 African countries.",
      image: "/Emelia.avif", // Replace with actual image path
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
    {
      name: "Rhema Andah",
      role: "ATAN Associate",
      bio: "Former Google engineer specializing in technical workforce development programs.",
      image: "/Rhema.avif", // Replace with actual image path
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-orange text-2xl" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The <span className="text-orange">Team</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-orange mx-auto my-4"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Meet the experienced professionals dedicated to transforming
              Africa's tech talent landscape.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-80 mb-6 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-md shadow-xl border border-white/50 transition-all duration-300 group-hover:shadow-2xl group-hover:translate-y-[-5px]">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple/70 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-10"></div>

                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                ></div>

                {/* Frosted glass name card that slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-4 transform translate-y-0 group-hover:translate-y-[-30px] transition-transform duration-300 border-t border-white/50">
                  <h3 className="font-bold text-gray-900 text-lg">
                    {member.name}
                  </h3>
                  <p className="text-orange font-medium">{member.role}</p>
                </div>

                {/* Bio that appears on hover */}
                {/* <div className="absolute inset-0 flex items-center justify-center p-6 bg-purple/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="text-center">
                    <p className="text-white mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange transition-colors"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange transition-colors"
                      >
                        <FaTwitter size={24} />
                      </a>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Only visible on mobile */}
              <div className="block md:hidden">
                <p className="text-gray-600 text-sm">{member.bio}</p>
                <div className="flex space-x-3 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple hover:text-orange transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple hover:text-orange transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory board teaser - adds extra credibility */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border border-white/50"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Advisory Board
              </h3>
              <p className="text-gray-600 max-w-xl">
                Backed by industry leaders from Google, IBM, MTN Group, Stanford
                University, and the World Bank who share our vision for Africa's
                tech future.
              </p>
            </div>
            <img
              src="/atan-logo.png"
              alt="Advisory board organizations"
              className="h-16 mt-6 md:mt-0"
            />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Teams;
