import "./App.css";
import React, { useState } from "react";

export default function App() {
    const [color, setColor] = useState("white");
    return (
        <div style={{ backgroundColor: color, height: "100vh" }}>
            <button
                type="button"
                onClick={() => setColor("#0040ff")}
                className="btn btn-primary m-2"
            >
                Blue
            </button>
            <button
                type="button"
                onClick={() => setColor("gray")}
                className="btn btn-secondary m-2"
            >
                Gray
            </button>
            <button
                type="button"
                onClick={() => setColor("#008d00")}
                className="btn btn-success m-2"
            >
                Green
            </button>
            <button
                type="button"
                onClick={() => setColor("#c70000")}
                className="btn btn-danger m-2"
            >
                Red
            </button>
            <button
                type="button"
                onClick={() => setColor("#ffbf00")}
                className="btn btn-warning m-2"
            >
                Yellow
            </button>
        </div>
    );
}
