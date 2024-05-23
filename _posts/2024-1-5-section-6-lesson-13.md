---
layout: posts
title: 'Amazon DocumentDB Overview'
section: Section-7
lesson: 13
---

### Amazon DocumentDB Overview

Amazon DocumentDB is a fully managed NoSQL database service that is compatible with MongoDB. It allows users to operate and scale JSON workloads easily when leveraging a managed service environment. This overview will highlight the key aspects of DocumentDB, especially in comparison to other AWS services like Aurora and DynamoDB.

<!-- pagebreak -->

#### Key Features of DocumentDB

- **MongoDB Compatibility**: DocumentDB is designed to be compatible with MongoDB, meaning it supports the same MongoDB application code, drivers, and tools.

- **NoSQL Database**: It is a NoSQL database that uses JSON-like documents for storing data. This flexibility allows for varied and complex data structures to be used efficiently.

- **Fully Managed**: AWS manages the underlying infrastructure of DocumentDB, providing automated backups, patching, and scaling capabilities.

- **Deployment Concept Similar to Aurora**: Just like Amazon Aurora, DocumentDB is designed to offer high durability and availability. It replicates six copies of your data across three Availability Zones (AZs).

- **Storage and Scaling**: DocumentDB’s storage automatically grows in increments of 10GB up to a maximum of 64 TB without any impact on database performance. It can scale to accommodate millions of requests per second.

<!-- pagebreak -->

#### Use Cases and Exam Tips

- **When to Use DocumentDB**: Consider DocumentDB when you need to work with MongoDB workloads or require a NoSQL database that supports complex document models.

- **Exam Tips**:
  - **MongoDB Relation**: Remember, if you see a reference to MongoDB in an exam question, think of DocumentDB due to its compatibility.
  - **NoSQL on AWS**: For any queries related to NoSQL, consider both DynamoDB and DocumentDB. DynamoDB for key-value and DocumentDB for document-oriented database models.

DocumentDB provides an effective solution for managing NoSQL databases in AWS, particularly for users familiar with MongoDB looking for a scalable, durable, and secure managed database service.

---
