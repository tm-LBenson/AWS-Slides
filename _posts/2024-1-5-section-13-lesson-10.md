---
layout: posts
title: 'AWS Secrets Manager Overview'
section: Section-13
lesson: 10
---

### AWS Secrets Manager

#### Introduction

AWS Secrets Manager is a service designed to help you protect access to your applications, services, and IT resources without the upfront investment and on-going maintenance costs of operating your own infrastructure.

#### Key Features

- **Secrets Rotation**: Secrets Manager has the capability to automatically rotate secrets according to a schedule you define. This helps in adhering to security best practices by changing passwords and other secrets periodically.
- **Automated Secret Generation**: Upon rotation, AWS Secrets Manager can also automate the generation of new secrets, utilizing AWS Lambda to handle the complexities of the rotation logic.
- **Encryption**: All secrets stored in AWS Secrets Manager are encrypted using AWS Key Management Service (KMS).

#### Integration with RDS

- AWS Secrets Manager integrates seamlessly with Amazon RDS, supporting databases like MySQL, PostgreSQL, and Aurora. This integration simplifies the process of managing database credentials and other secrets.

#### Use Case for the Exam

In the AWS certification exams, scenarios involving the management of database credentials securely or the need for automated password rotation often suggest the use of AWS Secrets Manager. When you see such requirements, particularly with Amazon RDS, think of AWS Secrets Manager as your go-to service.

#### Pricing and Hands-On Exploration

- Before concluding, it's useful for students to understand the cost implications of using AWS Secrets Manager.
- Navigate to the AWS Management Console, find the AWS Secrets Manager service, and explore:
  - **Pricing Details**: Understand how the pricing works to estimate the cost for managing secrets.
  - **Creating a Secret**: Walk through the process of creating a secret to familiarize yourself with the interface and options available.

Make sure to cancel any operations if you are just exploring to avoid unnecessary charges.

---
