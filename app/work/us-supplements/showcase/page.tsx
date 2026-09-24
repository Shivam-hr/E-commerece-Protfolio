import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import CaseStudyTabNav from "@/components/case-study/CaseStudyTabNav";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import usSupplementsPreview from "@/Images/us-supplements-preview.png";

import homepageDesktop from "@/Images/desktop/homepage.png";
// import categoryDesktop from "@/Images/desktop/category.png";
import productDesktop from "@/Images/desktop/product.png";
import cartDesktop from "@/Images/desktop/cart.png";
import checkoutDesktop from "@/Images/desktop/checkout.png";
// import orderTrackingDesktop from "@/Images/desktop/order-tracking.png";
// import wishlistDesktop from "@/Images/desktop/wishlist.png";
// import supportDesktop from "@/Images/desktop/support.png";

const desktopScreens = [
  { n: "01", label: "Homepage", image: homepageDesktop },
//   { n: "02", label: "Category Page", image: categoryDesktop },
  { n: "03", label: "Product Page", image: productDesktop },
  { n: "04", label: "Cart Page", image: cartDesktop },
  { n: "05", label: "Checkout", image: checkoutDesktop },
  { n: "06", label: "Order Tracking", image: undefined },
  { n: "07", label: "Wishlist Page", image: undefined },
  { n: "08", label: "Support Page", image: undefined },
];

// TODO(Shivam): add each mobile screenshot the same way, e.g.:
// import homeMobile from "@/Images/mobile/home.png";
// import categoryMobile from "@/Images/mobile/category.png";
// ...etc, one per screen below

const mobileScreens = [
  { n: "01", label: "Home", image: undefined },
  { n: "02", label: "Category", image: undefined },
  { n: "03", label: "Product", image: undefined },
  { n: "04", label: "Cart", image: undefined },
  { n: "05", label: "Checkout", image: undefined },
  { n: "06", label: "Profile", image: undefined },
  { n: "07", label: "Wishlist", image: undefined },
  { n: "08", label: "Tracking", image: undefined },
];

// TODO(Shivam): add a single combined desktop+tablet+mobile mockup image, e.g.:
// import responsiveMockup from "@/Images/responsive-devices.png";
const responsiveMockup = undefined;

// TODO(Shivam): add 3-5 extra gallery screenshots, e.g.:
// import galleryOne from "@/Images/gallery-1.png";
const galleryImages: { label: string; image: undefined }[] = [
  { label: "Homepage Hero", image: undefined },
  { label: "Top Brands", image: undefined },
  { label: "Category Grid", image: undefined },
  { label: "Order Confirmation", image: undefined },
  { label: "Product Lineup", image: undefined },
];

// TODO(Shivam): add a product bottle/shaker photo for the final CTA, e.g.:
// import ctaProductShot from "@/Images/cta-products.png";
const ctaProductShot = undefined;

