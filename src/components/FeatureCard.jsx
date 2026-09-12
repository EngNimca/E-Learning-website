
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center transition duration-300 hover:-translate-y-1">
      
      {/* Icon */}
      <div className="mb-5 flex justify-center">
        <Icon
          size={32}
          strokeWidth={1.8}
          className="text-secondary"
        />
      </div>

      {/* Title */}
      <h3 className="font-roboto text-lg font-bold text-primary">
        {title}
      </h3>

      {/* Description */}
      <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-body">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;