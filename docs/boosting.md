---
title: Boosting
---
Boosting is an ensemble classifier, meaning it combines multiple algorithms.
Boosting can be used to improve the performance of weak learner. If we have an
algorithm that is better than random but performs poorly by itself. In such
situations, boosting can be used to improve its performance. During training,
boosting goes through the dataset several times. We use our actual algorithm,
and look into its results. If the algorithm predicts correct result for a data
point, we leave the weight of that data points as it is. However, if the
algorithm predicts wrong, we increase the weight of those data points (a weight
of 2, means having that data point twice) and apply our algorithm again. Most
likely, we will obtain different prediction output. We repeat the process for
certain number of times. Our final boosting algorithm is a weighted (this weight
is the ratio of how well a specific boosting performed) sum of all these
individual boosting. Overall this can improve the performance of a weak learning
algorithm drastically.

### AdaBoost (Adaptive Boosting) {#adaboost}

### Resources
- [Original AdaBoost paper](https://api.semanticscholar.org/CorpusID:1836349)
