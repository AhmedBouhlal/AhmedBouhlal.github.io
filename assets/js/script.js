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
  automation: {
    title: "Automation Pipelines",
    desc: "Smart auto-scripts and ML deployment.",
    preview: "Trigger → Validate → Optimize → Report"
  }
};

document.querySelectorAll("#skillsList li").forEach(skill => {
  skill.addEventListener("click", () => {
    const id = skill.dataset.skill;
    const data = skills[id];
    document.getElementById("modalTitle").textContent = data.title;
    document.getElementById("modalDesc").textContent = data.desc;
    document.getElementById("skillPreview").textContent = "";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("skillModal").style.display = "block";

    // Simulate typing preview
    const preview = data.preview;
    let index = 0;
    const typing = setInterval(() => {
      if (index < preview.length) {
        document.getElementById("skillPreview").textContent += preview[index++];
      } else {
        clearInterval(typing);
      }
    }, 20);
  });
});

function closeModal() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("skillModal").style.display = "none";
}

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


