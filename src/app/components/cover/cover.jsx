import Writer from "./writer";

const Cover = () => {
    return (
        <div className="w-full h-screen relative bg-main-dark text-main-light flex items-center">
            <div className="absolute top-0 pt-8 px-4 mx:px-8 text-xl md:text-4xl">
                <span className="border-dotted border-b font-sans">
                    Samuel Báez
                </span>
            </div>
            <div className="absolute font-mono">
                <Writer />
            </div>
        </div>
    )
}

export default Cover;
