import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo} 
              alt="Logo" 
              width={150}
              height={50}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Discover the perfect fit for your lifestyle and express your individuality with Nike sneakers that push boundaries and redefine what's possible.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img 
                  src={icon.src} 
                  alt={icon.alt}
                  width={25}
                  height={25}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-5">{section.title}</h4>
              <ul>
                {section.links.map((link) => (
                  <li 
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer" 
                    key={link.name}
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img 
              src={copyrightSign} 
              alt="Copyrignt sign" 
              width={20}
              height={20}
              className="rounded-full m-0"
            />
            <p>Copyrignt. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms and conditions</p>
        </div>
    </footer>
  )
}

export default Footer