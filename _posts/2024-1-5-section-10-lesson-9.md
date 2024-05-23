---
layout: posts
title: 'Global Applications Architecture'
section: Section-10
lesson: 9
---

### Global Applications Architecture

#### Introduction to Global Application Architectures

When deploying applications globally, architects must consider various architectures to ensure optimal performance, availability, and disaster recovery. AWS provides the infrastructure to support complex global architectures such as multi-region setups. Here’s what you need to understand for the exam regarding these architectures.

<!-- pagebreak -->

#### Multi-Region Architectures

- **Multi-Region**: Deploying your application across multiple AWS Regions can greatly enhance disaster recovery and data locality. By having your application available in more than one region, you can provide a failover solution and reduce latency by serving users from the nearest region.

<!-- pagebreak -->

#### Active-Passive and Active-Active Architectures

- **Active-Passive**:

  - In an active-passive setup, one region handles all the read and write operations (active), while another region is on standby (passive).
  - The passive region serves as a backup and will only become active if the primary region fails. This setup is important for disaster recovery.
  - Users can typically only read from the passive region but cannot write. This configuration reduces read latency for users closer to the passive region.

- **Active-Active**:
  - In an active-active configuration, all regions are active and can handle both read and write operations. This setup provides the highest level of availability and fault tolerance.
  - Users anywhere in the world can interact with the nearest region, reducing latency for both read and write operations.
  - This architecture requires careful synchronization and data replication strategies to ensure consistency across regions.

<!-- pagebreak -->

#### Considerations for Global Architectures

When planning a global architecture, consider the following:

- **Data Replication**: Ensure that data is replicated across regions to support failover in an active-passive setup or to maintain data consistency in an active-active setup.
- **Latency Optimization**: Design your architecture to minimize latency by placing resources close to your users.
- **Cost Implications**: Be aware of the costs associated with data transfer and replication across regions.

Understanding these architectures and their implications is critical for designing solutions that are not only resilient but also efficient and cost-effective. Remembering the terms "active-passive" and "active-active" for the exam will help you navigate questions related to global application deployment strategies.

---
