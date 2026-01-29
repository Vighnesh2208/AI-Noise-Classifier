export const common = {
  header: {
    features: "Features",
    howItWorks: "How It Works",
    demo: "Demo",
    tryNow: "Try Now",
    language: "Language",
  },
  languages: {
    en: "English",
    hi: "Hindi",
  },
  hero: {
    badge: "AI-Powered Sound Analysis",
    headline: {
      detect: "Detect",
      harmful: "Harmful",
      soundsInstantly: "Sounds Instantly",
    },
    description:
      "Our AI-powered noise classifier analyzes audio in real-time to identify potentially harmful sounds—protecting your hearing and well-being.",
    startRecording: "Start Recording",
    uploadAudio: "Upload Audio",
    analyzing: "Analyzing...",
    trust: {
      realtime: "Real-time Analysis",
      accuracy: "99% Accuracy",
      privacy: "Privacy First",
    },
    latest: {
      title: "Latest Analysis",
      description: "We analyzed your audio and detected the following sound:",
      predictedClass: "Predicted Class",
      confidence: "Confidence",
      riskAssessment: "Risk Assessment",
      harmful: "Potentially Harmful",
      safe: "Generally Safe",
    },
    toast: {
      doneTitle: "Analysis complete",
      failedTitle: "Failed to analyze audio",
      failedDescription: "Please make sure the backend is running and try again.",
    },
  },
  how: {
    title: {
      prefix: "How It",
      emphasis: "Works",
    },
    subtitle: "Three simple steps to protect your hearing with our AI-powered noise classifier.",
    steps: {
      capture: {
        title: "Capture Sound",
        description: "Record audio from your microphone or upload an existing audio file for analysis.",
      },
      analysis: {
        title: "AI Analysis",
        description: "Our advanced neural network processes the audio, identifying patterns and frequencies.",
      },
      results: {
        title: "Get Results",
        description: "Receive instant feedback on whether the sound is potentially harmful to your hearing.",
      },
    },
  },
  features: {
    title: {
      prefix: "Powerful",
      emphasis: "Features",
    },
    subtitle: "Advanced AI capabilities designed to keep your hearing safe.",
    items: {
      realtime: {
        title: "Real-time Detection",
        description: "Instant analysis with less than 50ms latency for immediate feedback.",
      },
      decibel: {
        title: "Decibel Monitoring",
        description: "Track sound levels and receive warnings when they exceed safe thresholds.",
      },
      frequency: {
        title: "Frequency Analysis",
        description: "Identify harmful frequency ranges that can damage hearing over time.",
      },
      privacy: {
        title: "Privacy First",
        description: "All processing happens locally. Your audio never leaves your device.",
      },
      multisource: {
        title: "Multi-source Support",
        description: "Analyze audio from microphone, uploaded files, or streaming sources.",
      },
      risk: {
        title: "Risk Assessment",
        description: "Get detailed reports on exposure duration and recommended safe limits.",
      },
    },
  },
  demo: {
    title: {
      prefix: "See It In",
      emphasis: "Action",
    },
    subtitle: "Real-time classification with clear, actionable results.",
    safe: {
      title: "Safe Sound",
      subtitle: "65 dB - Normal conversation",
      riskLevel: "Risk Level",
      riskValue: "Low",
      description: "Safe for extended exposure. No hearing protection required.",
    },
    harmful: {
      title: "Harmful Sound",
      subtitle: "95 dB - Power tools",
      riskLevel: "Risk Level",
      riskValue: "High",
      description: "⚠️ Hearing protection recommended. Limit exposure to 15 minutes.",
    },
  },
  cta: {
    title: {
      prefix: "Protect Your Hearing",
      emphasis: "Today",
    },
    subtitle: "Start analyzing sounds for free. No signup required. Your hearing health is just one click away.",
    button: "Get Started Free",
  },
  footer: {
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    copyright: "© 2024 SoundGuard. Protect your hearing with AI.",
  },
  notFound: {
    title: "Oops! Page not found",
    back: "Return to Home",
  },
} as const;

