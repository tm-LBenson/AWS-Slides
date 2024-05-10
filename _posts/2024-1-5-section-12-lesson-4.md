---
layout: posts
title: 'Network ACLs & Security Groups in AWS'
section: Section-12
lesson: 4
---

### Understanding Network ACLs and Security Groups

AWS provides two primary methods to manage network traffic at different layers of the VPC: Network Access Control Lists (NACLs) and Security Groups. Both serve as firewalls but operate at different levels and with different capabilities.

<!-- pagebreak -->

#### Network ACL (NACL)

- **Role and Function**: NACLs act as a firewall at the subnet level, controlling both inbound and outbound traffic.
- **Rules and Capabilities**:
  - **ALLOW and DENY Rules**: NACLs allow you to create rules that explicitly allow or deny traffic, providing a layer of security that can block unwanted traffic before it reaches EC2 instances.
  - **Stateless Operations**: NACLs do not track the state of network connections. Each packet is evaluated independently, which means inbound and outbound rules are applied separately.
  - **Rule Evaluation**: Rules are processed in numerical order, with the lowest number rule being processed first. Once a rule applies, no further rules are evaluated.

<!-- pagebreak -->

#### Security Groups

- **Role and Function**: Security groups act as a firewall for associated Amazon EC2 instances, controlling both inbound and outbound traffic at the instance level.
- **Rules and Capabilities**:
  - **Allow-Only Rules**: Unlike NACLs, security groups can only have allow rules. They cannot explicitly deny traffic; any traffic that does not match an allow rule is automatically denied.
  - **Stateful Operations**: Security groups are stateful, meaning that if incoming traffic is allowed, the response traffic is automatically allowed, regardless of outbound rules.
  - **Connection Tracking**: Security groups track the state of network connections, allowing or denying future packets based on the connection state.

<!-- pagebreak -->

#### Differences and Use Cases

- **NACL vs. Security Groups**: NACLs provide a broad layer of security at the subnet level, useful for controlling access to multiple instances within the same subnet. Security groups provide more granular control at the instance level.
- **Combining Both**: For robust security, it's common to use both NACLs and security groups. NACLs serve as a first line of defense, blocking undesirable traffic at the subnet level. Security groups then provide finer-grained control over the traffic allowed to reach individual instances.

Understanding the functionalities and differences between NACLs and security groups is crucial for designing secure, highly available network architectures in AWS.

<!-- pagebreak -->

| **Security Group**                                                            | **Network ACL**                                                  |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Operates at the instance level                                                | Operates at the subnet level                                     |
| Supports allow rules only                                                     | Supports allow rules and deny rules                              |
| Is stateful: Return traffic is automatically allowed, regardless of any rules | Is stateless: Return traffic must be explicitly allowed by rules |

---
