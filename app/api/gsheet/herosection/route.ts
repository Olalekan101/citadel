import { getGoogleSheetsData } from "@/dbconnection/gsheet";
export const dynamic = "force-dynamic";

export async function GET() {
  const ranges = ["main!B2:B", "main!C9:E11", "main!E2:E4", "main!G2:G11"];

  const results = await Promise.all(
    ranges.map((range) => getGoogleSheetsData(range))
  );

  // Combine or process the results as needed
  const combinedResults = results.reduce(
    (acc, result: any) => acc?.concat(result),
    []
  );

  return Response.json(combinedResults);
}
