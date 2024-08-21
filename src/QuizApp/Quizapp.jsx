import React, { useState } from 'react';

const Quizapp = () => {
    const [questionIndex, setQuestionindex] = useState(0);
    const [submitanswer, setSubmitanswer] = useState(null);
    const [score, setScore] = useState(0)

    const Questions = [
        {
            quest: 'Who were the vicitms of Holocaust during WW-II?',
            options: ['NativeAmericans', 'Jews', 'Christians', 'Nazi'],
            answer: 'Jews',
        },
        {
            quest: 'which Quality of Clark help him to resist the transformation?',
            options: ['Self-Obessed', 'Ego', 'Heroism', 'Individualty'],
            answer: 'Individualty',
        },
        {
            quest: 'Which one is the main theme in all my sons novel?',
            options: ['Social responsibility', 'Greed', 'Heroism', 'Consequences of action'],
            answer: 'Social responsibility',
        },
    ];



    return (
        <div className="border bg-[#2a98c4] text-white flex items-center justify-center h-screen 
    ">


            {questionIndex < Questions.length ? (
                <div className="flex flex-col gap-7  p-4 text-xl rounded-xl text-black bg-[#e7f1f3] shadow-lg ">

                    <h1 className='p-4 font-medium '>Q: {Questions[questionIndex].quest}</h1>

                    <div className='text-black  text-lg space-y-2 '>

                        {Questions[questionIndex].options.map((item, i) => (

                            <li
                                key={i}
                                className={`cursor-pointer ${submitanswer === item && 'bg-[#c2e9ee] text-black'
                                    }  rounded p-2 hover:bg-[#f8feff] font-light hover:text-black `}
                                onClick={() => setSubmitanswer(item)}
                            >
                                {item}
                            </li>
                        ))}

                    </div>

                    <button
                        className={` text-white font-medium p-2 rounded-md mt-4 ${submitanswer !== null ? 'bg-[#4bd6c3]' : 'bg-[#18534b] cursor-not-allowed'
                            }`}
                        disabled={submitanswer === null}
                        onClick={() => {
                            setQuestionindex(questionIndex + 1);
                            setSubmitanswer(null);
                            setScore(() => {
                                return submitanswer === Questions[questionIndex].answer ? score + 1 : score
                            })
                        }}
                    >
                        Next Question
                    </button>
                </div>

            ) : (
                <div className='shadow-xl text-2xl rounded-lg bg-[#fcfcfc] text-center space-y-4 text-black p-7 ' >
                    <h1> Quiz Complete </h1>
                    <h4> You Scored </h4>
                    <p> {score}/{Questions.length}  </p>
                </div>
            )}





        </div>
    );
};

export default Quizapp;
