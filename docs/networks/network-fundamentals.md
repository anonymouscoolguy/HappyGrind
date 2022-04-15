---
sidebar_position: 1
title: Network fundamentals
---

## Hub, switch and router

### Hub

A hub is a network connection point for devices, which are connected using [Ethernet](https://en.wikipedia.org/wiki/Ethernet) cables attached to a port on the hub.

<img src="/img/study-guides/networks/switch-device-network.png" alt="Switch device" width="400"/>

The image above actually shows a switch device (will be covered in a moment), but it doesn't matter because there is no physical difference between a _hub_ and a _switch_. So, this "hub" has 8 ports, meaning that 8 different devices can connect to it. When a device wants send some data to another device connected to the hub, it sends the data to the hub. Consequently, the data is copied and sent to **all** devices connected to hub. This brings up a lot of security concerns and slows down the network, as the data is shared with every device. For these reasons are _hubs_ not used anymore nowadays.

### Switch

A switch is simply a smarter version of the _hub_, because instead of sending arriving data to every device it only sends the data to the target destination. This is accomplished by storing the physical addresses of the devices connected to it, called **MAC** addresses in its table.

### Router

As the name implies a router, **routes**/forwards data from one network to another, based on their [IP address](https://en.wikipedia.org/wiki/IP_address). When data is received, it will inspect the IP address, and determine if it should be redirected to another router or received.

If there is still something unclear about hubs, switches or routers, I would encourage you to watch [this](https://www.youtube.com/watch?v=1z0ULvg_pW8) excellent video from _PowerCert_.

## Different types of networks

A computer network is a group of computer systems that are connected and able to communicate and exchange data. Computers networks are commonly categorized based on their characteristics, here are the major ones:

<details><summary>Local Area Network (LAN) 🔌</summary>
<p>

LAN, stands for **local area network**, and as the name suggests it covers a local area, e.g: offices, schools and buildings. It consists of a group of devices (computers, printers, switches), which are all connected via Ethernet cables using a switch/hub.

</p>
</details>

<details><summary>Wireless Local Area Network (WLAN) 📶</summary>
<p>

In simple terms a _WLAN_ is just a _LAN_ without cables. It uses wireless communication to form a local area network.

</p>
</details>

<details><summary>Wide Area Network (WAN) 🌍</summary>
<p>

The _WAN_ is the largest type of network and spans over a large geographical area, such as a city, country or even the whole globe. A _WAN_ typically consists of multiple _LANS_ connected together. A great example of a _WAN_ is the internet itself.

</p>
</details>

<details><summary>Storage Area Network (SAN) 💾</summary>
<p>

The _SAN_ is a secure high-speed data transfer network and in simple terms it makes a network of storage devices accessible to multiple servers. Each server can then access shared storage as if the drive was directly attached to the server.

<img src="/img/study-guides/networks/storage-area-network.jpg" alt="Internet in 1 minute" width="600"/>

</p>
</details>

<details><summary>Internet 🌐</summary>
<p>

The Internet is the largest WAN, connecting millions of computer systems/smaller networks together. It also provides vast number of services, including the **World Wide Web (WWW)**. It is also important to note that WWW is not the Internet, but rather a **service** provided by the Internet.

If you want to get your mind blown, check this out: 🤯

<img src="/img/study-guides/networks/internet-1-minute.jpg" alt="Internet in 1 minute" width="500"/>

</p>
</details>

<details><summary>Extranet 🔐</summary>
<p>

Extranet is the process of allowing **specific users** to access **specific parts** of a network.

For example, let's imagine that we have a business and we utilize a network for our daily operations. The network is password-protected that can only be accessed by our employees. For some reason, we now want to give access to our business partners, but we don't want them to have access to our whole network, only a specific division of the network.

<img src="/img/study-guides/networks/intranet-extranet-internet.jpg" alt="Internet in 1 minute" width="600"/>

</p>
</details>

<details><summary>Virtual Private Network (VPN) 🕵</summary>
<p>

A VPN is similar to a _LAN_ or _WLAN_, but it allows its users to log into the network **remotely**. To enter a LAN or WLAN network you need to physically be there (via wire or wireless), a VPN allows you be somewhere else and still enter the LAN as if you were physically present.

For example, if your awesome business has a VPN network, your employees will be able to access your _LAN_ network, which is physically in the office, in their homes.

</p>
</details>

<details><summary>Personal Area Network (PAN) 💻</summary>
<p>

PAN is a network that interconnects devices that are centered around an **individual's** workspace. It can be interpreted as a _LAN_ that instead of supporting a group of people, only supports a single person. An example of a PAN, would be your _mobile phone, headphones, laptop and printer_ that are all interconnected sharing data such as images, sound, emails and documents.

PANs can both be connected via cables (typically USB) or wirelessly (typically Bluetooth).

</p>
</details>

<details><summary>Peer-To-Peer (P2P) 🧑‍🤝‍🧑</summary>
<p>

Peer-to-peer is a different **network model**, where there is no server that provides recourses to its users. Instead all computer systems inside the networks are both the clients and servers at the same time. The **peers** (computer systems inside the network) have both jobs, they're both consuming and supplying resources to other computer systems.

The technical details on P2P networks are far more complex, but this is everything you need to know, nevertheless I would encourage you to take a closer look at it, as many of the new technologies use it, such as crypocurrencies, torrents, and many more.

</p>
</details>

## Importance of standards in the construction of networks

Networking standards define the rules for data communications that are needed for [interoperability](https://www.techtarget.com/searchapparchitecture/definition/interoperability) of networking technologies and processes. Without a common ground on how to develop products/devices and which technologies to use, manufacturers would all develop their products differently and not use the same technologies, this would then naturally result in **incompatibility** among all other devices.

<img src="/img/study-guides/networks/incompatibility.gif" alt="Incompatibility" width="300"/>

## Networks, communication and layers (To be done.)

:::tip

This curriculum point requires you to have an **awareness** of the seven-layer OSI-model, but an understanding of the **functioning** of each layer is **not required**.

:::

## Technologies required to provide a VPN (To be done.)

_VPN_ stands for virtual private network and is an encrypted connection over the Internet from a device to a network. It ensures that sensitive data is safely transmitted and has many other uses, which will all be covered in the next topic. For now, we will discuss its two major technologies:

## Use of a VPN

This curriculum point requires us to **evaluate** the different uses of a _VPN_. So, let's take a closer look at its advantages and disadvantages:

**Advantages of a VPN:**

- Allows employees to work from anywhere remotely, a.k.a.: Telecommuting/Teleworking
- Bypass content restricted for specific countries, a.k.a.: Geoblocks
- Being anonymous on the Internet
- **Pro tip 😎**: Many hotel booking websites have different prices for customers in different countries, so by using a VPN and changing your location to the country offering the cheapest prices you save some money! This tip is not meant to be used on the exam. 😅

**Disadvantages of a VPN:**

- Being anonymous on the Internet. This is also an advantage, but is being anonymous on the Internet really good? It can surely be used by hackers to commit cyber crimes and by others to pull of illegal trades.

<img src="/img/study-guides/networks/awesome-hacker.gif" alt="Awesome hacker" width="500"/>

## Explanation video and PowerPoint presentation (To be done.)

<a href="https://github.com/anonymouscoolguy/HappyGrind/raw/master/static/files/networks/Network%20fundamentals.pptx"><button className="button button--secondary button--md">PowerPoint Presentation 👨🏻‍🏫</button></a>

## Resources

> Dimitriou, Kostas, and Markos Hatzitaskos. _Core Computer Science for the IB Diploma Program (International Baccaalaureate)_. Express Publishing, 2015.

> “What Is a Storage Area Network (SAN)?” VMWare, VMWare, www.vmware.com/topics/glossary/content/storage-area-network-san.html. Accessed 12 Apr. 2022.

> IBadmin. “Topic 3.” IB CompSci Hub, 2 July 2018, ib.compscihub.net/paper-1/topic-3.

> “SAN, o Que é Uma Storage Area Network?” Controle, www.controle.net/faq/san-storage-area-network. Accessed 12 Apr. 2022.

> PowerCert Animated Videos. “VLAN Explained.” YouTube, 31 May 2018, www.youtube.com/watch?v=jC6MJTh9fRE&t=206s.

> “Network Standardization.” TutorialsPoint, www.tutorialspoint.com/Network-Standardization. Accessed 12 Apr. 2022.

> NordVPN. “What Is a VPN.” NordVPN, 12 Apr. 2022, nordvpn.com/what-is-a-vpn.

> Godbold, Craig. “3.1.4 – 3.1.5 – Identify the Technologies Required to Provide a VPN. – Craig Godbold .Com.” Craig Godbold, craiggodbold.com/3-1-4-identify-the-technologies-required-to-provide-a-vpn. Accessed 14 Apr. 2022.
