import Button from '../components/Button'
import { PlayIcon } from 'lucide-react'
import StudentAvatars from '../components/StudentAvatars'
import { heroStudent } from '../assets/images'
import FloatingStudentCard from '../components/FloatingStudentCard'
function Hero() {
  return <> 
    <section id="home" className=" bg-primary text-white scroll-mt-28">
      <div className="max-container padding-x">
      {/* left side */}
      <div className="grid min-h-[560px] grid-cols-1 items-center gap-10 pt-28 pb-12 sm:min-h-[600px] sm:grid-cols-2 sm:gap-8 sm:pb-14 lg:min-h-[640px] lg:gap-12 lg:pt-28 lg:pb-16 xl:min-h-[680px] xl:gap-16">
          {/* Small Label */}
          <div className='w-full max-w-xl xl:max-w-2xl'> 
          <div className='mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-3 py-1.5 text-xs font-medium  text-secondary'>
            Learn Online
            <span className='h-1.5 w-1.5 rounded-full bg-secondary'></span>
          </div>
          {/* Heading */}
          <h1 className='max-w-xl text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-[3.25rem] xl:text-6xl'>
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
            Join thousands of students worldwide and access{' '}
            <br className="hidden xl:block"/>
            high-quality courses taught by expert instructors.{' '}
            <br className="hidden xl:block"/>
            Start your learning journey today!
          </p>
          {/* Buttons */}
          <div className='mt-5 flex flex-wrap items-center gap-3'>
            <Button variants="secondary" size="lg" className="mr-1 sm:mr-2">Explore Courses</Button>
            
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
          <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:ml-auto xl:max-w-xl" >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[2rem]  ">

              <img
                src={heroStudent}
                alt="Student learning online"
                className="h-[360px] w-full object-cover sm:h-[420px] lg:h-[460px] xl:h-[500px]"
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
