

function StudentAvatars() {
    const student = [
        {
      id: 1,
      image: "https://i.pravatar.cc/40?img=12",
      alt: "Student 1",
    },
    {
      id: 2,
      image: "https://i.pravatar.cc/40?img=32",
      alt: "Student 2",
    },
    {
      id: 3,
      image: "https://i.pravatar.cc/40?img=47",
      alt: "Student 3",
    },
    {
      id: 4,
      image: "https://i.pravatar.cc/40?img=49",
      alt: "Student 4",
    }
    ]
  return <>
      <div className="mt-8 flex items-center gap-3">
        <div className="flex -space-x-2">
          {student.map((student) => (
            <img
              key={student.id}
              src={student.image}
              alt={student.alt}
              className="w-10 h-10 rounded-full border-2 border-primary object-cover"
            />
          ))}
        </div>
        {/* student text */}
         <p className="text-xs text-white/80 sm:text-sm">
            <span className="font-semibold text-white">10K+</span>{" "}
            students already learning.
        </p>
      </div>
    </>
  
}

export default StudentAvatars
