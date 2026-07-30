---
title: "News | Siggers Lab"
layout: gridlay
excerpt: "News, milestones, publications, and updates from the Siggers Lab at Boston University."
sitemap: false
permalink: /news/
---

<header class="page-hero news-hero">
  <p class="eyebrow">News &amp; updates</p>
  <h1>What’s happening in the Siggers Lab</h1>
  <p>Celebrating our people, sharing new research, and documenting milestones from across the lab.</p>
</header>

<section class="news-feed" aria-label="Siggers Lab news">
  {% for article in site.data.siggers_news %}
    <article class="news-card">
      <div class="news-card__date">
        <time datetime="{{ article.date }}">
          <span>{{ article.date | date: "%b" }}</span>
          <strong>{{ article.date | date: "%d" }}</strong>
          <small>{{ article.date | date: "%Y" }}</small>
        </time>
      </div>
      <div class="news-card__content">
        <div class="news-card__meta">
          <span>{{ article.category }}</span>
          <span>{{ article.display_date }}{% if article.time %} · {{ article.time }}{% endif %}</span>
        </div>
        <h2>
          {% if article.url %}
            <a href="{{ article.url }}" target="_blank" rel="noopener noreferrer">{{ article.title }}</a>
          {% else %}
            {{ article.title }}
          {% endif %}
        </h2>
        <p>{{ article.excerpt }}</p>
        {% if article.url %}
          <a class="news-card__link" href="{{ article.url }}" target="_blank" rel="noopener noreferrer">Read the original post <span aria-hidden="true">→</span></a>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</section>
