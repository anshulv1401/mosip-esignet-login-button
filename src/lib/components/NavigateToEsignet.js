import React from "react";

const NavigateToEsignet = ({
  esignet_url,
  authorizeEndpoint,
  nonce,
  state,
  client_id,
  redirect_uri,
  response_type,
  scope,
  acr_values,
  claims,
  display,
  prompt,
  max_age,
  claims_locales,
  label = "Sign In with e-Signet",
  logoPath = require("./esignet_logo.png"),
  logoAlt = "Esignet Logo",
}) => {
  let redirectURL = esignet_url;
  if (authorizeEndpoint) redirectURL += authorizeEndpoint;
  if (nonce) redirectURL += "?nonce="+ nonce;
  if (state) redirectURL += "&state="+ state;
  if (client_id) redirectURL += "&client_id="+ client_id;
  if (redirect_uri) redirectURL += "&redirect_uri="+ redirect_uri;
  if (response_type) redirectURL += "&response_type="+ response_type;
  if (scope) redirectURL += "&scope="+ scope;
  if (acr_values) redirectURL += "&acr_values="+ acr_values;
  if (claims) redirectURL += "&claims="+ claims;
  if (display) redirectURL += "&display="+ display;
  if (prompt) redirectURL += "&state="+ prompt;
  if (max_age) redirectURL += "&max_age="+ max_age;
  if (claims_locales) redirectURL += "&claims_locales="+ claims_locales;

  return (
    <a
      href={redirectURL}
      style={{
        position: "relative",
        width: "100%",
        borderWidth: "1px",
        borderColor: "rgb(203 213 225)",
        backgroundColor: "#f3f4f6",
        padding: "0.625rem 1.25rem",
        display: "inline-block",
        borderRadius: "0.375rem",
        textDecoration: "none",
        color: "black",
      }}
    >
      <span
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          fontWeight: "600",
          fontSize: "0.875rem",
          lineHeight: "1.25rem",
        }}
      >
        {label}
      </span>
      <img
        style={{
          position: "absolute",
          display: "inline-block",
          verticalAlign: "middle",
          width: "1.5rem",
          height: "1.5rem",
          right: "1.25rem",
        }}
        src={logoPath}
        alt={logoAlt}
      />
    </a>
  );
};
export default NavigateToEsignet;
