---
title: 'Hands-On: AWS Budgets'
section: Section-16
lesson: 24
order: 1
---

### Setting Up an AWS Budget

This hands-on guide will walk you through the process of creating a cost budget in AWS to help manage your spending effectively.

<!-- pagebreak -->

#### Creating a Custom Budget

Step 1. Navigate to **AWS Budgets** in the AWS Management Console.
Step 2. Click on **Create Budget**.
Step 3. Select the **Cost budget** type to manage your spending limits.
Step 4. Enter a name for your budget, e.g., `EC2-Monthly-Budget`.

<!-- pagebreak -->

#### Configuring Budget Details

Step 5. Set the budget amount to **$10** to cap your monthly spending.
Step 6. Add a filter for AWS cost dimensions:

- Choose **Service** and set it to **EC2 - Other** to apply the budget specifically to miscellaneous EC2 costs.
  Step 7. Configure alert settings:
- Set a threshold of **80%**. This will trigger an alert when 80% of the budgeted amount is reached.
- Optionally, add an email notification to be alerted when the threshold is exceeded.

<!-- pagebreak -->

#### Review and Finish

Step 8. Review all settings to ensure they match your budgeting requirements.
Step 9. As this is a demo, click **Cancel** instead of finalizing the budget creation to avoid any unwanted charges.

This exercise demonstrates how to utilize AWS Budgets to monitor and control your AWS spending, ensuring you do not exceed your financial resources.

---
