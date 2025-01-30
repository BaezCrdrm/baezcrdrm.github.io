import Cover from "./components/cover/cover";
import Footer from "./components/footer/footer";
import Social from "./components/social/social";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Cover />

            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Social />
            </main>

            <Footer />
        </div>
    );
}
