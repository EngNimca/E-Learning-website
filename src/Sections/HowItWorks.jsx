
import { Student1 } from "../assets/images"
import Button from "../components/Button"
import HowItWorksSteps from "../components/HowItWorksSteps"
import { ArrowRight } from "lucide-react";


function HowItWorks() {
   const steps = [
    {
      number: "01",
      title: "Choose a Course",
      description:
        "Browse hundreds of courses and pick the one that's right for you.",
    },
    {
      number: "02",
      title: "Start Learning",
      description:
        "Access your course materials and learn at your own pace.",
    },
    {
      number: "03",
      title: "Achieve Your Goals",
      description:
        "Apply your knowledge and achieve your learning goals.",
    },
  ];
  return <>
  <section id="courses" className="bg-primary scroll-mt-28">
    <div className="max-container padding-x py-12 sm:py-16 lg:py-20 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
      {/* left side */}
      <div className="flex w-full flex-col">

        {/* Label */}
        <Button
              variant="primary"
              size="sm"
              radius="full"
              className="mb-4 h-[30px] w-[150px] bg-secondary/10 text-secondary"
            >
              How It Works
            </Button>
          {/* Heading */}
           <h2 className="font-roboto text-4xl font-bold leading-tight text-white sm:text-5xl">
            Simple Steps to
            <br />
            Start Learning
            </h2>
            {/* Description */}
             
            <p className="mt-5 max-w-md text-sm leading-6 text-white/70 sm:text-base ">
              Get started in just a few minutes and begin your learning
              journey with ease.
            </p>
            

            {/* Image */}
          <div className="mt-8 w-full max-w-[380px] sm:max-w-[420px] lg:mt-10 lg:ml-4 xl:ml-8">
              <img
                src={Student1}
                alt="Student learning"
                className="aspect-[4/3] w-full rounded-2xl object-cover "
              />
            </div> 
     </div>

      
      {/* right side */}
      <div className="flex w-full flex-col gap-4 lg:pt-2">
        {
          steps.map((step)=>
          <HowItWorksSteps 
           key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
           />
        )}
        
        <Button variant="outline" size="md" 
        icon={<span className=" text-secondary"><ArrowRight /></span>}
        iconPosition="right"
        className="self-start text-secondary">Learn More</Button>
      </div>
    </div>
    
  </section>
      
    </>
  
}

export default HowItWorks
