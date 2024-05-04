---
layout: posts
title: 'Hands-On: Creating an EC2 Instance from a Custom AMI with User Data'
section: Section-3-EBS
lesson: 4
order: 2
---

### Hands-On: Creating an EC2 Instance from a Custom AMI with User Data

Once you've created a custom Amazon Machine Image (AMI), you can use it to launch new Amazon EC2 instances with the same setup. This hands-on guide will walk you through creating an EC2 instance using a custom AMI and configuring user data to add a basic web page.

<!-- pagebreak -->

#### Launching a New EC2 Instance from a Custom AMI

#### Select the Custom AMI

- In the AWS Management Console, go to the "Images" section and select "Amazon Machine Images."
- Find the custom AMI you created and click "Launch" to start creating a new EC2 instance.

<!-- pagebreak -->

#### Configure Instance Settings

- Choose the instance type based on your performance needs (e.g., `t2.micro`, `m5.large`).
- In the "Advanced Details" section, add a user data script. This script installs a simple "Hello World" web page:

```sh
#!/bin/bash
# User data script to create a basic index.html page
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

- Since the previous instance had Apache installed, this script creates an `index.html` file in the default web directory.

<!-- pagebreak -->

#### Set Up Security Groups

- Ensure your security groups allow HTTP traffic (port 80) so you can view the web page in a browser.
- Configure additional security settings (e.g., key pairs, SSH access) as needed.

<!-- pagebreak -->

#### Launch the EC2 Instance

- After configuring the instance settings, click "Launch."
- Wait for the instance to start, and then check the status in the EC2 Dashboard to ensure it's running.

<!-- pagebreak -->

#### Access the Web Page

- Once the instance is running, open a web browser and enter the public IP address of the EC2 instance.
- You should see a simple "Hello World" web page with the hostname of your instance.
- This confirms that the user data script executed successfully and created the `index.html` file in the correct location.

By following these steps, you can launch a new EC2 instance from a custom AMI and use user data to create a basic web page. This approach is helpful for automating setup tasks and ensuring consistent configurations across instances.

---
