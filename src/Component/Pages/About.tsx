import image from "../../assets/robot.jpg";
import image1 from "../../assets/exp.jpg";

export default function About() {
  return (
    <>
      <section className="bg-[#f5f5f5]  pt-10">
        <div className="max-w-[1800px] mx-auto bg-[#046F79]/[0.20] hover:bg-[#046F79]/[0.5] duration-500 ease-in-out rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden  mb-10">
          <h1 className="text-4xl mx-auto mt-8 mb-8 justify-center items-center font-bold text-[#023038]">
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
              <h2 className="block mt-1 text-2xl font-bold leading-tight  text-[#023038] hover:underline">
                Sky is never the Limit
              </h2>
              <p className="mt-2 text-xl text-[#023038] hover:text-black text-justify">
                At Antarikshya we are dedicated to transforming innovative ideas
                into reality through advanced technology and engineering
                excellence. Specializing in custom software development,
                mechanical design, web development, and SEO optimization, we
                deliver high-quality, sustainable solutions tailored to your
                business needs. Our expert team combines technical proficiency
                with creative problem-solving to drive success and shape the
                future. Join us on a journey of innovation and growth. At
                Antarikshya, we believe in fostering long-term partnerships,
                providing ongoing support and continuously seeking ways to
                enhance our clients' growth and success. Join us on a journey of
                innovation and transformation, and let's build a brighter future
                together.
              </p>
              <br />
              <p className="mt-2 text-xl text-[#023038] hover:text-black text-justify">
                At Antarikshya we are dedicated to transforming innovative ideas
                into reality through advanced technology and engineering
                excellence. Specializing in custom software development,
                mechanical design, web development, and SEO optimization, we
                deliver high-quality, sustainable solutions tailored to your
                business needs. Our expert team combines technical proficiency
                with creative problem-solving to drive success and shape the
                future. Join us on a journey of innovation and growth. At
                Antarikshya, we believe in fostering long-term partnerships,
                providing ongoing support and continuously seeking ways to
                enhance our clients' growth and success. Join us on a journey of
                innovation and transformation, and let's build a brighter future
                together.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1800px] mx-auto bg-[#046F79]/[0.20] hover:bg-[#046F79]/[0.5] duration-500 ease-in-out rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden pb-10 mb-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 order-2 md:order-1 p-4">
              <h2 className="block mt-1 text-2xl font-bold leading-tight text-[#023038] hover:underline">
                5 year experience in digital solution
              </h2>
              <p className="mt-2 text-xl text-[#023038] hover:text-black text-justify">
                With five years of expertise in digital solutions, we have honed
                our skills in delivering innovative and effective
                technology-driven services. Our experience spans web
                development, SEO optimization, digital marketing, and custom
                software solutions. We pride ourselves on understanding the
                unique needs of our clients, providing tailored strategies that
                drive growth, enhance user experience, and ensure a strong
                online presence. Our proven track record reflects our commitment
                to excellence and our ability to stay ahead in the ever-evolving
                digital landscape.
              </p>
              <br />
              <p className="mt-2 text-xl text-[#023038] hover:text-black text-justify">
                At Antarikshya we are dedicated to transforming innovative ideas
                into reality through advanced technology and engineering
                excellence. Specializing in custom software development,
                mechanical design, web development, and SEO optimization, we
                deliver high-quality, sustainable solutions tailored to your
                business needs. Our expert team combines technical proficiency
                with creative problem-solving to drive success and shape the
                future. Join us on a journey of innovation and growth. At
                Antarikshya, we believe in fostering long-term partnerships,
                providing ongoing support and continuously seeking ways to
                enhance our clients' growth and success. Join us on a journey of
                innovation and transformation, and let's build a brighter future
                together.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                className="w-full object-contain h-48 md:h-auto md:w-full"
                src={image1}
                alt=""
              />
            </div>
          </div>
        </div>

        <h2 className="text-center text-3xl mx-auto font-bold leading-tight text-[#023038] hover:underline mt-10 pt-11">
  Our story
</h2>
<div className="max-w-[1000px] mx-auto bg-[#046F79]/[0.20] hover:bg-[#023038] duration-500 ease-in-out rounded-xl py-10 px-4 md:px-8 shadow-md overflow-hidden pt-10 mt-10 pb-10 mb-10">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/2 order-2 md:order-1 p-4">
      <p className="mt-2 text-xl text-[#023038] hover:text-white text-justify md:w-[880px] px-5">
        Founded five years ago, our tech and engineering company has
        grown from a small team of visionaries into a trusted industry
        partner, specializing in web development, SEO optimization,
        digital marketing, and custom software solutions. Our commitment
        to innovation and excellence has driven our success, allowing us
        to deliver tailored strategies that meet our clients' unique
        needs. As we continue to push the boundaries of digital
        solutions, we remain dedicated to helping our clients thrive in
        an ever-evolving technological landscape. Our experience spans
        web development, SEO optimization, digital marketing, and custom
        software solutions. We pride ourselves on understanding the
        unique needs of our clients, providing tailored strategies that
        drive growth, enhance user experience, and ensure a strong
        online presence. Our proven track record reflects our commitment
        to excellence and our ability to stay ahead in the ever-evolving
        digital landscape.
      </p>
      <br />
    </div>
  </div>
</div>

      </section>
    </>
  );
}
