import React, { useState } from "react";

const CheckboxHandler = () => {
  const [preferences, setPreferences] = useState({
    emailNotification: false,
    smsNotification: false,
    pushNotification: false
  })

  const handleChange = e => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked
    })
  }
  return (
    <div>
      <h2>Select Preferences:</h2>
      <label>
        <input
          type="checkbox"
          name="emailNotification"
          onChange={handleChange}
        />
        Email Notifications
      </label>
      <br />
      <label>
        <input type="checkbox" name="smsNotification" onChange={handleChange} />
        SMS Notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="pushNotification"
          onChange={handleChange}
        />
        Push Notifications
      </label>
      <h3>Selected Preferences:</h3>
      <pre>{JSON.stringify(preferences, null, 2)}</pre>
    </div>
  );
};

export default CheckboxHandler;
