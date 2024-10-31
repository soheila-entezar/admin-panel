import React from "react";
import { LuLinkedin } from "react-icons/lu";
import { TbBrandTwitter } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";
function AdminPanel() {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center ">
      <div className="w-[98%] lg:w-[30%] h-[70%] shadow-md rounded-lg flex flex-wrap justify-center items-center">
        <div className="w-[80%] h-[15%] flex flex-wrap items-end">
          <h1 className="w-[100%] h-[45%] font-[bold] font-semibold text-[22px]">Sign in to account</h1>
          <div className=" w-[100%] h-[45%] font-[thin] text-[15px] text-[#9ca3af]">Enter your email & password to login</div>
        </div>
        <div className="w-[80%] h-[75%]">
          <div className="w-[100%] h-[30%]">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email"
              className="w-[100%] h-[35%]"
            />
          </div>
          <div  className="w-[100%] h-[30%]">
            <label>Password</label>
            <div className="flex justify-between h-[35%] relative">
              <input
                type="password"
                placeholder="******"
                className="w-[100%] h-[100%]"
              />
              <div className="absolute top-[5px] right-[10px]">
                <span>show</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="w-[50%]">
               <input type="checkbox" />
            <label>Remember password</label>
            </div>
           <a className="w-[40%]">Forgot password?</a>
           <button  className="w-[100%]">sing in</button>
          </div>
          <h6>Or Sign in with</h6>
          <div className="flex">
            <button className="flex"><LuLinkedin /> linkedin</button>
            <button className="flex"><TbBrandTwitter /> twitter</button>
            <button className="flex"><FiFacebook /> facebook</button>
          </div>
          <p>Don't have account? <Link href={''}> </Link></p>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
