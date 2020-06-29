// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk')
const eventbridge = new AWS.EventBridge()

exports.lambdaHandler = async (event, context) => {
    const params = {
        Entries: [
            {
                EventBusName: event.EventBusName,
                Source: event.Source,
                DetailType: event.DetailType,
                Time: new Date(),

                // Main event body
                Detail: JSON.stringify(event.Detail)
            }
        ]
    }

    console.log(params)

    const result = await eventbridge.putEvents(params).promise()
    if (result.FailedEntryCount > 0)
        return ({Error: "Failed to push event onto the event bus", Entry: params.Entries[0], Result: result})
    else
        return ({Entry: params.Entries[0], EventId: result.Entries[0].EventId})
};
