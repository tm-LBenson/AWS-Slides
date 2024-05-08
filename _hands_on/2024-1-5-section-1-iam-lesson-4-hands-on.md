---
layout: posts
title: 'Hands-On: IAM - Using AWS CLI and SDK'
section: Section-1-IAM
lesson: 4
order: 1
---

### Hands-On: IAM - CLI and SDK Operations

#### Installing and Configuring the AWS CLI

The AWS Command Line Interface (CLI) is a powerful tool that enables you to interact with AWS services using commands in your command-line shell. This section will guide you through installing and configuring the AWS CLI.

- **Step 1**: Download the AWS CLI from the official AWS website.
- **Step 2**: Follow the installation instructions specific to your operating system.
- **Step 3**: Once installed, open your command-line interface and run `aws configure` to set up your credentials.
- **Step 4**: Enter your AWS Access Key ID and Secret Access Key when prompted. These are found in the IAM dashboard under your user's security credentials tab.
- **Step 5**: Set your default region and output format, which will apply to all your CLI operations.

<!-- pagebreak -->

#### Using the AWS CLI

With the AWS CLI installed and configured, you can begin to manage AWS services directly from your command line.

- **Example Command**: To list all IAM users in your account, use the command:
  ```sh
  aws iam list-users
  ```
- **Understanding Output**: The output will display a JSON list of IAM users, their creation dates, and other metadata.
- **Troubleshooting**: If you encounter permissions errors, ensure your IAM user has the necessary permissions attached either directly or via a group.

<!-- pagebreak -->

#### Getting Started with AWS SDK

The AWS Software Development Kit (SDK) allows developers to integrate AWS services into their applications using familiar programming languages. This section will focus on using the JavaScript SDK.

- **Setup**: Install the AWS SDK for JavaScript by running `npm install aws-sdk` in your project directory.
- **Example Project**: Create a simple Node.js application that uses the AWS SDK to manage IAM users.
- **SDK Calls**:

  ```js
  const AWS = require('aws-sdk');

  // Configure AWS SDK with your credentials
  AWS.config.update({
    accessKeyId: 'YOUR_KEY',
    secretAccessKey: 'YOUR_SECRET',
    region: 'YOUR_REGION',
  });

  // Create an IAM client
  const iam = new AWS.IAM();

  // List IAM users
  iam.listUsers({}, (err, data) => {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data); // successful response
  });
  ```

- **Integrating SDK**: This basic setup can be expanded to include more complex interactions with AWS services, automating tasks like creating, listing, or deleting resources through your application.

This hands-on experience with the AWS CLI and JavaScript SDK will enhance your ability to automate and manage AWS services programmatically, important for efficient cloud management and development.

---
