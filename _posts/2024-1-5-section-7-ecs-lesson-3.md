---
layout: posts
title: 'Understanding Serverless Computing'
section: Section-7-ECS
lesson: 3
---

### Understanding Serverless Computing

Serverless computing is a cloud-computing execution model where the cloud provider fully manages the servers. The focus for developers shifts from server management to just writing code that serves business purposes. This lesson aims to demystify what serverless means and identify its implications for development and deployment of applications.

<!-- pagebreak -->

#### What Does Serverless Mean?

- **Server Management**: In serverless computing, the responsibility of managing servers, scaling, and server maintenance is handled by the cloud provider. Developers deploy applications without concerning themselves with the underlying infrastructure.

- **Evolution**: Initially, serverless was synonymous with Function-as-a-Service (FaaS), where applications are broken down into smaller, event-triggered pieces. However, it now encompasses a broader range of fully managed services including databases, messaging systems, and storage solutions.

- **Misconception**: The term "serverless" does not imply that there are no servers involved. Rather, it means that developers are not directly involved in managing the servers.

<!-- pagebreak -->

#### Serverless Services in AWS

Here are a few AWS services that embody the serverless model, which we have already encountered in this course:

- **Amazon S3**: An object storage service that offers industry-leading scalability, data availability, security, and performance.

- **Amazon DynamoDB**: A key-value and document database that delivers single-digit millisecond performance at any scale.

- **AWS Fargate**: A serverless compute engine for containers that allows you to run containers without managing servers or clusters.

- **AWS Lambda**: To be discussed further, Lambda allows you to run code for virtually any type of application or backend service with zero administration.

<!-- pagebreak -->

#### Benefits of Going Serverless

- **Cost Efficiency**: You only pay for the compute time you consume, which can lead to significant cost savings.

- **Scalability**: Automatically scales your application by adjusting its capacity through toggling the units of consumption rather than units of individual servers.

- **Reduced Operational Overhead**: Removes the need to manage, provision, or upgrade servers, as well as the need to configure software, deploy patches, or monitor server health.

<!-- pagebreak -->

#### Conclusion

Serverless computing represents a significant shift in how developers deploy and manage applications. It empowers developers to focus on writing code that creates value rather than worrying about the infrastructure needed to run it. As we delve deeper into AWS services like Lambda, we'll explore how serverless computing enables rapid deployment and innovation.

---
