---
layout: posts
title: 'Amazon S3 — Summary'
section: Section-2
lesson: 11
---

### Amazon S3 — Summary

Amazon Simple Storage Service (S3) is an extensive and versatile object storage service from AWS that offers scalability, data availability, security, and performance. Here’s a summary of the key features and functionalities of Amazon S3:

<!-- pagebreak -->

#### Buckets vs Objects

- **Global Unique Name**: Each S3 bucket must have a globally unique name.
- **Region-Specific**: Buckets are tied to a specific AWS region, optimizing for latency and meeting regional compliance requirements.
<!-- pagebreak -->

#### S3 Security

- **IAM Policies**: Control access to S3 resources using AWS Identity and Access Management (IAM).
- **S3 Bucket Policies**: Manage access permissions across your S3 buckets, including options to restrict or grant public access.
- **S3 Encryption**: Provides data security by encrypting your files in transit and at rest, supporting both server-side and client-side encryption options.
<!-- pagebreak -->

#### S3 Websites

- **Static Website Hosting**: Host and deploy static websites directly from S3 buckets with ease, leveraging S3’s durability and scalability.
<!-- pagebreak -->

#### S3 Versioning

- **File Version Control**: Maintain multiple versions of an object within S3. This feature is important for data integrity, allowing you to recover from accidental deletions or overwrites.
<!-- pagebreak -->

#### S3 Replication

- **Cross-Region and Same-Region**: Supports both cross-region (CRR) and same-region (SRR) replication, ensuring data durability and availability. Requires enabling versioning on the source and destination buckets.
<!-- pagebreak -->

#### S3 Storage Classes

- **Diverse Options**: Offers various storage classes tailored for different use cases, including:

  - **Standard**: High availability and performance for frequently accessed data.
  - **IA (Infrequent Access)**: Lower cost for less frequently accessed data.
  - **One Zone-IA**: Lower-cost option, stored in a single AZ.
  - **Intelligent-Tiering**: Automatically moves data to the most cost-effective access tier.
  - **Glacier**: For archiving, with retrieval options ranging from minutes to hours.

---
