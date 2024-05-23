---
layout: posts
title: 'Databases - RDS Overview'
section: Section-7
lesson: 2
---

### Databases - RDS Overview

- **RDS**: Relational Database Service by AWS.
- Managed DB service utilizing SQL for querying.
- Enables cloud-based database management.
<!-- pagebreak -->

#### Supported Database Engines in RDS

- **Postgres**: Open-source, reliable with advanced features.
- **MySQL**: Popular in web applications, open-source.
- **MariaDB**: MySQL fork, offers MySQL compatibility plus enhancements.
- **Oracle**: Enterprise-level, robust and scalable.
- **Microsoft SQL Server**: Widely used in Windows environments.
- **IBM DB2**: Comprehensive data management solutions.
- **Aurora (AWS Proprietary)**: High performance, scalable, compatible with MySQL and PostgreSQL.
<!-- pagebreak -->

#### Advantage of Using RDS Versus Deploying DB on EC2

- **Managed Service**: Automated provisioning, OS patching, continuous backups with Point in Time Restore, monitoring dashboards, and read replicas.
- **Disaster Recovery**: Multi-AZ setups ensure high availability and disaster recovery.
- **Maintenance and Upgrades**: Scheduled maintenance windows minimize downtime.
- **Scalability**: Supports vertical and horizontal scaling to handle varying loads.
- **Storage**: Uses Amazon EBS for reliable, scalable, and redundant storage.
- **Limited Access**: No SSH access, providing a secure but less controllable environment.
<!-- pagebreak -->

#### Key Takeaways for AWS Database Services Exam

#### RDS and Aurora

- **Common Features**:
  - Both are managed services for relational databases on AWS.
  - They simplify database administration by managing underlying infrastructure such as hardware provisioning, database setup, patching, and backups.
  <!-- pagebreak -->

#### Differences

- **RDS**:

  - Runs standard relational database engines like MySQL, PostgreSQL, Oracle, and SQL Server directly as managed services.
  - Offers flexibility by supporting multiple database engines.
  - Includes a straightforward approach to database management, suitable for traditional enterprise applications.

- **Aurora**:
  - AWS proprietary service, more cloud-native than RDS.
  - Offers performance up to 5 times faster than MySQL on RDS and 3 times faster than PostgreSQL on RDS.
  - Automatically handles scaling, replication, and hardware provisioning more seamlessly than RDS.
  <!-- pagebreak -->

#### Serverless Options

- **Aurora Serverless**:
  - Provides an on-demand, auto-scaling configuration where the database will automatically start up, shut down, and scale capacity based on the application's needs.
  - Ideal for applications with variable workloads, intermittent or cyclical usage patterns.
  <!-- pagebreak -->

#### Exam Tips

- Understand the management and scalability features of both RDS and Aurora.
- Remember that Aurora is more integrated and optimized for the cloud, offering higher performance and serverless options compared to RDS.
- Recognize that both platforms support disaster recovery but handle replication and failover differently.
<!-- pagebreak -->

#### RDS Solution Architecture Explained

1. Elastic Load Balancer (ELB)

   - Distributes incoming traffic among EC2 instances.

2. EC2 Instances

   - Can be part of an Auto Scaling Group (ASG).
   - Handles the application's read/write operations.

3. Amazon RDS (Relational Database Service)
   - Provides a managed SQL (relational) database service.
   - Receives and processes database queries from EC2 instances.

Connections:

- Traffic flows from the Elastic Load Balancer to multiple EC2 instances.
- EC2 instances connect to Amazon RDS for database read/write operations.

---
