# Week 10 — NPTEL Solid State Physics

Each question includes the original prompt, all options, recorded answer, formulas, and worked explanation.

---

## Q1. Average energy band gap of Ge

The conductivity of the semiconductor follows the given equation

\[
\sigma = A e^{-E_g/(2k_B T)},
\]

where A is a constant and independent of temperature and k_B is the Boltzmann constant. The conductivity of Ge is 0.7\ \Omega^{-1}m^{-1} at 0^\circ C and 2\ \Omega^{-1}m^{-1} at 20^\circ C. What is the average band gap of Ge?

(Boltzmann constant k_B = 1.38 \times 10^{-23}\ J/K)

**Options**

- (a) 0.72\ eV
- (b) 0.65\ eV
- (c) 0.55\ eV
- (d) 0.43\ eV

**Correct option:** (a) 0.72\ eV

**Formulas:**

\ln\frac{\sigma_2}{\sigma_1}=\frac{E_g}{2k_B}\left(\frac1{T_1}-\frac1{T_2}\right),\qquad E_g=\frac{2k_B\ln(\sigma_2/\sigma_1)}{(1/T_1-1/T_2)}

**Explanation:**

Convert temperatures to kelvin: T₁=273 K and T₂=293 K. Divide the conductivity equations to eliminate A, then solve for Eg and convert joules to eV using 1 eV=1.602×10⁻¹⁹ J. The source marks option (a), 0.72 eV.

---

## Q2. Conductivity of pure silicon

Find out the conductivity of pure silicon at room temperature (300 K). Given: mobility of electron \mu_n = 0.13\ \frac{m^2}{Vs}, mobility of hole \mu_h = 0.05\ \frac{m^2}{Vs} and intrinsic charge carrier concentration (n_i = 1.5 \times 10^{16}/m^3).

**Options**

- (a) 3.12 \times 10^{-3}\ \Omega^{-1}m^{-1}
- (b) 4.32 \times 10^{-4}\ \Omega^{-1}m^{-1}
- (c) 5.12 \times 10^{-5}\ \Omega^{-1}m^{-1}
- (d) 6.64 \times 10^{-6}\ \Omega^{-1}m^{-1}

**Correct option:** (b) 4.32 \times 10^{-4}\ \Omega^{-1}m^{-1}

**Formulas:**

\sigma=q n_i(\mu_n+\mu_p)

**Explanation:**

For an intrinsic semiconductor, n=p=ni. Substitute q=1.602×10⁻¹⁹ C, ni=1.5×10¹⁶ m⁻³ and the sum of the electron and hole mobilities. The source records option (b), 4.32×10⁻⁴ Ω⁻¹m⁻¹.

---

## Q3. Resistance of a silicon bar

Calculate the resistance of a bar of pure silicon of length 1 cm and cross-sectional area 1\ mm^2 at 300 K. Given: mobility of electron \mu_n = 0.14\ \frac{m^2}{Vs}, mobility of hole \mu_h = 0.07\ \frac{m^2}{Vs} and intrinsic charge carrier concentration (n_i = 2 \times 10^{16}/m^3).

**Options**

- (a) 12.34\ M\Omega
- (b) 14.88\ M\Omega
- (c) 23.15\ M\Omega
- (d) 46.28\ M\Omega

**Correct option:** (b) 14.88\ M\Omega

**Formulas:**

\sigma=q n_i(\mu_n+\mu_p),\qquad \rho=\frac1{\sigma},\qquad R=\rho\frac{L}{A}

**Explanation:**

First calculate intrinsic conductivity using n=p=ni. Then take its reciprocal to obtain resistivity. Convert L=1 cm to 10⁻² m and area 1 mm² to 10⁻⁶ m², and use R=ρL/A. The recorded answer is option (b), 14.88 MΩ.

---

## Q4. Conductivity of p-type germanium

Find the conductivity of p-type germanium crystal which is doped with acceptor atoms of concentration 2 \times 10^{23}\ atoms/m^3 and all the acceptor atoms are active. Mobility of hole in the crystal is \mu_h = 0.19\ \frac{m^2}{Vs}.

**Options**

- (a) 6080\ \Omega^{-1}m^{-1}
- (b) 4038\ \Omega^{-1}m^{-1}
- (c) 3125\ \Omega^{-1}m^{-1}
- (d) 2215\ \Omega^{-1}m^{-1}

