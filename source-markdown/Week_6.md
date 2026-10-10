# Week 6 — NPTEL Solid State Physics

Each question includes the original prompt, all options, recorded answer, formulas, and worked explanation.

---

## Q1. Interplanar Spacing from Bragg's Law

If the x-rays of wavelength 0.5 Å are diffracted at an angle of 5° in
the first order, what is the spacing between the adjacent planes of the
crystal?

**Options**

- (a) 1.26 Å
- (b) 2.87 Å
- (c) 3.12 Å
- (d) 4.27 Å

**Correct option:** (b) 2.87 Å

**Formulas:**

**Given:** (\lambda=0.5,\text{Å}),
(\theta=5\^\circ), order (n=1).
\[ n\lambda=2d\sin`\theta
d=`\frac{n\lambda}{2\sin\theta} \]
d=\frac{0.5}{2\sin5^\circ}\approx2.87,`\text{Å}

**Explanation:**

**Question type:** Bragg's law; calculate interplanar spacing.

**Given:** (\lambda=0.5,\text{Å}),
(\theta=5\^\circ), order (n=1).

\[ n\lambda=2d\sin`\theta
\quad\Rightarrow`\quad
d=`\frac{n\lambda}{2\sin\theta} \]

\[
d=\frac{0.5}{2\sin5^\circ}\approx2.87,`\text{Å}
\]

**Memory trick / exam trap:** Use Bragg angle (`\theta), not
automatically the full scattering angle (2`\theta).

---

## Q2. Spacing of (111) Planes in a Simple Cubic Crystal

The first order (100) reflection angle is 18° for a simple cubic crystal
using x-rays of wavelength 1.54 Å. Determine the distance between (111)
planes of the crystal.

**Options**

- (a) 1.44 Å
- (b) 2.82 Å
- (c) 3.12 Å
- (d) 4.23 Å

**Correct option:** (a) 1.44 Å

**Formulas:**

**Given:** (\theta=18\^\circ),
(\lambda=1.54,\text{Å}), first order, simple cubic.
For (100), (d\_{100}=a):
a=\frac{\lambda}{2\sin18^\circ}\approx2.49,`\text{Å}
\[ d\_{hkl}=`\frac{a}{\sqrt{h^2+k^2+l^2}} \]
d\_{111}=\frac{2.49}{\sqrt3}\approx1.44,`\text{Å}

**Explanation:**

**Question type:** Bragg's law plus cubic interplanar spacing.

**Given:** (\theta=18\^\circ),
(\lambda=1.54,\text{Å}), first order, simple cubic.

For (100), (d\_{100}=a):

\[
a=\frac{\lambda}{2\sin18^\circ}\approx2.49,`\text{Å}
\]

For cubic crystals:

\[ d\_{hkl}=`\frac{a}{\sqrt{h^2+k^2+l^2}} \]

\[
d\_{111}=\frac{2.49}{\sqrt3}\approx1.44,`\text{Å}
\]

**Memory trick / exam trap:** First find (a), then calculate spacing for
the required planes.

---

## Q3. Highest Order of X-ray Diffraction

The x-ray of wavelength 0.563 Å from a silver target is analyzed with a
Bragg's spectrometer using a calcite crystal. Consider calcite is a
simple cubic crystal having lattice parameter 3.03 Å. What is the
highest order for which the diffraction line may be observed?

**Options**

- (a) 4
- (b) 6
- (c) 10
- (d) 14

**Correct option:** (c) 10

**Formulas:**

**Given:** (\lambda=0.563,\text{Å}),
(d=a=3.03,`\text{Å}).
n\lambda=2d\sin\theta,\qquad \sin\theta`\leq1
n\_{\max}=\left\lfloor\frac{2d}{\lambda}\right\rfloor
=\left\lfloor\frac{2(3.03)}{0.563}\right`\rfloor
=\lfloor10.76\rfloor=10 \]
(2d/`\lambda); do not round up.

**Explanation:**

**Question type:** Maximum possible diffraction order.

**Given:** (\lambda=0.563,\text{Å}),
(d=a=3.03,`\text{Å}).

\[
n\lambda=2d\sin\theta,\qquad \sin\theta`\leq1
\]

\[
n\_{\max}=\left\lfloor\frac{2d}{\lambda}\right\rfloor
=\left\lfloor\frac{2(3.03)}{0.563}\right`\rfloor
=\lfloor10.76\rfloor=10 \]

**Memory trick / exam trap:** Take the greatest integer not exceeding
(2d/`\lambda); do not round up.

**Note:** The screenshot describes calcite as simple cubic, a
simplifying assumption in the question.

---

## Q4. Miller Indices from Powder Diffraction Angles

In a powder diffraction experiment with x-rays of wavelength
(`\lambda=1.54) Å, the first order Bragg reflection occur from a
monatomic cubic crystal for (`\theta) values: 17.4°, 20.3°,
29.3°, 35.1° and 36.9°. Determine the ratio of Miller indices of
diffraction planes.

**Options**

- (a) (111), (200), (220), (311), (222)
- (b) (100), (210),
(221), (322), (232)
- (c) (110), (111), (211), (223), (332)
- (d) (121),
(112), (252), (313), (333)

**Correct option:** (a) (111), (200), (220), (311), (222)

**Formulas:**

(\lambda=2d\sin`\theta). Since
(d=a/`\sqrt{h^2+k^2+l^2}),

**Explanation:**

**Question type:** Index diffraction peaks for a cubic crystal.

For first-order diffraction,
(\lambda=2d\sin`\theta). Since
(d=a/`\sqrt{h^2+k^2+l^2}),

\[ \sin^2\theta`\propto h^2+k^2+l^2 \]

The measured angles produce ratios approximately (3:4:8:11:12),
corresponding to the sums of squared Miller indices in option (a).

**Memory trick / exam trap:** Compare (\sin\^2\theta)
ratios, not the angles directly.

---

## Q5. Glancing Angle for Third-Order Diffraction from KCl

**Original question (opening cut off in screenshot)**

"... formula unit of KCl. Find the glancing angle at which an x-ray of
wavelength (`\lambda=1.787) Å is reflected from (100) planes in
the third order. Given: density of KCl = 1990 kg/m³ and its molecular
weight is 74.6 gm/mol."

**Options**

- (a) 22.6°
- (b) 42.6°
- (c) 64.5°
- (d) 74.8°

**Calculation check**

Rock-salt KCl has (Z_f=4) formula units per conventional cubic unit
cell. With (M=0.0746,`\text{kg/mol}),

\[ a=\left(\frac{Z_fM}{\rho N_A}`\right)\^{1/3}
\]

Using (\rho=1990,\text{kg/m}\^3) and
(N_A=6.022\times10^{23},\text{mol}^{-1}) gives
(a\approx6.29,\text{Å}). Since (d\_{100}=a),

\[ \sin\theta=`\frac{3(1.787)}{2(6.29)}
\quad\Rightarrow\quad \theta\approx25.2\^\circ
\]

**Discrepancy:** (25.2\^`\circ) is not listed. Option (b),
(42.6\^`\circ), results approximately from incorrectly assuming
one formula unit per unit cell. The opening of the screenshot is cut
off, so the intended assumption cannot be confirmed.

**Correct option:** _Not explicitly stated in source._

**Formulas:**

unit cell; do not assume (Z_f=1) for rock-salt KCl.

**Explanation:**

**Memory trick / exam trap:** Use the actual number of formula units per
unit cell; do not assume (Z_f=1) for rock-salt KCl.

---

## Q6. Powder Camera Arc Separation for Gold (FCC)

A powder camera of radius 57.3 mm is used to obtain diffraction pattern
of gold (FCC) having a lattice parameter of 4.08 Å. The wavelength of
x-ray (`\lambda=0.71) Å is used. Calculate the first two
S-values, where S is the distance between the arcs on the x-ray
photographic plate. Consider the first order Bragg diffraction.

**Options**

- (a) 34.68 mm, 40.08 mm
- (b) 44.24 mm, 51.22 mm
- (c)
52.53 mm, 62.42 mm
- (d) 64.28 mm, 74.78 mm

**Correct option:** (a) 34.68 mm, 40.08 mm

**Formulas:**

\[ S=4R`\theta \]
\[ d\_{111}=\frac{4.08}{\sqrt3}=2.355,\text{Å} \]
\theta\_1=\sin\^{-1}\left(\frac{0.71}{2d_{111}}`\right)
S_1=4(57.3)(8.67\pi/180)\approx34.68,`\text{mm}
For (200), (d\_{200}=4.08/2=2.04,`\text{Å}):
\theta\_2=\sin\^{-1}\left(\frac{0.71}{2(2.04)}`\right)
S_2=4(57.3)(10.02\pi/180)\approx40.08,`\text{mm}
**Memory trick / exam trap:** Use (S=4R`\theta) and convert

**Explanation:**

**Question type:** Powder camera geometry plus FCC reflection sequence.

\[ S=4R`\theta \]

Here (`\theta) is in radians. For FCC, the first allowed
reflections are (111) and (200).

For (111):

\[ d\_{111}=\frac{4.08}{\sqrt3}=2.355,\text{Å} \]

\[
\theta\_1=\sin\^{-1}\left(\frac{0.71}{2d_{111}}`\right)
\approx8.67\^\circ \]

\[
S_1=4(57.3)(8.67\pi/180)\approx34.68,`\text{mm}
\]

For (200), (d\_{200}=4.08/2=2.04,`\text{Å}):

\[
\theta\_2=\sin\^{-1}\left(\frac{0.71}{2(2.04)}`\right)
\approx10.02\^\circ \]

\[
S_2=4(57.3)(10.02\pi/180)\approx40.08,`\text{mm}
\]

**Memory trick / exam trap:** Use (S=4R`\theta) and convert
degrees to radians before multiplying.

---

## Q7. Lattice Parameter from Powder Diffraction Lines

For the first order Bragg diffraction, the S values for the first three
lines in the powder pattern of a cubic crystal are 56.8, 94.4 and 112.0
mm respectively. Given the wavelength of x-radiation used is 0.71 Å and
the camera radius 57.30 mm, determine the lattice parameter of the
crystal.

**Options**

- (a) 2.51 Å
- (b) 2.87 Å
- (c) 3.42 Å
- (d) 3.85 Å

**Correct option:** (a) 2.51 Å

**Formulas:**

S=4R\theta,\quad \lambda=2d\sin\theta,\quad
d\_{hkl}=`\frac{a}{\sqrt{h^2+k^2+l^2}} \]
\[ \theta\_1=\frac{56.8}{4(57.30)}
=0.2478,\text{rad}\approx14.20\^`\circ \]
d\_{111}=\frac{0.71}{2\sin14.20^\circ}\approx1.45,`\text{Å}
\[ a=d\_{111}\sqrt3\approx2.51,`\text{Å} \]

