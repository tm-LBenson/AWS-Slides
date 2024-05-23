---
layout: posts
title: 'EBS - Delete on Termination and Terminating an EC2 Instance'
section: Section-4
lesson: 2
order: 3
---

### EBS - Delete on Termination and Terminating an EC2 Instance

When you terminate an EC2 instance, the associated EBS volumes may or may not be deleted based on their "Delete on Termination" settings. This hands-on guide explores how to check and manage these settings before and after instance termination.

#### Verify "Delete on Termination" for Root EBS Volume

- **Check Settings**:
  - Navigate to the AWS Management Console.
  - Select "Instances" in the EC2 Dashboard.
  - Choose your instance, go to "Actions," then "Instance Settings," and select "View/Change Details" to verify the "Delete on Termination" setting for the root volume.

<!-- pagebreak -->

#### Terminate the EC2 Instance

- **Termination Process**:
  - Select your EC2 instance.
  - Click "Actions," then "Instance State," and select "Terminate."
  - Confirm your action to initiate termination.

<!-- pagebreak -->

#### Check the Status of Attached EBS Volumes

- After terminating the EC2 instance, go to the "Volumes" section in the EC2 Dashboard.
- If "Delete on Termination" was set to `true`, the root EBS volume should be removed along with the instance.
- However, any additional EBS volumes you created and attached earlier might not be deleted, depending on their "Delete on Termination" setting.
- This allows you to retain important data even after the instance is terminated.
<!-- pagebreak -->

#### Considerations for "Delete on Termination"

- If you want to keep data on attached EBS volumes after terminating an EC2 instance, ensure "Delete on Termination" is set to `false`.
- If you want to completely clean up after terminating an instance, set all EBS volumes to "Delete on Termination."

By following these steps, you can observe how terminating an EC2 instance affects the attached EBS volumes and understand the implications of the "Delete on Termination" setting.

---
