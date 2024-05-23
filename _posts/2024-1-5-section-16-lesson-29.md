---
layout: posts
title: 'Account Best Practices and Billing and Costing Tools — Summary'
section: Section-16
lesson: 29
---

### Account Best Practices — Summary

- **Operate multiple accounts using AWS Organizations**:

  - Use SCP (Service Control Policies) to restrict account power.
  - Easily setup multiple accounts with AWS Control Tower.

- **IAM Guidelines**:

  - Implement MFA, apply least-privilege principles, and enforce strong password policies and rotation.

- **Monitoring and Compliance**:

  - Utilize AWS Config to record all resources configurations and maintain compliance over time.
  - Deploy stacks across accounts and regions with AWS CloudFormation.
  - Gain insights with AWS Trusted Advisor; select a Support Plan that matches your needs.

- **Security and Logging**:

  - Send service logs and access logs to S3 or AWS CloudWatch Logs.
  - Record API calls within your account using AWS CloudTrail.
  - In case of account compromise: change the root password, delete and rotate all sensitive credentials, and contact AWS support.

- **Resource Management**:
  - Allow users to create pre-defined stacks defined by admins using AWS Service Catalog.

<!-- pagebreak -->

### Billing and Costing Tools — Summary

- **AWS Compute Optimizer**:

  - Recommends resources' configurations to reduce costs.

- **AWS Pricing Calculator**:

  - Helps estimate the cost of services on AWS.

- **Billing Dashboard**:

  - Provides a high-level overview and a dashboard for monitoring AWS Free Tier usage.

- **Cost Management**:

  - Use Cost Allocation Tags to create detailed billing reports.
  - Leverage AWS Cost and Usage Reports for a comprehensive billing dataset.
  - Analyze current and forecast future usage with AWS Cost Explorer.

- **Billing Alarms and Budgets**:

  - Set up billing alarms in CloudWatch (only in us-east-1) to track overall and per-service billing.
  - Use AWS Budgets for more advanced tracking of usage, costs, RI, and receive alerts.

- **Savings Plans and Cost Control**:

  - Enroll in Savings Plans for easy savings based on long-term usage.
  - Detect unusual spending patterns with AWS Cost Anomaly Detection using ML.

- **Service Management**:
  - Monitor and manage service quotas to avoid hitting limits.

---