**Explanation:**

**Question type:** Find lattice parameter from powder camera data.

\[
S=4R\theta,\quad \lambda=2d\sin\theta,\quad
d\_{hkl}=`\frac{a}{\sqrt{h^2+k^2+l^2}} \]

For the first line:

\[ \theta\_1=\frac{56.8}{4(57.30)}
=0.2478,\text{rad}\approx14.20\^`\circ \]

The first line is consistent with (111):

\[
d\_{111}=\frac{0.71}{2\sin14.20^\circ}\approx1.45,`\text{Å}
\]

\[ a=d\_{111}\sqrt3\approx2.51,`\text{Å} \]

**Memory trick / exam trap:** Identify the reflection sequence before
converting (d) into (a).

---

## Q8. Reciprocal Lattice Vectors in 2D

The primitive translation vectors of a two dimensional lattice are
(\vec a=2\hat i+`\hat j),
(\vec b=2\hat j). Determine the primitive translational
vectors of its reciprocal lattice.

**Options**

- (a)
(\vec a\^*=\pi\hat i, \vec b^*=\frac{\pi}{2}(2\hat j-\hat i))\ -\ (b)\ (\vec a\^*=2\pi\hat i, \vec b^*=\pi(2\hat j-\hat i))
- (c)
(\vec a\^*=3\pi\hat i, \vec b^*=\frac{\pi}{2}(2\hat j+\hat i))\ -\ (d)\ (\vec a\^*=4\pi\hat i, \vec b^*=\pi(\hat i-2\hat j))

**Calculation check**

Reciprocal conditions:

\[
\vec a\^*\cdot\vec a=2\pi,\quad \vec a\^*\cdot\vec b=0
\]

\[
\vec b\^*\cdot\vec b=2\pi,\quad \vec b\^*\cdot\vec a=0
\]

They give:

\[ \vec a\^*=\pi\hat i,\qquad
\vec b\^*=\pi(\hat j-2\hat i) \]

**Discrepancy:** None of the listed options matches both vectors. Option
(a) has the correct (\vec a\^*), but its (\vec b\^*)
fails the required dot-product conditions. The question or options may
contain a typo.

**Correct option:** _Not explicitly stated in source._

**Formulas:**

_Relevant equation is shown in the worked explanation below._

**Explanation:**

**Memory trick / exam trap:** Verify every reciprocal-vector dot-product
condition instead of selecting an option based on one vector alone.

---

## Q9. Reciprocal Lattice Vectors in 3D

The primitive basis vectors of a three dimensional lattice are
(\vec a=\hat i+2`\hat j);
(\vec b=4\hat j) and (\vec c=\hat k).
Find out the primitive translational vectors of its reciprocal lattice.

