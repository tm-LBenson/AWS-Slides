---
layout: posts
title: 'Hands-On: Amazon SQS Standard Queue'
section: Section-10
lesson: 2
order: 1
---

### Hands-On: Creating and Using a Standard SQS Queue

#### Step-by-Step Guide to Creating a Standard Queue

Amazon Simple Queue Service (SQS) allows you to manage message queuing for decoupling application components. In this hands-on, we will create a standard SQS queue and demonstrate basic operations like sending and receiving messages.

<!-- pagebreak -->

#### Creating a Standard SQS Queue

- **Navigate to SQS**: Open the AWS Management Console, go to Services, and select SQS under Application Integration.
- **Create New Queue**: Click on 'Create Queue'.
- **Select Queue Type**: Choose 'Standard Queue'. For this exercise, we will use a standard queue as it provides nearly unlimited throughput, best-effort ordering, and at-least-once delivery.
- **Queue Settings**: You can leave all settings at their default values. Advanced settings are out of the scope for the exam.

<!-- pagebreak -->

#### Sending Messages

- **Send a Message**: Once your queue is created, navigate to the 'Send and receive messages' panel.
- **Compose Your Message**: In the message body, type 'Hello World' and click 'Send Message'.
- **Send Another Message**: Repeat the process to send another message. After sending, notice the 'Messages Available' count increase accordingly.

<!-- pagebreak -->

#### Receiving Messages

- **Poll for Messages**: Click on 'Poll for messages' to see the messages you have sent.
- **Review Messages**: As the messages appear, click on each one to view its contents. This shows how messages are received in an SQS queue.
- **Delete Messages**: After reviewing, select each message and delete them to clean up your queue.

<!-- pagebreak -->

#### Clean Up

- **Delete the Queue**: To avoid any lingering resources, go back to the queue dashboard, select the queue you created, and click 'Delete Queue'. Confirm the deletion.

This exercise demonstrates the basic functionality of Amazon SQS for standard queues. By following these steps, you gain practical experience in managing simple message queues, which can help in understanding the decoupling component of distributed applications.

---
