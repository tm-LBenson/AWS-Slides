---
title: 'Networking Costs in AWS'
section: Section-15
lesson: 17
---

### Networking Costs in AWS

Understanding AWS networking costs can help optimize how you deploy and manage your AWS resources. Here's a simplified explanation of these costs:

<!-- pagebreak -->

#### Traffic Costs

- **Inbound Traffic**: Free for traffic incoming to an EC2 instance.
- **Same-Availability Zone (AZ) Traffic**: Free for communication between EC2 instances within the same AZ.

<!-- pagebreak -->

#### Cross-Availability Zone Traffic

- **Using Private IP**: $0.01 per GB - recommended for cost savings and improved network performance.
- **Using Public/Elastic IP**: $0.02 per GB.

<!-- pagebreak -->

#### Inter-Region Traffic

- **Using Any IP**: $0.02 per GB when traffic crosses regions.

#### Cost-Saving Tips

- **Use Private IPs**: Opt for private IPs for intra-region communication to save costs and enhance performance.
- **Keep Resources in the Same AZ**: For maximum savings, deploy resources within the same AZ unless high availability across multiple AZs is required.

---
