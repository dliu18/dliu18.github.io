---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am an [Assistant Research Professor](https://datasciencecenter.cornell.edu/professorship-program/) at Cornell's Center for Data Science for Enterprise and Society, where I am mentored by Jon Kleinberg, Maryam Fazel, and Sarah Dean. I am affiliated with the Department of Computer Science.
 
I seek to improve the ability of machine learning models to capture the preferences and identities of minority populations. I work on applications to recommender systems, rank-choice voting, and algorithmic fairness.   

I completed my Ph.D. in computer science at Northeastern University, affiliated with the [Network Science Institute](https://www.networkscienceinstitute.org/). I obtained a Bachelor of Science in Engineering from Princeton University.

I have worked as a research-scientist intern at Meta (Central Applied Science and FAIR AI), sociotechnical researcher at [Taraaz](https://taraazresearch.org/), and software engineer at Bloomberg LP.

## News

* [Jun '26] Released ranked-choice [forecasts of the 2026 Maine primaries](/maine-2026-primaries).
* [May '26] Work on data mixing for collaborative filtering accepted to Pluralistic Alignment @ ICML 2026.
* [Jan '26] Discussed my work on recommender systems on the [Data Skeptic](https://open.spotify.com/episode/6IsPN6U9tHJMdvA0sdQM8d) podcast.
* [Jan '26] Paper on [power-niche users](https://arxiv.org/abs/2509.17265) accepted to WWW '26

{% include publications_list.html %}

Archives of my sports reporting for The Daily Princetonian are available [here](https://www.dailyprincetonian.com/staff/david-liu).

<h2 id="teaching">Teaching</h2>

{% for post in site.teaching reversed %}
  {% include archive-single-class.html %}
{% endfor %}