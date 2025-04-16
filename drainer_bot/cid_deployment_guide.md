
# 🧭 Deployment of AWS Cloud Intelligence Dashboards (CID & CUDOS)

This page documents the steps taken to deploy the AWS Cloud Intelligence Dashboards (CID and CUDOS) in our **Infrastructure Deployment Account** for internal testing and observation, in preparation for a broader organization-wide rollout.

---

## 📦 1. Deploy Initial Stack – Setup for CUR Replication & Athena Tables

Following the [official documentation](https://catalog.workshops.aws/awscid/en-US/), we first deployed the foundational CloudFormation stack responsible for:

- Creating the required **S3 bucket** (open for replication)
- Setting up **Glue tables** and **Athena resources**

### ⚙️ Stack Customization
Parameters customized for our use:

- `destinationAccountId`: _Same as current account ID (since this is both source & destination for now)_
- `sourceAccountIds`: _Same account ID again — only testing within one account_
- `curEnabled`: `Yes`

> **Note:** This stack assumes the identity used has the required permissions to deploy CloudFormation stacks and manage IAM, S3, Glue, and Athena.  
We verified permissions according to the [CID admin policies template](https://github.com/aws-solutions-library-samples/cloud-intelligence-dashboards-framework/blob/main/cfn-templates/cid-admin-policies.yaml).

---

## 📊 2. QuickSight Setup with Azure AD Groups via Identity Center

### ✅ Identity & Permissions

To use Azure AD as our identity provider, we:
- Created **three AD groups**:  
  - `QS-Admins`  
  - `QS-Authors`  
  - `QS-Readers`
- Mapped these groups to AWS **IAM Identity Center**
- Assigned appropriate QuickSight permissions to each group

### 📋 QuickSight Setup Steps

Followed [this setup guide](https://catalog.workshops.aws/awscid/en-US/customizations/sso-application/):

- Chose a **notification email**
- Set a **unique QuickSight account name**
- Enabled **autodiscovery** for Athena, S3, and IAM
- Ensured the **region matches** the region used for the first stack

Completed the sign-up successfully.

---

## 📈 3. Dashboard Deployment (CID & CUDOS)

Used the pre-populated CloudFormation template provided in the CID documentation to deploy dashboards into the QuickSight environment.

### 🔧 Key Parameters Set

- Selected both **CID** and **CUDOS** dashboards for deployment
- Entered the **QuickSight username**
- Confirmed:
  - QuickSight is set up and active
  - The correct edition (Enterprise) is in use
  - Access to Athena/S3 is in place

### 🔒 Security Enhancements (Control Tower Compliance)

Made the following adjustments to the dashboard deployment template to comply with **Control Tower constraints**:

- **Enforced SSL policy** on all S3 buckets
- **Removed AccessControlList (ACL)** configurations to comply with bucket policy standards

---

## ✅ Deployment Outcome

- Stack creation was successful
- Both **CID** and **CUDOS** dashboards are now visible and accessible within the QuickSight interface
- The infrastructure deployment account is now ready for internal testing and showcasing
