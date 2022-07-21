import React from 'react';

export default function daftar(){
    return(
        <div>
            <main className="bg-dark-primary h-screen p-[108px] w-full flex items-center justify-center flex-col gap-y-4 md:gap-y-8">
                <h1 className="font-primary text-white text-4xl">Pendaftaran</h1>
                <div className="gap-y-4 md:gap-y-8 max-w-xl flex flex-col text-center">
                    <a className="font-secondary text-white border-2 px-12 py-8 w-full hover:bg-white hover:text-dark-primary" href="https://forms.gle/wYyCBnnEsvsyc3Et5">
                        Pendaftaran Schematics NLC
                    </a>
                    <a className="font-secondary text-white border-2 px-12 py-8 w-full hover:bg-white hover:text-dark-primary" href="https://forms.gle/rf9vpMUg5nYJwaoK9">
                        Pendaftaran Schematics NPC Senior
                    </a>
                    <a className="font-secondary text-white border-2 px-12 py-8 w-full hover:bg-white hover:text-dark-primary" href="https://forms.gle/NuBUvtBG62ZzyTet6">
                        Pendaftaran Schematics NPC Junior
                    </a>
                    <a className="font-secondary text-white border-2 px-12 py-8 w-full hover:bg-white hover:text-dark-primary" href="https://schematics.its.ac.id/pendaftaran-schematics">
                        Contact Person Pendaftaran
                    </a>
                </div>
            </main>
        </div>
    )
}