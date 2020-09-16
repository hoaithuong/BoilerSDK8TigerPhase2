// (C) 2007-2020 GoodData Corporation

import React, { Component } from "react";
import { Headline } from "@gooddata/sdk-ui-charts";
import { newPreviousPeriodMeasure, newRelativeDateFilter } from "@gooddata/sdk-model";
import { Budget, DateYear } from "../../ldm/full";

export class PreviousPeriodHeadlineExample extends Component {
    onLoadingChanged = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onLoadingChanged", ...params);
    };

    onError = (...params) => {
        // eslint-disable-next-line no-console
        return console.log("PreviousPeriodHeadlineExample onError", ...params);
    };

    render() {
        const primaryMeasure = Budget.Sum;
        const secondaryMeasure = newPreviousPeriodMeasure(
            Budget.Sum,
            [{ dataSet: "date.dataset", periodsAgo: 1 }],
            m => m.alias("$ Sum - period ago"),
        );

        return (
            <div style={{ height: 125 }} className="s-headline">
                <Headline
                    primaryMeasure={primaryMeasure}
                    secondaryMeasure={secondaryMeasure}
                    // filters={[newRelativeDateFilter("date.year","day", -98, 0)]}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                />
            </div>
        );
    }
}

export default PreviousPeriodHeadlineExample;
