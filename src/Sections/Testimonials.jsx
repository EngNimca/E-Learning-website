
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";

import TestimonialCard from "../components/TestimonialCard";
import { Custom1, Custom2, Custom3 } from "../assets/images"

function Testimonials() {
   const testimonials = [
    {
      image: Custom1,
      name: "Ali Lee",
      role: "Web Developer",
      review:
        "The courses are well structured and easy to follow. I got a job as a developer thanks to EduLearn.",
    },

    {
      image: Custom2,
      name: "Ayesha Khan",
      role: "Data Analyst",
      review:
        "Great platform with amazing instructors. The support team is very helpful and responsive.",
    },

    {
      image: Custom3,
      name: "Sara Smith",
      role: "Graphic Designer",
      review:
        "I love how I can learn at my own pace. The quality of content is outstanding!",
    },
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const nextTestimonial = () => {
  //   setCurrentIndex((prev) =>
  //     prev === testimonials.length - 1 ? 0 : prev + 1
  //   );
  // };

  // const previousTestimonial = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? testimonials.length - 1 : prev - 1
  //   );
  // };
  return  <>
       <section className="bg-white">
      <div className="max-container padding-x py-12 sm:py-16 lg:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="font-roboto text-3xl font-bold text-primary sm:text-4xl">
            What Our Students Say
          </h2>

          <p className="mt-2 text-xs text-body sm:text-sm">
            Real stories from learners who are achieving their goals.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              review={testimonial.review}
            />
          ))}

        </div>

        {/* Arrows */}
        <div className="mt-5 flex items-center justify-center gap-3">

        <Button
          variant="outline"
          size="sm"
          radius="full"
          iconOnly
          icon={<ChevronLeft size={16} />}
          className="border-gray-200 text-gray-400 hover:border-gray-300 hover:bg-white hover:text-primary"
          
        />

        <Button
          variant="primary"
          size="sm"
          radius="full"
          iconOnly
          icon={<ChevronRight size={16} />}
          className="hover:brightness-90"
          
        />

</div>

      </div>
    </section>
    </>
  
}

export default Testimonials