**Correct option:** (a) 6080\ \Omega^{-1}m^{-1}

**Formulas:**

\sigma=q(p\mu_p+n\mu_n)\approx qN_A\mu_p

**Explanation:**

All acceptors are active and the material is p-type, so holes are the majority carriers and p≈NA. Substitute q=1.602×10⁻¹⁹ C, NA=2×10²³ m⁻³ and μp=0.19 m²/(V·s). The recorded answer is option (a), 6080 Ω⁻¹m⁻¹.

---

## Q5. Acceptor concentration for p-type semiconductor

Calculate the concentration of acceptor atoms that have to be added to an intrinsic semiconductor to produce a p-type semiconductor of conductivity (\sigma_h = 0.05\ \Omega^{-1}m^{-1}). The mobility of holes in p-type semiconductor is (\mu_h = 0.4\ \frac{m^2}{Vs}). Consider all the acceptor atoms are active.

**Options**

- (a) 2.5 \times 10^{28}/m^3
- (b) 1.7 \times 10^{23}/m^3
- (c) 7.8 \times 10^{17}/m^3
- (d) 4.6 \times 10^{15}/m^3

**Correct option:** (c) 7.8 \times 10^{17}/m^3

**Formulas:**

\sigma\approx qN_A\mu_p\quad\Rightarrow\quad N_A=\frac{\sigma}{q\mu_p}

**Explanation:**

For fully active acceptors in a p-type material, p≈NA. Rearranging the conductivity relation gives NA=0.05/[1.602×10⁻¹⁹×0.4] ≈ 7.8×10¹⁷ m⁻³, option (c).

---

## Q6. Compare intrinsic conductivity of Ge at two temperatures

The energy gap in Ge is 0.75\ eV. Compare the intrinsic conductivity of Ge at 27^\circ C and 57^\circ C.

Assuming the conductivity of intrinsic semiconductor follows the given equation

\[
\sigma = C T^{3/2} e^{-E_g/(2k_B T)},
\]

where C is the constant and Boltzmann constant (k_B = 1.38 \times 10^{-23}\ J/K).

**Options**

- (a) 0.23
- (b) 0.48
- (c) 0.62
- (d) 0.78

**Correct option:** (c) 0.62

**Formulas:**

\frac{\sigma_1}{\sigma_2}=\left(\frac{T_1}{T_2}\right)^{3/2}\exp\left[-\frac{E_g}{2k_B}\left(\frac1{T_1}-\frac1{T_2}\right)\right]

**Explanation:**

Use absolute temperatures: 27°C=300 K and 57°C=330 K. Substitute the given intrinsic-conductivity law and compare the two temperatures; keep the order of the ratio consistent with the options. The source records option (c), 0.62.

---

## Q7. Fermi level of boron-doped silicon

Silicon is doped with boron to a concentration of (4 \times 10^{26}/m^3). Assuming the intrinsic concentration of silicon is (n_i = 1.5 \times 10^{16}/m^3), find the position of Fermi level of doped semiconductor with respect to the intrinsic Fermi level at room temperature 300 K. Boltzmann constant (K_B = 1.38 \times 10^{-23}\ J/K).

**Options**

- (a) 0.62 eV below the intrinsic Fermi level
- (b) 0.44 eV below the intrinsic Fermi level
- (c) 0.32 eV below the intrinsic Fermi level
- (d) 0.27 eV below the intrinsic Fermi level

**Correct option:** (a) 0.62 eV below the intrinsic Fermi level

**Formulas:**

E_i-E_F=k_BT\ln\left(\frac{N_A}{n_i}\right)

**Explanation:**

Boron is an acceptor, so the semiconductor is p-type and its Fermi level lies below the intrinsic level. Use kBT in eV at 300 K (kB=8.617×10⁻⁵ eV/K), NA=4×10²⁶ m⁻³ and ni=1.5×10¹⁶ m⁻³. The source records option (a), 0.62 eV below Ei.

---

## Q8. Total conduction current density in doped Ge

