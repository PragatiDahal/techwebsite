import image from "../assets/1.png";

export default function Method() {

        return (
          <>
            <section className="bg-[#046F79]/[0.5] mt-10">
              <div className="flex text-4xl font-bold font-sans text-[#023038] justify-center items-center pt-11 mt-10">
                We use 4D Methodology
              </div>
              <div className="relative flex rounded-full mx-auto bg-[#D9D9D9] border-8 border-[#023038]/[0.78] h-[500px] w-[500px] mt-10 mb-10 pb-10">
                <img className="block mx-auto pt-5" src={image} alt="image" />
                {/* Circle */}
                <div className="absolute rounded-full bg-[#023038] w-[50px] h-[50px] text-lg text-white font-bold flex justify-center items-center left-[-0px] top-[75%] transform -translate-y-1/2">
                  1
                </div>
                {/* Text for Circle 1 */}
                <h3 className="absolute text-4xl text-[#023038] font-sans font-bold left-[-150px] top-[75%] transform -translate-y-1/2">DEFINE</h3>
                <p className="absolute text-lg text-[#023038] font-sans font-bold left-[-650px] top-[85%] transform -translate-y-1/2 text-right">Identify and articulate the core problem, target audience, 
                and <br/> project scope to ensure clear objectives and alignment with business goals.</p>
    
                  {/* Circle 2 */}
                <div className="absolute rounded-full bg-[#023038] w-[50px] h-[50px] text-lg text-white font-bold flex justify-center items-center left-[-0px] top-[25%] transform -translate-y-1/2">
                  2
                </div>
                {/* Text for Circle 2 */}
                <h3 className="absolute text-4xl text-[#023038] font-sans font-bold left-[-150px] top-[25%] transform -translate-y-1/2">DESIGN</h3>
                <p className="absolute text-lg text-[#023038] font-sans font-bold left-[-650px] top-[35%] transform -translate-y-1/2 text-right">Create innovative solutions and user-centric designs, focusing on 
                <br/> functionality, aesthetics, and user experience to address defined needs.</p>
    
                {/* Circle 3 */}
                <div className="absolute rounded-full bg-[#023038] w-[50px] h-[50px] text-lg text-white font-bold flex justify-center items-center right-[-0px] top-[25%] transform -translate-y-1/2">
                  3
                </div>
                {/* Text for Circle 3 */}
                <h3 className="absolute text-4xl text-[#023038] font-sans font-bold left-[505px] top-[25%] transform -translate-y-1/2">DEVELOP</h3>
                <p className="absolute text-lg text-[#023038] font-sans font-bold right-[-685px] top-[35%] transform -translate-y-1/2 text-left">Implement and launch the developed solutions, ensuring seamless integration,
                <br/> scalability, and reliability within the intended environment.</p>
    
                {/* Circle 4 */}
                <div className="absolute rounded-full bg-[#023038] w-[50px] h-[50px] text-lg text-white font-bold flex justify-center items-center right-[-0px] top-[75%] transform -translate-y-1/2">
                  4
                </div>
                {/* Text for Circle 4 */}
                <h3 className="absolute text-4xl text-[#023038] font-sans font-bold left-[505px] top-[75%] transform -translate-y-1/2">DEPLOY</h3>
                <p className="absolute text-lg text-[#023038] font-sans font-bold right-[-685px] top-[85%] transform -translate-y-1/2 text-left">Provide continuous support, gather user feedback,
                and  refine the  <br/> product to enhance performance and satisfaction, ensuring long-term success.</p>
              </div>
            </section>
          </>
        );
      }
      
