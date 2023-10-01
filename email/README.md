# Project Overview

This project is designed to process SQS messages and send emails through SES (Simple Email Service).
## Directory Structure
- [Project Structure](https://chat.openai.com/c/b5399895-affa-449a-9d42-afdb5c4f4526#project-structure)
- [Configuration and Deployment](https://chat.openai.com/c/b5399895-affa-449a-9d42-afdb5c4f4526#configuration-and-deployment)
- [Lambda Function Details](https://chat.openai.com/c/b5399895-affa-449a-9d42-afdb5c4f4526#lambda-function-details)
- [Testing](https://chat.openai.com/c/b5399895-affa-449a-9d42-afdb5c4f4526#testing)
## Project Structure

```plaintext

email/
├── template.yaml   # SAM template file
└── src/
    └── email.ts    # Lambda function source code
```


### template.yaml

This file is the AWS SAM (Serverless Application Model) template file used to define AWS resources and configurations for the project.
#### Parameters
- `Stage`: Deployment stage (e.g., prod, dev).
- `SourceEmailDev`: Sender's email for the development environment.
- `SourceEmailProd`: Sender's email for the production environment.
- `SQSQueueArn`: ARN of an existing SQS queue.
#### Conditions
- `IsProd`: Determines whether it's a production environment.
#### Resources
- `EmailQueue`: Defines a new SQS queue.
- `EmailSenderFunction`: Defines a Lambda function responsible for processing SQS messages and sending emails through SES.
#### Outputs
- `EmailQueueUrl`: URL of the newly created SQS queue.
### src/email.ts

This file contains the source code for the Lambda function, which reads messages from the SQS queue, renders email templates, and sends emails through SES.
#### sendEmailHandler

The main function that handles events. It processes messages from SQS and sends emails.
## Configuration and Deployment
1. Ensure you have configured the AWS CLI and installed SAM CLI.
2. To deploy the project, run the following commands in the project's root directory:

```sh

npm run sam-build

sam deploy --guided
```


## Lambda Function Details

The `sendEmailHandler` function performs the following tasks:
1. Reads the source email address from environment variables.
2. Reads and parses SQS messages.
3. Reads and renders email templates using EJS.
4. Sends emails through AWS SES.
5. Records the result if the sending is successful or logs an error if it fails.
## Testing

The project includes unit tests and integration tests to ensure code robustness and reliability.
### Unit Tests

Jest is used as the testing framework. Before testing, make sure you have installed all dependencies.

```sh

npm install
```



The code snippet above shows an example unit test that tests whether the `sendToSQS` function can successfully send a message to the SQS queue.
### Running Tests

To run tests, open a terminal in the project's root directory and run the following command:

```sh

npm run test
```



Jest will automatically find all `*.test.ts` files and run them.
### Integration Tests

Integration tests involve testing the entire system, including Lambda functions and SQS queues.
#### sendToSQS Function

The `sendToSQS` function is part of the integration tests, and it sends a message to the SQS queue. In this test, we create an order message containing order details and a list of products.

In the Jest test, we use the `sendToSQS` function to send an actual message to the SQS queue, and then we check the response to ensure that the message ID is defined, indicating that the message was successfully sent.
#### Email Templates

Ensuring that your email templates render correctly is also an important part of testing. You can create a separate test to verify that the EJS template correctly renders a message body.
### Test Data

Test data is hardcoded in the test files. It includes order information such as delivery address, billing address, order number, order date, and order details.
