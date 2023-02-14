import React from "react";

const Dropdown = () => {
  const options = [
    {
      label: "Callouts",

      value:
        "Defence is getting a dedicated place in the range of International seminars, conferences & summits. Our defence industry’s self-reliance is attracting people worldwide.No matter how prosperous society is Defence is essential for the maximum functioning & safety of our society. This summit is important for Atmanirbharta of India’s Defence Once India was Atmanirbhar, but we were not sufficient in terms of defence & our country was looted many times by invaders. Our country is on its tryst to regain its importance on the International stage & everyone has recognized this.",
    },

    {
      label: "Customer highlight",
      value:
        "If you use the website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer to prevent unauthorised access to your account. You agree to accept responsibility for all activities that occur under your account or password. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorised manner. ",
    },

    {
      label: "Risk",
      value:
        "We will do our utmost to ensure that availability of the website will be uninterrupted and that transmissions will be error-free. However, due to the nature of the Internet, this cannot be guaranteed. Also, your access to the website may also be occasionally suspended or restricted to allow for repairs, maintenance, or the introduction of new facilities or services at any time without prior notice. We will attempt to limit the frequency and duration of any such suspension or restriction.",
    },
    {
      label: "Issue",
      value:
        "Subject to your compliance with these Conditions of Use and payment of applicable fees, if any, Amazon Seller Services Private Limited grants you a limited licence to access and make personal use of this website, but not to download (other than page caching) or modify it, or any portion of it, except with express written consent of Amazon Seller Services Private Limited and / or its affiliates, as may be applicable",
    },
    {
      label: "Challenge",
      value:
        "This website or any portion of this website (including but not limited to any copyrighted material, trademarks, or other proprietary information) may not be reproduced, duplicated, copied, sold, resold, visited, distributed or otherwise exploited for any commercial purpose without express written consent of Amazon Seller Services Private Limited and / or its affiliates, as may be applicable.",
    },
  ];

  const [value, setValue] = React.useState(
    "Subject to your compliance with these Conditions of Use and payment"
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ margin: "40px" }}>
      <h2 style={{ padding: "10px 0px" }}> Marshal Insight Example</h2>
      <label>
        <b>Choose an Option </b>
        <select value={value} onChange={handleChange}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>

      <p style={{ margin: "15px" }}>{value}!</p>
    </div>
  );
};

export default Dropdown;
