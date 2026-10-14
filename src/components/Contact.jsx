import { useState } from "react";
import {
  BsInstagram,
  BsYoutube,
  BsTelegram,
  BsGithub,
  BsTelephone,
  BsEnvelope,
  BsGeoAlt,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

const SOCIAL_LINKS = [
  { icon: <BsInstagram size={18} />, href: "https://www.instagram.com/walidjr_10?igsh=dHdoMnc2aTdyeXN2",   label: "Instagram" },
  { icon: <BsLinkedin  size={18} />, href: "https://linkedin.com/in/walid-abdulkadir-70529a2a2",   label: "Linkedin"   },
  { icon: <BsTelegram  size={18} />, href: "https://t.me/walidjr_10",   label: "Telegram"  },
  { icon: <BsGithub    size={18} />, href: "https://github.com/walidabdulkadir",   label: "GitHub"    },
  { icon: <BsTwitterX  size={18} />, href: "https://x.com/Walidjr_10",   label: "Twitter"   },
];

const INFO_ITEMS = [
  { icon: <BsTelephone size={18} />, label: "PHONE",    value: "+251 951 968 887"          },
  { icon: <BsEnvelope  size={18} />, label: "EMAIL",    value: "walidabdulkadir37@gmail.com" },
  { icon: <BsGeoAlt    size={18} />, label: "LOCATION", value: "Addis Ababa, Ethiopia"     },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to a backend or EmailJS
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="py-24 px-8 max-w-[1100px] mx-auto">

      {/* Section label */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-sm font-bold tracking-[0.25em] text-teal">
          CONTACT
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-[1.2fr_0.8fr] gap-12 items-start max-[768px]:grid-cols-1 max-[768px]:gap-8">

        {/* ── Form ── */}
        <div className="bg-card border border-border rounded-xl p-10 shadow-[0_4px_20px_var(--shadow)]">
          <h2 className="text-[28px] font-bold text-primary mb-7">LET'S CONNECT</h2>

          {sent && (
            <div className="mb-6 px-4 py-3 rounded-lg border border-teal bg-teal-light font-mono text-sm text-teal font-bold tracking-wide">
              ✓ Message sent — I'll get back to you soon!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name + Email row */}
            <div className="grid grid-cols-2 gap-6 mb-6 max-[500px]:grid-cols-1">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] font-bold tracking-[0.15em] text-teal">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 font-sans text-sm text-primary outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-light)] placeholder:text-muted"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[11px] font-bold tracking-[0.15em] text-teal">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 font-sans text-sm text-primary outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-light)] placeholder:text-muted"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 mb-8">
              <label className="font-mono text-[11px] font-bold tracking-[0.15em] text-teal">
                MESSAGE
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={6}
                className="w-full bg-bg border border-border rounded-lg px-4 py-3 font-sans text-sm text-primary outline-none transition-all duration-300 focus:border-teal focus:shadow-[0_0_0_3px_var(--teal-light)] placeholder:text-muted resize-y min-h-[150px]"
              />
            </div>

            <button
              type="submit"
              className="w-full font-mono font-bold text-[13px] tracking-[0.1em] px-6 py-3 rounded-md bg-teal text-btn-text border border-transparent transition-all duration-300 hover:bg-teal-dark hover:-translate-y-0.5 hover:shadow-lg"
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>

        {/* ── Info ── */}
        <div className="bg-card border border-border rounded-xl p-10 shadow-[0_4px_20px_var(--shadow)]">
          <h2 className="text-2xl font-bold text-primary mb-8">CONTACT INFO</h2>

          <div className="flex flex-col gap-7">
            {INFO_ITEMS.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <span className="text-teal mt-0.5">{icon}</span>
                <div>
                  <p className="font-mono text-[11px] font-bold tracking-[0.15em] text-teal mb-1">
                    {label}
                  </p>
                  <p className="text-[15px] text-primary">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-mono text-[11px] font-bold tracking-[0.15em] text-teal mb-4">
              CONNECT ON SOCIAL
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-bg border border-border text-muted transition-all duration-300 hover:border-teal hover:text-teal hover:bg-teal-light hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
