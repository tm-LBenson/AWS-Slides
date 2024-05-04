---
layout: posts
title: 'Hands-On: Creating an EBS Snapshot'
section: Section-3-EBS
lesson: 3
order: 1
---

### Hands-On: Creating an EBS Snapshot

Creating an Elastic Block Store (EBS) snapshot is a straightforward process in the AWS Management Console. This hands-on guide shows you how to create an EBS snapshot for an existing volume:

<!-- pagebreak -->

#### Navigate to the EC2 Dashboard

- In the AWS Management Console, select "EC2" under Services.
- Go to "Elastic Block Store" and choose "Volumes."

<!-- pagebreak -->

#### Select the Volume to Snapshot

- From the list of EBS volumes, choose the volume you want to snapshot.
- Click "Actions," then "Create Snapshot."

<!-- pagebreak -->

#### Provide a Description and Create the Snapshot

- Add a description for your snapshot to easily identify it later.
- Click "Create Snapshot" to start the snapshot creation process.
- The new snapshot will appear in the "Snapshots" section under "Elastic Block Store."

<!-- pagebreak -->

#### Monitor the Snapshot Status

- Once the snapshot is created, you can monitor its progress. Initially, it will show "pending" status.
- Once complete, the status changes to "completed," indicating the snapshot is ready for use.
