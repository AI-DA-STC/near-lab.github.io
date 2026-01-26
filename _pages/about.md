---
layout: about
title: About
permalink: /
subtitle: 

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Hey there! Welcome to the **Next-gen Edge AI & Robotics (NEAR) Lab**. We are part of AI.DA-STC at ST Engineering, Singapore, working at the forefront of robotics and edge AI research.

Our mission is to create intelligence that allows robots—such as drones and quadrupeds—to share perception and complete complex missions without human micromanagement or reliance on cloud connectivity. Everything we build runs entirely at the edge, making our systems critical for contested and communication-denied environments.

### Research Focus

Our research focuses on **Robust Physical AI** for autonomous robotic systems operating in real-world, resource-constrained environments. We study the algorithmic and systems foundations that enable reliable perception, coordinated decision-making, and efficient on-device intelligence across heterogeneous robotic platforms, including UAVs, quadruped UGVs, and mobile manipulators.

Our work is organized around three core pillars:

**1. Perception**

We develop multi-modal, multi-robot perception systems that enable consistent world understanding across heterogeneous agents.

Focus areas include:
- Multi-sensor fusion (vision, depth, inertial, proprioception)
- Distributed and collaborative SLAM
- GPS-denied localization and mapping
- Shared spatial and semantic representations
- Semantic scene understanding for downstream planning and control
- Edge-deployable perception pipelines

**2. Coordination & Action**

We study hierarchical decision-making and multi-robot coordination for translating high-level intent into robust physical behavior.

Focus areas include:
- Vision-Language-Action (VLA) models for intent grounding
- Task and motion planning
- Mission decomposition and hierarchical planning
- Capability-aware task allocation in heterogeneous teams
- Multi-robot coordination under partial observability and communication constraints
- Closed-loop execution and adaptation in dynamic environments

**3. Edge Intelligence**

We design hardware-aware learning and inference systems for autonomous robots with strict power, thermal, and latency constraints.

Focus areas include:
- Model compression (distillation, pruning, quantization)
- Hardware-aware neural architecture optimization
- Embedded inference on Jetson and ARM-based platforms
- Robust inference under noise, latency, and bandwidth constraints
- AI–systems co-design for autonomy at the edge