"use client"
import { cn } from "@/utils/cn"
import { BackgroundGradientAnimation } from "./BaclgroundGradientAnimation"
import { GridGlobe } from "./GridGlobe"
import Lottie from "react-lottie"
import { useState } from "react"
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton"
import { IoCopyOutline } from "react-icons/io5"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  spareImg,
  img,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  id?: number
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
  img?: string
}) => {
  const [copied, setCopied] = useState<boolean>(false)
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ishaq404error@gmail.com")
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border-white/[0.3]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,0.9332107843137255) 4%, rgba(2,0,36,1) 24%, rgba(161,80,37,1) 53%, rgba(40,9,9,0.9976365546218487) 100%, rgba(255,0,0,0.76234243697479) 100%) ",
      }}
    >
      <div className={`h-full ${id === 6 && "flex justify-center"} `}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              className={cn(imgClassName, "object-center, object-cover")}
              src={img}
              alt={img}
            />
          )}
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${
            id === 5 && "opacity-80 w-full"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>
        {/* Gradient Section */}
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div
              className='absolute z-50 
             items-center flex justify-center text-white font-bold'
            /> */}
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 flex-col px-5 relative md:h-full min-h-72 p-5 lg:p-10"
          )}
        >
          <div className='font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
            {description}
          </div>
          <div className='font-sans text-lg font-bold  lg:text-3xl max-w-96 z-10'>
            {title}
          </div>

          {/* Globe Section */}
          {id === 2 && <GridGlobe />}

          {/* Tech Stack */}
          {id === 3 && (
            <div className='flex gap-3 lg:gap-5  w-fit absolute -right-2 top-0 lg:top-5 lg:-right-2'>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {
                  // left lists
                  ["JavaScript", "React JS", "Next JS"].map((item) => (
                    <span
                      key={item}
                      className='py-2 lg:py-2 px-2 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                    >
                      {item}
                    </span>
                  ))
                }
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />
              </div>
              <div className='flex flex-col gap-3 lg:gap-8'>
                <span className='py-4 px-3 rounded-lg text-center bg-[#10132e]' />

                {
                  // left lists
                  ["Typescript", "Node JS", "Express JS"].map((item) => (
                    <span
                      key={item}
                      className='py-2 lg:py-2 px-2 lg:px-3 text-xs lg:text-base
                       opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                    >
                      {item}
                    </span>
                  ))
                }
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-5 relative'>
              <div className='absolute -bottom-5 right-0'>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email Copied" : "Copy my email"}
                position='left'
                icon={<IoCopyOutline />}
                otherClasses='bg-[#161a31]'
                handleClick={handleCopyEmail}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
