function change(id) {
  var element = document.getElementById(id);
  element.classList.remove("error");
}
const phoneInputField = document.getElementById("phone"); // Assuming your input field has id="phone"
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "in",
  separateDialCode: true,
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
});
const phone = phoneInput.getNumber();
document
  .getElementById("submit-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    var form = document.getElementById("contact-us");
    var formData = new FormData(form);

    // Assuming you have elements with IDs for displaying errors
    var firstNameElement = document.getElementById("firstname");
    var lastNameElement = document.getElementById("lastname");
    var phoneElement = document.getElementById("phone");
    var emailElement = document.getElementById("email");
    var messageElement = document.getElementById("message");

    var firstName = formData.get("firstname");
    var lastName = formData.get("lastname");
    var phone = phoneInput.getNumber();
    phone = phone.replace(/(^\+\d{2,3})(\d{1,15})/, "$1 $2");
    var email = formData.get("email");
    var message = formData.get("message");
    console.log(
      `Firstname: ${firstName}<br>Lastname:${lastName}<br>Phone:${phone}<br>Email: ${email}<br>Message: ${message}`
    );
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      emailElement.classList.add("error");
      email = "";
    } else {
      emailElement.classList.remove("error");
    }

    function toggleErrorClass(element, condition) {
      if (condition) {
        element.classList.add("error");
      }
      //   } else {
      //     element.classList.remove("error");
      //   }
    }

    // Check each field and toggle the "error" class as needed
    toggleErrorClass(firstNameElement, firstName === "");
    toggleErrorClass(lastNameElement, lastName === "");
    toggleErrorClass(phoneElement, phone === "");
    toggleErrorClass(emailElement, email === "");
    toggleErrorClass(messageElement, message === "");

    if (
      firstName != "" &&
      lastName != "" &&
      phone != "" &&
      email != "" &&
      message != ""
    ) {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "peaqlabs@gmail.com",
        Password: "650E17A3C1383639E46ADE0328B407D4071B",
        To: "prabhu@peaqlabs.com , support@peaqlabs.com",
        From: "peaqlabs@gmail.com",
        Subject: "New form submisssion detials",
        Body: `Firstname: ${firstName}<br>Lastname:${lastName}<br>Phone:${phone}<br>Email: ${email}<br>Message: ${message}`,
      })
        .then((message) => {
          console.log("Admin mail sent:", message);
        })
        .catch((error) => {
          console.error("Error sending admin email:", error);
        });
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "peaqlabs@gmail.com",
        Password: "650E17A3C1383639E46ADE0328B407D4071B",
        To: email,

        From: "peaqlabs@gmail.com",
        Subject: "Thankyou for showing interest on us!",
        Body: `<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#f9f9f9" id="bodyTable">
              <tbody>
              <tr>
                <td style="padding-top:20px;padding-bottom:20px" align="center" valign="top"></tr></td>
                  <tr>
                      <td style="padding-right:10px;padding-left:10px;" align="center" valign="top" id="bodyCell">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody" style="max-width:500px">
                              <tbody>
                                  <tr>
                                      <td align="center" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard" style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                                              <tbody>
                                                  <tr>
                                                      <td style="background-color:#2dcd73;font-size:1px;line-height:3px" class="topBorder" height="3">&nbsp;</td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding-bottom: 5px; padding-top:20px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="mainTitle">
                                  <img src="" style="width:50%; margin-botttom:22rem;"/><br><br><br><br>
                                                          <h2 class="text" style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">Dear ${firstName}</h2>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="subTitle">
                                                          <h4 class="text" style="font-family:Poppins,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:24px;text-transform:none;text-align:center;margin:0; padding :2rem;">Thank you for submitting the form. Your information has been received, and we'll get back to you soon!
          </h4>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="padding-left:20px;padding-right:20px" align="center" valign="top" class="containtTable ui-sortable">
                                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDescription" style="">
                                                              <tbody>
                                                                  <tr>
                                                                      <td style="padding-bottom: 20px;" align="center" valign="top" class="description">
                                                                          <p class="text" style="color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">Thank you for considering <a href="http://peaqlabs.com/" style="text-decoration: auto;font-size: 16px;font-weight: 600;color: #175CFF;">PeaqLabs</a>We're excited to bring your vision to life with our expertise in cutting-edge software development. Let's innovate together for success!</p>
                                                                          
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="font-size:1px;line-height:1px" height="20">&nbsp;</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                                              <tbody>
                                                  <tr>
                                                      <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperFooter" style="max-width:600px">
                              <tbody>
                                  <tr>
                                      <td align="center" valign="top">
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
                                              <tbody>
                                                  <tr>
                                                      <td style="padding: 0px 10px 10px;" align="center" valign="top" class="footerEmailInfo">
                                                          <p class="text" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0">If you have any questions please contact us <a href="mailto:support@peaqlabs.com" style="color:#bbb;text-decoration:underline" target="_blank">support@peaqlabs.com</a>
                                                              </p>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td style="font-size:1px;line-height:1px" height="30">&nbsp;</td>
                                  </tr>
                              </tbody>
                          </table>
                      </td>
                  </tr>
              </tbody>
          </table>`,
      })
        .then((message) => {
          console.log("Admin mail sent:", message);
          document.getElementById("contact-form").classList.add("d-none");
          document.getElementById("success").classList.remove("d-none");
        })
        .catch((error) => {
          console.error("Error sending admin email:", error);
        });
    }
  });
