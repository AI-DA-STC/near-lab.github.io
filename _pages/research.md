---
layout: page
title: Research
permalink: /research/
description: Robust Physical AI for autonomous robotic systems operating in real-world, resource-constrained environments.
nav: true
nav_order: 1
---

<div style="max-width: 760px; margin-bottom: 3rem;">
  <p style="font-size: 1.12rem; line-height: 1.78; color: var(--global-text-color);">
    Our research focuses on <strong>Robust Physical AI</strong> for autonomous robotic systems operating in real-world,
    resource-constrained environments. We study the algorithmic and systems foundations that enable reliable perception,
    coordinated decision-making, and efficient on-device intelligence across heterogeneous robotic platforms &mdash;
    including UAVs, quadruped UGVs, and mobile manipulators.
  </p>
  <p style="font-size: 1.12rem; line-height: 1.78; color: var(--global-text-color);">
    Everything we build runs entirely at the edge, making our systems viable in contested and communication-denied
    environments where cloud connectivity is unavailable or inadmissible.
  </p>
</div>

<!-- Research pillars diagram -->
<div style="border-radius: 12px; overflow: hidden; margin-bottom: 3.5rem; background: var(--global-code-bg-color, #f8f9fa); border: 1px solid var(--global-divider-color, rgba(0,0,0,0.08)); min-height: 200px; display: flex; align-items: center; justify-content: center;">
  <!--
    PLACEHOLDER: Place your research_pillars.png at assets/img/research_pillars.png.
    The onerror handler shows the placeholder block until the image exists.
  -->
  <img
    src="{{ '/assets/img/research_pillars.png' | relative_url }}"
    alt="NEAR Lab Research Pillars — Perception, Coordination & Action, Edge Intelligence"
    onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    style="max-width: 960px; width: 100%; display: block;"
  >
  <div style="text-align: center; padding: 3rem 2rem; color: #adb5bd; width: 100%; display: none; flex-direction: column; align-items: center;">
    <div style="font-size: 3rem; opacity: 0.3; margin-bottom: 0.75rem;">&#9881;</div>
    <p style="font-family: monospace; font-size: 0.82rem; margin: 0;">
      PLACEHOLDER &mdash; place research_pillars.png at assets/img/research_pillars.png
    </p>
  </div>
</div>

<hr style="margin-bottom: 3rem;">

---

## Pillar 1 — Perception

We develop multi-modal, multi-robot perception systems that enable consistent world understanding across heterogeneous agents.

**Focus areas:**

- Multi-sensor fusion (vision, depth, inertial, proprioception)
- Distributed and collaborative SLAM
- GPS-denied localization and mapping
- Shared spatial and semantic representations
- Semantic scene understanding for downstream planning and control
- Edge-deployable perception pipelines

---

## Pillar 2 — Coordination & Action

We study hierarchical decision-making and multi-robot coordination for translating high-level intent into robust physical behavior.

**Focus areas:**

- Vision-Language-Action (VLA) models for intent grounding
- Task and motion planning
- Mission decomposition and hierarchical planning
- Capability-aware task allocation in heterogeneous teams
- Multi-robot coordination under partial observability and communication constraints
- Closed-loop execution and adaptation in dynamic environments

---

## Pillar 3 — Edge Intelligence

We design hardware-aware learning and inference systems for autonomous robots with strict power, thermal, and latency constraints.

**Focus areas:**

- Model compression (distillation, pruning, quantization)
- Hardware-aware neural architecture optimization
- Embedded inference on Jetson and ARM-based platforms
- Robust inference under noise, latency, and bandwidth constraints
- AI&ndash;systems co-design for autonomy at the edge
