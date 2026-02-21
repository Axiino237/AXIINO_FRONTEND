import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Shield, Lock, Globe, Database, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const BackgroundParticle = ({ size, top, left, duration, delay, smoothX, smoothY }) => {
  const [offsetX] = useState(() => Math.random() * 40 - 20);
  const [offsetY] = useState(() => Math.random() * 40 - 20);
  const x = useTransform(smoothX, [0, 1920], [-offsetX, offsetX]);
  const y = useTransform(smoothY, [0, 1080], [-offsetY, offsetY]);

  return (
    <motion.div
      className="absolute rounded-full bg-white/10"
      style={{
        width: size,
        height: size,
        top,
        left,
        x,
        y,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0.1, 0.4, 0.1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
};

const FloatingBackgroundIcon = ({ icon, top, left, delay, speed, index, smoothX, smoothY }) => {
  const x = useTransform(smoothX, [0, 1920], [(index % 2 === 0 ? 1 : -1) * 40, (index % 2 === 0 ? -1 : 1) * 40]);
  const y = useTransform(smoothY, [0, 1080], [(index % 3 === 0 ? 1 : -1) * 30, (index % 3 === 0 ? -1 : 1) * 30]);

  return (
    <motion.div
      className="absolute text-white/5"
      style={{
        top,
        left,
        x,
        y,
      }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {icon}
    </motion.div>
  );
};

const contactInfo = [
  { icon: <Mail size={22} />, label: "Email Us", value: "axiino237@gmail.com", subValue: "Replies within 2 hours" },
  { icon: <Phone size={22} />, label: "Call Us", value: "+91 7397349160", subValue: "Mon-Fri, 9am - 6pm EST" },
  { icon: <MapPin size={22} />, label: "Headquarters", value: "Chennai, Tamil Nadu", subValue: "India" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "Web Development",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Mouse move parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const floatingIcons = [
    { icon: <Mail size={22} />, top: '15%', left: '12%', delay: 0, speed: 22 },
    { icon: <Shield size={20} />, top: '25%', left: '88%', delay: 2, speed: 25 },
    { icon: <Lock size={22} />, top: '65%', left: '8%', delay: 4, speed: 20 },
    { icon: <Globe size={18} />, top: '85%', left: '75%', delay: 1, speed: 18 },
    { icon: <Database size={20} />, top: '45%', left: '90%', delay: 3, speed: 28 },
    { icon: <MessageSquare size={22} />, top: '10%', left: '75%', delay: 5, speed: 24 },
    { icon: <Cpu size={18} />, top: '40%', left: '5%', delay: 6, speed: 26 },
  ];

  const [dustParticles, setDustParticles] = useState([]);
  useEffect(() => {
    setDustParticles(Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    })));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const payloadMessage = `Service Interest: ${formData.service}\n\n${formData.message}`;
      const res = await fetch("http://localhost:3001/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: payloadMessage,
        }),
      });
      const result = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phoneNumber: "", service: "Web Development", message: "" });
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-5 py-4 rounded-xl bg-[#0f172a] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:bg-[#1e293b] transition-all duration-300 text-base shadow-inner";

  return (
    <div onMouseMove={handleMouseMove} className="w-full relative selection:bg-sky-500/30">
      {/* ── PERSISTENT BACKGROUND ELEMENTS ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dust Particles */}
        {dustParticles.map((p) => (
          <BackgroundParticle
            key={`dust-${p.id}`}
            {...p}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        ))}

        {/* Floating IT Icons */}
        {floatingIcons.map((item, i) => (
          <FloatingBackgroundIcon
            key={`icon-${i}`}
            {...item}
            index={i}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        ))}
      </div>

      <section className="relative w-full bg-[#050b14] text-white overflow-hidden pb-32 pt-40">
        {/* Background styling for contrast */}
        <div className="animated-grid absolute inset-0 opacity-40 mix-blend-screen" />
        <div className="orb absolute orb-blue w-[700px] h-[700px] -top-64 -left-64 opacity-20 blur-[150px]" />
        <div className="orb absolute orb-fuchsia w-[500px] h-[500px] -bottom-32 -right-32 opacity-20 blur-[120px]" />
        <div className="orb absolute orb-purple w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[100px]" />

        <div className="relative z-20 max-w-7xl mx-auto px-6">

          {/* Header directly animated instead of whileInView so it loads instantly */}
          <motion.div
            className="text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-400/40 bg-sky-950/50 text-sky-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(56,189,248,0.2)] mb-8"
              variants={fadeInUp}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-[pulse-glow_2s_infinite]" />
              Fast-Track Your Product
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-[1.1]">
              Let's Start a <br className="hidden md:block" />
              <span className="gradient-text pb-2 inline-block">Conversation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed">
              Fill out the form below or drop us an email. Our engineering leaders are ready to discuss your architecture, strategy, and roadmap.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

            {/* Contact Info Cards */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  className="card-glow p-6 rounded-2xl flex items-start gap-6 group cursor-default"
                  variants={fadeInUp}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                    <p className="text-white font-bold text-lg">{info.value}</p>
                    <p className="text-slate-400 text-sm mt-1">{info.subValue}</p>
                  </div>
                </motion.div>
              ))}

              {/* Decorative SLA card */}
              <motion.div
                className="p-8 rounded-2xl mt-8 border border-sky-500/30 bg-gradient-to-br from-[#0f172a] to-[#020617] relative overflow-hidden"
                variants={fadeInUp}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 blur-[50px] rounded-full" />
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="text-sky-400" size={24} />
                  <h4 className="text-white font-bold text-lg">Our Guarantee</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  When you reach out to Axiino, you won't get an automated bot response. You'll speak directly with a technical architect who understands your product requirements.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="lg:col-span-3 card-glow p-8 md:p-10 rounded-3xl space-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4">
                <h3 className="text-2xl font-bold text-white">Project Inquiry</h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">* All fields required</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="E.g. Elon Musk"
                    required
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="founder@startup.com"
                    required
                  />
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    pattern="[6-9]\d{9}"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="9876543210"
                    required
                    title="Enter a valid 10-digit mobile number"
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Primary Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputClass + " appearance-none"}
                    required
                  >
                    <option value="Web Development">Full-Stack Web Dev</option>
                    <option value="Mobile App">Mobile Application</option>
                    <option value="AI Integration">AI / LLM Integration</option>
                    <option value="Cloud Architecture">Cloud Architecture & DevOps</option>
                    <option value="UI/UX Design">Product UI/UX Design</option>
                    <option value="Other">Other Consulting Services</option>
                  </select>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={inputClass + " resize-none"}
                  placeholder="Describe your architecture requirements, timeline, and current challenges..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="glow-btn w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-sky-500 to-fuchsia-600 text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(192,132,252,0.5)] transition-all duration-300 disabled:opacity-50 mt-4"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                variants={fadeInUp}
              >
                {status === "loading" ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    />
                    Transmitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Secure Inquiry
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.p
                  className="text-[#34d399] font-bold text-base text-center bg-[#064e3b]/40 border border-[#059669]/50 rounded-xl py-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Transmission successful. An architect will contact you shortly.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  className="text-[#f87171] font-bold text-base text-center bg-[#7f1d1d]/40 border border-[#b91c1c]/50 rounded-xl py-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Transmission failed. Please verify your connection and try again.
                </motion.p>
              )}
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
