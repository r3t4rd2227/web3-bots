
# 🌐 AWS Cost Intelligence & CUDOS Dashboards

This document provides an overview of the **Cost Intelligence Dashboard (CID)** and **CUDOS Dashboard**, both of which were deployed to provide organization-wide visibility into AWS spending and optimization opportunities.

---

## 🚀 Deployment Summary

- **Source Account**: AWS Management (payer) account – where the AWS Cost and Usage Report (CUR) is generated.
- **Destination Account**: Infrastructure Deployment Account – where the dashboards are hosted via QuickSight.
- The dashboards are automatically populated with data from all linked accounts in our organization, offering a **single-pane-of-glass** view into our AWS costs and usage.

---

## 🧠 How It Works: Powered by AWS CUR

The AWS **Cost and Usage Report (CUR)** is the foundation of both CID and CUDOS dashboards. It delivers granular billing data — down to the hour and individual resource level — into an S3 bucket. This data is then queried using Athena and visualized through Amazon QuickSight.

Without the CUR, the dashboards simply wouldn’t function. It captures detailed, itemized usage and billing data that enables filtering by account, service, tag, or cost category. This level of insight is essential for accurate chargebacks, forecasting, anomaly detection, and governance. The quality of the CUR directly impacts the accuracy of the dashboards.

---

## 📊 Cost Intelligence Dashboard (CID)

CID is designed to offer a **high-level, executive-friendly view** of AWS spending. It’s ideal for finance, leadership, and central cloud teams to monitor trends, allocate budgets, and maintain control over cloud expenditure.

### Key Tabs

#### 🧾 Billing Summary
- Shows total AWS spend over time, broken down by linked accounts and top services.
- Useful for **executive reporting**, **budget planning**, and identifying top cost drivers.
- Supports **chargebacks** (billing teams for actual usage) and **showbacks** (reporting usage without actual billing).

#### 📈 Usage Cost Summary
- Lets you analyze usage by tags, accounts, services, and cost categories.
- Enables filtering by business units, environments, or custom labels.

#### 💻 Compute Summary
- Breaks down EC2, Fargate, and Lambda usage.
- Useful for identifying the most expensive compute services and trends in instance use.

#### 🗄️ Storage Summary
- Shows costs for S3, EBS, Glacier, and other storage services.
- Helps monitor growth and optimize storage classes.

#### 💸 RI/SP Summary
- Tracks **Reserved Instance** and **Savings Plan** coverage and utilization.
- Helps ensure we’re getting the most value from our prepaid commitments.

#### 🔎 OPTICS Explorer
- A deep-dive tool to explore specific costs or services.
- Useful for investigating unexpected spikes or cost anomalies.

#### 🔁 MoM Pivot (Month-over-Month)
- Compare month-over-month usage and spend across services, accounts, or tags.
- Great for trend analysis and seasonal cost changes.

---

## 📉 CUDOS Dashboard (Cost Optimization)

CUDOS is focused on **cost optimization, efficiency, and operational insights**. It complements CID by diving into the technical details and finding areas for improvement.

### Key Tabs

#### 🖥️ EC2 Metrics
- Tracks EC2 instance usage, stopped hours, instance types.
- Identifies idle or oversized instances to reduce cost.

#### 🧊 EBS Metrics
- Shows usage and cost of EBS volumes by type and attachment state.
- Highlights unused volumes for potential cleanup.

#### 📦 S3 Metrics
- Provides bucket-level insights into storage usage and class breakdown.
- Identifies high-cost buckets and transition opportunities to archival tiers.

#### ⚙️ Compute Optimizer
- Displays **right-sizing recommendations** for EC2, EBS, RDS, etc.
- Based on AWS Compute Optimizer data (if enabled).

#### 💰 RI & SP Utilization
- Visualizes how well our **Savings Plans** and **Reserved Instances** are being used.
- Helps reduce waste from unused commitments.

#### 🏷️ Tag Compliance
- Validates tagging across services.
- Ensures proper cost allocation and accurate filtering in both CID and CUDOS.

---

## 💼 Why These Dashboards Matter

Together, CID and CUDOS empower us to:

- Monitor spend organization-wide, across all accounts and services
- Identify inefficiencies and take action to reduce costs
- Improve financial accountability through chargebacks and showbacks
- Plan budgets and forecast spend more accurately
- Ensure optimal use of Reserved Instances and Savings Plans
- Maintain good tagging hygiene and governance practices

---

## ✅ Next Steps

- Ensure cost allocation tags are enabled and consistent across all accounts.
- Encourage teams to review CID monthly and use CUDOS for technical cleanup.
- Automate reports or alerts based on anomalies or usage trends.
- Continuously monitor RI/SP utilization and update commitment strategy as needed.
