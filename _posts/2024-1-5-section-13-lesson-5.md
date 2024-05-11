---
layout: posts
title: 'Penetration Testing on AWS: Guidelines and Permissions'
section: Section-13
lesson: 5
---

### Penetration Testing on AWS

#### Overview

AWS allows customers to conduct security assessments or penetration tests on their AWS infrastructure without prior approval for certain services. This empowers users to ensure their deployments are robust against security threats, an essential aspect of maintaining AWS infrastructure.

<!-- pagebreak -->

#### Permitted Services for Penetration Testing

Here are the AWS services that you can test without needing AWS's prior approval:

- **Amazon EC2 instances, NAT Gateways, and Elastic Load Balancers**
- **Amazon RDS**
- **Amazon CloudFront**
- **Amazon Aurora**
- **Amazon API Gateways**
- **AWS Lambda and Lambda Edge functions**
- **Amazon Lightsail resources**
- **Amazon Elastic Beanstalk environments**

Understanding which services can be tested is vital for planning security assessments.

<!-- pagebreak -->

#### Prohibited Activities

While AWS permits penetration testing on the above services, certain activities are strictly prohibited to prevent disruptions or damage to AWS infrastructure. Remember, any activity resembling an attack on AWS infrastructure itself is not allowed:

- **DNS zone walking via Amazon Route 53 Hosted Zones**
- **Denial of Service (DoS), Distributed Denial of Service (DDoS), Simulated DoS, Simulated DDoS**
- **Port flooding**
- **Protocol flooding**
- **Request flooding (login request flooding, API request flooding)**

These restrictions are in place to maintain the integrity and availability of AWS services for all customers.

<!-- pagebreak -->

#### Key Points for the AWS Exam

- Be aware that AWS customers do not need prior approval to perform penetration tests on the listed services. However, adherence to AWS's testing policies and guidelines is crucial to avoid service disruptions or AWS terms of service violations.
- Recognize the prohibited activities to ensure compliance during security assessments.

---
