import React, { useState } from "react";
import SideNav from "./sidenav";


const questions = [
    {
        id: "01",
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? ",

    },
    {
        id: "02",
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I? ",

    },
    {
        id: "03",
        question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I? ",

    },
];

const Allquestions = () => {
    const [activeRiddleIndex, setActiveRiddleIndex] = useState(0);

    const handlePreviousClick = () => {
        const newIndex = Math.max(activeRiddleIndex - 1, 0);
        setActiveRiddleIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = Math.min(activeRiddleIndex + 1, questions.length - 1);
        setActiveRiddleIndex(newIndex);
    };

    return (
        <div className="flex flex-row">
            <div>
                {/* Left part */}
                <SideNav />
            </div>

            {/* Right part */}
            <div className=" flex flex-row flex-grow justify-center items-center">
                <div className="text-center relative w-full">
                    <button
                        className='text-white text-3xl w-[60px] h-[60px] bg-custom-161616 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 ml-2'  onClick={handlePreviousClick}

                    >
                        &lt;
                    </button>
                    <p className="text-7xl font-semibold text-yellow-500">All Questions</p>
                    <div className="mt-5">
                        <p className="text-green-500 font-semibold text-7xl">{questions[activeRiddleIndex].id}</p>
                        <p className="text-white text-3xl font-normal w-4/5 m-auto">
                            {questions[activeRiddleIndex].question}
                        </p>
                    </div>
                    <button
                        className='text-white text-3xl w-[60px] h-[60px] bg-custom-161616 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 mr-2' onClick={handleNextClick}

                    >
                        &gt;
                    </button>
                    <div className="flex md:flex-col flex-row md:items-center md:justify-center justify-start">
                        <div className="text-center flex flex-row md:flex-col pl-10">
                            <input
                                type="text"
                                onChange={(e) => setUserAnswer(e.target.value)}
                                className="mt-6 text-gray-500 font-semibold text-lg text-center bg-transparent border-b border-gray-500 outline-none md:w-[502px] w-[160px]"
                                placeholder="Enter your answer"
                            />
                        </div>


                    </div>
                </div>
            </div>
         </div>   );
};

            export default Allquestions;
