const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export type DownloadResponse = {
  title: string;
  thumbnail: string;
  download: string;
  error?: string;
};

export async function fetchDownload(
  url: string
): Promise<DownloadResponse> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });

    if (!res.ok) {
      throw new Error("Failed request");
    }

    return await res.json();
  } catch (err) {
    return { error: "Failed to fetch data" };
  }
}
