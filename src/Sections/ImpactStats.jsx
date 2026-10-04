
import StatItem from '../components/StatItem'

function ImpactStats() {
    const stats = [
  {
    value: "15K",
    suffix: "+",
    title: "Enrolled Students",
    description: "Join a growing community of lifelong learners.",
  },
  {
    value: "500",
    suffix: "+",
    title: "Online Courses",
    description: "Wide range of subjects to choose from.",
  },
  {
    value: "200",
    suffix: "+",
    title: "Expert Instructors",
    description: "Learn from industry experts & professionals.",
  },
  {
    value: "98",
    suffix: "%",
    title: "Satisfaction Rate",
    description: "Students love our learning experience.",
  },
];

  return  <>
      <section className="bg-primary/3">
        <div className="max-container padding-x py-6 sm:py-8 lg:py-7"> 
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:items-start lg:gap-6 xl:gap-8">
            {/* section title */}
            <div>
                <h2 className="font-roboto text-xl font-bold leading-tight text-primary sm:text-2xl"> 
                    Our Impact
                <br />
                    In Numbers
                </h2>
            </div>
             {/* Statistics */}
             {stats.map((stat)=>(
                <StatItem key={stat.title} 
                value={stat.value} 
                suffix={stat.suffix}
                title={stat.title} 
                description={stat.description} />
             ))}
        </div>
        </div>
      </section>
    </>
  
}

export default ImpactStats
