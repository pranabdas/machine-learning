---
title: Basic Probability and Statistics
sidebar_label: Basics
---
### Expectation value
The expectation value of a function $g : \R \to \R$ of a univariate continuous
random variable $X \sim p(x)$ is given by

$$
\mathrm{E}_{\mathrm{X}}[g(x)] = \int_{\Chi} g(x) p(x) dx
$$

In case of $g$ is a function of discrete random variable $X \sim p(x)$ is given
by

$$
\mathrm{E}_{\mathrm{X}}[g(x)] = \sum \limits_{x \in \Chi} g(x) p(x)
$$

For multivariate random variable, the expectation value is defined element wise,

$$
\mathrm{E}_{\mathrm{X}}[g(x)] = \begin{bmatrix} \mathrm{E}_{\mathrm{X_1}}
[g(x_1)] \\ \mathrm{E}_{\mathrm{X_2}}[g(x_2)] \\ \vdots \\ \mathrm{E}_{\mathrm
{X_D}}[g(x_D)]\end{bmatrix} \in \R^D
$$

### Variance
Expectation value of $(x_i - \bar{x})^2$

### Standard deviation
$$
\sigma = \sqrt{Variance}
$$

### Correlation

Uncorrelated: $\mathcal{E}(XY) = \mathcal{E}(X) \mathcal{E}(Y)$, where
$\mathcal{E}$ denotes expectation values.

Positive correlation: $\mathcal{E}(XY) > \mathcal{E}(X) \mathcal{E}(Y)$

Negative correlation: $\mathcal{E}(XY) < \mathcal{E}(X) \mathcal{E}(Y)$

Measure of correlation: Covariance

$$
Cov(X, Y) = \mathcal{E}(XY) - \mathcal{E}(X) \mathcal{E}(X)
$$

Pearson's correlation coefficient:

$$
\frac{\mathcal{E}(XY) - \mathcal{E}(X) \mathcal{E}(X)}{\sigma(X) \sigma(Y)}
$$

Range for Pearson's coefficient: [-1, 1].

**Note:** If two variables are uncorrelated, their covariance is 0. However, the
reverse need not be true: two variables can dependent on each other and still
can have zero covariance.

### Bayes' rule

Definition of conditional probability:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$, if $$P(B) \neq 0$$

$P(A|B)$ is probability of event $A$ given that event $B$ is true/occurring.

$$
P(A|B) = \frac{P(A) P(B|A)}{P(B)}
$$

### Resources

- Probability and statistics: <https://projects.iq.harvard.edu/stat110>
- Bayes' rule Wikipedia: <https://en.m.wikipedia.org/wiki/Bayes%27_theorem>