**Options**

- (a)
(\vec a^*=2\pi\hat i, \vec b\^*=\frac{\pi}{2}(\hat j-2\hat i), \vec c^*=2\pi\hat k)
- (b)
(\vec a^*=\pi\hat i, \vec b\^*=\pi(\hat j-2\hat i), \vec c^*=\pi\hat k)
- (c)
(\vec a^*=3\pi\hat i, \vec b\^*=\frac{\pi}{3}(\hat j-2\hat i), \vec c^*=3\pi\hat k)
- (d)
(\vec a^*=4\pi\hat i, \vec b\^*=\frac{\pi}{4}(\hat j-2\hat i), \vec c^*=4\pi\hat k)

**Correct option:** (a)

**Formulas:**

V=\vec a\cdot(\vec b\times`\vec c)=4
\vec a\^*=2\pi\frac{\vec b\times\vec c}{V},\quad
\vec b\^*=2\pi\frac{\vec c\times\vec a}{V},\quad
\vec c\^\*=2\pi`\frac{\vec a\times\vec b}{V} \]
\[ \vec a\^*=2\pi\hat i,\quad
\vec b\^*=\frac{\pi}{2}(\hat j-2\hat i),`\quad
\vec c\^\*=2\pi`\hat k \]

**Explanation:**

