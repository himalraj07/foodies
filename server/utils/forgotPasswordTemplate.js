const forgotPasswordTemplate = ({ name, otp }) => {
  return `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #f9fafc 0%, #e3e8ee 100%); padding: 48px 0; text-align: center;">
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; background: #fff; border-radius: 18px; box-shadow: 0 6px 32px rgba(44, 62, 80, 0.10); overflow: hidden; margin: 0 auto;">
      <tr>
        <td style="background: linear-gradient(90deg, #ffb347 0%, #ffcc33 100%); padding: 32px 40px 16px 40px; text-align: center;">
          <img src="https://img.icons8.com/color/96/lock--v1.png" alt="Reset Password" width="64" height="64" style="margin-bottom: 12px;" />
          <h1 style="color: #2d3748; font-size: 28px; margin: 0 0 8px 0; letter-spacing: 1px; text-align: center;">Reset Your Password</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: 28px 40px 16px 40px; text-align: center;">
          <p style="color: #4a5568; font-size: 17px; margin: 0 0 18px 0; text-align: center;">
            Hello <strong>${name}</strong>,
          </p>
          <p style="color: #4a5568; font-size: 15px; margin: 0 0 18px 0; text-align: center;">
            We received a request to reset your Foodies account password. Please use the OTP code below to continue:
          </p>
          <div style="background: linear-gradient(90deg, #f6e05e 0%, #ffe066 100%); color: #2d3748; font-size: 32px; letter-spacing: 10px; padding: 26px 0; text-align: center; font-weight: bold; border-radius: 10px; margin: 0 0 22px 0; border: 2px dashed #ecc94b; box-shadow: 0 2px 8px rgba(236,201,75,0.10);">
            ${otp}
          </div>
          <p style="color: #718096; font-size: 15px; margin: 0 0 16px 0; text-align: center;">
            <strong>Note:</strong> This OTP is valid for <b>1 hour</b>. Enter it on the Foodies website to reset your password.
          </p>
          <p style="color: #a0aec0; font-size: 13px; margin: 0 0 18px 0; text-align: center;">
            If you did not request this, please ignore this email or contact our support team immediately.
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding: 0 40px 32px 40px; text-align: center;">
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 18px 0 20px 0;">
          <p style="color: #4a5568; font-size: 15px; margin: 0; text-align: center;">
            Thank you,<br/>
            <span style="color: #3182ce; font-weight: 600;">The Foodies Team</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="background: #f7fafc; text-align: center; padding: 18px 40px 12px 40px; border-radius: 0 0 18px 18px;">
          <p style="color: #a0aec0; font-size: 12px; margin: 0; text-align: center;">
            &copy; ${new Date().getFullYear()} Foodies. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </div>
  `;
};

export default forgotPasswordTemplate;
