---
path: manjaro-i3-troubleshooting
date: 2020-06-01T02:48:06.390Z
title: Manjaro i3 Troubleshooting
description: Troubleshooting problems upon installing Manjaro i3 for the first time.
---
## 1. If You're Always Muted After Reboot

```sh
# Uninstall pulseaudio and all its dependencies: 
$ sudo pacman -R pavucontrol pulseaudio pulseaudio-alsa
$ sudo pacman -Rns manjaro-pulse
$ sudo pacman -Rns pulseaudio-ctl

# Then, install it again:
$ sudo pacman -S manjaro-alsa pulseaudio-alsa --needed
```

## 2. Activate Num Lock on Boot

```
1. Install numlockx.
2. Add this to ~/.i3/config (dot files are hidden on pcmanfm, so
right mouse button -> Show Hidden): 
exec_always --no-startup-id numlockx (there's a special section
full of "exec_aways ..." so you can put it there)
```

## 3. Don't Forget to Set Your CPU to Performance If Your Laptop's Battery is Dead Already

```
The configuration file for cpupower is located in /etc/default/cpupower.
Set governor='performance'. Then, enable cpupower.service to start at 
boot (systemctl enable cpupower.service).
```

## 4. If Use Nvidia/Intel and can't make Optimus-Manager work

```
1. Win+D: manjaro-settings-manager
2. Hardware Configuration
3. Remove video-hybrid-intel-nvidia-bumblebee and install the appropriate driver for your nvidia card
```

## 5. How to Set up a Wi-Fi Hotspot

```
Disable Wifi (Uncheck Enable Wi-Fi)
Win+D => nm-connection-editor (background)
Click "Add"
Choose "Wi-Fi" and click "Create"
Type in Connection name like "Mi3"
Mode: Hotspot
Type in SSID as you wish (like Mi3 also)
Choose Device MAC Address from the dropdown like wlan0 (in my case, wlp6s0)
Wifi Security select "WPA & WPA2 Personal" and set a password.
Go to IPv4 Settings tab, from Method drop-down box select Shared to other computers.
Then save and close.
Open Terminal (Ctrl+Alt+T) and type in the following commands with your connection name used in step 5.

$ sudo su
$ cd ../..
$ cd /etc/NetworkManager/system-connections/
$ vim Mi3.nmconnection

Find mode=infrastructure and change it to mode=ap

Now check the network section where Wi-Fi will be connected to the created hotspot automatically.
If you can not find it, go to Connect to Hidden Network... Find the connection and connect to it.
```