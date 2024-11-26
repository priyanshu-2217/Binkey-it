const verifyEmailTemplate = (name, url) => {
  return `
    <p>Dear ${name},</p>
    <p>Thank you for registering with Binkeyit.</p>
    <a 
      href="${url}" 
      style="
        color: white;
        background-color: #4CAF50;
        border: none;
        padding: 10px 20px;
        text-decoration: none;
        display: inline-block;
      "
    >
      Verify Email
    </a>
  `;
};

export default verifyEmailTemplate;
