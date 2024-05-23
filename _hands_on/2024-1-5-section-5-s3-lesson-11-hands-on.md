---
layout: posts
title: 'Hands-On Guide: Ordering an AWS Snow Family Device'
section: Section-5
lesson: 11
order: 1
---

### Hands-On Guide: Ordering an AWS Snow Family Device

This guide provides a walkthrough on how to order an AWS Snow Family device for data transfer jobs, using the AWS Management Console. The example provided here will focus on ordering a Snowcone device, but the general process is similar for other devices in the Snow Family.

<!-- pagebreak -->

#### Step 1: Start Your Order

- **Navigate to the AWS Management Console**: Log into your AWS account and go to the AWS Snow Family console.
- **Order Device**: Click on "Order an AWS Snow family device" to initiate the process.
<!-- pagebreak -->

#### Step 2: Configure the Job

- **Job Name**: Assign a unique name to your job. This helps in tracking and managing different jobs.
- **Job Type**: Select "Import into Amazon S3" as the job type. This option is for transferring data into AWS. Take a moment to look over other options, such as exporting data from AWS or using the device for edge computing tasks.
- **Click Next**: Proceed to the next step.
<!-- pagebreak -->

#### Step 3: Select the Device

- **Choose Device**: Select "Snowcone" from the list of available Snow Family devices. Snowcone is suitable for small-scale, highly portable jobs.
- **Review Device Options**: Take a moment to review the capabilities and limitations of the Snowcone device to ensure it meets your project requirements.
- **Click Next**: Move to the next configuration step.
<!-- pagebreak -->

#### Step 4: Review Shipping and Network Options

- **Shipping Options**: Provide the shipping address where the device should be delivered. Ensure the details are accurate to avoid delays.
- **Network Options**: Configure network settings according to your operational environment. This may include setting up static IP addresses if required.
- **Click Next**: Proceed to review your settings.
<!-- pagebreak -->

#### Step 5: Final Review

- **Review All Options**: Carefully review all the options you have selected, including job details, device type, and network settings. Make sure everything is configured as per your requirements for the data transfer job.
- **Verification**: It's important to double-check all entered information to prevent issues during the job execution and device handling.
<!-- pagebreak -->

#### Step 6: Cancel or Confirm the Order

- **Final Step**: After reviewing all options and ensuring all configurations are correct, you have the option to either confirm the order or cancel it.
- **Click Cancel**: If you are just testing or not ready to proceed, click "Cancel" to abort the process. This action will not submit any order or incur any costs.
<!-- pagebreak -->

#### Conclusion

Ordering a device from the AWS Snow Family involves several important steps, from selecting the right device and configuring the job to reviewing shipping details and network configurations. This hands-on guide is designed to familiarize you with the ordering process, ensuring you are prepared to efficiently manage data transportation jobs using AWS Snow Family devices.
