// Define API base URL to easily change ports if needed
const API_BASE_URL = "http://127.0.0.1:8001";

export interface PredictionResult {
    predicted_class: string;
    confidence: number;
    harmful: boolean;
}

export const classifyAudio = async (file: File): Promise<PredictionResult> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE_URL}/predict`, {
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

export const sendLocation = async (latitude: number, longitude: number): Promise<void> => {
    try {
        await fetch(`${API_BASE_URL}/location`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ latitude, longitude }),
        });
        console.log("Location sent successfully");
    } catch (error) {
        console.error("Failed to send location:", error);
    }
};
