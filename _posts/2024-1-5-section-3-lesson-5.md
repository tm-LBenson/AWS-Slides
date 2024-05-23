---
layout: posts
title: 'Summary of Amazon EC2 Topics'
section: Section-3
lesson: 5
---

### Summary of Key EC2 Concepts

This lesson provides a summary of the important topics covered in the Amazon EC2 module. Here’s an overview of each section:

#### Elastic Compute Cloud (EC2)

- **Overview**: EC2 allows you to rent virtual computers over the internet, providing flexibility and scalability for your computing needs. This is akin to renting a virtual server that you can access and manage remotely.

<!-- pagebreak -->

#### Creating and Launching an EC2 Instance

- **Process**: Involves accessing EC2 services, launching an instance, creating a key pair for secure SSH access, and configuring security groups to manage inbound and outbound traffic. The instance uses Elastic Block Storage (EBS) as its virtual hard drive.

<!-- pagebreak -->

#### Adding a Basic `index.html` to an EC2 Instance

- **Web Server Setup**: Installing a web server like Apache, configuring it to start at boot, and creating a simple `index.html` file. You verify the setup by accessing the instance's public IP in a browser to view the "Hello World" page.

<!-- pagebreak -->

#### EC2 Instance Types

- **Variety**: EC2 provides various instance types designed for different workloads, including General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, Accelerated Computing, and Networking Optimized instances. Each type caters to specific needs, ensuring optimal performance for different applications.

<!-- pagebreak -->

#### Introduction to Security Groups

- **Functionality**: Security groups act as virtual firewalls that control both inbound and outbound traffic to an EC2 instance. They are important for defining secure access permissions and can be adjusted without restarting the instance.

<!-- pagebreak -->

#### Connecting via SSH and Managing IAM Users

- **Access Management**: Demonstrates connecting to an EC2 instance using SSH and the importance of proper IAM roles for accessing AWS services like listing IAM users. It underscores the necessity of role-based permissions for security and management.

<!-- pagebreak -->

#### Instances Purchasing Options

- **Flexibility and Cost Optimization**: Describes various purchasing options for EC2, including On-Demand, Reserved Instances, Savings Plans, Spot Instances, Dedicated Hosts, Dedicated Instances, and Capacity Reservations. Each option offers different benefits tailored to specific usage patterns and budgetary considerations.

---
