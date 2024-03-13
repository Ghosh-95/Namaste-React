import { useEffect, useState } from "react"

export default function Profile() {
    const [count, setCount] = useState(0);
    useEffect(() => {

        // let timer = setInterval(() => {
        //     console.log("I am a Frontend Dev");
        // }, 1000);

        console.log("userEffect called count", count);

        return () => {
            // if (timer === 10) return clearInterval(timer);
            console.log("userEffect returned cleanup function");
        }

    }, [count])

    console.log("Rendering...");
    console.log("Render is complete");

    return (
        <div style={{
            background: 'black',
            color: 'white'
        }}>
            <p>This is Profile, a functional component</p>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}