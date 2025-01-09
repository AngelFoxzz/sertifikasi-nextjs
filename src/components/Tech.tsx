import TechCard from "./TechCard";

export default function Tech() {
    return (
        <>
        <div className="w-screen min-h-[300px] p-8" style={{ backgroundColor: '#CB9D2B'}}>
            <h1 className="text-3xl text-black font-bold mb-4">Techs</h1>
            <div className="w-32 border-2 border-black mb-8" />
            <div className="flex justify-center items-center w-full flex-wrap">

                <TechCard imageURL='/img/Css.png' techStack="CSS"/>
                <TechCard imageURL='/img/Php.png' techStack="PHP"/>
                <TechCard imageURL='/img/js.png' techStack="JavaScripts"/>
            </div>
        </div>
        </>
    )
}