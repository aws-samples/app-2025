# Billing

This is the home of the _billing_ microservice for the App 2025 **AnyCompany** SaaS application.

## Deployment instructions

1. First, [deploy the infrastructure template][infrastructure] and copy the values of the _EventBusName_ and _PublishEventsFunctionArn_ CloudFormation outputs
1. Next, from this directory, run `sam deploy --guided`
    * At the **Stack Name** prompt, enter `app2025-billing`
    * At the **AWS Region** prompt, ensure you select the same region where you deployed the _infrastructure_ stack.
    * When prompted for a value for the _EventBusName_ parameter, use the value of the _EventBusName_ CloudFormation output from step one. This defaults to _AnyCompany_ for both stacks.
    * When prompted for a value for the _PublishEventsFunctionArn_ parameter, use the value of the _PublishEventsFunctionArn_ CloudFormation output from step one.

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0

[infrastructure]: ../infrastructure/
