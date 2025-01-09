export default function Header () {
    return (
        <>
        <div className="w-screen p-8 flex justify-between items-center" style={{ backgroundColor: '#111' }}>
            <div>
            <p className = "font-bold text-white text-2xl">Angeles
            </p>
        </div> 
            <div>
                <ul className="flex space-x-4">
                    <li className="text-white text-lg">Home</li>
                    <li className="text-white text-lg">Techs</li>
                    <li className="text-white text-lg">Biography</li>
                    <li className="text-white text-lg">Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}