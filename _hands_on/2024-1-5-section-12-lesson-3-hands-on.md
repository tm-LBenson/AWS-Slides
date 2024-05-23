---
layout: posts
title: 'Hands-On: Setting Up Amazon EventBridge Rules'
section: Section-12
lesson: 3
order: 1
---

### Configuring Rules in Amazon EventBridge

This hands-on tutorial will guide you through setting up different rules in Amazon EventBridge to handle scheduled tasks, monitor AWS account activities, and respond to specific events like EC2 instance termination.

<!-- pagebreak -->

#### Creating a Scheduled Lambda Invocation Rule

- **Navigate to EventBridge**: Open AWS Management Console, go to Services and select EventBridge.
- **Create Rule**:
  - Click on 'Create rule'.
  - Name the rule 'InvokeLambdaEveryHour'.
  - Set the rule type to 'Schedule'.
  - Choose 'Rate' and set it to trigger every 1 hour.
  - Disable 'Flexible time window'.
  - Click 'Next'.
- **Set Targets**:
  - For the target, select 'Lambda function'.
  - Click 'Create new Lambda function', provide a name, and leave the default settings.
  - In the function code, simply log the event or return a basic message.
  - Configure a sample JSON payload to be sent to the Lambda function.
  - Click 'Next' and review the settings.

<!-- pagebreak -->

#### Monitoring AWS Sign-in Events

- **Create a Rule for Sign-in Monitoring**:
  - Select 'Rule with an event pattern'.
  - Under 'Event Pattern', choose 'AWS Console sign-in events'.
  - Select 'Sign-in events'.
  - For the target, choose 'SNS topic'.
  - Optionally, create a new SNS topic or select an existing one for notifications.
  - Finalize the rule setup by reviewing and creating the rule.

<!-- pagebreak -->

#### Monitoring EC2 Instance Termination

- **Create a Rule for EC2 Termination**:
  - Again, choose 'Rule with an event pattern'.
  - Under 'Event Pattern', select 'EC2' for service and 'Instance State-change Notification' for the event type.
  - Specify 'terminated' as the specific state change to monitor.
  - Set 'SNS topic' as the target, and either select an existing topic or create a new one for alerts.
  - Complete the setup by reviewing all settings and creating the rule.

<!-- pagebreak -->

#### Cleanup and Review

- **Review and Test**: Verify that each rule triggers as expected. For example, check your email for notifications or the Lambda logs for execution proof.
- **Cleanup**: To avoid unnecessary charges, remember to delete any resources you no longer need, such as Lambda functions, SNS topics, or EventBridge rules.

This exercise helps you understand how to use Amazon EventBridge to automate tasks, monitor important account activities, and respond to changes within your AWS environment effectively.

---
