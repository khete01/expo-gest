export const fetchData = async () => {
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS;
  const spreadsheetId = "1k-8AWWMyUeuTB-dAld2nX-2l4itOSFn6UMVAoSXZjCs";
  const range = "Sheet1!A1:Z100";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.values;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return null;
  }
};
