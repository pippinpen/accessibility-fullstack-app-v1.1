import configJson from "./auth_config.json";

export function getConfig() {
  const audience =
    configJson.audience && configJson.audience !== "https://dev-kabxz7i1.us.auth0.com/api/v2/"
      ? configJson.audience
      : null;

  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
  };
}
