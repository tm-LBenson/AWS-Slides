---
layout: posts
title: 'Hands-On: Exploring Security Groups and Network ACLs'
section: Section-13
lesson: 4
order: 1
---

### Exploring Security Groups and Network ACLs in AWS

In this hands-on activity, you'll learn how to navigate and understand the functionalities of Security Groups and Network ACLs (NACLs) within your AWS Virtual Private Cloud (VPC). These are important components for managing and securing your network traffic.

<!-- pagebreak -->

#### Examining Security Groups

- **Navigate to Security Groups**: Go to the VPC dashboard, and from the navigation pane on the left, select 'Security Groups'. You'll see the list of security groups associated with your account.
- **Security Group Details**:
  - Select a security group from the list to view its details.
  - Explore the 'Inbound rules' and 'Outbound rules' tabs to see how traffic is managed. These rules define what traffic is allowed to and from the associated EC2 instances.

<!-- pagebreak -->

#### Working with Network ACLs

- **Access Network ACLs**: From the VPC dashboard, select 'Network ACLs' from the navigation pane. You will see the list of NACLs configured in your VPC.
- **ACL Details**:
  - Click on a listed ACL to view its details.
  - Examine the 'Inbound Rules' and 'Outbound Rules'. These rules specify the allowed and denied traffic by rule number, type, protocol, port range, and source/destination.

<!-- pagebreak -->

#### Editing ACL Rules

- **Modify ACL Rules**: With the ACL of your choice selected, click on the 'Edit inbound rules' or 'Edit outbound rules' button.
  - Observe the options for adding new rules. Each rule must specify the rule number, type (allow or deny), protocol, port range, and source or destination CIDR block.
  - Note: Making changes here can affect the accessibility and security of your resources. For this exercise, you may review the settings without saving changes.

<!-- pagebreak -->

---
