import { Component } from "react";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
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
                        count: this.state.count + 1,
                    })}>
                    Count : {count}
                </button>
            </div>
        )
    }
}