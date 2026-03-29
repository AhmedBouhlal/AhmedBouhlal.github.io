// Enhanced Interaction Animations
document.addEventListener('DOMContentLoaded', function() {
  initializeAnimations();
  initializeHoverEffects();
  initializeScrollAnimations();
  initializeMouseTracking();
  initializeHiddenLinks();
});

// Initialize all animations
function initializeAnimations() {
  // Add entrance animations to elements
  const elements = document.querySelectorAll('.nav-link, .hero-title, .hero-subtitle, .hero-description, .expertise-card, .project-card, .skill-item');
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.1}s`;
    el.classList.add('animate-in');
  });
}

// Enhanced hover effects
function initializeHoverEffects() {
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      addRippleEffect(e, this);
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Social links
  document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-2px) scale(1.05)';
      addRippleEffect(e, this);
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Expertise cards
  document.querySelectorAll('.expertise-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-15px) scale(1.05) rotateX(5deg)';
      this.style.boxShadow = '0 25px 50px rgba(0, 217, 255, 0.4)';
      addGlowEffect(this);
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
      this.style.boxShadow = '0 20px 40px rgba(0, 217, 255, 0.3)';
    });
  });

  // Project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-12px) scale(1.03) rotateX(3deg)';
      this.style.boxShadow = '0 30px 60px rgba(0, 217, 255, 0.4)';
      addSweepEffect(this);
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
      this.style.boxShadow = '0 20px 40px rgba(0, 217, 255, 0.3)';
    });
  });

  // Skill items
  document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-5px) scale(1.1) rotateZ(2deg)';
      this.style.boxShadow = '0 15px 30px rgba(0, 217, 255, 0.4)';
      addPulseEffect(this);
    });

    skill.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
      this.style.boxShadow = '0 10px 25px rgba(0, 217, 255, 0.3)';
    });
  });

  // Tech badges
  document.querySelectorAll('.tech-badge').forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.1)';
      this.style.boxShadow = '0 8px 16px rgba(0, 217, 255, 0.4)';
    });

    badge.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
    });
  });

  // Project links
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.05)';
      this.style.boxShadow = '0 10px 20px rgba(0, 217, 255, 0.4)';
    });

    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 5px 15px rgba(0, 217, 255, 0.3)';
    });
  });

  // Logo interaction
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function() {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = 'logoGlow 3s ease-in-out infinite';
      }, 10);

      // Add burst effect
      addBurstEffect(this);
    });
  }
}

// Scroll-based animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Add staggered animation to children
        const children = entry.target.querySelectorAll('.expertise-card, .project-card, .skill-item');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    scrollObserver.observe(section);
  });
}

// Mouse tracking effects
function initializeMouseTracking() {
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Update CSS custom properties
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);

    // Parallax effect on cards
    document.querySelectorAll('.expertise-card, .project-card').forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2;
      const cardY = rect.top + rect.height / 2;

      const angleX = (mouseY - cardY) / 25;
      const angleY = (cardX - mouseX) / 25;

      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
    });
  });

  // Reset on mouse leave
  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.expertise-card, .project-card').forEach(card => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

// Ripple effect for buttons
function addRippleEffect(e, element) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Glow effect for cards
function addGlowEffect(element) {
  element.style.boxShadow = `
    0 0 20px rgba(0, 217, 255, 0.5),
    0 0 40px rgba(0, 217, 255, 0.3),
    0 0 60px rgba(0, 217, 255, 0.1),
    0 25px 50px rgba(0, 217, 255, 0.4)
  `;
}

// Sweep effect for project cards
function addSweepEffect(element) {
  const sweep = document.createElement('div');
  sweep.className = 'sweep';
  sweep.style.cssText = `
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 217, 255, 0.3), transparent);
    animation: sweep 0.6s ease-out;
    pointer-events: none;
  `;

  element.appendChild(sweep);

  setTimeout(() => {
    sweep.remove();
  }, 600);
}

// Pulse effect for skill items
function addPulseEffect(element) {
  element.style.animation = 'pulse 0.6s ease-out';

  setTimeout(() => {
    element.style.animation = '';
  }, 600);
}

// Burst effect for logo
function addBurstEffect(element) {
  const burst = document.createElement('div');
  burst.className = 'burst';
  burst.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 217, 255, 0.4), transparent);
    transform: translate(-50%, -50%);
    animation: burst 0.8s ease-out;
    pointer-events: none;
  `;

  element.style.position = 'relative';
  element.appendChild(burst);

  setTimeout(() => {
    burst.remove();
  }, 800);
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });

      // Update active nav state
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Performance optimization
let ticking = false;
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateAnimations);
    ticking = true;
  }
}

function updateAnimations() {
  ticking = false;
}

// Add CSS for dynamic animations
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  @keyframes sweep {
    to {
      left: 100%;
    }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes burst {
    to {
      width: 200px;
      height: 200px;
      opacity: 0;
    }
  }

  .animate-in {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .visible {
    opacity: 1;
  }
`;

document.head.appendChild(style);

// Initialize on load
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  console.log('Interaction animations initialized');

  // Initialize hidden contact links
  initializeHiddenLinks();
});

// Hidden contact links functionality
function initializeHiddenLinks() {
  const hiddenLinks = document.querySelectorAll('.hidden-link');
  console.log('Found hidden links:', hiddenLinks.length);

  hiddenLinks.forEach((link, index) => {
    console.log(`Setting up link ${index}:`, link.dataset.link);

    link.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();

      const url = this.dataset.link;
      const target = this.dataset.target || '_blank';

      console.log('Clicked link:', url, 'Target:', target);

      // Add ripple effect
      addContactRipple(e, this);

      // Add click feedback
      const contactItem = this.closest('.contact-item');
      if (contactItem) {
        contactItem.style.transform = 'translateY(-5px) scale(0.95)';

        setTimeout(() => {
          contactItem.style.transform = 'translateY(-5px) scale(1)';
        }, 200);
      }

      // Open the link in new tab
      setTimeout(() => {
        try {
          console.log('Opening link in new tab:', url);
          window.open(url, target);
        } catch (error) {
          console.error('Error opening link:', error);
          // Fallback: create a temporary link and click it
          const tempLink = document.createElement('a');
          tempLink.href = url;
          tempLink.target = target;
          tempLink.rel = 'noopener noreferrer';
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
        }
      }, 100);
    });

    // Add enhanced hover effect
    link.addEventListener('mouseenter', function() {
      const contactItem = this.closest('.contact-item');
      if (contactItem) {
        contactItem.style.transform = 'translateY(-5px) scale(1.02)';
      }
    });

    link.addEventListener('mouseleave', function() {
      const contactItem = this.closest('.contact-item');
      if (contactItem) {
        contactItem.style.transform = 'translateY(0) scale(1)';
      }
    });
  });
}

// Add ripple effect to contact items
function addContactRipple(e, element) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';

  element.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

const skills = {
  bash: {
    title: "Bash",
    desc: "Shell scripting, automation, and command-line mastery.",
    preview: "$ echo 'Hello World'\nHello World\n$ ls\nproject/\nmain.sh\n"
  },
  python: {
    title: "Python",
    desc: "Full-stack development, AI, data science, and CLI tools.",
    preview: "def greet():\n    print('Hello, AI World!')\n\ngreet()"
  },
  verilog: {
    title: "Verilog",
    desc: "Digital logic design and hardware simulation.",
    preview: "module led_blink(clk, led);\n  input clk;\n  output led;\nendmodule"
  },
  c: {
    title: "C",
    desc: "Low-level systems programming and memory management.",
    preview: "#include <stdio.h>\nint main() {\n  printf(\"Hello C\\n\");\n  return 0;\n}"
  },
  html: {
    title: "HTML/CSS",
    desc: "Responsive UI design with modern styling.",
    preview: "<!DOCTYPE html>\n<html>\n<head><style>h1 {color: blue;}</style></head>\n<body><h1>Hello</h1></body>\n</html>"
  },
  js: {
    title: "JavaScript",
    desc: "Interactive web apps and dynamic interfaces.",
    preview: "document.querySelector('h1').textContent = 'Hello, JS';"
  },
  pytorch: {
    title: "PyTorch",
    desc: "Neural networks and deep learning frameworks.",
    preview: "import torch\nx = torch.tensor([1.0, 2.0])\nprint(x * 2)"
  },
  opencv: {
    title: "OpenCV",
    desc: "Computer vision and image processing.",
    preview: "import cv2\nimg = cv2.imread('img.jpg')\ncv2.imshow('Image', img)"
  },
  transformers: {
    title: "Transformers",
    desc: "NLP and large language models using HuggingFace.",
    preview: "from transformers import pipeline\npipe = pipeline('text-generation')"
  },
  llama: {
    title: "LLaMA",
    desc: "LLaMA model integration for AI assistants.",
    preview: "LLaMA(3) → Prompt: 'Generate a Python function...'"
  },
  sklearn: {
    title: "Scikit-learn",
    desc: "Machine learning models, pipelines, and metrics.",
    preview: "from sklearn.linear_model import LinearRegression"
  },
  pandas: {
    title: "Pandas",
    desc: "Data analysis and transformation with DataFrames.",
    preview: "import pandas as pd\ndf = pd.read_csv('data.csv')"
  },
  matplotlib: {
    title: "Matplotlib",
    desc: "Data visualization and custom charting.",
    preview: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3])\nplt.show()"
  },
  flask: {
    title: "Flask",
    desc: "Lightweight web API and backend services.",
    preview: "from flask import Flask\napp = Flask(__name__)\n@app.route('/')"
  },
  sqlalchemy: {
    title: "SQLAlchemy",
    desc: "ORM for Python and scalable database access.",
    preview: "from sqlalchemy import create_engine\nengine = create_engine(...)"
  },
  jupyter: {
    title: "Jupyter",
    desc: "Interactive coding and documentation.",
    preview: "# Use Markdown & Python to document and test ideas"
  },
  linux: {
    title: "Linux",
    desc: "Pop!_OS and productivity through custom scripts.",
    preview: "$ sudo apt update && sudo apt install python3"
  },
  git: {
    title: "Git",
    desc: "Version control and collaborative development.",
    preview: "$ git commit -m \"Initial commit\"\n[main abc123] Initial commit"
  },
  esp32: {
    title: "ESP32",
    desc: "IoT microcontroller for smart hardware systems.",
    preview: "Serial.begin(115200);\nWiFi.begin(ssid, password);"
  },
  raspberrypi: {
    title: "Raspberry Pi",
    desc: "Edge computing, GPIO, and device control.",
    preview: "import RPi.GPIO as GPIO\nGPIO.setmode(GPIO.BCM)"
  },
  arduino: {
    title: "Arduino",
    desc: "Hardware prototyping with microcontrollers.",
    preview: "void setup() {\n  pinMode(13, OUTPUT);\n}"
  },
  game: {
    title: "Game Engine",
    desc: "Custom 2.5D engine for multiplayer and physics.",
    preview: "# GameObject: position, render(), update()"
  },
  shell: {
    title: "Shell Scripting",
    desc: "Automate tasks and workflows in Unix.",
    preview: "#!/bin/bash\necho \"Running automation...\""
  },
  assistant: {
    title: "AI Assistant",
    desc: "Build smart assistants with LLaMA 3 & modular skills.",
    preview: "Assistant(skill='weather')\n→ 'Today is sunny with 26°C.'"
  },
  fastapi: {
    title: "FastAPI",
    desc: "High-performance async web framework for APIs.",
    preview: "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/')\nasync def root():\n    return {'message': 'Hello World'}\n\nif __name__ == '__main__':\n    import uvicorn\n    uvicorn.run(app, host='0.0.0.0', port=8000)"
  },
  tensorflow: {
    title: "TensorFlow",
    desc: "Deep learning framework for production ML systems.",
    preview: "import tensorflow as tf\nfrom tensorflow.keras import layers\n\n# Build model\nmodel = tf.keras.Sequential([\n    layers.Dense(128, activation='relu', input_shape=(784,)),\n    layers.Dropout(0.2),\n    layers.Dense(10, activation='softmax')\n])\n\nmodel.compile(\n    optimizer='adam',\n    loss='sparse_categorical_crossentropy',\n    metrics=['accuracy']\n)\n\nprint(model.summary())"
  },
  mediapipe: {
    title: "MediaPipe",
    desc: "Cross-platform ML solutions for live media processing.",
    preview: "import cv2\nimport mediapipe as mp\n\n# Initialize MediaPipe Face Detection\nmp_face_detection = mp.solutions.face_detection\nmp_drawing = mp.solutions.drawing_utils\n\n# Setup webcam\ncap = cv2.VideoCapture(0)\n\nwith mp_face_detection.FaceDetection(\n    model_selection=0, min_detection_confidence=0.5) as face_detection:\n    \n    while cap.isOpened():\n        ret, frame = cap.read()\n        if not ret:\n            break\n            \n        # Convert BGR to RGB\n        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)\n        results = face_detection.process(rgb_frame)\n        \n        # Draw detections\n        if results.detections:\n            for detection in results.detections:\n                mp_drawing.draw_detection(frame, detection)\n        \n        cv2.imshow('MediaPipe Face Detection', frame)\n        \n        if cv2.waitKey(5) & 0xFF == ord('q'):\n            break\n\ncap.release()\ncv2.destroyAllWindows()"
  },
  nlp: {
    title: "NLP Models",
    desc: "Natural Language Processing and text understanding.",
    preview: "from transformers import AutoTokenizer, AutoModelForSequenceClassification\nimport torch\n\n# Load pre-trained model\nmodel_name = 'distilbert-base-uncased-finetuned-sst-2-english'\ntokenizer = AutoTokenizer.from_pretrained(model_name)\nmodel = AutoModelForSequenceClassification.from_pretrained(model_name)\n\n# Process text\ntexts = [\n    \"I love this product, it's amazing!\",\n    \"This is terrible, I hate it.\",\n    \"It's okay, nothing special.\"\n]\n\nfor text in texts:\n    inputs = tokenizer(text, return_tensors='pt', truncation=True, padding=True)\n    \n    with torch.no_grad():\n        outputs = model(**inputs)\n        predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)\n        \n    sentiment = 'POSITIVE' if predictions[0][1] > predictions[0][0] else 'NEGATIVE'\n    confidence = torch.max(predictions[0]).item()\n    \n    print(f'Text: {text}')\n    print(f'Sentiment: {sentiment} (confidence: {confidence:.2f})')\n    print('-' * 50)"
  },
  vector: {
    title: "Vector Search",
    desc: "Semantic search using embeddings and similarity.",
    preview: "import numpy as np\nimport faiss\nfrom sentence_transformers import SentenceTransformer\n\n# Load sentence transformer model\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\n\n# Sample documents\ndocuments = [\n    \"Machine learning is a subset of artificial intelligence.\",\n    \"Deep learning uses neural networks with multiple layers.\",\n    \"Natural language processing helps computers understand text.\",\n    \"Computer vision enables machines to interpret visual data.\",\n    \"Reinforcement learning learns through trial and error.\"\n]\n\n# Generate embeddings\nprint('Generating embeddings...')\nembeddings = model.encode(documents)\n\n# Create FAISS index\ndimension = embeddings.shape[1]\nindex = faiss.IndexFlatL2(dimension)\nindex.add(embeddings.astype('float32'))\n\n# Search function\ndef search(query, k=3):\n    query_embedding = model.encode([query])\n    distances, indices = index.search(query_embedding.astype('float32'), k)\n    \n    print(f'\\nQuery: {query}')\n    print('Top results:')\n    for i, (dist, idx) in enumerate(zip(distances[0], indices[0])):\n        print(f'{i+1}. {documents[idx]} (distance: {dist:.4f})')\n\n# Test search\nsearch('How do neural networks work?')\nsearch('Text analysis methods')"
  },
  rag: {
    title: "RAG Systems",
    desc: "Retrieval-Augmented Generation for AI responses.",
    preview: "# RAG Pipeline\nquery_embed = embed(query)\nretrieved_docs = vector_search(query_embed)\ncontext = '\\n'.join(retrieved_docs)\nresponse = llm.generate(f'Context: {context}\\nQuery: {query}')"
  },
  async: {
    title: "Async Processing",
    desc: "Asynchronous programming for high-performance systems.",
    preview: "import asyncio\nasync def process_data():\n    tasks = [fetch_data(url) for url in urls]\n    results = await asyncio.gather(*tasks)\n    return results"
  },
  pipelines: {
    title: "Data Pipelines",
    desc: "End-to-end data processing and transformation workflows.",
    preview: "# Pipeline: Extract → Transform → Load\npipeline = Pipeline([\n    ('extract', DataExtractor()),\n    ('transform', DataTransformer()),\n    ('load', DataLoader())\n])"
  },
  monitoring: {
    title: "Process Monitoring",
    desc: "System monitoring and performance tracking.",
    preview: "import psutil\ncpu_percent = psutil.cpu_percent(interval=1)\nmemory = psutil.virtual_memory()\nprint(f'CPU: {cpu_percent}%, RAM: {memory.percent}%')"
  },
  logging: {
    title: "Logging Systems",
    desc: "Structured logging and system observability.",
    preview: "import logging\nlogging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')\nlogger.info('System initialized successfully')"
  },
  cli: {
    title: "CLI Development",
    desc: "Command-line interface tools and utilities.",
    preview: "import click\n@click.command()\n@click.option('--count', default=1, help='Number of greetings')\ndef hello(count):\n    for _ in range(count):\n        click.echo('Hello!')"
  },
  evaluation: {
    title: "Model Evaluation",
    desc: "Metrics and validation for ML model performance.",
    preview: "from sklearn.metrics import accuracy_score, precision_score, f1_score\naccuracy = accuracy_score(y_true, y_pred)\nprecision = precision_score(y_true, y_pred)\nf1 = f1_score(y_true, y_pred)"
  },
  datasets: {
    title: "Dataset Engineering",
    desc: "Data preparation, augmentation, and synthetic generation.",
    preview: "import tensorflow_datasets as tfds\nds = tfds.load('cifar10', split='train')\nds = ds.map(lambda x: (x['image'], x['label']))\nds = ds.batch(32).prefetch(tf.data.AUTOTUNE)"
  },
  hybrid: {
    title: "Hybrid Retrieval",
    desc: "Combining keyword and semantic search for better results.",
    preview: "# Hybrid Search Pipeline\nkeyword_results = bm25_search(query)\nsemantic_results = vector_search(query)\nhybrid_scores = reciprocal_rank_fusion(keyword_results, semantic_results)"
  },
  rrf: {
    title: "Reciprocal Rank Fusion",
    desc: "Advanced ranking algorithm for multiple result sets.",
    preview: "def reciprocal_rank_fusion(result_lists, k=60):\n    fused_scores = {}\n    for results in result_lists:\n        for rank, doc in enumerate(results, 1):\n            fused_scores[doc] = fused_scores.get(doc, 0) + 1.0 / (k + rank)\n    return sorted(fused_scores.items(), key=lambda x: x[1], reverse=True)"
  },
  realtime: {
    title: "Real-time Inference",
    desc: "Low-latency ML model deployment and serving.",
    preview: "import asyncio\nasync def realtime_inference(model, input_queue):\n    while True:\n        data = await input_queue.get()\n        prediction = await model.predict_async(data)\n        await send_result(prediction)"
  },
  computervision: {
    title: "Computer Vision",
    desc: "Image processing, object detection, and visual AI systems.",
    preview: "import cv2\nimport numpy as np\n\n# Load image and detect edges\nimg = cv2.imread('image.jpg')\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nedges = cv2.Canny(gray, 100, 200)\n\n# Find contours\ncontours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\n\n# Draw bounding boxes\nfor contour in contours:\n    x, y, w, h = cv2.boundingRect(contour)\n    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)\n\ncv2.imshow('Detected Objects', img)\ncv2.waitKey(0)"
  },
  rest: {
    title: "REST APIs",
    desc: "RESTful API design and implementation.",
    preview: "from flask import Flask, jsonify\napp = Flask(__name__)\n@app.route('/api/predict', methods=['POST'])\ndef predict():\n    data = request.get_json()\n    result = model.predict(data)\n    return jsonify({'prediction': result.tolist()})"
  }
};

// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Set active nav link based on scroll position
  function setActiveNavLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  }

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Update active nav link on scroll
  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink(); // Set initial active state
});

// Skill modal functionality
document.querySelectorAll(".skill-item").forEach(skill => {
  skill.addEventListener("click", () => {
    const skillId = skill.dataset.skill;
    const data = skills[skillId];

    if (!data) {
      console.error("Skill not found:", skillId);
      return;
    }

    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDesc").textContent = data.desc;
    document.getElementById("skillPreview").textContent = data.preview;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("skillModal").classList.add("active");
  });
});

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("skillModal").classList.remove("active");
}

// Close modal when clicking outside
document.getElementById("overlay").addEventListener("click", closeModal);

// Close modal with Escape key
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Particle background configuration
tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00d9ff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00d9ff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

const cvBtn = document.querySelector(".cv-hover");
const cvPreview = document.getElementById("cvPreview");

cvBtn.addEventListener("mouseenter", () => {
  cvPreview.style.display = "block";
});

cvBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    cvPreview.style.display = "none";
  }, 400);
});

const contactSection = document.querySelector('#contact');
const contactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactSection.classList.add('animate-contact');
    }
  });
}, { threshold: 0.3 });

contactObserver.observe(contactSection);

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#38bdf8"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#38bdf8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      }
    }
  },
  "retina_detect": true
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 130,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 2, random: true },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
      push: { quantity: 4 }
    }
  },
  background: { color: "#0f172a" }
});


