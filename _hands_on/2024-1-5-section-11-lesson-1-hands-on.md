---
layout: posts
title: 'Hands-On: CloudWatch Metrics and Alarms'
section: Section-11
lesson: 1
order: 1
---

### Exploring CloudWatch Metrics and Setting Alarms

This hands-on exercise will guide you through the process of exploring AWS CloudWatch metrics for various services and setting up an alarm based on EC2 CPU utilization.

<!-- pagebreak -->

#### Exploring Metrics

- **Navigate to CloudWatch**: Open the AWS Management Console, go to Services, and select CloudWatch.
- **View Metrics**: Click on 'Metrics' then 'All metrics'. You'll see a dashboard with metrics categorized by AWS service.
- **Explore Service Metrics**: Dive into metrics for services like EC2, S3, and others. Click on specific metrics to view detailed graphs representing the data over time.
- **Interact with Graphs**: Customize the view, change the time range, add or remove statistics to understand the behavior of your AWS resources better.

<!-- pagebreak -->

#### Setting Up Alarms

- **Navigate to Alarms**: In the CloudWatch console, click on 'Alarms' then 'All Alarms'.
- **Create Alarm**:
  - Click 'Create alarm'.
  - Select 'Select Metric', navigate to 'EC2' > 'Per-instance Metrics'.
  - Find 'CPUUtilization', select it, and then click 'Select metric'.
  - Configure the metric and conditions:
    - **Condition**: Set the threshold type to 'Static'.
    - **Threshold**: Set to 'greater than 80%'.
    - **Period**: Choose a suitable period for evaluation, such as 5 minutes.
- **Actions**:
  - **Create New Topic** for notifications:
    - Enter a topic name and an email address (e.g., user@example.com for demonstration).
    - Click 'Create topic'.
  - Optionally, explore other actions like Auto Scaling adjustments.
- **Set Alarm Name and Description**: Provide a meaningful name and description for your alarm.
- **Review and Create**:
  - Review your settings.
  - Click 'Create alarm'.

<!-- pagebreak -->

#### Monitoring and Notifications

- **Monitor Alarms**: Stay on the Alarms dashboard to monitor the status of your new alarm. The state will change based on the CPU utilization of the selected EC2 instance.
- **Email Notifications**: If the CPU utilization exceeds 80%, an email will be sent to the subscribed address, notifying you of the alarm state.

<!-- pagebreak -->

#### Cleanup

- To avoid unnecessary charges, ensure to delete any test alarms and unsubscribe from any SNS topics after completing this exercise.

This exercise provides practical experience in monitoring AWS resources using CloudWatch and setting alarms to manage resource performance proactively. It highlights the importance of setting thresholds and alerts to maintain optimal operation of AWS services.

---
