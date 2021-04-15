---
title: K-means clustering
---

This is a simple and widely used representation learning algorithm. It is an
un-supervised learning method; there is no labels or target variables.It groups
the dataset based on the pattern in the data.It is used in various
recommendation engines (Spotify helping you find new songs based on the type of
songs you listen, YouTube recommends you the next video to watch, Amazon suggest
the product you might be interested to buy), customer segmentation, image
segmentation etc.

First we randomly choose desired number (k) of centers. We connect all other
points to their respective nearest centers. Then we calculate the centroid of
the clusters. We find the nearest points with respect to those centroids, and
define new centroids onces there is no change in centroid positions we stop
searching and a solution is reached.

We have input data: $x_1, x_2, \dots, x_n \in \R^D$. We have to find $k$ cluster
centers at positions $\mu_1, \mu_2, \dots, \mu_k \in \R^D$ for which:

$$cost(\mu_1, \mu_2, \dots, \mu_k) = \sum\limits_{i=1}^n \min\limits_j||x_i -\mu_i||^2$$

Unfortunately, this problem is [NP hard](
https://en.wikipedia.org/wiki/NP_(complexity)), and depending on the initial
choice of centers, it would lead to different end results (it will converge to a
local minima). There are ways to mitigate this problem. One such method is
**k-means++**, where once a cluster center is chosen, it is preferred to have
next center that is farthest from previously chosen centers.

### Notebooks
- [K-means clustering on bank loan data](
https://github.com/pranabdas/machine-learning/blob/master/notebooks/k-means-clustering.ipynb)


### Resources
- <https://en.wikipedia.org/wiki/K-means_clustering>
- <https://www.analyticsvidhya.com/blog/2019/08/comprehensive-guide-k-means-clustering/>
- <https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1>
