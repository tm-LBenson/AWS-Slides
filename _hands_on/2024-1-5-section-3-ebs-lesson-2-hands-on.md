---
layout: posts
title: 'Hands-On: Creating and Attaching a Second EBS Volume'
section: Section-4
lesson: 2
order: 1
---

### Hands-On: Creating and Attaching a Second EBS Volume

This hands-on lesson guides you through the steps to add a second Elastic Block Store (EBS) volume to an EC2 instance, increasing storage capacity and segregating data storage efficiently.

#### Navigate to the EC2 Dashboard

- **Access**: Sign into the AWS Management Console and select "EC2" under Services to open the EC2 Dashboard.

<!-- pagebreak -->

#### Create a New EBS Volume

- **Volume Creation**:
  - Find "Elastic Block Store" in the left sidebar and click on "Volumes."
  - Click "Create Volume" to initiate the creation process.
  - Select the desired volume type from options like General Purpose SSD (gp3), Provisioned IOPS SSD (io1), or Throughput Optimized HDD (st1).
  - Set the size for the new volume and ensure it is in the same Availability Zone as your EC2 instance for proper attachment.

<!-- pagebreak -->

#### Attach the New Volume to Your EC2 Instance

- **Attachment Process**:
  - After creating the volume, locate it in the list of available EBS volumes.
  - Click "Actions" and select "Attach Volume."
  - From the drop-down menu, select your EC2 instance and assign a device name (e.g., `/dev/sdb`).
  - Click "Attach" to link the new volume to your EC2 instance.

<!-- pagebreak -->

#### Mount the New Volume

- **Mounting Steps**:

  - Connect to your EC2 instance via SSH.
  - Format the new volume to use the ext4 file system by executing:

    ```bash
    sudo mkfs -t ext4 /dev/sdb
    ```

  - Create a mount point for the new volume:

    ```bash
    sudo mkdir /mnt/second_volume
    ```

  - Mount the new volume to make it accessible:

    ```bash
    sudo mount /dev/sdb /mnt/second_volume
    ```

  - This allows the system to access the volume at `/mnt/second_volume`.

<!-- pagebreak -->

#### Verify the New Volume

- **Verification**:

  - Confirm the volume is mounted correctly by checking disk space usage:

    ```bash
    df -h
    ```

  - Ensure that the newly added volume appears in the list with the specified mount point and correct size.

---

This hands-on exercise demonstrates how to effectively increase the storage capacity of an EC2 instance by adding and configuring a second EBS volume, essential for managing larger or segregated data sets.
