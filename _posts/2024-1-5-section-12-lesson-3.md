---
layout: posts
title: 'VPC and Subnets Explained'
section: Section-12
lesson: 3
---

### VPC and Subnets: Fundamentals of AWS Networking

Understanding the structure and function of Amazon VPC (Virtual Private Cloud) and subnets is essential for deploying secure and efficient network architectures in AWS. This lesson covers the basics of VPCs and subnets, including their roles in connectivity and security.

<!-- pagebreak -->

#### What is a VPC?

- **Virtual Private Cloud (VPC)**: A private network dedicated to your AWS account in a specific region. It allows you to launch AWS resources into a network that you define.
- **Regional Resource**: A VPC spans all the Availability Zones in the region.

<!-- pagebreak -->

#### Subnets in VPC

- **Subnets**: Subdivisions of a VPC that allow you to partition the network within the VPC across different Availability Zones for better resource allocation and isolation.
- **Public Subnets**: These are subnets with a route to an Internet Gateway, making them accessible from the internet.
- **Private Subnets**: Subnets that do not have a direct route to the Internet Gateway and are not accessible from the internet.

<!-- pagebreak -->

#### Connectivity and Security

- **Internet Gateways**: This VPC component allows resources within your public subnets to connect to the internet and vice versa.
- **NAT Devices**:
  - **NAT Gateways**: Managed by AWS, these allow instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating a connection with those instances.
  - **NAT Instances**: Self-managed NAT service that functions similarly to NAT Gateways but requires manual setup and management.

<!-- pagebreak -->

#### Route Tables

- **Route Tables**: Define rules, known as routes, that determine where network traffic from your subnets or the VPC is directed.
- **Routing for Public Subnets**: Includes a default route to the Internet Gateway.
- **Routing for Private Subnets**: Typically includes routes to local network resources and may include routes to a NAT Gateway for internet access without direct exposure.

<!-- pagebreak -->

#### Conclusion

VPCs and subnets are foundational components in AWS that provide the network infrastructure for deploying and managing cloud resources securely and efficiently. Proper understanding and management of these components ensure optimal performance and security of your AWS environment.

---