Unit-cell volume:

\[
V=\vec a\cdot(\vec b\times`\vec c)=4
\]

Reciprocal vectors:

\[
\vec a\^*=2\pi\frac{\vec b\times\vec c}{V},\quad
\vec b\^*=2\pi\frac{\vec c\times\vec a}{V},\quad
\vec c\^\*=2\pi`\frac{\vec a\times\vec b}{V} \]

Thus,

\[ \vec a\^*=2\pi\hat i,\quad
\vec b\^*=\frac{\pi}{2}(\hat j-2\hat i),`\quad
\vec c\^\*=2\pi`\hat k \]

**Memory trick / exam trap:** Reciprocal vectors are (2`\pi)
times the appropriate cross product divided by the cell volume.

---

## Q10. Drift Velocity in a Copper Wire

A copper wire of 1 mm diameter carries a current of 5 mA. Calculate the
average drift velocity of the free electrons. Copper is monovalent and
crystallizes in FCC structure with a lattice parameter of 3.61 Å.

**Options**

- (a) (2.38\times10\^{-7},\text{m/s})
- (b)
(4.68\times10\^{-7},\text{m/s})
- (c)
(6.28\times10\^{-7},\text{m/s})
- (d)
(8.39\times10\^{-7},\text{m/s})

**Correct option:** (b) (4.68\times10\^{-7},\text{m/s})

**Formulas:**

\[ n=\frac{4}{a^3} =\frac{4}{(3.61\times10^{-10})^3}
\[ A=\frac{\pi d^2}{4} =\frac{\pi(10^{-3})^2}{4}
=7.854\times10^{-7},\text{m}^2 \]
\[ v_d=`\frac{I}{neA}
(n=Z_eN\_{`\text{atoms per cell}}/a\^3). For FCC monovalent
copper, (Z_e=1) and there are 4 atoms per cell.
                                      (\vec a\^*=\pi\hat i, \vec b\^*=\pi(\hat j-2`\hat i))
-   **Bragg's law:** (n\lambda=2d\sin`\theta)
    (d\_{hkl}=a/`\sqrt{h^2+k^2+l^2})
    (n\_{\max}=\lfloor2d/\lambda\rfloor)
-   **Powder camera arc separation:** (S=4R`\theta), with
-   **Mass density:** (`\rho=Z_fM/(N_Aa\^3)), where (Z_f) is
    (\vec a\^*=2\pi(\vec b\times`\vec c)/V),
    (\vec b\^*=2\pi(\vec c\times`\vec a)/V),
    (\vec c\^\*=2\pi(\vec a\times`\vec b)/V),
    (V=\vec a\cdot(\vec b\times`\vec c)).
-   **Drift velocity:** (v_d=I/(neA)).
    (n=Z_eN\_{`\text{atoms per cell}}/a\^3).

**Explanation:**

**Question type:** Drift velocity from current, area, and FCC electron
density.

FCC has four atoms per unit cell; monovalent copper contributes one free
electron per atom:

\[ n=\frac{4}{a^3} =\frac{4}{(3.61\times10^{-10})^3}
\approx8.50\times10^{28},`\text{m}^{-3} \]

\[ A=\frac{\pi d^2}{4} =\frac{\pi(10^{-3})^2}{4}
=7.854\times10^{-7},\text{m}^2 \]

\[ v_d=`\frac{I}{neA}
\approx4.68\times10\^{-7},`\text{m/s} \]

**Memory trick / exam trap:** General formula:
(n=Z_eN\_{`\text{atoms per cell}}/a\^3). For FCC monovalent
copper, (Z_e=1) and there are 4 atoms per cell.

