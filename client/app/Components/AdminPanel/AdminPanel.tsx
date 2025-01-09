import React from "react";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";
function AdminPanel() {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center ">
      <div className="w-[95%] sm:w-[450px] h-[80%] md:h-[70%] shadow-md rounded-lg flex flex-wrap justify-center items-center my-4">
        <div className="w-[90%] sm:w-[80%] h-[15%] flex flex-wrap items-end">
          <h1 className="w-[100%] h-[45%] font-[bold] font-semibold text-[22px]">Sign in to account</h1>
          <div className=" w-[100%] h-[45%] font-[thin] text-[15px] text-[#9ca3af]">Enter your email & password to login</div>
        </div>
        <div className="w-[90%] sm:[80%] h-[70%] xl:h-[65%] md:h-[75%] flex flex-wrap items-center">
          <div className="w-[100%] h-[20%]   m-auto">
            <label className="h-[20%] text-[14px]  font-semibold text-[#374151]">Email Address</label>
            <input
              type="email"
              placeholder="Test@gmail.com"
              className="w-[100%] h-[55%] mt-2 bg-[#e5efef] px-2 rounded-md font-[thin] text-[14px]"
            />
          </div>
          <div  className="w-[100%] h-[20%] m-auto">
            <label className="text-[14px] h-[15%] font-semibold text-[#374151]">Password</label>
            <div className="flex justify-between h-[55%] relative">
              <input
                type="password"
                placeholder="******"
                className="w-[100%] h-[100%] mt-2 px-2 bg-[#e5efef] rounded-md"
              />
              <div className="absolute top-[15px]  right-[10px]">
                <span className="text-[14px] font-[thin] text-[#076a6a]">show</span>
              </div>
            </div>
          </div>
          <div className=" w-[100%] h-[30%] md:h-[25%]  flex flex-wrap justify-between  mt-4 xl:mt-4">
            <div className="w-[100%] md:w-[50%] h-[23%] lg:h-[30%]">
               <input className="" type="checkbox" />
            <label>Remember password</label>
            </div>
           <a className="w-[100%] md:w-[40%] h-[23%]">Forgot password?</a>
           <button  className="w-[100%] h-[35%] md:h-[47%] bg-[#006666] text-[#f8fafc] rounded-md font-light xl:mt-[15px]">sing in</button>
          </div>
          <div className=" w-[100%] h-[8%] md:h-[10%] lg:h-[15%] flex items-center"><h6 className="font-[bold] text-[#5b5e61]">Or Sign in with</h6></div>
          <div className="w-[100%] flex flex-wrap justify-between lg:justify-between h-[12%]">
            <button className="w-[32%] md:w-[30%] h-[100%] flex bg-[#e5efef] hover:bg-[#f5f5f5]  rounded-md items-center justify-center px-2 my-2"><LuLinkedin  className="w-[20%] lg:w-[20%] text-[#0077b5] mx-1"/><p className="w-[48%] font-[thin]">linkedin</p> </button>
            <button className="w-[32%] md:w-[30%] h-[100%] flex bg-[#e5efef] hover:bg-[#f5f5f5]  rounded-md items-center justify-center  px-2 my-2"><TbBrandTwitter className="w-[20%] lg:w-[20%] text-[#0077b5] mx-1" /><p className="w-[48%] font-[thin]">twitter</p> </button>
            <button className="w-[32%] md:w-[30%] h-[100%] flex bg-[#e5efef] hover:bg-[#f5f5f5]  rounded-md items-center justify-center   my-2"><FiFacebook className="w-[20%] lg:w-[20%] text-[#0077b5] " /><p className="w-[55%] font-[thin]">facebook</p> </button>
          </div>
         
        </div>
        <div className="h-[10%] md:h-[10%]  flex items-center">  <p className=" w-[100%] ">Don't have account? <Link href={''}>create account </Link></p></div>
      </div>
    </div>
  );
}

export default AdminPanel;
