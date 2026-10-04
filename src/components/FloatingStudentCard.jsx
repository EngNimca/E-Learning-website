import { Users } from "lucide-react"

function FloatingStudentCard() {
  return <>
      <div className="absolute bottom-4 right-4 rounded-2xl bg-white px-5 py-3 text-xl shadow-xl sm:bottom-6 sm:right-6 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
            
        {/* icon */}
        <div className="shrink-0">
        <Users size={30} strokeWidth={2.8}  className=" text-secondary"/>
        </div>
        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-black leading-none">
            10K+
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Happy Students
          </p>

          <p className="mt-1 text-sm text-yellow-400">
            ★★★★★
          </p>
        </div>

        </div>
      </div>
    </>
  
}

export default FloatingStudentCard
