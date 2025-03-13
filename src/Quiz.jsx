import React from "react";
import data from "../data.json";
import { div } from "framer-motion/client";


const App = () => {
    const quizes = data.quizzes;

    
    return (
        <div className="flex w-fit flex-col gap-4'>">
                {quizes.map((item) => (<button key={item.title}>
                    {item.title}
                </button>
            ))}
        </div>
    )
}
export default App; 