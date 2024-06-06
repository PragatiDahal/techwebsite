
import photo1 from "../../assets/mission.jpg"
import photo2 from "../../assets/vision.jpg"
import Offer from "../../Component/Homepages/Offer"

export default function Explore() {
  return (
    <>
    <section className="bg-[#046F79]/[0.20]">
  <div className="flex text-4xl font-sans font-bold text-[#023038] justify-center items-center pt-11">
    "Sky is never the Limit"
  </div>
  <div className="flex text-3xl mx-auto font-sans font-bold justify-center text-[#023038] px-8 pt-8">
    Our Mission and Vision
  </div>
  
  <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto bg-[#046F79]/[0.20] hover:bg-[#023038] duration-500 ease-in-out rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden mt-10 mb-10">
    <div className="md:w-1/2 order-2 md:order-1 p-4">
      <div className="text-3xl font-sans font-bold text-[#023038] hover:text-white pt-8">Mission</div>
      <p className="mt-2 text-xl text-[#023038] hover:text-white text-justify px-5">
        At InnovateTech Engineering, our mission is to revolutionize the technology and engineering landscape by delivering cutting-edge solutions that drive progress, enhance quality of life, and empower businesses to achieve their full potential. We are dedicated to fostering innovation, sustainability, and excellence in every project we undertake, ensuring that our clients, partners, and communities benefit from our expertise and commitment.
      </p>
    </div>
    <div className="md:w-1/2 order-1 md:order-2">
      <img
        className="w-full object-contain h-48 md:h-auto md:w-full"
        src={photo1}
        alt=""
      />
    </div>
  </div>
  
  <div className="flex flex-col md:flex-row max-w-[1000px] mx-auto bg-[#046F79]/[0.20] hover:bg-[#023038] duration-500 ease-in-out rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden mt-10 mb-10 pb-10">
    <div className="md:w-1/2 order-2 md:order-1 p-4">
      <div className="text-3xl font-sans font-bold text-[#023038] hover:text-white pt-8 ">Vision</div>
      <p className="mt-2 text-xl text-[#023038] hover:text-white text-justify px-5">
        Our vision is to be the global leader in technology and engineering, setting new standards for innovation, quality, and sustainability. We aspire to create a world where technology seamlessly integrates with everyday life, driving positive change and making the impossible possible. Through continuous learning, collaboration, and a relentless pursuit of excellence, we aim to shape the future and leave a lasting legacy of progress and prosperity.
      </p>
    </div>
    <div className="md:w-1/2 order-1 md:order-2">
      <img
        className="w-full object-contain h-48 md:h-auto md:w-full"
        src={photo2}
        alt=""
      />
    </div>
  </div>
</section>

<section>
  <Offer/>
</section>

    </>
  )
}
