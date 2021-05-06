---
title: Ridge regression and Lasso
sidebar_label: Ridge regression
---
### Ridge regression

$$
L(w, b) = \sum_i [y_i - (w \cdot x_i + b)]^2 + \lambda |w|^2
$$

Linear regression is a good choice when we have lots of training data. When we
try to minimize $L$ with higher value of of $\lambda$, it will result in lower
$w$'s. Increasing $\lambda$ results in less weight for training data. In
reality, we can vary $\lambda$ and choose a value for which the test error is
minimum.

In case of Ridge regression also, we have a closed form solution:

$$
w = (X^T X + \lambda I)^{-1}(X^T y)
$$

### Lasso

Similar to Ridge regression:

$$
L(w, b) = \sum_i [y_i - (w \cdot x_i + b)]^2 + \lambda |w|
$$

It has some advantages, like it produces sparse $w$ matrix (lots of zero
elements).

### Notebooks
- [Ridge regression on carprice dataset](
https://github.com/pranabdas/machine-learning/blob/master/notebooks/04-ridge-regression.ipynb)
