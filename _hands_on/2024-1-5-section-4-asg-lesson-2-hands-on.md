---
layout: posts
title: 'Load Balancer Hands-On'
section: Section-4-ASG
lesson: 2
order: 1
---

### Load Balancer Hands-On

This hands-on exercise guides you through setting up an Application Load Balancer (ALB) in AWS to distribute traffic across multiple EC2 instances. Follow these steps to create and configure your load balancer and associated resources.

<!-- pagebreak -->

#### Step 1: Create EC2 Instances

- **Launch Instances**: Create two new EC2 instances using the same security groups as before.

- **User Data Script**: Add the following script to the user data section under advanced options during instance setup. This script installs and starts the Apache HTTP Server and creates a simple web page:

```bash
#!/bin/bash
# User data script
yum update -y  # Update system packages
yum install -y httpd  # Install Apache HTTP Server
systemctl start httpd  # Start Apache
systemctl enable httpd  # Enable Apache on boot
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

<!-- pagebreak -->

#### Step 2: Create Application Load Balancer

- **Load Balancer Type**: Choose "Application Load Balancer" from the available options.

- **Naming**: Provide a name for your load balancer.

- **Network Mappings**: For networking mappings, select all three subnets available in your VPC to ensure high availability across different Availability Zones.

<!-- pagebreak -->

#### Step 3: Configure Security Groups

- **New Security Group**: Create a new security group for your load balancer.

- **Inbound Rule**: Assign an inbound rule to allow all HTTP traffic (port 80) from everywhere. This setting ensures that your load balancer can receive HTTP requests from any source.

- **Assign Security Group**: Remove the default security group assigned during the creation process and replace it with the new security group you just created.

<!-- pagebreak -->

#### Step 4: Instance Grouping

- **Target Group**: Create a target group to manage the instances under the load balancer. This group will include the EC2 instances you set up in Step 1.

- **Register Instances**: Select both new EC2 instances to include them in the instance grouping. This configuration will route incoming traffic to these instances.

By completing these steps, you will have successfully set up an Application Load Balancer that distributes incoming traffic across two EC2 instances, each serving a simple "Hello World" web page. This setup demonstrates the basics of load balancing with AWS ALB.

---
