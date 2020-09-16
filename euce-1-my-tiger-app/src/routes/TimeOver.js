import React from "react";
import { SamePeriodColumnChartExample } from "../components/TimeOver/SamePeriodColumnChartExample";
import { PreviousPeriodHeadlineExample } from "../components/TimeOver/PreviousPeriodHeadlineExample";
import { SamePeriodPivotTableExample } from "../components/TimeOver/SamePeriodPivotTableExample";
import { SamePeriodBarChartExample } from "../components/TimeOver/PreviousPeriodBarChartExample";
import { SamePeriodLineChartExample } from "../components/TimeOver/PreviousPeriodLineChartExample";
import { SamePeriodComboChartExample } from "../components/TimeOver/PreviousPeriodComboChartExample";
import { SamePeriodBulletChartExample } from "../components/TimeOver/PreviousPeriodBulletChartExample";
import { SamePeriodHeadLineExample } from "../components/TimeOver/SamePeriodHeadLineExample";

import Page from "../components/Page";

const TimeOver = () => {
    return (
        <Page>
            <h2>Time Over Component</h2>
            <div>
                <h3>Same Period Column Chart Example</h3>
                <SamePeriodColumnChartExample />
                <hr />
            </div>
            <div>
                <h3>Previous Period Headline Example</h3>
                <PreviousPeriodHeadlineExample />
                <hr />
            </div>
            <div>
                <h3>Same Period Head Line Example</h3>
                <SamePeriodHeadLineExample />
                <hr />
            </div>

            <div>
                <h3>Same Period Pivot Table Example</h3>
                <SamePeriodPivotTableExample />
                <hr />
            </div>
            <div>
                <h3>Same Period Bar Chart Example</h3>
                <SamePeriodBarChartExample />
                <hr />
            </div>
            <div>
                <h3>Same Period Line Chart Example</h3>
                <SamePeriodLineChartExample />
                <hr />
            </div>
            <div>
                <h3>Same Period Combo Chart Example</h3>
                <SamePeriodComboChartExample />
                <hr />
            </div>
            <div>
                <h3>Same Period Bullet Chart Example</h3>
                <SamePeriodBulletChartExample />
                <hr />
            </div>
        </Page>
    );
};

export default TimeOver;
