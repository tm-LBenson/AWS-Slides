---
layout: posts
title: 'DDoS Protection on AWS: Understanding AWS Shield and WAF'
section: Section-14
lesson: 2
---

### Overview of DDoS Protection on AWS

#### AWS Shield

AWS provides two levels of protection against Distributed Denial of Service (DDoS) attacks:

- **AWS Shield Standard**:

  - Automatically enabled for all AWS customers.
  - Provides protection against common and most frequently occurring network and transport layer DDoS attacks.
  - This protection is applied to all AWS services at no additional cost.

- **AWS Shield Advanced**:
  - Available for a fee.
  - Offers 24/7 enhanced DDoS protection.
  - Includes additional detection and mitigation capabilities, and access to the DDoS Response Team (DRT).

<!-- pagebreak -->

#### AWS Web Application Firewall (WAF)

- **Customizable web application firewall**:
  - Protects your web applications from common web exploits.
  - Allows you to set up rules to block, allow, or monitor (count) web requests based on conditions you define.
  - Helps ensure that your web applications are only accessible in ways that meet your requirements.

<!-- pagebreak -->

#### Integration with CloudFront and Route 53

- **Enhanced Protection**:
  - Combining AWS WAF with CloudFront and Route 53 enhances your application’s resilience against DDoS attacks.
  - CloudFront's distributed network can serve as a global shield, distributing and thus mitigating the impact of attacks.
  - Route 53 can effectively manage DNS traffic as part of a holistic defense strategy against DDoS attacks.

<!-- pagebreak -->

#### Auto Scaling for Resilience

- **Scalability**:
  - Auto Scaling ensures that your application can handle sudden and unexpected increases in traffic, which can be a symptom of a DDoS attack.
  - Automatically adjusts capacity to maintain steady and predictable performance at the lowest possible cost.

<!-- pagebreak -->

AWS's comprehensive DDoS protection involves multiple layers of safeguards, including AWS Shield, AWS WAF, CloudFront, and Route 53, coupled with the ability to auto-scale resources to mitigate and absorb potential attacks.