# Week 6 --- Quick Answer Key

  Question                            Answer
  ----------------------------------- --------------------------------------------------------------------------------------------------------------
  Q1                                  b (2.87,`\text{Å})

  Q2                                  a (1.44,`\text{Å})

  Q3                                  c 10

  Q4                                  a (111), (200), (220), (311), (222)

  Q5                                  Calculation gives approximately (25.2\^`\circ); no listed option matches under standard KCl rock-salt
                                      assumptions

  Q6                                  a (34.68,\text{mm},,40.08,\text{mm})

  Q7                                  a (2.51,`\text{Å})

  Q8                                  No exact matching option;
                                      (\vec a\^*=\pi\hat i, \vec b\^*=\pi(\hat j-2`\hat i))

  Q9                                  a

  Q10                                 b (4.68\times10\^{-7},\text{m/s})

# Week 6 --- Formula Recap

-   **Bragg's law:** (n\lambda=2d\sin`\theta)
-   **Cubic interplanar spacing:**
    (d\_{hkl}=a/`\sqrt{h^2+k^2+l^2})
-   **Maximum diffraction order:**
    (n\_{\max}=\lfloor2d/\lambda\rfloor)
-   **Powder camera arc separation:** (S=4R`\theta), with
    (`\theta) in radians.
-   **Mass density:** (`\rho=Z_fM/(N_Aa\^3)), where (Z_f) is
    formula units per unit cell.
-   **3D reciprocal lattice:**
    (\vec a\^*=2\pi(\vec b\times`\vec c)/V),
    (\vec b\^*=2\pi(\vec c\times`\vec a)/V),
    (\vec c\^\*=2\pi(\vec a\times`\vec b)/V),
    where
    (V=\vec a\cdot(\vec b\times`\vec c)).
-   **Drift velocity:** (v_d=I/(neA)).
-   **Electron density:**
    (n=Z_eN\_{`\text{atoms per cell}}/a\^3).

---

## Quick Answer Key

| Question | Correct option |
|---|---|
| Q1 | (b) 2.87 Å |
| Q2 | (a) 1.44 Å |
| Q3 | (c) 10 |
| Q4 | (a) (111), (200), (220), (311), (222) |
| Q5 | _Not explicitly stated in source._ |
| Q6 | (a) 34.68 mm, 40.08 mm |
| Q7 | (a) 2.51 Å |
| Q8 | _Not explicitly stated in source._ |
| Q9 | (a) |
| Q10 | (b) (4.68\times10\^{-7},\text{m/s}) |
