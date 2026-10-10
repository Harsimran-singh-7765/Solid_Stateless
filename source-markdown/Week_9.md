# Week 9 — NPTEL Solid State Physics

Each question includes the original prompt, all options, recorded answer, formulas, and worked explanation.

---

## Q1. Density of states in a 1-D solid

Find an expression for density of states of free electrons (D(E)) in a
one-dimensional solid having dimension (a).

**Options**

- (a) (\displaystyle \frac{a}{2\pi}`\sqrt{\frac{2m}{\hbar^2}},E\^{-1/2})
- (b) (\displaystyle \frac{a}{2\pi}`\sqrt{\frac{2m}{\hbar^2}},E\^{1/2})
- (c) (\displaystyle \frac{a}{2\pi}`\sqrt{\frac{2m}{\hbar^2}},E\^{3/2})
- (d) (\displaystyle \frac{a}{2\pi}`\sqrt{\frac{2m}{\hbar^2}},E\^{5/2})

**Correct option:** (a)

**Formulas:**

D(E)\propto E^{-1/2} \quad\text{(1-D free-electron DOS)}

**Explanation:**

In 1-D, the number of allowed states grows with wave-vector range, while E = ℏ²k²/(2m). Converting the k-state count to energy gives D(E) proportional to E^(-1/2). Hence option (a).

---

## Q2. Momentum of an electron using effective mass

Given that the effective mass of the electron is 0.2 times its rest
mass, calculate its momentum when its energy 0.02 eV. Consider the
electron at the bottom of the conduction band and the rest mass of the
electron ((m_0 = 9.1 `\times 10\^{-31} kg)). Planck constant is
((h = 6.62 `\times 10\^{-34} J-s)).

**Options**

- (a) (1.74 `\times 10\^{-23} kg.m/s)
- (b) (3.41 `\times 10\^{-26} kg.m/s)
- (c) (5.32 `\times 10\^{-29} kg.m/s)
- (d) (7.23 `\times 10\^{-32} kg.m/s)

**Correct option:** (b)

**Formulas:**

p=\sqrt{2m^*E},\qquad m^*=0.2m_0,\qquad E(\mathrm J)=E(\mathrm{eV})\times1.602\times10^{-19}

**Explanation:**

Near the conduction-band minimum, use the parabolic-band relation E = p²/(2m*). Substitute m* = 0.2(9.1×10⁻³¹) kg and E = 0.02 eV after converting eV to joules. The matching listed value is option (b), 3.41×10⁻²⁶ kg·m/s.

---

## Q3. Group velocity in a 1-D crystal

The energy wave vector dispersion relation for a one dimensional crystal
of lattice constant 'a' is given by (E(k) = E_0 - `\alpha -
2\beta \cos(ka)) where (E_0), (`\alpha) and
(`\beta) are all constant. Find the value of (k) at which the
velocity (group velocity) of electron is a maximum, and also find out
the maximum velocity.

**Options**

- (a) (\displaystyle k=\frac{n\pi}{2a},\quad v\_{\max}=`\frac{2\beta a}{\hbar})
- (b) (\displaystyle k=\frac{n\pi}{a},\quad v\_{\max}=`\frac{2\beta}{\hbar})
- (c) (\displaystyle k=\frac{(2n+1)\pi}{a},\quad v\_{\max}=`\frac{2a}{\hbar})
- (d) (k=\pi,\quad v\_{\max}=\hbar a)

**Correct option:** No exact matching option; likely typo

**Formulas:**

v_g=\frac{1}{\hbar}\frac{dE}{dk},\qquad E(k)=E_0-\alpha-2\beta\cos(ka)

**Explanation:**

Differentiate: v_g = (2βa/ℏ)sin(ka). Its maximum positive value occurs when sin(ka)=1, i.e. k=(π/2+2nπ)/a, giving vmax=2βa/ℏ for β>0. No option states this k condition exactly; the source flags a likely typo.

---

## Q4. Energy bandwidth of a 1-D crystal

