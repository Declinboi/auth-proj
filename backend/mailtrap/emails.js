import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, user, verificationToken) => {
  const recipients = [{ email }];

  try {
    const response = await mailClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ).replace("{username}", user),
      category: "Email Verification",
    });

    console.log("Email Sent Succesfully", response);
  } catch (err) {
    console.error(`Error sending verification`, err);
    throw new Error(`Error sending verification email: ${err} `);
  }
};
