
function HowItWorksSteps({number, title, description}) {
  return <>
    <div className="flex items-start rounded-xl gap-4 border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-white/10 sm:p-5">
    {/* number */}
    <div className="w-11 h-11  rounded-lg  flex items-center justify-center border border-secondary/40 bg-secondary/5 text-xl  font-semibold text-secondary">
        {number}
    </div>
    {/* content */}
    <div>
        <h3 className="font-roboto text-base font-bold text-white sm:text-lg ">
            {title}
        </h3>
        <p className="mt-1 text-xs leading-5 text-white/60 sm:text-sm">
            {description}
        </p>
    </div>
   
    </div>
    </>
  
}

export default HowItWorksSteps