The energy (E) and wave vector (k) dispersion relation for an electron
in a one dimensional crystal of lattice constant 'a' is given by (E(k) =
E_0 - \alpha - 2\beta `\cos(ka)) where (E_0),
(\alpha) and (\beta) are all constant. Find the
difference in energy i.e., energy gap between the top and the bottom of
the energy band.

**Options**

- (a) (`\beta)
- (b) (2`\beta)
- (c) (3`\beta)
- (d) (4`\beta)

**Correct option:** (d)

**Formulas:**

E(k)=E_0-\alpha-2\beta\cos(ka),\qquad \Delta E=E_{\max}-E_{\min}=4|\beta|

**Explanation:**

Since cos(ka) ranges from −1 to +1, the energy varies across a total bandwidth of 4β when β is positive. Therefore option (d), 4β.

---

## Q5. Effective mass at the bottom and top of an energy band

The energy (E) and wave vector (k) dispersion relation for an electron
in a one dimensional crystal of lattice constant 'a' is given by (E(k) =
E_0 - \alpha - 2\beta `\cos(ka)) where (E_0),
(\alpha) and (\beta) are all constant. Find the
effective mass (m\^\*) of the electron at the bottom and the top of the
energy gap.

**Options**

- (a) (\displaystyle \frac{\hbar^2}{2\beta a^2},\quad -\frac{\hbar^2}{2\beta a^2})
- (b) (\displaystyle \frac{\hbar^2}{2a^2},\quad -\frac{\hbar^2}{2a^2})
- (c) (\displaystyle \frac{\hbar^2}{\beta},\quad -\frac{\hbar^2}{\beta})
- (d) (\displaystyle \frac{\hbar^2}{2\beta},\quad -\frac{\hbar^2}{2\beta})

**Correct option:** (a)

**Formulas:**

\frac{1}{m^*}=\frac{1}{\hbar^2}\frac{d^2E}{dk^2},\qquad \frac{d^2E}{dk^2}=2\beta a^2\cos(ka)

**Explanation:**

At the band bottom, curvature is positive and m* = ℏ²/(2βa²). At the band top, curvature is negative and m* = −ℏ²/(2βa²). This matches option (a).

---

## Q6. Effective mass and momentum of a hole

