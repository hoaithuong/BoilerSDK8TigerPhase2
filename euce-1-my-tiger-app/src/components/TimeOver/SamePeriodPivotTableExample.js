// (C) 2007-2019 GoodData Corporation

import React from "react";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import { newPopMeasure } from "@gooddata/sdk-model";
import { Price, DateYear } from "../../ldm/full";

const priceYearAgo = newPopMeasure(Price.Sum, "date.year", m => m.alias("$ Price Sum - SP year ago"));

const style = { height: 300 };

export const SamePeriodPivotTableExample = () => {
    return (
        <div style={style} className="s-column-chart">
            <PivotTable measures={[Price.Sum, priceYearAgo]} rows={[DateYear]} />
        </div>
    );
};
