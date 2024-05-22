
import photo1 from "../images/Antarikshya website logo.png";
export default function Navbar() {
  return (
    <section>
        <div className="flex bg-[#023038] w-auto h-16 text-bold text-white font-'century gothic'items-center content-center space-x-5 ">
            <div className="flex text-2xl text-white font-sans px-8 pt-4 ">
                SERVICES
            </div>
            <div className="flex text-2xl text-white font-sans pt-4 px-8">
                PROJECTS
            </div>
            <div className="flex text-2xl text-white font-sans pt-4 px-8">
                ABOUT
            </div>
            <div className="flex justify-center items-center content-center h-auto w-auto px-8 pl-11 ">
             <img className="h-[200px] w-[200px] ml-11 pl-11 " src={photo1} alt="logo" />
          </div>
          <div className="flex justify-center items-center content-center text-3xl font-sans px-5 text-white">
                ANTARIKSHYA
          </div>
          <button className="flex justify-center items-center rounded-lg border-4 bg-[#023038]-100 h-[45px] w-[150px] border-black mt-3 left-11">
          <div className="flex justify-center items-center text-white text-xl">
            Build with us
          </div>
          </button>
        </div>
    </section>
  )
}

