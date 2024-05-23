---
layout: posts
title: 'Hands-On: Hosting a Website on Amazon S3'
section: Section-2
lesson: 5
order: 1
---

### Hands-On: Hosting a Website on Amazon S3

This hands-on guide will walk you through the process of setting up a static website using Amazon S3. You will learn how to configure your S3 bucket for website hosting and make it accessible via the web. Follow these steps to get your static website up and running on S3:

<!-- pagebreak -->

#### Step 1: Configure the S3 Bucket for Website Hosting

- **Access the S3 Console**: Log into the AWS Management Console and navigate to the S3 service.
- **Select Your Bucket**: Find and click on the bucket you want to use for hosting your website.
- **Properties Tab**: Click on the "Properties" tab to access the bucket's properties.
- **Static Website Hosting**: Scroll to the "Static Website Hosting" section and click "Edit".
- **Enable Website Hosting**:
  - Select "Enable" to turn on static website hosting for the bucket.
  - **Index Document**: Enter `index.html` in the Index Document field. This setting specifies the homepage for your website.
  - **Save**: Click "Save" to apply the changes.
  <!-- pagebreak -->

#### Step 2: Create and Prepare the `index.html` File

- **Create HTML File**: On your local machine, create a new file named `index.html`.
- **Add Content**: Insert basic HTML content that serves as the landing page for your website. Since you're already familiar with HTML, you can customize this content as needed. Add some text and an image, ensure the image is also uploaded to the S3 bucket.
<!-- pagebreak -->

#### Step 3: Upload the `index.html` to Your Bucket

- **Open Your Bucket**: Navigate back to your bucket in the S3 console.
- **Upload File**: Click on the "Upload" button.
- **Add Files**: Drag and drop your `index.html` file or use the file selector to add it to the upload queue.
- **Start Upload**: Click on the "Upload" button to transfer your file to S3.
<!-- pagebreak -->

#### Step 4: Access Your Website

- **Copy Bucket Website Endpoint**: After enabling website hosting, S3 provides a bucket website endpoint, which can be found in the Static Website Hosting section of the bucket properties.
- **Test Your Website**:
  - Copy the endpoint URL, which looks something like `http://your-bucket-name.s3-website-region.amazonaws.com`.
  - Paste it into a web browser to visit your site.
- **Verify Functionality**: Ensure that your website loads correctly and displays the content you added to the `index.html` file.
<!-- pagebreak -->

#### Conclusion

You have successfully hosted a static website on Amazon S3. This setup allows you to serve static content efficiently without the need for server management. S3 provides a scalable, reliable, and cost-effective solution for hosting websites, making it an excellent choice for static web projects.

---
