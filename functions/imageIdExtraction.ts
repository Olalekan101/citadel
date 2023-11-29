export default function extractFileIdFromUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(/\/d\/(.*?)\//);
  const fileID = match && match[1] ? match[1] : null;
  const imageURL = `https://drive.google.com/uc?id=${fileID}`;
  return imageURL;
}
