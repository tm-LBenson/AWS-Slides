---
layout: posts
title: 'Understanding Service Control Policies in AWS Organizations'
section: Section-16
lesson: 3
---

### Service Control Policies (SCPs) in AWS Organizations

Service Control Policies (SCPs) provide a powerful mechanism to centrally manage permissions across multiple AWS accounts within an AWS Organization.

<!-- pagebreak -->

#### Overview of SCPs

- **Function**: SCPs allow you to allowlist or denylist IAM actions across your organization's accounts.
- **Scope**: SCPs can be applied at the organizational unit (OU) or account level, but they do not affect the management account.
- **Influence**: SCPs affect all users and roles in an account, including the root user, but they do not apply to service-linked roles.

<!-- pagebreak -->

#### Key Features

- **Restriction on Service-Linked Roles**: Service-linked roles, which facilitate seamless service integration, are not impacted by SCPs. This ensures that essential services continue to function even under strict policies.
- **Default Deny**: SCPs follow a "default deny" stance. They must contain explicit 'Allow' statements to enable actions; otherwise, they prevent all actions.

<!-- pagebreak -->

#### Practical Use Cases

- **Restricting Services**: Utilize SCPs to prevent the use of specific AWS services, such as Amazon EMR, enhancing security and compliance by limiting the services available to users.
- **Compliance Enforcement**: SCPs can enforce compliance with standards such as PCI DSS by explicitly disabling non-compliant AWS services.

Understanding and implementing SCPs within AWS Organizations is important for maintaining governance and operational control over your AWS resources across different accounts.

---
