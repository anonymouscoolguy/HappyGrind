---
sidebar_position: 4
title: Binary representation
---

## Bit, byte, binary, decimal and hexadecimal

### Bit and byte

A bit, short for _binary digit_, is a single integer and can either be **0** (False) or **1** (True). Computer systems are binary systems, which use sequences of bits to represent data. A sequence of _8 bits_ translates to **1 byte**.

<img src="/img/study-guides/computer-organization/bit-and-bytes.svg" alt="Bits and bytes illustration" width="750"/>

### Binary number system

The binary number system is simply another way to count, like we humans use the decimal system, which is composed of 10 numbers.

$$
0, 1, 2, 3, 4, 5, 6, 7, 8, 9
$$

Computers use the binary system which is solely composed of **0**'s and **1**'s. But the system itself works in the same manner. In the _decimal system_ when we reach $9$ and run out of numbers, we go back to $0$, but add a $1$ to the left making $10$, this is called the **positional notation**.

| Decimal | Description                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| 0       | We also start with 0                                                             |
| ...     | All the numbers in between until we reach the last digit in our number system.   |
| 9       | The last number in the decimal system.                                           |
| **1**0  | Using the positional notation, we go back to zero and add one digit to the left. |

I'm aware you know how to count 😉, but this concept, **positional notation**, is quite important to grasp, because the binary system (and all others) work in the same way. In the binary system, we simply reach the last digit much sooner:

| Binary | Description                                                                 |
| ------ | --------------------------------------------------------------------------- |
| 0      | We also start with 0.                                                       |
| 1      | We continue with the next and already **last** number in the binary system. |
| **1**0 | Again, the same rule of postional notation is applicable here.              |
| 1**1** | We continue counting normally with our digits.                              |
| ❓     | But what happens now? 🤔                                                    |

Well, in the _decimal system_ when we reach the last number with 2 digits, $99$, we add another $0$ to the back and add a $1$ to the left again, making $100$. The same can the replicated in the binary system:

| Decimal | Binary  | Description                                                                 |
| ------- | ------- | --------------------------------------------------------------------------- |
| 0       | 0       | We also start with 0.                                                       |
| 1       | 1       | We continue with the next and already **last** number in the binary system. |
| 2       | **1**0  | Again, the same rule of postional notation is applicable here.              |
| 3       | 1**1**  | We continue counting normally with our digits.                              |
| 4       | 1**00** | Here because we ran out of combinations with 2 digits, we add a 3rd one.    |
| 5       | 101     | Proceed by applying the same rules.                                         |
| 6       | 110     | Proceed by applying the same rules.                                         |
| 7       | 111     | Proceed by applying the same rules.                                         |
| 8       | 1000    | Proceed by applying the same rules.                                         |
| 9       | 1001    | Proceed by applying the same rules.                                         |

### Hexadecimal number system

The hexadecimal number system is another **positional system** and works in the same way as the binary and decimal system. The only difference being that instead of having only 2 or 10 digits it has **16**.

$$
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
$$

In this system the letters simply represent integers:

$$
A = 10, B = 11, C = 12, D = 13, E = 14, F = 15
$$

The reason why hexadecimal numbers are used is because it provides a more **human-friendly** representation of binary numbers, which is mainly seen in the representation of colours (will be covered in detail in the next topic).

## Data representation (To be done.)

## Explanation video and PowerPoint presentation (To be done.)

## Resources

> Dimitriou, Kostas, and Markos Hatzitaskos. _Core Computer Science for the IB Diploma Program (International Baccaalaureate)_. Express Publishing, 2015.

> Pierce, Rod. "Binary Number System" Math Is Fun. Ed. Rod Pierce. 29 Jun 2021. 10 Apr 2022 <http://www.mathsisfun.com/binary-number-system.html>
