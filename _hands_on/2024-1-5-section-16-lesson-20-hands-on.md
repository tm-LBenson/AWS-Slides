---
title: 'Hands-On: AWS Pricing Calculator'
section: Section-16
lesson: 20
order: 1
---

### AWS Pricing Calculator

Learn how to estimate costs for AWS services using the AWS Pricing Calculator.

<!-- pagebreak -->

#### Setting Up Your Estimate

- Go to [AWS Pricing Calculator](https://calculator.aws/)
- Click **Create Estimate**.
- Search for **EC2** and use the **Quick Estimate**.
- Review the current configuration, scroll down to utilization, and change it to **80%** per month.
- Choose **EC2 instance Savings Plans** for 1 year with no upfront payments.
- Adjust **EBS storage** to **200GB**.
- Review the final estimate provided.

<!-- pagebreak -->

#### Adding Another Service

- Click **Add service**.
- Type **Load Balancer** in the search and select **Elastic Load Balancing** > **configure**.
- Choose **Application Load Balancer** in the same region.
- Change **EC2 instances processed bytes** to **5GB** and **connections per second** to **5**.
- Add it to your estimate and review the total 12-month cost.

---
