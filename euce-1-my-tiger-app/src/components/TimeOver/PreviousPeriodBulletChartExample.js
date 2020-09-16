// (C) 2007-2019 GoodData Corporation

import React from "react";
import { BulletChart } from "@gooddata/sdk-ui-charts";
import { newPopMeasure } from "@gooddata/sdk-model";
import { Price, Quantity, OrderStatus } from "../../ldm/full";

const priceYearAgo = newPopMeasure(Price.Sum, "date.year", m => m.alias("$ Price Sum - SP year ago"));

const priceYearAgo1 = newPopMeasure(Quantity.Sum, "date.year", m => m.alias("$ Price Sum - SP year ago"));

const style = { height: 300 };

export const SamePeriodBulletChartExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <BulletChart
                primaryMeasure={Price.Sum}
                targetMeasure={priceYearAgo}
                comparativeMeasure={Quantity.Sum}
                viewBy={OrderStatus}
            />
        </div>
    );
};
