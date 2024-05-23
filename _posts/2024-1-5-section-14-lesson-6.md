---
layout: posts
title: 'Encryption Practices in AWS: Securing Data at Rest and In Transit'
section: Section-14
lesson: 6
---

### Encryption Practices in AWS

#### Data Encryption Overview

In AWS, ensuring the security of your data involves encrypting it both at rest and in transit:

- **Data at Rest**: This refers to data stored on physical devices, such as disks in an Amazon RDS instance, S3 Glacier Deep Archive, or on a hard disk.
- **Data in Transit (In Motion)**: This refers to data being actively moved from one location to another, such as from on-premises to AWS, or between AWS services like EC2 to DynamoDB. This typically involves data traveling across a network.

<!-- pagebreak -->

#### Importance of Encryption

Encrypting data in both states—rest and transit—is crucial to protect sensitive information from unauthorized access. AWS provides robust encryption solutions to handle this:

- **Encryption Keys**: Managed through AWS Key Management Service (KMS), which simplifies the creation and control of encryption keys used to encrypt data.

<!-- pagebreak -->

#### Encryption Options in AWS

AWS provides two main approaches to encryption:

- **Encryption Opt-in**:

  - **EBS volumes**: Encrypt volumes to secure data.
  - **S3 buckets**: Enable server-side encryption for objects.
  - **Redshift databases**: Activate encryption for data storage.
  - **RDS databases**: Secure database data with encryption.
  - **EFS drives**: Protect data with encryption.

- **Encryption Automatically Enabled**:
  - **CloudTrail Logs**: Automatically encrypted to secure audit logs.
  - **S3 Glacier**: Encryption is standard for archived data.
  - **Storage Gateway**: Data is encrypted by default to ensure security.

<!-- pagebreak -->

#### Key Takeaway for the AWS Exam

Remember, whenever you hear "encryption" related to AWS services during the exam, think of AWS Key Management Service (KMS). AWS KMS manages the encryption keys for you, ensuring that your data remains secure whether at rest or in transit.

---
