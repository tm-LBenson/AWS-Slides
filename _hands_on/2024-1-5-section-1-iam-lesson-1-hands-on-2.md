---
layout: posts
title: 'Hands-On: Setting Up a Zero Cost Budget'
section: Section-1-IAM
lesson: 1
order: 2
---

### Hands-On: Setting Up a Zero Cost Budget

#### Navigate to the Billing Dashboard

In this exercise, you'll learn how to set up a budget to monitor your AWS spending and avoid unexpected charges.

- **Step 1**: Log in to the [AWS Management Console](https://aws.amazon.com/console/).
- **Step 2**: Navigate to the "Billing and Cost Management Dashboard".
  - You can find it by searching for "Billing" in the console search bar.

<!-- pagebreak -->

#### Create a Budget

Setting up a budget helps you keep track of your AWS costs and ensures you stay within your spending limits.

- **Step 1**: In the Billing Dashboard, click on "Budgets" in the left-hand menu.
- **Step 2**: Click on the "Create budget" button.
- **Step 3**: Choose the "Cost budget" option and click "Set your budget".

<!-- pagebreak -->

#### Configure Budget Details

Define the specifics of your budget, including the budgeted amount and alert settings.

- **Step 1**: Enter a name for your budget (e.g., "Zero Cost Budget").
- **Step 2**: Set the "Period" to "Monthly".
- **Step 3**: Under "Budgeted amount", enter `0` to create a zero-cost budget.
- **Step 4**: Choose whether you want to include refunds and credits in your budget amount.

<!-- pagebreak -->

#### Set Alerts and Notifications

Configure alerts to notify you when your spending approaches or exceeds the budgeted amount.

- **Step 1**: Scroll down to the "Configure Alerts" section.
- **Step 2**: Click "Add an alert threshold".
- **Step 3**: Set the alert threshold to `100%` of your budgeted amount.
- **Step 4**: Enter your email address to receive notifications.

<!-- pagebreak -->

#### Review and Create Budget

Complete the setup by reviewing your budget details and saving the configuration.

- **Step 1**: Review the summary of your budget settings.
- **Step 2**: Click "Create budget" to finalize the setup.

You now have a zero-cost budget set up to monitor your AWS spending, ensuring you don't incur unexpected charges while practicing and experimenting with AWS services.

---
