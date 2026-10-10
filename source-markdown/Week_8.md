# Week 8 — NPTEL Solid State Physics

Each question includes the original prompt, all options, recorded answer, formulas, and worked explanation.

---

## Q1. Energy Level from Fermi--Dirac Occupation Probability

Find the energy level in sodium for which the probability of occupation
at 300 K is 0.75. The Fermi energy of sodium is 3.13 eV. (Boltzmann
constant (K_B = 1.38 \times 10\^{-23},\text{J/K}))

**Options**

- (a) 3.10 eV
- (b) 2.28 eV
- (c) 1.97 eV
- (d) 1.12 eV

**Correct option:** (a) 3.10 eV

**Formulas:**

\[ f(E)=`\frac{1}{e^{(E-E_F)/(k_BT)}+1} \]

Rearranging:

\[
E-E_F=k_BT\ln\left(\frac{1}{f}-1\right)
\]

Using (k_B=8.617\times10\^{-5},\text{eV/K}):

\[ E=3.13+(8.617\times10\^{-5})(300)\ln(1/0.75-1)
\approx 3.10,\text{eV} \]

**Explanation:**

**Question type:** Fermi--Dirac distribution; find energy from
occupation probability.

**Given:** (f(E)=0.75), (T=300,`\text{K}),
(E_F=3.13,`\text{eV}).

**Intuition / exam trap:** If (f\>0.5), the energy is below the Fermi
energy. Here (f=0.75), so (E\<E_F).

---

## Q2. Temperature from Occupation Probability

Find the temperature at which there is a 1% probability that an electron
in a solid will have energy 0.5 eV above the Fermi energy. (Boltzmann
constant (K_B = 1.38 \times 10\^{-23},\text{J/K}))

**Options**

- (a) 1261.6 K
- (b) 1322.7 K
- (c) 1466.8 K
- (d) 1547.6 K

**Correct option:** (a) 1261.6 K

**Formulas:**

\[ f=`\frac{1}{e^{(E-E_F)/(k_BT)}+1} \]

\[ T=`\frac{E-E_F}{k_B\ln(1/f-1)} \]

Use (k_B=8.617\times10\^{-5},\text{eV/K}):

\[ T=`\frac{0.5}{(8.617\times10^{-5})\ln(99)}
\approx1261.6,\text{K} \]

**Explanation:**

**Question type:** Fermi--Dirac distribution; solve for temperature.

**Given:** (f=0.01), (E-E_F=0.5,`\text{eV}).

**Intuition / exam trap:** A 1% occupation probability is (f=0.01), not
(1). Since the energy is above (E_F), the occupation probability is less
than 0.5.

---

## Q3. Fermi Energy from Electron Concentration

The concentration of free electrons in sodium is ((2.5
`\times 10^{28}/m^3)). Calculate the Fermi energy at 0 K. (Given:
Planck constant ((h = 6.64
\times 10\^{-34},\text{J·s})))

**Options**

- (a) 1.23 eV
- (b) 2.17 eV
- (c) 3.13 eV
- (d) 3.73 eV

**Correct option:** (c) 3.13 eV

**Formulas:**

**Given:** (n=2.5\times10^{28},\text{m}^{-3}),
(h=6.64\times10\^{-34},\text{J·s}).
E_F=\frac{h^2}{2m_e}\left(\frac{3n}{8\pi}\right)\^{2/3}
where (m_e=9.11\times10\^{-31},\text{kg}).
(`\hbar)-formula distinct. The equivalent reduced-Planck-constant
form is (E_F=\frac{\hbar^2}{2m_e}(3\pi^2n)^{2/3}).

**Explanation:**

**Question type:** 3D free-electron model; Fermi energy from electron
number density.

**Given:** (n=2.5\times10^{28},\text{m}^{-3}),
(h=6.64\times10\^{-34},\text{J·s}).

**Formula using Planck constant (h)**

\[
E_F=\frac{h^2}{2m_e}\left(\frac{3n}{8\pi}\right)\^{2/3}
\]

where (m_e=9.11\times10\^{-31},\text{kg}).

Substituting gives (E_F\approx3.13,\text{eV}).

**Intuition / exam trap:** Keep the (h)-formula and
(`\hbar)-formula distinct. The equivalent reduced-Planck-constant
form is (E_F=\frac{\hbar^2}{2m_e}(3\pi^2n)^{2/3}).

---

## Q4. Fermi Velocity from Electron Concentration

