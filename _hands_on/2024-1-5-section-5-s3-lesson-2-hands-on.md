---
layout: posts
title: 'Amazon S3 - Buckets Overview'
section: Section-6
lesson: 2
order: 1
---

### Hands-On: Working with Amazon S3

This hands-on guide will walk you through the basic operations in Amazon S3, including creating a bucket, uploading files, and managing access settings. Follow these steps to gain practical experience with S3:

<!-- pagebreak -->

#### Step 1: Access the S3 Console

- **Navigate to the S3 Console**: Open the AWS Management Console, search for S3, and click on the S3 link to open the S3 management console.
<!-- pagebreak -->

#### Step 2: Create a New Bucket

- **Create Bucket**: Click on the "Create bucket" button.
- **Bucket Name**: Provide a globally unique name for your bucket. Remember, bucket names must be unique across all existing bucket names in Amazon S3 globally.
- **Region Selection**: Although S3 is a global service, select an AWS Region where you want the bucket to reside. This is important for optimizing latency, minimizing costs, or addressing regulatory requirements.
- **Block All Public Access**: Ensure "Block all public access" is selected to keep your data private, which is the default and recommended setting for most use cases.
- **Other Settings**: Leave the rest of the settings at their default values.
- **Create Bucket**: Click on the "Create bucket" button to finalize the bucket creation.
<!-- pagebreak -->

#### Step 3: Upload a Photo

- **Open the Bucket**: Navigate to your newly created bucket by clicking on its name.
- **Upload Files**: Click on the "Upload" button.
- **Add Files**: Select a photo from your computer to upload. Click on "Add files" and browse to select the photo.
- **Start Upload**: After adding the photo, click on "Upload" to start the transfer of your file to S3.
<!-- pagebreak -->

#### Step 4: Accessing the Uploaded Photo

- **Test Public Link**: Once the upload is complete, try accessing the photo using the public link provided by S3. Note that this should fail because public access is blocked.
- **Use Private Link**: View the photo using the private link provided in the S3 console. Notice that the URL includes a security key, which is part of the signed URL mechanism that S3 uses to control access to private content.
<!-- pagebreak -->

#### Step 5: Create a Folder and Upload Another Photo

- **Create Folder**: In your bucket, create a new folder by clicking on the "Create folder" button. Name the folder as desired.
- **Upload to Folder**: Open the newly created folder and repeat the upload process to add another photo into this folder.
<!-- pagebreak -->

#### Step 6: Delete the Folder

- **Delete Contents**: Navigate back to the folder containing the second photo. First, delete the photo inside the folder.
- **Delete Folder**: After deleting all contents inside the folder, delete the folder itself by selecting the folder and clicking on the "Delete" button.
<!-- pagebreak -->

#### Key Takeaways

- **Bucket Naming**: The importance of globally unique names and region selection.
- **Data Privacy**: The significance of the "Block all public access" setting for securing your data.
- **Access Controls**: Understanding how access controls and signed URLs work in S3 to securely share and manage access to your data.

By completing these steps, you will have a practical understanding of how to manage data storage in Amazon S3, ensuring data security and accessibility according to your needs.

---
