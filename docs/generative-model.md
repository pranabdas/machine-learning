---
title: Generative or Naive Bayes model
sidebar_label: Naive Bayes
---

Generative (Naive Bayes) model for classification is based on Bays' theorem.
Here we fit a suitable probability distribution $P_i(x)$ to each class of
data. Then we make decision for a new point for which the probability is maximum
$\pi_i P_i(x)$, where $\pi_i$ is the relative frequency of <i>i<sup>th</sup></i>
class in the training dataset.

For the probability distribution Gaussian distribution is usual choice, but we
can choose other distributions suitable to our problem.

### Notebooks
- [Naive Bayes to classify UCI winery dataset](
https://github.com/pranabdas/machine-learning/blob/master/notebooks/06-naive-bayes-uci-winery-dataset.ipynb)

### Resources
- <https://scikit-learn.org/stable/modules/naive_bayes>
