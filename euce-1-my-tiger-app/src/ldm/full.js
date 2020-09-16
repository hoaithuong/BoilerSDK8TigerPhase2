/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2020-09-14T03:56:24.593Z; */
import { newAttribute, newMeasure, idRef } from "@gooddata/sdk-model";
/**
 * Attribute Title: Campaign channel id
 * Display Form ID: attr.campaign_channels.campaign_channel_id
 */

export const CampaignChannelId = newAttribute("campaign_channels.campaign_channel_id");
/**
 * Attribute Title: Category
 * Display Form ID: attr.campaign_channels.category
 */

export const Category = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Type
 * Display Form ID: attr.campaign_channels.type
 */

export const Type = newAttribute("campaign_channels.type");
/**
 * Attribute Title: Campaign id
 * Display Form ID: attr.campaigns.campaign_id
 */

export const CampaignId = newAttribute("campaigns.campaign_id");
/**
 * Attribute Title: Campaign name
 * Display Form ID: attr.campaigns.campaign_name
 */

export const CampaignName = newAttribute("campaigns.campaign_name");
/**
 * Attribute Title: Customer id
 * Display Form ID: attr.customers.customer_id
 */

export const CustomerId = newAttribute("customers.customer_id");
/**
 * Attribute Title: Customer name
 * Display Form ID: attr.customers.customer_name
 */

export const CustomerName = newAttribute("customers.customer_name");
/**
 * Attribute Title: Region
 * Display Form ID: attr.customers.region
 */

export const Region = newAttribute("customers.region");
export const State = {
    /**
     * Display Form Title: Location
     * Display Form ID: customers.geo__state__location
     */
    Location: newAttribute("customers.geo__state__location"),
    /**
     * Display Form Title: State
     * Display Form ID: customers.state
     */
    Default: newAttribute("customers.state"),
};
/**
 * Attribute Title: Order id
 * Display Form ID: attr.order_lines.order_id
 */

export const OrderId = newAttribute("order_lines.order_id");
/**
 * Attribute Title: Order line id
 * Display Form ID: attr.order_lines.order_line_id
 */

export const OrderLineId = newAttribute("order_lines.order_line_id");
/**
 * Attribute Title: Order status
 * Display Form ID: attr.order_lines.order_status
 */

export const OrderStatus = newAttribute("order_lines.order_status");
/**
 * Attribute Title: Category
 * Display Form ID: attr.products.category
 */

export const Category_1 = newAttribute("products.category");
/**
 * Attribute Title: Product id
 * Display Form ID: attr.products.product_id
 */

export const ProductId = newAttribute("products.product_id");
/**
 * Attribute Title: Product name
 * Display Form ID: attr.products.product_name
 */

export const ProductName = newAttribute("products.product_name");
/**
 * Fact Title: Budget
 * Fact ID: campaign_channels.budget
 */

export const Budget = {
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Budget
     * Fact ID: campaign_channels.budget
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("campaign_channels.budget", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: campaign_channels.spend
 */

export const Spend = {
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Spend
     * Fact ID: campaign_channels.spend
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("campaign_channels.spend", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: order_lines.price
 */

export const Price = {
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Price
     * Fact ID: order_lines.price
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("order_lines.price", "fact"), m => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: order_lines.quantity
 */

export const Quantity = {
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: sum
     */
    Sum: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("sum")),
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: count
     */
    Count: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("count")),
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: avg
     */
    Avg: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("avg")),
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: min
     */
    Min: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("min")),
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: max
     */
    Max: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("max")),
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: median
     */
    Median: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("median")),
    /**
     * Fact Title: Quantity
     * Fact ID: order_lines.quantity
     * Fact Aggregation: runsum
     */
    Runsum: newMeasure(idRef("order_lines.quantity", "fact"), m => m.aggregation("runsum")),
};
/**
 * Attribute Title: Date - Date
 * Display Form ID: date.day
 */

export const DateDate = newAttribute("date.day");
/**
 * Attribute Title: Date - Month/Year
 * Display Form ID: date.month
 */

export const DateMonthYear = newAttribute("date.month");
/**
 * Attribute Title: Date - Quarter/Year
 * Display Form ID: date.quarter
 */

export const DateQuarterYear = newAttribute("date.quarter");
/**
 * Attribute Title: Date - Week/Year
 * Display Form ID: date.week
 */

export const DateWeekYear = newAttribute("date.week");
/**
 * Attribute Title: Date - Year
 * Display Form ID: date.year
 */

export const DateYear = newAttribute("date.year");
export const Insights = {
    /**
     * Insight Title: Number of sightings
     * Insight ID: 16ee335d-b583-428e-bf67-774ab282df1b
     */
    NumberOfSightings: "16ee335d-b583-428e-bf67-774ab282df1b",
    /**
     * Insight Title: Verify PoP
     * Insight ID: 3493b501-0a67-460f-a0dc-b3c924937bb1
     */
    VerifyPoP: "3493b501-0a67-460f-a0dc-b3c924937bb1",
    /**
     * Insight Title: Sightings by shape
     * Insight ID: 7a5bc993-613e-419c-b877-77f33fa80b2d
     */
    SightingsByShape: "7a5bc993-613e-419c-b877-77f33fa80b2d",
    /**
     * Insight Title: Sightings per year
     * Insight ID: 9555cfa9-a930-4cf9-aab2-d40a37aa916e
     */
    SightingsPerYear: "9555cfa9-a930-4cf9-aab2-d40a37aa916e",
    /**
     * Insight Title: Sightings in the world
     * Insight ID: a40f2c50-7455-4a6b-a404-d1a7ef5d3e8b
     */
    SightingsInTheWorld: "a40f2c50-7455-4a6b-a404-d1a7ef5d3e8b",
};
