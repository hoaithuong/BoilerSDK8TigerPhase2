// (C) 2007-2019 GoodData Corporation
import React from "react";
import { ColumnChart } from "@gooddata/sdk-ui-charts";
import { Budget, Category } from "../../ldm/full";
import { newMeasureSort } from "@gooddata/sdk-model";
const style = {
    height: 300,
};

export const MeasureSortingExample = () => {
    return (
        <div style={style} className="s-area-chart">
            <ColumnChart
                measures={[Budget.Sum]}
                viewBy={[Category]}
                sortBy={[newMeasureSort(Budget.Sum, "asc")]}
            />
        </div>
    );
};
