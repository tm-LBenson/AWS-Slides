---
layout: posts
title: 'CloudFront Overview'
section: Section-10
lesson: 3
---

### CloudFront Overview

#### What is a CDN?

A Content Delivery Network (CDN) like Amazon CloudFront is designed to deliver data, videos, applications, and APIs to customers worldwide with low latency and high transfer speeds. CDNs store cached versions of content in multiple geographical locations known as "edge locations."

<!-- pagebreak -->

#### DDoS Protection

CloudFront integrates with AWS Shield, a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield provides automatic inline mitigations that minimize application downtime and latency, ensuring that your applications remain available and performant.

<!-- pagebreak -->

#### What are Edge Locations?

Edge locations are sites deployed in major cities and highly populated areas around the world. They are used by CDN services to cache copies of content closer to users, reducing the distance data has to travel and improving access speed.

<!-- pagebreak -->

#### Point of Presence

Points of Presence (PoPs) are network sites, located around the world, where ISPs (Internet Service Providers) peer to exchange traffic at common points. Each PoP houses a collection of edge locations. CloudFront uses these PoPs to deliver content to users with lower latency.

<!-- pagebreak -->

#### OAC and S3 Integration

CloudFront can be integrated with AWS Origin Access Control (OAC) and Amazon S3 to securely serve private content through your CDN. OAC helps manage access to your S3 bucket content by requiring users to access your content through CloudFront URLs, enhancing security by preventing direct access to S3 content.

---

This lesson provides an essential understanding of Amazon CloudFront, focusing on its role as a CDN, its integration with AWS Shield for DDoS protection, the function of edge locations and Points of Presence, and how it integrates with AWS services like S3 for secure content delivery. This knowledge is important for deploying and managing fast and secure applications globally.

---
