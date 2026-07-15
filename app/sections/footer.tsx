"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.png";
import Link from "next/link";
import Image from "next/image";
import sec from "@/public/metrics/sec.png";
import lcfe from "@/public/metrics/LCFE_LOGO2.png";
import afex from "@/public/metrics/AFEX LOGO.png";
import nepc from "@/public/metrics/nepc2.png";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const links = [
  { label: "FAQs", to: "/FAQs" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
];

  const handleNewsletterSub = async () => {
    if (!email || subStatus === "loading") return;
    setSubStatus("loading");
    try {
      // const res = await fetch("https://api-iportal.assetium.com/api/v1/newsletter/subscribe", {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });


    const responseData = await res.json();
      if (!res.ok) {
         if (responseData.message === "This email is already subscribed") {
        setSubStatus("error");
        toast.info("This email is already subscribed.");
        return;
      }

      throw new Error(responseData.message || "Subscription failed");
      }
      setSubStatus("success");
      setEmail("");
      toast.success("You're subscribed! Welcome to the Assetium newsletter.");
    } catch {
      setSubStatus("error");
      toast.error("Subscription failed. Please try again.");
    }
  };
  return (
    <div className="w-full bg-white py-8 md:py-14 px-4 md:px-5">
      {/* Floating Footer Container */}
      <footer className="max-w-7xl mx-auto bg-[#1a1a19] rounded-2xl shadow-[0_0_40px_rgba(193,69,17,0.25)] text-gray-200 overflow-hidden">
        {/* Newsletter */}
        <div className="px-6 md:px-8 py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-snug max-w-sm">
            Stay informed and never miss an update
          </h2>
          <div className="flex flex-col gap-1.5 w-full md:w-auto md:max-w-md">
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setSubStatus("idle"); }}
                onKeyDown={(e) => e.key === "Enter" && handleNewsletterSub()}
                className="w-full px-5 py-2.5 rounded-sm bg-[#262624] border border-[#333] text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c14511]"
              />
              <Button
                onClick={handleNewsletterSub}
                disabled={subStatus === "loading" || subStatus === "success"}
                className="ml-3 px-5 py-2.5 bg-[#c14511] text-white text-sm font-medium hover:opacity-90 transition whitespace-nowrap disabled:opacity-60"
              >
                {subStatus === "loading" ? "Subscribing…" : subStatus === "success" ? "Subscribed ✓" : "Subscribe"}
              </Button>
            </div>
            {subStatus === "error" && (
              <p className="text-[0.75rem] text-red-400">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>

        <div className="border-t border-[#2f2f2d]" />

        {/* Main Footer Grid */}
        <div className="px-6 md:px-8 py-10 md:py-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {/* Brand — full width on mobile, 2 cols on md */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={logo}
                alt="Assetium Logo"
                className="w-auto h-16 md:h-20"
              />
            </Link>
            <h4 className="text-white font-bold text-sm mb-2">
              Your Bridge To Value
            </h4>
            <p className="text-[0.8rem] leading-6 text-gray-400 max-w-xs">A diversified ecosystem driving financial optimization and growth across alternative investments and strategic solutions.</p>
          </div>

          {/* Who We Are */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white text-sm mb-4">
              Who We Are
            </h4>
            <ul className="">
              {[
                { label: "Board of Directors", href: "/board-of-directors" },
                {
                  label: "Our Leaders",
                  href: "/about-us",
                },
                { label: "Join Us", href: "/about-us/careers" },
                // { label: "Insights", href: "/media" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.8rem] text-gray-400 hover:text-[#c14511] transition-colors leading-6"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Business */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white text-sm mb-4">
              Our Subsidiaries
            </h4>
             <ul className="">
              {[
                { label:  "Asset Management", href: "/assetium-investment-managers" },
                { label: "Advisory Services", href: "/assetium-consult-limited" },
                                { label: "Barakah Farms", href: "/assetium-barakah-farms-limited" },
                {
                  label: "Commodity Broker",
                  href: "#",
                },
                { label: "Real Estate", href: "#" },

              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[0.8rem] text-gray-400 hover:text-[#c14511] transition-colors leading-6"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white text-sm mb-4">Address</h4>
            <ul className="space-y-3">
              <li className="flex flex-col gap-1">
                <span className="text-[0.75rem] font-bold text-gray-300">
                  → Abuja:
                </span>
                <span className="text-[0.75rem] text-gray-400 leading-5">
                  54, Nouakchott Street, Wuse 1
                  <br />
                  29, Nouakchott Street, Wuse 1
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[0.75rem] font-bold text-gray-300">
                  → Lagos:
                </span>
                <span className="text-[0.75rem] text-gray-400 leading-5">
                  1, Orisa Sanya, Oniru Estate, VI.
                </span>
              </li>
            </ul>
          </div>

          {/* Quicklinks + Regulators */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="font-semibold text-white text-sm mb-4">
              Quicklinks
            </h4>
            <p className="text-[0.75rem] text-gray-400 mb-3">
              Regulators & Licences:
            </p>
            <div className="flex items-center gap-1 flex-wrap mb-4">
              <Image src={sec} alt="SEC" className="h-10 w-10" />
              <Image src={lcfe} alt="LCFE" className="h-10 w-10" />
              <Image src={nepc} alt="NEPC" className="h-10 w-20" />
              <Image src={afex} alt="AFEX" className="h-10 w-auto" />
            </div>
            <ul className="">
              {links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.to}
                    className="text-[0.8rem] text-gray-400 hover:text-[#c14511] transition-colors leading-6"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-semibold text-white text-sm mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-col gap-1">
                <span className="text-[0.75rem] font-bold text-gray-300">
                  → Email:
                </span>
                <span className="text-[0.73rem] text-gray-400 leading-5 break-all">
                  customerexperience@assetium.com
                  <br />
                  info@assetium.com
                </span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[0.75rem] font-bold text-gray-300">
                  → Phone:
                </span>
                <span className="text-[0.75rem] text-gray-400 leading-5">
                  +234 (0) 701 485 5558
                  <br />
                  +234 (0) 911 369 7581
                </span>
              </li>
            </ul>
          </div>

          {/* YouTube embed */}
          <div className="col-span-2 md:col-span-2">
            <div className="rounded-xl overflow-hidden border border-[#2f2f2d]">
              <iframe
                className="w-full rounded-xl"
                height="200"
                src="https://www.youtube.com/embed/gpwVFFnCFXI?si=rkvgGlNg-rdXnC7F"
                title="Assetium — Latest Update"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#2f2f2d]" />

        {/* Bottom Bar */}
        <div className="px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span className="text-[0.8rem]">
            © 2026 Assetium. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {[
              {
                icon: "akar-icons:instagram-fill",
                href: "https://www.instagram.com/assetium_",
                label: "Instagram",
              },
              {
                icon: "uil:linkedin",
                href: "https://linkedin.com/company/assetium",
                label: "LinkedIn",
              },
              {
                icon: "proicons:x-twitter",
                href: "https://x.com/assetium_",
                label: "X / Twitter",
              },
              {
                icon: "fe:facebook",
                href: "https://facebook.com/assetium",
                label: "Facebook",
              },
              {
                icon: "fe:youtube",
                href: "https://youtube.com/@assetium_group",
                label: "YouTube",
              },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-500 hover:text-[#c14511] transition-colors"
              >
                <Icon icon={s.icon} width="24" height="24" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
