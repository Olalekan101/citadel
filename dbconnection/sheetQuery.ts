import { getGoogleSheetsData } from "./gsheet";

export async function getHeroTitle() {
  const range = "main!A1:A";
  const data = await getGoogleSheetsData(range);
  return data;
}

export async function contactData() {
  const range = `main!D2:D4`;
  const data = await getGoogleSheetsData(range);
  const texts = data?.flatMap((x) => x.join(""));
  return texts;
}

export async function aboutUs() {
  const range = `main!B9:B12`;
  const data = await getGoogleSheetsData(range);
  const texts = data?.flatMap((x) => x.join(""));
  return texts;
}

export async function milestone() {
  const range = `main!C9:E11`;
  const data = await getGoogleSheetsData(range);
  const texts = data?.flatMap((x) => x.join(""));
  return texts;
}

export async function donationmsg() {
  const range = `main!B13`;
  const data = await getGoogleSheetsData(range);
  const texts = data?.flatMap((x) => x.join(""));
  return texts;
}

export async function howToHelp() {
  const range = `main!G9:G11`;
  const data = await getGoogleSheetsData(range);
  const texts = data?.flatMap((x) => x.join(""));
  return texts;
}
