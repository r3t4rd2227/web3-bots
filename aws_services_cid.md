
# 🧩 AWS Services Utilized in CID Deployment

The Cloud Intelligence Dashboard (CID) leverages a suite of AWS services to facilitate data collection, processing, visualization, and secure access. Below is an overview of these services and their roles:

## 1. Amazon S3 (Simple Storage Service)
- **Function**: Stores the AWS Cost and Usage Reports (CUR) and serves as the data lake for analytics.
- **Usage in CID**: Houses raw CUR files and processed data, enabling replication across accounts if needed.

## 2. AWS Glue
- **Function**: Provides data cataloging and ETL (Extract, Transform, Load) capabilities.
- **Usage in CID**: Catalogs CUR data and prepares it for querying through Athena.

## 3. Amazon Athena
- **Function**: Allows SQL-based querying of data stored in S3.
- **Usage in CID**: Executes queries on CUR data to feed insights into QuickSight dashboards.

## 4. Amazon QuickSight
- **Function**: Delivers business intelligence and data visualization services.
- **Usage in CID**: Renders the CID and CUDOS dashboards, providing interactive visual insights.

## 5. AWS Identity Center (formerly AWS SSO)
- **Function**: Manages centralized access and authentication across AWS accounts.
- **Usage in CID**: Integrates with Azure AD to control user access to QuickSight dashboards.

## 6. AWS CloudFormation
- **Function**: Facilitates infrastructure as code for provisioning AWS resources.
- **Usage in CID**: Automates the deployment of CID components, including S3 buckets, Glue jobs, and QuickSight configurations.

## 7. AWS Cost and Usage Report (CUR)
- **Function**: Generates detailed billing reports for AWS usage.
- **Usage in CID**: Acts as the primary data source for cost analysis and dashboard visualizations.

## 8. AWS IAM (Identity and Access Management)
- **Function**: Controls access to AWS services and resources securely.
- **Usage in CID**: Defines permissions and roles for services like Glue and Athena to interact with CUR data.

## 9. AWS Lambda (Optional)
- **Function**: Runs code in response to events without provisioning servers.
- **Usage in CID**: May be employed for custom data processing tasks or automation within the CID framework.

---

This compilation is based on information from the [AWS Well-Architected Labs](https://www.wellarchitectedlabs.com/cloud-intelligence-dashboards/) and related AWS documentation.
