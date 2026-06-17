import { Pen, Palette, FileEdit, Truck, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Pen,
    title: "Book Publishing",
    description: "Complete support to publish your book professionally.",
  },
  {
    Icon: Palette,
    title: "Cover Designers",
    description: "Creative and captivating book covers that stand out.",
  },
  {
    Icon: FileEdit,
    title: "Editorial Services",
    description: "Expert editing and proofreading for flawless content.",
  },
  {
    Icon: Truck,
    title: "Distribution Services",
    description: "Widest reach through reliable distribution networks.",
  },
  {
    Icon: Megaphone,
    title: "Marketing Strategy",
    description: "Smart marketing strategies to promote your book.",
  },
];

export default function Offer() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F5F0EA] px-8 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between px-20 mb-10">
        <div>
          <p className="text-[#8B4513] text-md font-semibold tracking-widest uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-md font-cormorant whitespace-nowrap">
            Comprehensive Publishing <br /> Solutions for Every Author
          </h2>
          <div className="mt-4 w-35 h-[3px] bg-[#8B4513]" />
        </div>

        <p className="text-gray-500 font-semibold text-sm md:text-base max-w-xs mt-6 md:mt-15 mr-60 leading-relaxed whitespace-nowrap">
          From manuscript to marketplace, we provide end-to-end <br /> publishing
          services tailored to your needs.
        </p>
      </div>

      {/* Cards */}
      <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-hidden px-20">
        {services.map(({ Icon, title, description }, index) => (
          <div
            key={title}
            style={{
              transitionDelay: `${index * 250}ms`,
              transform: animate ? "translateX(0)" : "translateX(100px)",
              opacity: animate ? 1 : 0,
              transition: "transform 1.2s ease, opacity 1.2s ease",
            }}
            className="bg-white rounded-xl p-6 pt-9 pb-10 flex flex-col items-center gap-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className=" text-[#8B4513]">
              <Icon size={60} strokeWidth={1.3} />
            </div>
            <div className="text-center">
              <h3 className="text-[#8B4513] font-bold text-2xl mb-2 font-cormorant">
                {title}
              </h3>
              <p className="text-[#634832] text-md text-center leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}