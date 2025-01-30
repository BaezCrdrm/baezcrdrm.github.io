import Cover from "./components/cover/cover";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Social from "./components/social/social";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Cover />

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <About />
                <Social />
            </main>

            <Footer />
        </div>
    );
}
