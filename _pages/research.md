---
layout: page
title: research
permalink: /research/
description: Robust Physical AI for autonomous robotic systems operating in real-world, resource-constrained environments.
nav: true
nav_order: 1
---

<style>
  /* Type scale for this page. The section previously used 16 ad-hoc sizes
     between 0.58rem and 1.35rem; these are the steps they collapse onto. */
  :root {
    --rs-2xs: 0.7rem;
    --rs-xs: 0.8rem;
    --rs-sm: 0.9rem;
    --rs-base: 1rem;
    --rs-lg: 1.15rem;
    --rs-xl: 1.35rem;
  }

  /* ===== Research intro ===== */
  .research-intro {
    max-width: 760px;
    margin-bottom: 3rem;
  }
  .research-intro p {
    font-size: var(--rs-lg);
    line-height: 1.78;
    color: var(--global-text-color);
  }

  /* ===== Venn Diagram ===== */
  :root {
    --venn-perception: #b509ac;
    --venn-coordination: #2698ba;
    --venn-edge: #059669;
  }
  html[data-theme='dark'] {
    --venn-perception: #38bdf8;
    --venn-coordination: #a78bfa;
    --venn-edge: #34d399;
  }

  .venn-wrapper {
    position: relative;
    max-width: 920px;
    margin: 0 auto 0;
    border-radius: 16px;
    background: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    overflow: visible;
    padding: 2rem 1.5rem 1.5rem;
  }
  .venn-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at 50% 30%, rgba(181, 9, 172, 0.03) 0%, transparent 70%);
    pointer-events: none;
    border-radius: 16px;
  }
  html[data-theme='dark'] .venn-wrapper::before {
    background: radial-gradient(ellipse at 50% 30%, rgba(56, 189, 248, 0.04) 0%, transparent 70%);
  }
  .venn-header {
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }
  .venn-header h3 {
    font-size: var(--rs-xl);
    font-weight: 700;
    letter-spacing: -0.01em;
    margin-bottom: 0.2rem;
  }
  .venn-header p {
    font-size: var(--rs-sm);
    color: var(--global-text-color-light);
    margin: 0;
  }

  /* SVG container — panel on LEFT, svg on RIGHT */
  .venn-body {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    gap: 1.5rem;
    position: relative;
    z-index: 1;
  }
  .venn-svg-wrap {
    flex: 1 1 auto;
    /* Without an explicit width this shrink-to-fits once .venn-body stacks,
       and an SVG's default intrinsic width is 300px — so the diagram rendered
       at half scale and its labels became unreadable. */
    width: 100%;
    max-width: 600px;
  }
  .venn-svg {
    width: 100%;
    height: auto;
    display: block;
    cursor: default;
  }

  /* Circle styles */
  .venn-circle {
    transition: fill-opacity 0.35s ease, stroke-opacity 0.35s ease, stroke-width 0.35s ease, filter 0.35s ease;
    cursor: pointer;
  }
  .venn-circle.perception { fill: var(--venn-perception); stroke: var(--venn-perception); }
  .venn-circle.coordination { fill: var(--venn-coordination); stroke: var(--venn-coordination); }
  .venn-circle.edge { fill: var(--venn-edge); stroke: var(--venn-edge); }

  .venn-circle.venn-active {
    fill-opacity: 0.32 !important;
    stroke-width: 3.5 !important;
    stroke-opacity: 1 !important;
  }
  .venn-circle.venn-active.perception { filter: drop-shadow(0 0 16px var(--venn-perception)); }
  .venn-circle.venn-active.coordination { filter: drop-shadow(0 0 16px var(--venn-coordination)); }
  .venn-circle.venn-active.edge { filter: drop-shadow(0 0 16px var(--venn-edge)); }

  .venn-circle.venn-dimmed {
    fill-opacity: 0.06 !important;
    stroke-opacity: 0.2 !important;
    stroke-width: 1.5 !important;
    filter: none !important;
  }

  /* Circle labels */
  .venn-label {
    font-size: 20px;
    font-weight: 700;
    fill: var(--global-text-color);
    pointer-events: none;
    transition: opacity 0.35s ease;
  }
  .venn-label-sub {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    fill: var(--global-text-color-light);
    pointer-events: none;
    transition: opacity 0.35s ease;
  }
  .venn-center-label {
    font-size: 17px;
    font-weight: 800;
    fill: var(--global-theme-color);
    pointer-events: none;
  }
  .venn-center-sub {
    font-size: 11px;
    font-weight: 600;
    fill: var(--global-text-color-light);
    pointer-events: none;
  }

  /* Instruction text */
  .venn-hint {
    text-align: center;
    font-size: var(--rs-xs);
    color: var(--global-text-color-light);
    margin-top: 0.75rem;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  .venn-hint.hidden { opacity: 0; }

  /* ===== Focus Area Panel — LEFT side ===== */
  .venn-panel {
    flex: 0 0 320px;
    width: 320px;
    max-height: 440px;
    overflow-y: auto;
    padding: 1.25rem;
    border-radius: 12px;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    align-self: center;
  }
  html[data-theme='dark'] .venn-panel {
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }
  .venn-panel.active {
    opacity: 1;
    pointer-events: auto;
  }
  .venn-panel-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--rs-base);
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--global-text-color);
  }
  .venn-panel-title i { color: var(--global-theme-color); font-size: var(--rs-lg); }
  .venn-panel-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }
  .venn-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: var(--rs-xs);
    font-weight: 500;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    background: var(--global-code-bg-color);
    color: var(--global-text-color);
    border: 1px solid var(--global-divider-color);
    cursor: pointer;
    transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
    text-decoration: none;
  }
  .venn-chip:hover {
    border-color: var(--global-theme-color);
    transform: translateY(-1px);
    background: var(--global-bg-color);
    text-decoration: none;
    color: var(--global-text-color);
  }
  .venn-chip.chip-active {
    border-color: var(--global-theme-color);
    background: var(--global-theme-color);
    color: #fff;
  }
  .venn-chip.chip-active i { color: #fff; }
  .venn-chip i { color: var(--global-theme-color); font-size: var(--rs-xs); }

  /* Panel responsive */
  @media (max-width: 900px) {
    .venn-body { flex-direction: column; align-items: center; }
    .venn-panel {
      flex: none;
      width: 100%;
      max-width: 480px;
      margin: 0.75rem auto 0;
      max-height: none;
      align-self: auto;
    }
  }

  /* ===== Modal theming ===== */
  .research-modal .modal-content {
    background: var(--global-card-bg-color);
    color: var(--global-text-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 12px;
  }
  .research-modal .modal-header {
    border-bottom-color: var(--global-divider-color);
  }
  .research-modal .modal-header .modal-title {
    font-weight: 700;
    font-size: var(--rs-lg);
  }
  .research-modal .modal-body {
    padding: 1.5rem;
  }
  .research-modal .modal-img-placeholder {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--global-code-bg-color);
    border-radius: 8px;
    color: var(--global-text-color-light);
    font-size: var(--rs-xs);
    font-family: monospace;
    border: 1px dashed var(--global-divider-color);
  }
  .research-modal .modal-desc {
    margin-top: 1rem;
    font-size: var(--rs-sm);
    color: var(--global-text-color-light);
    line-height: 1.6;
  }
  html[data-theme='dark'] .research-modal .btn-close { filter: invert(1) grayscale(100%) brightness(200%); }

  /* ===== Filter Indicator ===== */
  .filter-indicator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    margin-bottom: 1.25rem;
    border-radius: 8px;
    background: var(--global-code-bg-color);
    border: 1px solid var(--global-divider-color);
    font-size: var(--rs-sm);
    color: var(--global-text-color);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease, margin 0.3s ease, padding 0.3s ease;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .filter-indicator.active {
    opacity: 1;
    max-height: 60px;
    margin-bottom: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  .filter-indicator-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .filter-indicator-text {
    flex: 1;
    font-weight: 500;
  }
  .filter-indicator-text strong { font-weight: 700; }
  .filter-indicator-clear {
    font-size: var(--rs-xs);
    font-weight: 600;
    color: var(--global-theme-color);
    cursor: pointer;
    text-decoration: none;
    white-space: nowrap;
    background: none;
    border: none;
    padding: 0;
  }
  .filter-indicator-clear:hover { text-decoration: underline; }

  /* ===== Related Work ===== */
  .related-work-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--global-divider-color);
  }
  .related-work-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.3rem;
  }
  .related-work-section h3 {
    font-size: var(--rs-xl);
    font-weight: 700;
    margin-bottom: 0;
  }
  .related-work-count {
    font-size: var(--rs-xs);
    color: var(--global-text-color-light);
    font-weight: 500;
  }
  .related-work-section > p {
    font-size: var(--rs-sm);
    color: var(--global-text-color-light);
    margin-bottom: 1.25rem;
  }
  .related-work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.25rem;
  }
  .related-work-card {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    background: var(--global-card-bg-color);
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease;
  }
  .related-work-card.rw-hidden {
    display: none;
  }
  .related-work-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.09);
    text-decoration: none;
    color: inherit;
  }
  html[data-theme='dark'] .related-work-card:hover {
    box-shadow: 0 12px 32px rgba(0,0,0,0.3);
  }

  /* Pillar color banner at top of card */
  .related-work-banner {
    height: 4px;
    width: 100%;
    flex-shrink: 0;
  }
  .related-work-card[data-pillars="perception"] .related-work-banner { background: var(--venn-perception); }
  .related-work-card[data-pillars="coordination"] .related-work-banner { background: var(--venn-coordination); }
  .related-work-card[data-pillars="edge"] .related-work-banner { background: var(--venn-edge); }

  .related-work-thumb {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--global-code-bg-color);
    color: var(--global-text-color-light);
    font-size: var(--rs-xs);
    font-family: monospace;
    border-bottom: 1px solid var(--global-divider-color);
  }
  .related-work-info {
    padding: 1rem;
  }
  .related-work-badge {
    display: inline-block;
    font-size: var(--rs-2xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.2rem 0.55rem;
    border-radius: 4px;
    margin-bottom: 0.4rem;
  }
  .badge-publication {
    background: rgba(181, 9, 172, 0.1);
    color: var(--venn-perception);
  }
  html[data-theme='dark'] .badge-publication {
    background: rgba(56, 189, 248, 0.12);
  }
  .badge-project {
    background: rgba(5, 150, 105, 0.1);
    color: var(--venn-edge);
  }
  html[data-theme='dark'] .badge-project {
    background: rgba(52, 211, 153, 0.12);
  }
  .related-work-title {
    font-size: var(--rs-sm);
    font-weight: 600;
    line-height: 1.35;
    color: var(--global-text-color);
    margin: 0;
  }
  .related-work-pillar {
    font-size: var(--rs-xs);
    color: var(--global-text-color-light);
    margin-top: 0.3rem;
  }

  /* Card tag labels (top-right of card) */
  .related-work-card {
    position: relative;
  }
  .rw-tags {
    position: absolute;
    top: calc(4px + 0.5rem);
    right: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.3rem;
    z-index: 2;
  }
  .rw-tag {
    font-size: var(--rs-2xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 0.18rem 0.5rem;
    border-radius: 3px;
    color: #fff;
    white-space: nowrap;
    line-height: 1.3;
  }
  .rw-tag-pillar {
    opacity: 0.92;
  }
  .rw-tag-area {
    opacity: 0.75;
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    font-size: var(--rs-2xs);
  }
  [data-pillars="perception"] .rw-tag-pillar { background: var(--venn-perception); }
  [data-pillars="coordination"] .rw-tag-pillar { background: var(--venn-coordination); }
  [data-pillars="edge"] .rw-tag-pillar { background: var(--venn-edge); }
  [data-pillars="perception"] .rw-tag-area { background: var(--venn-perception); }
  [data-pillars="coordination"] .rw-tag-area { background: var(--venn-coordination); }
  [data-pillars="edge"] .rw-tag-area { background: var(--venn-edge); }
</style>

<!-- ===== Intro ===== -->
<div class="research-intro">
  <p>
    Our research focuses on <strong>Robust Physical AI</strong> for autonomous robotic systems operating in real-world,
    resource-constrained environments. We study the algorithmic and systems foundations that enable reliable perception,
    coordinated decision-making, and efficient on-device intelligence across heterogeneous robotic platforms &mdash;
    including UAVs, quadruped UGVs, and mobile manipulators.
  </p>
  <p>
    Everything we build runs entirely at the edge, making our systems viable in contested and communication-denied
    environments where cloud connectivity is unavailable or inadmissible.
  </p>
</div>

<!-- ===== Interactive Venn Diagram ===== -->
<div class="venn-wrapper" id="venn-wrapper">
  <div class="venn-header">
    <h3>Research Pillars</h3>
    <p>Click a pillar to filter related work below</p>
  </div>

  <div class="venn-body">
    <!-- SVG on the right -->
    <div class="venn-svg-wrap">
      <svg class="venn-svg" viewBox="0 0 600 520" xmlns="http://www.w3.org/2000/svg">
        <circle class="venn-circle perception" data-pillar="perception" cx="220" cy="200" r="165" fill-opacity="0.18" stroke-width="3" />
        <circle class="venn-circle coordination" data-pillar="coordination" cx="380" cy="200" r="165" fill-opacity="0.18" stroke-width="3" />
        <circle class="venn-circle edge" data-pillar="edge" cx="300" cy="350" r="165" fill-opacity="0.18" stroke-width="3" />

        <text class="venn-label-sub" text-anchor="middle" x="155" y="138">PILLAR 01</text>
        <text class="venn-label" text-anchor="middle" x="155" y="158">Perception</text>
        <text class="venn-label-sub" text-anchor="middle" x="445" y="138">PILLAR 02</text>
        <text class="venn-label" text-anchor="middle" x="445" y="158">Coordination</text>
        <text class="venn-label-sub" text-anchor="middle" x="300" y="440">PILLAR 03</text>
        <text class="venn-label" text-anchor="middle" x="300" y="460">Edge Intelligence</text>

        <text class="venn-center-label" text-anchor="middle" x="300" y="245">Robust</text>
        <text class="venn-center-label" text-anchor="middle" x="300" y="263">Physical AI</text>
        <text class="venn-center-sub" text-anchor="middle" x="300" y="280">at the intersection</text>
      </svg>
      <p class="venn-hint">Hover or tap a circle to explore focus areas</p>
    </div>

    <!-- Focus area panel on the LEFT -->
    <div class="venn-panel" id="venn-panel"></div>

  </div>
</div>

{% comment %}
Related Work: hidden until the cards point at real publications and
projects. Unwrap this comment to bring the section back.
{% endcomment %}
{% comment %}

<!-- ===== Related Work ===== -->
<div class="related-work-section" id="related-work-section">
  <div class="related-work-header">
    <h3>Related Work</h3>
    <span class="related-work-count" id="rw-count">Showing all 6 items</span>
  </div>
  <p id="rw-subtitle">Select a research pillar or sub-area above to filter.</p>

  <!-- Filter indicator -->
  <div class="filter-indicator" id="filter-indicator">
    <span class="filter-indicator-dot" id="filter-dot"></span>
    <span class="filter-indicator-text" id="filter-text"></span>
    <button class="filter-indicator-clear" id="filter-clear">Clear filter</button>
  </div>

  <div class="related-work-grid" id="related-work-grid">
    <!-- Perception cards -->
    <a href="#" class="related-work-card" data-pillars="perception" data-areas="distributed-slam,gps-denied,spatial-repr"><div class="related-work-banner"></div><div class="rw-tags"><span class="rw-tag rw-tag-pillar">Perception</span><span class="rw-tag rw-tag-area">SLAM</span><span class="rw-tag rw-tag-area">GPS-Denied</span></div><div class="related-work-thumb">[ screenshot placeholder ]</div><div class="related-work-info"><span class="related-work-badge badge-publication">Publication</span><h4 class="related-work-title">Multi-Robot Collaborative SLAM in GPS-Denied Environments</h4><p class="related-work-pillar">Perception</p></div></a>

    <a href="#" class="related-work-card" data-pillars="perception" data-areas="semantic-scene,edge-perception"><div class="related-work-banner"></div><div class="rw-tags"><span class="rw-tag rw-tag-pillar">Perception</span><span class="rw-tag rw-tag-area">Semantic Scene</span><span class="rw-tag rw-tag-area">Edge Perception</span></div><div class="related-work-thumb">[ screenshot placeholder ]</div><div class="related-work-info"><span class="related-work-badge badge-project">Project</span><h4 class="related-work-title">Edge-Deployable Semantic Mapping for Quadruped UGVs</h4><p class="related-work-pillar">Perception</p></div></a>

    <!-- Coordination cards -->
    <a href="#" class="related-work-card" data-pillars="coordination" data-areas="task-allocation,multi-robot"><div class="related-work-banner"></div><div class="rw-tags"><span class="rw-tag rw-tag-pillar">Coordination</span><span class="rw-tag rw-tag-area">Task Allocation</span><span class="rw-tag rw-tag-area">Multi-Robot</span></div><div class="related-work-thumb">[ screenshot placeholder ]</div><div class="related-work-info"><span class="related-work-badge badge-publication">Publication</span><h4 class="related-work-title">Hierarchical Task Allocation for Heterogeneous Multi-Robot Teams</h4><p class="related-work-pillar">Coordination &amp; Action</p></div></a>

    <a href="#" class="related-work-card" data-pillars="coordination" data-areas="vla-models,closed-loop"><div class="related-work-banner"></div><div class="rw-tags"><span class="rw-tag rw-tag-pillar">Coordination</span><span class="rw-tag rw-tag-area">VLA Models</span><span class="rw-tag rw-tag-area">Closed-Loop</span></div><div class="related-work-thumb">[ screenshot placeholder ]</div><div class="related-work-info"><span class="related-work-badge badge-project">Project</span><h4 class="related-work-title">Vision-Language-Action Models for Robotic Manipulation</h4><p class="related-work-pillar">Coordination &amp; Action</p></div></a>

    <!-- Edge Intelligence cards -->
    <a href="#" class="related-work-card" data-pillars="edge" data-areas="hw-nas,embedded-inference"><div class="related-work-banner"></div><div class="rw-tags"><span class="rw-tag rw-tag-pillar">Edge Intelligence</span><span class="rw-tag rw-tag-area">HW-Aware NAS</span><span class="rw-tag rw-tag-area">Embedded Inference</span></div><div class="related-work-thumb">[ screenshot placeholder ]</div><div class="related-work-info"><span class="related-work-badge badge-publication">Publication</span><h4 class="related-work-title">Hardware-Aware Neural Architecture Search for Jetson Platforms</h4><p class="related-work-pillar">Edge Intelligence</p></div></a>

    <a href="#" class="related-work-card" data-pillars="edge" data-areas="model-compression,codesign"><div class="related-work-banner"></div><div class="rw-tags"><span class="rw-tag rw-tag-pillar">Edge Intelligence</span><span class="rw-tag rw-tag-area">Model Compression</span><span class="rw-tag rw-tag-area">Co-Design</span></div><div class="related-work-thumb">[ screenshot placeholder ]</div>
      <div class="related-work-info">
        <span class="related-work-badge badge-project">Project</span>
        <h4 class="related-work-title">Real-Time Model Compression for On-Device Autonomy</h4>
        <p class="related-work-pillar">Edge Intelligence</p>
      </div>
    </a>

  </div>
</div>

{% endcomment %}

<!-- Modals container -->
<div id="research-modals"></div>

<!-- ===== Interactive Logic ===== -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  var pillars = {
    perception: {
      title: 'Perception', icon: 'ti ti-eye',
      areas: [
        { name: 'Multi-sensor fusion', slug: 'multi-sensor-fusion', icon: 'ti ti-arrows-shuffle', desc: 'Fusing vision, depth, inertial, and proprioceptive signals across heterogeneous robot platforms.' },
        { name: 'Distributed & collaborative SLAM', slug: 'distributed-slam', icon: 'ti ti-map-2', desc: 'Multi-robot simultaneous localization and mapping for shared spatial understanding.' },
        { name: 'GPS-denied localization', slug: 'gps-denied', icon: 'ti ti-satellite', desc: 'Robust localization and mapping in environments without GPS coverage.' },
        { name: 'Shared spatial representations', slug: 'spatial-repr', icon: 'ti ti-3d-cube-sphere', desc: 'Spatial and semantic representations shared across heterogeneous agents.' },
        { name: 'Semantic scene understanding', slug: 'semantic-scene', icon: 'ti ti-brain', desc: 'Scene understanding for downstream planning and control tasks.' },
        { name: 'Edge-deployable perception', slug: 'edge-perception', icon: 'ti ti-device-analytics', desc: 'Perception pipelines optimized for edge deployment on resource-constrained hardware.' }
      ]
    },
    coordination: {
      title: 'Coordination & Action', icon: 'ti ti-topology-star-ring',
      areas: [
        { name: 'Vision-Language-Action models', slug: 'vla-models', icon: 'ti ti-message-language', desc: 'VLA models for grounding high-level language intent into robotic actions.' },
        { name: 'Task & motion planning', slug: 'task-motion', icon: 'ti ti-route', desc: 'Integrated task and motion planning for complex manipulation and navigation.' },
        { name: 'Mission decomposition', slug: 'mission-decomp', icon: 'ti ti-hierarchy-3', desc: 'Hierarchical mission decomposition and planning under uncertainty.' },
        { name: 'Capability-aware allocation', slug: 'task-allocation', icon: 'ti ti-users-group', desc: 'Task allocation that accounts for heterogeneous robot capabilities and constraints.' },
        { name: 'Multi-robot coordination', slug: 'multi-robot', icon: 'ti ti-antenna-bars-5', desc: 'Coordination under partial observability and communication constraints.' },
        { name: 'Closed-loop execution', slug: 'closed-loop', icon: 'ti ti-refresh', desc: 'Adaptive closed-loop execution in dynamic, unstructured environments.' }
      ]
    },
    edge: {
      title: 'Edge Intelligence', icon: 'ti ti-cpu',
      areas: [
        { name: 'Model compression', slug: 'model-compression', icon: 'ti ti-transform', desc: 'Distillation, pruning, and quantization for efficient on-device inference.' },
        { name: 'Hardware-aware NAS', slug: 'hw-nas', icon: 'ti ti-circuit-board', desc: 'Neural architecture search optimized for target hardware platforms.' },
        { name: 'Embedded inference', slug: 'embedded-inference', icon: 'ti ti-cpu-2', desc: 'Real-time inference on Jetson, ARM, and other embedded platforms.' },
        { name: 'Robust inference', slug: 'robust-inference', icon: 'ti ti-shield-check', desc: 'Maintaining inference quality under noise, latency, and bandwidth constraints.' },
        { name: 'AI-systems co-design', slug: 'codesign', icon: 'ti ti-settings-cog', desc: 'Joint optimization of AI models and systems architecture for edge autonomy.' }
      ]
    }
  };

  var pillarColors = { perception: 'var(--venn-perception)', coordination: 'var(--venn-coordination)', edge: 'var(--venn-edge)' };

  // Generate modals
  var modalsHtml = '';
  Object.keys(pillars).forEach(function(key) {
    pillars[key].areas.forEach(function(area) {
      modalsHtml += '<div class="modal fade research-modal" id="modal-' + area.slug + '" tabindex="-1" aria-hidden="true">' +
        '<div class="modal-dialog modal-lg modal-dialog-centered">' +
          '<div class="modal-content">' +
            '<div class="modal-header">' +
              '<h5 class="modal-title"><i class="' + area.icon + '" style="color:var(--global-theme-color);margin-right:0.4rem;"></i> ' + area.name + '</h5>' +
              '<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>' +
            '</div>' +
            '<div class="modal-body">' +
              '<div class="modal-img-placeholder"><span>[ research screenshot — ' + area.name + ' ]</span></div>' +
              '<p class="modal-desc">' + area.desc + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
    });
  });
  document.getElementById('research-modals').innerHTML = modalsHtml;

  // DOM refs
  var circles = document.querySelectorAll('.venn-circle');
  var panel = document.getElementById('venn-panel');
  var hint = document.querySelector('.venn-hint');
  var relatedCards = document.querySelectorAll('.related-work-card');
  var filterIndicator = document.getElementById('filter-indicator');
  var filterDot = document.getElementById('filter-dot');
  var filterText = document.getElementById('filter-text');
  var filterClear = document.getElementById('filter-clear');
  var rwCount = document.getElementById('rw-count');
  var rwSubtitle = document.getElementById('rw-subtitle');
  var relatedSection = document.getElementById('related-work-section');

  var activePillar = null;
  var activeArea = null;
  var isLocked = false; // locked = user clicked a circle

  function updateRelatedWork(pillarKey, areaSlug) {
    // The Related Work section is commented out, so its controls are absent.
    if (!rwCount) return;
    var visible = 0;
    relatedCards.forEach(function(card) {
      var matchesPillar = !pillarKey || card.dataset.pillars === pillarKey;
      var matchesArea = !areaSlug || (card.dataset.areas && card.dataset.areas.split(',').indexOf(areaSlug) !== -1);
      var show = matchesPillar && matchesArea;
      if (show) {
        card.classList.remove('rw-hidden');
        card.style.opacity = '1';
        visible++;
      } else {
        card.classList.add('rw-hidden');
      }
    });
    rwCount.textContent = pillarKey ? 'Showing ' + visible + ' of 6 items' : 'Showing all 6 items';
  }

  function showFilterBar(pillarKey, areaSlug, areaName) {
    if (!filterIndicator) return;
    var data = pillars[pillarKey];
    filterDot.style.background = pillarColors[pillarKey];
    if (areaSlug && areaName) {
      filterText.innerHTML = 'Filtered by <strong>' + data.title + '</strong> &rsaquo; <strong>' + areaName + '</strong>';
    } else {
      filterText.innerHTML = 'Filtered by <strong>' + data.title + '</strong>';
    }
    filterIndicator.classList.add('active');
    rwSubtitle.style.display = 'none';
  }

  function hideFilterBar() {
    if (!filterIndicator) return;
    filterIndicator.classList.remove('active');
    rwSubtitle.style.display = '';
  }

  function showPillar(pillarKey, opts) {
    opts = opts || {};
    activePillar = pillarKey;
    activeArea = null;
    var data = pillars[pillarKey];

    circles.forEach(function(c) {
      if (c.dataset.pillar === pillarKey) {
        c.classList.add('venn-active');
        c.classList.remove('venn-dimmed');
      } else {
        c.classList.add('venn-dimmed');
        c.classList.remove('venn-active');
      }
    });

    // Build panel with chips
    var html = '<div class="venn-panel-title"><i class="' + data.icon + '"></i> ' + data.title + '</div>';
    html += '<div class="venn-panel-chips">';
    data.areas.forEach(function(area) {
      html += '<span class="venn-chip" data-area="' + area.slug + '" data-pillar="' + pillarKey + '" data-area-name="' + area.name + '">' +
        '<i class="' + area.icon + '"></i> ' + area.name + '</span>';
    });
    html += '</div>';
    panel.innerHTML = html;
    panel.classList.add('active');
    if (hint) hint.classList.add('hidden');

    // Wire chip click → filter related work + highlight chip
    panel.querySelectorAll('.venn-chip').forEach(function(chip) {
      chip.addEventListener('click', function(e) {
        e.stopPropagation();
        var slug = this.dataset.area;
        var name = this.dataset.areaName;

        if (activeArea === slug) {
          // Deselect sub-area → back to pillar filter
          activeArea = null;
          panel.querySelectorAll('.venn-chip').forEach(function(c) { c.classList.remove('chip-active'); });
          updateRelatedWork(pillarKey, null);
          showFilterBar(pillarKey, null, null);
        } else {
          activeArea = slug;
          panel.querySelectorAll('.venn-chip').forEach(function(c) { c.classList.remove('chip-active'); });
          this.classList.add('chip-active');
          updateRelatedWork(pillarKey, slug);
          showFilterBar(pillarKey, slug, name);
        }

        // Scroll to related work
        if (relatedSection) relatedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Update related work for pillar
    updateRelatedWork(pillarKey, null);
    showFilterBar(pillarKey, null, null);

    // Scroll to related work if this was a click (locked)
    if (opts.scrollToWork) {
      setTimeout(function() {
        if (relatedSection) relatedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }

  function resetAll() {
    activePillar = null;
    activeArea = null;
    isLocked = false;
    circles.forEach(function(c) { c.classList.remove('venn-active', 'venn-dimmed'); });
    panel.classList.remove('active');
    if (hint) hint.classList.remove('hidden');
    updateRelatedWork(null, null);
    hideFilterBar();
  }

  // Desktop hover — only when not locked
  circles.forEach(function(circle) {
    circle.addEventListener('mouseenter', function() {
      if (!isLocked) {
        var key = this.dataset.pillar;
        if (activePillar !== key) {
          activePillar = key;
          activeArea = null;
          var data = pillars[key];
          circles.forEach(function(c) {
            if (c.dataset.pillar === key) { c.classList.add('venn-active'); c.classList.remove('venn-dimmed'); }
            else { c.classList.add('venn-dimmed'); c.classList.remove('venn-active'); }
          });
          // Build panel (hover only, no related work update)
          var html = '<div class="venn-panel-title"><i class="' + data.icon + '"></i> ' + data.title + '</div>';
          html += '<div class="venn-panel-chips">';
          data.areas.forEach(function(area) {
            html += '<span class="venn-chip" data-area="' + area.slug + '">' +
              '<i class="' + area.icon + '"></i> ' + area.name + '</span>';
          });
          html += '</div>';
          panel.innerHTML = html;
          panel.classList.add('active');
          if (hint) hint.classList.add('hidden');
        }
      }
    });
  });

  // Click on circle → lock selection, update related work, scroll
  circles.forEach(function(circle) {
    circle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var key = this.dataset.pillar;
      if (isLocked && activePillar === key) {
        resetAll();
      } else {
        isLocked = true;
        showPillar(key, { scrollToWork: true });
      }
    });
  });

  // Reset on leave — only when not locked
  document.getElementById('venn-wrapper').addEventListener('mouseleave', function() {
    if (!isLocked) {
      activePillar = null;
      activeArea = null;
      circles.forEach(function(c) { c.classList.remove('venn-active', 'venn-dimmed'); });
      panel.classList.remove('active');
      if (hint) hint.classList.remove('hidden');
    }
  });

  // Clear filter button
  if (filterClear) {
    filterClear.addEventListener('click', function(e) {
      e.preventDefault();
      resetAll();
      document.getElementById('venn-wrapper').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Click outside Venn wrapper on mobile → reset
  document.addEventListener('click', function(e) {
    if (isLocked && !document.getElementById('venn-wrapper').contains(e.target) && !(relatedSection && relatedSection.contains(e.target)) && !e.target.closest('.modal')) {
      resetAll();
    }
  });
});
</script>
