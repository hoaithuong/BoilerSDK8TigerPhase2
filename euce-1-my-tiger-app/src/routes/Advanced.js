import React from "react";
import { DynamicMeasuresExample } from "../components/Advanced/DynamicMeasuresExample";

import Page from "../components/Page";

const Advanced = () => {
    return (
        <Page>
            <h2>Dynamic Component</h2>
            <div>
                <h3>Dynamic Measures Example</h3>
                <DynamicMeasuresExample />
                <hr />
            </div>
        </Page>
    );
};

export default Advanced;
