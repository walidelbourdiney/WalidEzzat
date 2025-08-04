import React, { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

type FormFields = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      setSubmitting(true);

      toast.loading("Sending message...", { id: "sending" });

      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);
      form.append("_captcha", "false");
      form.append("_template", "box");

      const response = await fetch(
        "https://formsubmit.co/ajax/walidelbourdiney25@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Message sent successfully!", { id: "sending" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.", {
          id: "sending",
        });
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: Partial<FormFields> = {};
        err.inner.forEach((error) => {
          if (error.path) {
            newErrors[error.path as keyof FormFields] = error.message;
          }
        });
        setErrors(newErrors);
        toast.error("Please fix the errors above.");
      } else {
        toast.error("Failed to send message. Please try again.", {
          id: "sending",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto font-mono text-terminal-green flex flex-col items-center px-2 sm:px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-terminal-dark-alt p-4 sm:p-6 rounded-lg border border-terminal-green/40 flex flex-col gap-3 sm:gap-4"
      >
        <label className="flex flex-col">
          <span className="text-sm sm:text-base">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green text-sm w-full"
          />
          {errors.name && (
            <div className="text-red-400 text-xs mt-1">{errors.name}</div>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm sm:text-base">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green text-sm w-full"
          />
          {errors.email && (
            <div className="text-red-400 text-xs mt-1">{errors.email}</div>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm sm:text-base">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green text-sm resize-vertical w-full"
          />
          {errors.message && (
            <div className="text-red-400 text-xs mt-1">{errors.message}</div>
          )}
        </label>

        <motion.button
          type="submit"
          disabled={submitting}
          whileTap={{ scale: 0.95 }}
          whileHover={
            !submitting
              ? {
                  scale: 1.05,
                  textShadow: "0 0 8px #00ff41",
                  boxShadow: "0 0 12px #00ff41",
                }
              : {}
          }
          className="mt-2 px-4 py-2 rounded bg-terminal-green text-black font-bold shadow hover:bg-accent-green transition-colors duration-200 border border-terminal-green disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {submitting ? "$ sending..." : "$ send-message"}
        </motion.button>
      </form>

      <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-6 justify-center text-xs sm:text-sm">
        <a
          href="mailto:walidelbourdiney25@gmail.com"
          className="underline text-accent-green hover:text-terminal-green transition-colors"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/walid-ezzat/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-accent-green hover:text-terminal-green transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/walidelbourdiney"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-accent-green hover:text-terminal-green transition-colors"
        >
          GitHub
        </a>
      </div>

      <div className="mt-4 sm:mt-6 text-accent-green text-center text-xs sm:text-sm break-words">
        git clone &lt;my-skills&gt; && npm install me
      </div>
    </div>
  );
};

export default ContactForm;
