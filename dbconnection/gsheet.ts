import { auth, sheets } from "@googleapis/sheets";

export async function getGoogleSheetsData(range: string) {
  const authX = await auth.getClient({
    projectId: "ttcitadel",
    credentials: {
      type: "service_account",
      private_key: process.env.GSHEET_PRIVATE_KEY,
      client_email: process.env.GSHEET_CLIENT_EMAIL,
      client_id: process.env.GSHEET_CLIENT_ID,
      token_url: "https://oauth2.googleapis.com/token",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheetsX = sheets({ version: "v4", auth: authX });

  const data = await sheetsX.spreadsheets.values.get({
    spreadsheetId: process.env.GSHEET_ID,
    range: range,
  });

  return data.data.values;
}
