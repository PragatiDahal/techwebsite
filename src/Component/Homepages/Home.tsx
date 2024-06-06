import image from "../../assets/ai1.jpg";
import Offer from "../Homepages/Offer";
import Method from "../Homepages/Method";
import Completed from "../Homepages/Completed";
import Test from "../Homepages/Test";
import Aboutus from "../Homepages/Aboutus";
import Team from "../Homepages/Team";
import Testimonials from "../Homepages/Testimonials";
import Newsletter from "../Homepages/Newsletter";
import Blog from "../Homepages/Blog";
export default function Home() {
  return (
    <>
   <section className="relative w-screen h-screen">
         <img className="w-full h-full object-cover" src={image} alt="homepicture" />
         <div className="absolute top-0 left-0 w-full h-full bg-[#023038]/[0.71] justify-center items-center">
         <div className="container mx-auto flex flex-col md:flex-row items-center pt-11  my-12 md:my-24">
         <div className="flex flex-col w-full lg:w-1/2  justify-center items-start p-8">
        <h3 className="whitespace-nowrap text-3xl font-bold md:text-4xl p-2 text-white tracking-loose">Innovating Technology, Engineering Excellence</h3>
        <p className="text-xl md:text-2xl text-justify justify-start text-white mb-4 leading-relaxed">
            Our tech and engineering company is dedicated to delivering state-of-the-art solutions that fuel innovation and excellence. By seamlessly integrating advanced technology with expert engineering, we create impactful and sustainable results.Our mission is to empower businesses to thrive in a digital world, driving growth and efficiency.
            We believe in pushing the boundaries of what's possible, continuously exploring new frontiers to stay ahead in the industry.
        </p>
        <button
           className="bg-[#023038] hover:bg-[#046F79] text-white hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border-rounded-lg border-black hover:border-transparent">
           Read more
        </button>
         </div>
         </div>
          </div>
   </section>

   <section>
    <Offer />
   </section>

   <section>
    <Method />
   </section>

   <section>
    <Completed/>
   </section>

   <section>
    <Test/>
   </section>

   <section>
    <Aboutus/>
   </section>

   <section>
    <Team/>
   </section>

   <section>
    <Testimonials/>
   </section>

   <section>
    <Newsletter/>
   </section>

   <section>
    <Blog/>
   </section>
   </>
  )
}
