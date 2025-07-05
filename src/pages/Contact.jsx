import { useState } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://axiino-backend.vercel.app/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });                                        

      const result = await res.json();
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen px-6 py-24 text-gray-900">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-500 text-lg">
          Have a project in mind or want to partner with us? We’d love to hear from you.
          Reach out and let's create something amazing together.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gradient-to-br from-blue-900 to-fuchsia-900 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg space-y-6"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-1">
            Mobile Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            pattern="[6-9]\d{9}"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="9876543210"
            required
            title="Enter a valid 10-digit mobile number"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tell us what you're thinking..."
            required
          />
        </div>

        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-fuchsia-700 transition"
          whileHover={{ scale: 1.05 }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        {status === "success" && (
          <p className="text-green-300 text-sm text-center mt-2">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-300 text-sm text-center mt-2">Failed to send message. Try again.</p>
        )}
      </motion.form>
    </section>
  );
}

export default Contact;
