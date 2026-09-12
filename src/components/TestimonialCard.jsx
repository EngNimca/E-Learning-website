import { Star } from "lucide-react";

function TestimonialCard({ image,
  name,
  role,
  review,
}) {
  return <>
      <div className="flex h-full flex-col rounded-xl bg-primary p-5 sm:p-6">

      {/* Student Info */}
      <div className="flex items-center gap-3">

        <img
          src={image}
          alt={name}
          className="h-10 w-10 shrink-0 rounded-full object-cover"
        />

        <div>
          <h3 className="font-roboto text-sm font-bold text-secondary">
            {name}
          </h3>

          <p className="mt-0.5 text-xs text-white/70">
            {role}
          </p>
        </div>

      </div>

      {/* Review */}
      <p className="mt-5 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
        {review}
      </p>

      {/* Stars */}
      <div className="mt-auto flex gap-1 pt-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={13}
            fill="currentColor"
            className="text-secondary"
          />
        ))}
      </div>

    </div>

    </>
  
}

export default TestimonialCard
