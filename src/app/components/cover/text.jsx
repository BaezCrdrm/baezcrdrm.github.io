"use client"
import { useEffect, useState } from "react";

const TEXTS = [
    "Developer",
    "Manager",
    "Enthusiast",
    "Gamer",
    "Learner",
    "Teacher",
]

const Text = () => {
    const [ selection, setSelection ] = useState(0);
    const [ currentText, setCurrentText ] = useState("");

    const switchWords = () => {
        let next = (selection + 1) >= TEXTS.length ? 0 : selection + 1;
        const timer = setTimeout(() => {
            setSelection(next);
            clearTimeout(timer);
        }, 1200);
    }

    useEffect(() => {
        const value = TEXTS[selection];

        let index = 0;
        let tempText = "";
        const max = value.length - 1;
        const time = setInterval(() => {
            if(index > max)
            {
                switchWords();
                clearInterval(time);
                return;
            }
            tempText = `${tempText}${value.charAt(index)}`;
            setCurrentText(tempText);
            index++;
        }, 200)

        return () => {
            clearInterval(time);
        }
    }, [selection])

    return (
        <div className="flex items-center md:text-6xl">
            <span className="tracking-wide mr-2 md:mr-4">
                🤖
            </span>

            <span className="md:text-7xl mr-2 md:mr-6">
                &gt;
            </span>

            <span>
                { currentText }
            </span>
        </div>
    )
}

export default Text;
