import React from "react";
import User from "./UserClass";

export default class About extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <section id="about" className="about-section">
                <h1>About</h1>

                <User data={{ name: "Sushovan Ghosh", job: "Frontend Developer", city: "Bardhaman", state: "West Bengal" }} />
            </section>
        )
    }
}