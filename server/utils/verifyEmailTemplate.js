const verifyEmailTemplate = ({ name, url }) => {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f8f9fa; padding: 40px 0; text-align: center;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 480px; background: #fff; border-radius: 10px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); overflow: hidden; margin: 0 auto;">
      <tr>
        <td style="padding: 32px 32px 16px 32px; text-align: center;">
          <img src="https://res.cloudinary.com/dbmugtoat/image/upload/v1754154761/logo_s6wnx0.png" alt="Foodies Logo" width="80" style="margin-bottom: 16px; border-radius: 50%;" />
          <h2 style="margin: 0 0 8px 0; color: #ff9800; font-weight: 700; text-align: center;">Welcome to Foodies!</h2>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 32px 16px 32px; text-align: center;">
          <p style="margin: 0 0 16px 0; color: #333; font-size: 16px; text-align: center;">Hi <strong>${name}</strong>,</p>
          <p style="margin: 0 0 24px 0; color: #555; font-size: 15px; text-align: center;">
            Thank you for registering with <strong>Foodies</strong>.<br>
            Please verify your email address to activate your account.
          </p>
          <a href="${url}" style="display: inline-block; background: linear-gradient(90deg, #ff9800 0%, #ffb74d 100%); color: #fff; text-decoration: none; font-weight: bold; padding: 14px 32px; border-radius: 6px; font-size: 16px; box-shadow: 0 2px 8px rgba(255,152,0,0.15); margin-bottom: 24px;">
            Verify Email
          </a>
          <p style="margin: 24px 0 0 0; color: #888; font-size: 13px; text-align: center;">
            If you did not create an account, please ignore this email.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 16px 32px 32px 32px; text-align: center; color: #bbb; font-size: 12px;">
          &copy; ${new Date().getFullYear()} Foodies. All rights reserved.
        </td>
      </tr>
    </table>
  </div>
  `;
};

export default verifyEmailTemplate;
