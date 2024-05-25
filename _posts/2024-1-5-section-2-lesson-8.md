---
layout: posts
title: 'S3 Storage Classes Overview'
section: Section-2
lesson: 8
---

### S3 Storage Classes Overview

Amazon S3 offers a range of storage classes designed for different use cases ranging from frequently accessed data to long-term archiving. Understanding the features, durability, availability, and cost implications of each storage class can help you optimize your storage strategy based on your specific needs.

<!-- pagebreak -->

#### S3 Durability and Availability

- **Durability**: S3 provides high durability (99.999999999%, or 11 9's) for objects across multiple Availability Zones (AZs). This means that if you store 10 million objects with Amazon S3, you can expect to potentially lose a single object once every 10,000 years.
- **Availability**: Availability varies by storage class and measures how readily available the service is. For example, S3 Standard offers 99.99% availability, which translates to potential downtime of about 53 minutes per year.
<!-- pagebreak -->

#### S3 Standard — General Purpose

- **Availability**: 99.99%
- **Features**: Offers low latency and high throughput performance. It is designed to sustain the loss of 2 concurrent facilities without data loss.
- **Use Cases**: Ideal for frequently accessed data such as Big Data analytics, mobile and gaming applications, and content distribution.
<!-- pagebreak -->

#### S3 Infrequent Access (IA) Storage Classes

- **Lower Cost**: Cheaper than S3 Standard due to the expectation of less frequent access.
- **S3 Standard-IA**:
  - **Availability**: 99.9%
  - **Use Cases**: Suitable for data like disaster recovery files and backup where rapid access is required occasionally.
- **S3 One Zone-IA**:
  - **Durability**: High, but only within a single AZ. Data is lost if the AZ is destroyed.
  - **Availability**: 99.5%
  - **Use Cases**: Best for storing secondary backup copies of on-premise data or data that can be recreated.
  <!-- pagebreak -->

#### Amazon S3 Glacier Storage Classes

- **Designed for Archiving**: Offers the lowest-cost storage in AWS and is intended for archiving and long-term backup.
- **S3 Glacier Instant Retrieval**:
  - **Retrieval Time**: Milliseconds.
  - **Use Cases**: Great for data accessed infrequently but requires immediate access when needed, such as quarterly financial reports.
- **S3 Glacier Flexible Retrieval (formerly Glacier)**:
  - **Retrieval Options**: Expedited (1 to 5 minutes), Standard (3 to 5 hours), and Bulk (5 to 12 hours).
- **S3 Glacier Deep Archive**:
  - **Retrieval Times**: Standard (12 hours) and Bulk (48 hours).
  - **Use Cases**: Suitable for data that may be accessed less frequently than once a year, such as regulatory archives.
  <!-- pagebreak -->

#### S3 Intelligent-Tiering

- **Cost-Effectiveness**: Small monthly monitoring and auto-tiering fee, but no retrieval charges.
- **Automatic Tiering**: Moves objects between access tiers based on changing access patterns without performance impact.
- **Access Tiers**:
  - **Frequent Access Tier**: For data accessed regularly.
  - **Infrequent Access Tier**: For data not accessed for 30 consecutive days.
  - **Archive Instant Access Tier**: For objects not accessed for 90 days.
  - **Archive Access and Deep Archive Access Tiers**: For long-term storage, configurable from 90 days to over 700 days.

---
