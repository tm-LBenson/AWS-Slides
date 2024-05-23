---
layout: posts
title: 'Hands-On: CloudFront'
section: Section-10
lesson: 3
order: 1
---

### Hands-On: CloudFront

#### Setting Up an Amazon S3 Bucket

In this hands-on activity, you will learn how to use Amazon CloudFront to distribute content stored in an Amazon S3 bucket.

- **Step 1**: Create an S3 bucket.

  - Navigate to the S3 service in the AWS Management Console.
  - Click "Create bucket".
  - Enter a unique bucket name and select the default settings.

- **Step 2**: Upload content.

  - Upload an `index.html` file and two images into your bucket.
  - Make sure one of the images is linked within an `<img>` element in the `index.html`.

- **Step 3**: Attempt to access your content using the S3 bucket's public URL.
  - You should see an XML error message indicating "Access Denied".

<!-- pagebreak -->

#### Creating a CloudFront Distribution

- **Step 4**: Set up CloudFront.

  - Open the CloudFront service from the AWS Management Console.
  - Click "Create Distribution".
  - For the origin domain, select the S3 bucket you created earlier.

- **Step 5**: Configure Origin Access Control.
  - Set the origin access to use Origin Access Control settings.
  - Create a new access control and follow the prompts to update the S3 bucket policy.

<!-- pagebreak -->

#### Configuring and Deploying the Distribution

- **Step 6**: Adjust additional settings.

  - Scroll to the "Web Application Firewall" section and disable it for this demo.
  - Under "Default Root Object", enter `index.html`.

- **Step 7**: Update the S3 bucket policy.

  - You should see a blue banner prompting you to update the S3 bucket policy. Click "Copy Policy".
  - Navigate back to your S3 bucket, go to the "Permissions" tab, and paste the copied policy into the bucket policy editor.

- **Step 8**: Deploy and test your distribution.
  - Return to CloudFront and wait for the distribution to deploy.
  - Once deployed, use the distribution's domain name to access your `index.html` via a web browser. You should see your webpage and the images loading correctly.

<!-- pagebreak -->

#### Cleanup

- **Step 9**: Clean up resources.
  - To avoid ongoing charges, delete the CloudFront distribution.
  - Also, delete the S3 bucket along with all its contents.

This hands-on session demonstrates how to effectively use Amazon CloudFront to deliver web content globally, leveraging AWS's scalable infrastructure to enhance your web application's performance and reliability.

---
