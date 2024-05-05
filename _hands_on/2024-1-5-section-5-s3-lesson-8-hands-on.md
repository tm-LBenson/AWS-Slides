---
layout: posts
title: 'Hands-On Guide: Working with S3 Storage Classes'
section: Section-5-S3
lesson: 8
order: 1
---

### Hands-On Guide: Working with S3 Storage Classes

This guide will walk you through the process of creating a new S3 bucket, uploading an image with different storage classes, and setting up lifecycle rules to automate transitions between storage classes.

<!-- pagebreak -->

#### Step 1: Create a New Bucket

- **Navigate to S3 Console**: Open the AWS Management Console, go to the S3 service, and click on "Create bucket".
- **Bucket Configuration**: Enter a unique bucket name and select your preferred region. Leave other settings at their default values.
- **Create Bucket**: Click "Create bucket" to finalize the creation.
<!-- pagebreak -->

#### Step 2: Upload an Image with a Specified Storage Class

- **Open Your Bucket**: Click on the bucket name to open it.
- **Upload File**: Click the "Upload" button.
- **Select File**: Click "Add files" and choose an image file from your computer.
- **Modify Storage Class**:
  - Click on "Object properties".
  - Under "Storage class", change from "Standard" to "Standard-IA" (Infrequent Access) or another class as required.
  - **Upload**: Click "Upload" to start the upload process.
  <!-- pagebreak -->

#### Step 3: Verify the Storage Class

- **Check Storage Class**: Once the file is uploaded, navigate to the bucket and check the listed storage class next to the uploaded file. It should display "Standard-IA" or the class you selected.
<!-- pagebreak -->

#### Step 4: Modify the Storage Class of an Existing Object

- **Select the Image File**: Click on the image file in your bucket to view its properties.
- **Edit Storage Class**:
  - Scroll down and click on "Edit" next to "Storage class".
  - Change the storage class back to "Standard".
  - Save the changes.
  <!-- pagebreak -->

#### Step 5: Automate Storage Class Transitions

- **Management Tab**: Go back to your bucket, click on the "Management" tab, and then "Create lifecycle rule".
- **Lifecycle Rule Configuration**:
  - **Name**: Give your lifecycle rule a meaningful name.
  - **Apply to All Items**: Ensure the rule applies to all items in the bucket.
  - **Add Transitions**:
    - Check "Move current version of objects between storage classes".
    - Click "Add transition", set the number of days after creation when the transition should occur, and select the target storage class.
    - You can add multiple transitions, for example, moving to "Glacier" after 90 days, then to "Deep Archive" after 180 days.
- **Create Rule**: Click "Create rule" to apply the lifecycle management settings.
<!-- pagebreak -->

#### Conclusion

This hands-on exercise demonstrates how to interact with different S3 storage classes and automate the management of your stored data using lifecycle rules. By efficiently managing storage classes, you can optimize costs and ensure data is stored in the most appropriate class based on access patterns and retention requirements.

---
