---
layout: posts
title: 'Understanding IP Addresses in AWS'
section: Section-13
lesson: 2
---

### IP Addressing in AWS

This lesson demystifies the types and usage of IP addresses within the AWS ecosystem. Understanding how IP addresses are allocated and managed in AWS is fundamental for configuring network settings and ensuring proper access and security for AWS resources.

<!-- pagebreak -->

#### Types of IP Addresses

- **IPv4 - Internet Protocol version 4**: The most widely used IP version, offering approximately 4.3 billion addresses globally. It is important for networking within AWS and the internet at large.

- **Public IPv4**: These IP addresses can be accessed over the internet. EC2 instances receive a new public IP address every time they are stopped and restarted.
- **Private IPv4**: These addresses are used within a private network (e.g., within a VPC). They are not accessible from the internet, providing a secure environment for internal AWS services. Importantly, private IPv4 addresses remain constant even if an EC2 instance is stopped and restarted.

<!-- pagebreak -->

#### Elastic IP Addresses

- **Elastic IP (EIP)**: A static public IPv4 address that you can allocate and attach to an EC2 instance or a Network Interface. This allows you to maintain a fixed IP address for your applications, even if the underlying instance changes.

- **Cost Implications**: Public IPv4 addresses, including Elastic IPs, incur a charge of $0.005 per hour if they are not associated with a running instance to encourage efficient usage.

<!-- pagebreak -->

#### IPv6 Addresses

- **IPv6 - Internet Protocol version 6**: Provides a significantly larger pool of IP addresses (3.4 x 10^38, or 340 undecillion addresses) to accommodate the growing number of internet-connected devices. AWS encourages the adoption of IPv6 due to its vast address space and improved routing and autoconfiguration capabilities.

- **Public Accessibility**: All IPv6 addresses in AWS are public, reflecting the protocol's design to eliminate the need for private address ranges and NAT as used in IPv4.

<!-- pagebreak -->

#### Practical Tips

- **Free Tier Usage**: AWS offers 750 hours of usage per month for IPv4 addresses under its Free Tier, helping new users manage costs as they explore AWS services.

- **Choosing IP Versions**: Depending on your application requirements and future scalability needs, consider opting for IPv6 to leverage its benefits and prepare for broader adoption.

<!-- pagebreak -->

#### Conclusion

Understanding IP addressing in AWS is important for effectively managing network configurations and ensuring the accessibility and security of your applications. Whether you are deploying a simple web application or a complex multi-tier architecture, proper IP address management plays a critical role in the success of your deployments.

---
