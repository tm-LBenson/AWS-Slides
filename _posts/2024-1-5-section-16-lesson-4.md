---
layout: posts
title: 'Service Control Policy Examples: Allowlists and Denylists'
section: Section-16
lesson: 4
---

### Exploring SCP Examples

Service Control Policies (SCPs) provide the ability to manage permissions across your AWS Organization. This lesson will illustrate practical examples of allowlist and denylist policies and explain their impact.

<!-- pagebreak -->

#### Allowlist SCP Example

An allowlist SCP explicitly permits certain actions while implicitly denying all others. Below is an example of an SCP that allows actions related to viewing and listing AWS S3 buckets but denies everything else:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket", "s3:GetBucketLocation"],
      "Resource": "*"
    }
  ]
}
```

**Explanation**:

- **Effect**: 'Allow' — Specifies that the actions listed are permitted.
- **Action**: Lists specific S3 actions that are allowed.
- **Resource**: '\*' — Applies to all S3 resources.

<!-- pagebreak -->

#### Denylist SCP Example

A denylist SCP explicitly prohibits certain actions, allowing all others by default. Here is an example SCP that prevents the termination of EC2 instances:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "ec2:TerminateInstances",
      "Resource": "*"
    }
  ]
}
```

**Explanation**:

- **Effect**: 'Deny' — Indicates that the specified actions are forbidden.
- **Action**: 'ec2:TerminateInstances' — Specifically denies the termination of EC2 instances.
- **Resource**: '\*' — Applies to all EC2 resources.

These examples show how SCPs can be crafted to provide precise access control within AWS Organizations, ensuring compliance and security across your cloud environment.

---
