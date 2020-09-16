import React from "react";
import { AttributeSortingExample } from "../components/Sorting/AttributeSortingExample";
import { MeasureSortingExample } from "../components/Sorting/MeasureSortingExample";
import { DynamicSortingExample } from "../components/Sorting/DynamicSortingExample";

import Page from "../components/Page";

const Sorting = () => {
    return (
        <Page>
            <h2>Sorting Component</h2>
            <div>
                <h3>Attribute Sorting Example</h3>
                <AttributeSortingExample />
                <hr />
            </div>
            <div>
                <h3>Measure Sorting Example</h3>
                <MeasureSortingExample />
                <hr />
            </div>
            <div>
                <h3>Dynamic Sorting Example</h3>
                <DynamicSortingExample />
                <hr />
            </div>
        </Page>
    );
};

export default Sorting;
