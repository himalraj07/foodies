const verifyEmailTemplate = ({ name, url }) => {
  return `
<p>Dear ${name}</p>    
<p>Thank you for registering Foodies.</p>   
<a href=${url} style="color:black; background:orange; margin-top:10px; padding:20px; display:block; text-decoration:none; font-weight:bold; width:fit-content; border-radius:5px;">
    Verify Email
</a>
`;
};

export default verifyEmailTemplate;
