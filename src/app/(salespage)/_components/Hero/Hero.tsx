import { Button } from "@/components/ui/button";
import { oswald } from "@/lib/constants/useFonts";
import { cn } from "@/lib/utils";
import Image from "next/image";


const Hero = () => {
  return (
    <main className="flex h-[80vh] overflow-y-hidden">
    {/* decoration  */}
    <div className="h-[80vh] w-[30rem] -z-10 absolute -right-[10%] top-0 bg-secondary">
      <div className="h-full w-full relative bg-transparent">
        <div className="h-[30rem] w-[20rem] bg-accent opacity-95 rounded-md  absolute transform top-1/2 -translate-y-1/2 -left-[30%]">

        </div>
      </div>
    </div>

    <div className="flex items-center justify-end w-full relative">
      <div className="flex-1 flex flex-col items-end py-2 gap-3 justify-center">
        <div className="text-xl font-semibold">
          <h3>A SURREAL EXPERIENCE</h3>
        </div>
        <div className={cn("text-7xl font-bold leading-[5.1rem] flex flex-col gap-8", oswald.className)}>
          <div>
            <h2>That You Will Love</h2>
            <h2>To Surender</h2>
          </div>
          <div className="flex gap-4 ml-2">
            <div className="h-2 bg-secondary rounded-full w-2" />
            <div className="h-2 bg-secondary rounded-md w-20" />
          </div>
        </div>
        <div>
          <Button className="font-bold text-xl py-7 bg-secondary">Book Now</Button>
        </div>
      </div>
      <div>
        <div className="h-[40rem]">
          <Image
            src={'/heroImage.png'}
            alt={"hero image"}
            height={1014}
            width={340}
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden line-0">
        <svg 
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className=" fill-[#FFF2F6]"></path>
        </svg>
      </div>
    </div>
  </main>
  )
}

export default Hero
