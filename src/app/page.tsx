import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#2c2c2c] text-[#2c2c2c]">
      <div className="flex flex-col items-center justify-center h-[66vh] w-full bg-[#E6E0D6] border-y-2 border-[#07989b]">
        <div className="px-10 pb-20 rounded-2xl border-x border-[#7f7f7f]">
          <div className="flex flex-col items-center text-xl font-bold">
            <Image
              src="/logo_noBG.png"
              alt="SOLVR"
              width={200}
              height={200}
            />
            <span className="-mt-10 font-syne">SOLVR Development</span>
          </div>
          <div className="flex flex-col w-[350px] mt-6 justify-center items-center font-syne text-center">
            <span className='mb-2'>Comprehensive, full-service solutions.</span>Specializing in custom websites, landing pages, and web applications.
<a href="mailto:ianm@solvrdev.com" className="cursor-pointer mt-10 px-6 py-3 mx-auto rounded-xl text-[#2c2c2c] font-semibold bg-[#E6E0D6] shadow-[6px_6px_12px_#c2beb6,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#c2beb6,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 inline-block text-center">
  Contact
</a>

                    </div>
        </div>
      </div>
    </div>
  );
}
