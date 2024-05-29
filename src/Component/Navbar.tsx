
import photo1 from "../assets/Antarikshyawebsitelogo.png";
export default function Navbar() {
  return (
    <section>
    <div className="flex bg-[#023038] w-full h-16 text-bold text-white font-'century gothic' items-center space-x-5 justify-between px-8">
        <div className="flex space-x-5">
            <div className="text-2xl text-white font-sans">
                EXPLORE
            </div>
            <div className="text-2xl text-white font-sans">
                PROJECTS
            </div>
            <div className="text-2xl text-white font-sans">
                ABOUT
            </div>
        </div>
        <div className="flex items-center space-x-4">
            <img className="h-[200px] w-[200px]" src={photo1} alt="logo" />
            <div className="text-3xl font-sans text-white">
                ANTARIKSHYA
            </div>
        </div>
        <button className="flex justify-center items-center rounded-lg border-4 bg-[#023038] h-[45px] w-[150px] border-black text-white text-xl">
            Build with us
        </button>
    </div>
</section>

  )
}

