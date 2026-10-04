import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../components/Button";
import TestimonialCard from "../components/TestimonialCard";
import { Custom1, Custom2, Custom3, Custom4, Custom5, Custom6 } from "../assets/images";

const testimonials = [
  {
    image: Custom1,
    name: "Ali Lee",
    role: "Web Developer",
    review: "The courses are well structured and easy to follow. I got a job as a developer thanks to EduLearn.",
  },
  {
    image: Custom2,
    name: "Ayesha Khan",
    role: "Data Analyst",
    review: "Great platform with amazing instructors. The support team is very helpful and responsive.",
  },
  {
    image: Custom3,
    name: "Sara Smith",
    role: "Graphic Designer",
    review: "I love how I can learn at my own pace. The quality of content is outstanding!",
  },
  {
    image: Custom4,
    name: "Omar Hassan",
    role: "UI Designer",
    review: "EduLearn helped me switch careers confidently. The lessons are clear and practical.",
  },
  {
    image: Custom5,
    name: "Maya Chen",
    role: "Product Manager",
    review: "The instructors explain complex topics simply. I recommend EduLearn to every beginner.",
  },
  {
    image: Custom6,
    name: "James Brown",
    role: "Software Engineer",
    review: "Flexible schedules and strong support made learning fit around my full-time job.",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState("next"); // next | prev — animation + arrow color

  const next = () => {
    setDir("next");
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    setDir("prev");
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  };

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="bg-white scroll-mt-28">
      <div className="max-container padding-x py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-roboto text-3xl font-bold text-primary sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-2 text-xs text-body sm:text-sm">
            Real stories from learners who are achieving their goals.
          </p>
        </div>

        <div
          key={`${index}-${dir}`}
          className={`mt-8 grid grid-cols-1 gap-4 overflow-hidden sm:mt-10 md:grid-cols-2 lg:grid-cols-3 ${
            dir === "next" ? "animate-slide-next" : "animate-slide-prev"
          }`}
        >
          {visible.map((item) => (
            <TestimonialCard
              key={item.name}
              image={item.image}
              name={item.name}
              role={item.role}
              review={item.review}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            variant={dir === "prev" ? "primary" : "outline"}
            size="sm"
            radius="full"
            iconOnly
            icon={<ChevronLeft size={16} />}
            className={dir === "prev" ? "" : "border-primary/20 text-primary"}
            onClick={prev}
          />
          <Button
            variant={dir === "next" ? "primary" : "outline"}
            size="sm"
            radius="full"
            iconOnly
            icon={<ChevronRight size={16} />}
            className={dir === "next" ? "" : "border-primary/20 text-primary"}
            onClick={next}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
