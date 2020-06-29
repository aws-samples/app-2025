// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const AWS = require('aws-sdk')
const faker = require('faker')
const { performance } = require('perf_hooks')
const eventbridge = new AWS.EventBridge()

exports.lambdaHandler = async () => {

    let tps = process.env.DESIRED_TPS

    for (let i = 0; i < 60; i++) {
        let entries = []
        let t1 = performance.now()

        // Original (fails when tps > 10)
        // for (let j = 0; j < tps; j++) {
        //     let transaction = generateTransaction("AnyCompany", "com.anycompany")
        //     entries.push(transaction)
        // }

        let batch
        for (let j = 0; j < tps; j++) {
            if (j % 10 == 0) batch = []

            let transaction = generateTransaction("AnyCompany", "com.anycompany")
            batch.push(transaction)

            if (j % 9 == 0 || j == tps - 1) entries.push(batch)
        }

        for (let i = 0; i < entries.length; i++) {
            let params = {
                Entries: entries[i],
            }

            const result = await eventbridge.putEvents(params).promise()
            if (result.FailedEntryCount > 0)
                return ({Error: "Failed to push event onto the event bus", Entry: params.Entries[0], Result: result})
                    
        }

        let t2 = performance.now()

        let sleepyTime = 1000 - (t2 - t1)
        
        if (i < 59) await sleep(sleepyTime)
    }
    
    return
};

function generateTransaction(eventbus, source) {
    return {
        EventBusName: eventbus,
        Source: source,
        Time: new Date().toISOString(),
        DetailType: "transaction-initiated",
        Detail: JSON.stringify({
            'customer-id': faker.random.uuid(),
            'initiated-at': new Date().toISOString(),
            'from-account': faker.finance.iban(),
            'to-account': faker.finance.iban(),
            'transaction-amount': faker.finance.amount(),
        }),
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
