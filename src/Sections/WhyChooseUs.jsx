import FeatureCard from "../components/FeatureCard";
import {
  BookOpen,
  NotebookPen,
  Users,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: BookOpen,
      title: "Custom Study Plans",
      description:
        "Personalized plans focus on your strengths and weaknesses, helping you learn smarter and reach your goals faster.",
    },
    {
      icon: NotebookPen,
      title: "Real Exam Practice",
      description:
        "Practice with real exam-style questions to build confidence, improve timing, and track your progress.",
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description:
        "Get instant help from experienced educators who guide and motivate you every step of the way.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-container padding-x py-12 sm:py-16 lg:py-20">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          
          <p className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-2 text-xs font-medium text-primary">
            Why Choose Us
          </p>

          <h2 className="font-roboto text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Everything you need to succeed in learning
          </h2>

        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;