// import Button from "../components/Button";
// import FloatingAvatars from "../components/FloatingAvatars";
// import { ArrowRight } from "lucide-react";

// import { Custom1, Custom2, Custom3, Custom4, Custom5, Custom6 } from "../assets/images";

// function CTA() {
//    const avatars = [
//     {
//       image: Custom1,
//       position:
//         "left-[2%] top-[8%] sm:left-[2%] sm:top-[8%]",
//     },

//     {
//       image: Custom2,
//       position:
//         "left-[18%] top-[8%] sm:left-[18%] sm:top-[8%]",
//     },

//     {
//       image: Custom3,
//       position:
//         "left-[3%] top-[38%] sm:left-[10%] sm:top-[46%]",
//     },

//     {
//       image: Custom4,
//       position:
//         "left-[18%] bottom-[8%] sm:left-[18%] sm:bottom-[8%]",
//     },

//     {
//       image: Custom5,
//       position:
//         "left-[2%] bottom-[8%] sm:left-[2%] sm:bottom-[8%]",
//     },

//     {
//       image: Custom6,
//       position:
//         "right-[2%] top-[8%] sm:right-[2%] sm:top-[8%]",
//     },

//     {
//       image: Custom2,
//       position:
//         "right-[18%] top-[8%] sm:right-[18%] sm:top-[8%]",
//     },

//     {
//       image: Custom5,
//       position:
//         "right-[3%] top-[38%] sm:right-[10%] sm:top-[46%]",
//     },

//     {
//       image: Custom4,
//       position:
//         "right-[18%] bottom-[5%] sm:right-[18%] sm:bottom-[5%]",
//     },

//     {
//       image: Custom6,
//       position:
//         "right-[2%] bottom-[5%] sm:right-[2%] sm:bottom-[5%]",
//     },
//   ];
//   return <>
//           <section className="bg-white">
//       <div className="max-container padding-x py-12 sm:py-16 lg:py-20">

//         <div className=" relative mx-auto min-h-[400px] max-w-6xl sm:min-h-[320px] lg:min-h-[300px ">

//           {/* Floating Student Avatars */}
//           <div className="absolute inset-0">
//             <FloatingAvatars avatars={avatars} />
//           </div>

//           {/* Center Content */}
//           <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center px-10 pt-8 text-center sm:px-4 sm:pt-6 ">

//             <h2 className=" font-roboto text-2xl font-bold leading-tight text-primary sm:text-4xl lg:text-[42px]">
//               Start Your Learning
//               <br />
//               Journey Today!
//             </h2>

//             <p className=" mt-4 max-w-md text-xs leading-5  text-body sm:text-sm" >
//               Join thousands of learners and unlock
//               <br className="hidden sm:block" />
//               your potential with EduLearn.
//             </p>

//             <Button
//               variant="primary"
//               size="sm"
//               radius="full"
//               icon={<ArrowRight size={14} />}
//               iconPosition="right"
//               className="mt-6 px-6 font-semibold"
//             >
//               Get Started
//             </Button>

//           </div>
//         </div>
//       </div>
//     </section>
//      </>
// }
// export default CTA


import Button from "../components/Button";
import FloatingAvatars from "../components/FloatingAvatars";
import { ArrowRight } from "lucide-react";
import { Custom1, Custom2, Custom3, Custom4, Custom5, Custom6 } from "../assets/images";

function CTA() {
  const avatars = [
    { image: Custom1, position: "left-[2%] top-[8%]" },
    { image: Custom2, position: "left-[18%] top-[8%]" },
    { image: Custom3, position: "left-[10%] top-[46%]" },
    { image: Custom4, position: "left-[18%] bottom-[8%]" },
    { image: Custom5, position: "left-[2%] bottom-[8%]" },
    { image: Custom6, position: "right-[2%] top-[8%]" },
    { image: Custom2, position: "right-[18%] top-[8%]" },
    { image: Custom5, position: "right-[10%] top-[46%]" },
    { image: Custom4, position: "right-[18%] bottom-[5%]" },
    { image: Custom6, position: "right-[2%] bottom-[5%]" },
  ];

  // Mobile-ka: qaybi 10-ka sawir → 5 kor, 5 hoos
  const topAvatars = avatars.slice(0, 5);
  const bottomAvatars = avatars.slice(5, 10);

  return (
    <section className="bg-white">
      <div className="max-container padding-x py-12 sm:py-16 lg:py-20">
        <div className="relative mx-auto min-h-[300px] max-w-6xl md:min-h-[320px] lg:min-h-[300px]">

          {/* Desktop: floating scattered avatars */}
          <FloatingAvatars avatars={avatars} />

          {/* Center Content */}
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center px-4 pt-4 text-center sm:px-10 sm:pt-8">

            {/* Mobile: row kor ka yaal heading */}
            <div className="mb-6 flex flex-wrap justify-center gap-2.5 md:hidden">
              {topAvatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar.image}
                  alt=""
                  className="h-9 w-9 rounded-lg object-cover shadow-sm ring-1 ring-black/5"
                />
              ))}
            </div>

            <h2 className="font-roboto text-2xl font-bold leading-tight text-primary sm:text-4xl lg:text-[42px]">
              Start Your Learning
              <br />
              Journey Today!
            </h2>

            <p className="mt-4 max-w-md text-xs leading-5 text-body sm:text-sm">
              Join thousands of learners and unlock
              <br className="hidden sm:block" />
              your potential with EduLearn.
            </p>

            <Button
              variant="primary"
              size="sm"
              radius="full"
              icon={<ArrowRight size={14} />}
              iconPosition="right"
              className="mt-6 px-6 font-semibold"
            >
              Get Started
            </Button>

            {/* Mobile: row hoos ka yaal button */}
            <div className="mt-6 flex flex-wrap justify-center gap-2.5 md:hidden">
              {bottomAvatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar.image}
                  alt=""
                  className="h-9 w-9 rounded-lg object-cover shadow-sm ring-1 ring-black/5"
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;