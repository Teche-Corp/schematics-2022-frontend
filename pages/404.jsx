import Image from 'next/image';
export default function Custom404() {
    return (
      <main>
        <div className="w-full h-screen bg-[url('/404/404-background.png')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative flex flex-row items-end mt-12">
              <h1 className="font-[400] absolute bottom-24 translate-y-1/2 left-0 -translate-x-full text-[#FFFFFF] text-[256px] font-primary rotate-[-12deg] align-bottom">
                4
              </h1>
              <Image
                src="/404/schematics.svg"
                alt="Error 404"
                width={350}
                height={350}
              />
              <h1 className="font-[400] translate-y-1/2 absolute bottom-24 right-0 translate-x-full text-[#FFFFFF] text-[256px] font-primary rotate-[12deg] align-bottom">
                4
              </h1>
            </div>
            <p className="font-secondary text-[#FFFFFF] text-[40px] font-[500] mt-4">
              Ugh! No Gravity in Here
            </p>
          </div>
        </div>
      </main>
    );
}
