import image1 from "../../assets/Prize.png"
import image2 from "../../assets/Group.png"
import image3 from "../../assets/Check.png"
import image4 from "../../assets/Collaborator.png"
export default function Test() {
  return (
    <>
    <section>
    <div className="bg-[#046F79]/[0.5] mt-10 h-[308px] w-full mb-10 flex flex-col md:flex-row">
    <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
       <img className="h-[70px] w-[70px]" src={image3} />
       <p className="text-4xl text-[#023038] font-bold px-4 font-poppins text-center">
       20 +  projects
    </p>
       </div>

       <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
       <img className="h-[70px] w-[70px]" src={image1} />
       <p className="text-4xl text-[#023038] font-bold px-12 font-poppins">
       2 awards
          </p>
       </div>

       <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
       <img className="h-[70px] w-[70px]" src={image2} />
       <p className="text-4xl text-[#023038] font-bold px-12 font-poppins">
       50+  clients
          </p>
       </div>

       <div className="flex flex-wrap justify-center items-center w-full md:w-1/4 p-4 md:p-2">
       <img className="h-[70px] w-[70px]" src={image4} />
       <p className="text-4xl text-[#023038] font-bold px-12 font-poppins">
       10 +  employees
          </p>
       </div>

    </div>
    </section>
    </>
  )
}
