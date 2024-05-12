---
layout: posts
title: 'Hands-On: AWS Organization and SCPs'
section: Section-15
lesson: 4
order: 1
---

### Hands-On: AWS Organization and Service Control Policies

#### Setup AWS Organizations

- **Initial Setup**: Navigate to the AWS Organization service within the AWS Management Console and enable AWS Organizations if it isn't already.
- **Organization Units (OUs)**: Notice how your account is nested within a root organization unit. Each OU acts as a container where policies and permissions are defined.

<!-- pagebreak -->

#### Service Control Policies (SCPs)

- **Enable SCPs**: Click on 'Policies' on the left sidebar, then select 'Service control policies' and enable them. This is the only policy type you need to focus on for the exam.
- **Create a New SCP**: Click 'Create Policy'. Name it 'DenyAccessS3' to demonstrate how to prevent access to S3 for any attached accounts.
- **Policy Details**:
  - Choose S3 from the service list.
  - For the Sid, name it 'DenyS3'.
  - For the resource, use `["*"]` to apply the policy to all S3 resources.
- **Create the Policy**: Review and create the policy.

<!-- pagebreak -->

#### Attach Policy to AWS Account

- **Attach SCP**: Navigate to 'AWS accounts' and select the relevant account. In the 'Policies' tab, attach the newly created 'DenyAccessS3' policy to demonstrate how SCPs can restrict actions within member accounts.

---
