---
layout: posts
title: 'Hands-On: Creating a DynamoDB Table'
section: Section-6-DB
lesson: 7
order: 2
---

### Hands-On: Creating a DynamoDB Table

This hands-on guide will walk you through creating a basic DynamoDB table, which will help you understand the simplicity and serverless nature of DynamoDB, an essential aspect for the AWS Cloud Practitioner exam.

<!-- pagebreak -->

#### Step 1: Navigate to DynamoDB

- Go to the AWS Management Console.
- Select "Services" and then choose "DynamoDB."

<!-- pagebreak -->

#### Step 2: Create a Table

- Click on "Create table."
- **Table Name**: Enter any name you prefer for the table.
- **Partition Key**: Set `user_id` as the partition key. This key uniquely identifies each item in the table and is used by DynamoDB to distribute data across hosts.
- Leave other settings at their default for this exercise. This includes skipping the sort key, which is optional and not needed for this basic example.

<!-- pagebreak -->

#### Step 3: Table Creation

- Click "Create table." Note that in DynamoDB, you create a table directly without the need to create a database first. This highlights the serverless aspect of DynamoDB where infrastructure management is handled by AWS.

<!-- pagebreak -->

#### Step 4: View Items in the Table

- Once the table is created, click "View items."
- **Add Item**: Create a new item in your table:
  - Set `user_id` to `1234`.
  - Click "Add attribute" and enter:
    - `first_name`: Set to your first name.
    - `last_name`: Set to your last name.
    - `favorite_number`: Set to `42`.

<!-- pagebreak -->

#### Step 5: Create a Varied Item

- **Create Another Item**: This time, only include `user_id` and `first_name`.
  - Notice how DynamoDB does not require a uniform schema across all items. Each item can have a unique set of attributes, unlike traditional relational databases where each row in a table must have the same columns.

<!-- pagebreak -->

#### Conclusion

This exercise demonstrates the flexibility and ease of use of DynamoDB. Items in a DynamoDB table do not need to have the same attributes, which provides great flexibility but also requires careful design since DynamoDB does not support joining tables. This basic understanding is sufficient for the AWS Cloud Practitioner exam. Pursuing deeper knowledge and understanding, such as indexing and more complex data operations, would be necessary for the AWS Developer Associate certification.

---
