import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/about.json"; // replace with your Lottie file
import {
  Users,
  Target,
  ShieldCheck,
  Activity,
  BookOpenCheck,
  HeartHandshake,
} from "lucide-react";
import { useEffect, useState } from "react";

// Animation variants
const containerStagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AboutUs() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://axiino-backend.vercel.app/api/team-members")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch team members", err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 py-16 flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900 to-fuchsia-900 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="max-w-7xl w-full z-10 grid md:grid-cols-2 gap-10 items-center"
          variants={containerStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left px-4">
            <h1 className="text-5xl font-bold mb-6">
              About <span className="text-blue-500">Axiino</span>
            </h1>
            <p className="text-gray-300 text-lg">
              Axiino is a technology-first team delivering world-class solutions in web, mobile, and AI.
              We believe in creating products that not only work but inspire.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Lottie animationData={heroAnimation} loop={false} className="w-full h-[350px]"  />
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Team */}
<section className="bg-white text-blue-950 px-6 py-20">
  <motion.div
    className="text-center mb-16"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl font-bold">Meet Our Leadership</h2>
    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
      Visionaries who guide Axiino’s mission with clarity, innovation, and purpose.
    </p>
  </motion.div>

  <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          
          variants={containerStagger}
        >
          {loading ? (
            <p className="col-span-3 text-center text-gray-400">Loading team...</p>
          ) : teamMembers.length === 0 ? (
            <p className="col-span-3 text-center text-red-400">No team members found.</p>
          ) : (
            teamMembers.map((member, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-tr from-blue-50 to-purple-100 p-6 rounded-2xl text-center shadow hover:shadow-xl transition"
                variants={fadeInUp}
              >
                <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full mb-4 flex items-center justify-center text-2xl font-semibold text-blue-800">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full w-full h-full object-cover"
                    />
                  ) : (
                    member.name.charAt(0)
                  )}
                </div>
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <p className="text-sm text-gray-700">{member.designation}</p>
              </motion.div>
            ))
          )}
        </motion.div>
</section>


      {/* Our Mission */}
      <section className="bg-white text-blue-950 px-6 py-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To empower businesses through digital transformation by crafting scalable, intelligent,
            and user-centric software solutions.
          </p>
        </motion.div>
      </section>

      

      {/* Core Beliefs */}
      <section className="bg-gradient-to-br from-blue-900 to-fuchsia-900 text-white px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">What We Stand For</h2>
          <p className="text-gray-300 mt-2 max-w-xl mx-auto">
            Axiino was built on strong values — and they guide every project we take on.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: <Users size={32} />,
              title: "Teamwork",
              desc: "We believe collaboration leads to the best outcomes — for clients and for us.",
            },
            {
              icon: <Target size={32} />,
              title: "Precision",
              desc: "We pay attention to every detail to ensure product reliability and excellence.",
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "Integrity",
              desc: "Transparency and honesty form the foundation of our partnerships.",
            },
            {
              icon: <Activity size={32} />,
              title: "Innovation",
              desc: "We push boundaries and adopt new tech to solve real-world challenges.",
            },
            {
              icon: <BookOpenCheck size={32} />,
              title: "Learning",
              desc: "We stay curious, continuously evolving to deliver top-tier solutions.",
            },
            {
              icon: <HeartHandshake size={32} />,
              title: "Client Success",
              desc: "We succeed only when our clients do. Their goals become ours.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="inset-0 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:shadow-2xl transition group text-center"
              variants={itemVariant}
            >
              <div className="text-4xl text-white mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
<section className="bg-white text-blue-900 py-20 px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Minds Behind Axiino
        </motion.h2>
        <p className="mb-6 text-lg">
          Passionate engineers, designers, and thinkers — all aligned to build something meaningful.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-fuchsia-900 transition"
        >
          Get in Touch
        </a>
      </section>
    </>
  );
}

export default AboutUs;
