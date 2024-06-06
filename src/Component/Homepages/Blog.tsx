import image1 from "../../assets/cloud.webp"
import image2 from "../../assets/robot2.jpg"
import image3 from "../../assets/VR.jpg"

export default function Blog() {
  return (
    <>
    <section className="bg-[#046F79]/[0.20] mt-10 mb-10">
    <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold text-[#023038]"> From the Blog</h1>
      </div>
      <div className="flex flex-row gap-6 flex-wrap justify-center items-center py-5">
        <div
          className="relative flex flex-col mt-6 text-[#023038] bg-white hover:bg-[#046F79]/[0.5] shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden  shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition hover:scale-90 duration-1000" >
            <img 
              src={image1}
              alt="image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl text-[#023038] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            Cloud Computing
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col mt-6 text-[#023038] bg-white hover:bg-[#046F79]/[0.5] shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden  shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition hover:scale-90 duration-1000">
            <img
              src={image2}
              alt="image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl text-[#023038] antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            5 ways to secure digital content
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            </p>
          </div>
        </div>

        <div
          className="relative flex flex-col mt-6 text-[#023038] bg-white hover:bg-[#046F79]/[0.5] shadow-md bg-clip-border rounded-xl w-96"
        >
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden  shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 transition hover:scale-90 duration-1000">
            <img
              src={image3}
              alt="image"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl text-[#023038]  antialiased font-bold leading-snug tracking-normal text-blue-gray-900">
            Virtual Reality
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            Cloud computing provides on-demand access to computing resources, such as servers, storage, and applications, over the internet.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
