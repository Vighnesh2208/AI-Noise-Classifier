from fastapi import FastAPI, UploadFile, File, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import librosa
import tensorflow as tf

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ API KEY (set your own)
API_KEY = "YASH123456"

SAMPLE_RATE = 22050
DURATION = 4
SAMPLES_PER_TRACK = SAMPLE_RATE * DURATION
N_MFCC = 40

CLASS_LABELS = {
    0: "air_conditioner",
    1: "car_horn",
    2: "children_playing",
    3: "dog_bark",
    4: "drilling",
    5: "engine_idling",
    6: "gun_shot",
    7: "jackhammer",
    8: "siren",
    9: "street_music"
}

HARMFUL_CLASSES = {"car_horn", "drilling", "gun_shot", "jackhammer", "siren"}

model = tf.keras.models.load_model("noise_classifier_model.h5")

def extract_mfcc_from_audio(audio_path):
    signal, sr = librosa.load(audio_path, sr=SAMPLE_RATE)

    if len(signal) < SAMPLES_PER_TRACK:
        signal = np.pad(signal, (0, SAMPLES_PER_TRACK - len(signal)))
    else:
        signal = signal[:SAMPLES_PER_TRACK]

    mfcc = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=N_MFCC)
    mfcc = mfcc.T
    mfcc = mfcc[np.newaxis, ..., np.newaxis]  # (1, time, mfcc, 1)
    return mfcc

@app.post("/predict")
async def predict(file: UploadFile = File(...), x_api_key: str = Header(None)):
    # ✅ API Key verification
    if x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API Key")

    # Save uploaded file temporarily
    temp_filename = "temp_audio.wav"
    audio_bytes = await file.read()

    with open(temp_filename, "wb") as f:
        f.write(audio_bytes)

    # Extract features
    mfcc = extract_mfcc_from_audio(temp_filename)

    # Predict
    predictions = model.predict(mfcc)
    predicted_class = int(np.argmax(predictions))
    confidence = float(np.max(predictions))

    label = CLASS_LABELS[predicted_class]
    harmful = label in HARMFUL_CLASSES


    return {
        "predicted_class": label,
        "confidence": round(confidence * 100, 2),
        "harmful": harmful
    }

from pydantic import BaseModel

class LocationData(BaseModel):
    latitude: float
    longitude: float

@app.post("/location")
async def receive_location(data: LocationData):
    print(f"Received Location -> Latitude: {data.latitude}, Longitude: {data.longitude}")
    return {"status": "success", "received": data}
