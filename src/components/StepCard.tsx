import { ReactNode } from "react";
import { Check } from "lucide-react";

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const StepCard = ({ icon, title, description, delay = 0 }: StepCardProps) => {
  return (
    <div 
      className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-warm opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-warm flex items-center justify-center text-primary-foreground shadow-warm">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-display font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
      <div className="flex-shrink-0">
        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-accent" />
        </div>
      </div>
    </div>
  );
};
