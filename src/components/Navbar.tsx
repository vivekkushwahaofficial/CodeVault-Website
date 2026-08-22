import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";

const GITHUB =
  "https://github.com/vivekkushwahaofficial/CodeVault";

const RELEASE_URL =
  "https://github.com/vivekkushwahaofficial/CodeVault/releases/latest";

const navItems = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Platforms",
    href: "#platforms",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Download",
    href: "#download",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* =====================================================
     SCROLL STATE
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ACTIVE SECTION
  ====================================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio,
          )[0];

        if (visibleSection?.target.id) {
          setActiveSection(
            `#${visibleSection.target.id}`,
          );
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     CLOSE MOBILE MENU
  ====================================================== */

  const closeMenu = () => {
    setIsOpen(false);
  };

  /* =====================================================
     INTERNAL NAVIGATION
  ====================================================== */

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      href,
    );

    closeMenu();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:px-8">
      <div
        className={[
          "mx-auto flex max-w-[1440px] items-center justify-between",
          "rounded-[24px] border px-4 py-3 sm:px-5",
          "transition-all duration-300",
          isScrolled
            ? "border-white/10 bg-zinc-950/85 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
            : "border-white/10 bg-zinc-950/55 backdrop-blur-xl",
        ].join(" ")}
      >
        {/* =================================================
            BRAND
        ================================================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="CodeVault home"
        >
          <img
            src="/logo.png"
            alt="CodeVault"
            className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
          />

          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            CodeVault
          </span>
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive =
              activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) =>
                  handleNavClick(
                    event,
                    item.href,
                  )
                }
                className={[
                  "relative rounded-xl px-4 py-2 text-sm",
                  "transition-colors duration-200",
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white",
                ].join(" ")}
              >
                {item.label}

                {/* Active underline */}
                <span
                  className={[
                    "absolute bottom-0 left-1/2 h-px -translate-x-1/2",
                    "bg-purple-400 transition-all duration-300",
                    isActive
                      ? "w-8 opacity-100"
                      : "w-0 opacity-0",
                  ].join(" ")}
                />
              </a>
            );
          })}

          {/* Privacy */}
          <Link
            to="/privacy"
            className="relative rounded-xl px-4 py-2 text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
          >
            Privacy
          </Link>
        </nav>

        {/* =================================================
            RIGHT ACTIONS
        ================================================== */}

        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View CodeVault on GitHub"
            className="group inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <FaGithub
              size={18}
              className="transition-transform duration-200 group-hover:scale-105"
            />
          </a>

          {/* Desktop Download */}
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-purple-400/40 hover:bg-white/[0.08] md:inline-flex"
          >
            <Download
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />

            <span>Download</span>

            <ArrowUpRight
              size={15}
              className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-purple-300"
            />
          </a>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() =>
              setIsOpen(
                (previous) => !previous,
              )
            }
            aria-label={
              isOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:bg-white/[0.07] hover:text-white md:hidden"
          >
            {isOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>
        </div>
      </div>

      {/* ===================================================
          MOBILE MENU
      ==================================================== */}

      {isOpen && (
        <div className="mx-auto mt-2 max-w-[1440px] overflow-hidden rounded-[22px] border border-white/10 bg-zinc-950/95 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-2xl md:hidden">
          <nav
            className="flex flex-col p-2"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => {
              const isActive =
                activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) =>
                    handleNavClick(
                      event,
                      item.href,
                    )
                  }
                  className={[
                    "rounded-xl px-4 py-3.5 text-sm",
                    "transition-colors duration-200",
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}

            <Link
              to="/privacy"
              onClick={closeMenu}
              className="rounded-xl px-4 py-3.5 text-sm text-zinc-400 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              Privacy
            </Link>

            <div className="my-1 border-t border-white/10" />

            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="m-1 inline-flex items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-400"
            >
              <Download size={16} />

              Download Extension

              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}