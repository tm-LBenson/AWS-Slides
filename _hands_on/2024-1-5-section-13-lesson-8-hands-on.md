---
layout: posts
title: 'Hands-On: Exploring AWS Key Management Service'
section: Section-13
lesson: 8
order: 1
---

### Hands-On: AWS Key Management Service (KMS)

#### Exploring KMS Dashboard

Navigate to the AWS Key Management Service (KMS) within your AWS Management Console to familiarize yourself with its features and options.

1. **Sidebar Options**:
   - Browse through the different options in the sidebar to understand the layout and functionalities available within AWS KMS.

#### Viewing AWS Managed Keys

2. **AWS Managed Keys**:
   - Click on 'AWS Managed Keys' to view the keys that AWS manages on your behalf. These keys are typically prefixed with `aws/` indicating their managed nature.

#### Creating a Customer Managed Key

3. **Creating a Customer Managed Key**:
   - Note: Creating a customer managed key may incur costs, so proceed if you are familiar with the pricing.
   - If you choose to create a key, navigate to 'Customer Managed Keys' and click on 'Create key'. Follow the prompts to configure your key.

#### Integrating KMS with Other AWS Services

4. **Using KMS with EBS Volumes**:
   - Navigate to EC2 > EBS > Volumes.
   - Click on 'Create Volume'.
   - Look for the 'Encryption' toggle and enable it to view encryption options.
   - Observe how both AWS-managed and customer-managed keys appear in the dropdown menu. The default encryption key is typically an AWS-managed key, but any customer-managed keys you've created will also appear here.

#### Review and Reflection

- Spend some time exploring how KMS integrates with other AWS services and reflect on how encryption keys can enhance the security of your cloud resources.

---
