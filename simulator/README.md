# Simulator

This is the home of the _simulator_ app for the App 2025 **AnyCompany** SaaS application. This simulates the effect of a human operator completing a task which and sending a _SendTaskSuccess_ notification back to a waiting [AWS Step Functions][step-functions] workflow.

## Deployment instructions

1. First, [deploy the customer microservice][customer] and copy the values of the _AccountQueueArn_ and _StateMachineArn_ CloudFormation outputs
1. Then, build this app by running `sam build`
1. Next, from this directory, run `sam deploy --guided`
    * At the **Stack Name** prompt, enter `app2025-simulator`
    * At the **AWS Region** prompt, ensure you select the same region where you deployed the _infrastructure_ stack and the _customer_ microservice.
    * When prompted for a value for the _AccountQueueArn_ parameter, use the value of the _AccountQueueArn_ CloudFormation output from step one.
    * When prompted for a value for the _StateMachineArn_ parameter, use the value of the _StateMachineArn_ CloudFormation output from step one.

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0

[customer]: ../customer/
[step-functions]: https://aws.amazon.com/step-functions/
