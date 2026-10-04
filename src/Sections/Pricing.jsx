import { useState } from 'react'
import Button from '../components/Button'
import PricingCard from '../components/PricingCard'

function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const plans = [
    {
      title: "Basic",
      description: "Perfect for beginners.",
      monthlyPrice: "19",
      yearlyPrice: "190",
      features: [
        "Access to GED lessons",
        "Practice exercises",
        "Basic study materials",
        "Progress tracking",
      ],
    },
    {
      title: "Premium",
      description: "Best for intermediate learners.",
      monthlyPrice: "29",
      yearlyPrice: "290",
      featured: true,
      features: [
        "All Basic features",
        "Full GED course access",
        "Practice exams",
        "Personalized learning path",
        "Instructor support",
      ],
    },
    {
      title: "Pro",
      description: "Perfect for advanced learners.",
      monthlyPrice: "49",
      yearlyPrice: "350",
      features: [
        "All Standard features",
        "One-on-one tutoring",
        "Advanced mock exams",
        "Priority instructor support",
        "Study resources",
      ],
    },
  ];

  return (
    <>
      <section id="pricing" className="bg-white scroll-mt-28">
        <div className="max-container py-12 sm:py-16 lg:py-20 padding-x">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold text-primary font-roboto">
              Find the Right Plan for You
            </h1>
            <div className="mt-4 flex justify-center gap-3">
              <Button
                variant={billing === 'monthly' ? 'secondary' : 'primary'}
                size="sm"
                className={`text-sm font-semibold ${
                  billing === 'monthly'
                    ? ''
                    : 'border border-gray-500 bg-white font-semibold'
                }`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </Button>
              <Button
                variant={billing === 'yearly' ? 'secondary' : 'primary'}
                size="sm"
                className={`ml-4 text-sm font-semibold ${
                  billing === 'yearly'
                    ? ''
                    : 'border border-gray-500 bg-white font-semibold'
                }`}
                onClick={() => setBilling('yearly')}
              >
                Yearly
              </Button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                description={plan.description}
                price={billing === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice}
                period={billing === 'yearly' ? '/Year' : '/Month'}
                features={plan.features}
                featured={plan.featured}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
