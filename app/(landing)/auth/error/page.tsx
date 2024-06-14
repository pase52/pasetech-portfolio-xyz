
'use client'
import { useSearchParams } from 'next/navigation'
import Image from "next/image";


export default function AuthErroPage() {
  // error passed in query params as ?error=
  
  const searchParams = useSearchParams()
 
  const error = searchParams.get('error')
  
  return (
    <div className="flex items-center justify-center mt-20  md:mt-20 lg:mt-20 xl:mt-10 2xl:mt-40  ">
      <div className="mx-auto my-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px] px-2">
        <div className="flex flex-col content-center justify-center space-y-2 text-center">
          <Image
            src="/logo.png"
            alt="Andrew Sam"
            width="50"
            height="50"
            className="mx-auto rounded-sm"
          ></Image>

          <h1 className="text-2xl font-semibold tracking-tight">
            An error occurred while processing you authentication request.
          </h1>
          <p className="text-lg">
            {error}
          </p>
        </div>
      </div>
    </div>
  );
}
