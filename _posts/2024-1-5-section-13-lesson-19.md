---
layout: posts
title: 'Understanding AWS IAM Access Analyzer'
section: Section-13
lesson: 19
---

### Introduction to IAM Access Analyzer

#### What is IAM Access Analyzer?

IAM Access Analyzer is a tool designed to help you identify resources in your AWS environment that are shared with external entities. This tool assists in understanding and managing access to your resources to ensure that only intended users have access.

<!-- pagebreak -->

#### Key Features of IAM Access Analyzer

- **Resource Sharing Insights**: IAM Access Analyzer provides insights into which AWS resources are shared and with whom. These resources include:
  - S3 Buckets
  - IAM Roles
  - KMS Keys
  - Lambda Functions and Layers
  - SQS Queues
  - Secrets in Secrets Manager

<!-- pagebreak -->

#### Defining Zone of Trust

- **Zone of Trust**: You can define a Zone of Trust at the level of an individual AWS Account or across an AWS Organization. IAM Access Analyzer uses this zone to monitor and identify access that crosses the trust boundaries.

- **Findings**: Any sharing of resources outside the defined Zone of Trust is flagged as a finding. These findings help you review and remediate unintended external access.

<!-- pagebreak -->

#### Exploring Access Analyzer in AWS

Feel free to explore IAM Access Analyzer through the AWS Management Console. It is a free service that can provide significant insights into resource sharing and access patterns. Using IAM Access Analyzer can help you tighten security and ensure that your resource permissions align with your organizational policies and requirements.

---
