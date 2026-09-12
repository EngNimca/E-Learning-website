import { Check, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

function FAQItem({  question,
  answer,
  isOpen,
  onClick}) {
  return <>
      <div className={`overflow-hidden rounded-lg border transition-all duration-300 
        ${isOpen ? "border-gray-200 bg-white" : "border-gray-200 bg-white"}`}>

        <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-4 py-3 text-left sm:px-5 sm:py-4"
      >
        {/* Left side */}
        <div className="flex min-w-0 items-center gap-2.5">

          {/* Left icon */}
          <span
            className={`flex h-5 w-5  items-center justify-center ${
              isOpen
                ? "text-secondary"
                : "text-primary"
            }`}
          >
            {isOpen ? (
              <Check size={14} strokeWidth={2.5} />
            ) : (
              <ChevronRight size={14} strokeWidth={2} />
            )}
          </span>

          {/* Question */}
          <span className="font-roboto text-xs font-semibold text-primary sm:text-sm">
            {question}
          </span>
        </div>

        {/* Right arrow */}
        <span className="ml-3  text-gray-400">
          {isOpen ? (
            <ChevronUp size={15} strokeWidth={2} />
          ) : (
            <ChevronDown size={15} strokeWidth={2} />
          )}
        </span>
      </button>

       {/* Answer */}
      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-11 pb-4 pr-8 sm:px-[52px] sm:pb-5">
            <p className="text-[11px] leading-5 text-body sm:text-xs">
              {answer}
            </p>
          </div>
        </div>
      </div>

      </div>
    </>
  
}

export default FAQItem
