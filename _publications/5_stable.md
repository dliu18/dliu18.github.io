---
title: "STABLE: Identifying and Mitigating Instability in Embeddings of the Degenerate Core"
collection: publications
permalink: /publication/stable
paperurl: '/files/papers/stable/stable-Main-SDM-23.pdf'
codeurl: 'https://github.com/dliu18/stable'
project-site: '/publication/stable'
authors: "<b>David Liu</b> and Tina Eliassi-Rad"
venue: SDM 2023
citation: " <b>D. Liu</b> and T. Eliassi-Rad. 2023. <i>Identifying and Mitigating Instability in Embeddings of the Degenerate Core</i>. SIAM SDM'23."
---

<ul>
	<li> <a href="/files/papers/stable/stable-Main-SDM-23.pdf" target="_blank">[Paper]</a> </li>
	<li> <a href="/files/papers/stable/stable-Supplemental-SDM-23.pdf" target="_blank">[Supplemental Materials]</a> </li>
</ul>

<center>
	<img src="/files/papers/stable/ShaRe.png">
	<p><i>We measure stability of node embeddings by iteratively shaving off k-shells and re-embedding the graph. Instability is defined as perturbations to the embeddings of the degenerate core (k-core with maximum k) as the periphery is removed. The above example uses the Zachary Karate Club network and the Node2Vec embedding algorithm.</i></p>
</center>

<p>
<b>Abstract: </b>
Are the embeddings of a graph's degenerate core stable? What happens to the embeddings of nodes in the degenerate core as we systematically remove periphery nodes (by repeatedly peeling off <i>k</i>-cores)? We discover three patterns w.r.t. instability in degenerate-core embeddings across a variety of popular graph embedding algorithms and datasets. We correlate instability with an increase in edge density, and then theoretically show that in the case of Erdős–Rényi model graphs embedded with Laplacian Eigenmaps, the best and worst possible embeddings become less distinguishable as density increases. Furthermore, we present the STABLE algorithm, which takes an existing graph embedding algorithm and makes it stable. We show the effectiveness of STABLE in terms of making the degenerate-core embedding stable and still producing state-of-the-art link prediction performance.
</p>

<br> 

