---
title: Linear regression
---

Minimize the square loss function:

$$
L(w, b) = \sum_i [y_i - (w \cdot x_i + b)]^2
$$

Predictor/independent variable (x): used to predict the response variable.
Response variable (y): the variable that we want to predict.

In one dimension, the problem becomes fitting a straight line of the form:
$\hat{y} = wx +b$, where $w$ is the slope and $b$ is the intercept. If we were
given a bunch of training data points $(x_1, y_1),$ $(x_2, y_2),$ $...,$ $(x_n,
y_n)$, our task is to find a line ($w$ and $b$) for which the square error is
minimum.

We can find the minimum of the square loss function and obtain solution for $w$
and $b$:

$$
\frac{dL}{dw} = \frac{dL}{db} = 0
$$

$$
\Rightarrow \sum_i^n 2 (y_i - (w x_i + b)) = 0
$$

$$
\Rightarrow \sum_i^n y_i = w \sum_i^n x_i + nb
$$

$$
\Rightarrow b = \frac{1}{n} \sum_i^n y_i - \frac{w}{n} \sum_i^n x_i = \bar{y} -w
\bar{x}
$$

We can solve for $w$ by setting $\frac{dL}{dw} = 0$:

$$
w = \frac{\sum_i^n (y_i - \bar{y})(x_i - \bar{x})}{\sum_i^n (x_i - \bar{x})^2}
$$

The above method can be extended for more than one predictor variable. In that
case,

$$
\hat{y} = w^{(1)} x^{(1)} + w^{(2)} x^{(2)} + w^{(k)} x^{(k)} + b = w \cdot x +
b
$$

We can incorporate $b$ in $w$s by assuming an extra predictor variable:

$$
\hat{y} = w \cdot x + b = \tilde{w} \cdot \tilde{x}
$$

where $\tilde{x} = (1, x)$ and $\tilde{w} = (b, w)$.

Our variables can be written as matrices:

$X = \begin{pmatrix} \leftarrow & \tilde{x_1} & \rightarrow \\ \leftarrow &
\tilde{x_2} & \rightarrow \\ \leftarrow & ... & \rightarrow \\ \leftarrow &
\tilde{x_n} & \rightarrow \end{pmatrix}$, $y = \begin{pmatrix} y_1 \\ y_2
\\ ... \\ y_n \end{pmatrix}$

The loss function is minimized at: $\tilde{w} = (X^TX)^{-1}(X^Ty)$.

Scaling of data is not important when we have multiple variable in case of
linear regression.

### Notebooks
- [Linear regression on car price dataset](
https://github.com/pranabdas/machine-learning/blob/master/notebooks/03-linear-regression.ipynb)
