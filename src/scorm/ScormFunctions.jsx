import React, { Component } from "react";
import withScorm from "./withScorm";

class ScormFunctions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            statuses: [
                "passed",
                "completed",
                "failed",
                "incomplete",
                "browsed",
                "not attempted",
                "unknown",
            ],
        };
    }

    renderScormButtons() {
        const { statuses } = this.state;

        return statuses.map((test, index) => (
            <button
                key={index}
                className="bg-sky-500 text-white text-lg p-2 rounded cursor-pointer mr-5"
                onClick={() => this.props.sco.setStatus(statuses[index])}
            >
                {`Mark ${statuses[index]}`}
            </button>
        ));
    }

    render() {
        return (
            <div>
                <h4 className="mt-10 font-bold">SCORM Testing</h4>
                <p>Welcome, {this.props.sco.learnerName}!</p>
                <p className="mb-3">
                    Your course status is currently:{" "}
                    {this.props.sco.completionStatus}
                </p>

                {this.renderScormButtons()}
            </div>
        );
    }
}

export default withScorm()(ScormFunctions);
