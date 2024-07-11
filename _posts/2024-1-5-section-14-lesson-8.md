---
layout: posts
title: 'Types of AWS KMS Keys: Understanding Your Options'
section: Section-14
lesson: 8
---

### Types of AWS KMS Keys

AWS Key Management Service (KMS) offers different types of keys to accommodate varying requirements for control, management, and usage. Understanding these differences is important for effectively managing encryption across your AWS resources.

<!-- pagebreak -->

#### Customer Managed Key (CMK)

- **Control and Management**: Created and managed by you, the customer. You have full control over these keys, including the ability to enable, disable, and configure them.
- **Rotation Policy**: Option to set a rotation policy where a new key is generated annually while retaining the old key to decrypt older data.
- **BYOK (Bring Your Own Key)**: You have the option to import your own encryption keys into AWS KMS for use with AWS services and your own applications.
<!-- pagebreak -->

#### AWS Managed Key

- **Automated Management**: These keys are created and managed by AWS on your behalf. You do not need to handle key rotation or other management tasks.
- **Service Integration**: Commonly used by AWS services like Amazon S3, Amazon EBS, and Amazon Redshift, these keys are designated with aliases like `aws/s3` or `aws/ebs`.
<!-- pagebreak -->

#### AWS Owned Key

- **Shared Control**: These are a collection of CMKs that AWS manages and are used across multiple AWS accounts.
- **Limited Visibility**: Although used to protect resources in your account, you do not have access to view these keys.
<!-- pagebreak -->

#### CloudHSM Keys (Custom Keystore)

- **Hardware-Based**: These keys are generated within your own AWS CloudHSM cluster, providing hardware-level security for cryptographic operations.
- **Exclusive Use**: Cryptographic operations using CloudHSM keys occur within the CloudHSM cluster, ensuring that the keys are never exposed outside the hardware security module.

Each type of key serves specific purposes, from fully managed by AWS to fully managed by you, offering a spectrum of control based on your security and compliance needs.

---
