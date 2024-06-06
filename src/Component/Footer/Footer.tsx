import image1 from "../../assets/Facebook.png"
import image2 from "../../assets/Instagram.png"
import image3 from "../../assets/LinkedIn.png"
import image4 from "../../assets/YouTube.png"
import image5 from "../../assets/Location.png"
import image6 from "../../assets/Email.png"
import image7 from "../../assets/Phone.png"

export default function Footer() {
  return (
    <footer
      className="bg-[#023038] text-center text-slate-100 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div
        className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden text-2xl lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <a className="mr-6 text-slate-100 dark:text-neutral-200">
            <img src={image1}/>
          </a>
          <a className="mr-6 text-slate-100 dark:text-neutral-200">
          <img src={image2}/>
          </a>
          <a className="mr-6 text-slate-100 dark:text-neutral-200">
          <img src={image3}/>
          </a>
          <a className="mr-6 text-slate-100 dark:text-neutral-200">
          <img src={image4}/>
          </a>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h6
              className="mb-4 flex items-center text-2xl justify-center font-poppins font-bold uppercase md:justify-start">
             Antarikshya
            </h6>
            <p className="text-xl">
            Sky is never the Limit.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start">
              Main 
            </h6>
            <p className="mb-4">
              {/* <Link to="/Blog"> */}
              <button className="text-slate-100 text-xl dark:text-neutral-200"
              >Team</button>
              {/* </Link> */}
            </p>
            <p className="mb-4">
            {/* <Link to="/Contact"> */}
              <button className="text-slate-100 text-xl dark:text-neutral-200"
              >Testimonials</button>
              {/* </Link> */}
            </p>
            
            <p className="mb-4">
            {/* <Link to="/About"> */}
              <button className="text-slate-100 text-xl dark:text-neutral-200"
              >Blog</button>
              {/* </Link> */}
            </p>
            <p>
              {/* <Link to="/Gallery"> */}
              <button className="text-slate-100 text-xl dark:text-neutral-200"
              >Gallery</button>
              {/* </Link> */}
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h6
              className="mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start">
              Quick links
            </h6>
            <p className="mb-4">
              <a href='/home' className="text-slate-100 text-xl dark:text-neutral-200"
              >Home</a>
            </p>
            <p className="mb-4">
              <a href='/about' className="text-slate-100 text-xl dark:text-neutral-200"
              >Explore</a>
            </p>
            <p className="mb-4">
              <a href='service' className="text-slate-100 text-xl dark:text-neutral-200"
              >Projects</a>
            </p>
            <p>
              <a href='/course' className="text-slate-100 text-xl dark:text-neutral-200"
              >About</a>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div>
            <h6
              className="mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start">
              Get in touch with us
            </h6>
            <p className="mb-4 flex items-centertext-xl justify-center md:justify-start">
              <img className="w-[30px] h-[30px]" src={image5}/>
              New Baneshwor , Kathmandu
            </p>
            <p className="mb-4 flex items-center text-xljustify-center md:justify-start">
            <img className="w-[30px] h-[30px]" src={image6}/>
              antarikshya@gmail.com
            </p>
            <p className="mb-4 flex items-center text-xl justify-center md:justify-start">
            <img className="w-[30px] h-[30px]" src={image7}/>
              9806254380
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-[#046F79]/[0.5] p-6 text-center dark:bg-neutral-700">
        <span>© 2024 Copyright:</span>
        <a
          className="font-semibold  text-slate-100 dark:text-neutral-400"
          href="#"
        >Antarikshya</a>
      </div>
    </footer>
  );
}