The energy of the electron near the valence band edge of a crystal is
given by((E = -Ak\^2)), where ((A = 10^{-39} J-m^2)). An electron with
wave vector (\vec{k} = 10^{10}\hat{i} m^{-1}) is removed
from the completely filled valance band. Find the effective mass and
momentum of the hole. Planck constant is ((h = 6.62
`\times 10\^{-34} J-s)).

**Options**

- (a) (m_h\^\* = 5.5
        \times 10\^{-30} kg,\quad `\vec{P}\_h =
        -1.05 \times 10\^{-24}\hat{i} (J.s/m))
- (b) (m_h\^\* = -5.5
        \times 10\^{-30} kg,\quad `\vec{P}\_h =
        1.05 \times 10\^{-24}\hat{i} (J.s/m))
- (c) (m_h\^\* = 3.5
        \times 10\^{-20} kg,\quad `\vec{P}\_h =
        -2.05 \times 10\^{-29}\hat{i} (J.s/m))
- (d) (m_h\^\* = 4.5
        \times 10\^{-35} kg,\quad `\vec{P}\_h =
        -3.09 \times 10\^{-35}\hat{i} (J.s/m))

**Correct option:** (a)

**Formulas:**

\frac{1}{m_e^*}=\frac{1}{\hbar^2}\frac{d^2E}{dk^2};\ E=-Ak^2\Rightarrow m_e^*=-\frac{\hbar^2}{2A},\quad m_h^*=\frac{\hbar^2}{2A};\quad \vec p_h=-\hbar\vec k

**Explanation:**

For E = −Ak², curvature is −2A, so the valence-band electron has negative effective mass and the hole has the opposite positive effective mass. A hole left by removing an electron has crystal momentum opposite to the removed electron's ℏk. Using the supplied values gives option (a) in the source.

---

## Q7. Ratio of kinetic energies in a 2-D square lattice

Compute the ratio between the kinetic energies of a free electron in two
dimensional square lattices when (a) (k_x = k_y = `\frac{\pi}{a})
and when (b) (k_x = 0) and (k_y = `\frac{\pi}{a}).

**Options**

- (a) 2
- (b) 4
- (c) 6
- (d) 8

**Correct option:** (a)

**Formulas:**

E_k=\frac{\hbar^2}{2m}(k_x^2+k_y^2)

**Explanation:**

For case (a), kx=ky=π/a, so E_a ∝ 2π²/a². For case (b), kx=0 and ky=π/a, so E_b ∝ π²/a². Thus E_a/E_b=2, option (a).

---

## Q8. Kronig--Penney model

Using Kronig-Penny model
(`\left[\frac{P\sin(\alpha a)}{\alpha a}+\cos(\alpha a)=\cos(ka)\right])
calculate the energy of the electron for the lowest energy band at (k =
0). Consider (P `\ll 1). Where 'a' is the interatomic separation
and (\left(\alpha =
\sqrt{\frac{2mE}{\hbar^2}}\right)).

**Options**

- (a) (\displaystyle \frac{Ph^2}{4\pi^2ma^2})
- (b) (\displaystyle \frac{Ph^2}{\pi^2ma^2})
- (c) (\displaystyle \frac{Ph^2}{2\pi^2ma^2})
- (d) (\displaystyle \frac{Ph^2}{3\pi^2ma^2})

**Correct option:** (a)

**Formulas:**

\frac{P\sin(\alpha a)}{\alpha a}+\cos(\alpha a)=\cos(ka),\qquad \alpha=\frac{\sqrt{2mE}}{\hbar}

**Explanation:**

At k=0, the right side is 1. For P≪1, use the lowest-band small-parameter approximation around αa≈0 and expand sine/cosine to leading nonzero order; this yields the lowest-band energy proportional to Pℏ²/(ma²), equivalently the option-(a) expression Ph²/(4π²ma²).

---

## Q9. Band gap from wavelength

Estimate the band gap of an insulator if it absorbs electromagnetic
radiation of the wavelengths below the 3000Å. Consider Planck constant
((h = 6.62 `\times 10\^{-34} J-s)).

**Options**

- (a) 3.13 eV
- (b) 4.14 eV
- (c) 5.27 eV
- (d) 5.86 eV

**Correct option:** (b)

**Formulas:**

E_g\approx \frac{hc}{\lambda_{\max}},\qquad E(\mathrm{eV})\approx\frac{12400}{\lambda(\text{Å})}

**Explanation:**

The longest absorbed wavelength corresponds to the threshold band-gap photon. With λ=3000 Å, Eg≈12400/3000=4.13 eV, matching option (b), 4.14 eV.

---

## Q10. Fermi wave vector and FCC Brillouin zone

Calculate the ratio (`\frac{k_F}{k_m}) for a FCC metal having
valency one. Where (k_F) the radius of the sphere of Fermi surface and
(k_m) is the shortest distance of the hexagonal face from the centre of
the first Brillouin zone of FCC crystal.

**Options**

- (a) 0.701
- (b) 0.802
- (c) 0.902
- (d) 1.302

**Correct option:** (c)

**Formulas:**

k_F=(3\pi^2n)^{1/3},\qquad n=\frac{4}{a^3}\ \text{(FCC, valency 1)},\qquad k_m=\frac{2\pi}{a}\frac{\sqrt{3}}{2}

**Explanation:**

FCC has four atoms per conventional cell and valency one, so n=4/a³. The nearest hexagonal Brillouin-zone face is at distance km=√3π/a. Substituting in kF/km gives approximately 0.906, so option (c), 0.902, is the closest listed value.

---

## Quick Answer Key

| Question | Correct option |
|---|---|
| Q1 | (a) |
| Q2 | (b) |
| Q3 | No exact matching option; likely typo |
| Q4 | (d) |
| Q5 | (a) |
| Q6 | (a) |
| Q7 | (a) |
| Q8 | (a) |
| Q9 | (b) |
| Q10 | (c) |
