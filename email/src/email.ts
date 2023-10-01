import SES from 'aws-sdk/clients/ses';
import {toHtml} from "./templates/order-result";

const ses = new SES({region: 'us-west-2'}); // 初始化 SES 客户端，你可以根据需要更改区域

export const sendEmailHandler = async (event: any): Promise<void> => {

    const sourceEmail = process.env.SOURCE_EMAIL
    for (const record of event.Records) {
        const messageBody = JSON.parse(record.body);
        try {
            const generatedEmail = toHtml(messageBody.data);
            const params: SES.SendEmailRequest = {
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

            const result = await ses.sendEmail(params).promise();
            console.log("result:" + JSON.stringify(result));

        } catch (err) {
            console.error('Error:', err);
        }
    }
};
