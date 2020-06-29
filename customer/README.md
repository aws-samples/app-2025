# Customer

This is the home of the _customer_ microservice for the App 2025 **AnyCompany** SaaS application.

## Deployment instructions

1. First, [deploy the infrastructure template][infrastructure] and copy the values of the _EventBusName_ and _PublishEventsFunctionArn_ CloudFormation outputs
1. Next, from this directory, run `sam deploy --guided`
    * At the **Stack Name** prompt, enter `app2025-customer`
    * At the **AWS Region** prompt, ensure you select the same region where you deployed the _infrastructure_ stack.
    * When prompted for a value for the _EventBusName_ parameter, use the value of the _EventBusName_ CloudFormation output from step one. This defaults to _AnyCompany_ for both stacks.
    * When prompted for a value for the _PublishEventsFunctionArn_ parameter, use the value of the _PublishEventsFunctionArn_ CloudFormation output from step one.
1. Record the values of the _AccountQueueArn_ and _StateMachineArn_ CloudFormation outputs to use in deploying the [simulator app][simulator]. 

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0

[infrastructure]: ../infrastructure/
[simulator]: ../simulator/
