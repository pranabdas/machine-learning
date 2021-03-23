---
title: Logistic regression
---
### Logistic regression : conditional probability

**Sigmoid/Squashing function:**

$$s(x) = \frac{1}{1 + e^{-x}}$$

$x$ can have range [-$\infty$, +$\infty$], while $s$ have range [0, 1].

When we are on a decision boundary, the probability is equal for both outcomes.
When we move away from the decision boundary, we have certain outcome more
likely.

$$Pr(y|x) = \frac{1}{1 + e^{-y (w \cdot x + b)}}$$

Sigmoid function is linear near 0, and has sharp slopes towards the ends. It
squashes the outliers towards 0 or 1.

The data is fitted with the linear regression model, then a logistic function is
used to predict the categorical target.
