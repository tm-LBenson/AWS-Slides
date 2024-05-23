---
layout: posts
title: 'Hands-On: Exploring IPv4 and Subnets in AWS'
section: Section-13
lesson: 3
order: 2
---

### Deep Dive into IPv4 and Subnetting in AWS

This hands-on exercise will guide you through understanding how IPv4 addresses and subnets are configured and used in an AWS Virtual Private Cloud (VPC). We will explore the IP ranges and subnet divisions using AWS VPC settings and the external tool cidr.xyz.

<!-- pagebreak -->

#### Explore Your VPC Configuration

- **Navigate to the VPC Dashboard**: Go to your AWS Management Console, and under the Networking & Content Delivery section, click on VPC to open your VPC dashboard.
- **View VPC Settings**: Select your VPC and note down the IPv4 CIDR block. You can enter this CIDR block at [cidr.xyz](http://cidr.xyz) to visualize the range of IP addresses.

<!-- pagebreak -->

#### Examining Subnets

- **Access Subnets**: From the VPC dashboard, click on 'Subnets' on the left panel to view the subnets within your VPC.
- **Analyze Subnet CIDR**: For each subnet, note the IPv4 CIDR block. Enter these CIDR blocks into cidr.xyz to see the specific IP range and total IP count of 4096 per subnet. Pay attention to the first and last IP addresses in each subnet to understand how they sequence.

<!-- pagebreak -->

#### EC2 and Subnet Interaction

- **Launch an EC2 Instance**: Briefly go through the steps to launch an EC2 instance in one of the subnets. Observe how the instance's IP address fits within the subnet's IP range and note the instance's availability zone suffix.

<!-- pagebreak -->

#### Internet and NAT Gateways

- **Internet Gateway**: Check the Internet Gateway attached to your VPC. Navigate to its details to confirm it's connected to a route table that enables internet access for your subnets.
- **Explore NAT Gateways**: Go to the NAT Gateway section. While you won't create one, it's useful to know where and how to set up a NAT Gateway to allow private subnets to access the internet securely.

<!-- pagebreak -->

#### Conclusion

This hands-on session provides practical insights into how IPv4 addressing and subnetting function within an AWS VPC. Understanding these elements is crucial for effectively managing network configurations in the cloud.

---
