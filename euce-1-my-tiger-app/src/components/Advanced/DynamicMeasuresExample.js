// (C) 2007-2019 GoodData Corporation
import React, { useState, useEffect } from "react";
import { ErrorComponent, LoadingComponent } from "@gooddata/sdk-ui";
import { LineChart, ColumnChart } from "@gooddata/sdk-ui-charts";
import { newMeasure } from "@gooddata/sdk-model";

import sdk from "@gooddata/api-client-bear";

import { Layout } from "../../../routes/Layout";
import { SidebarItem } from "../../components/SidebarItem";
import { workspace } from "../constants/fixtures";
import { Budget, Price, Quantity, DateMonthYear } from "../../ldm/full";

const getNewMeasureDefinition = (measureItem, index) => {
    return newMeasure(measureItem.identifier, m => m.format("#,##0").localId(`m${index}`));
};

const getMeasureListByTag = async tag => {
    const result = await sdk.xhr.get(`/gdc/md/${workspace}/tags/${tag}`);
    const items = result.data.entries;
    const measureItems = items.filter(item => item.category === "metric");
    const measures = await Promise.all(measureItems.map(measure => sdk.xhr.get(measure.link)));
    const measuresMeta = measures.map(measure => measure.data.metric.meta);
    return measuresMeta;
};

const config = { legend: { position: "bottom" } };

export const DynamicMeasuresExample = () => {
    const [{ measureList, error }, setState] = useState({
        measureList: null,
        error: null,
    });

    useEffect(() => {
        getMeasureListByTag(Price.Avg)
            .then(measures => {
                const updatedState = measures.length
                    ? {
                          measureList: measures.map(entry => ({
                              ...entry,
                              isSelected: true,
                          })),

                          error: null,
                      }
                    : {
                          measureList: null,
                          error: {
                              message: `No measures with tag ${Price.Avg}`,
                              description: `Please check your project. Franchise fees measures should have assigned the tag ${Price.Avg}.`,
                          },
                      };

                setState(updatedState);
            })
            .catch(error => {
                setState({
                    measureList: null,
                    error: {
                        message: `There was Error while requesting measures by tag ${Price.Avg}`,
                        description: JSON.stringify(error),
                    },
                });
            });
    }, []);

    const onMeasureChange = measureIdentifier => {
        const updatedMeasure = measureList.find(measure => measure.identifier === measureIdentifier);
        const updatedMeasureIndex = measureList.indexOf(updatedMeasure);
        const updatedMeasures = [...measureList];
        updatedMeasures[updatedMeasureIndex] = {
            ...updatedMeasure,
            isSelected: !updatedMeasure.isSelected,
        };

        setState({
            error: null,
            measureList: updatedMeasures,
        });
    };

    if (error) {
        return <ErrorComponent message={error.message} description={error.description} />;
    }

    const loadingBlock = (
        <div className="loading-block">
            {/* language=CSS */}
            <style jsx>{`
                .loading-block {
                    height: 100%;
                    min-height: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
            <LoadingComponent />
        </div>
    );

    const sidebar = measureList ? (
        <div className="s-dynamic-measures-sidebar">
            {/* language=CSS */}
            <style jsx>{`
                h3 {
                    margin-top: 0;
                }
                ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
            `}</style>
            <h3>Measures</h3>
            <ul>
                {measureList.map(({ title, identifier, isSelected }) => (
                    <SidebarItem
                        key={identifier}
                        label={title}
                        id={identifier}
                        isSelected={isSelected}
                        onClick={onMeasureChange}
                    />
                ))}
            </ul>
        </div>
    ) : (
        loadingBlock
    );

    let content = loadingBlock;

    if (measureList) {
        const selectedMeasures = measureList.filter(measure => measure.isSelected);
        const measures = selectedMeasures.map(getNewMeasureDefinition);

        if (selectedMeasures.length) {
            content = (
                <div className="graph-wrapper">
                    {/* language=CSS */}
                    <style jsx>{`
                        .graph-wrapper {
                            display: grid;
                            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        }
                        .graph {
                            height: 300px;
                        }
                    `}</style>
                    <div className="graph graph-line s-dynamic-measures-line-chart">
                        <LineChart measures={measures} trendBy={"date.month"} config={config} />
                    </div>
                    <div className="graph graph-column s-dynamic-measures-column-chart">
                        <ColumnChart measures={measures} config={config} />
                    </div>
                </div>
            );
        } else {
            content = <ErrorComponent message="Please select at least one measure" />;
        }
    }

    return (
        <div className="s-dynamic-measures">
            <Layout sidebar={sidebar}>{content}</Layout>
        </div>
    );
};
