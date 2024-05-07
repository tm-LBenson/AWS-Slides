---
layout: posts
title: 'Hands-On: IAM - Creating Users and Managing Permissions'
section: Section-1-IAM
lesson: 2
order: 1
---

### Hands-On: IAM - User and Group Management

#### Create Users

In this exercise, you'll learn how to create a new IAM user, an essential task for managing access within your AWS environment. This user will later be added to a group with specific permissions.

- **Step 1**: Navigate to the IAM dashboard in the AWS Management Console.
- **Step 2**: Click on "Users" and then "Add user".
- **Step 3**: Enter a username and select both 'Programmatic access' and 'AWS Management Console access'.
- **Step 4**: Set a custom password or auto-generate one, and decide whether the user must change the password on the next login.

<!-- pagebreak -->

#### Create and Manage Groups

Creating groups helps manage permissions efficiently by grouping users that need similar access into a single entity.

- **Step 1**: In the IAM dashboard, click on "User groups" and then "Create group".
- **Step 2**: Name the group 'Admin' and attach the 'AdministratorAccess' policy. This policy grants all permissions within the AWS account, so use it cautiously.
- **Step 3**: Finish creating the group and return to the "Users" page.
- **Step 4**: Select the newly created user, add them to the 'Admin' group, and review the permissions to confirm they have the expected access.

<!-- pagebreak -->

#### Manage User Sign-In and Permissions

After creating the user and assigning them to a group, it's important to ensure they can sign in and have the correct permissions.

- **Step 1**: Sign out of your current AWS session.
- **Step 2**: Sign in as the new user using the IAM user sign-in link (found at the top of the IAM dashboard).
- **Step 3**: Test access to various AWS services to confirm that the permissions are correctly applied.
- **Step 4**: Return to the IAM dashboard to adjust permissions if necessary or explore more detailed settings for user access.

This hands-on session demonstrates how to effectively manage users and groups within AWS IAM, providing a foundational understanding of access management and security practices in AWS.

---
