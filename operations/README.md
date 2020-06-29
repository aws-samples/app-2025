# Operations

This is the home of the _operations_ microservice for the App 2025 **AnyCompany** SaaS application. This demonstrates the "buffered fanout" pattern from [the fourth episode][fourth-episode], "Simplifying your application with Amazon SNS and Amazon SQS."

## Deployment instructions

1. First, [deploy the infrastructure template][infrastructure] and copy the value of the _EventBusName_ CloudFormation output
1. Next, from this directory, run `sam deploy --guided`
    * At the **Stack Name** prompt, enter `app2025-operations`
    * At the **AWS Region** prompt, ensure you select the same region where you deployed the _infrastructure_ stack.
    * When prompted for a value for the _EventBusName_ parameter, use the value of the _EventBusName_ CloudFormation output from step one. This defaults to _AnyCompany_ for both stacks.

Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0

[fourth-episode]: https://youtu.be/krBKiABQJAk
[infrastructure]: ../infrastructure/
