# 🎧 AI Noise Classifier (Backend)

This project is an **AI Noise Classifier Backend** built using **Python + TensorFlow + FastAPI**.

It takes an audio input (upload), predicts the sound type using a CNN model trained on the **UrbanSound8K** dataset, and then tells whether the sound is **Harmful or Not Harmful** using **Option A (rule-based harmful mapping)**.



✅ Features

- Upload audio file (`.wav`, `.mp3`, etc.)
- MFCC feature extraction using Librosa
- CNN model trained locally using TensorFlow/Keras
- FastAPI endpoint for predictions (`/predict`)
- API key protection via request header `x-api-key`
- Harmful classification using predefined class rules (Option A)






✅ Setup Instructions

1️⃣ Create and activate virtual environment
Windows

`python -m venv venv`
`venv\Scripts\activate`

Install Dependencies
```pip install -r requirements.txt```


Dataset Setup (UrbanSound8K)
Download and extract the UrbanSound8K dataset inside your project folder:
UrbanSound8K/
 ├── audio/
 │    ├── fold1/
 │    ├── fold2/
 │    └── ...
 └── metadata/
      └── UrbanSound8K.csv

✅ Step 1: Extract Features (MFCC)

Run:`python extract_features.py`
This generates:

X_train.npy

X_test.npy

y_train.npy

y_test.npy

These files are ignored in GitHub because they can be large.

✅ Step 2: Train the CNN Model Locally

Run:`python train_model.py`
After training, the model will be saved as:

noise_classifier_model.h5

✅ Step 3: Run the FastAPI Backend Server

Start the API server: `uvicorn api:app --reload`


Backend will run on:

API: `http://127.0.0.1:8000`

Swagger Docs: `http://127.0.0.1:8000/docs`

🔑 API Key Protection

The API requires an API key in the request header:

Header Name: `x-api-key`

Example Value: `YASH123456`

You can change the API key inside api.py.

✅ Test the API
✅ Using Swagger UI

Go to:

`http://127.0.0.1:8000/docs`


Then use /predict endpoint and upload a sound file.

Make sure to send the header:

`x-api-key: YASH123456`

✅ Using curl (Terminal)
Mac/Linux
```python
curl -X POST "http://127.0.0.1:8000/predict" \
  -H "x-api-key: YASH123456" \
  -F "file=@test.wav"
```

Windows (CMD)
```python
curl -X POST "http://127.0.0.1:8000/predict" ^
  -H "x-api-key: YASH123456" ^
  -F "file=@test.wav"
  ```

✅ Example API Response
```JSON
{
  "predicted_class": "siren",
  "confidence": 91.23,
  "harmful": true
}
```

✅ Harmful vs Not Harmful (Option A)

Harmful class mapping is rule-based. Example harmful sounds:

✅ Harmful:

siren

car_horn

drilling

jackhammer

gun_shot

❌ Not harmful (generally):

dog_bark

children_playing

street_music

engine_idling

air_conditioner

✅ Notes / Important

Audio is automatically padded/cut to a fixed duration (4 seconds)

.wav files give best results

Dataset + large model files should not be uploaded to GitHub (handled by .gitignore)

🚀 Future Improvements (Optional)

Add decibel estimation and threshold logic

Add microphone live recording support in frontend

Add more datasets like ESC-50 for better classification

Deploy online using Render/Railway + Netlify/Vercel frontend

👨‍💻 Author

Built by Vighnesh Patil 🔥


