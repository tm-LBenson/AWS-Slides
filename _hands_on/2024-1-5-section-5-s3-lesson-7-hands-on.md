---
layout: posts
title: 'Hands-On Guide: Setting Up Amazon S3 Replication'
section: Section-5-S3
lesson: 7
order: 1
---

### Hands-On Guide: Setting Up Amazon S3 Replication

This hands-on guide will walk you through setting up Amazon S3 replication between two buckets. This process includes creating new buckets, enabling versioning, and configuring replication rules. Follow these steps to effectively replicate data across S3 buckets:

<!-- pagebreak -->

#### Step 1: Create the Source Bucket

- **Go to the S3 Console**: Log into the AWS Management Console and navigate to the S3 service.
- **Create New Bucket**: Click "Create bucket".
  - **Bucket Name**: Provide a unique name for your source bucket.
  - **Region Selection**: Choose an appropriate AWS region. This can be any region that suits your latency, data sovereignty, or other requirements.
  - **Enable Versioning**: Under the "Advanced settings", find "Versioning" and enable it.
  - **Create Bucket**: Click "Create bucket" to finalize the creation.
  <!-- pagebreak -->

#### Step 2: Open Source Bucket in New Tab

- **Access the Bucket**: Once the bucket is created, open it in a new tab for easy navigation during setup.
<!-- pagebreak -->

#### Step 3: Create the Destination Bucket

- **Create Another New Bucket**: Back in the main S3 console tab, click "Create bucket" again to set up your destination bucket.
  - **Bucket Name**: Provide another unique name for this bucket.
  - **Region Selection**: Choose the same or a different AWS region, depending on whether you want Same-Region Replication (SRR) or Cross-Region Replication (CRR).
  - **Enable Versioning**: Ensure versioning is enabled as well, which is important for replication.
  - **Create Bucket**: Finalize the creation of your destination bucket.
  <!-- pagebreak -->

#### Step 4: Upload an Image to the Source Bucket

- **Upload File**: In the source bucket tab, click "Upload" and choose an image file from your computer. Confirm the upload to store the image in the source bucket.
<!-- pagebreak -->

#### Step 5: Set Up Replication Rule

- **Management Tab**: In the source bucket, go to the "Management" tab and click "Replication".
- **Create Replication Rule**: Click "Create replication rule".
  - **Rule Name**: Give your replication rule a meaningful name.
  - **Apply to All Objects in the Bucket**: Ensure this option is selected to apply the rule to all current and future objects.
  - **Destination Bucket**: Type in the name of the destination bucket you created.
  - **IAM Role**: Select "Create new role" from the dropdown. This allows S3 to manage replication actions on your behalf.
  - **Save Rule**: Leave other settings as default and save the rule.
  <!-- pagebreak -->

#### Step 6: Decision on Existing Objects

- **Prompt on Replicating Existing Objects**: You will be asked whether you want to replicate existing objects.
  - **Choose Not to Replicate Existing Objects**: For this exercise, select "No, do not replicate existing objects". This setting focuses the rule on new objects only.
  <!-- pagebreak -->

#### Step 7: Upload a Second Image to the Source Bucket

- **Upload Another Image**: Upload a different image to the source bucket to test the replication setup.
- **Check Destination Bucket**: After a few seconds, navigate to the destination bucket and refresh to see if the second image has been replicated.
<!-- pagebreak -->

#### Step 8: Demonstrate Versioning and Replication

- **Re-upload the Same Image**: Upload the same second image again to the source bucket to create a new version.
- **Observe Version IDs**: Check both the source and destination buckets to observe how the version ID of the image updates due to the re-upload.
<!-- pagebreak -->

#### Conclusion

Following these steps, you should have a fully functional S3 replication setup. This configuration demonstrates the ability to automatically replicate new objects to a secondary location, ensuring data durability and availability. This setup is particularly useful for disaster recovery, data locality, and compliance purposes.

---
