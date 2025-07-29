import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
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
  const [errors, setErrors] = useState<Partial<FormFields>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleValidate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData: FormFields = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      toast.loading("Sending message...", { id: "sending" });
      setSubmitting(true);
      form.submit(); // ✅ Let browser handle the form submission to FormSubmit
    } catch (err) {
      const yupError = err as Yup.ValidationError;
      const newErrors: Partial<FormFields> = {};
      if (yupError.inner) {
        yupError.inner.forEach((e) => {
          if (e.path) newErrors[e.path as keyof FormFields] = e.message;
        });
      }
      setErrors(newErrors);
      toast.error("Please fix the errors above.");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto font-mono text-terminal-green flex flex-col items-center px-4 sm:px-6">
      <form
        action="https://formsubmit.co/walidelbourdiney25@gmail.com"
        method="POST"
        onSubmit={handleValidate}
        className="w-full bg-terminal-dark-alt p-6 rounded-lg border border-terminal-green/40 flex flex-col gap-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_next"
          value="https://walid-ezzat-portfolio.vercel.app/thanks"
        />

        <label className="flex flex-col">
          Name
          <input
            type="text"
            name="name"
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green"
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
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green"
          />
          {errors.email && (
            <div className="text-red-400 text-xs mt-1">{errors.email}</div>
          )}
        </label>

        <label className="flex flex-col">
          Message
          <textarea
            name="message"
            rows={4}
            className="mt-1 p-2 rounded bg-terminal-dark text-terminal-green border border-terminal-green/20 focus:outline-none focus:ring-2 focus:ring-terminal-green"
          />
          {errors.message && (
            <div className="text-red-400 text-xs mt-1">{errors.message}</div>
          )}
        </label>

        <motion.button
          type="submit"
          disabled={submitting}
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 8px #00ff41",
            boxShadow: "0 0 12px #00ff41",
          }}
          className="mt-2 px-4 py-2 rounded bg-terminal-green text-black font-bold shadow hover:bg-accent-green transition-colors duration-200 border border-terminal-green"
        >
          {submitting ? "$ sending..." : "$ send-message"}
        </motion.button>
      </form>

      {/* Social Links */}
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
          className="underline text-accent-green"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/walidelbourdiney"
          target="_blank"
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
