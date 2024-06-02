
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {Link, useNavigate} from "react-router-dom"
import { redirect } from "react-router-dom";
import Profile from "./profile-page"
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-gray-50 px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" >
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Blog</span>
        </a>
        <div className="flex items-center gap-4">
          <form className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search blog posts..."
              className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <img src="src/assets/placeholder.png" width="32" height="32" className="rounded-full" alt="Avatar" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={()=>navigate('/profile')}>
                <a  >
                  Profile
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" >
                  Login
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#" >
                  Sign Up
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="src/assets/placeholder.png"
                width={400}
                height={200}
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" >
                    The Future of Web Development: Trends and Innovations
                  </a>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                  In this blog post, we explore the latest trends and innovations shaping the future of web development.
                  From cutting-edge technologies to emerging design patterns, we dive deep into the insights that will
                  help you stay ahead of the curve.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>John Doe</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>May 1, 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="src/assets/placeholder.png"
                width={400}
                height={200}
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" >
                    Mastering React: A Comprehensive Guide
                  </a>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                  In this comprehensive guide, we dive deep into the world of React, the popular JavaScript library for
                  building user interfaces. From fundamental concepts to advanced techniques, this post will equip you
                  with the knowledge and skills to become a React master.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>Jane Smith</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>April 15, 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="src/assets/placeholder.png"
                width={400}
                height={200}
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" >
                    Unleashing the Power of Tailwind CSS: A Beginner's Guide
                  </a>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                  In this beginner's guide, we explore the power of Tailwind CSS, a utility-first CSS framework that has
                  revolutionized the way we write and maintain styles. Learn how to leverage Tailwind's classes to
                  create beautiful, responsive, and maintainable designs.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>Sarah Lee</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>March 28, 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="src/assets/placeholder.png"
                width={400}
                height={200}
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" >
                    Exploring the Intersection of Design and Technology
                  </a>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                  In this blog post, we delve into the fascinating intersection of design and technology. We explore how
                  the latest advancements in web development, user experience, and emerging technologies are shaping the
                  future of digital experiences.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>Michael Johnson</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>February 10, 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="src/assets/placeholder.png"
                width={400}
                height={200}
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" >
                    The Rise of Serverless Computing: Revolutionizing Web Development
                  </a>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                  In this blog post, we explore the rise of serverless computing and its impact on web development. We
                  delve into the benefits, use cases, and best practices for leveraging serverless technologies to build
                  scalable, cost-effective, and highly performant web applications.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>Emily Chen</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>January 5, 2023</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="src/assets/placeholder.png"
                width={400}
                height={200}
                alt="Blog post cover"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-2">
                  <a href="#" >
                    Unlocking the Potential of Progressive Web Apps
                  </a>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                  In this blog post, we explore the world of Progressive Web Apps (PWAs) and how they are
                  revolutionizing the way we build and interact with web applications. Discover the benefits of PWAs,
                  including offline functionality, fast loading times, and enhanced user experiences.
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>David Lee</span>
                  <span className="mx-2">·</span>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span>December 15, 2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-50 px-4 md:px-6 py-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2023 Blog. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#" className="text-sm hover:underline" >
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline" >
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}