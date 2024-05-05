---
layout: posts
title: 'Hands-On: Amazon RDS'
section: Section-6-DB
lesson: 3
order: 1
---

### Hands-On: Amazon RDS

This hands-on guide will walk you through creating an Amazon RDS instance using MySQL, exploring the various settings and configurations available, and how to manage snapshots for backups and restoration.

<!-- pagebreak -->

#### Step 1: Navigate to RDS

- Go to Services in the AWS Management Console and click on "RDS".

<!-- pagebreak -->

#### Step 2: Create Database

- In the RDS dashboard, click on "Databases" from the left menu.
- Click "Create Database".
- Select "Standard Create" and choose MySQL for the database engine.
- Opt for the default settings, ensuring you're using the latest version available.

<!-- pagebreak -->

#### Step 3: Configure Database

- Select the "Free tier" template, which pre-fills several settings.
- Set a password for the database root account.
- Note that the instance class is fixed to a free tier eligible type due to the chosen template.
- Review the storage options, but keep them unchanged for now.

<!-- pagebreak -->

#### Step 4: Set Connectivity Options

- Under Connectivity:
  - Set "Compute Resource" to "Don't connect to an EC2 instance."
  - Choose "IPV4" for the network type.
  - Enable public access by setting it to "Yes".
- Create a new security group, giving it a name and setting the Availability Zone to "No Preference".
- Maintain password authentication as the default method.

<!-- pagebreak -->

#### Step 5: Create Database

- Click "Create Database" and review the summary provided by AWS.
- Note the details provided in the summary, especially the database endpoint and port, which are crucial for connectivity.

<!-- pagebreak -->

#### Step 6: Manage Snapshots

- Once the database is active and available, go to "Actions" and select "Take snapshot".
- Give the snapshot a name and wait for the process to complete.
- To restore from the snapshot, click on "Actions" and choose "Restore snapshot".
- This allows you to create a new database instance from the snapshot, where you can alter settings such as scaling up the database size while keeping the same data.
- Explore additional snapshot settings to understand more about backup and restoration options.

This hands-on experience not only guides you through setting up an Amazon RDS instance but also helps you understand the critical management features such as snapshots, which are essential for data integrity and disaster recovery.

---