A sample of Ge is doped to the extent of (10^{20}\ donor\ atoms/m^3) and (5 \times 10^{19}\ acceptor\ atoms/m^3). At 300 K, the resistivity of intrinsic Ge is (0.6\ \Omega-m). If the applied electric field is 200\ V/m, find the total conduction current density. Assume the ratio of hole mobility to electron mobility \frac{\mu_h}{\mu_n} = \frac12 and intrinsic carrier density (n_i = 2.5 \times 10^{19}/m^3) at 300 K. Consider all the donor and acceptor atoms are active in Ge.

**Options**

- (a) 0.058\ A/cm^2
- (b) 0.078\ A/cm^2
- (c) 0.098\ A/cm^2
- (d) 1.048\ A/cm^2

**Correct option:** (a) 0.058\ A/cm^2

**Formulas:**

n-p=N_D-N_A,\qquad np=n_i^2,\qquad \sigma=q(n\mu_n+p\mu_p),\qquad J=\sigma E

**Explanation:**

Net doping gives n−p=5×10¹⁹ m⁻³. Combine this with np=ni² to determine n and p. Infer the mobilities from intrinsic conductivity σi=1/ρi=qni(μn+μp) and μp/μn=1/2; then calculate σ and J=σE. The original file records option (a), 0.058 A/cm²; this should be rechecked because the source's earlier discussion also contains a conflicting result.

---

## Q9. Intrinsic carrier concentration

In an intrinsic semiconductor, the effective mass of the electron is 0.09m_e and that of the hole is (0.4m_e), where (m_e) is the electron rest mass. Calculate the intrinsic carrier concentration at 300 K, when the energy gap (E_g = 0.7\ eV). Consider Boltzmann constant (K_B = 1.38 \times 10^{-23}\ J/K) and Planck constant is (h = 6.62 \times 10^{-34}\ J-s).

**Options**

- (a) 2.7 \times 10^{18}/m^3
- (b) 3.2 \times 10^{20}/m^3
- (c) 4.5 \times 10^{28}/m^3
- (d) 6.2 \times 10^{32}/m^3

**Correct option:** (a) 2.7 \times 10^{18}/m^3

**Formulas:**

n_i=\sqrt{N_CN_V}\,e^{-E_g/(2k_BT)},\quad N_C=2\left(\frac{2\pi m_n^*k_BT}{h^2}\right)^{3/2},\quad N_V=2\left(\frac{2\pi m_p^*k_BT}{h^2}\right)^{3/2}

**Explanation:**

Convert Eg=0.7 eV to joules and use m*n=0.09me, m*p=0.4me at 300 K. Calculate NC and NV from the effective-mass density-of-states expressions, then substitute into the intrinsic-concentration formula. The recorded answer is option (a), 2.7×10¹⁸ m⁻³.

---

## Q10. Hole concentration in donor-doped semiconductor

At a given temperature, a semiconductor with intrinsic carrier concentration (n_i = 10^{16}/m^3) is doped with a donor dopant of concentration (n_D = 10^{26}/m^3). If the temperature remains the same, calculate the concentration of hole in the doped semiconductor.

**Options**

- (a) 10^4/m^3
- (b) 10^6/m^3
- (c) 10^8/m^3
- (d) 10^{10}/m^3

**Correct option:** (b) 10^6/m^3

**Formulas:**

np=n_i^2,\qquad n\approx N_D\ \text{for }N_D\gg n_i,\qquad p=\frac{n_i^2}{n}

**Explanation:**

Donors make electrons the majority carriers. Since ND=10²⁶ m⁻³ is much larger than ni=10¹⁶ m⁻³, n≈ND. Therefore p≈(10¹⁶)²/10²⁶=10⁶ m⁻³, option (b).

---

## Quick Answer Key

| Question | Correct option |
|---|---|
| Q1 | (a) 0.72\ eV |
| Q2 | (b) 4.32 \times 10^{-4}\ \Omega^{-1}m^{-1} |
| Q3 | (b) 14.88\ M\Omega |
| Q4 | (a) 6080\ \Omega^{-1}m^{-1} |
| Q5 | (c) 7.8 \times 10^{17}/m^3 |
| Q6 | (c) 0.62 |
| Q7 | (a) 0.62 eV below the intrinsic Fermi level |
| Q8 | (a) 0.058\ A/cm^2 |
| Q9 | (a) 2.7 \times 10^{18}/m^3 |
| Q10 | (b) 10^6/m^3 |
