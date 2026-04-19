from stdapi.media import info, download_link

def fetch_video_data(url: str):
    try:
        video_info = info(url)
        link = download_link(url)

        return {
            "title": video_info.get("title"),
            "thumbnail": video_info.get("thumbnail"),
            "download": link,
        }

    except Exception as e:
        raise Exception(f"Failed to process URL: {str(e)}")
