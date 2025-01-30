const now = new Date();

const Footer = () => {
    return (
        <footer className="px-4 pb-2">
            <span>Samuel Báez - {now.getFullYear()}</span>
            <p className="text-gray-500 italic">
                This page is powered by Next.js. The code is open source & 
                it is available at my <a href="https://github.com/BaezCrdrm/baezcrdrm.github.io">
                <span className="underline cursor-pointer">Github Profile</span></a>.
            </p>
        </footer>
    );
};

export default Footer;
