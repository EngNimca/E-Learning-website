
function StatItem({value, suffix, title, description}) {
  return <>
      <div className="flex flex-col">
      <h3 className="font-roboto text-2xl font-bold text-primary sm:text-3xl">
        {value}
        <span className="text-secondary">{suffix}</span>
      </h3>

      <h4 className="mt-1 text-sm font-bold text-primary sm:text-sm">
        {title}
      </h4>

      <p className="mt-1 max-w-[150px] text-[10px] leading-4 text-body sm:text-xs sm:leading-5">
        {description}
      </p>
    </div>
    </>
  
}

export default StatItem
