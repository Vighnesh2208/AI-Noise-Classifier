import os
import librosa
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split

DATASET_PATH = "UrbanSound8K"
CSV_PATH = os.path.join(DATASET_PATH, "metadata", "UrbanSound8K.csv")
AUDIO_PATH = os.path.join(DATASET_PATH, "audio")

SAMPLE_RATE = 22050
DURATION = 4  # seconds
SAMPLES_PER_TRACK = SAMPLE_RATE * DURATION
N_MFCC = 40

def extract_mfcc(file_path):
    signal, sr = librosa.load(file_path, sr=SAMPLE_RATE)

    # Make fixed length
    if len(signal) < SAMPLES_PER_TRACK:
        signal = np.pad(signal, (0, SAMPLES_PER_TRACK - len(signal)))
    else:
        signal = signal[:SAMPLES_PER_TRACK]

    mfcc = librosa.feature.mfcc(y=signal, sr=sr, n_mfcc=N_MFCC)
    mfcc = mfcc.T  # shape: (time, mfcc)

    return mfcc

def main():
    df = pd.read_csv(CSV_PATH)

    X = []
    y = []

    for idx, row in df.iterrows():
        fold = f"fold{row['fold']}"
        file_name = row["slice_file_name"]
        class_id = row["classID"]

        file_path = os.path.join(AUDIO_PATH, fold, file_name)

        mfcc = extract_mfcc(file_path)

        X.append(mfcc)
        y.append(class_id)

        if idx % 500 == 0:
            print(f"Processed {idx}/{len(df)}")

    X = np.array(X)
    y = np.array(y)

    print("Final X shape:", X.shape)  # (samples, time, mfcc)
    print("Final y shape:", y.shape)

    # CNN expects 4D input -> add channel dimension
    X = X[..., np.newaxis]  # (samples, time, mfcc, 1)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    np.save("X_train.npy", X_train)
    np.save("X_test.npy", X_test)
    np.save("y_train.npy", y_train)
    np.save("y_test.npy", y_test)

    print("✅ Saved feature files successfully!")

if __name__ == "__main__":
    main()
