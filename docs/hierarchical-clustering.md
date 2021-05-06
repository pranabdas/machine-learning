---
title: Hierarchical Clustering
---

In our discussion of K-means clustering, we have clustered the classes in the
same level. However, in real life situation, the data exists where the classes
are on different levels. Maybe the overall dataset has three clusters, then one
of the clusters may have two subcategories etc. This is where hierarchical
clustering comes into play.

### Single linkage algorithm
This algorithm works in a bottom-up fashion. We start with the bottom of the
cluster tree. We consider all the data points are its own cluster. Then we merge
the two nearest points, then the next two nearest (it could be a merged node in
the previous step), and so on.

One important question here is: how do we define the distance function?
Secondly, how do we define the distance between two clusters (once multiple
points are merged)? In case of **single linkage**, the distance between two
clusters are defined as the distance between two closest points in those two
clusters:

$$
dist(C, C') = \min\limits_{x\in C, x'\in C'} ||x - x'||
$$

There are several flavors of linkage methods with varying definition for the
distance functions.

### Complete linkage
In this case, the distance between two cluster is the distance between two
furthest points in those two clusters:

$$
dist(C, C') = \max\limits_{x\in C, x'\in C'} ||x - x'||
$$

### Average linkage
Instead of considering the distance between two closest or furthest pairs, in
popular linkage methods, somewhat average between the points in the clusters is
taken. There are several different ways the average can be defined.

Distance between cluster centers:

$$
dist(C, C') = ||\min(C) - \min(C')||
$$

Average pairwise distance between points in two clusters:

$$
dist(C, C') = \frac{1}{|C|\cdot|C'|}\sum\limits_{x\in C}
\sum\limits_{x'\in C'}||x - x'||
$$

Ward's method: increase k-means cost from merging the clusters:

$$
dist(C, C') = \frac{|C|\cdot|C'|}{|C| + |C'|}||\min(C) - \min(C')||^2
$$

### Notebooks
- [Hierarchical clustering: animals with features and names](
https://github.com/pranabdas/machine-learning/blob/master/notebooks/hierarchical-clustering.ipynb)
