---
title: 'Hands-On: AWS Cost Allocation Tags'
section: Section-16
lesson: 20
order: 3
---

### Introduction to Cost Allocation Tags

Cost Allocation Tags provide a way to organize AWS resources and track your AWS costs on a more granular level. Tags are key-value pairs attached to AWS resources and can be used for cost tracking and resource management.

<!-- pagebreak -->

#### Hands-On: Tagging and Resource Group Creation

##### Access Tag Editor

- Navigate to **Resource Groups & Tag Editor** in the AWS Console.
- Click on **Tag Editor** from the left sidebar.

##### Review Existing Tags

- Select **Security Groups** from the resource type dropdown.
- Review existing tags and observe how resources are currently organized.

##### Add New Tags

- Select all the groups you wish to tag or manage.
- Add a new tag with the key `Department` and value `IT` to categorize these resources under the IT department.

<!-- pagebreak -->

#### Create a Resource Group Based on Tags

##### Setup Resource Group

- Return to the **Resource Groups** sidebar and click on **Create Resource Group**.
- Choose **Tag-based** grouping.
- Use the `Department` tag and set its value to `IT` to include all resources tagged as IT department.

##### Preview and Save

- Click **Preview Resource Group** to review the resources that will be included based on the tags.
- Name the group **IT-Resources** and create the resource group.

<!-- pagebreak -->

#### Using Tags for Cost Management

Consider how you can leverage these tags to track costs specifically for the IT department, making it easier to allocate budget and understand spending patterns within the organization.

---
