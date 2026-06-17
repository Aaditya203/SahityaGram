import { FileText, NotebookPen, Layout, Printer, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";

interface Step {
  Icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    Icon: FileText,
    number: "01",
    title: "Manuscript Submission",
    description: "Share your manuscript with us.",
  },
  {
    Icon: NotebookPen,
    number: "02",
    title: "Review & Editing",
    description: "Our experts review and refine your content.",
  },
  {
    Icon: Layout,
    number: "03",
    title: "Design & Layout",
    description: "Professional design and layout creation.",
  },
  {
    Icon: Printer,
    number: "04",
    title: "Printing",
    description: "High-quality printing with perfect finish.",
  },
  {
    Icon: Send,
    number: "05",
    title: "Distribution & Marketing",
    description: "We deliver and promote your book to readers.",
  },
];

export default function Process() {
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
    <section className="bg-[#F6EDE3] py-16 px-25">
      {/* Header */}
      <div className="mb-12 px-4 pb-3">
        <p className="text-[#8B4513] text-md font-semibold tracking-widest uppercase mb-2">
          Our Process
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-cormorant text-gray-900 leading-tight max-w-md whitespace-nowrap">
          Your Journey From Idea to <br /> Published Book
        </h2>
        <div className="mt-4 w-35 h-[3px] bg-[#8B4513] " />
      </div>

      {/* Steps */}
      <div ref={sectionRef} className="relative flex items-start justify-between overflow-hidden">

        {/* Connecting dashed line */}
        <div className="absolute top-13 left-0 right-0 h-[1px] border-t border-dashed border-[#C4A882] z-0 mx-[7%]" />

        {steps.map(({ Icon, number, title, description }, index) => (
          <div
            key={number}
            style={{
              transitionDelay: `${index * 250}ms`,
              transform: animate ? "translateY(0)" : "translateY(60px)",
              opacity: animate ? 1 : 0,
              transition: "transform 1.2s ease, opacity 1.2s ease",
            }}
            className="relative z-10 flex flex-col items-center text-center w-1/5"
          >
            {/* Circle Icon */}
            <div className="w-25 h-25 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
              <Icon size={40} strokeWidth={1.3} className="text-[#8B4513]" />
            </div>

            {/* Number */}
            <span className="text-[#8B4513] font-semibold text-md mb-1">
              {number}
            </span>

            {/* Title */}
            <h3 className="text-[#53280a] font-bold text-2xl font-cormorant  mb-2 max-w-[300px]">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-md leading-relaxed max-w-[200px]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}