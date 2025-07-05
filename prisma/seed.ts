import { PrismaClient } from "@prisma/client";

import { assetPerformanceData } from "../src/data/analytics/assetPerformance";
import { bestSellingProductsData } from "../src/data/homepage/bestSellingProducts";
import { customerSatisfactionData } from "../src/data/homepage/customerSatisfaction";
import { customersData } from "../src/data/customers";
import { eventsData } from "../src/data/events";
import { homeSmallCardsData } from "../src/data/homepage/homeSmallCards";
import { performanceData } from "../src/data/analytics/performance";
import { ordersData } from "../src/data/orders";
import { productsData } from "../src/data/products";
import { regionsData } from "../src/data/homepage/regions";
import { revenueOverTimeData } from "../src/data/homepage/revenueOverTime";
import { revenuePerCountryData } from "../src/data/homepage/revenuePerCountry";
import { todaySalesData } from "../src/data/analytics/todaySales";
import { totalProfitMonthsData } from "../src/data/analytics/totalProfitMonths";
import { totalProfitProductsData } from "../src/data/analytics/totalProfitProducts";
import { tradersTableData } from "../src/data/homepage/tradersTable";
import { yearOverviewData } from "../src/data/analytics/yearOverview";
import { marketMetricsData } from "../src/data/analytics/marketMetrics";
import { revenueDistributionData } from "../src/data/analytics/revenueDistribution";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data first
  await prisma.asset.deleteMany();
  await prisma.bestSellingProduct.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.customerSatisfaction.deleteMany();
  await prisma.event.deleteMany();
  await prisma.homeSmallCard.deleteMany();
  await prisma.monthPerformance.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.revenuePerCountry.deleteMany();
  await prisma.region.deleteMany();
  await prisma.revenueOverTime.deleteMany();
  await prisma.todaySales.deleteMany();
  await prisma.totalProfitMonth.deleteMany();
  await prisma.totalProfitProduct.deleteMany();
  await prisma.trader.deleteMany();
  await prisma.yearOverview.deleteMany();
  await prisma.marketMetrics.deleteMany();
  await prisma.revenueDistribution.deleteMany();

  // Seed for Assets
  for (const item of assetPerformanceData) {
    await prisma.asset.create({ data: item });
  }

  // Seed for Best Selling Products
  for (const item of bestSellingProductsData) {
    await prisma.bestSellingProduct.create({ data: item });
  }

  // Seed for Customers
  for (const item of customersData) {
    await prisma.customer.create({ data: item });
  }

  // Seed for Customer Satisfaction
  for (const item of customerSatisfactionData) {
    await prisma.customerSatisfaction.create({ data: item });
  }

  // Seed for Events
  for (const item of eventsData) {
    await prisma.event.create({ data: item });
  }

  // Seed for Home Small Cards
  for (const item of homeSmallCardsData) {
    await prisma.homeSmallCard.create({ data: item });
  }

  // Seed for Month Performance
  for (const item of performanceData) {
    await prisma.monthPerformance.create({ data: item });
  }

  // Seed for Orders
  for (const item of ordersData) {
    await prisma.order.create({ data: item });
  }

  // Seed for Products
  for (const item of productsData) {
    await prisma.product.create({ data: item });
  }

  // Seed for Revenue Per Country
  for (const item of revenuePerCountryData) {
    await prisma.revenuePerCountry.create({ data: item });
  }

  // Seed for Regions
  for (const item of regionsData) {
    await prisma.region.create({ data: item });
  }

  // Seed for Revenue Over Time
  for (const item of revenueOverTimeData) {
    await prisma.revenueOverTime.create({ data: item });
  }

  // Seed for Today Sales
  for (const item of todaySalesData) {
    await prisma.todaySales.create({ data: item });
  }

  // Seed for Total Profit Month
  for (const item of totalProfitMonthsData) {
    await prisma.totalProfitMonth.create({ data: item });
  }

  // Seed for Total Profit Products
  for (const item of totalProfitProductsData) {
    await prisma.totalProfitProduct.create({ data: item });
  }

  // Seed for Traders
  for (const item of tradersTableData) {
    await prisma.trader.create({ data: item });
  }

  // Seed for Year Overview
  for (const item of yearOverviewData) {
    await prisma.yearOverview.create({ data: item });
  }

  // Seed for Market Metrics
  for (const item of marketMetricsData) {
    await prisma.marketMetrics.create({ data: item });
  }

  // Seed for Revenue Distribution
  for (const item of revenueDistributionData) {
    await prisma.revenueDistribution.create({ data: item });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
