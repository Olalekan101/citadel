import React from "react";
import { getGoogleSheetsData } from "../../dbconnection/gsheet";
import google from "@googleapis/sheets";

export default async function AboutUs() {
  const range = `main!A2:A`;
  const posts = await getGoogleSheetsData(range);
  console.log(posts);

  return <div>About Us</div>;
}
