import React from "react";
import withScorm from "./withScorm";

const Learner = ({ sco }) => {
    return (
        <section className="section">
            <h3>Learner Information Retreived from the mock API:</h3>
            <p>student_name: {sco.learnerName}</p>
        </section>
    );
};

export default Learner;
