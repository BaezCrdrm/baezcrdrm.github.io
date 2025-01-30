import SocialItem from "./social-item";

import Linkedin from "@/assets/linkedin.svg";
import Github from "@/assets/github.svg";

const SN = [
    {
        url: "https://github.com/baezcrdrm",
        imageSrc: Github,
        name: "GitHub"
    },
    {
        url: "https://www.linkedin.com/in/samuelbaezherrera/",
        imageSrc: Linkedin,
        name: "LinkedIn"
    },
]

const Social = () => {
    

    return (
        <div className="w-full text-center py-12">
            <h2 className="text-6xl">
                Social networks
            </h2>
            <div className="w-fit flex flex-col md:flex-row flex-wrap gap-20 mx-auto mt-8">
                { SN.map(sn => (
                    <SocialItem 
                        key={sn.name}
                        url={sn.url} 
                        imageSrc={sn.imageSrc}
                        name={sn.name} />
                ))
                }
            </div>
        </div>
    )
}

export default Social;
