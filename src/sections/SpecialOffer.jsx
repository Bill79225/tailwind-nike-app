import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          alt="offer"
          width={750}
          height={650}
          className="object-contain w-full" 
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-[#836464d2] inline-block mt-3">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Step into style and performance with Nike sneakers, the ultimate blend of innovation and iconic design. Elevate your everyday with our range of footwear engineered for comfort, durability, and unmatched style. </p>
        <p className="mt-6 lg:max-w-lg info-text">Experience the next level of performance and style with Nike sneakers, designed to fuel your passion and drive your ambition.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button 
            label="Shop now"
            iconURL={arrowRight}
          />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer