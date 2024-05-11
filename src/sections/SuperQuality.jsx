import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-[#836464d2] inline-block mt-3">quality</span> Sneakers
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">A modern classic: Our stylish shoe that has been a bestseller for years is now back in a new version with an updated material mix and a current design language.</p>
        <p className="mt-6 lg:max-w-lg info-text">Style with all the benefits: More Air, more comfort, more style, more design!</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={shoe8} 
          alt="shoe"
          width={550}
          height={525}
          className="object-contain" 
        />
      </div>
    </section>
  )
}

export default SuperQuality