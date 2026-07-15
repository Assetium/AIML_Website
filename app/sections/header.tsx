// "use client";
// import React, { useState, useEffect } from "react";
// import logo from "@/public/logo.png";
// import Image from "next/image";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Command, CommandList } from "@/components/ui/command";
// import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";
// import { CommandGroup, CommandItem } from "cmdk";
// import { usePathname } from "next/navigation";

// import Link from "next/link";

// const Header = () => {
//   const PropertiesWebsite = process.env.NEXT_PUBLIC_PROPERTIES_WEBSITE_URL;

//   const pathname = usePathname();
//   // const isHomePage = pathname === "/";

//   const isAPL = pathname === `${PropertiesWebsite}`;

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState(false);

//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState("");

//   const [desktopOpen, setDesktopOpen] = React.useState(false);

//   console.log("isScrolled", isScrolled);
//   const navItems = [
//     { id: 1, text: "About Us", href: "/about-us" },
//     { id: 2, text: "Our Solutions", href: "/our-solutions" },
//     { id: 3, text: "Media", href: "/media" },
//     { id: 4, text: "Sustainability", href: "/sustainability" },
//     { id: 5, text: "Contact", href: "/contact" },
//     { id: 6, text: "Open Account", isButton: true, href: "/open-account" },
//   ];

//   const solutions = [
//     {
//       id: 1,
//       text: "Assetium Capital Management Limited",
//       href: "/assetium-capital-management-limited",
//     },
//     {
//       id: 2,
//       text: "Assetium Consult Limited",
//       href: "/assetium-consult-limited",
//     },
//     {
//       id: 3,
//       text: "Assetium Properties Limited",
//       href: `${PropertiesWebsite}`,
//     },
//     {
//       id: 4,
//       text: "Assetium Investment Managers",
//       href: "/assetium-investment-managers",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header>
//       <div
//         className={`fixed top-0 w-full max-w-screen-3xl z-50 xl:px-20 transition-colors px-5 lg:py-3 py-2 duration-300 bg-foreground shadow-md`}
//       >
//         <div className="flex w-full justify-between items-center h-10 text-[#444444] bg-transparent">
//           <Link href="/">
//             <Image src={logo} alt="Logo" className="2xl:h-14 w-auto h-8" />
//           </Link>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex items-center justify-center text-white uppercase">
//             {navItems.map((item) => {
//               const buttonText =
//                 isAPL && item.isButton ? "Book Now" : item.text;

//               return item.isButton ? (
//                 <li key={item.id} className="p-3">
//                   <Link href={item.href}>
//                     <Button
//                       size="sm"
//                       className="uppercase text-xs rounded-ss"
//                       // className="text-xs px-2 h-8 text-background border-none uppercase"
//                       variant={"default"}
//                     >
//                       {buttonText}
//                     </Button>
//                   </Link>
//                 </li>
//               ) : item.id === 2 ? (
//                 <li key={item.id} className="p-4 m-2">
//                   <div className="flex items-center text-xs cursor-pointer hover:opacity-85">
//                     <Link href={item.href}>OUR SOLUTIONS</Link>
//                     <Popover open={desktopOpen} onOpenChange={setDesktopOpen}>
//                       <PopoverTrigger asChild>
//                         <div
//                           role="combobox"
//                           aria-controls=""
//                           aria-expanded={desktopOpen}
//                         >
//                           {desktopOpen ? (
//                             <ChevronUp className="ml-2 h-6 w-6 shrink-0 opacity-50" />
//                           ) : (
//                             <ChevronDown className="ml-2 h-6 w-6 shrink-0 opacity-50" />
//                           )}
//                         </div>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-[200px] mt-2">
//                         <Command>
//                           <CommandList>
//                             <CommandGroup>
//                               {solutions.map((solution) => (
//                                 <Link
//                                   href={solution.href}
//                                   key={solution.id}
//                                   target="_blank"
//                                 >
//                                   <CommandItem
//                                     className="py-2 px-1 text-xs hover:bg-[#f1f1f1] cursor-pointer"
//                                     key={solution.id}
//                                     value={solution.text}
//                                     onSelect={(currentValue) => {
//                                       setValue(
//                                         currentValue === value
//                                           ? ""
//                                           : currentValue,
//                                       );
//                                       setOpen(false);
//                                     }}
//                                   >
//                                     {solution.text}
//                                   </CommandItem>
//                                 </Link>
//                               ))}
//                             </CommandGroup>
//                           </CommandList>
//                         </Command>
//                       </PopoverContent>
//                     </Popover>
//                   </div>
//                   {/*    <Menubar>
//                       <MenubarMenu>
//                         <MenubarTrigger className="text-black uppercase bg-transparent">
//                           {item.text}
//                           <span>
//                             <ChevronUp />
//                           </span>
//                         </MenubarTrigger>
//                         <MenubarContent>
//                           {solutions.map((solution) => (
//                             <MenubarItem key={solution.id}>
//                               <Link href={solution.href}>{solution.text}</Link>
//                             </MenubarItem>
//                           ))}
//                         </MenubarContent>
//                       </MenubarMenu>
//                     </Menubar> */}
//                 </li>
//               ) : (
//                 <li
//                   key={item.id}
//                   className="p-4 text-xs font-medium m-2 cursor-pointer duration-300 hover:opacity-85"
//                 >
//                   <Link href={item.href}>{item.text}</Link>
//                 </li>
//               );
//             })}
//           </ul>

