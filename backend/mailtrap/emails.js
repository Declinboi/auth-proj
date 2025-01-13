import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import { mailClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, name, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ).replace("{username}", name),

      category: "Email Verification",
    });

    console.log("Email Sent Succesfully", response);
  } catch (err) {
    console.error(`Error sending verification`, err);
    throw new Error(`Error sending verification email: ${err} `);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipient,
      template_uuid: "25527b33-d365-4e9f-ba49-d3c7b240a373",
      template_variables: {
        company_info_name: "Jacobs Tech",
        name: name,
      },
    });
    console.log("Welcome email Sent Succesfully", response);
  } catch (err) {
    console.error(`Error sending welcome`, err);
    throw new Error(`Error sending welcome email: ${err} `);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password reset",
    });
  } catch (err) {
    console.error(`Error sending reset email`, err);
    throw new Error(`Error sending email: ${err} `);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
category:"reset success"

    });

    console.log("Password reset email sent successfully", response);
  } catch (err) {
    console.error(`Error sending email`, err);
    throw new Error(`Error sending email: ${err} `);
  }
};
