"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const sqs = new aws_sdk_1.SQS({ region: 'us-west-2' });
function sendToSQS(messageBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const queueUrl = 'https://sqs.us-west-2.amazonaws.com/973887463509/sendEmail'; // 请替换为你的 SQS 队列 URL
        const params = {
            QueueUrl: queueUrl,
            MessageBody: JSON.stringify(messageBody)
        };
        return sqs.sendMessage(params).promise();
    });
}
// Jest 测试部分
describe('sendToSQS function', () => {
    it('should send a real message to SQS', () => __awaiter(void 0, void 0, void 0, function* () {
        const message = {
            emailType: 'order-confirm',
            data: {
                shipTo: 'Smile Davie 600 Monogamy StSan Francisco, CA. 94111',
                billTo: 'Smile Davie 600 Monogamy StSan Francisco, CA. 94111',
                orderNo: '#650050',
                orderDate: '10/08/2024',
                order: [{
                        img: 'https://picx.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_720w.jpg?source=172ae18b',
                        title: 'Checked  A Frame Mini Dress Expected to ship by Sep 11',
                        qt: '1',
                        money: '39.99'
                    }, {
                        img: 'https://picx.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_720w.jpg?source=172ae18b',
                        title: 'Checked  A Frame Mini Dress Expected to ship by Sep 11',
                        qt: '1',
                        money: '39.99'
                    }, {
                        img: 'https://picx.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_720w.jpg?source=172ae18b',
                        title: 'Checked  A Frame Mini Dress Expected to ship by Sep 11',
                        qt: '1',
                        money: '39.99'
                    }],
                shipping: 'Free',
                tax: '6.98',
                total: '129.52',
                extraInfo: 'You can track your order with the link below',
                orderURL: 'https://www.amazon.com/gp/css/summary/edit.html?orderID=114-1234567-1234567',
                logoURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/Amazon_logo_RGB.jpg',
                receiverEmail: 'a602281467@163.com'
            },
        };
        const response = yield sendToSQS(message);
        // 对 response 进行断言以确保消息已发送
        expect(response.MessageId).toBeDefined();
    }));
});
