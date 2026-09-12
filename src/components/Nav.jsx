import { GraduationCap } from "lucide-react";
import { Menu } from "lucide-react";
import Button from "../components/Button";
function Nav() {
  return <>
    <header className="absolute top-0 left-0 z-10 w-full px-4 sm:px-6 lg:px-10 py-4" >
     <nav className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-6 rounded-full bg-white px-6 text-black">

      <div className="flex items-center gap-2">
        <GraduationCap className="text-secondary" size={24} strokeWidth={2.5} />
        <h1 className="font-bold text-xl  text-secondary font-roboto">
          EduLearn
        </h1>
      </div>

      <ul className="hidden sm:flex items-center text-sm gap-8 font-medium cursor-pointer ">
        <li className="hover:text-secondary">Home</li>
        <li className="hover:text-secondary">Courses</li>
        <li className="hover:text-secondary">About Us</li>
        <li className="hover:text-secondary">Pricing</li>
        <li className="hover:text-secondary">Blog</li>
      </ul>
      <div className="hidden sm:flex ">
        {/* <button className="bg-secondary text-black text-sm font-semibold py-2 px-4 rounded-full hover:bg-secondary/80">Get Started</button> */}
        <Button variant="primary" size="sm" className="ml-4">Get Started</Button>
      </div>

      {/* mobile menu */}
      <div className="sm:hidden  ">
        <Menu size={24} strokeWidth={2.5} />
      </div>

     </nav>
    </header>
    
  </>
}

export default Nav
