---
layout: posts
title: 'Hands-On: Exploring VPC Flow Logs and Peering Connections'
section: Section-13
lesson: 5
order: 1
---

### Hands-On: Exploring VPC Flow Logs and Peering Connections

This hands-on guide will introduce you to setting up VPC Flow Logs and exploring the concept of VPC Peering within the AWS Management Console. Understanding these tools will enhance your ability to monitor and connect your network resources securely and efficiently.

<!-- pagebreak -->

#### Exploring Flow Logs

- **Navigate to the VPC Dashboard**: Go to the VPC section within the AWS Management Console.
- **Select Your VPC**: Choose the VPC you wish to explore from the list.
- **Flow Logs Tab**: Click on the 'Flow Logs' tab to see any existing logs or create new ones.
- **Create Flow Log**:
  - Click on 'Create flow log'.
  - Review the settings which include the type of traffic to capture, the destination for the logs (CloudWatch Logs, S3, etc.), and additional tagging options.
  - **Note**: Understanding these settings is important for configuring flow logs that meet your monitoring needs.

<!-- pagebreak -->

#### Peering Connection Setup

- **Access VPC Peering**:
  - Under the VPC dashboard, click on 'Peering Connections'.
  - Click on 'Create Peering Connection' to start the process of linking two VPCs, potentially across different accounts or regions.
- **Review Peering Settings**:
  - Examine the options for setting up a peering connection, including the requester and accepter VPC details.
  - Note the settings for DNS resolution and routing options between the VPCs.

<!-- pagebreak -->

#### Observations and Cancellation

- **Understanding Configurations**:
  - During both setups, take the time to understand the impact of each setting on network connectivity and security.
  - For VPC Flow Logs, pay attention to data retention and access permissions.
  - For VPC Peering, consider the network routing and security implications of connecting VPCs.
- **Cancellation**:
  - After reviewing, you may cancel out of the creation dialogs to avoid unnecessary charges or configurations that are not needed for your current environment.

---
