import { Component } from "react";

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        console.log("Component did mount after rendering is complete");

        // this.timer = setInterval(() => {
        //     console.log("interval of 1 second.");
        // }, 1000);
    }

    componentWillUnmount() {
        console.log("Component will mount after we leave the current page, in other word when the current markup will be removed from DOM Tree");
        // clearInterval(this.timer);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) console.log("Previous state has changed to", prevState.count);
        console.log("Component did update after re-rendering (while we change the state variable) the component with new data.");
    }

    render() {
        const { name, job, city, state } = this.props.data;
        const { count } = this.state;

        return (
            <div className="description">
                <h2>{name}</h2>
                <p>{job}</p>
                <p>{city}, {state}</p>


                <button
                    onClick={() => this.setState({
                        count: count + 1,
                    })}>
                    Count : {count}
                </button>
                <button
                    onClick={() => this.setState({
                        count: 0,
                    })}>
                    Reset
                </button>
            </div>
        )
    }
}