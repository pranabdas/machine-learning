---
title: Basic Probability and Statistics
sidebar_label: Probability and Statistics
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

### Mean

$\bar{x} = \frac{1}{N}\sum \limits_i x_i$

### Variance

$Variance = \frac{1}{N}(x_i - \bar{x})^2$

Also see [Bessel's correction](https://en.wikipedia.org/wiki/Bessel%27s_correction).

### Standard deviation
$\sigma = \sqrt{Variance}$

### z-score

$z$-score $(x_i) = (x_i - \bar{x})/\sigma$

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

### Confidence interval

Confidence Interval = Best Estimate ± Margin of Error

In case of 95% Confidence interval, the formula becomes:

$$
\hat{p} \pm 1.96 \times \sqrt{\frac{\hat{p}(1 - \hat{p})}{n}}
$$

Where $n$ is the sample size and $\hat{p}$ is referred as population proportion.
This means if we sample for large number of times, overall 95% of the time, the
estimation would fall within the (Best Estimate ± Margin of Error). This theory
is best applicable for simple random sample. We should have large enough sample
size. The data is a categorical variable.

Below is the $z$-multiplier for different confidence intervals. The z-values are
taken from the normal distribution.

Confidence interval (%) | z-multiplier
:---------------------: | ------------
90                      | 1.645
95                      | 1.96
98                      | 2.326
99                      | 2.576

When finding out the difference between two Proportion Confidence Intervals:
$$
\hat{p_1} - \hat{p_2} \pm 1.96 \times \sqrt{\frac{\hat{p_1}(1 - \hat{p_1})}{n_1}
+ \frac{\hat{p_2}(1 - \hat{p_2})}{n_2}}
$$

There are also other approaches to define the standard error:
$$
\hat{p} \pm z^* \frac{1}{2 \sqrt{n}} \approx \hat{p} \pm \frac{1}{\sqrt{n}}
$$

$z^*$ is approximately 2 for 95% confidence interval. This is more conservative
approach than the previous formula.

In case of quantitative data, the standard error is given by:
$$
\frac{\sigma}{\sqrt{n}}
$$

So the confidence interval is given by:
$$
\mu \pm \frac{\sigma}{\sqrt{n}}
$$

For a specific confidence interval:
$$
\mu \pm t^* \frac{\sigma}{\sqrt{n}}
$$

Where $t^*$ multiplier comes from a t-distribution with (n-1) degrees of
freedom. For 95% confidence interval with sample size (n) = 25, $t^*$ = 2.064,
and with a sample size of 1000, $t^*$ = 1.962. For large sample sizes, the $t^*$
value will be closer to the $z$-multiplier value that we used for categorical
data.

Differences in the population means with confidence interval for two independent
groups:
$$
\mu_1 - \mu_2 \pm t^* \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}
$$

### Bayes' rule

Definition of conditional probability:

$$P(A|B) = \frac{P(A \cap B)}{P(B)}$$, if $$P(B) \neq 0$$

$P(A|B)$ is probability of event $A$ given that event $B$ is true/occurring.

$$
P(A|B) = \frac{P(A) P(B|A)}{P(B)}
$$


### Resources

- Probability and statistics: <https://projects.iq.harvard.edu/stat110>
- Standard deviation Wikipedia : <https://en.wikipedia.org/wiki/Standard_deviation>
- [Seeing Theory](https://seeing-theory.brown.edu)
- Bayes' rule Wikipedia: <https://en.m.wikipedia.org/wiki/Bayes%27_theorem>
