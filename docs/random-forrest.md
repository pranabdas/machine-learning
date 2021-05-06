---
title: Random Forrest
---
Random Forrest is an ensemble classifier (it can also be used as a regressor,
instead of majority voting we consider the weighted average of each individual
tree for the final outcome). It combines multiple decision tree classifiers to
form a final single classifier. While decision trees are common and simple
supervised learning method, they have some drawbacks as well, such as bias and
overfitting. Such drawbacks can be overcome by using multiple decision trees to
form an ensemble in the random forest algorithm. They improve the predictions,
particularly when the individual trees are uncorrelated (random) with each
other.

Unlike a single decision tree, random forrest selects a subset of features as
well. This can reduce the risk of overfitting. Each individual tree predicts a
output class, and the class gets majority voting is the model's prediction.
Random forest algorithms have three main hyperparameters: node size, the number
of trees, and the number of features sampled.
