# Build command  : docker build -t jupyter .
# Run docker     : docker run -ti -p 8888:8888 -v ${pwd}:/home jupyter bash
# Launch jupyter : jupyter-notebook

# Start from Ubuntu 22.04 LTS
FROM ubuntu:jammy

# Update OS
RUN apt update && apt upgrade -y

# Install software packages
RUN apt install -y python3 python3-pip fonts-open-sans

# Install pip packages
RUN pip3 install jupyterlab \
    numpy \
    scipy \
    matplotlib \
    seaborn \
    statsmodels \
    pandas xlrd openpyxl \
    seaborn \
    scikit-learn \
    tensorflow \
    missingno
#
# jupyterlab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
    echo "c.ServerApp.allow_root = True" && \
    echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py
#
# matplotlib customizations
RUN mkdir -p /root/.config/matplotlib \
    && touch /root/.config/matplotlib/matplotlibrc \
    && cat >> /root/.config/matplotlib/matplotlibrc << EOF
font.family       : sans-serif
font.style        : normal
font.weight       : regular
font.sans-serif   : Open Sans, DejaVu Sans
axes.linewidth    : 0.8
axes.titlesize    : 16
axes.labelsize    : 16
xtick.major.size  : 8
xtick.minor.size  : 4
xtick.major.width : 0.8
xtick.minor.width : 0.6
xtick.labelsize   : 16
xtick.direction   : in
ytick.major.size  : 8
ytick.minor.size  : 4
ytick.major.width : 0.8
ytick.minor.width : 0.6
ytick.labelsize   : 16
ytick.direction   : in
image.origin      : lower
EOF

# leave in `/home` which we can map with the host
WORKDIR /home
