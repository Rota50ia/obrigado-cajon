import { ReactNode } from "react";

interface TimelineStepProps {
  day: string;
  title: string;
  items: string[];
  icon: ReactNode;
  delay?: number;
}

export const TimelineStep = ({ day, title, items, icon, delay = 0 }: TimelineStepProps) => {
  return (
    <div 
      className="relative pl-8 pb-8 last:pb-0 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent last:hidden" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-6 h-6 rounded-full gradient-warm flex items-center justify-center shadow-warm">
        {icon}
      </div>

      <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-primary/20 transition-all duration-300">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {day}
          </span>
          <h4 className="font-display font-semibold text-foreground">{title}</h4>
        </div>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-muted-foreground text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