Concentration of free electron density in sodium is ((2.5
`\times 10^{28}/m^3)). Calculate the Fermi velocity. \[Given:
Planck constant ((h = 6.64
\times 10\^{-34},\text{J·s}))\]

**Options**

- (a) (1.12 \times 10\^5,\text{m/s})
- (b) (1.05 \times 10\^6,\text{m/s})
- (c) (2.17 \times 10\^7,\text{m/s})
- (d) (1.97 \times 10\^9,\text{m/s})

**Correct option:** (b) (1.05 \times 10\^6,\text{m/s})

**Formulas:**

\[ k_F=(3\pi^2n)^{1/3},\qquad
v_F=`\frac{\hbar k_F}{m_e}
=\frac{h}{2\pi m_e}(3\pi^2n)^{1/3} \]

First, (k_F\approx9.04\times10^9,`\text{m}^{-1}).
Therefore,

\[ v_F\approx1.05\times10\^6,`\text{m/s} \]

**Explanation:**

**Question type:** Fermi velocity from 3D free-electron density.

**Given:** (n=2.5\times10^{28},\text{m}^{-3}),
(h=6.64\times10\^{-34},\text{J·s}).

**Intuition / exam trap:** When using (h), include (2`\pi) in the
denominator. When using (`\hbar), do not add another
(2`\pi).

---

## Q5. Fermi Energy in a One-Dimensional Crystal

The number of electrons per unit length of crystal is 0.5 electrons per
angstrom. The total number of electrons, those are to be accommodate on
a line of a one-dimensional crystal, is even number. Determine the Fermi
energy of the system. \[Given: Planck constant ((h = 6.62
\times 10\^{-34},\text{J·s}))\]

**Options**

- (a) 2.35 eV
- (b) 2.75 eV
- (c) 3.25 eV
- (d) 3.75 eV

**Correct option:** (a) 2.35 eV

**Formulas:**

For a 1D electron gas with two spin states:

\[ k_F=\frac{\pi n_{1D}}{2},\qquad
E_F=`\frac{\hbar^2 k_F^2}{2m_e}
=`\frac{h^2 n_{1D}^2}{32m_e} \]

Substitution gives approximately (E_F=2.34,`\text{eV}), matching
option (a) after rounding.

**Explanation:**

**Question type:** 1D free-electron model; Fermi energy from linear
electron density.

**Given:** (n\_{1D}=0.5) electrons/Å
(=5\times10^9,\text{m}^{-1}).

**Intuition / exam trap:** Convert electrons/Å to electrons/m before
substituting. For a 1D gas, remember (k_F=`\pi n\_{1D}/2) when
both spin states are counted.

---

## Q6. Fermi Energy of Silver from Density and Atomic Weight

Consider silver in the metallic with one free electron per atom.
Calculate the Fermi energy at 0K. \[Given: Atomic weight of Silver is
108, density of silver is 10.5 gm/cc, Planck constant ((h = 6.62
\times 10\^{-34},\text{J·s}))\]

**Options**

- (a) 5.5 eV
- (b) 4.5 eV
- (c) 3.5 eV
- (d) 2.5 eV

**Correct option:** (a) 5.5 eV

**Formulas:**

\[ n=\frac{Z\rho N_A}{M},\qquad
E_F=\frac{h^2}{2m_e}\left(\frac{3n}{8\pi}\right)\^{2/3}
\]

Use consistent SI units, (Z=1), and
(N_A=6.022\times10^{23},\text{mol}^{-1}). This gives
(n\approx5.85\times10^{28},`\text{m}^{-3}) and
(E_F\approx5.5,\text{eV}).

**Explanation:**

**Question type:** Calculate electron density from mass density, then
calculate Fermi energy.

**Given:** Atomic weight (M=108,`\text{g/mol}), density
(\rho=10.5,\text{g/cm}\^3), one free electron per atom.

**Intuition / exam trap:** First calculate atoms per unit volume, then
multiply by the number of free electrons per atom. Do not substitute
mass density directly as electron density.

---

## Q7. Fermi Energy of Sodium Using BCC Structure

The atomic radius of sodium (BCC) is 1.86 Å. Calculate the Fermi energy
of sodium at the temperature of 0K. Consider each sodium atom contribute
one free electron. \[Planck constant ((h = 6.62
\times 10\^{-34},\text{J·s}))\]

**Options**

- (a) 3.12 eV
- (b) 4.42 eV
- (c) 5.12 eV
- (d) 5.57 eV

**Correct option:** (a) 3.12 eV

**Formulas:**

BCC atoms touch along the body diagonal:

\[ \sqrt3a=4r,\qquad a=`\frac{4r}{\sqrt3} \]

BCC has 2 atoms per unit cell:

\[ n=`\frac{2Z}{a^3} \]

Then use:

\[
E_F=\frac{h^2}{2m_e}\left(\frac{3n}{8\pi}\right)\^{2/3}
\]

The result is approximately (3.12,`\text{eV}).

**Explanation:**

**Question type:** Fermi energy from atomic radius and BCC crystal
geometry.

**Given:** (r=1.86,`\text{Å}), BCC, (Z=1).

**Intuition / exam trap:** BCC has 2 atoms per unit cell and
(4r=`\sqrt3a). Do not use the FCC geometry relation.

---

## Q8. de Broglie Wavelength at Fermi Energy

Calculate the de-Broglie wavelength associated by an electron, in a
hypothetical metal, having energy equal to the Fermi energy at 0 K.
Consider numbers of free electrons per unit volume in the metal is n.

**Options**

- (a) (2\left(\frac{\pi}{3n}`\right)\^{1/3})
- (b) (2\left(\frac{3n}{\pi}`\right)\^{1/3})
- (c) ((3`\pi^2n)^{2/3})
- (d) (\left(\frac{3n}{\pi}`\right)\^{3/2})

**Correct option:** (a) (2\left(\frac{\pi}{3n}`\right)\^{1/3})

**Formulas:**

\[ k_F=(3\pi^2n)^{1/3},\qquad
\lambda\_F=\frac{2\pi}{k_F} \]

Therefore,

\[ \lambda\_F=\frac{2\pi}{(3\pi^2n)^{1/3}}
=2\left(\frac{\pi}{3n}`\right)\^{1/3} \]

**Explanation:**

(2\left(\frac{\pi}{3n}`\right)\^{1/3})**

**Question type:** Derive the de Broglie wavelength from Fermi wave
vector and electron density.

**Given:** Electron number density (n).

**Intuition / exam trap:** Use (\lambda=2\pi/k), not
(1/k). The wavelength scales as (n\^{-1/3}), so it decreases as electron
density increases.

---

## Q9. Fermi Energy of Silver Using FCC Structure

Silver is a monovalent metal having FCC crystal structure. If the atomic
radius (r=1.44) Å, calculate the Fermi energy at 0 K. Planck constant
((h = 6.62 \times 10\^{-34},\text{J·s})).

**Options**

- (a) 2.17 eV
- (b) 3.73 eV
- (c) 4.23 eV
- (d) 5.53 eV

**Correct option:** (d) 5.53 eV

**Formulas:**

FCC atoms touch along the face diagonal:

\[ \sqrt2a=4r,\qquad a=`\frac{4r}{\sqrt2} \]

FCC has 4 atoms per unit cell:

\[ n=`\frac{4Z}{a^3} \]

Then:

\[
E_F=\frac{h^2}{2m_e}\left(\frac{3n}{8\pi}\right)\^{2/3}
\]

This gives (E_F\approx5.53,\text{eV}).

**Explanation:**

**Question type:** Fermi energy from FCC geometry and atomic radius.

**Given:** (r=1.44,`\text{Å}), FCC, monovalent so (Z=1).

**Intuition / exam trap:** FCC has 4 atoms per unit cell and
(4r=`\sqrt2a). Compare with BCC: 2 atoms per cell and
(4r=`\sqrt3a).

---

## Q10. Density of States in a Two-Dimensional Solid

The density of free electron states in a two-dimensional solid having
dimension ((a `\times a)) varies with energy E as

**Options**

- (a) (E\^{1/2})
- (b) (E\^{-1/2})
- (c) (E\^0)
- (d) (E\^{3/2})

**Correct option:** (c) (E\^0)

**Formulas:**

For a free-electron system in (d) dimensions:

\[ g(E)`\propto E\^{d/2-1} \]

For (d=2):

\[ g(E)\propto E^{2/2-1}=E^0=\text{constant} \]

**Explanation:**

**Question type:** Theory --- energy dependence of the density of states
(DOS) in 2D.

**Given:** Two-dimensional solid.

**Intuition / exam trap:** In 2D, the free-electron density of states is
constant with energy. Remember the pattern: 1D
(\propto E\^{-1/2}), 2D (\propto E\^0), 3D
(`\propto E\^{1/2}).

# Quick Answer Key

  Question   Correct option   Answer
  ---------- ---------------- ----------------------------------------------
  Q1         a            3.10 eV
  Q2         a            1261.6 K
  Q3         c            3.13 eV
  Q4         b            (1.05\times10\^6,\text{m/s})
  Q5         a            2.35 eV
  Q6         a            5.5 eV
  Q7         a            3.12 eV
  Q8         a            (2(`\pi/3n)\^{1/3})
  Q9         d            5.53 eV
  Q10        c            (E\^0)

## Formula Recap

**3D Fermi energy using (h):**

\[
E_F=\frac{h^2}{2m_e}\left(\frac{3n}{8\pi}\right)\^{2/3}
\]

**3D Fermi energy using (`\hbar):**

\[ E_F=\frac{\hbar^2}{2m_e}(3\pi^2n)^{2/3} \]

**Fermi velocity:**

\[ v_F=\frac{h}{2\pi m_e}(3\pi^2n)^{1/3} \]

**Fermi wavelength:**

\[
\lambda\_F=2\left(\frac{\pi}{3n}\right)\^{1/3}
\]

**Crystal geometry:** - BCC: (4r=`\sqrt3a), 2 atoms/unit cell. -
FCC: (4r=`\sqrt2a), 4 atoms/unit cell. - Electron density:
(n=Z\times(\text{atoms per cell})/a\^3).

**Density of states:**

\[ g(E)`\propto E\^{d/2-1} \]

---

## Quick Answer Key

| Question | Correct option |
|---|---|
| Q1 | (a) 3.10 eV |
| Q2 | (a) 1261.6 K |
| Q3 | (c) 3.13 eV |
| Q4 | (b) (1.05 \times 10\^6,\text{m/s}) |
| Q5 | (a) 2.35 eV |
| Q6 | (a) 5.5 eV |
| Q7 | (a) 3.12 eV |
| Q8 | (a) (2\left(\frac{\pi}{3n}`\right)\^{1/3}) |
| Q9 | (d) 5.53 eV |
| Q10 | (c) (E\^0) |
