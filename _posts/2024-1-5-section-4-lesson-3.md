---
layout: posts
title: 'EBS Snapshots Overview'
section: Section-4
lesson: 3
---

### EBS Snapshots Overview

Elastic Block Store (EBS) snapshots are a key feature in Amazon Web Services (AWS) that allows you to create point-in-time backups of your EBS volumes. This overview covers the key aspects of EBS snapshots and their use cases:

<!-- pagebreak -->

#### What is an EBS Snapshot?

- An EBS snapshot is a backup of an EBS volume at a specific point in time.
- Snapshots are stored in Amazon S3 but are managed through the EBS service.
- You can use snapshots to restore an EBS volume, create new volumes, or copy data across regions.

<!-- pagebreak -->

#### Creating an EBS Snapshot

- To create a snapshot, go to the AWS Management Console and navigate to the "Volumes" section under "Elastic Block Store."
- Select the volume you want to back up, click "Actions," then "Create Snapshot."
- Provide a description for the snapshot and click "Create Snapshot." This starts the snapshot creation process.

<!-- pagebreak -->

#### Snapshot Characteristics

- Snapshots are incremental, meaning they only capture the changes made since the last snapshot. This makes them storage-efficient.
- You can create snapshots from in-use EBS volumes, but it's best practice to take snapshots when the volume is idle to ensure consistency.

<!-- pagebreak -->

#### Using EBS Snapshots

- Snapshots can be used to create new EBS volumes, allowing you to restore data or replicate a volume in the same or different Availability Zone (AZ).
- Snapshots can also be shared across AWS accounts or copied to other regions, enabling disaster recovery and data migration.

<!-- pagebreak -->

#### Restoring an EBS Volume from a Snapshot

- To restore a volume, go to the "Snapshots" section under "Elastic Block Store."
- Select the desired snapshot, click "Actions," then "Create Volume."
- Choose the desired size and AZ for the new volume, then click "Create Volume."
- You can then attach this new volume to an EC2 instance and mount it to access the restored data.

<!-- pagebreak -->

#### EBS Snapshots Features

Elastic Block Store (EBS) snapshots have several advanced features that enhance their flexibility and data management capabilities. This section explores these features, including EBS Snapshot Archive and the EBS Snapshot Recycle Bin.

<!-- pagebreak -->

#### EBS Snapshot Archive

- **Cost-Efficient Storage**
  - The EBS Snapshot Archive allows you to move snapshots to an "archive tier," which is 75% cheaper than standard EBS snapshot storage.
  - Ideal for long-term storage of backups or snapshots that are not accessed frequently.
- **Restoration Time**
  - Restoring from the archive tier takes longer, typically between 24 and 72 hours. This is because archived data is stored in a lower-cost storage tier.
  - If you need faster access to a snapshot, consider keeping it in the standard tier.
- **Archiving Snapshots**
  - To move a snapshot to the archive tier, go to the AWS Management Console, navigate to the "Snapshots" section, select a snapshot, and choose "Archive."
  - You can also automate this process using lifecycle policies to automatically move snapshots to the archive after a certain period.

<!-- pagebreak -->

#### EBS Snapshot Recycle Bin

- **Protection Against Accidental Deletion**
  - The EBS Snapshot Recycle Bin allows you to set rules for retaining deleted snapshots for a specified period, reducing the risk of accidental data loss.
  - You can recover snapshots from the recycle bin within the retention period.
- **Retention Rules**
  - You can set the retention period for recycled snapshots, from one day to one year.
  - Once the retention period expires, the snapshots are permanently deleted.
  - This feature is useful for maintaining a safety net for critical snapshots.
- **Recovering Snapshots from the Recycle Bin**
  - To recover a deleted snapshot, go to the "Recycle Bin" section in the AWS Management Console.
  - Select the snapshot you want to recover, then choose "Restore Snapshot" to move it back to the "Snapshots" section.
  - The snapshot is then available for use like any other EBS snapshot.

---
