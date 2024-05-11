import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img 
        src={imgURL} 
        alt={name} 
        className="w-[250px] h-[250px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img 
          src={star} 
          alt="rating"
          width={25}
          height={25} 
        />
        <p className="text-xl font-montserrat leading-normal text-slate-gray">4.5</p>
      </div>
      <h3 className="mt-2 leading-normal text-2xl font-semibold font-palanquin">{name}</h3>
      <p className="font-montserrat text-[#836464d2] font-bold leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard