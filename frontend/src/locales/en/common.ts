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
  safety: {
    title: "Noise Safety Tips",
    description: "Stay safe by limiting exposure and using protection around common everyday noise sources.",
    categories: {
      traffic: {
        title: "🚗 Traffic Noise",
        level: "Typical level: 65–85 dB",
        tips: {
          t1: "🚪 Close windows during peak traffic hours.",
          t2: "🎧 Use noise-cancelling headphones if exposed for long durations.",
          t3: "🛌 Avoid sleeping with windows facing main roads.",
          t4: "🌿 Use curtains, plants, or sound-absorbing materials indoors.",
          t5: "⏱ Take breaks from continuous exposure.",
        },
        warning: "Prolonged exposure may cause stress, fatigue, and sleep disturbance.",
      },
      construction: {
        title: "🚧 Construction Noise",
        level: "Typical level: 80–100 dB",
        tips: {
          t1: "🦻 Use earplugs or ear protection.",
          t2: "⏰ Limit exposure time near construction zones.",
          t3: "🏠 Keep doors and windows closed during construction hours.",
          t4: "👶 Keep children and elderly away from high-noise areas.",
          t5: "📅 Prefer scheduling outdoor activities during quieter hours.",
        },
        warning: "High risk of hearing damage with prolonged exposure.",
      },
      music: {
        title: "🎵 Loud Music / Events",
        level: "Typical level: 85–110 dB",
        tips: {
          t1: "🔉 Lower volume on personal devices.",
          t2: "🎧 Follow the 60/60 rule (60% volume for 60 minutes).",
          t3: "🚶 Move away from speakers at events.",
          t4: "🛑 Take quiet breaks to rest your ears.",
          t5: "👂 Ringing in ears is a sign to stop exposure.",
        },
        warning: "Can cause permanent hearing loss if ignored.",
      },
      crowd: {
        title: "🗣️ Crowd / Public Gatherings",
        level: "Typical level: 70–90 dB",
        tips: {
          t1: "📍 Move to less crowded zones when possible.",
          t2: "😮‍💨 Take short breaks in quieter areas.",
          t3: "👂 Use ear protection if exposure is long.",
          t4: "🧠 Stay hydrated to reduce stress effects.",
          t5: "⏳ Avoid prolonged exposure in enclosed spaces.",
        },
      },
      sirens: {
        title: "🚨 Honking / Sirens",
        level: "Typical level: 90–120 dB",
        tips: {
          t1: "🚷 Avoid standing near busy intersections.",
          t2: "🎧 Use ear protection if unavoidable.",
          t3: "🏥 Sensitive zones should maintain silence.",
          t4: "📢 Report unnecessary honking in silence zones.",
          t5: "🧠 Repeated exposure can trigger anxiety and headaches.",
        },
      },
      household: {
        title: "🏠 Household / Neighborhood Noise",
        level: "Typical level: 60–80 dB",
        tips: {
          t1: "🔕 Reduce device volume during night hours.",
          t2: "🕘 Follow local quiet-hour rules.",
          t3: "🧱 Use basic soundproofing such as curtains and rugs.",
          t4: "🤝 Resolve issues peacefully before escalating.",
          t5: "📞 Contact authorities if disturbance persists.",
        },
      },
    },
    emergency: {
      title: "📞 Emergency & Support",
      items: {
        e1: "112 – National Emergency Helpline",
        e2: "100 – Police (Noise disturbance complaints)",
        e3: "108 – Emergency Medical Services",
      },
      emailLabel: "Email",
      emailValue: "yashbavkar26@gmail.com",
    },
  },
} as const;

