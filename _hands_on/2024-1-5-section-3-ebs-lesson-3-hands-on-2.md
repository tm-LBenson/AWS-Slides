---
layout: posts
title: 'Hands-On: Creating a Retention Rule for EBS Snapshots'
section: Section-4
lesson: 3
order: 2
---

### Hands-On: Creating a Retention Rule for EBS Snapshots

Creating a retention rule for EBS snapshots allows you to manage their lifecycle and protect against accidental deletions. Here's how to create a retention rule using the AWS Recycle Bin:

<!-- pagebreak -->

#### Go to the AWS Recycle Bin

- In the AWS Management Console, search for "Recycle Bin" and select it from the results.
- This is where you can manage retention rules for EBS snapshots.

<!-- pagebreak -->

#### Create a New Retention Rule

- Click "Create Retention Rule" to begin setting up a new rule.
- Provide a name for the rule and a description to help identify its purpose.

<!-- pagebreak -->

#### Select Resources and Set Retention Period

- Select "Snapshots" as the resource type.
- You can specify certain tags to apply the rule to specific snapshots or leave it open to apply to all snapshots.
- Set the retention period (e.g., 30 days, 90 days, 1 year). This defines how long a deleted snapshot is retained before permanent deletion.

<!-- pagebreak -->

#### Create the Retention Rule

- Click "Create Retention Rule" to complete the setup.
- The rule will be active, and any deleted snapshots that match the rule criteria will be retained for the specified period.

These hands-on guides walk you through creating an EBS snapshot and setting up a retention rule to manage snapshot lifecycle and ensure data recovery options in case of accidental deletion.
