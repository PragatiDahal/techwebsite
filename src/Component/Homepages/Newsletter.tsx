

export default function Newsletter() {
  return (
    <>
    <div className=" justify-center items-center pt-12 mt-10 w-[full] px-12 h-[300px] bg-[#046F79]/[0.20] hover:bg-[#046F79]/[0.5]">
    <div className=" text-center">
        <div className="text-3xl font-bold  text-[#023038] ">
            Subscribe to our Newsletter
        </div>
        <div className="text-base font-bold  text-[#023038]  pt-5">
        Stay updated with the latest in technology and all our company news. Never miss a beat!
        </div>
    </div>
    

 <div className="flex justify-center items-center  pt-2 mx-auto h-[150px]" >
    <input type="text" className="flex items-center w-[450px] h-[45px] bg-white border-2 border-[#023038] rounded-xl mx-5 px-4" placeholder="Enter your email here"/>

    <button className="bg-[#023038] hover:bg-black w-[150px] h-[45px] rounded-xl text-white text-base font-bold  py-5 md:py-2">
    Join US
    </button>
 </div>
 </div>
    </>
  )
}
