import image from "../../assets/robot.jpg"

export default function Aboutus() {
  return (
    <>
    <section className="bg-[#f5f5f5] mt-10" >
<div className="max-w-[1800px] mx-auto bg-[#046F79]/[0.20] hover:bg-[#046F79]/[0.5] duration-500 ease-in-out rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden mt-11">
<h1
    className="text-4xl mx-auto mt-8 mb-8 justify-center items-center font-bold text-[#023038]"
  >
    About Us
  </h1>
  <div className="md:flex md:flex-wrap">
    <div className="md:w-1/2">
      <img
        className="w-full object-contain h-48 md:h-auto md:w-full"
        src={image}
        alt=""
      />
    </div>
    <div className="md:w-1/2 p-4">
      <h2
        className="block mt-1 text-2xl font-bold leading-tight  text-[#023038] hover:underline"
      >
        Sky is never the Limit
      </h2>
      <p className="mt-2 text-xl text-[#023038] hover:text-black">
      At Antarikshya we are dedicated to transforming innovative ideas into reality through advanced technology and engineering excellence. Specializing in custom software development, mechanical design, web development, and SEO optimization, we deliver high-quality, sustainable solutions tailored to your business needs. Our expert team combines technical proficiency with creative problem-solving to drive success and shape the future. Join us on a journey of innovation and growth. At Antarikshya, we believe in fostering long-term partnerships, providing ongoing support and continuously seeking ways to enhance our clients' growth and success. Join us on a journey of innovation and transformation, and let's build a brighter future together.
      </p>
      <br/>
      <p className="mt-2 text-xl text-[#023038] hover:text-black">
      At Antarikshya we are dedicated to transforming innovative ideas into reality through advanced technology and engineering excellence. Specializing in custom software development, mechanical design, web development, and SEO optimization, we deliver high-quality, sustainable solutions tailored to your business needs. Our expert team combines technical proficiency with creative problem-solving to drive success and shape the future. Join us on a journey of innovation and growth. At Antarikshya, we believe in fostering long-term partnerships, providing ongoing support and continuously seeking ways to enhance our clients' growth and success. Join us on a journey of innovation and transformation, and let's build a brighter future together.
      </p>
    </div>
  </div>
  <button className="flex mx-auto bg-[#023038] hover:bg-black h-[50px] w-[150px] rounded-3xl border-black pt-2 mt-8">
    <p className="text-lg  mx-auto font-bold text-white">Read more</p>
  </button>
</div>
</section>
    </>
  )
}
