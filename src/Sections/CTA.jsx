
import Button from "../components/Button";
import FloatingAvatars from "../components/FloatingAvatars";
import { ArrowRight } from "lucide-react";
import { Custom1, Custom2, Custom3, Custom4, Custom5, Custom6 } from "../assets/images";

function CTA() {
  const avatars = [
    { image: Custom1, position: "left-[2%] top-[10%]" },
    { image: Custom2, position: "left-[16%] top-[6%]" },
    { image: Custom3, position: "left-[8%] top-[48%]" },
    { image: Custom4, position: "left-[16%] bottom-[8%]" },
    { image: Custom5, position: "left-[2%] bottom-[10%]" },
    { image: Custom6, position: "right-[2%] top-[10%]" },
    { image: Custom2, position: "right-[16%] top-[6%]" },
    { image: Custom5, position: "right-[8%] top-[48%]" },
    { image: Custom4, position: "right-[16%] bottom-[8%]" },
    { image: Custom6, position: "right-[2%] bottom-[10%]" },
  ];

  // Mobile-ka: qaybi 10-ka sawir → 5 kor, 5 hoos
  const topAvatars = avatars.slice(0, 5);
  const bottomAvatars = avatars.slice(5, 10);

  return (
    <section id="get-started" className="bg-primary/5 scroll-mt-28">
      <div className="max-container padding-x py-12 sm:py-16 lg:py-20">
        <div className="relative mx-auto flex min-h-[280px] max-w-6xl items-center justify-center md:min-h-[340px] lg:min-h-[360px] xl:min-h-[380px]">

          {/* Desktop: floating scattered avatars */}
          <FloatingAvatars avatars={avatars} />

          {/* Center Content */}
          <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-6 text-center sm:px-10 sm:py-8">

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
