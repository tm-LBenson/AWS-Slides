---
layout: posts
title: 'Elastic Load Balancing (ELB) and the Four Types of Load Balancers in AWS'
section: Section-4
lesson: 2
---

### Elastic Load Balancing (ELB) and the Four Types of Load Balancers in AWS

Elastic Load Balancing (ELB) is a key service provided by Amazon Web Services (AWS) that automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, or IP addresses. Load balancers improve the availability, scalability, and reliability of applications by balancing traffic and reducing the risk of overload on individual resources.

AWS offers four types of load balancers, each designed for specific use cases. Here's an overview of ELB and the four types of load balancers in AWS:

<!-- pagebreak -->

#### What is Elastic Load Balancing?

- ELB automatically distributes incoming traffic across multiple targets, providing fault tolerance and high availability.
- It can scale with your incoming traffic, ensuring applications remain responsive even during traffic spikes.
- ELB supports health checks to monitor the status of targets, automatically routing traffic to healthy instances.

<!-- pagebreak -->

#### The Four Types of Load Balancers in AWS

1. **Application Load Balancer (ALB)**

   - Designed for HTTP/HTTPS traffic, ALB operates at the application layer (Layer 7) of the OSI model.
   - It supports content-based routing, allowing you to route traffic based on URL paths, HTTP headers, or hostnames.
   - ALB is ideal for web applications, microservices, and containers, offering features like sticky sessions and WebSocket support.

2. **Network Load Balancer (NLB)**

   - Operates at the transport layer (Layer 4), focusing on TCP and UDP traffic.
   - NLB is designed for high performance and low latency, making it suitable for applications requiring high throughput and low overhead.
   - It can handle millions of requests per second and supports static IP addresses, allowing clients to connect to a consistent IP.

3. **Gateway Load Balancer (GLB)**

   - Aimed at managing virtual appliances, such as firewalls, intrusion detection/prevention systems, and custom security solutions.
   - GLB operates at the network layer, allowing you to insert virtual appliances into your traffic flow to apply security policies or network processing.
   - It provides scaling and redundancy for virtual appliances and allows integration with third-party vendors.

4. **Classic Load Balancer (CLB)**
   - The original load balancer offered by AWS, CLB supports both HTTP/HTTPS and TCP/SSL traffic.
   - While still supported, it has fewer features compared to ALB and NLB and is considered a legacy option.
   - CLB operates at both Layer 4 and Layer 7 but doesn't offer advanced routing features found in ALB or NLB.

<!-- pagebreak -->

#### Choosing the Right Load Balancer

- **Application Load Balancer (ALB)**

  - **OSI Layer:** Operates at Layer 7 (Application layer).
  - **Functionality:** Best suited for handling advanced traffic routing methods to web applications. Routes traffic based on content of the request, including URLs, headers, and HTTP methods.

- **Network Load Balancer (NLB)**

  - **OSI Layer:** Operates at Layer 4 (Transport layer).
  - **Functionality:** Optimized for low latency and high-throughput scenarios where TCP or UDP traffic needs to be efficiently distributed among multiple backend servers.

- **Gateway Load Balancer (GLB)**

  - **OSI Layer:** Typically operates at Layer 3 (Network layer).
  - **Functionality:** Designed to make it easy to deploy, scale, and manage virtual appliances, such as firewalls and intrusion detection systems.

- **Classic Load Balancer (CLB)**
  - Retired in 2023 and no longer the recommended option, but it provided basic load balancing capabilities for applications needing simple routing mechanisms.

Elastic Load Balancing and its four types of load balancers offer flexible solutions for managing traffic, ensuring high availability, scalability, and resilience in AWS applications.

---
