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
      form.append("_next", "https://walid-ezzat-portfolio.vercel.app/thanks");

      const response = await fetch(
        "https://formsubmit.co/walidelbourdiney25@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!", { id: "sending" });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          window.location.href =
            "https://walid-ezzat-portfolio.vercel.app/thanks";
        }, 1500);
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
        className="w-full bg-terminal-dark-alt p-6 rounded-lg border border-terminal-green/40 flex flex-col gap-4"
      >
        <label className="flex flex-col">
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green text-sm"
          />
          {errors.name && (
            <div className="text-red-400 text-xs mt-1">{errors.name}</div>
          )}
        </label>

        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green text-sm"
          />
          {errors.email && (
            <div className="text-red-400 text-xs mt-1">{errors.email}</div>
          )}
        </label>

        <label className="flex flex-col">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green text-sm resize-vertical"
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
          className="mt-2 px-4 py-2 rounded bg-terminal-green text-black font-bold shadow hover:bg-accent-green transition-colors duration-200 border border-terminal-green disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "$ sending..." : "$ send-message"}
        </motion.button>
      </form>

      <div className="flex flex-wrap gap-6 mt-6 justify-center text-sm">
        <a
          href="mailto:walidelbourdiney25@gmail.com"
          className="underline text-accent-green"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/walid-ezzat/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-accent-green"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/walidelbourdiney"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-accent-green"
        >
          GitHub
        </a>
      </div>

      <div className="mt-6 text-accent-green text-center text-sm">
        git clone &lt;my-skills&gt; && npm install me
      </div>
    </div>
  );
};

export default ContactForm;
