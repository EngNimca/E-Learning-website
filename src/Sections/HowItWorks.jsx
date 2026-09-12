
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
  <section className="bg-primary ">
    <div className="max-container padding-x py-12 sm:py-16 lg:py-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* left side */}
      <div className=" relative lg:min-h-[470px] flex max-w-xl flex-col">

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
              Get started in just a few minutes <br /> and begin your learning
              journey <br /> with ease.
            </p>
            

            {/* Image */}
          <div className=" w-full max-w-[400px] mt-8 lg:absolute lg:left-[20%] lg:top-[53%] lg:mt-0  ">
              <img
                src={Student1}
                alt="Student learning"
                className="w-full rounded-2xl object-cover "
              />
            </div> 
     </div>

      
      {/* right side */}
      <div className="flex flex-col gap-4  md:mt-10">
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
