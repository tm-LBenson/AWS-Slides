---
layout: posts
title: 'Hands-On: AWS Elastic Beanstalk'
section: Section-8
lesson: 3
order: 1
---

### Hands-On: AWS Elastic Beanstalk

This exercise will guide you through deploying a simple web application using AWS Elastic Beanstalk. This service simplifies the process of deploying and scaling web applications and services, allowing developers to focus on application development without worrying about the underlying infrastructure.

<!-- pagebreak -->

#### Step 1: Create Your Application

- **Navigate to Elastic Beanstalk**: Open the AWS Management Console, go to Services, and select Elastic Beanstalk.
- **Create Application**:
  - Click 'Create Application'.
  - Choose 'Web server environment'.
  - Enter an application name.
  - Set the environment name to `<appName>-dev` to denote a development environment.
  - Note the auto-generated domain name, which is how you will access your web servers.

<!-- pagebreak -->

#### Step 2: Configure the Environment

- **Platform Selection**:
  - Select the platform. For this demonstration, choose Node.js.
  - Accept the default version for Node.js or select the latest version.
- **Application Code**:
  - For simplicity, select 'Sample application'.
- **Configuration Presets**:
  - Choose the 'Free tier' to minimize costs. Other options like 'High Availability' could set up resources across multiple Availability Zones.

<!-- pagebreak -->

#### Step 3: Set Up IAM Roles and Instance Profile

- **Service Role**:
  - Create a new service role if one doesn't already exist and keep the default role name.
- **Instance Profile Configuration**:
  - Open a new tab, go to the IAM console, and create a new role for EC2.
  - Select the use case for EC2 and add the necessary Beanstalk policies: AWSElasticBeanstalkMulticontainerDocker, AWSElasticBeanstalkWebTier, AWSElasticBeanstalkWorkerTier.
  - Name the role `aws-elastic-beanstalk`.
  - Back in the Beanstalk setup, refresh the instance profile selection and choose the role you just created.

<!-- pagebreak -->

#### Step 4: Review and Launch

- **Review Configuration**:
  - Skip optional configuration steps and proceed to review your settings.
  - Review all configurations to ensure everything is set correctly, then click 'Create'.
- **Monitor Deployment**:
  - Watch the event log in Beanstalk as it uses CloudFormation to build and deploy your application.
  - Refresh occasionally to see the progress and how AWS resources are being configured and launched.

<!-- pagebreak -->

#### Step 5: Validate and Clean Up

- **Check Deployment**:
  - Once the environment is set up, open the provided domain link to see the running application.
- **Deploy Changes**:
  - If needed, you can upload and deploy a new version of the application by selecting 'Upload and Deploy'.
- **Clean Up**:
  - To avoid unnecessary charges, navigate to the application, click on actions, and select 'Terminate Environment'.

This hands-on tutorial demonstrates how to use AWS Elastic Beanstalk to deploy a web application quickly. It covers the complete lifecycle from creation to deployment and cleanup, showcasing the ease and efficiency of managing web applications with Elastic Beanstalk.

---
