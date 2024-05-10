---
layout: posts
title: 'Summary: Key Components of AWS VPC'
section: Section-12
lesson: 11
---

### Summary of AWS VPC Concepts

#### Virtual Private Cloud (VPC)

- **Overview**: VPC allows you to provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.

<!-- pagebreak -->

#### Subnets and Gateways

- **Subnets**: Network partitions tied to a specific Availability Zone within a VPC.
- **Internet Gateways**: Attach to VPCs to enable communication between resources within your VPC and the internet.
- **NAT Devices**: NAT Gateways and NAT Instances allow instances in a private subnet to connect to the internet or other AWS services, but prevent the internet from initiating connections with the instances.

<!-- pagebreak -->

#### Network Security

- **Network ACLs (NACLs)**: Stateless, at the subnet level, they control both inbound and outbound traffic at the subnet level.
- **Security Groups**: Stateful, operate at the instance level or the Elastic Network Interface (ENI), controlling inbound and outbound traffic at the instance level.

<!-- pagebreak -->

#### Connectivity

- **VPC Peering**: Connects two VPCs so that you can route traffic between them using private IP addresses, without requiring internet gateways, NAT devices, VPN connections, or separate physical hardware.
- **VPC Endpoints**: Allow private connections between your VPC and supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.
- **PrivateLink**: Provides private connectivity to services across VPCs, ensuring your traffic is not exposed to the public internet.

<!-- pagebreak -->

#### Advanced Networking

- **VPC Flow Logs**: Capture information about the IP traffic going to and from network interfaces in your VPC.
- **Site to Site VPN and Client VPN**: Connect your on-premises network or client to AWS over a secure VPN connection.
- **AWS Direct Connect**: Establish a dedicated network connection from your premises to AWS.
- **AWS Transit Gateway**: Simplifies networking by connecting VPCs and on-premises networks through a central hub.

---
