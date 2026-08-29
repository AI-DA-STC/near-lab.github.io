---
layout: profiles
permalink: /people/
title: people
description: Members of the lab
nav: true
nav_order: 5

profiles:
  - align: right
    image: william.jpeg
    content: william_bio.md
    image_circular: false
    more_info: >
      <p><strong>William Teo</strong></p>
      <p>Lab Director</p>
      <div class="social-icons">
        <a href="https://www.william-teo.com" title="Website"><i class="fa-solid fa-globe"></i></a>
        <a href="https://scholar.google.com/citations?user=kgn0kGkAAAAJ&hl=en" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
        <a href="https://www.linkedin.com/in/william-teo/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      </div>

  - align: left
    image: roy.png
    content: roy_bio.md
    image_circular: false
    more_info: >
      <p><strong>Dibyendu Roy</strong></p>
      <p>Principal AI Engineer</p>
      <div class="social-icons">
        <a href="https://scholar.google.com/citations?user=7wXXB3AAAAAJ&hl=en&oi=sra" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
        <a href="https://www.linkedin.com/in/dibyendu-roy-phd-11bb6569/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      </div>

  - align: right
    image: jiaying.jpeg
    content: jiaying_bio.md
    image_circular: false
    more_info: >
      <p><strong>Jiaying</strong></p>
      <p>Principal AI Engineer</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/jiaying-chen-33bb6510b/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      </div>

  - align: left
    image: krishna.png
    content: krishna_bio.md
    image_circular: false
    more_info: >
      <p><strong>Krishna</strong></p>
      <p>Assistant Principal AI Engineer</p>
      <div class="social-icons">
        <a href="https://krishna22112023.github.io/" title="Website"><i class="fa-solid fa-globe"></i></a>
        <a href="https://scholar.google.com/citations?hl=en&user=gHmg-iwAAAAJ&view_op=list_works&authuser=1&sortby=pubdate" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>
        <a href="https://www.linkedin.com/in/srikrishna-i-449a27143/" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
      </div>
---

<style>
.social-icons {
  margin-top: 10px;
}
.social-icons a {
  font-size: 1.2rem;
  margin-right: 12px;
  color: #6c757d;
  transition: color 0.2s ease;
}
.social-icons a:hover {
  color: #007bff;
}
.social-icons .ai {
  font-size: 1.3rem;
}
/* The rule before each profile clears the previous one's portrait, which floats
   to the opposite side. Clearing the float itself is not enough: that moves the
   float down but leaves the bio after it starting alongside the old float, so
   the bio ends up squeezed between the two. */
.post article hr {
  clear: both;
}
/* Keep the bio in a single column beside the floated portrait. Without a block
   formatting context it wraps around the float instead: list markers land on
   top of the photo, and any text longer than the image runs full width
   underneath it, breaking the left edge. The portrait only floats from 576px up
   (`float-sm-*`), so below that this is simply a full-width block. */
.profile-bio {
  display: flow-root;
}
/* al-folio sets these inline-block, so a short role sits on the same line as
   the name and only longer ones appear stacked. Always give the role its own
   line. Needs to outrank `.profile .more-info p` in _base.scss. */
.post article .profile .more-info p {
  display: block;
}
.profile-bio ol,
.profile-bio ul {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.profile-bio li {
  margin-bottom: 0.5rem;
}
/* A percentage tuned for the desktop column leaves a thumbnail on a phone, so
   let the group photo use the full width below the profile breakpoint. */
.team-photo {
  width: 100%;
  margin-bottom: 15px;
}
@media (min-width: 576px) {
  .team-photo {
    width: 60%;
  }
}
</style>

<div style="text-align: center; margin-bottom: 40px;">
  <img src="{{ '/assets/img/team_near.jpg' | relative_url }}" alt="NEAR Lab team members" class="img-fluid rounded z-depth-1 team-photo">
  <p style="color: #6c757d; font-style: italic;">Members of NEAR Lab at Seletar Digital Hub, Singapore</p>
</div>