//           {/* Mobile Navigation */}

//           <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//               {open ? (
//                 <X color="#ffffff" className="h-6 w-6 block lg:hidden" />
//               ) : (
//                 <Menu color="#ffffff" className="h-6 w-6 block lg:hidden" />
//               )}
//             </PopoverTrigger>
//             <PopoverContent className="p-6 my-3 border-0 rounded-none">
//               <Command>
//                 <CommandList>
//                   <CommandGroup>
//                     {navItems.map((navItem) => {
//                       const buttonText =
//                         isAPL && navItem.isButton ? "Book Now" : navItem.text;

//                       return navItem.isButton ? (
//                         <CommandItem
//                           className="p-3 text-sm"
//                           key={navItem.text}
//                           value={navItem.text}
//                           onSelect={(currentValue) => {
//                             setValue(
//                               currentValue === value ? "" : currentValue,
//                             );
//                             setOpen(false);
//                           }}
//                         >
//                           <Link href={navItem.href} className="w-full">
//                             <Button
//                               className="text-background uppercase text-sm"
//                               variant={"default"}
//                             >
//                               {buttonText}
//                             </Button>
//                           </Link>
//                         </CommandItem>
//                       ) : navItem.id === 2 ? (
//                         <CommandItem
//                           className="p-3 text-sm cursor-pointer"
//                           key={navItem.text}
//                           value={navItem.text}
//                         >
//                           <div className="flex items-center justify-start gap-1">
//                             <Link
//                               href={navItem.href}
//                               className="hover:font-semibold"
//                             >
//                               {navItem.text}
//                             </Link>
//                             <div onClick={() => setSubmenuOpen(!submenuOpen)}>
//                               {submenuOpen ? (
//                                 <ChevronUp size={16} strokeWidth={1} />
//                               ) : (
//                                 <ChevronDown size={16} strokeWidth={1} />
//                               )}
//                             </div>
//                           </div>

//                           {/* Conditionally render the solutions based on submenuOpen state */}
//                           {submenuOpen && (
//                             <ul className="pl-4 mt-2 space-y-2">
//                               {solutions.map((solution) => (
//                                 <li
//                                   key={solution.id}
//                                   className="text-sm mb-1 hover:font-semibold w-full"
//                                 >
//                                   <Link href={solution.href}>
//                                     {solution.text}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </CommandItem>
//                       ) : (
//                         <CommandItem
//                           className="p-3 text-sm cursor-pointer hover:font-semibold"
//                           key={navItem.text}
//                           value={navItem.text}
//                           onSelect={(currentValue) => {
//                             setValue(
//                               currentValue === value ? "" : currentValue,
//                             );
//                             setOpen(false);
//                           }}
//                         >
//                           <Link href={navItem.href}>{navItem.text}</Link>
//                         </CommandItem>
//                       );
//                     })}
//                   </CommandGroup>
//                 </CommandList>
//               </Command>
//             </PopoverContent>
//           </Popover>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState, useEffect } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

