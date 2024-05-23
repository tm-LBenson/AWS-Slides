---
layout: posts
title: 'Security and Compliance: Understanding AWS Shared Responsibility Model'
section: Section-14
lesson: 1
---

### AWS Security and Compliance Overview

#### AWS Responsibility - Security of the Cloud

AWS is responsible for protecting the infrastructure that runs all the services offered in the AWS Cloud. This infrastructure comprises hardware, software, networking, and facilities.

<!-- pagebreak -->

##### Managed Services Security by AWS

- **S3, DynamoDB, RDS, etc.**: AWS manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the services operate.

<!-- pagebreak -->

#### Customer Responsibility - Security in the Cloud

Customers are responsible for managing the guest operating system (including updates and security patches), other associated application software as well as the configuration of the AWS provided security group firewall.

<!-- pagebreak -->

##### Example: Amazon EC2 Security

- **Operating System & Network Configuration**: Customers are responsible for management of the guest OS, firewall, and network configurations.
- **Data Encryption**: Encrypting application data is the customer's responsibility.

<!-- pagebreak -->

#### Shared Controls

- **Patch Management**: Customers are responsible for patching and fixing flaws within the software, but AWS is responsible for patching and fixing flaws within the infrastructure.
- **Configuration Management**: Customers manage their own data and configure their instance of database or applications, while AWS takes care of the infrastructure.
- **Awareness & Training**: Both AWS and the customer manage their own training programs for their employees.

<!-- pagebreak -->

#### Examples of Shared Responsibility

##### For RDS

- **AWS Responsibilities**:

  - Managing the underlying EC2 instance and disabling SSH access.
  - Automated database patching.
  - Automated OS patching.
  - Auditing the underlying instance and disks & guaranteeing functionality.

- **Customer Responsibilities**:
  - Managing database security groups and rules.
  - In-database user creation and permissions.
  - Configuring databases to allow only SSL connections.
  - Setting database encryption.

<!-- pagebreak -->

##### For S3

- **AWS Responsibilities**:

  - Guaranteeing unlimited storage.
  - Ensuring data encryption.
  - Separating data between different customers.
  - Preventing AWS employees from accessing customer data.

- **Customer Responsibilities**:
  - Bucket configuration and policy settings.
  - Managing IAM users and roles.
  - Enabling encryption on the buckets.

<!-- pagebreak -->

![AWS Shared Responsibility Model](https://d1.awsstatic.com/security-center/Shared_Responsibility_Model_V2.59d1eccec334b366627e9295b304202faf7b899b.jpg)
