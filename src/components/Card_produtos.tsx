interface ProductCardProps {
  title: string;
  image: string;
  condition: string;
  type: string;
  description?: string;
}

export default function Card_produtos({
  title,
  image,
  condition,
  type,
  description,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-300 shadow-lg p-6 w-80 h-[500px] flex flex-col">
      <div className="aspect-square rounded-2xl overflow-hidden mb-4 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-2xl font-normal text-black mb-4 flex-shrink-0">
        {title}
      </h3>

      <div className="space-y-2 text-gray-600 flex-grow">
        {description && <p className="text-lg">{description}</p>}
        <p className="text-lg">{condition}</p>
        <p className="text-lg">
          <span className="font-bold">Tipo</span>
        </p>
        <p className="text-lg">{type}</p>
      </div>
    </div>
  );
}
