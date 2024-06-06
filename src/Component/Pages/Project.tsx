import image from "../../assets/rockets.jpg"
import image1 from "../../assets/travel.jpg"
interface CardProps {
  heading: string;
  description: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

function Cards({
  heading,
  description,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}: CardProps) {
  return (
    <div className={`rounded-lg p-6 hover:bg-[#046F79]/[0.5] duration-500 ease-in-out shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <img
          className="w-full cursor-pointer transition duration-1000 ease-in-out transform hover:scale-110 rounded-lg h-auto"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
      </div>
      <h3 className="pt-5 text-2xl font-bold text-black hover:text-white block">
        {heading}
      </h3>
      <p className="font-normal text-black hover:text-white cursor-pointer text-lg duration-300 transition mt-2">
        {description}
      </p>
    </div>
  );
}

export default function Completed() {
  return (
    <>
      <section>
        <div className="bg-[#f5f5f5] flex text-4xl font-bold font-sans text-[#023038] justify-center items-center pt-11">
          Projects we have completed
          </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8 bg-[#f5f5f5]">
          <Cards
            className="bg-[#046F79]/[0.20]"
            heading="Project ABC"
            description="Our Rocket Project is a groundbreaking endeavor aimed at designing, building, and launching a state-of-the-art rocket to advance space exploration and technology. This project brings together a multidisciplinary team of engineers, scientists, and technologists, all driven by the shared vision of pushing the boundaries of what is possible in aerospace engineering. "
            thumbnailSrc={image} 
          />
          <Cards
            className="bg-[#046F79]/[0.20]"
            heading="Project Destination"
            description="Our Travel Project is an ambitious initiative designed to revolutionize the way people experience travel. Combining cutting-edge technology with innovative planning and sustainable practices, this project aims to create unforgettable travel experiences while minimizing environmental impact and maximizing convenience and enjoyment for travelers. "
            thumbnailSrc={image1} 
          />
          <Cards
            className="bg-[#046F79]/[0.20]"
            heading="Project ABC"
            description="Our Rocket Project is a groundbreaking endeavor aimed at designing, building, and launching a state-of-the-art rocket to advance space exploration and technology. This project brings together a multidisciplinary team of engineers, scientists, and technologists, all driven by the shared vision of pushing the boundaries of what is possible in aerospace engineering. "
            thumbnailSrc={image} 
          />
          <Cards
            className="bg-[#046F79]/[0.20]"
            heading="Project Destination"
            description="Our Travel Project is an ambitious initiative designed to revolutionize the way people experience travel. Combining cutting-edge technology with innovative planning and sustainable practices, this project aims to create unforgettable travel experiences while minimizing environmental impact and maximizing convenience and enjoyment for travelers. "
            thumbnailSrc={image1} 
          />
          <Cards
            className="bg-[#046F79]/[0.20]"
            heading="Project ABC"
            description="Our Rocket Project is a groundbreaking endeavor aimed at designing, building, and launching a state-of-the-art rocket to advance space exploration and technology. This project brings together a multidisciplinary team of engineers, scientists, and technologists, all driven by the shared vision of pushing the boundaries of what is possible in aerospace engineering. "
            thumbnailSrc={image} 
          />
          <Cards
            className="bg-[#046F79]/[0.20]"
            heading="Project Destination"
            description="Our Travel Project is an ambitious initiative designed to revolutionize the way people experience travel. Combining cutting-edge technology with innovative planning and sustainable practices, this project aims to create unforgettable travel experiences while minimizing environmental impact and maximizing convenience and enjoyment for travelers. "
            thumbnailSrc={image1} 
          />
        </div>
      </section>
    </>
  );
}
