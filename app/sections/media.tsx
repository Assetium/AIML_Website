"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import videoData from "@/app/data/videoData";
import { GallerySkeleton } from "../components/skeleton-loaders/image-gallery";

// ── Types ──────────────────────────────────────────────────────────────────
type BlogItem = {
  id: string;
  title: string;
  category: string;
  date?: string;
  headerImage?: string;
  additionalImageOne?: string | null;
  additionalImageTwo?: string | null;
  contentOne: string;
  contentTwo?: string;
  author?: string;
  subsidiary?: string;
  isFeatured?: boolean;
  readTime?: string | null;
  link?: string;
};

// ── Categories — must match API values (lowercase) ──────────────────────────
const CATEGORIES = ["all", "Insights", "csr", "Newspaper"];
const CATEGORY_LABELS: Record<string, string> = {
  all: "ALL",
  Insights: "BLOGS",
  Newspaper: "PRESS RELEASE",
  csr: "CORPORATE SOCIAL RESPONSIBILITY (CSR)",
};


const fetchCloudinaryImages = async () => {
  const res = await fetch('/api/gallery-images');
  console.log('Fetch response:', res); // Debug log
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};



// ── Events ─────────────────────────────────────────────────────────────────
const events = [
  {
    title: "ATC Tranche 2 — Investor Briefing",
    date: "Apr 15, 2025",
    location: "Abuja, Nigeria",
    type: "upcoming",
    description:
      "Quarterly update for all ATC Tranche 2 members on cycle progress and harvest timeline.",
  },
  {
    title: "Assetium Annual Investment Summit",
    date: "Jun 20, 2025",
    location: "Lagos, Nigeria",
    type: "upcoming",
    description:
      "The group's flagship annual gathering — bringing together members, partners, and industry leaders.",
  },
  {
    title: "Farmers Engagement Workshop",
    date: "Feb 10, 2025",
    location: "Abuja, Nigeria",
    type: "past",
    description:
      "Hands-on workshop connecting enrolled farmers with agronomic support and input suppliers.",
  },
  {
    title: "ATC Tranche 1 — Payout Ceremony",
    date: "Dec 5, 2024",
    location: "Abuja, Nigeria",
    type: "past",
    description:
      "Official close of Tranche 1. Capital and profits returned to all participating members.",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────
function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").slice(0, 140) + "...";
}

function formatDate(dateStr?: string) {
  if (!dateStr) return "—";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// ── Main tabs ──────────────────────────────────────────────────────────────
const MAIN_TABS = ["Newsletter", "Videos", "Gallery", "Events"];

// ══════════════════════════════════════════════════════════════════════════
export default function MediaPage() {
  const [mainTab, setMainTab] = useState("Newsletter");
  const [category, setCategory] = useState("all");
  const [items, setItems] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<BlogItem | null>(null);
  const [galleryPhotos, setGalleryPhotos] = useState<Array<{ src: string; caption: string }>>([]);
  const [galleryLoading, setGalleryLoading] = useState(false); // Add this
  // const [allImages, setAllImages] = useState<Array<{src: string; caption: string}>>([]);

  // Video state
  const [videoTab, setVideoTab] = useState(videoData[0].id);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Gallery lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  //Photo images from cloudinary
  useEffect(() => {
    const loadImages = async () => {
      try {
        setGalleryLoading(true);
        const images = await fetchCloudinaryImages();
       const shuffled = images.sort(() => Math.random() - 0.5);
      setGalleryPhotos(shuffled);

      } catch (error) {
        console.error('Failed to load images:', error);
      } finally {
         setGalleryLoading(false);
      }
    };


    loadImages();
    
  }, []);

  // Load once
// useEffect(() => {
//   const loadImages = async () => {
//     try {
//       const images = await fetchCloudinaryImages();
//       setAllImages(images);
//     } catch (error) {
//       console.error('Failed to load images:', error);
//     }
//   };
//   loadImages();
// }, []);

// // Shuffle when Gallery tab is clicked
// useEffect(() => {
//   if (mainTab === "Gallery" && allImages.length > 0 && galleryPhotos.length === 0) {
//     setGalleryLoading(true);
    
//     setTimeout(() => {
//       const shuffled = [...allImages].sort(() => Math.random() - 0.5);
//       setGalleryPhotos(shuffled);
//       setGalleryLoading(false);
//     }, 100);
//   }
// }, [mainTab, allImages, galleryPhotos.length]);


// console.log("Gallery photos:", galleryPhotos); // Debug log
  // Fetch blog posts
  useEffect(() => {
    if (mainTab !== "Newsletter") return;
    setLoading(true);
    setError("");
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/blog`)
      .then((res) => {
        const data: BlogItem[] = res.data.data.map((item: BlogItem) => ({
          id: item.id,
          title: item.title,
          category: item.category,
          date: item.date,
          headerImage: item.headerImage,
          additionalImageOne: item.additionalImageOne,
          additionalImageTwo: item.additionalImageTwo,
          contentOne: item.contentOne,
          contentTwo: item.contentTwo,
          author: item.author,
          subsidiary: item.subsidiary,
          isFeatured: item.isFeatured,
          readTime: item.readTime,
          link: item.link,
        }));
        // Deduplicate
        const seen = new Set<string>();
        setItems(
          data.filter((item) => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
          }),
        );
      })
      .catch(() => setError("Failed to load content. Please try again."))
      .finally(() => setLoading(false));
  }, [mainTab]);

  // Filter by category
  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);

   

  const activeSubsidiary = videoData.find((v) => v.id === videoTab)!;

  // ── Article read view ────────────────────────────────────────────────────
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        {/* Article hero */}
        <div className="relative h-[50vh] overflow-hidden">
          <img
            src={selectedArticle.headerImage}
            alt={selectedArticle.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-10 max-w-[860px] mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-brand text-white">
                {CATEGORY_LABELS[selectedArticle.category] ??
                  selectedArticle.category}
              </span>
              {selectedArticle.readTime && (
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  {selectedArticle.readTime} min read
                </span>
              )}
            </div>
            <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest mb-3">
              {formatDate(selectedArticle.date)}
              {selectedArticle.author && ` · ${selectedArticle.author}`}
            </p>
            <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black text-white leading-tight">
              {selectedArticle.title}
            </h1>
          </div>
        </div>

        {/* Back button */}
        <div className="max-w-[860px] mx-auto px-4 md:px-8 pt-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-2 text-[12px] font-bold text-[#1a1919]/40 hover:text-brand transition-colors duration-200 uppercase tracking-wider mb-8"
          >
            <svg
              className="w-3.5 h-3.5 rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="12" x2="20" y2="12" />
              <polyline points="14 6 20 12 14 18" />
            </svg>
            Back to Media
          </button>

          {/* Article body */}
          <article
            className="prose prose-sm md:prose-base max-w-none prose-headings:font-bold prose-headings:text-[#1a1919] prose-p:text-[#1a1919]/70 prose-p:leading-relaxed prose-strong:text-[#1a1919] pb-8"
            dangerouslySetInnerHTML={{ __html: selectedArticle.contentOne }}
          />

          {/* Additional images */}
          {(selectedArticle.additionalImageOne ||
            selectedArticle.additionalImageTwo) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {selectedArticle.additionalImageOne && (
                  <img
                    src={selectedArticle.additionalImageOne}
                    alt=""
                    className="rounded-xl w-full object-cover"
                  />
                )}
                {selectedArticle.additionalImageTwo && (
                  <img
                    src={selectedArticle.additionalImageTwo}
                    alt=""
                    className="rounded-xl w-full object-cover"
                  />
                )}
              </div>
            )}

          {/* contentTwo if exists */}
          {selectedArticle.contentTwo && (
            <article
              className="prose prose-sm md:prose-base max-w-none prose-headings:font-bold prose-headings:text-[#1a1919] prose-p:text-[#1a1919]/70 prose-p:leading-relaxed pb-24"
              dangerouslySetInnerHTML={{ __html: selectedArticle.contentTwo }}
            />
          )}
        </div>
      </div>
    );
  }

  // ── Main page ─────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ── */}
      <div className="relative bg-[#111110] px-4 md:px-8 pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand/[0.07] blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="block w-6 h-[2px] bg-brand rounded-full" />
                <span className="text-brand text-[11px] font-bold uppercase tracking-[0.22em]">
                  Media
                </span>
              </div>
              <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black text-white leading-tight">
                Stories, Insights &amp;
                <br />
                <span className="text-brand">Updates.</span>
              </h1>
            </div>
            <p className="text-[.8rem] leading-relaxed text-white/50 max-w-sm md:text-right">
              Everything happening at Assetium — from farm updates and
              investment insights to events, press coverage, and team stories.
            </p>
          </div>

          {/* Main tab bar */}
          <div className="flex gap-1 mt-12 bg-white/[0.05] border border-white/[0.08] rounded-xl p-1.5 w-fit">
            {MAIN_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setMainTab(tab)}
                className={`px-5 py-2.5 rounded-lg text-[12px] font-semibold transition-all duration-200 ${mainTab === tab
                    ? "bg-brand text-white"
                    : "text-white/40 hover:text-white/70"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab content ── */}
      <div className="px-4 md:px-8 py-16 max-w-[1280px] mx-auto">
        {/* ── NEWSLETTER ── */}
        {mainTab === "Newsletter" && (
          <div className="flex flex-col gap-8">
            {/* Category filter */}
            <div className="flex flex-wrap gap-2 bg-[#faf9f7] border border-black/[0.06] rounded-xl p-1.5 w-fit">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2.5 rounded-lg text-[12px] font-semibold transition-all duration-200 ${category === cat
                      ? "bg-white text-[#1a1919] shadow-sm border border-black/[0.07]"
                      : "text-[#1a1919]/40 hover:text-[#1a1919]/70"
                    }`}
                >
                  {CATEGORY_LABELS[cat]}
                </button>
              ))}
            </div>

            {/* Loading */}
            {loading && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-[#faf9f7] rounded-2xl h-72 animate-pulse"
                  />
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="text-center py-16 text-[#1a1919]/40 text-[.8rem]">
                {error}
              </div>
            )}

            {/* Cards */}
            {!loading && !error && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredItems.length === 0 ? (
                  <div className="col-span-3 text-center py-16 text-[#1a1919]/40 text-[.8rem]">
                    No items found for this category.
                  </div>
                ) : (
                  filteredItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setSelectedArticle(item);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group text-left bg-white border border-black/[0.07] rounded-2xl overflow-hidden hover:border-brand/25 hover:shadow-[0_8px_40px_rgba(193,69,17,0.08)] transition-all duration-300 flex flex-col"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-[#faf9f7]">
                        {item.headerImage && (
                          <img
                            src={item.headerImage}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full">
                          {CATEGORY_LABELS[item.category] ?? item.category}
                        </span>
                        {item.isFeatured && (
                          <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest text-brand bg-white px-2.5 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Body */}
                      <div className="flex flex-col gap-3 p-5 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[10px] font-bold text-[#1a1919]/35 uppercase tracking-widest">
                            {formatDate(item.date)}
                          </p>
                          {item.author && (
                            <>
                              <span className="text-[#1a1919]/20">·</span>
                              <p className="text-[10px] text-[#1a1919]/35">
                                {item.author}
                              </p>
                            </>
                          )}
                        </div>
                        <h3 className="text-[14px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors duration-300 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[.78rem] leading-relaxed text-[#1a1919]/50 line-clamp-3 flex-1">
                          {stripHtml(item.contentOne)}
                        </p>
                        <div className="flex items-center justify-between mt-1">
                          <div className="flex items-center gap-1.5 text-[11px] font-bold text-brand">
                            Read More
                            <svg
                              className="w-3.5 h-3.5"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="4" y1="12" x2="20" y2="12" />
                              <polyline points="14 6 20 12 14 18" />
                            </svg>
                          </div>
                          {item.readTime && (
                            <span className="text-[10px] text-[#1a1919]/30">
                              {item.readTime} min read
                            </span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        )}

        {/* ── VIDEOS ── */}
        {mainTab === "Videos" && (
          <div className="flex flex-col gap-8">
            {/* Subsidiary tabs */}
            <div className="flex flex-wrap gap-2 bg-[#faf9f7] border border-black/[0.06] rounded-xl p-1.5 w-fit">
              {videoData.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setVideoTab(v.id);
                    setActiveVideoId(null);
                  }}
                  className={`px-5 py-2.5 rounded-lg text-[12px] font-semibold transition-all duration-200 ${videoTab === v.id
                      ? "bg-white text-[#1a1919] shadow-sm border border-black/[0.07]"
                      : "text-[#1a1919]/40 hover:text-[#1a1919]/70"
                    }`}
                >
                  {v.shortLabel}
                </button>
              ))}
            </div>

            {/* Active player */}
            {activeVideoId && (
              <div className="flex flex-col gap-3">
                <div
                  className="relative w-full rounded-2xl overflow-hidden bg-black"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                    title="Video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <button
                  onClick={() => setActiveVideoId(null)}
                  className="self-start inline-flex items-center gap-2 text-[11px] font-bold text-[#1a1919]/40 hover:text-brand transition-colors uppercase tracking-wider"
                >
                  ✕ Close Player
                </button>
              </div>
            )}

            {/* Video grid */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="block w-6 h-[2px] rounded-full"
                  style={{ backgroundColor: activeSubsidiary.color }}
                />
                <h3 className="text-[13px] font-bold text-[#1a1919]">
                  {activeSubsidiary.label}
                </h3>
                <span className="text-[11px] text-[#1a1919]/30">
                  {activeSubsidiary.videos.length} videos
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {activeSubsidiary.videos.map((video, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVideoId(video.id)}
                    className={`group text-left rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${activeVideoId === video.id
                        ? "border-brand/40 shadow-[0_4px_24px_rgba(193,69,17,0.12)]"
                        : "border-black/[0.07] hover:border-brand/25 hover:shadow-[0_4px_20px_rgba(193,69,17,0.07)]"
                      }`}
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative overflow-hidden bg-[#111110]"
                      style={{ paddingBottom: "56.25%" }}
                    >
                      <img
                        src={
                          video.thumbnail ||
                          `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
                        }
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                      />
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${activeVideoId === video.id
                              ? "bg-brand"
                              : "bg-black/50 group-hover:bg-brand"
                            }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-5 h-5 ml-0.5"
                          >
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                      {/* Category pill */}
                      <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                        {video.category}
                      </span>
                      {video.date && (
                        <span className="absolute bottom-3 right-3 text-[9px] font-bold text-white/50">
                          {video.date}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4 bg-white flex flex-col gap-1">
                      <h4 className="text-[13px] font-bold text-[#1a1919] leading-snug group-hover:text-brand transition-colors duration-200">
                        {video.title}
                      </h4>
                      {video.description && (
                        <p className="text-[.75rem] text-[#1a1919]/45 leading-relaxed line-clamp-2">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── GALLERY ── */}
        {mainTab === "Gallery" && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="text-[.8rem] text-[#1a1919]/50">
                {galleryPhotos.length} photos — click any to view full size
              </p>
              <a
                href="#"
                className="text-[12px] font-bold text-brand uppercase tracking-wider hover:text-brand/70 transition-colors"
              >
                View All →
              </a>
            </div>

            {/* Editorial grid — first photo hero, rest smaller */}
            {galleryLoading ? (
              <GallerySkeleton />
            ) : (
              <div className="flex flex-col gap-3">
                {/* Row 1 — hero + 2 stacked */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
                  {/* Hero */}
                  {galleryPhotos[0] && (
                    <button
                      onClick={() => setLightboxIndex(0)}
                      className="group relative rounded-xl overflow-hidden h-[420px]"
                    >
                      <img
                        src={galleryPhotos[0].src}
                        alt={galleryPhotos[0].caption}
                        loading="eager"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                        <p className="w-full px-4 py-3 text-[12px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {galleryPhotos[0].caption}
                        </p>
                      </div>
                    </button>
                  )}
                  {/* Two stacked right */}
                  <div className="flex flex-col gap-3">
                    {[1, 2].map(
                      (idx) =>
                        galleryPhotos[idx] && (
                          <button
                            key={idx}
                            onClick={() => setLightboxIndex(idx)}
                            className="group relative rounded-xl overflow-hidden h-[200px]"
                          >
                            <img
                              src={galleryPhotos[idx].src}
                              alt={galleryPhotos[idx].caption}
                              loading="eager"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                              <p className="w-full px-3 py-2 text-[11px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {galleryPhotos[idx].caption}
                              </p>
                            </div>
                          </button>
                        ),
                    )}
                  </div>
                </div>

                {/* Row 2 — 4 equal */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[3, 4, 5, 6].map(
                    (idx) =>
                      galleryPhotos[idx] && (
                        <button
                          key={idx}
                          onClick={() => setLightboxIndex(idx)}
                          className="group relative rounded-xl overflow-hidden h-[180px]"
                        >
                          <img
                            src={galleryPhotos[idx].src}
                            alt={galleryPhotos[idx].caption}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                            <p className="w-full px-3 py-2 text-[11px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              {galleryPhotos[idx].caption}
                            </p>
                          </div>
                        </button>
                      ),
                  )}
                </div>

                {/* Row 3 — 1 wide + 2 equal */}
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-3">
                  <div className="flex flex-col gap-3">
                    {[7, 8].map(
                      (idx) =>
                        galleryPhotos[idx] && (
                          <button
                            key={idx}
                            onClick={() => setLightboxIndex(idx)}
                            className="group relative rounded-xl overflow-hidden h-[160px]"
                          >
                            <img
                              src={galleryPhotos[idx].src}
                              alt={galleryPhotos[idx].caption}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                              <p className="w-full px-3 py-2 text-[11px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                {galleryPhotos[idx].caption}
                              </p>
                            </div>
                          </button>
                        ),
                    )}
                  </div>
                  {galleryPhotos[9] && (
                    <button
                      onClick={() => setLightboxIndex(9)}
                      className="group relative rounded-xl overflow-hidden h-[332px]"
                    >
                      <img
                        src={galleryPhotos[9].src}
                        alt={galleryPhotos[9].caption}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                        <p className="w-full px-4 py-3 text-[12px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {galleryPhotos[9].caption}
                        </p>
                      </div>
                    </button>
                  )}
                </div>

                {/* Row 4 — 3 equal (remaining photos up to index 12) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[10, 11, 12].map(
                    (idx) =>
                      galleryPhotos[idx] && (
                        <button
                          key={idx}
                          onClick={() => setLightboxIndex(idx)}
                          className="group relative rounded-xl overflow-hidden h-[220px]"
                        >
                          <img
                            src={galleryPhotos[idx].src}
                            alt={galleryPhotos[idx].caption}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                            <p className="w-full px-3 py-2 text-[11px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              {galleryPhotos[idx].caption}
                            </p>
                          </div>
                        </button>
                      ),
                  )}
                </div>

                {/* Row 5 — remaining photos (13+) in uniform 4-col grid */}
                {galleryPhotos.length > 13 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {galleryPhotos.slice(13).map((photo, i) => (
                      <button
                        key={i + 13}
                        onClick={() => setLightboxIndex(i + 13)}
                        className="group relative rounded-xl overflow-hidden h-[180px]"
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                          <p className="w-full px-3 py-2 text-[11px] font-semibold text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            {photo.caption}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
            {/* Lightbox */}
            {lightboxIndex !== null && (
              <div
                className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center px-4"
                onClick={() => setLightboxIndex(null)}
              >
                <button
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  onClick={() => setLightboxIndex(null)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <button
                  className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      (lightboxIndex - 1 + galleryPhotos.length) %
                      galleryPhotos.length,
                    );
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 rotate-180"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </button>

                <div
                  className="flex flex-col items-center gap-4 max-w-4xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={galleryPhotos[lightboxIndex].src}
                    alt={galleryPhotos[lightboxIndex].caption}
                    className="w-full max-h-[78vh] object-contain rounded-xl"
                  />
                  <p className="text-white/60 text-[13px]">
                    {galleryPhotos[lightboxIndex].caption}
                  </p>
                  <p className="text-white/25 text-[11px]">
                    {lightboxIndex + 1} / {galleryPhotos.length}
                  </p>
                </div>

                <button
                  className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(
                      (lightboxIndex + 1) % galleryPhotos.length,
                    );
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <polyline points="14 6 20 12 14 18" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── EVENTS ── */}
        {mainTab === "Events" && (
          <div className="flex flex-col gap-10">
            {/* Upcoming */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                <h3 className="text-[14px] font-bold text-[#1a1919] uppercase tracking-widest">
                  Upcoming Events
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {events
                  .filter((e) => e.type === "upcoming")
                  .map((ev, i) => (
                    <div
                      key={i}
                      className="bg-white border border-black/[0.07] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-brand/25 hover:shadow-[0_4px_24px_rgba(193,69,17,0.07)] transition-all duration-300"
                    >
                      <div className="bg-brand/[0.08] border border-brand/15 rounded-xl px-4 py-3 text-center flex-shrink-0 w-20">
                        <p className="text-brand text-[10px] font-bold uppercase tracking-wider">
                          {ev.date.split(" ")[0]}
                        </p>
                        <p className="text-[#1a1919] text-[1.4rem] font-black leading-none">
                          {ev.date.split(" ")[1].replace(",", "")}
                        </p>
                        <p className="text-[#1a1919]/40 text-[10px] font-bold">
                          {ev.date.split(" ")[2]}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <h4 className="text-[15px] font-bold text-[#1a1919]">
                          {ev.title}
                        </h4>
                        <p className="text-[11px] text-brand font-semibold">
                          {ev.location}
                        </p>
                        <p className="text-[.78rem] text-[#1a1919]/50 leading-relaxed">
                          {ev.description}
                        </p>
                      </div>
                      <span className="flex-shrink-0 self-start sm:self-center text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand">
                        Upcoming
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Past */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#1a1919]/20" />
                <h3 className="text-[14px] font-bold text-[#1a1919]/40 uppercase tracking-widest">
                  Past Events
                </h3>
              </div>
              <div className="flex flex-col gap-4">
                {events
                  .filter((e) => e.type === "past")
                  .map((ev, i) => (
                    <div
                      key={i}
                      className="bg-[#faf9f7] border border-black/[0.06] rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
                    >
                      <div className="bg-black/[0.04] border border-black/[0.06] rounded-xl px-4 py-3 text-center flex-shrink-0 w-20">
                        <p className="text-[#1a1919]/40 text-[10px] font-bold uppercase tracking-wider">
                          {ev.date.split(" ")[0]}
                        </p>
                        <p className="text-[#1a1919]/50 text-[1.4rem] font-black leading-none">
                          {ev.date.split(" ")[1].replace(",", "")}
                        </p>
                        <p className="text-[#1a1919]/30 text-[10px] font-bold">
                          {ev.date.split(" ")[2]}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 flex-1">
                        <h4 className="text-[15px] font-bold text-[#1a1919]/60">
                          {ev.title}
                        </h4>
                        <p className="text-[11px] text-[#1a1919]/40 font-semibold">
                          {ev.location}
                        </p>
                        <p className="text-[.78rem] text-[#1a1919]/40 leading-relaxed">
                          {ev.description}
                        </p>
                      </div>
                      <span className="flex-shrink-0 self-start sm:self-center text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#1a1919]/30">
                        Past
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
