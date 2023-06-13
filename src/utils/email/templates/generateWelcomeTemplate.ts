const generateWelcomeTemplate = (fullName: String, email: String, password: String) => `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <title>Welcome to CodeAcademy</title>
    <meta name="description" content="New Account Email Template." />
    <style type="text/css">
      a:hover {
        text-decoration: underline !important;
      }
    </style>
  </head>

  <body
    marginheight="0"
    topmargin="0"
    marginwidth="0"
    style="margin: 0px; background-color: #f6f6fa"
    leftmargin="0"
  >
    <!-- 100% body table -->
    <table
      cellspacing="0"
      border="0"
      cellpadding="0"
      width="100%"
      bgcolor="#F6F6FA"
      style="
        @import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700);
        font-family: 'Open Sans', sans-serif;
      "
    >
      <tr>
        <td>
          <table
            style="background-color: #f6f6fa; max-width: 670px; margin: 0 auto"
            width="100%"
            border="0"
            align="center"
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <a href="" title="logo" target="_blank">
                  <img
                    width="120"
                    src="https://cdn.discordapp.com/attachments/1084099509363155024/1117909128535359488/Dark_Neutral_Modern_Monogram_Creative_Business_Logo.png"
                    title="logo"
                    alt="logo"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td>
                <table
                  width="95%"
                  border="0"
                  align="center"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    max-width: 670px;
                    background: #fff;
                    border-radius: 3px;
                    text-align: center;
                    -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                    box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
                  "
                >
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                  <tr>
                    <td style="padding: 0 35px">
                      <h1
                        style="
                          color: #1e1e2d;
                          font-weight: 500;
                          margin: 0;
                          font-size: 32px;
                          font-family: 'Rubik', sans-serif;
                        "
                      >
                        Congratulations 🎉 <h3 style="padding: 10px 75px; color: blueviolet; margin: 20px auto; width: fit-content; border-radius: 8px; font-size: 1.3rem; text-transform: uppercase;">${fullName}<h3>
                      </h1>
                      <p
                        style="
                          font-size: 15px;
                          color: #455056;
                          margin: 8px 0 0;
                          line-height: 24px;
                        "
                      >
                        Your account has been created on the CodeAcademy
                        community.<br />
                        Below are your system generated credentials.
                        <br /><strong
                          >Please change the password and immediately after
                          login</strong
                        >.
                      </p>
                      <span
                        style="
                          display: inline-block;
                          vertical-align: middle;
                          margin: 29px 0 26px;
                          border-bottom: 1px solid #cecece;
                          width: 100px;
                        "
                      ></span>
                      <p
                        style="
                          color: #455056;
                          font-size: 18px;
                          line-height: 20px;
                          margin: auto;
                          font-weight: 500;
                          width: fit-content;
                          text-align: left;
                        "
                      >
                        <strong
                          style="
                               color: #4CAF50;
                               font-weight: 800;
                               font-family: math;
                          "
                          >Email :</strong
                        >
                        <span style="color: #53479f;font-size: 1rem">${email}</span>
                        <br>
                        <strong
                          style="
                               color: #4CAF50;
                               font-weight: 800;
                               font-family: math;
                          "
                          >Password :</strong
                        >
                        <span style="color: #53479f;font-size: 1rem">${password}</span>
                      </p>

                      <a
                        href="login.html"
                        style="
                          background: #53479f;
                          text-decoration: none !important;
                          display: inline-block;
                          font-weight: 500;
                          margin-top: 24px;
                          color: #fff;
                          text-transform: uppercase;
                          font-size: 14px;
                          padding: 10px 24px;
                          display: inline-block;
                          border-radius: 50px;
                        "
                        >Login to your Account</a
                      >
                    </td>
                  </tr>
                  <tr>
                    <td style="height: 40px">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="height: 20px">&nbsp;</td>
            </tr>
            <tr>
              <td style="text-align: center">
                <p
                  style="
                    font-size: 14px;
                    color: rgba(69, 80, 86, 0.7411764705882353);
                    line-height: 18px;
                    margin: 0 0 0;
                  "
                >
                  &copy; <strong>www.codeAcademy.com</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style="height: 80px">&nbsp;</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--/100% body table-->
  </body>
</html>

    `;

export default generateWelcomeTemplate;