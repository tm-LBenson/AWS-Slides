---
layout: posts
title: 'Hands-On: Creating VPC Endpoints'
section: Section-13
lesson: 6
order: 1
---

### Hands-On: VPC Endpoints

#### Exploring VPC Endpoints

- Begin by navigating to the VPC dashboard in the AWS Management Console.
- On the left-hand menu, click on "Endpoints" to open the VPC Endpoints configuration page.

<!-- pagebreak -->

#### Creating a VPC Endpoint

- **Start Creating an Endpoint**:
  - Click on "Create Endpoint" to initiate the process.
  - You will see a list of AWS services available for the endpoint creation.
  - Notice the distinction between services labeled as "Interface" and those marked as "Gateway".

<!-- pagebreak -->

#### Selecting the Service Type

- **Choosing a Service**:
  - For demonstration, observe the options available under the "Service Name" dropdown.
  - Specific attention to "Amazon S3" and "Amazon DynamoDB", which are categorized under the "Gateway" type, highlighting their unique configuration compared to other services which use the "Interface" type.

<!-- pagebreak -->

#### Understanding Endpoint Types

- **Key Points**:
  - Gateway endpoints are used specifically for Amazon S3 and DynamoDB.
  - Interface endpoints are applicable to most other AWS services, indicating a different setup and use case.

---
