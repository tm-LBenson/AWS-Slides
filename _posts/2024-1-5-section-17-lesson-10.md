---
layout: posts
title: 'Understanding Disaster Recovery Strategies on AWS'
section: Section-17
lesson: 10
---

### Overview of Disaster Recovery Strategies

AWS offers several disaster recovery (DR) strategies that balance cost, complexity, and downtime. These strategies ensure business continuity by protecting critical systems and data.

#### Strategies Explained

- **Backup and Restore**: This is the most cost-effective DR strategy. Data is regularly backed up and stored securely, allowing restoration when needed. Suitable for non-critical workloads where recovery time objectives (RTO) and recovery point objectives (RPO) are flexible.

- **Pilot Light**: A minimal version of an environment is always running in the cloud. This strategy involves mimicking the critical core elements of your system, ready to scale up quickly in case of a disaster.

- **Warm Standby**: A scaled-down but fully functional version of your infrastructure runs continuously in the cloud. It offers faster recovery than Pilot Light as it involves a quick scale-up to handle production loads.

- **Multi-Site / Hot-Site**: The most robust and expensive option, involving running a full-scale duplicate of your production environment in another region or availability zone. This strategy provides the quickest failover and is suitable for mission-critical applications.

<!-- pagebreak -->

#### Key Considerations

- **Cost vs. Downtime**: Understanding the trade-off between operational cost and downtime is critical. Backup and Restore is the least expensive but offers the longest recovery times, while Multi-Site strategies are costly but provide the fastest recovery.

- **Business Requirements**: Aligning the chosen disaster recovery strategy with business continuity requirements ensures that critical systems can withstand disruptions without significant impacts.

For the exam, focus on understanding the cost implications of each strategy to determine the most appropriate solution for given scenarios.

---
