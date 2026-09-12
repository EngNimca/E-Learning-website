import Button from "./Button"
import {Check} from "lucide-react"

function PricingCard({ title,
  description,
  price,
  features,
  featured = false,}) {
  return <>
       <div
      className={`relative flex w-full flex-col rounded-3xl border p-6 sm:p-8 transition duration-300 hover:-translate-y-1
      ${
        featured
          ? "border-primary bg-primary text-white"
          : "border-gray-200 bg-white text-primary"
      }`}
    >

      {/* Title */}
      <Button variant={featured ? "text1" : "outline"} size="lg" radius="lg" 
      className="w-[60px] h-[30px]" >
        {title}
      </Button>

      {/* Description */}
      <p
        className={`mt-2 text-sm leading-6 ${
          featured ? "text-white/70" : "text-body"
        }`}
      >
        {description}
      </p>

      {/* Price */}
      <div className="mt-4 flex items-end gap-1">
        <span className={`font-roboto text-4xl font-bold
             ${featured ? "text-secondary" : "text-primary"}`}>
          ${price}
        </span>

        <span
          className={`mb-1 text-sm ${
            featured ? "text-secondary" : "text-body"
          }`}
        >
          /Month
        </span>
      </div>

      {/* Divider */}
      <div
        className={`my-4 h-px ${
          featured ? "bg-white/10" : "bg-gray-200"
        }`}
      />

      {/* Features */}
      <div className="flex flex-col gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${
                featured
                  ? "bg-secondary text-primary"
                  : "bg-secondary/20 text-primary"
              }`}
            >
              <Check size={13} strokeWidth={3} />
            </div>

            <p
              className={`text-sm ${
                featured ? "text-white/80" : "text-body"
              }`}
            >
              {feature}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-auto pt-8">
        <Button
          variant={featured ? "primary" : "outline"}
          size="lg"
          radius="full"
          className="w-full"
        >
          Get Started
        </Button>
      </div>
    </div>
    </>
  
}

export default PricingCard
