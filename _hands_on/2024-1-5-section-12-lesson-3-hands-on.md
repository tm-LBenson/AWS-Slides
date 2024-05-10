---
layout: posts
title: 'Hands-On: Understanding CIDR Notation'
section: Section-12
lesson: 3
order: 1
---

### Exploring CIDR Notation

While CIDR notation might not be directly examined in depth for the AWS Cloud Practitioner exam, understanding it can significantly aid in comprehending how subnets are structured within AWS VPCs. This hands-on exercise involves using an external tool to explore Classless Inter-Domain Routing (CIDR) notation and its implications on network design.

<!-- pagebreak -->

#### Introduction to CIDR

CIDR is a method for allocating IP addresses and routing IP packets. It is used to create unique identifiers for networks and individual devices within subnets, which are crucial when configuring VPCs in AWS.

<!-- pagebreak -->

#### Using cidr.xyz to Understand Subnets

- **Navigate to [cidr.xyz](http://cidr.xyz) in your web browser. This tool provides a visual representation of the network range defined by a CIDR block.**

<!-- pagebreak -->

#### Exploring CIDR Values

- **Netmask**: This defines the division between the network portion and the host portion of an IP address.
- **CIDR Base IP**: The starting IP address of the CIDR block.
- **Broadcast IP**: The last IP address within the CIDR block, used for broadcasting messages to all hosts within the network.
- **Count**: The total number of IP addresses within the CIDR block.
- **First Usable IP**: The first IP address in the CIDR block that can be assigned to a device.
- **Last Usable IP**: The last IP address in the CIDR block that can be assigned to a device.

<!-- pagebreak -->

#### Practical Application

- **Experiment with Different CIDR Blocks**: Change the CIDR block input (e.g., from `/24` to `/16`) and observe how the network size and the range of usable IP addresses change. Understanding these dynamics is essential for effectively planning and deploying networks in AWS.

- Visit [Tidal Cloud](https://tidalcloud.com/subnet-builder/) to see a visual way of interacting with subnets.
<!-- pagebreak -->

#### Conclusion

This exercise provides a basic understanding of how IP addressing and subnetting work in a network, which is foundational knowledge for any networking or cloud computing professional. While the AWS exam may not delve deeply into CIDR notation, this understanding will aid in better network planning within your AWS VPCs.

---
