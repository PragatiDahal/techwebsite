import image1 from "../../assets/astronut.png";
import image2 from "../../assets/Rectangle.png";
import image3 from "../../assets/Gas.png";
import image4 from "../../assets/GoogleCode.png";
import image5 from "../../assets/LaptopMetrics.png";
import image6 from "../../assets/Services.png";

export default function Offer() {
  return (
    <section className="bg-[#046F79]/[0.20] mt-10">
        <div className=" flex text-4xl font-sans font-bold text-[#023038] justify-center items-center pt-11 mt-10">What we offer</div>
{/* for grid */}
    <div className=" flex flex-row flex-wrap justify-center items-start mx-auto gap-8 md:gap-8 mt-10 pt-11">

    <img className=" flex top-[200px] left-[100px] w-[200px] h-[200px]" src={image2} alt="image"/>
{/* mechanical design */}
     <div className=" w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl bg-[#32787F]/[0.78] pt-5 ">
     <div className="w-[150px] h-[150px] rounded-full mx-auto bg-[#D9D9D9] mt-5 justify-center items-center">
      <img className="block mx-auto mt-5 pt-10" src={image6} alt="image"/>
     </div>
     <div className= "text-2xl font-bold font-sans pl-11 ml-10 pt-2 text-white items-center justify-center ">Mechanical Design</div>
     <div className= "text-xl text-justify text-white pt-2 pl-2 pr-2 font-base font-sans">Mechanical design is the art and science of conceptualizing, refining, and perfecting systems and components that form the backbone of modern engineering marvels.</div>
     </div>
{/* web design and development */}
     <div className=" w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl bg-[#023038]/[0.78] pt-5 ">
     <div className="w-[150px] h-[150px] rounded-full mx-auto bg-[#D9D9D9] mt-5">
     <img className="block mx-auto mt-5 pt-10" src={image4} alt="image"/>
     </div>
     <div className= "text-2xl font-bold font-sans pl-6 pr-6 ml-10 pt-2 text-white text-center items-center justify-center ">Web Development and Design</div>
     <div className= "text-xl text-justify text-white pt-2 pl-2 pr-2 font-base font-sans">Our web development and design services offer innovative and tailored solutions to bring your digital vision to life. We combine cutting-edge technology with creative design to build user-friendly websites. </div>
     </div>

     <div className=" w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl bg-[#32787F]/[0.78] pt-5 ">
     <div className="w-[150px] h-[150px] rounded-full mx-auto bg-[#D9D9D9] mt-5">
     <img className="block mx-auto mt-5 pt-10" src={image5} alt="image"/>
     </div>
     <div className= "text-2xl font-bold font-sans pl-11 ml-10 pt-2 text-white items-center justify-center ">SEO Optimization</div>
     <div className= "text-xl text-justify text-white pt-2 pl-2 pr-2 font-base font-sans">SEO optimization is the strategic process of enhancing your online visibility and driving organic traffic to your website. Through careful keyword research, content optimization, and technical enhancements, we ensure that your website ranks higher .</div>
     </div>

     </div>

     <div className=" flex flex-row flex-wrap justify-center items-start mx-auto gap-8 md:gap-8 mb-10">
     <div className=" w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl bg-[#023038]/[0.78] pt-5 mt-10 mb-10">
     <div className="w-[150px] h-[150px] rounded-full mx-auto bg-[#D9D9D9] mt-5">
     <img className="block mx-auto mt-5 pt-10" src={image3} alt="image"/>
     </div>
     <div className= "text-2xl font-bold font-sans pl-11 ml-10 pt-2 text-white items-center justify-center ">Thermodynamics</div>
     <div className= "text-xl text-justify text-white pt-2 pl-2 pr-2 font-base font-sans">Thermodynamics is the study of energy, heat, and their transformations. It involves understanding the principles governing energy exchange, efficiency, and the behavior of systems in various states. </div>
     </div>

     <div className=" w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl bg-[#32787F]/[0.78] pt-5 mt-10 mb-10">
     <div className="w-[150px] h-[150px] rounded-full mx-auto bg-[#D9D9D9] mt-5">
     <img className="block mx-auto mt-5 pt-10" src={image4} alt="image"/>
     </div>
     <div className= "text-2xl font-bold font-sans pl-6 pr-6 ml-10 pt-2 text-white text-center items-center justify-center ">Web Development and Design</div>
     <div className= "text-xl text-justify text-white pt-2 pl-2 pr-2 font-base font-sans">Our web development and design services offer innovative and tailored solutions to bring your digital vision to life. We combine cutting-edge technology with creative design to build user-friendly websites. </div>
     </div>

     <div className=" w-full h-full md:w-[420px] md:h-[420px] px-5 py-5 md:px-2 md:py-2 rounded-3xl bg-[#023038]/[0.78] pt-5 mt-10 mb-10">
     <div className="w-[150px] h-[150px] rounded-full mx-auto bg-[#D9D9D9] mt-5">
     <img className="block mx-auto mt-5 pt-10" src={image5} alt="image"/>
     </div>
     <div className= "text-2xl font-bold font-sans pl-11 ml-10 pt-2 text-white items-center justify-center ">SEO Optimization</div>
     <div className= "text-xl text-justify text-white pt-2 pl-2 pr-2 font-base font-sans">SEO optimization is the strategic process of enhancing your online visibility and driving organic traffic to your website. Through careful keyword research, content optimization, and technical enhancements, we ensure that your website ranks higher .</div>
     </div>

     <img className="flex w-[200px] h-[200px] bottom-0 right-0 " src={image1} alt="image"/>

     </div>
    </section>
  )
}
