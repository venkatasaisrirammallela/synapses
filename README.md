# synapses
This repository hosts a Video Summarizer Tool that transforms lengthy videos into concise summaries using advanced AI models. It combines Whisper for speech-to-text transcription and Pegasus for high-quality summarization, all wrapped in a clean and user-friendly web interface.

✨ Key Features
Audio Transcription: Converts speech from video into text using Hugging Face's Whisper model.

Text Summarization: Uses the Pegasus model to summarize transcribed content effectively.

Intuitive Web Interface: Simple and interactive interface for uploading videos and viewing summaries.

Real-Time Processing: Delivers quick and accurate summaries of uploaded videos.

⚙️ How It Works
Upload Video: Users upload a video through the web interface.

Extract Audio: The tool extracts audio from the video file.

Transcribe Audio: Whisper transcribes spoken content into text.

Summarize Text: Pegasus condenses the transcribed text into a summary.

Display Summary: The summary is shown on the interface for easy access and download.

📦 Requirements
Python 3.8+

Required Libraries:

transformers

torch

moviepy

flask

whisper

🚀 Getting Started
Clone the repository:

bash
Copy
Edit
git clone https://github.com/janakiram180/Video-summarizer-tool.git
cd Video-summarizer-tool
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Launch the application:

bash
Copy
Edit
python app.py
Access the web interface:
Open your browser and navigate to http://127.0.0.1:5000

🧑‍💻 Usage
Upload a video through the web interface.

Wait while the system processes and summarizes the content.

View or download the generated summary from the same page.

🛠️ Technologies Used
Whisper (Hugging Face): For robust and multilingual speech recognition.

Pegasus: For cutting-edge text summarization.

Flask: Lightweight backend to serve the web app.

MoviePy: Handles video and audio extraction seamlessly.

🚧 Future Improvements
Multilingual transcription and summarization support.

Cloud integration for handling large video files.

Performance optimizations for long-duration videos.

Option to choose between different summarization models.

