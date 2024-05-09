---
layout: posts
title: 'Hands-On: Using CloudWatch Logs with AWS Lambda'
section: Section-11
lesson: 2
order: 1
---

### Hands-On: Monitoring AWS Lambda with CloudWatch Logs

This exercise demonstrates how to use Amazon CloudWatch Logs to monitor and debug an AWS Lambda function written in Node.js. You will create a Lambda function, execute it to generate logs, and then analyze these logs in CloudWatch.

<!-- pagebreak -->

#### Step 1: Create a New Lambda Function

- **Open AWS Lambda**:
  - Navigate to the AWS Management Console, go to Services, and select Lambda.
- **Create Function**:
  - Click on 'Create function'.
  - Choose 'Author from scratch'.
  - Enter a function name, e.g., `DemoLambda`.
  - For the runtime, select 'Node.js'.
  - Leave the default permissions and click 'Create function'.

<!-- pagebreak -->

#### Step 2: Test and View Logs

- **Initial Test**:
  - In the function's configuration page, locate the 'Test' button.
  - Create a new test event with any sample JSON data, name it `TestEvent`, and click 'Test'.
  - After execution, navigate to the 'Monitor' tab and click 'View logs in CloudWatch'.
  - Observe the generated logs in CloudWatch Logs.

<!-- pagebreak -->

#### Step 3: Modify and Monitor

- **Add Logging Statements**:
  - Edit your Lambda function's code to add `console.log` statements. For example:
    ```js
    exports.handler = async (event) => {
      console.log('Event: ', event);
      console.log('This is a log statement before processing.');
      // Your function logic here
      console.log('Processing complete.');
      return { statusCode: 200, body: JSON.stringify('Hello from Lambda!') };
    };
    ```
  - Save the changes and re-run the test. View the new logs in CloudWatch.

<!-- pagebreak -->

#### Step 4: Error Logging

- **Simulate an Error**:
  - Modify the Lambda function to throw an error. For example:
    ```js
    exports.handler = async (event) => {
      console.log('Event received:', event);
      // Comment out the return statement and introduce an error
      throw new Error('An error occurred: nooo');
    };
    ```
  - Save the changes, re-test the function, and observe the error logs in CloudWatch.

<!-- pagebreak -->

#### Step 5: Cleanup

- **Delete Resources**:
  - To avoid incurring charges, remember to delete the Lambda function after you have completed the hands-on exercise.
  - Navigate to the Lambda dashboard, select your function, and choose 'Actions' > 'Delete function'.
  - Confirm deletion.

This exercise helps you understand how AWS Lambda integrates with CloudWatch Logs for real-time monitoring and debugging, allowing you to track application behavior and respond to issues effectively.

---
