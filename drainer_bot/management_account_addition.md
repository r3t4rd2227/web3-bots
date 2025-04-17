
### 🆕 Addition: Adding the Management Account as a Source Account

Following a discussion with the manager, the management (payer) account was added as a **source account** to the existing Cloud Intelligence Dashboard (CID) setup.

#### 🔄 Steps Taken:

1. **Updated the Source Account Stack in the Data Collection Account:**
   - Modified the **Source Account ID** parameter in the initial stack deployed in the **Data Collection Account**.
   - Replaced the earlier placeholder or test source account ID with the **Management Account ID**.

2. **Deployed the `data-export` Stack in the Management Account:**
   - Using the [AWS Cloud Intelligence Dashboards workshop guide](https://catalog.workshops.aws/awscid/en-US/), followed the instructions under:
     - _“Deploy the data export stack to each source account”_ section.
   - This stack enables the CUR (Cost and Usage Report) data to be exported from the source (management) account to the S3 bucket in the data collection account.
   - Confirmed that the payer account is now integrated into the data collection pipeline.
