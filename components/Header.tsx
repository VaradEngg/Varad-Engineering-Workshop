"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, navItems } from "@/lib/company";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  const smoothScrollToTop = (event?: React.MouseEvent<HTMLElement>) => {
    if (event && pathname === "/") {
      event.preventDefault();
    }

    window.scrollTo({
      top: 0,
      behavior: pathname === "/" ? "smooth" : "auto",
    });
  };

  const handleBrandClick = (event: React.MouseEvent<HTMLElement>) => {
    if (pathname === "/") {
      smoothScrollToTop(event);
      return;
    }

    smoothScrollToTop();
  };

  const productLinks = [
    { href: "/products/flat-broaches", label: "Flat Broaches" },
    { href: "/products/round-broaches", label: "Round Broaches" },
    { href: "/products/contract-broaching", label: "Contract Broaching" },
    {
      href: "/products/tooling-accessories-sharpening",
      label: "Tooling & Resharpening",
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200/80 transition-all ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"}`}
    >
      <div className="container-shell flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={handleBrandClick}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-slate-900 text-sm font-bold text-white">
            VE
          </div>
          <div>
            <div className="text-base font-semibold tracking-[0.22em] text-slate-900">
              VARAD
            </div>
            <div className="text-[10px] tracking-[0.24em] text-slate-500">
              ENGINEERING
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            if (item.label === "Products") {
              return (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 text-sm font-medium ${pathname.startsWith("/products") ? "text-slate-900" : "text-slate-700 hover:text-slate-900"}`}
                    aria-expanded={productsOpen}
                    aria-haspopup="menu"
                    onClick={() => setProductsOpen((open) => !open)}
                  >
                    Products <ChevronDown className="h-4 w-4" />
                  </button>

                  <div
                    className={`absolute left-0 top-12 w-80 overflow-hidden rounded-md border border-slate-200 bg-white p-3 shadow-soft transition-all duration-200 ease-out ${productsOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"}`}
                    aria-hidden={!productsOpen}
                  >
                    {productLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors duration-200 ${pathname === link.href ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"}`}
                        onClick={() => setProductsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  if (pathname === item.href) {
                    smoothScrollToTop(event);
                  }
                }}
                className={`text-sm font-medium ${pathname === item.href ? "text-slate-900" : "text-slate-700 hover:text-slate-900"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            Send an Enquiry
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell space-y-4 py-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Navigation
                </div>
                <div className="space-y-2">
                  {navItems
                    .filter((item) => item.label !== "Products")
                    .map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-md px-3 py-2 text-sm font-medium ${pathname === item.href ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-white hover:text-slate-900"}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  <Link
                    href="/privacy-policy"
                    className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-white hover:text-slate-900"
                  >
                    Privacy policy
                  </Link>
                </div>
              </div>

              <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Products
                </div>
                <div className="space-y-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-md px-3 py-2 text-sm ${pathname === link.href ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-white hover:text-slate-900"}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contact
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <div>{company.address}, {company.city}, {company.state}</div>
                {company.phone && <div className="font-semibold">Ph: {company.phone}</div>}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-900"
                >
                  Enquire today
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="block rounded-md bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
