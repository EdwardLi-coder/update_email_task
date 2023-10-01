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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailHandler = void 0;
const ses_1 = __importDefault(require("aws-sdk/clients/ses"));
const order_result_1 = require("./templates/order-result");
const ses = new ses_1.default({ region: 'us-west-2' }); // 初始化 SES 客户端，你可以根据需要更改区域
const sendEmailHandler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const sourceEmail = process.env.SOURCE_EMAIL;
    for (const record of event.Records) {
        const messageBody = JSON.parse(record.body);
        try {
            const generatedEmail = (0, order_result_1.toHtml)(messageBody.data);
            const params = {
                Destination: {
                    ToAddresses: messageBody.data.receiverEmail.split(','),
                },
                Message: {
                    Body: {
                        Html: {
                            Charset: 'UTF-8',
                            Data: generatedEmail.html,
                        }
                    },
                    Subject: {
                        Charset: 'UTF-8',
                        Data: messageBody.emailType,
                    }
                },
                Source: sourceEmail == null ? '' : sourceEmail
            };
            const result = yield ses.sendEmail(params).promise();
            console.log("result:" + JSON.stringify(result));
        }
        catch (err) {
            console.error('Error:', err);
        }
    }
});
exports.sendEmailHandler = sendEmailHandler;
