---
layout: posts
title: 'Hands-On: SSH into EC2 and View IAM Users'
section: Section-3
lesson: 2
order: 2
---

### Open SSH to EC2 Instance and View IAM Users

This hands-on lesson guides you through the process of connecting to an EC2 instance via SSH and managing IAM roles to view IAM users, demonstrating the importance of role-based access.

#### Open a Terminal in the Same Directory as Your `.pem` Key

- **Prepare**: Open your terminal and navigate to the directory where your `.pem` key is stored.

<!-- pagebreak -->

#### Connect to Your EC2 Instance with SSH

- **Command**:

  ```bash
  ssh -i /path/to/your-key.pem ec2-user@your-instance-public-ip
  ```

- **Details**: Replace `/path/to/your-key.pem` with the actual path to your `.pem` key and `your-instance-public-ip` with the public IP address of your EC2 instance.

<!-- pagebreak -->

#### Try to View IAM Users

- **Attempt**:

  ```bash
  aws iam list-users
  ```

- **Expected Outcome**: This command will likely fail, indicating an error due to insufficient permissions, as the EC2 instance is not yet assigned a role with the necessary IAM permissions.

<!-- pagebreak -->

#### Add the Required Role to the EC2 Instance

- **Management Console Navigation**: Access the AWS Management Console, go to the EC2 Dashboard, and select your instance.
- **Role Assignment**: Click on the "Actions" dropdown, select "Instance Settings," and then "Attach/Replace IAM Role."
- **Role Selection**: Choose a role that has the necessary permissions (such as `iam:ListUsers`) and apply it by clicking "Update IAM Role."

<!-- pagebreak -->

#### Re-run the Command

- **Verification**:

  ```bash
  aws iam list-users
  ```

- **Success**: If the role was properly assigned, the command should now succeed, displaying a list of IAM users.

<!-- pagebreak -->

#### Remove the Role and Try Again

- **Role Removal**: Remove the assigned role from your EC2 instance using the same steps as for adding it.
- **Final Check**:

  ```bash
  aws iam list-users
  ```

- After removing the role, try running the command again. It should fail, demonstrating that the EC2 instance’s access to IAM information is controlled by the assigned IAM role.
