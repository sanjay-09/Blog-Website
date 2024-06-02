
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {Link, useNavigate} from "react-router-dom"
import { redirect } from "react-router-dom";
import Profile from "./profile-page"
import { useEffect, useState } from "react";

import Blogs from "./Blogs";
export default function Home() {
  const [blogs,setBlogs]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getData();

  },[]);
  const getData=async()=>{
    const response=await fetch("http://localhost:3005/api/blogs");
    const data=await response.json();
    console.log(data.data);
    setBlogs(data.data);

    
  }
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
            {
              blogs.length>0 && blogs.map((item)=>{
                return <Blogs data={item}/>
              })
            }
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