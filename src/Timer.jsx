import { useState, useRef } from "react";

const Timer = () => {
    const [time, setTime] = useState(0);
    let id = useRef(null);

    function reset() {
        clearInterval(id.current);
        setTime(0);
    }

    function stop() {
        clearInterval(id.current);
    }

    function start() {
        id.current = setInterval(() => {
            setTime( time+1);
        }, 1000);
    }

    return (
        <div>
            <h1>the time in the timer:</h1>
            <br />
            <h1>{time}</h1>
            <button onClick={start}>start</button>
            <br />
            <button onClick={stop}>stop</button>
            <br />
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default Timer;
