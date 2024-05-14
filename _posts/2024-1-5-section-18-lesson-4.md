---
layout: posts
title: 'Reliability - AWS Well-Architected Framework'
section: Section-18
lesson: 4
---

### Reliability

Reliability in the AWS Well-Architected Framework refers to the ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues.

<!-- pagebreak -->

#### Design Principles

- **Test recovery procedures**: Employ automation to simulate different failures or recreate scenarios that led to failures previously, ensuring your systems can recover smoothly.
- **Automatically recover from failure**: Design systems that can anticipate and remediate failures automatically before they impact customers.
- **Scale horizontally to increase aggregate system availability**: Distribute operations across multiple, smaller resources to prevent a single point of failure.
- **Stop guessing capacity**: Utilize Auto Scaling to ensure you have the right amount of resources to handle the demand without over or under provisioning.
- **Manage change in automation**: Implement infrastructure changes through automation to minimize risks and ensure consistency.

<!-- pagebreak -->

These principles guide you in building robust systems that can withstand failures and adapt to evolving conditions without human intervention.

---
