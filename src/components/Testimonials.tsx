import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  review: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Rahul Verma",
    review: "The print, the texture of pages and the work they do is great!",
    rating: 5,
  },
  {
    name: "Neha Sharma",
    review: "Such a good and precious service.",
    rating: 5,
  },
  {
    name: "Amit Sahu",
    review: "A wonderful experience from start to finish. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    review: "Professional team with excellent quality output. Very satisfied!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    review: "They turned my dream into reality. The book looks stunning!",
    rating: 5,
  },
  {
    name: "Anita Joshi",
    review: "Exceptional service and attention to detail throughout the process.",
    rating: 5,
  },
];

// Duplicate reviews for seamless infinite loop
const duplicatedReviews = [...reviews, ...reviews];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="text-[#C8871A] fill-[#C8871A]"
        />
      ))}
    </div>
  );
}

function ReviewCard({ name, review, rating }: Review) {
  return (
    <div
      className="min-w-[300px] max-w-[300px] bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between gap-4 select-none"
    >
      <div className="flex items-start justify-between">
        <StarRating rating={rating} />
        <span className="text-[#C8871A] text-5xl font-serif leading-none opacity-20 -mt-2">
          "
        </span>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">"{review}"</p>
      <p className="text-gray-500 text-sm font-medium">– {name}</p>
    </div>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.5; // px per frame — lower = slower

    const animate = () => {
      if (!pausedRef.current) {
        positionRef.current += speed;

        // Reset when scrolled halfway (one full set of reviews)
        const halfWidth = container.scrollWidth / 2;
        if (positionRef.current >= halfWidth) {
          positionRef.current = 0;
        }

        container.style.transform = `translateX(-${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    pausedRef.current = true;
  };

  const handleMouseLeave = () => {
    pausedRef.current = false;
  };

  return (
    <section className="bg-[#F5F0EA] py-16 overflow-hidden">
      {/* Header */}
      <div className="px-20 flex items-start justify-between mb-10">
        <div className="px-7">
          <p className="text-[#8B4513] text-md font-semibold tracking-widest uppercase mb-2">
            What Authors Say
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-cormorant text-gray-900 leading-tight">
            Loved by Authors, <br /> Trusted by Thousands
          </h2>
          <div className="mt-4 w-35 h-[3px] bg-[#8B4513]" />
        </div>
        <a
          href="#"
          className="text-[#8B4513] text-md font-semibold flex items-center gap-1 mt-4 hover:underline pr-20"
        >
          View All Reviews →
        </a>
      </div>

      {/* Scrolling Cards */}
      <div className="overflow-hidden relative">
         {/* Left fade */}
            <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, #F5F0EA, transparent)" }}
            />

            {/* Right fade */}
            <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, #F5F0EA, transparent)" }}
            />
        <div
          ref={scrollRef}
          className="flex gap-6 w-max"
          style={{ willChange: "transform" }}
        >
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}