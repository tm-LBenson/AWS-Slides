---
layout: posts
title: 'Hands-On: Setting Up an EC2 Instance'
section: Section-2
lesson: 2
order: 1
---

### Spin up a new EC2 instance with Amazon Linux 2 and Auto-Configuration

To start a new EC2 instance with specific configurations and user data that automatically sets up a web server, follow these steps:

#### **Access EC2 Services**

- Navigate to the AWS Management Console.
- Select "EC2" under Services.

<!-- pagebreak -->

#### **Launch New Instance**

- Click on "Launch Instance" to begin setting up your new virtual server.

<!-- pagebreak -->

#### **Choose an Amazon Machine Image (AMI)**

- Select the "Amazon Linux 2 AMI (HVM)" to ensure compatibility with the free tier and current software packages.

<!-- pagebreak -->

#### **Instance Type Selection**

- Ensure that the instance type selected falls under the free tier, such as a `t2.micro` or `t3.micro`.

<!-- pagebreak -->

#### **Configure Instance**

- In the configuration step, expand the "Advanced Details" section at the bottom.
- Paste the following user data script into the "User Data" textbox to automate the setup of your web server:

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

#### **Create a Key Pair**

- Create a new key pair for secure SSH connections in future lessons.
- Name the key pair (e.g., `MyEC2KeyPair`) and download it to your local machine.

<!-- pagebreak -->

#### **Configure Security Group**

- Set up a security group that allows HTTP traffic from the internet.
- Ensure the security group has rules to allow HTTP (port 80) and SSH (port 22) access.

<!-- pagebreak -->

#### **Review and Launch**

- Review all settings.
- Click "Launch" to start your EC2 instance.

<!-- pagebreak -->

#### **View Your Instance**

- After launching, click on "View Instances" to see your newly created EC2 instance.
- Note that the web server setup and the HTML page creation are handled automatically by the user data script.

<!-- pagebreak -->

#### Verification

- To verify the web server is running correctly, access your instance's public IP address in a web browser. You should see a "Hello World" message displayed, indicating that everything is set up correctly.
