const now = new Date();

const Footer = () => {
    return (
        <footer className="px-4 pb-2">
            <span>Samuel Báez - {now.getFullYear()}</span>
        </footer>
    );
};

export default Footer;
