---
layout: posts
title: 'AWS DataSync Overview'
section: Section-17
lesson: 12
---

### AWS DataSync

#### What is AWS DataSync?

AWS DataSync is a data transfer service that simplifies, automates, and accelerates moving large amounts of data between on-premises storage systems and AWS storage services.

<!-- pagebreak -->

#### Key Features:

- **Fast Data Transfer**: Uses a purpose-built network protocol to speed up the transfer rates, reducing data migration time.
- **Automated and Scheduled Transfers**: Supports setting up data transfers on a schedule (hourly, daily, weekly) to automate the synchronization process.

- **Efficient Replication**: After the initial full load, DataSync uses incremental transfers to synchronize only the changes, which reduces the amount of data transferred and minimizes costs.
<!-- pagebreak -->

#### Target Services:

- Amazon S3: Supports all storage classes, including S3 Glacier for long-term archival.
- Amazon Elastic File System (EFS): Ideal for moving data to a managed file storage service.
- Amazon FSx for Windows File Server: Facilitates data transfers into a fully managed native Microsoft Windows file system.
<!-- pagebreak -->

#### Use Cases:

- **Disaster Recovery**: Quickly replicate data to AWS for backup purposes.
- **Data Migration**: Move data to the cloud as part of a cloud adoption strategy.
- **Data Processing**: Transfer data into AWS for processing with cloud-native services.

For the exam, remember if you see a need for _**`incremental`**_ data transfers, AWS DataSync might be the indicated service due to its efficiency in handling subsequent data updates after the initial full load.

---
