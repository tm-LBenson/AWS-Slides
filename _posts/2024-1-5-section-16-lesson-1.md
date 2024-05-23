---
layout: posts
title: 'AWS STS (Security Token Service) Overview'
section: Section-17
lesson: 1
---

### AWS STS (Security Token Service)

- **AWS STS** is an essential service that we have been using throughout our AWS studies, often without realizing its involvement. It provides a powerful way to manage temporary access to AWS resources.

#### What is AWS STS?

- AWS Security Token Service (STS) enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users).

#### Key Features

- **Temporary Credentials**: These credentials are short-term, as you can configure their expiration period.
- **Security**: By using temporary credentials, you minimize the risk of long-term credentials being compromised.

#### Use Cases

- **Identity Federation**: Manage user identities in external systems (like corporate directories) and grant them access to AWS resources without having to define an AWS identity for them.
- **IAM Roles for Cross-Account Access**: Allow users from one AWS account to access resources in another AWS account.
- **IAM Roles for Amazon EC2**: Attach IAM roles to EC2 instances to provide temporary credentials that these instances can use to make AWS API calls.

<!-- pagebreak -->

#### Exam Tip

- Remember, whenever you encounter a scenario requiring the creation of temporary, limited privileges credentials on the exam, think of AWS STS as your go-to service.

---
