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
    pandas xlrd openpyxl \
    seaborn \
    scikit-learn \
    tensorflow \
    missingno

# jupyterlab settings
RUN mkdir /etc/jupyter && \
    (echo "c.ServerApp.ip = '0.0.0.0'" && \
    echo "c.ServerApp.allow_root = True" && \
    echo "c.ServerApp.open_browser = False") \
        >> /etc/jupyter/jupyter_server_config.py

# matplotlib customizations
RUN mkdir -p /root/.config/matplotlib \
 && touch /root/.config/matplotlib/matplotlibrc \
 && echo 'font.family       : sans-serif' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.style        : normal' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.weight       : regular' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'font.sans-serif   : Open Sans, DejaVu Sans' >> /root/.config/matplotlib/matplotlibrc\
 && echo 'axes.linewidth    : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'axes.titlesize    : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'axes.labelsize    : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.major.size  : 8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.minor.size  : 4' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.major.width : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.minor.width : 0.6' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.labelsize   : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'xtick.direction   : in' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.major.size  : 8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.minor.size  : 4' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.major.width : 0.8' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.minor.width : 0.6' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.labelsize   : 16' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'ytick.direction   : in' >> /root/.config/matplotlib/matplotlibrc \
 && echo 'image.origin      : lower' >> /root/.config/matplotlib/matplotlibrc

# leave in `/home` which we can map with the host
WORKDIR /home
