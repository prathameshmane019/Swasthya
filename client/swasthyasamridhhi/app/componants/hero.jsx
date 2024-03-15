'use client'
import React from "react";
import {Image} from "@nextui-org/react";

export default function App(){
    return(<>
        <div className=" flex flex-col lg:flex-row lg:m-20 m-5">
            <div className="lg:w-[45%] md:w-[100%]">
                <img src="https://i.ibb.co/GdP1Kt7/Asset-2.png"></img>
            </div>
            
            <div className=" font-semibold lg:m-12 m-5 text-[#490c57] lg:w-[50%] md:w-[100%]">
                <h1 className=" text-[25px] opacity-40 we">
                     Assisted Living Care
                </h1>
                <h1 className=" leading-none lg:text-[80px] md:text-[20px]">
                     Scinor Care 
                     & Medical Help
                </h1>
                <p className="mt-5 leading-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                <div className="flex gap-2">
                    <button className="bg-[#490c57] mt-8 p-5 w-52 text-white">Read More </button>
                    <button className=" border-2 border-[#490c57] text-[#490c57] mt-8 p-5 w-52">Call Us </button>
                </div>
            </div>
        </div>

        

    </>  
   )
}