---
layout: page
permalink: /publications/
title: Publications
description: selected publications and manuscripts
nav: true
nav_order: 1
---

<div class="section-intro">
  <h2>Publications</h2>
  <p>
    Selected research papers and manuscripts.
  </p>
</div>

<div class="publication-item">
  <a class="pub-figure" href="https://nopeworld.github.io/">
    <img class="pub-image" src="{{ '/assets/img/nopeworld.gif' | relative_url }}" alt="Left: the raw world model walks through a brick pillar. Right: with NoPeWorld it stops at the bricks.">
  </a>
  <div class="pub-meta">
    <p class="pub-title"><a href="https://arxiv.org/abs/2611.27963">Non-penetrating World Models</a></p>
    <p class="pub-authors"><strong>Yuhang Dai</strong>, Yinwei Wu, Ziyue Lin, Han Ji, Xingyi Yang</p>
    <p class="pub-links"><a href="https://arxiv.org/abs/2611.27963">arXiv</a> / <a href="https://nopeworld.github.io/">project page</a> / <a href="https://github.com/yuhangdai427/NoPeWorld">code</a> / <a href="https://huggingface.co/PeterDAI/NoPeWorld">weights</a> / <a href="https://huggingface.co/datasets/PeterDAI/NoPeBench">NoPeBench</a></p>
    <p class="pub-summary">Interactive video world models walk through obstacles. NoPeWorld reads a frozen model's own hidden states with a small head, replaces unsafe actions with safe ones, and cuts the violation rate over six world models from 74% to 16%.</p>
  </div>
</div>

<div class="publication-item">
  <a class="pub-figure" href="https://arxiv.org/abs/2604.14048">
    <img class="pub-image" src="{{ '/assets/img/free_geometry_arch.png' | relative_url }}" alt="Architecture of Free Geometry">
  </a>
  <div class="pub-meta">
    <p class="pub-title"><a href="https://arxiv.org/abs/2604.14048">Free Geometry: Refining 3D Reconstruction from Longer Versions of Itself</a></p>
    <p class="pub-authors"><strong>Yuhang Dai</strong>, Xingyi Yang</p>
    <p class="pub-links"><a href="https://arxiv.org/abs/2604.14048">arXiv</a> / <a href="https://github.com/yuhangdai427/Free-Geometry">code</a></p>
    <p class="pub-summary">Free Geometry adapts feed-forward 3D reconstruction models at test time using self-supervised feature consistency from longer multi-view observations.</p>
  </div>
</div>
