---
sidebar_position: 1
title: Planning and system installation
---

## The context for which a new system is planned

A new system is usually proposed, because the current one is either:

- inefficient;
- out-dated; or
- no longer appropriate for the original propose.

A new system can also be implemented to maximize productivity, quality or reduce costs.

## The need for change management

Change management is the process of _transitioning_ individuals, teams and departments from a present state to a **desired state**. But changing to a new system may not be as simple as we think for a variety of reasons:

- Users don't like change;
- New systems might omit old features;
- People find change complex;
- From a technological perspective, change might lead to incompatibility;
- ... and the list goes on!

<img src="/img/study-guides/system-fundamentals/system-in-organizations/changes.gif" alt="Funny gif about changes!" width="300"/>

The purpose of change management would be to implement strategies for helping people to **adapt to a new change**, in our case a new system.

A successful change management guarantees that all stakeholders embrace and fully accept the new changes, by maximizing benefits and minimizing disadvantages in their working environment.

## Different system implementation

There are 2 competing ways of implementing a system: **Local** and **Remote** (also knowed as SaaS/cloud-based). You can either buy a program and run it locally on your computer (Local), or _rent/use_ a software that is installed on a server and access it through your internet browser (Remote).

<img src="/img/study-guides/system-fundamentals/system-in-organizations/saas-application-vs-on-premises.svg" alt="Awesome illustration of Local vs SaaS" width="450"/>

### SaaS (Software-as-a-Service)

_SaaS_ is a software distribution model in which a third-party provider hosts the application and makes them available to customers over the Internet. Some very well-knowed _SaaS_ examples:

- Microsoft Office 365 (formely Office 2016, which was local)
- Google Apps
- Discord
- Netflix

| Benefits                                          | Drawbacks                                |
| ------------------------------------------------- | ---------------------------------------- |
| Low initial cost, as we don't have buy computers. | Dependence on a third party.             |
| Easy to upgrade.                                  | Security and confidentiality.            |
| Easily accessible from anywhere.                  | Dependence on Internet connection.       |
| Easy to predict the cost (subscription).          | Risk of data loss.                       |
| The application is ready to use.                  | Not as powerful as on premise solutions. |

## Alternative installation processes

When installating/implementing a new system, there are 4 alternative ways of doing it:

<details><summary>Direct changeover 🛑</summary>
<p>

The old system is simply stopped and the new system is started.

**Advantages**:

- Minimal time and effort (Just plug out the old system and plug in the new one).
- New system is available immediately.

**Disadvantage**:

- If the new system fails, there is no fall back.

<img src="/img/study-guides/system-fundamentals/system-in-organizations/direct-changeover.png" alt="Cool illustration about Direct Changeover" width="400"/>

</p>
</details>

<details><summary>Parallel running 🔀</summary>
<p>

The new system is started, but the old system is **kept** running alongside it. Data has to enter into both systems.

**Advantages**:

- If the new system fails, the old system runs as a backup.
- Outputs from the two systems can be compared so check if the new one is running correctly.

**Disadvantage**:

- Running two systems is costly in terms of time and money.

<img src="/img/study-guides/system-fundamentals/system-in-organizations/parallel-running.png" alt="Cool illustration about Parallel Running" width="400"/>

</p>
</details>

<details><summary>Pilot running 👨‍✈️</summary>
<p>

The new system is _piloted_ (tested) with a **small** subset of the organisation. Once it is running correctly and all bugs have been fixed, it is implemented across the whole organisation.

**Advantages**:

- All features are fully tested.
- If the new system fails, only a small part of the organization suffers.

**Disadvantage**:

- For the subset of users in the pilot group, there is no backup is the new system fails.

</p>
</details>

<details><summary>Phased conversion 🗃️</summary>
<p>

The new system is introduced in **phases** as parts of the old system are gradually being replaced by the new system.

**Advantages**:

- Allows users to get used with the new system.
- Training of staff can be done in stages.

**Disadvantage**:

- If the new system fails, there is no fall back for that part of the system.

<img src="/img/study-guides/system-fundamentals/system-in-organizations/phased-conversion.png" alt="Cool illustration about Phased Conversion" width="400"/>

</p>
</details>

:::tip Exam Note

This curriculum point requires you to **evaluate** the different options.

So, in the exam compare the different system implementations by discussing their advantages and disadvantages to arrive at a conclusion.

:::

## Problems that may arise as part of data migration

Data migration is the act of **moving data**, it can be as simple as putting a file on a USB drive and opening it on another computer or as complex as exchanging information through big databases across different countries. Nevertheless the following may arise:

- Incompatible file formats.
- Data structure differences.
- Incomplete data transfers.
- International conventions on dates, currencies & character sets (In the UK, 3/5/18 means 3 May 2018, but it means 5 March in the USA).

## Various types of testing

Testing is crucial, when developing a computerized system as it tries to ensure that the system **works as expected**. If a system does not work as expected (i.e. it contains bugs) the productivity and end user satisfaction will be drastically reduced.

<img src="/img/study-guides/system-fundamentals/system-in-organizations/cyberpunk-2077-meme.webp" alt="Awesome meme about Bugs and Cyberpunk 2077" width="300"/>

So, to ensure that your application runs smoothly here are the different types of testing:

<details><summary>Alpha testing 💪</summary>
<p>

_Alpha testing_ is done before the software is released to the general public, and the testing is performed by **internal employees** of the organization.

</p>
</details>

<details><summary>Beta testing 🤗</summary>
<p>

In contrast to _Alpha Testing_, _Beta Testing_ is performed clients or end users, who are **not** employees of the organization.

</p>
</details>

<details><summary>Dry-run testing 👨‍🏫</summary>
<p>

_Dry-run testing_ is conducted using pen and paper by the programmer. During the _dry-run testing_, the programmer mentally runs through the algorithm and decides what the output should be.

</p>
</details>

<details><summary>Unit testing 🗂️</summary>
<p>

In _unit testing_, individual parts of the system are tested separately.

</p>
</details>

<details><summary>Integration testing 🌌</summary>
<p>

In contrast to _unit testing_, _integration testing_ tests the entire system at the same time to verify that all components work correctly together.

</p>
</details>

<details><summary>User acceptance testing 🤝</summary>
<p>

_User acceptance testing_ is conducted to check if the new system meets the end-users expectations.

</p>
</details>

## Explanation video and PowerPoint presentation

<div className="iframe-container margin-bottom--md">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6oK1y7i34tg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<a href="https://github.com/anonymouscoolguy/HappyGrind/raw/master/static/files/system-fundamentals/system-in-organizations/Planning%20and%20system%20installation.pptx"><button className="button button--secondary button--md">PowerPoint Presentation 👨🏻‍🏫</button></a>

## Resources

> Dimitriou, Kostas, and Markos Hatzitaskos. _Core Computer Science for the IB Diploma Program (International Baccaalaureate)_. Express Publishing, 2015.

> Cloudflare Team. “What Is SaaS | Cloudflare.” Cloudflare, www.cloudflare.com/pt-br/learning/cloud/what-is-saas. Accessed 7 May 2022.

> IBadmin. “Topic 1.1.” CompSci Hub, 20 June 2018, ib.compscihub.net/paper-1/topic-1-1.
