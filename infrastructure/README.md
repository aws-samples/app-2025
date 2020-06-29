# Infrastructure

This is the home of the underlying infrastructure for the App 2025 **AnyCompany** SaaS application. This infrastructure creates one [Amazon EventBridge] custom event bus and an [AWS Lambda] function that allows [AWS Step Functions] workflows to place events onto the bus.

## Deployment instructions

1. First, build the app.
    ```bash
    sam build
    ```
1. Next, deploy the app using a guided deployment.
    ```bash
    sam deploy --guided
    ```
    * At the **Stack Name** prompt, enter `app2025-infrastructure`
    
1. Record the values of the _EventBusName_ and _PublishEventsFunctionArn_ CloudFormation outputs to use in deploying the [customer][customer] and [operations][operations] microservices.

## Placing events onto the bus

From this directory:

### Episode 2 events

```bash
aws events put-events --entries file://events/episode2.json
```
This places five sample events of various types from various sources onto the custom event bus you created.

### Episode 3 events

```bash
aws events put-events --entries file://events/episode2.json
```

This places a single sample _account-created_ event onto the custom event bus you created.

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0

[customer]: ../customer
[operations]: ../operations
