---
layout: posts
title: 'Hands-On: Using Amazon SNS'
section: Section-11
lesson: 4
order: 1
---

### Hands-On: Creating and Using Amazon SNS Topic

This hands-on guide will walk you through the process of creating an Amazon SNS (Simple Notification Service) topic, subscribing to it via email, and sending a test message to verify the setup.

<!-- pagebreak -->

#### Step 1: Create an SNS Topic

- **Navigate to SNS**: Open the AWS Management Console, go to Services, and select Simple Notification Service.
- **Create Topic**: Click on 'Create topic'.
  - **Type**: Select 'Standard'.
  - **Name**: Enter "demo-sns" as the topic name.
  - **Settings**: Leave the default settings unchanged.
  - **Create**: Click 'Create topic' to finalize the setup.

<!-- pagebreak -->

#### Step 2: Subscribe to the Topic

- **Create Subscription**:
  - **Protocol**: Choose 'Email' as the subscription protocol.
  - **Endpoint**: Enter your email address where you wish to receive notifications.
  - **Create**: Click 'Create subscription'.
- **Confirm Subscription**:
  - **Email Verification**: Check your email for a subscription confirmation message from AWS.
  - **Confirm**: Click the confirmation link in the email to activate your subscription.

<!-- pagebreak -->

#### Step 3: Publish a Message

- **Publish Message**:
  - **Access the Topic**: Return to the AWS SNS console and select your topic.
  - **Publish**: Click on 'Publish message'.
    - **Subject**: Provide a subject for your message.
    - **Message Body**: Type a message body.
    - **Send**: Click 'Publish message'.

<!-- pagebreak -->

#### Step 4: Check for the Message

- **Email Notification**: Check your email to confirm that you have received the message sent through the SNS topic. This verifies that your SNS setup is functioning correctly.

<!-- pagebreak -->

#### Clean Up

- **Delete Subscription and Topic**: To avoid potential charges and clean up resources, delete the subscription and the topic:
  - Navigate back to the SNS dashboard.
  - Select the topic, then 'Subscription' and delete it.
  - After removing the subscription, delete the topic.

This exercise demonstrates the basic functionalities of Amazon SNS, including creating a topic, subscribing via email, and publishing messages. It is a simple yet effective way to understand how SNS can be used for sending notifications across different channels.

---
