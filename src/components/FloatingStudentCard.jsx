import { Users } from "lucide-react"

function FloatingStudentCard() {
  return <>
      <div className="absolute bottom-5 right-3 rounded-2xl bg-white px-6 py-4 text-xl shadow-xl sm:bottom-8 sm:right-0">
        <div className="flex items-center gap-3">
            
        {/* icon */}
        <div>
        <Users size={30} strokeWidth={2.8}  className=" text-secondary"/>
        </div>
        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-black mt-6">
            10K+
          </h3>

          <p className="text-xs text-gray-500">
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
