// (C) 2007-2019 GoodData Corporation

import React from "react";
import { BarChart } from "@gooddata/sdk-ui-charts";
import { newPopMeasure } from "@gooddata/sdk-model";
import { Price, DateYear } from "../../ldm/full";

const priceYearAgo = newPopMeasure(Price.Sum, "date.year", m => m.alias("$ Price Sum - SP year ago"));

const style = { height: 300 };

export const SamePeriodBarChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <BarChart measures={[Price.Sum, priceYearAgo]} viewBy={DateYear} />
        </div>
    );
};
