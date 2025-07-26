import { Star } from "lucide-react";

interface Estrela_AvaliacaoProps {
  rating?: number;
  className?: string;
}

export default function Estrela_Avaliacao({
  rating = 5,
  className = "",
}: Estrela_AvaliacaoProps) {
  return (
    <div className={`flex space-x-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-6 h-6 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
