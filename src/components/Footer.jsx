function Footer() {
  return (
    <footer className="border-t border-border bg-nav backdrop-blur-md mt-20">
      <div className="max-w-[1100px] mx-auto px-8 py-10 flex items-center justify-between gap-6 max-[768px]:flex-col max-[768px]:text-center">

        <span className="font-mono text-sm font-bold text-teal tracking-widest">
          WALID.DEV
        </span>

        <span className="font-mono text-[11px] font-bold text-muted tracking-[0.1em]">
          © {new Date().getFullYear()} WALID ABDULKADIR · ALL RIGHTS RESERVED
        </span>

        <span className="font-mono text-[11px] font-bold text-muted tracking-[0.1em]">
          BUILT WITH REACT · TAILWIND · VITE
        </span>

      </div>
    </footer>
  );
}

export default Footer;
