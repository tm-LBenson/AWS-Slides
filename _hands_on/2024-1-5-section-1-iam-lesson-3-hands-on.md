---
layout: posts
title: 'Hands-On: IAM - Custom Policies and Security Settings'
section: Section-1-IAM
lesson: 3
order: 1
---

### Hands-On: IAM - Policies and Security

#### Creating Custom Policies

In this exercise, you will learn how to create custom IAM policies using the IAM visual editor. Custom policies allow you to define precise access rules tailored to your security needs.

- **Step 1**: Navigate to the IAM dashboard in the AWS Management Console.
- **Step 2**: Select "Policies" from the navigation pane and click "Create policy".
- **Step 3**: In the visual editor, select "Choose a service" and pick "IAM".
- **Step 4**: Under actions, filter to 'List' and select 'ListUsers', then filter to 'Read' and select 'GetUser'.
- **Step 5**: Set the resource to "All resources" for simplicity, or specify more granular permissions as needed.
- **Step 6**: Review the policy JSON to understand the structure and effect of your policy. Name your policy and describe its purpose clearly.
- **Step 7**: Create the policy and attach it to a user or group to enforce the new permissions.

<!-- pagebreak -->

#### Setting Up Password Policy and MFA

Enhancing security with a strong password policy and multi-factor authentication (MFA) is critical for protecting your AWS resources.

- **Step 1**: Return to the IAM dashboard and select "Account settings".
- **Step 2**: Under "Password policy", click "Edit". Configure settings such as minimum password length, requirement for specific character types, and password expiration.
- **Step 3**: Enable MFA for an IAM user by selecting the user, navigating to the "Security credentials" tab, and clicking on the "Assign MFA device" button.
- **Step 4**: Follow the prompts to set up a virtual MFA device using apps like Google Authenticator or Authy. Scan the QR code provided and enter two consecutive MFA codes to activate MFA.
- **Step 5**: Test the MFA setup by signing out and signing back in as the user, ensuring that the MFA prompt appears and functions as expected.

This hands-on guide not only helps you implement custom access controls through policies but also enhances your IAM user security through strong password enforcement and multi-factor authentication, providing a robust security foundation for your AWS environment.

---
