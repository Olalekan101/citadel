import { getGoogleSheetsData } from "@/dbconnection/gsheet";

export async function GET() {
  const range = "main!A1:A";

  const res = await getGoogleSheetsData(range);

  return Response.json(res);
}
