---
layout: posts
title: 'Hands-On: Managing Amazon S3 Versioning'
section: Section-2
lesson: 6
order: 1
---

### Hands-On: Managing Amazon S3 Versioning

This practical exercise will guide you through enabling versioning on an S3 bucket, making changes to an existing object, and managing versions, including how to restore previous versions of an object. Follow these steps to deepen your understanding of S3 versioning and its capabilities:

<!-- pagebreak -->

#### Step 1: Enable Versioning in Your Bucket

- **Navigate to the S3 Console**: Log into the AWS Management Console, open the S3 service, and select the bucket you're working with.
- **Enable Versioning**: Click on the "Properties" tab for your bucket, find the "Versioning" setting, click "Edit", choose "Enable", and then "Save" changes. This will start keeping versions of each object you upload or update in this bucket.
<!-- pagebreak -->

#### Step 2: Modify and Upload the `index.html`

- **Modify `index.html`**: Make a change to your `index.html` file that you previously uploaded in the website hosting exercise.
- **Upload Modified File**: Go to the main page of your bucket and click "Upload". Select the modified `index.html` file and confirm the upload.
<!-- pagebreak -->

#### Step 3: View Object Versions

- **Enable 'Show Versions'**: On the bucket page, toggle on the "Show versions" option to display all versions of each file.
- **Observe Version ID**: Notice the new version ID associated with the updated `index.html`. This ID distinguishes the new version from previous versions.
<!-- pagebreak -->

#### Step 4: Delete the New Version of `index.html`

- **Delete Latest Version**: Click on the version ID of the newly uploaded `index.html` and select "Delete". AWS might prompt you to confirm the version ID to delete.
- **Caution**: Remember, deleting a specific version of an object is a destructive operation. Once deleted, it cannot be recovered.
- **Observe Rollback**: After deletion, S3 uses the previous version of `index.html` as the current version, effectively rolling back the changes.
<!-- pagebreak -->

#### Step 5: Delete and Restore Using Delete Markers

- **Delete the Current Version**: With versioning still enabled, delete the `index.html` file without specifying the version. This action adds a delete marker, making the object not appear in your bucket.
- **Confirm 'Delete' vs. 'Permanently Delete'**: Notice the wording in the confirmation prompt. Deleting with versioning on doesn’t say "permanently delete" because it's placing a delete marker.
- **Restore the Object**: To restore the file, first enable 'Show Versions' again, find the delete marker (it will have a unique ID and labeled as a delete marker), and delete it. Select "Permanently delete" for the delete marker.
<!-- pagebreak -->

#### Step 6: Confirm Restoration

- **View the Page**: Navigate to your S3 website URL or where `index.html` is accessed. Use CTRL + SHIFT + R to clear the cache and reload the page, ensuring you're seeing the most current version served by S3.
- **Final Check**: The `index.html` should now be restored to the last uploaded version before the delete marker was added.
<!-- pagebreak -->

#### Conclusion

This exercise demonstrates the power and utility of S3 versioning, especially in managing document revisions and recovering from unintended deletions. By practicing these steps, you gain a stronger grasp of how to leverage S3 for more robust data management and recovery strategies, ensuring that you can maintain continuity and integrity of data stored in the cloud.

---
