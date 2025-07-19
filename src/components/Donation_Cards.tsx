import type { ItemForTrade } from '../db/items';

interface ItemsCardProps {
  item: ItemForTrade;
}

function Donation_Cards({ item }: ItemsCardProps){
    return (
        <a href="" className="hover:scale-102 duration-200 transform">
            <div className="min-w-70 w-70 h-100 bg-white border flex flex-col justify-center items-center text-start font-epilogue rounded-xl">

            <img
                src={item.imageUrl}
                alt={item.title}
                className="max-h-45 "
            />
            <div className="w-full text-start p-4">
                <h3 className="text-xl font-medium text-gray-800 h-12 flex items-center">
                {item.title}
                </h3>

                <div className="text-sm text-gray-600 mt-2 h-10">
                {item.details.map((detail, index) => (
                    <p key={index}>{detail}</p>
                ))}
                </div>

                <div className="mt-4 text-sm">
                <span className="font-bold text-gray-800">Tipo</span>
                <p className="text-gray-600">{item.type}</p>
                </div>
            </div>
            
            </div>
        </a>
    
  )
}

export default Donation_Cards;