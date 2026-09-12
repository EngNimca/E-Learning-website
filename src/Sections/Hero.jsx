import Button from '../components/Button'
import { PlayIcon } from 'lucide-react'
import StudentAvatars from '../components/StudentAvatars'
import { heroStudent } from '../assets/images'
import FloatingStudentCard from '../components/FloatingStudentCard'
function Hero() {
  return <> 
    <section className=" bg-primary text-white">
      <div className="max-container px-6 sm:px-10 lg:px-16 ">
      {/* left side */}
      <div className="grid min-h-[650px] grid-cols-1 items-center padding-t gap-12 py-12 sm:py-16 sm:grid-cols-2 lg:grid-cols-2 lg:py-20 lg:gap-10">
          {/* Small Label */}
          <div className='max-w-xl'> 
          <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-medium  text-secondary'>
            Learn Online
            <span className='h-1.5 w-1.5 rounded-full bg-secondary'></span>
          </div>
          {/* Heading */}
          <h1 className='max-w-xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]'>
             Learn New Skills
            <br />
             Online. Anytime,
              <br />
              <span className= 'text-secondary'>
                Anywhere
              </span>
          </h1>
          {/* Description */}
          <p className='mt-4 max-w-xl text-sm leading-7 sm:text-base text-white/70'>
            Join thousands of students worldwide and access <br />
            high-quality courses taught by expert instructors. <br />
            Start your learning journey today!
          </p>
          {/* Buttons */}
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            <Button variants="secondary" size="lg" className="mr-4">Explore Courses</Button>
            
            <Button variant="secondary" size="lg" 
            radius='full'
            icon={<span className="text-sm"><PlayIcon /></span>} 
            iconPosition="left">
            Watch How It Works
            </Button>
          </div>
          {/* student avatars */}
          <StudentAvatars />
          </div>
          {/* Right Side image */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto" >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2rem]  ">

              <img
                src={heroStudent}
                alt="Student learning online"
                className="h-[400px] w-full object-cover sm:h-[480px]  "
              />

            </div>
            <FloatingStudentCard />
          </div>

        </div>

      </div>
    </section>
  </>
}

export default Hero


