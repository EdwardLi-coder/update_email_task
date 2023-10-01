import {SendMessageRequest, SQS} from '@aws-sdk/client-sqs';

const sqs = new SQS({region: 'us-west-2'});

async function sendToSQS(messageBody: any) {
    const queueUrl = 'https://sqs.us-west-2.amazonaws.com/973887463509/sendEmail';  // 请替换为你的 SQS 队列 URL

    const params: SendMessageRequest = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify(messageBody)
    };

    return sqs.sendMessage(params);
}

// Jest 测试部分
describe('sendToSQS function', () => {
    it('should send a real message to SQS', async () => {
        const message = {
            emailType: 'order-confirm',
            data: {
                orderNumber: "123456789",
                orderDate: "2023-09-18",
                shipTo: "John Doe, 123 Main St, City, Country",
                billTo: "Jane Smith, 456 Elm St, City, Country",
                products: [
                    {
                        thumbnail: "https://happin-public.s3.us-west-2.amazonaws.com/avatar/1000/e24ffcb73441ad27f86897179dfb2807/integration-test.webp",
                        name: "Product 1",
                        shipTime: "2 days",
                        price: 29.99,
                    },
                    {
                        thumbnail: "product2.jpg",
                        name: "Product 2",
                        shipTime: "3 days",
                        price: 39.99,
                    },
                ],
                shipping: "Standard Shipping",
                tax: 4.5, // 4.5% tax
                total: 55,
                logoURL: "company-logo.png",
                extraInfo: "Additional information about the order",
                orderURL: "https://example.com/orders/123456789",
                receiverEmail: "2023edwardll@gmail.com",
            },
        }
        const response = await sendToSQS(message);

        // 对 response 进行断言以确保消息已发送
        expect(response.MessageId).toBeDefined();
    });
});

