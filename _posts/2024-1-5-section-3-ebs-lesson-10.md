---
layout: posts
title: 'Summary of Section 3 Notes'
section: Section-3-EBS
lesson: 10
---

### Summary of Section 3 Notes

Day 3 covers various storage services within Amazon Web Services (AWS), focusing on Elastic Block Store (EBS), Elastic File System (EFS), and Amazon FSx. Below is a summary of the key points from these notes:

<!-- pagebreak -->

#### Elastic Block Store (EBS)

- **Overview**: EBS offers scalable and durable block-level storage for Amazon EC2 instances. It provides flexible storage solutions with features like scalability, durability, redundancy, and snapshots for backup and recovery.
- **Delete on Termination**: This setting determines whether an EBS volume is deleted when the EC2 instance is terminated. The default behavior is to delete the root volume, but additional volumes may not be deleted. Understanding this setting helps manage data persistence and storage costs.
- **Creating a Second Volume**: Adding additional EBS volumes allows for increased storage capacity and separation of data. These volumes can be attached, formatted, and mounted to EC2 instances.
- **EBS Volume Availability Zone (AZ) Limitations**: EBS volumes are restricted to the Availability Zone in which they are created. Attempting to attach a volume from a different AZ results in an error. To move volumes across AZs, snapshots can be used.

<!-- pagebreak -->

#### EBS Snapshots

- **Overview**: EBS snapshots are point-in-time backups of EBS volumes. They are stored in Amazon S3 and can be used to create new volumes or restore existing ones. Snapshots are incremental and can be shared across AWS accounts or copied to other regions.
- **Features**: EBS Snapshot Archive allows snapshots to be moved to an "archive tier," offering lower-cost storage for infrequently accessed data. EBS Snapshot Recycle Bin provides a way to retain deleted snapshots for a specified period, reducing the risk of accidental data loss.

<!-- pagebreak -->

#### Amazon Machine Image (AMI)

- **Overview**: An AMI is a pre-configured template for creating Amazon EC2 instances, containing the operating system, applications, and configurations. AMIs help quickly launch new instances with predefined setups.
- **Creating and Using AMIs**: Custom AMIs can be created from existing EC2 instances and used to launch new instances. User data scripts can automate tasks during instance startup, ensuring consistent configurations.

<!-- pagebreak -->

#### EC2 Image Builder

- **Overview**: EC2 Image Builder is a service that automates the process of creating, testing, and distributing custom AMIs. It allows for the definition of image pipelines, custom components, and automated testing to ensure compliance.
- **Features and Use Cases**: EC2 Image Builder provides automated image creation, version control, and distribution across multiple AWS regions. It is useful for creating custom AMIs and ensuring compliance with security standards.

<!-- pagebreak -->

#### EC2 Instance Store

- **Overview**: An instance store provides temporary block-level storage for Amazon EC2 instances. It offers high throughput and low latency but is not persistent. Data is lost when the instance is stopped, terminated, or experiences hardware issues.
- **Characteristics and Use Cases**: Instance store is suitable for temporary data, high-performance applications, and scratch space but should be used with caution due to its ephemeral nature.

<!-- pagebreak -->

#### Amazon Elastic File System (EFS)

- **Overview**: EFS is a scalable file storage service for use with AWS resources like EC2 instances and Lambda functions. It provides a shared file system accessible by multiple instances simultaneously.
- **Features and Use Cases**: EFS offers scalability, multi-AZ availability, and integration with other AWS services. It is ideal for shared storage, data analytics, and backup solutions. EFS is expensive but offers high performance and flexibility.

<!-- pagebreak -->

#### EFS Infrequent Access (EFS-IA)

- **Overview**: EFS-IA is a lower-cost storage class within EFS for infrequently accessed files. It provides a cost-effective storage option with automatic tiering and high availability.
- **Features and Use Cases**: EFS-IA is suitable for long-term file storage, backup, and disaster recovery. It complements the standard EFS storage class and provides automatic tiering based on file access patterns.

These summaries encapsulate the key concepts and features of EBS, AMIs, EC2 Image Builder, instance stores, and EFS, providing a high-level overview of the topics covered in Day 3 notes.

---
