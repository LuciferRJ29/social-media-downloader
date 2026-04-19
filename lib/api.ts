const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://smdweb-38a1de00f443.herokuapp.com";

export type DownloadResponse = {
  title?: string;
  thumbnail?: string;
  download?: string;
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

    // ✅ handle non-200 responses safely
    if (!res.ok) {
      return { error: "Request failed" };
    }

    const data = await res.json();

    // ✅ ensure safe structure
    if (!data || data.error) {
      return { error: data?.error || "Invalid response" };
    }

    return {
      title: data.title,
      thumbnail: data.thumbnail,
      download: data.download,
    };

  } catch (err) {
    return { error: "Failed to fetch data" };
  }
}
