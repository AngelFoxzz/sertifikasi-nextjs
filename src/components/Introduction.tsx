import Image from "next/image";

export default function Introduction () {
    return (
        <>
       <div className="w-screen h-[500px] p-8" style={{ backgroundColor: '#222' }}>
            <div className="flex justify-between items-center">
                <div>
                  <p className="text-white text-2xl font-bold">
                    Sistem Informasi
                  </p>
                <h2 className="text-7xl text-[#FEF3E2] font-semibold">Hello I'm</h2>
                <h2 className="text-7xl text-[#FEEC37] font-semibold">Angeles Zheng</h2>
                <div className="my-5">
                    <p className="text-white max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores incidunt pariatur temporibus enim fuga reprehenderit,  
                    minus dignissimos culpa accusantium porro et non voluptatem obcaecati labore aliquam, qui earum! Quae.
                    </p>
                </div>
                </div>
                <div className="relative w-96 h-96">
                    <Image src={'/img/meee.jpeg'} alt='Angeles' 
                    fill= {true} 
                    priority={true}
                    className="rounded-3xl object-cover" 
                    />
                </div>
            </div>    
        </div>

        </>
    )
}