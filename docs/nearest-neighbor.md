---
title: Nearest neighbor
---

We can use nearest neighbor algorithm to classify objects. Say we have a training set with correct labels for the objects. Now for a given test point, we find out the nearest object in our training dataset and classify it as the label of the nearest training data point. It is non-parametric method, and often suitable for problems where the decision boundary is irregular.

In order to determine the nearest neighbor, we need the notion of distance. The most common distance function we are familiar with is the Euclidean distance. Say we have two points in a 2D plane given by ($x_1$, $y_1$) and ($x_2$, $y_2$). The Euclidean distance between them is : $\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

The same distance function can be extended to classifying other type of objects other than points in a Euclidean space. However, there are other distance functions that are used in machine learning depending on the problem.

Euclidean distance is a subset of broader class of $L_p$ distances:

$$|d|_p = \large(\sum_i |(x_i - z_i)|^p\large)^{1/p}$$

$L_{\infty}$ is defined as: $|x-z|_{\infty} = max_i |x_i - z_i|$


### K-Nearest Neighbors (KNN)

K represents the number of nearest neighbors. We find K nearest neighbors and decide on the output label by voting among those K labels. If K=1, it becomes above nearest neighbor case. The distance in KNN could be chosen among Euclidean, Hamming, Manhattan, Minkowski etc.

KNN performs better with a low number of features. We need to perform principal component analysis or feature selection before applying KNN. Increase in dimension requires exponential increase in data points.