// ── Top bar business lines ─────────────────────────────────────────────────
const businessLines = [
  { label: "Asset Management", href: "/assetium-investment-managers" },
  { label: "Commodity Broker", href: "/assetium-capital-management-limited" },
  { label: "Barakah Farms", href: "/assetium-barakah-farms-limited" },
  { label: "Advisory Service", href: "/assetium-consult-limited" },
  {
    label: "Real Estate",
    href: `${process.env.NEXT_PUBLIC_PROPERTIES_WEBSITE_URL ?? "/assetium-properties-limited"}`,
  },
];

// ── Main nav links ─────────────────────────────────────────────────────────
const navItems = [
  { id: 1, text: "About Us", href: "/about-us" },
  { id: 2, text: "Our Solutions", href: "/our-solutions" },
  { id: 3, text: "Media", href: "/media" },
  { id: 4, text: "Careers", href: "/about-us/careers" },
  { id: 5, text: "Sustainability", href: "/sustainability" },
  { id: 6, text: "Contact", href: "/contact" },
];

// ──────────────────────────────────────────────────────────────────────────
const Header = () => {
  const pathname = usePathname();
  const PropertiesWebsite = process.env.NEXT_PUBLIC_PROPERTIES_WEBSITE_URL;
  const isAPL = pathname === PropertiesWebsite;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 max-w-screen-3xl mx-auto">
      {/* ── Top bar ── */}
      <div className="bg-[#313131] border-b border-white/[0.07] hidden md:block w-full">
        <div className="max-w-screen-3xl mx-auto px-5 xl:px-20 flex items-center justify-end h-7 divide-x divide-white/[0.1]">
          {businessLines.map((b, i) => (
            <Link
              key={i}
              href={b.href}
              className={`text-[10px] font-medium uppercase tracking-widest transition-colors duration-200 px-4 last:pr-0 ${
                pathname === b.href
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {b.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Main nav ── */}
      <div
        className={`bg-[#f4f4f4] border-b border-black/[0.07] transition-shadow duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-screen-3xl mx-auto px-5 xl:px-20 flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="Assetium" className="h-8 2xl:h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-[14px] font-medium px-3.5 py-2 transition-colors duration-200 whitespace-nowrap ${
                  pathname === item.href
                    ? "text-brand"
                    : "text-[#1a1919]/60 hover:text-[#1a1919]"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 z-10">
            <Link
              href="/login"
              className="text-[14px] font-medium px-4 py-2 text-[#1a1919]/60 hover:text-[#1a1919] transition-colors duration-200"
            >
              Login
            </Link>
            <Link href="/open-account">
              <Button
                size="sm"
                variant="default"
                className="text-[13px] font-medium rounded-sm"
              >
                {isAPL ? "Book Now" : "Open account"}
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#1a1919] p-1"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/[0.06] px-5 py-6 flex flex-col gap-1 shadow-lg">
          {/* Business lines — mobile */}
          <div className="mb-4">
            <p className="text-[9px] font-black text-[#1a1919]/30 uppercase tracking-[0.3em] mb-3">
              Our Businesses
            </p>
            <div className="flex flex-col gap-1">
              {businessLines.map((b, i) => (
                <Link
                  key={i}
                  href={b.href}
                  className={`text-[13px] font-medium py-2 border-b border-black/[0.05] transition-colors duration-200 ${
                    pathname === b.href
                      ? "text-brand"
                      : "text-[#1a1919]/50 hover:text-[#1a1919]"
                  }`}
                >
                  {b.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Main nav — mobile */}
          <div className="mb-4">
            <p className="text-[9px] font-black text-[#1a1919]/30 uppercase tracking-[0.3em] mb-3">
              Navigation
            </p>
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`text-[13px] font-medium py-2.5 border-b border-black/[0.05] transition-colors duration-200 ${
                    pathname === item.href
                      ? "text-brand"
                      : "text-[#1a1919]/60 hover:text-[#1a1919]"
                  }`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Login + CTA — mobile */}
          <div className="flex flex-col gap-3 mt-2">
            <Link
              href="/login"
              className="text-[13px] font-medium text-center py-2.5 border border-black/[0.08] rounded-sm text-[#1a1919]/60 hover:text-[#1a1919] transition-colors duration-200"
            >
              Login
            </Link>
            <Link href="/open-account">
              <Button
                variant="default"
                className="w-full text-[13px] font-medium rounded-sm"
              >
                {isAPL ? "Book Now" : "Open account"}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
