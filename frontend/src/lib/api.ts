export interface PredictionResult {
    predicted_class: string;
    confidence: number;
    harmful: boolean;
}

export const classifyAudio = async (file: File): Promise<PredictionResult> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
            "x-api-key": "YASH123456",
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Failed to classify audio");
    }

    return response.json();
};
