---
layout: posts
title: 'Hands-On: Creating an Auto Scaling Group'
section: Section-4-ASG
lesson: 3
order: 1
---

### Hands-On: Creating an Auto Scaling Group

Creating an Auto Scaling Group (ASG) in AWS ensures that your application scales automatically according to defined conditions, maintaining high availability and managing costs effectively. This hands-on guide will walk you through setting up an ASG with a launch template that deploys EC2 instances equipped with an HTTP server. Here are the detailed steps:

<!-- pagebreak -->

#### Step 1: Prepare Your Environment

- **Terminate Previous Instances**: Ensure that all previous EC2 instances are terminated to avoid interference with the new ASG setup.

<!-- pagebreak -->

#### Step 2: Create a New Auto Scaling Group

- **Access Auto Scaling Groups**: In the AWS Management Console, navigate to the EC2 dashboard and select "Auto Scaling Groups" from the left panel.
- **Start New Group**: Click on "Create Auto Scaling Group."

<!-- pagebreak -->

#### Step 3: Configure Launch Template

- **Name Your ASG**: Give your Auto Scaling Group a name like "DemoASG".
- **Create Launch Template**: Click on "Create new launch template".

  - **Name and Description**: Provide a name like "MyTemplate" and a description such as "test server app".
  - **Quick Start**: Click on "Quick Start" and select a default Linux 2 AMI (Free tier).
  - **Instance Type**: Select "t2.micro" for the instance type (Free tier).
  - **Security Group**: Use an existing security group, selecting the wizard group used in previous setups.
  - **User Data**: Expand "Advanced details" and scroll to the user data section. Paste the following script:

    ```bash
    #!/bin/bash
    # User data script
    yum update -y  # Update system packages
    yum install -y httpd  # Install Apache HTTP Server
    systemctl start httpd  # Start Apache
    systemctl enable httpd  # Enable Apache on boot
    echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
    ```

- **Save and Select Template**: After creating the launch template, select it from the list in the ASG interface.

<!-- pagebreak -->

#### Step 4: Configure Auto Scaling Group Settings

- **Availability Zones**: Check all three availability zones from the subnets options.
- **Load Balancer**: Choose "Attach Existing Load Balancer" and select the previously made target group.
- **Health Checks**: Turn on Elastic Load Balancing health checks to use with your load balancer.

<!-- pagebreak -->

#### Step 5: Define Capacity

- **Desired Capacity**: Set the desired capacity of the group to 2.
- **Minimum Capacity**: Set the minimum number of instances to 1.
- **Maximum Capacity**: Set the maximum number of instances to 4.

<!-- pagebreak -->

#### Step 6: Review and Create

- **Final Review**: Click "Next" through the remaining settings, review your configurations, and click "Create" to launch your Auto Scaling Group.

<!-- pagebreak -->

#### Step 7: Monitor and Verify

- **Activity Monitoring**: Go to the "Activities" tab and note the message about scaling from 0 to 2 instances.
- **Instance Verification**: Click on the "Instance Management" tab to verify that there are 2 new instances.
- **Target Group Check**: In the left panel, click on "Target Groups" and verify that the target group has 2 targets.

This setup ensures that your application scales efficiently and remains available through varying loads, using AWS Auto Scaling Groups and a load-balanced environment.

---
