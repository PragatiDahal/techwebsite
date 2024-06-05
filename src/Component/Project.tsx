// function Cards({
//   heading,
//   description,
//   thumbnailSrc,
//   thumbnailAlt = "Thumbnail",
//   className,
// }) {
//   return (
//     <div className={`rounded-lg p-6 hover:bg-pink-200 duration-500 ease-in-out shadow-sm ${className}`}>
//       <div className="overflow-hidden rounded-lg">
//         <img
//           className="w-full cursor-pointer transition duration-1000 ease-in-out transform hover:scale-110 rounded-lg h-auto"
//           src={thumbnailSrc}
//           alt={thumbnailAlt}
//         />
//       </div>
//       <h3 className="pt-5 text-2xl font-bold text-gray-600 block">
//         {heading}
//       </h3>
//       <p className="font-normal text-gray-500 cursor-pointer text-lg duration-300 transition  mt-2">
//         {description}
//       </p>
//     </div>
//   );
// }
// export default function Project() {
//   return (
//    <>
//    <section>
//    <div className="flex mx-auto justify-center items-center text-[#023038] text-4xl mt-10 pt-11">Projects we have completed</div>
//    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-3 sm:p-8">
//    <Cards
//         className="bg-[#fcf4ff]"
//         heading="Admission Assistance"
//         description="Experienced counselors assist students in choosing the right aviation programs and universities abroad based on their interests, academic background, and career aspirations. Interaction and Experience Share."
//         thumbnailSrc=""
//       />
//    </div>
//    </section>
//    </>
//   )
// }
