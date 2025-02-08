import yt_dlp

def download_video(url, save_path="."):
    ydl_opts = {
        'format': 'bestvideo+bestaudio/best',  # Download best quality
        'outtmpl': f'{save_path}/%(title)s.%(ext)s'  # Save with title as filename
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

# Example usage    
video_url = input("Enter YouTube video URL: ")
download_video(video_url, save_path="./Downloads")

print("Download complete!")
