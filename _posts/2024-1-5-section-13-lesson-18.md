---
layout: posts
title: 'Root User Privileges and Safe Practices'
section: Section-13
lesson: 18
---

### Understanding Root User Privileges

#### Overview of Root User Access

The root user of an AWS account refers to the primary account holder with complete access to all AWS services and resources. This account is established during the AWS account creation process and holds the highest level of permissions.

#### Key Guidelines for Root User Safety

- **Secure Access Keys**: It is crucial to secure the root user access keys and avoid using them for regular operations to minimize security risks.
- **Limit Use of Root Account**: Avoid using the root user for daily administrative tasks. Instead, use roles with necessary permissions for everyday activities.

#### Root-Only Actions

Certain actions within AWS can only be performed by the root user, making understanding these critical for effective account management. Key actions include (Note: the bold headings are most likely to be seen on the exam):

- **Account Settings Changes**:

  - Modify account settings such as the account name, email address, and the root user password.
  - Manage root user access keys.

- Financial and Legal Actions:

  - View certain tax invoices.

- **Close the AWS account.**

- IAM and Security Actions:

  - Restore IAM user permissions.
  - Configure an Amazon S3 bucket to enable MFA (Multi-Factor Authentication).
  - Edit or delete an Amazon S3 bucket policy that includes invalid VPC IDs or endpoint IDs.

  - **Change or cancel the AWS Support plan.**
  - **Register as a seller in the Reserved Instance Marketplace.**:

    - If you purchase 3 years of an EC2 instance, you can sell it early on a marketplace

  - Special Services Enrollment:
  - Sign up for AWS GovCloud.

#### Best Practices for Root User Management

- **MFA (Multi-Factor Authentication)**: Always enable MFA on the root account to enhance security.
- **Regular Monitoring**: Keep a close watch on the root account's activity, even if it's not used regularly, to detect any unauthorized access promptly.

#### Conclusion

Managing root user privileges responsibly is critical for maintaining the security and integrity of your AWS account. Limiting the use of the root account to only necessary actions and following best practices can help safeguard your AWS environment against potential threats.

---
