import Image from "next/image"

type TechCard = {
    imageURL : string; 
    techStack : string; 
}

export default function TechCard({imageURL,techStack }:
TechCard) {
    return (
        <>
            <div className="w-48 h-48 flex justify-center items-center shadow-lg drop-shadow overflow-hidden rounded-3xl bg-[#fff] 
            bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 flex-col ml-10">
                <div className="relative object-cover w-20 h-20">
                <Image src={imageURL} alt='a' fill= {true} />
                </div>
                    <p className="text-black text-center text-base leading-4 mt-4 font-bold">
                        {techStack}
                    </p>
            </div>
        </>
    )
}

