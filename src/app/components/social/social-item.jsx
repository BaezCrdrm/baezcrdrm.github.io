import Image from "next/image";

const SocialItem = (props) => {
    return (
        <a target="_blank" href={props.url}>
            <div className="flex flex-col items-center justify-between gap-2">
                <div className="w-36 h-36 flex items-center justify-between">
                    <Image 
                        src={props.imageSrc}
                        width={0} 
                        height={0} 
                        alt={props.name}
                        className="mx-auto w-full h-full" />
                </div>
                <span className="text-3xl">
                    {props.name}
                </span>
            </div>
        </a>
    )
}

export default SocialItem;
