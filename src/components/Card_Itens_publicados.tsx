interface ItemCardProps {
  image: string;
  title: string;
  alt?: string;
}

export default function Card_Itens_publicados({
  image,
  title,
  alt,
}: ItemCardProps) {
  return (
    <div className="bg-white rounded-[20px] border border-black shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
      <div className="aspect-square">
        <img
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-epilogue text-base lg:text-lg font-normal text-black text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
