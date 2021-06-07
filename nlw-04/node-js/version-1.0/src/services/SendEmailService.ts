/* eslint-disable no-console */
import nodemailer, { Transporter } from 'nodemailer';

class SendEmailService {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  async execute(to: string, subject: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      to,
      subject,
      html: body,
      from: 'NPS <noreplay@nps.com.br>',
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL %s', nodemailer.getTestMessageUrl(message));
  }
}

export default new SendEmailService();
