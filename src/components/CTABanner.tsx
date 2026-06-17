import { BookOpen } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="py-10 px-20 flex items-center justify-between"
      style={{ background: "linear-gradient(135deg, #8B4513 0%, #94501f 100%)" }}
    >
      {/* Left */}
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0">
          <BookOpen size={35} strokeWidth={1.5} className="text-[#8B4513]" />
        </div>
        <div>
          <h2 className="text-white text-2xl md:text-4xl font-bold font-cormorant">
            Ready to Publish Your Book?
          </h2>
          <p className="text-[#f0d9c0] text-md leading-relaxed mt-2">
            Join hundreds of authors who trusted Sahityagram Prakashan.
          </p>
        </div>
      </div>

      {/* Right */}
      <button className="border border-white text-white text-sm font-semibold px-6 py-3 mr-15 rounded hover:bg-white hover:text-[#8B4513] transition-colors duration-300 shrink-0">
        Get Started Today
      </button>
    </section>
  );
}