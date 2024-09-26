import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); // To store the current count
    const [prevCount, setPrevCount] = useState(null); // To store the previous count

    // Increment function that stores the previous count before updating the current count
    const increment = () => {
        setPrevCount(count); // Store the current count in prevCount
        setCount(prevCount => prevCount + 1); // Increment the count
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h2>Previous Count: {prevCount !== null ? prevCount : "No previous count"}</h2>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
