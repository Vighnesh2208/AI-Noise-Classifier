import numpy as np
import tensorflow as tf
from tensorflow.keras import layers, models

NUM_CLASSES = 10  # UrbanSound8K has 10 classes

def build_model(input_shape):
    model = models.Sequential([
        layers.Conv2D(32, (3,3), activation="relu", input_shape=input_shape),
        layers.MaxPooling2D((2,2)),
        layers.Dropout(0.2),

        layers.Conv2D(64, (3,3), activation="relu"),
        layers.MaxPooling2D((2,2)),
        layers.Dropout(0.2),

        layers.Conv2D(128, (3,3), activation="relu"),
        layers.MaxPooling2D((2,2)),
        layers.Dropout(0.2),

        layers.Flatten(),
        layers.Dense(128, activation="relu"),
        layers.Dropout(0.3),
        layers.Dense(NUM_CLASSES, activation="softmax")
    ])

    return model

def main():
    X_train = np.load("X_train.npy")
    X_test = np.load("X_test.npy")
    y_train = np.load("y_train.npy")
    y_test = np.load("y_test.npy")

    input_shape = X_train.shape[1:]  # (time, mfcc, 1)

    model = build_model(input_shape)
    model.compile(
        optimizer="adam",
        loss="sparse_categorical_crossentropy",
        metrics=["accuracy"]
    )

    print(model.summary())

    history = model.fit(
        X_train, y_train,
        validation_data=(X_test, y_test),
        epochs=15,
        batch_size=32
    )

    test_loss, test_acc = model.evaluate(X_test, y_test)
    print(f"✅ Test Accuracy: {test_acc*100:.2f}%")

    model.save("noise_classifier_model.h5")
    print("✅ Model saved as noise_classifier_model.h5")

if __name__ == "__main__":
    main()
