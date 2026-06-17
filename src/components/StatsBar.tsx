import  { useEffect, useState,useRef } from 'react'
import { BookOpen,Users,Globe,Award } from 'lucide-react'
import { LucideIcon } from 'lucide-react'
interface Stat{
    Icon:LucideIcon,
    value:number,
    suffix:string,
    label:string,
}
const stats:Stat[] =[
    {Icon:BookOpen, value:1000,suffix:"+",label:"Books Published"},
    {Icon:Users, value:500,suffix:"+",label:"Happy Authors"},
    {Icon:Globe, value:20,suffix:"+",label:"Languages Supported"},
    {Icon:Award, value:5,suffix:"+",label:"Years of Excellence"}
]

function useCountUp(target:number,duration:number=2000,start:boolean){
    const [count,setCount] = useState(0);
    useEffect(()=>{
        if(!start) return;
        let startTime: number | null = null;
        const step = (timeStamp:number)=>{
            if(!startTime){
                startTime=timeStamp;
            }
            const progress = Math.min((timeStamp-startTime)/duration,1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);

    },[start,target,duration]);
    return count;
}

function StatCard({ Icon, value, suffix, label, animate }: Stat & { animate: boolean }) {
  const count = useCountUp(value, 2000, animate);
  return (
    <div className="flex flex-col items-center justify-center px-8 py-6 border-r border-[#5a4a35] last:border-r-0 flex-1">
      <Icon className="w-10 h-10 text-[#c9b08a] mb-3" strokeWidth={1.5} />
      <div className="text-white text-4xl font-bold mb-1">
        {count}{suffix}
      </div>
      <div className="text-white text-sm tracking-wide pt-2">{label}</div>
    </div>
  );
}
export default function StatsBar() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full flex items-center justify-between"
      style={{ background: "linear-gradient(135deg, #3b2c1a 0%, #2a1f10 100%)" }}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} animate={animate} />
      ))}
    </div>
  );
}