---
layout: posts
title: 'CloudWatch Metrics & Alarms'
section: Section-12
lesson: 1
---

### Overview of AWS CloudWatch Metrics & Alarms

AWS CloudWatch is an essential monitoring service that provides data and actionable insights to monitor your AWS resources, optimize performance, and understand system health. CloudWatch collects monitoring data in the form of logs, metrics, and events, offering a comprehensive view of AWS resources, applications, and services that run on AWS.

<!-- pagebreak -->

#### CloudWatch Metrics

- **What are Metrics?** Metrics are the fundamental concept in CloudWatch and represent a variable you can monitor over time. They are used to record the operations of different AWS services and resources.
- **Key Metrics**:

  - **EC2 Instances**: Metrics include CPU Utilization, Status Checks, and Network activity. Note that RAM usage is not automatically monitored.
  - **EBS Volumes**: Key metrics are Disk Read/Writes.
  - **S3 Buckets**: Includes metrics like `BucketSizeBytes`, `NumberOfObjects`, and `AllRequests`.
  - **Billing**: Tracks the `Total Estimated Charge`, which is only available in the `us-east-1` region.
  - **Service Limits**: Monitors the usage against the service limits.

- **Monitoring Intervals**:
  - Default metrics are available every 5 minutes.
  - Detailed Monitoring, which provides data every 1 minute, is available for an additional charge.

<!-- pagebreak -->

#### CloudWatch Alarms

- **Purpose of Alarms**: CloudWatch Alarms are used to perform actions in response to metrics reaching certain threshold. Alarms can take various actions, such as sending notifications or automatically adjusting resources.
- **Alarm Actions**:
  - **Auto Scaling**: Adjust the EC2 instances "desired" count based on metrics.
  - **EC2 Actions**: Stop, terminate, reboot, or recover EC2 instances.
  - **SNS Notifications**: Send alerts to an SNS topic to notify administrators or trigger automated processes.
- **Configuration Options**: Alarms can be configured with various statistical calculations such as averages, maximums, and minimums, and can be set to evaluate over a specified period.
- **Alarm States**:
  - **OK**: The metric is within the defined threshold.
  - **INSUFFICIENT DATA**: There isn't enough data to determine the metric state.
  - **ALARM**: The metric is beyond the defined threshold and triggers the associated actions.

<!-- pagebreak -->

#### Setting Up a Billing Alarm

- **Example**: Set up a billing alarm to monitor charges and keep costs under control. This uses the billing metric available only in the `us-east-1` region and can notify stakeholders of potential overages.

CloudWatch is a versatile tool that not only helps in monitoring the operational health of your AWS resources but also aids in automating responses to potential issues. Understanding and utilizing CloudWatch Metrics and Alarms effectively can ensure better management and operational efficiency of AWS environments.

---