export default function USSupplementsShowcase() {
  return (
    <main className="bg-cream min-h-screen">
      <Navbar />
      <CaseStudyTabNav
        basePath="/work/us-supplements"
        active="showcase"
        nextLabel="Results"
        nextHref="/work/us-supplements/results"
      />

      {/* Hero + 01. Desktop Showcase */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="grid lg:grid-cols-[0.75fr_1.85fr] gap-8 items-start">
          {/* Hero text */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-accent inline-block" />
              <span className="text-sm font-semibold tracking-[0.15em] uppercase text-ink">
                The Showcase
              </span>
            </div>

            <h1 className="font-display font-semibold text-[38px] sm:text-[44px] leading-[1.1] tracking-tight text-ink mb-5">
              Designed for
              <br />
              Performance.
              <br />
              <span className="font-serif italic font-medium text-accent">Built for Users.</span>
            </h1>

            <p className="text-muted text-[15px] leading-relaxed mb-6">
              A complete visual walkthrough of the US Supplements experience across desktop,
              mobile and all devices.
            </p>

            <a
              href="https://ussuppliments.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 bg-cardWarm border border-border rounded-card p-4 hover:bg-white transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <Globe size={18} className="text-ink" />
              </span>
              <div>
                <div className="text-[13px] font-semibold text-ink leading-tight">
                  View Live Site
                </div>
                <div className="text-[11.5px] text-muted leading-tight flex items-center gap-1">
                  ussuppliments.netlify.app <ArrowUpRight size={11} />
                </div>
              </div>
            </a>
          </div>

          {/* 01. Desktop Showcase */}
          <div className="bg-card border border-border rounded-card p-7">
            <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-6">
              01. <span className="text-accent">Desktop Showcase</span>
            </h2>

            <div className="grid sm:grid-cols-3 gap-4">
              {desktopScreens.slice(0, 6).map(({ n, label, image }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="text-[11px] text-muted">
                    <span className="text-mutedLight">{n}</span> &nbsp;{label}
                  </div>
                  {image ? (
                    <div className="relative aspect-[3/2] rounded-xl border border-border overflow-hidden">
                      <Image src={image} alt={label} fill className="object-cover object-top" />
                    </div>
                  ) : (
                    <div className="aspect-[3/2] rounded-xl border-2 border-dashed border-border bg-ink/5 flex items-center justify-center">
                      <ImageIcon size={20} className="text-mutedLight" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {desktopScreens.slice(6).map(({ n, label, image }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="text-[11px] text-muted">
                    <span className="text-mutedLight">{n}</span> &nbsp;{label}
                  </div>
                  {image ? (
                    <div className="relative aspect-[3/2] rounded-xl border border-border overflow-hidden">
                      <Image src={image} alt={label} fill className="object-cover object-top" />
                    </div>
                  ) : (
                    <div className="aspect-[3/2] rounded-xl border-2 border-dashed border-border bg-ink/5 flex items-center justify-center">
                      <ImageIcon size={20} className="text-mutedLight" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Mobile Showcase */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="bg-card border border-border rounded-card p-7">
          <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-6">
            02. <span className="text-accent">Mobile Showcase</span>
          </h2>

          <div className="flex gap-5 overflow-x-auto pb-2">
            {mobileScreens.map(({ n, label, image }) => (
              <div key={label} className="flex flex-col items-center gap-2 shrink-0 w-[110px]">
                {image ? (
                  <div className="relative w-full aspect-[9/19] rounded-2xl border-2 border-ink overflow-hidden">
                    <Image src={image} alt={label} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-full aspect-[9/19] rounded-2xl border-2 border-dashed border-border bg-ink/5 flex items-center justify-center">
                    <ImageIcon size={18} className="text-mutedLight" />
                  </div>
                )}
                <span className="text-[11px] text-muted text-center">
                  {n} {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Responsive Design + 04. Before vs After */}
      <section className="px-8 lg:px-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 03. Responsive Design */}
          <div className="bg-card border border-border rounded-card p-7">
            <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-2">
              03. <span className="text-accent">Responsive Design</span>
            </h2>
            <p className="text-muted text-[13px] leading-relaxed mb-5">
              A seamless experience across all screen sizes.
            </p>

            {responsiveMockup ? (
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <Image src={responsiveMockup} alt="Responsive devices mockup" fill className="object-contain" />
              </div>
            ) : (
              <div className="w-full aspect-[16/10] rounded-xl border-2 border-dashed border-border bg-ink/5 flex items-center justify-center mb-4">
                <ImageIcon size={22} className="text-mutedLight" />
              </div>
            )}

            <div className="flex items-center justify-center gap-5 text-[11.5px] text-muted">
              <span>Desktop (1440px+)</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Tablet (768px)</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Mobile (375px)</span>
            </div>
          </div>

          {/* 04. Before vs After */}
          <div className="bg-card border border-border rounded-card p-7">
            <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-2">
              04. <span className="text-accent">Before vs After</span>
            </h2>
            <p className="text-muted text-[13px] leading-relaxed mb-5">
              Transformed from a basic idea to a high-performance e-commerce platform.
            </p>

            <div className="flex items-center gap-4">
              {/* Before — plain CSS wireframe grid, no image needed */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-2 p-3 rounded-xl border border-border bg-cardWarm aspect-[4/3]">
                  <div className="rounded-md bg-border/60" />
                  <div className="rounded-md bg-border/60" />
                  <div className="rounded-md bg-border/60" />
                  <div className="rounded-md bg-border/60" />
                </div>
                <div className="text-[11px] text-muted text-center mt-2">Before</div>
              </div>

              <ArrowRight size={18} className="text-mutedLight shrink-0" />

              {/* After — reuse the real final screenshot */}
              <div className="flex-1">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
                  <Image src={usSupplementsPreview} alt="Final design" fill className="object-cover object-top" />
                </div>
                <div className="text-[11px] text-muted text-center mt-2">After</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Gallery */}
      <section className="px-8 lg:px-16 pb-14">
        <div className="bg-card border border-border rounded-card p-7">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-heading font-semibold text-lg tracking-wide uppercase text-ink mb-1">
                05. <span className="text-accent">Gallery</span>
              </h2>
              <p className="text-muted text-[13px]">More moments from the US Supplements experience.</p>
            </div>
            {/* Decorative — this page has no client-side JS, so these don't scroll yet */}
            <div className="hidden sm:flex gap-2 shrink-0">
              <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
                <ChevronLeft size={16} className="text-ink" />
              </span>
              <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center">
                <ChevronRight size={16} className="text-ink" />
              </span>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {galleryImages.map(({ label, image }) => (
              <div key={label} className="shrink-0 w-[220px]">
                {image ? (
                  <div className="relative aspect-[3/2] rounded-xl border border-border overflow-hidden">
                    <Image src={image} alt={label} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="aspect-[3/2] rounded-xl border-2 border-dashed border-border bg-ink/5 flex items-center justify-center">
                    <ImageIcon size={20} className="text-mutedLight" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 lg:px-16 pb-16">
        <div className="bg-card border border-border rounded-card p-7 lg:p-10 grid lg:grid-cols-[0.9fr_1.4fr] gap-8 items-center">
          {ctaProductShot ? (
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image src={ctaProductShot} alt="US Supplements products" fill className="object-cover" />
            </div>
          ) : (
            <div className="w-full aspect-[4/3] rounded-xl border-2 border-dashed border-border bg-cardWarm flex items-center justify-center">
              <ImageIcon size={26} className="text-mutedLight" />
            </div>
          )}

          <div>
            <h2 className="font-display font-semibold text-[28px] sm:text-[34px] leading-tight text-ink mb-3">
              Love what you see?
              <br />
              Let&apos;s build <span className="font-serif italic font-medium text-accent">something amazing</span>{" "}
              together.
            </h2>
            <p className="text-muted text-[14px] leading-relaxed mb-6 max-w-md">
              Whether you need an e-commerce store, a business website, or a custom web
              application — I can help you bring your ideas to life.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* TODO(Shivam): replace with your real WhatsApp number */}
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-ink text-sm font-semibold px-6 py-3 rounded-btn flex items-center gap-2"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <Link
                href="/#contact"
                className="border border-[#D8D2C4] text-ink text-sm font-medium px-6 py-3 rounded-btn flex items-center gap-2"
              >
                <Phone size={15} /> Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}