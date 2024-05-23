---
layout: posts
title: 'Hands-On: Creating and Using an Amazon Machine Image (AMI)'
section: Section-3
lesson: 4
order: 1
---

### Hands-On: Creating and Using an Amazon Machine Image (AMI)

Creating a custom Amazon Machine Image (AMI) allows you to save the configuration of an EC2 instance for rapid deployment of similar setups. This hands-on guide will walk you through creating an AMI from an existing EC2 instance and launching a new instance from the custom AMI.

<!-- pagebreak -->

#### Creating a Custom AMI from an EC2 Instance

#### Prepare the EC2 Instance

- Ensure your EC2 instance is in a stable state and contains the desired operating system (Linux 2 is required), applications, and configurations.
- For advanced setup, you can include a startup script in the "user data" field during instance launch. This script runs when the EC2 instance starts up, automating specific tasks.
- Below is an example script to install and start Apache HTTP Server (Linux 2 version):

```sh
#!/bin/bash
# User data script
yum update -y  # Update system packages
yum install -y httpd  # Install Apache HTTP Server
systemctl start httpd  # Start Apache
systemctl enable httpd  # Enable Apache on boot
```

- You can input this script in the "Advanced Details" section during instance launch to set up Apache automatically.

<!-- pagebreak -->

#### Create the Custom AMI

- Go to the AWS Management Console and select "EC2."
- Navigate to "Instances," select the EC2 instance you want to use for creating the AMI, then click "Actions."
- Choose "Create Image" from the drop-down menu.
- Provide a name and description for the new AMI.
- You can opt to reboot the instance before creating the AMI for a clean snapshot. If you choose not to reboot, the AMI may contain unsaved changes.
- Click "Create Image" to start the AMI creation process.
- The new AMI will appear in the "Images" section under "Amazon Machine Images."

<!-- pagebreak -->

#### Monitor the AMI Creation

- Once the process begins, the new AMI will be in a "pending" status.
- It may take some time to complete, depending on the size and complexity of the instance.
- When the AMI is ready, its status will change to "available."

With this advanced setup, you can include a startup script to automate tasks when the EC2 instance launches, creating a more consistent and repeatable environment for your custom AMI.

---
