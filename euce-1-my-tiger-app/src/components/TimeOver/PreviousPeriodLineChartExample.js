// (C) 2007-2019 GoodData Corporation

import React from "react";
import { LineChart } from "@gooddata/sdk-ui-charts";
import { newPopMeasure } from "@gooddata/sdk-model";
import { Price, DateYear } from "../../ldm/full";

const priceYearAgo = newPopMeasure(Price.Sum, "date.year", m => m.alias("$ Price Sum - SP year ago"));

const style = { height: 300 };

export const SamePeriodLineChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <LineChart measures={[Price.Sum, priceYearAgo]} trendBy={DateYear} />
        </div>
    );
};
