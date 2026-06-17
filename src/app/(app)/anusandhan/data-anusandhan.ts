// src/app/(app)/anusandhan/data-anusandhan.ts
// Curated fallback papers for Anusandhan portal
// 30 entries per category x 7 categories = 210 papers total

export interface AnusandhanPaper {
  id: string;
  title: string;
  authors: string[];
  publication_year: number;
  journal: string;
  abstract: string;
  doi?: string | null;
  cited_by_count: number;
  category: 'science' | 'psychology' | 'math' | 'sociology' | 'economics' | 'environment' | 'tech';
  reflection_question: string;
}

export const ANUSANDHAN_FALLBACK: AnusandhanPaper[] = [
  {
    "id": "W3038568908",
    "title": "Radiation Resistant Camera System for Monitoring Deuterium Plasma Discharges in the Large Helical Device",
    "authors": [
      "M. Shoji",
      "LHD Experiment Group"
    ],
    "publication_year": 2020,
    "journal": "Plasma and Fusion Research",
    "abstract": "Radiation resistant camera system was constructed for monitoring deuterium plasma discharges in the Large Helical Device (LHD). This system has contributed to safe operation during two experimental campaigns without serious problems due to radiation (neutrons and gamma-rays). The cameras steadily functioned even in the plasma discharge with the maximum neutron emission rate in FY 2017, though some bright specks temporarily appeared on the images. The cameras have been installed in shield boxe...",
    "doi": "https://doi.org/10.1585/pfr.15.2402039",
    "cited_by_count": 801217,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W1981368803",
    "title": "Generalized Gradient Approximation Made Simple",
    "authors": [
      "John P. Perdew",
      "Kieron Burke",
      "Matthias Ernzerhof"
    ],
    "publication_year": 1996,
    "journal": "Physical Review Letters",
    "abstract": "Generalized gradient approximations (GGA's) for the exchange-correlation energy improve upon the local spin density (LSD) description of atoms, molecules, and solids. We present a simple derivation of a simple GGA, in which all parameters (other than those in LSD) are fundamental constants. Only general features of the detailed construction underlying the Perdew-Wang 1991 (PW91) GGA are invoked. Improvements over PW91 include an accurate description of the linear response of the uniform elect...",
    "doi": "https://doi.org/10.1103/physrevlett.77.3865",
    "cited_by_count": 210339,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W4288400169",
    "title": "Yaşlı Kadınlarda Üreme Sağlığı",
    "authors": [
      "Kokanalı, Demet",
      "Engin Üstün, Yaprak"
    ],
    "publication_year": 2026,
    "journal": "DergiPark (Istanbul University)",
    "abstract": "Reproductive health is the absence of illness or disability related to the reproductive system and its functions, and mental and social well-being.Reproductive health also means that people have a satisfying and safe sexual life, have the ability to reproduce, and have the freedom to decide whether to use their reproductive ability.This issue is often ignored for menopausal and post-menopausal older women, whose fertility is over.However, reproductive health should be regarded as the fundamen...",
    "doi": null,
    "cited_by_count": 169601,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2083222334",
    "title": "Efficient iterative schemes for<i>ab initio</i>total-energy calculations using a plane-wave basis set",
    "authors": [
      "Georg Kresse",
      "J. Furthmüller"
    ],
    "publication_year": 1996,
    "journal": "Physical review. B, Condensed matter",
    "abstract": "We present an efficient scheme for calculating the Kohn-Sham ground state of metallic systems using pseudopotentials and a plane-wave basis set. In the first part the application of Pulay's DIIS method (direct inversion in the iterative subspace) to the iterative diagonalization of large matrices will be discussed. Our approach is stable, reliable, and minimizes the number of order ${\\mathit{N}}_{\\mathrm{atoms}}^{3}$ operations. In the second part, we will discuss an efficient mixing scheme a...",
    "doi": "https://doi.org/10.1103/physrevb.54.11169",
    "cited_by_count": 119859,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2143981217",
    "title": "Density-functional thermochemistry. III. The role of exact exchange",
    "authors": [
      "Axel D. Becke"
    ],
    "publication_year": 1993,
    "journal": "The Journal of Chemical Physics",
    "abstract": "Despite the remarkable thermochemical accuracy of Kohn–Sham density-functional theories with gradient corrections for exchange-correlation [see, for example, A. D. Becke, J. Chem. Phys. 96, 2155 (1992)], we believe that further improvements are unlikely unless exact-exchange information is considered. Arguments to support this view are presented, and a semiempirical exchange-correlation functional containing local-spin-density, gradient, and exact-exchange terms is tested on 56 atomization en...",
    "doi": "https://doi.org/10.1063/1.464913",
    "cited_by_count": 102457,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2023271753",
    "title": "Development of the Colle-Salvetti correlation-energy formula into a functional of the electron density",
    "authors": [
      "Chengteh Lee",
      "Weitao Yang",
      "Robert G. Parr"
    ],
    "publication_year": 1988,
    "journal": "Physical review. B, Condensed matter",
    "abstract": "A correlation-energy formula due to Colle and Salvetti [Theor. Chim. Acta 37, 329 (1975)], in which the correlation energy density is expressed in terms of the electron density and a Laplacian of the second-order Hartree-Fock density matrix, is restated as a formula involving the density and local kinetic-energy density. On insertion of gradient expansions for the local kinetic-energy density, density-functional formulas for the correlation energy and correlation potential are then obtained. ...",
    "doi": "https://doi.org/10.1103/physrevb.37.785",
    "cited_by_count": 99808,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W1970127494",
    "title": "Projector augmented-wave method",
    "authors": [
      "Peter E. Blöchl"
    ],
    "publication_year": 1994,
    "journal": "Physical review. B, Condensed matter",
    "abstract": "An approach for electronic structure calculations is described that generalizes both the pseudopotential method and the linear augmented-plane-wave (LAPW) method in a natural way. The method allows high-quality first-principles molecular-dynamics calculations to be performed using the original fictitious Lagrangian approach of Car and Parrinello. Like the LAPW method it can be used to treat first-row and transition-metal elements with affordable effort and provides access to the full wave fun...",
    "doi": "https://doi.org/10.1103/physrevb.50.17953",
    "cited_by_count": 90283,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W1979544533",
    "title": "From ultrasoft pseudopotentials to the projector augmented-wave method",
    "authors": [
      "Georg Kresse",
      "Daniel P. Joubert"
    ],
    "publication_year": 1999,
    "journal": "Physical review. B, Condensed matter",
    "abstract": "The formal relationship between ultrasoft (US) Vanderbilt-type pseudopotentials and Bl\\\"ochl's projector augmented wave (PAW) method is derived. It is shown that the total energy functional for US pseudopotentials can be obtained by linearization of two terms in a slightly modified PAW total energy functional. The Hamilton operator, the forces, and the stress tensor are derived for this modified PAW functional. A simple way to implement the PAW method in existing plane-wave codes supporting U...",
    "doi": "https://doi.org/10.1103/physrevb.59.1758",
    "cited_by_count": 83177,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2007395042",
    "title": "Efficiency of ab-initio total energy calculations for metals and semiconductors using a plane-wave basis set",
    "authors": [
      "Georg Kresse",
      "J. Furthmüller"
    ],
    "publication_year": 1996,
    "journal": "Computational Materials Science",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0927-0256(96)00008-0",
    "cited_by_count": 74273,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2036113194",
    "title": "Special points for Brillouin-zone integrations",
    "authors": [
      "Hendrik J. Monkhorst",
      "J.D. Pack"
    ],
    "publication_year": 1976,
    "journal": "Physical review. B, Solid state",
    "abstract": "A method is given for generating sets of special points in the Brillouin zone which provides an efficient means of integrating periodic functions of the wave vector. The integration can be over the entire Brillouin zone or over specified portions thereof. This method also has applications in spectral and density-of-state calculations. The relationships to the Chadi-Cohen and Gilat-Raubenheimer methods are indicated.",
    "doi": "https://doi.org/10.1103/physrevb.13.5188",
    "cited_by_count": 69998,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2230728100",
    "title": "Self-Consistent Equations Including Exchange and Correlation Effects",
    "authors": [
      "W. Kohn",
      "L. J. Sham"
    ],
    "publication_year": 1965,
    "journal": "Physical Review",
    "abstract": "From a theory of Hohenberg and Kohn, approximation methods for treating an inhomogeneous system of interacting electrons are developed. These methods are exact for systems of slowly varying or high density. For the ground state, they lead to self-consistent equations analogous to the Hartree and Hartree-Fock equations, respectively. In these equations the exchange and correlation portions of the chemical potential of a uniform electron gas appear as additional effective potentials. (The excha...",
    "doi": "https://doi.org/10.1103/physrev.140.a1133",
    "cited_by_count": 63016,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2092157292",
    "title": "A consistent and accurate<i>ab initio</i>parametrization of density functional dispersion correction (DFT-D) for the 94 elements H-Pu",
    "authors": [
      "Stefan Grimme",
      "Jens Antony",
      "Stephan Ehrlich",
      "Helge Krieg"
    ],
    "publication_year": 2010,
    "journal": "The Journal of Chemical Physics",
    "abstract": "The method of dispersion correction as an add-on to standard Kohn-Sham density functional theory (DFT-D) has been refined regarding higher accuracy, broader range of applicability, and less empiricism. The main new ingredients are atom-pairwise specific dispersion coefficients and cutoff radii that are both computed from first principles. The coefficients for new eighth-order dispersion terms are computed using established recursion relations. System (geometry) dependent information is used f...",
    "doi": "https://doi.org/10.1063/1.3382344",
    "cited_by_count": 56401,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2086957099",
    "title": "Density-functional exchange-energy approximation with correct asymptotic behavior",
    "authors": [
      "Axel D. Becke"
    ],
    "publication_year": 1988,
    "journal": "Physical review. A, General physics",
    "abstract": "Current gradient-corrected density-functional approximations for the exchange energies of atomic and molecular systems fail to reproduce the correct 1/r asymptotic behavior of the exchange-energy density. Here we report a gradient-corrected exchange-energy functional with the proper asymptotic limit. Our functional, containing only one parameter, fits the exact Hartree-Fock exchange energies of a wide variety of atomic systems with remarkable accuracy, surpassing the performance of previous f...",
    "doi": "https://doi.org/10.1103/physreva.38.3098",
    "cited_by_count": 53428,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2024060531",
    "title": "Optimization by Simulated Annealing",
    "authors": [
      "Scott Kirkpatrick",
      "C. D. Gelatt",
      "M.P. Vecchi"
    ],
    "publication_year": 1983,
    "journal": "Science",
    "abstract": "There is a deep and useful connection between statistical mechanics (the behavior of systems with many degrees of freedom in thermal equilibrium at a finite temperature) and multivariate or combinatorial optimization (finding the minimum of a given function depending on many parameters). A detailed analogy with annealing in solids provides a framework for optimization of the properties of very large and complex systems. This connection to statistical mechanics exposes new information and prov...",
    "doi": "https://doi.org/10.1126/science.220.4598.671",
    "cited_by_count": 44526,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2132525235",
    "title": "Multiwfn: A multifunctional wavefunction analyzer",
    "authors": [
      "Tian Lu",
      "Feiwu Chen"
    ],
    "publication_year": 2011,
    "journal": "Journal of Computational Chemistry",
    "abstract": "Multiwfn is a multifunctional program for wavefunction analysis. Its main functions are: (1) Calculating and visualizing real space function, such as electrostatic potential and electron localization function at point, in a line, in a plane or in a spatial scope. (2) Population analysis. (3) Bond order analysis. (4) Orbital composition analysis. (5) Plot density-of-states and spectrum. (6) Topology analysis for electron density. Some other useful utilities involved in quantum chemistry studie...",
    "doi": "https://doi.org/10.1002/jcc.22885",
    "cited_by_count": 42426,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2109469951",
    "title": "The Strength of Weak Ties",
    "authors": [
      "Mark Granovetter"
    ],
    "publication_year": 1973,
    "journal": "American Journal of Sociology",
    "abstract": "Analysis of social networks is suggested as a tool for linking micro and macro levels of sociological theory. The procedure is illustrated by elaboration of the macro implications of one aspect of small-scale interaction: the strength of dyadic ties. It is argued that the degree of overlap of two individuals' friendship networks varies directly with the strength of their tie to one another. The impact of this principle on diffusion of influence and information, mobility opportunity, and commu...",
    "doi": "https://doi.org/10.1086/225469",
    "cited_by_count": 38355,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2008620264",
    "title": "Emergence of Scaling in Random Networks",
    "authors": [
      "Albert-Ĺaszló Barabási",
      "Réka Albert"
    ],
    "publication_year": 1999,
    "journal": "Science",
    "abstract": "Systems as diverse as genetic networks or the World Wide Web are best described as networks with complex topology. A common property of many large networks is that the vertex connectivities follow a scale-free power-law distribution. This feature was found to be a consequence of two generic mechanisms: (i) networks expand continuously by the addition of new vertices, and (ii) new vertices attach preferentially to sites that are already well connected. A model based on these two ingredients re...",
    "doi": "https://doi.org/10.1126/science.286.5439.509",
    "cited_by_count": 36306,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2069006374",
    "title": "Gaussian basis sets for use in correlated molecular calculations. I. The atoms boron through neon and hydrogen",
    "authors": [
      "Thom H. Dunning"
    ],
    "publication_year": 1989,
    "journal": "The Journal of Chemical Physics",
    "abstract": "In the past, basis sets for use in correlated molecular calculations have largely been taken from single configuration calculations. Recently, Almlöf, Taylor, and co-workers have found that basis sets of natural orbitals derived from correlated atomic calculations (ANOs) provide an excellent description of molecular correlation effects. We report here a careful study of correlation effects in the oxygen atom, establishing that compact sets of primitive Gaussian functions effectively and effic...",
    "doi": "https://doi.org/10.1063/1.456153",
    "cited_by_count": 31666,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2035266068",
    "title": "Molecular dynamics with coupling to an external bath",
    "authors": [
      "Herman J. C. Berendsen",
      "Johan P. M. Postma",
      "Wilfred F. van Gunsteren",
      "A. DiNola",
      "J.R. Haak"
    ],
    "publication_year": 1984,
    "journal": "The Journal of Chemical Physics",
    "abstract": "In molecular dynamics (MD) simulations the need often arises to maintain such parameters as temperature or pressure rather than energy and volume, or to impose gradients for studying transport properties in nonequilibrium MD. A method is described to realize coupling to an external bath with constant temperature or pressure with adjustable time constants for the coupling. The method is easily extendable to other variables and to gradients, and can be applied also to polyatomic molecules invol...",
    "doi": "https://doi.org/10.1063/1.448118",
    "cited_by_count": 30875,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2044591029",
    "title": "Semiempirical GGA‐type density functional constructed with a long‐range dispersion correction",
    "authors": [
      "Stefan Grimme"
    ],
    "publication_year": 2006,
    "journal": "Journal of Computational Chemistry",
    "abstract": "A new density functional (DF) of the generalized gradient approximation (GGA) type for general chemistry applications termed B97-D is proposed. It is based on Becke's power-series ansatz from 1997 and is explicitly parameterized by including damped atom-pairwise dispersion corrections of the form C(6) x R(-6). A general computational scheme for the parameters used in this correction has been established and parameters for elements up to xenon and a scaling factor for the dispersion part for s...",
    "doi": "https://doi.org/10.1002/jcc.20495",
    "cited_by_count": 30617,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2067174909",
    "title": "Particle mesh Ewald: An <i>N</i>⋅log(<i>N</i>) method for Ewald sums in large systems",
    "authors": [
      "Tom Darden",
      "Darrin M. York",
      "Lee G. Pedersen"
    ],
    "publication_year": 1993,
    "journal": "The Journal of Chemical Physics",
    "abstract": "An N⋅log(N) method for evaluating electrostatic energies and forces of large periodic systems is presented. The method is based on interpolation of the reciprocal space Ewald sums and evaluation of the resulting convolutions using fast Fourier transforms. Timings and accuracies are presented for three large crystalline ionic systems.",
    "doi": "https://doi.org/10.1063/1.464397",
    "cited_by_count": 30547,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2150697053",
    "title": "The M06 suite of density functionals for main group thermochemistry, thermochemical kinetics, noncovalent interactions, excited states, and transition elements: two new functionals and systematic testing of four M06-class functionals and 12 other functionals",
    "authors": [
      "Yan Zhao",
      "Donald G. Truhlar"
    ],
    "publication_year": 2007,
    "journal": "Theoretical Chemistry Accounts",
    "abstract": "We present two new hybrid meta exchange- correlation functionals, called M06 and M06-2X. The M06 functional is parametrized including both transition metals and nonmetals, whereas the M06-2X functional is a high-nonlocality functional with double the amount of nonlocal exchange (2X), and it is parametrized only for nonmetals.The functionals, along with the previously published M06-L local functional and the M06-HF full-Hartree–Fock functionals, constitute the M06 suite of complementary functi...",
    "doi": "https://doi.org/10.1007/s00214-007-0310-x",
    "cited_by_count": 29860,
    "category": "science",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1988091937",
    "title": "Balanced basis sets of split valence, triple zeta valence and quadruple zeta valence quality for H to Rn: Design and assessment of accuracy",
    "authors": [
      "Florian Weigend",
      "Reinhart Ahlrichs"
    ],
    "publication_year": 2005,
    "journal": "Physical Chemistry Chemical Physics",
    "abstract": "Gaussian basis sets of quadruple zeta valence quality for Rb-Rn are presented, as well as bases of split valence and triple zeta valence quality for H-Rn. The latter were obtained by (partly) modifying bases developed previously. A large set of more than 300 molecules representing (nearly) all elements-except lanthanides-in their common oxidation states was used to assess the quality of the bases all across the periodic table. Quantities investigated were atomization energies, dipole moments ...",
    "doi": "https://doi.org/10.1039/b508541a",
    "cited_by_count": 29703,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2120145199",
    "title": "QUANTUM ESPRESSO: a modular and open-source software project for quantum simulations of materials",
    "authors": [
      "Paolo Giannozzi",
      "Stefano Baroni",
      "Nicola Bonini",
      "Matteo Calandra",
      "Roberto Car"
    ],
    "publication_year": 2009,
    "journal": "Journal of Physics Condensed Matter",
    "abstract": "QUANTUM ESPRESSO is an integrated suite of computer codes for electronic-structure calculations and materials modeling, based on density-functional theory, plane waves, and pseudopotentials (norm-conserving, ultrasoft, and projector-augmented wave). The acronym ESPRESSO stands for opEn Source Package for Research in Electronic Structure, Simulation, and Optimization. It is freely available to researchers around the world under the terms of the GNU General Public License. QUANTUM ESPRESSO buil...",
    "doi": "https://doi.org/10.1088/0953-8984/21/39/395502",
    "cited_by_count": 28743,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2096747776",
    "title": "Effect of the damping function in dispersion corrected density functional theory",
    "authors": [
      "Stefan Grimme",
      "Stephan Ehrlich",
      "Lars Goerigk"
    ],
    "publication_year": 2011,
    "journal": "Journal of Computational Chemistry",
    "abstract": "It is shown by an extensive benchmark on molecular energy data that the mathematical form of the damping function in DFT-D methods has only a minor impact on the quality of the results. For 12 different functionals, a standard \"zero-damping\" formula and rational damping to finite values for small interatomic distances according to Becke and Johnson (BJ-damping) has been tested. The same (DFT-D3) scheme for the computation of the dispersion coefficients is used. The BJ-damping requires one fit...",
    "doi": "https://doi.org/10.1002/jcc.21759",
    "cited_by_count": 26835,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2049079467",
    "title": "Accurate and simple analytic representation of the electron-gas correlation energy",
    "authors": [
      "John P. Perdew",
      "Yue Wang"
    ],
    "publication_year": 1992,
    "journal": "Physical review. B, Condensed matter",
    "abstract": "We propose a simple analytic representation of the correlation energy ${\\mathrm{\\ensuremath{\\varepsilon}}}_{\\mathit{c}}$ for a uniform electron gas, as a function of density parameter ${\\mathit{r}}_{\\mathit{s}}$ and relative spin polarization \\ensuremath{\\zeta}. Within the random-phase approximation (RPA), this representation allows for the ${\\mathit{r}}_{\\mathit{s}}^{\\mathrm{\\ensuremath{-}}3/4}$ behavior as ${\\mathit{r}}_{\\mathit{s}}$\\ensuremath{\\rightarrow}\\ensuremath{\\infty}. Close agreeme...",
    "doi": "https://doi.org/10.1103/physrevb.45.13244",
    "cited_by_count": 24898,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2169528473",
    "title": "A note on two problems in connexion with graphs",
    "authors": [
      "E. Dijkstra"
    ],
    "publication_year": 1959,
    "journal": "Numerische Mathematik",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/bf01386390",
    "cited_by_count": 23795,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W1991794210",
    "title": "Canonical dynamics: Equilibrium phase-space distributions",
    "authors": [
      "William G. Hoover"
    ],
    "publication_year": 1985,
    "journal": "Physical review. A, General physics",
    "abstract": "Nos\\'e has modified Newtonian dynamics so as to reproduce both the canonical and the isothermal-isobaric probability densities in the phase space of an N-body system. He did this by scaling time (with s) and distance (with ${V}^{1/D}$ in D dimensions) through Lagrangian equations of motion. The dynamical equations describe the evolution of these two scaling variables and their two conjugate momenta ${p}_{s}$ and ${p}_{v}$. Here we develop a slightly different set of equations, free of time sc...",
    "doi": "https://doi.org/10.1103/physreva.31.1695",
    "cited_by_count": 23252,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W1933657216",
    "title": "The Ecological Approach to Visual Perception",
    "authors": [
      "Marc H. Bornstein",
      "James J. Gibson"
    ],
    "publication_year": 1980,
    "journal": "Journal of Aesthetics and Art Criticism",
    "abstract": "Contents: Preface. Introduction. Part I: The Environment To Be Perceived.The Animal And The Environment. Medium, Substances, Surfaces. The Meaningful Environment. Part II: The Information For Visual Perception.The Relationship Between Stimulation And Stimulus Information. The Ambient Optic Array. Events And The Information For Perceiving Events. The Optical Information For Self-Perception. The Theory Of Affordances. Part III: Visual Perception.Experimental Evidence For Direct Perception: Pers...",
    "doi": "https://doi.org/10.2307/429816",
    "cited_by_count": 23160,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2087585288",
    "title": "Soft self-consistent pseudopotentials in a generalized eigenvalue formalism",
    "authors": [
      "David Vanderbilt"
    ],
    "publication_year": 1990,
    "journal": "Physical review. B, Condensed matter",
    "abstract": "A new approach to the construction of first-principles pseudopotentials is described. The method allows transferability to be improved systematically while holding the cutoff radius fixed, even for large cutoff radii. Novel features are that the pseudopotential itself becomes charge-state dependent, the usual norm-conservation constraint does not apply, and a generalized eigenproblem is introduced. The potentials have a separable form well suited for plane-wave solid-state calculations, and s...",
    "doi": "https://doi.org/10.1103/physrevb.41.7892",
    "cited_by_count": 22894,
    "category": "science",
    "reflection_question": "What does the extreme scale of this physical discovery teach us about the limitations of our daily perception and our place in the cosmos?"
  },
  {
    "id": "W2159011576",
    "title": "Diagnostic and Statistical Manual of Mental Disorders",
    "authors": [
      "Janet B. W. Williams",
      "Michael B. First"
    ],
    "publication_year": 2013,
    "journal": "Encyclopedia of Social Work",
    "abstract": "The fifth edition of the <italic>Diagnostic and Statistical Manual of Mental Disorders</italic> of the American Psychiatric Association is referred to as DSM-5<italic>™</italic>. DSM-5’s early predecessor, DSM-III, differed considerably from the first two editions. Its innovative incorporation of specified diagnostic criteria had a major impact on the field of mental health. In DSM-5, these criteria have been further updated to reflect the important gains in our understanding of mental disord...",
    "doi": "https://doi.org/10.1093/acrefore/9780199975839.013.104",
    "cited_by_count": 109978,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2099697766",
    "title": "The theory of planned behavior",
    "authors": [
      "Icek Ajzen"
    ],
    "publication_year": 1991,
    "journal": "Organizational Behavior and Human Decision Processes",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0749-5978(91)90020-t",
    "cited_by_count": 84200,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W4300870773",
    "title": "Statistical Power Analysis for the Behavioral Sciences",
    "authors": [
      "Keith E. Muller",
      "Jacob Cohen"
    ],
    "publication_year": 1989,
    "journal": "Technometrics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.2307/1270020",
    "cited_by_count": 83879,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2106096361",
    "title": "Common method biases in behavioral research: A critical review of the literature and recommended remedies.",
    "authors": [
      "Philip M. Podsakoff",
      "Scott MacKenzie",
      "Jeong Yeon Lee",
      "Nathan P. Podsakoff"
    ],
    "publication_year": 2003,
    "journal": "Journal of Applied Psychology",
    "abstract": "Interest in the problem of method biases has a long history in the behavioral sciences. Despite this, a comprehensive summary of the potential sources of method biases and how to control for them does not exist. Therefore, the purpose of this article is to examine the extent to which method biases influence behavioral research results, identify potential sources of method biases, discuss the cognitive processes through which method biases influence responses to measures, evaluate the many dif...",
    "doi": "https://doi.org/10.1037/0021-9010.88.5.879",
    "cited_by_count": 75904,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W1971440513",
    "title": "The moderator-mediator variable distinction in social psychological research: Conceptual, strategic, and statistical considerations.",
    "authors": [
      "Reuben M. Baron",
      "David A. Kenny"
    ],
    "publication_year": 1986,
    "journal": "Journal of Personality and Social Psychology",
    "abstract": "In this article, we attempt to distinguish between the properties of moderator and mediator variables at a number of levels. First, we seek to make theorists and researchers aware of the importance of not using the terms moderator and mediator interchangeably by carefully elaborating, both conceptually and strategically, the many ways in which moderators and mediators differ. We then go beyond this largely pedagogical function and delineate the conceptual and strategic implications of making ...",
    "doi": "https://doi.org/10.1037//0022-3514.51.6.1173",
    "cited_by_count": 72090,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2087484885",
    "title": "G*Power 3: A flexible statistical power analysis program for the social, behavioral, and biomedical sciences",
    "authors": [
      "Franz Faul",
      "Edgar Erdfelder",
      "Albert-Georg Lang",
      "Axel Buchner"
    ],
    "publication_year": 2007,
    "journal": "Behavior Research Methods",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.3758/bf03193146",
    "cited_by_count": 63670,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2135943618",
    "title": "Mind in Society: The Development of Higher Psychological Processes",
    "authors": [
      "L. S. Vygotsky"
    ],
    "publication_year": 1978,
    "journal": "Medical Entomology and Zoology",
    "abstract": "Introduction Michael Cole and Sylvia Scribner Biographical Note on L. S. Vygotsky Basic Theory and Data 1. Tool and Symbol in Child Development 2. The Development of Perception and Attention 3. Mastery of Memory and Thinking 4. Internalization of Higher Psychological Functions 5. Problems of Method Educational Implications 6. Interaction between Learning and Development 7. The Role of Play in Development 8. The Prehistory of Written Language Afterword Vera John-Steiner and Ellen Souberman Not...",
    "doi": null,
    "cited_by_count": 53865,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2166281097",
    "title": "The Hospital Anxiety and Depression Scale",
    "authors": [
      "A. S. Zigmond",
      "R. P. Snaith"
    ],
    "publication_year": 1983,
    "journal": "Acta Psychiatrica Scandinavica",
    "abstract": "A self-assessment scale has been developed and found to be a reliable instrument for detecting states of depression and anxiety in the setting of an hospital medical outpatient clinic. The anxiety and depressive subscales are also valid measures of severity of the emotional disorder. It is suggested that the introduction of the scales into general hospital practice would facilitate the large task of detection and management of emotional disorder in patients under investigation and treatment i...",
    "doi": "https://doi.org/10.1111/j.1600-0447.1983.tb09716.x",
    "cited_by_count": 46509,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2132322340",
    "title": "The PHQ-9",
    "authors": [
      "Kurt Kroenke",
      "Robert L. Spitzer",
      "Janet B. W. Williams"
    ],
    "publication_year": 2001,
    "journal": "Journal of General Internal Medicine",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1046/j.1525-1497.2001.016009606.x",
    "cited_by_count": 43875,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W1562208008",
    "title": "Self-Efficacy: The Exercise of Control",
    "authors": [
      "Albert Bandura",
      "Wendy Freeman",
      "Richard Lightsey"
    ],
    "publication_year": 1999,
    "journal": "Journal of Cognitive Psychotherapy",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1891/0889-8391.13.2.158",
    "cited_by_count": 40868,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2067495470",
    "title": "An Inventory for Measuring Depression",
    "authors": [
      "Aaron T. Beck"
    ],
    "publication_year": 1961,
    "journal": "Archives of General Psychiatry",
    "abstract": "The difficulties inherent in obtaining consistent and adequate diagnoses for the purposes of research and therapy have been pointed out by a number of authors. Pasamanick<sup>12</sup>in a recent article viewed the low interclinician agreement on diagnosis as an indictment of the present state of psychiatry and called for \"the development of objective, measurable and verifiable criteria of classification based not on personal or parochial considerations, but on behavioral and other objectively...",
    "doi": "https://doi.org/10.1001/archpsyc.1961.01710120031004",
    "cited_by_count": 38110,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2037124948",
    "title": "Statistical Power Analysis for the Behavioral Sciences (2nd ed.).",
    "authors": [
      "Peter A. Lachenbruch",
      "Jacob Cohen"
    ],
    "publication_year": 1989,
    "journal": "Journal of the American Statistical Association",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.2307/2290095",
    "cited_by_count": 37572,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2134049139",
    "title": "Self-efficacy: Toward a unifying theory of behavioral change.",
    "authors": [
      "Albert Bandura"
    ],
    "publication_year": 1977,
    "journal": "Psychological Review",
    "abstract": "The present article presents an integrative theoretical framework to explain and to predict psychological changes achieved by different modes of treatment. This theory states that psychological procedures, whatever their form, alter the level and strength of self-efficacy. It is hypothesized that expectations of personal efficacy determine whether coping behavior will be initiated, how much effort will be expended, and how long it will be sustained in the face of obstacles and aversive experi...",
    "doi": "https://doi.org/10.1037//0033-295x.84.2.191",
    "cited_by_count": 35529,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2002664886",
    "title": "Nonparametric Statistics for the Behavioral Sciences",
    "authors": [
      "Henri Guitton",
      "Sidney Siegel"
    ],
    "publication_year": 1958,
    "journal": "Revue économique",
    "abstract": "This is the revision of the classic text in the field, adding two new chapters and thoroughly updating all others. The original structure is retained, and the book continues to serve as a combined text/reference.",
    "doi": "https://doi.org/10.2307/3498751",
    "cited_by_count": 35502,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W1714723801",
    "title": "Research Design: Qualitative, Quantitative, and Mixed Methods Approaches",
    "authors": [
      "John W. Creswell"
    ],
    "publication_year": 1994,
    "journal": "Unknown Journal",
    "abstract": "4e édition",
    "doi": null,
    "cited_by_count": 35407,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2151487996",
    "title": "The Pittsburgh sleep quality index: A new instrument for psychiatric practice and research",
    "authors": [
      "Daniel J. Buysse",
      "Charles F. Reynolds",
      "T. H. Monk",
      "Susan Berman",
      "D J Kupfer"
    ],
    "publication_year": 1989,
    "journal": "Psychiatry Research",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0165-1781(89)90047-4",
    "cited_by_count": 34502,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W4242883546",
    "title": "Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being.",
    "authors": [
      "Richard M. Ryan",
      "Edward L. Deci"
    ],
    "publication_year": 2000,
    "journal": "American Psychologist",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1037/0003-066x.55.1.68",
    "cited_by_count": 34260,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2170644967",
    "title": "Experiential Learning : Experience as the Source of Learning and Development",
    "authors": [
      "David Kolb"
    ],
    "publication_year": 1983,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": null,
    "cited_by_count": 33438,
    "category": "psychology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2114613490",
    "title": "A RATING SCALE FOR DEPRESSION",
    "authors": [
      "M. Hamilton"
    ],
    "publication_year": 1960,
    "journal": "Journal of Neurology Neurosurgery & Psychiatry",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1136/jnnp.23.1.56",
    "cited_by_count": 32577,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2038702827",
    "title": "Asymptotic and resampling strategies for assessing and comparing indirect effects in multiple mediator models",
    "authors": [
      "Kristopher J. Preacher",
      "Andrew F. Hayes"
    ],
    "publication_year": 2008,
    "journal": "Behavior Research Methods",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.3758/brm.40.3.879",
    "cited_by_count": 32521,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2212401464",
    "title": "Stress, appraisal, and coping",
    "authors": [
      "H.J. Eysenck"
    ],
    "publication_year": 1985,
    "journal": "Behaviour Research and Therapy",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0005-7967(85)90087-7",
    "cited_by_count": 32342,
    "category": "psychology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W4292994367",
    "title": "Development and validation of brief measures of positive and negative affect: The PANAS scales.",
    "authors": [
      "David Watson",
      "Lee Anna Clark",
      "Auke Tellegen"
    ],
    "publication_year": 1988,
    "journal": "Journal of Personality and Social Psychology",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1037/0022-3514.54.6.1063",
    "cited_by_count": 32012,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2122517769",
    "title": "The \"What\" and \"Why\" of Goal Pursuits: Human Needs and the Self-Determination of Behavior",
    "authors": [
      "Edward L. Deci",
      "Richard M. Ryan"
    ],
    "publication_year": 2000,
    "journal": "Psychological Inquiry",
    "abstract": "Abstract Self-determination theory (SDT) maintains that an understanding of human motivation requires a consideration of innate psychological needs for competence, autonomy, and relatedness. We discuss the SDT concept of needs as it relates to previous need theories, emphasizing that needs specify the necessary conditions for psychological growth, integrity, and well-being. This concept of needs leads to the hypotheses that different regulatory processes underlying goal pursuits are different...",
    "doi": "https://doi.org/10.1207/s15327965pli1104_01",
    "cited_by_count": 31837,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2148905283",
    "title": "Development and validation of brief measures of positive and negative affect: The PANAS scales.",
    "authors": [
      "David Watson",
      "Lee A. Clark",
      "Auke Tellegen"
    ],
    "publication_year": 1988,
    "journal": "Journal of Personality and Social Psychology",
    "abstract": "In recent studies of the structure of affect, positive and negative affect have consistently emerged as two dominant and relatively independent dimensions. A number of mood scales have been created to measure these factors; however, many existing measures are inadequate, showing low reliability or poor convergent or discriminant validity. To fill the need for reliable and valid Positive Affect and Negative Affect scales that are also brief and easy to administer, we developed two 10-item mood...",
    "doi": "https://doi.org/10.1037//0022-3514.54.6.1063",
    "cited_by_count": 31658,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2043705607",
    "title": "A Brief Measure for Assessing Generalized Anxiety Disorder",
    "authors": [
      "Robert L. Spitzer",
      "Kurt Kroenke",
      "Janet B. W. Williams",
      "Bernd Löwe"
    ],
    "publication_year": 2006,
    "journal": "Archives of Internal Medicine",
    "abstract": "<h3>Background</h3> Generalized anxiety disorder (GAD) is one of the most common mental disorders; however, there is no brief clinical measure for assessing GAD. The objective of this study was to develop a brief self-report scale to identify probable cases of GAD and evaluate its reliability and validity. <h3>Methods</h3> A criterion-standard study was performed in 15 primary care clinics in the United States from November 2004 through June 2005. Of a total of 2740 adult patients completing ...",
    "doi": "https://doi.org/10.1001/archinte.166.10.1092",
    "cited_by_count": 31178,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W1530155851",
    "title": "Stress: Appraisal and Coping",
    "authors": [
      "Susan Folkman"
    ],
    "publication_year": 2013,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-1-4419-1005-9_215",
    "cited_by_count": 27790,
    "category": "psychology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2141846678",
    "title": "Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being.",
    "authors": [
      "Richard M. Ryan",
      "Edward L. Deci"
    ],
    "publication_year": 2000,
    "journal": "American Psychologist",
    "abstract": "Human beings can be proactive and engaged or, alternatively, passive and alienated, largely as a function of the social conditions in which they develop and function. Accordingly, research guided by self-determination theory has focused on the social-contextual conditions that facilitate versus forestall the natural processes of self-motivation and healthy psychological development. Specifically, factors have been examined that enhance versus undermine intrinsic motivation, self-regulation, a...",
    "doi": "https://doi.org/10.1037//0003-066x.55.1.68",
    "cited_by_count": 27503,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2052729098",
    "title": "Intrinsic Motivation and Self-Determination in Human Behavior",
    "authors": [
      "Edward L. Deci",
      "Richard M. Ryan"
    ],
    "publication_year": 1985,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-1-4899-2271-7",
    "cited_by_count": 25829,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W1607171655",
    "title": "Manual for the State-Trait Anxiety Inventory",
    "authors": [
      "Charles D. Spielberger",
      "Richard L. Gorsuch",
      "Robert E. Lushene"
    ],
    "publication_year": 1970,
    "journal": "Unknown Journal",
    "abstract": "The STAI serves as an indicator of two types of anxiety, the state and trait anxiety, and measure the severity of the overall anxiety level.The STAI, which is appropriate for those who have at least a sixth grade reading level, contains four-point Likert items. The instrument is divided into two sections, each having twenty questions. Approximately 15 minutes are required for adults to complete the both STAI. The number on the scale is positively correlated to the anxiety related to in the qu...",
    "doi": null,
    "cited_by_count": 25355,
    "category": "psychology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1913957972",
    "title": "<b>lavaan</b>: An<i>R</i>Package for Structural Equation Modeling",
    "authors": [
      "Yves Rosseel"
    ],
    "publication_year": 2012,
    "journal": "Journal of Statistical Software",
    "abstract": "Structural equation modeling (SEM) is a vast field and widely used by many applied researchers in the social and behavioral sciences. Over the years, many software packages for structural equation modeling have been developed, both free and commercial. However, perhaps the best state-of-the-art software packages in this field are still closed-source and/or commercial. The R package lavaan has been developed to provide applied researchers, teachers, and statisticians, a free, fully open-source...",
    "doi": "https://doi.org/10.18637/jss.v048.i02",
    "cited_by_count": 25174,
    "category": "psychology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W2110065044",
    "title": "Controlling the False Discovery Rate: A Practical and Powerful Approach to Multiple Testing",
    "authors": [
      "Yoav Benjamini",
      "Yosef Hochberg"
    ],
    "publication_year": 1995,
    "journal": "Journal of the Royal Statistical Society Series B (Statistical Methodology)",
    "abstract": "SUMMARY The common approach to the multiplicity problem calls for controlling the familywise error rate (FWER). This approach, though, has faults, and we point out a few. A different approach to problems of multiple significance testing is presented. It calls for controlling the expected proportion of falsely rejected hypotheses — the false discovery rate. This error rate is equivalent to the FWER when all hypotheses are true but is smaller otherwise. Therefore, in problems where the control ...",
    "doi": "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x",
    "cited_by_count": 108214,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1484864026",
    "title": "Using multivariate statistics",
    "authors": [
      "Barbara G. Tabachnick",
      "Linda S. Fidell"
    ],
    "publication_year": 1983,
    "journal": "Unknown Journal",
    "abstract": "In this Section: 1. Brief Table of Contents 2. Full Table of Contents 1. BRIEF TABLE OF CONTENTS Chapter 1 Introduction Chapter 2 A Guide to Statistical Techniques: Using the Book Chapter 3 Review of Univariate and Bivariate Statistics Chapter 4 Cleaning Up Your Act: Screening Data Prior to Analysis Chapter 5 Multiple Regression Chapter 6 Analysis of Covariance Chapter 7 Multivariate Analysis of Variance and Covariance Chapter 8 Profile Analysis: The Multivariate Approach to Repeated Measures...",
    "doi": null,
    "cited_by_count": 77490,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2135046866",
    "title": "Regression Shrinkage and Selection Via the Lasso",
    "authors": [
      "Robert Tibshirani"
    ],
    "publication_year": 1996,
    "journal": "Journal of the Royal Statistical Society Series B (Statistical Methodology)",
    "abstract": "SUMMARY We propose a new method for estimation in linear models. The ‘lasso’ minimizes the residual sum of squares subject to the sum of the absolute value of the coefficients being less than a constant. Because of the nature of this constraint it tends to produce some coefficients that are exactly 0 and hence gives interpretable models. Our simulation studies suggest that the lasso enjoys some of the favourable properties of both subset selection and ridge regression. It produces interpretab...",
    "doi": "https://doi.org/10.1111/j.2517-6161.1996.tb02080.x",
    "cited_by_count": 51611,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1979300931",
    "title": "Nonparametric Estimation from Incomplete Observations",
    "authors": [
      "Edward L. Kaplan",
      "Paul Meier"
    ],
    "publication_year": 1992,
    "journal": "Springer series in statistics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-1-4612-4380-9_25",
    "cited_by_count": 45545,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2120062331",
    "title": "Handbook of Mathematical Functions",
    "authors": [
      "Donald A. McQuarrie"
    ],
    "publication_year": 1966,
    "journal": "American Journal of Physics",
    "abstract": "First Page",
    "doi": "https://doi.org/10.1119/1.1972842",
    "cited_by_count": 40904,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1995945562",
    "title": "An Introduction to the Bootstrap",
    "authors": [
      "Bradley Efron",
      "Robert Tibshirani"
    ],
    "publication_year": 1994,
    "journal": "Unknown Journal",
    "abstract": "An Introduction to the Bootstrap arms scientists and engineers as well as statisticians with the computational techniques they need to analyze and understand complicated data sets. The bootstrap is a computer-based method of statistical inference that answers statistical questions without formulas and gives a direct appreciation of variance, bias, coverage, and other probabilistic phenomena. This book presents an overview of the bootstrap and related methods for assessing statistical accuracy...",
    "doi": "https://doi.org/10.1201/9780429246593",
    "cited_by_count": 39692,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W4293241248",
    "title": "Nonparametric Estimation from Incomplete Observations",
    "authors": [
      "Edward L. Kaplan",
      "Paul Meier"
    ],
    "publication_year": 1958,
    "journal": "Journal of the American Statistical Association",
    "abstract": "Abstract In lifetesting, medical follow-up, and other fields the observation of the time of occurrence of the event of interest (called a death) may be prevented for some of the items of the sample by the previous occurrence of some other event (called a loss). Losses may be either accidental or controlled, the latter resulting from a decision to terminate certain observations. In either case it is usually assumed in this paper that the lifetime (age at death) is independent of the potential ...",
    "doi": "https://doi.org/10.1080/01621459.1958.10501452",
    "cited_by_count": 39005,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2797247465",
    "title": "Multiple regression: testing and interpreting interactions",
    "authors": [],
    "publication_year": 1992,
    "journal": "Choice Reviews Online",
    "abstract": "Introduction Interactions between Continuous Predictors in Multiple Regression The Effects of Predictor Scaling on Coefficients of Regression Equations Testing and Probing Three-Way Interactions Structuring Regression Equations to Reflect Higher Order Relationships Model and Effect Testing with Higher Order Terms Interactions between Categorical and Continuous Variables Reliability and Statistical Power Conclusion Some Contrasts Between ANOVA and MR in Practice",
    "doi": "https://doi.org/10.5860/choice.29-3352",
    "cited_by_count": 37154,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W3015634246",
    "title": "Multivariate Data Analysis.",
    "authors": [
      "H. Herne",
      "William W. Cooley",
      "Paul R. Lohnes"
    ],
    "publication_year": 1973,
    "journal": "Journal of the Royal Statistical Society Series A (General)",
    "abstract": "Offers an applications-oriented approach to multivariate data analysis, focusing on the use of each technique, rather than its mathematical derivation. The text introduces a six-step framework for organizing and discussing techniques with flowcharts for each.\n\nWell-suited for the non-statistician, this applications-oriented introduction to multivariate analysis focuses on the fundamental concepts that affect the use of specific techniques rather than the mathematical derivation of the techniq...",
    "doi": "https://doi.org/10.2307/2344428",
    "cited_by_count": 35855,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2072500831",
    "title": "Statistical power analyses using G*Power 3.1: Tests for correlation and regression analyses",
    "authors": [
      "Franz Faul",
      "Edgar Erdfelder",
      "Axel Buchner",
      "Albert-Georg Lang"
    ],
    "publication_year": 2009,
    "journal": "Behavior Research Methods",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.3758/brm.41.4.1149",
    "cited_by_count": 35724,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1973948212",
    "title": "Applied logistic regression",
    "authors": [
      "Hosmer, David W. 1944-",
      "Lemeshow, Stanley 1948-",
      "Sturdivant, Rodney X."
    ],
    "publication_year": 1990,
    "journal": "Choice Reviews Online",
    "abstract": "A new edition of the definitive guide to logistic regression modeling for health science and other applications This thoroughly expanded Third Edition provides an easily accessible introduction to the logistic regression (LR) model and highlights the power of this model by examining the relationship between a dichotomous outcome and a set of covariables. Applied Logistic Regression, Third Edition emphasizes applications in the health sciences and handpicks topics that best suit the use of mod...",
    "doi": "https://doi.org/10.5860/choice.27-3338",
    "cited_by_count": 35656,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2296319761",
    "title": "Convex Optimization",
    "authors": [
      "Stephen Boyd",
      "Lieven Vandenberghe"
    ],
    "publication_year": 2004,
    "journal": "Cambridge University Press eBooks",
    "abstract": "Convex optimization problems arise frequently in many different fields. This book provides a comprehensive introduction to the subject, and shows in detail how such problems can be solved numerically with great efficiency. The book begins with the basic elements of convex sets and functions, and then describes various classes of convex optimization problems. Duality and approximation techniques are then covered, as are statistical estimation techniques. Various geometrical problems are then p...",
    "doi": "https://doi.org/10.1017/cbo9780511804441",
    "cited_by_count": 31263,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2150291618",
    "title": "The central role of the propensity score in observational studies for causal effects",
    "authors": [
      "Paul R. Rosenbaum",
      "Donald B. Rubin"
    ],
    "publication_year": 1983,
    "journal": "Biometrika",
    "abstract": "The propensity score is the conditional probability of assignment to a particular treatment given a vector of observed covariates. Both large and small sample theory show that adjustment for the scalar propensity score is sufficient to remove bias due to all observed covariates. Applications include: (i) matched sampling on the univariate propensity score, which is a generalization of discriminant matching, (ii) multivariate adjustment by subclassification on the propensity score where the sa...",
    "doi": "https://doi.org/10.1093/biomet/70.1.41",
    "cited_by_count": 30844,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2171074980",
    "title": "A Simplex Method for Function Minimization",
    "authors": [
      "J. A. Nelder",
      "R. Mead"
    ],
    "publication_year": 1965,
    "journal": "The Computer Journal",
    "abstract": "A method is described for the minimization of a function of n variables, which depends on the comparison of function values at the (n + 1) vertices of a general simplex, followed by the replacement of the vertex with the highest value by another point. The simplex adapts itself to the local landscape, and contracts on to the final minimum. The method is shown to be effective and computationally compact. A procedure is given for the estimation of the Hessian matrix in the neighbourhood of the ...",
    "doi": "https://doi.org/10.1093/comjnl/7.4.308",
    "cited_by_count": 28817,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1595159159",
    "title": "Differential Evolution – A Simple and Efficient Heuristic for global Optimization over Continuous Spaces",
    "authors": [
      "Rainer Storn",
      "Kenneth V. Price"
    ],
    "publication_year": 1997,
    "journal": "Journal of Global Optimization",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1023/a:1008202821328",
    "cited_by_count": 28582,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W4292157289",
    "title": "Judgment under Uncertainty: Heuristics and Biases",
    "authors": [
      "Amos Tversky",
      "Daniel Kahneman"
    ],
    "publication_year": 1974,
    "journal": "Science",
    "abstract": "This article described three heuristics that are employed in making judgments under uncertainty: (i) representativeness, which is usually employed when people are asked to judge the probability that an object or event A belongs to class or process B; (ii) availability of instances or scenarios, which is often employed when people are asked to assess the frequency of a class or the plausibility of a particular development; and (iii) adjustment from an anchor, which is usually employed in numer...",
    "doi": "https://doi.org/10.1126/science.185.4157.1124",
    "cited_by_count": 27923,
    "category": "math",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2108818539",
    "title": "A Heteroskedasticity-Consistent Covariance Matrix Estimator and a Direct Test for Heteroskedasticity",
    "authors": [
      "Halbert White"
    ],
    "publication_year": 1980,
    "journal": "Econometrica",
    "abstract": "This paper presents a parameter covariance matrix estimator which is consistent even when the disturbances of a linear regression model are heteroskedastic. This estimator does not depend on a formal model of the structure of the heteroskedasticity. By comparing the elements of the new estimator to those of the usual covariance estimator, one obtains a direct test for heteroskedasticity, since in the absence of heteroskedasticity, the two estimators will be approximately equal, but will gener...",
    "doi": "https://doi.org/10.2307/1912934",
    "cited_by_count": 26095,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1992193527",
    "title": "Alternative Ways of Assessing Model Fit",
    "authors": [
      "Michael W. Browne",
      "Robert Cudeck"
    ],
    "publication_year": 1992,
    "journal": "Sociological Methods & Research",
    "abstract": "This article is concerned with measures of fit of a model. Two types of error involved in fitting a model are considered. The first is error of approximation which involves the fit of the model, with optimally chosen but unknown parameter values, to the population covariance matrix. The second is overall error which involves the fit of the model, with parameter values estimated from the sample, to the population covariance matrix. Measures of the two types of error are proposed and point and ...",
    "doi": "https://doi.org/10.1177/0049124192021002005",
    "cited_by_count": 25128,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1480376833",
    "title": "The Elements of Statistical Learning",
    "authors": [
      "Trevor Hastie",
      "J. Friedman",
      "Robert Tibshirani"
    ],
    "publication_year": 2001,
    "journal": "Springer series in statistics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-0-387-21606-5",
    "cited_by_count": 24336,
    "category": "math",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1513618424",
    "title": "Modern Applied Statistics with S",
    "authors": [
      "W. N. Venables",
      "B. D. Ripley"
    ],
    "publication_year": 2002,
    "journal": "Statisctics and computing/Statistics and computing",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-0-387-21706-2",
    "cited_by_count": 24261,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2018201949",
    "title": "Comparative fit indexes in structural models.",
    "authors": [
      "Peter M. Bentler"
    ],
    "publication_year": 1990,
    "journal": "Psychological Bulletin",
    "abstract": "Normed and nonnormed fit indexes are frequently used as adjuncts to chi-square statistics for evaluating the fit of a structural model. A drawback of existing indexes is that they estimate no known population parameters. A new coefficient is proposed to summarize the relative reduction in the noncentrality parameters of two nested models. Two estimators of the coefficient yield new normed (CFI) and nonnormed (FI) fit indexes. CFI avoids the underestimation of fit often noted in small samples ...",
    "doi": "https://doi.org/10.1037/0033-2909.107.2.238",
    "cited_by_count": 23866,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2774486220",
    "title": "<b>lmerTest</b> Package: Tests in Linear Mixed Effects Models",
    "authors": [
      "Alexandra Kuznetsova",
      "Per B. Brockhoff",
      "Rune Haubo Bojesen Christensen"
    ],
    "publication_year": 2017,
    "journal": "Journal of Statistical Software",
    "abstract": "One of the frequent questions by users of the mixed model function lmer of the lme4 package has been: How can I get p values for the F and t tests for objects returned by lmer? The lmerTest package extends the 'lmerMod' class of the lme4 package, by overloading the anova and summary functions by providing p values for tests for fixed effects. We have implemented the Satterthwaite's method for approximating degrees of freedom for the t and F tests. We have also implemented the construction of ...",
    "doi": "https://doi.org/10.18637/jss.v082.i13",
    "cited_by_count": 23211,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2787894218",
    "title": "The Elements of Statistical Learning",
    "authors": [
      "Trevor Hastie",
      "Robert Tibshirani",
      "Jerome H. Friedman"
    ],
    "publication_year": 2009,
    "journal": "Springer series in statistics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-0-387-84858-7",
    "cited_by_count": 23184,
    "category": "math",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W158727920",
    "title": "Judgment under Uncertainty: Heuristics and Biases",
    "authors": [
      "Amos Tversky",
      "Daniel Kahneman"
    ],
    "publication_year": 1975,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-94-010-1834-0_8",
    "cited_by_count": 23086,
    "category": "math",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2127218421",
    "title": "Some methods for classification and analysis of multivariate observations",
    "authors": [
      "James B. MacQueen"
    ],
    "publication_year": 1967,
    "journal": "Defense Technical Information Center (DTIC)",
    "abstract": "The main purpose of this paper is to describe a process for partitioning an N-dimensional population into k sets on the basis of a sample. The process, which is called &amp;apos;k-means, &amp;apos; appears to give partitions which are reasonably",
    "doi": null,
    "cited_by_count": 22826,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2328176404",
    "title": "Comparing the Areas under Two or More Correlated Receiver Operating Characteristic Curves: A Nonparametric Approach",
    "authors": [
      "Elizabeth R. DeLong",
      "David M. DeLong",
      "Daniel L. Clarke‐Pearson"
    ],
    "publication_year": 1988,
    "journal": "Biometrics",
    "abstract": "Methods of evaluating and comparing the performance of diagnostic tests are of increasing importance as new tests are developed and marketed. When a test is based on an observed variable that lies on a continuous or graded scale, an assessment of the overall value of the test can be made through the use of a receiver operating characteristic (ROC) curve. The curve is constructed by varying the cutpoint used to determine which values of the observed variable will be considered abnormal and the...",
    "doi": "https://doi.org/10.2307/2531595",
    "cited_by_count": 22210,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1992897439",
    "title": "Principles and procedures of statistics.",
    "authors": [
      "R. G. D. Steel",
      "J. H. Torrie"
    ],
    "publication_year": 1960,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": null,
    "cited_by_count": 22208,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W1663973292",
    "title": "Pattern Recognition and Machine Learning",
    "authors": [
      "Nasser M. Nasrabadi"
    ],
    "publication_year": 2007,
    "journal": "Journal of Electronic Imaging",
    "abstract": "The <i>Journal of Electronic Imaging</i> (JEI), copublished bimonthly with the Society for Imaging Science and Technology, publishes peer-reviewed papers that cover research and applications in all areas of electronic imaging science and technology.",
    "doi": "https://doi.org/10.1117/1.2819119",
    "cited_by_count": 22082,
    "category": "math",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2121044470",
    "title": "A Simple Sequentially Rejective Multiple Test Procedure",
    "authors": [
      "Sture Holm"
    ],
    "publication_year": 1979,
    "journal": "Scandinavian Journal of Statistics",
    "abstract": "This paper presents a simple and widely ap- plicable multiple test procedure of the sequentially rejective type, i.e. hypotheses are rejected one at a tine until no further rejections can be done. It is shown that the test has a prescribed level of significance protection against error of the first kind for any combination of true hypotheses. The power properties of the test and a number of possible applications are also discussed.",
    "doi": "https://doi.org/10.2307/4615733",
    "cited_by_count": 21819,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W2159401492",
    "title": "Applied Multiple Regression/Correlation Analysis for the Behavioral Sciences",
    "authors": [
      "Patricia Cohen",
      "Patricia Cohen",
      "Stephen G. West",
      "Leona S. Aiken"
    ],
    "publication_year": 2014,
    "journal": "Psychology Press eBooks",
    "abstract": "This classic text on multiple regression is noted for its nonmathematical, applied, and data-analytic approach. Readers profit from its verbal-conceptual exposition and frequent use of examples. The applied emphasis provides clear illustrations of the principles and provides worked examples of the types of applications that are possible. Researchers learn how to specify regression models that directly address their research questions. An overview of the fundamental ideas of multiple regressio...",
    "doi": "https://doi.org/10.4324/9781410606266",
    "cited_by_count": 20879,
    "category": "math",
    "reflection_question": "Does the mathematical beauty and order of this structure suggest a deeper, fundamental harmony in the natural world?"
  },
  {
    "id": "W4292811746",
    "title": "The moderator–mediator variable distinction in social psychological research: Conceptual, strategic, and statistical considerations.",
    "authors": [
      "Reuben M. Baron",
      "David A. Kenny"
    ],
    "publication_year": 1986,
    "journal": "Journal of Personality and Social Psychology",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1037/0022-3514.51.6.1173",
    "cited_by_count": 70462,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2329395632",
    "title": "The Discovery of Grounded Theory: Strategies for Qualitative Research.",
    "authors": [
      "Helmut R. Wagner",
      "Barney G. Glaser",
      "Anselm L. Strauss"
    ],
    "publication_year": 1968,
    "journal": "Social Forces",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.2307/2575405",
    "cited_by_count": 46619,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W1556808170",
    "title": "Qualitative Data Analysis: An Expanded Sourcebook",
    "authors": [],
    "publication_year": 1994,
    "journal": "Journal of Environmental Psychology",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/s0272-4944(05)80231-2",
    "cited_by_count": 45614,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2142225512",
    "title": "Three Approaches to Qualitative Content Analysis",
    "authors": [
      "Hsiu-Fang Hsieh",
      "Sarah E. Shannon"
    ],
    "publication_year": 2005,
    "journal": "Qualitative Health Research",
    "abstract": "Content analysis is a widely used qualitative research technique. Rather than being a single method, current applications of content analysis show three distinct approaches: conventional, directed, or summative. All three approaches are used to interpret meaning from the content of text data and, hence, adhere to the naturalistic paradigm. The major differences among the approaches are coding schemes, origins of codes, and threats to trustworthiness. In conventional content analysis, coding c...",
    "doi": "https://doi.org/10.1177/1049732305276687",
    "cited_by_count": 43783,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2006479099",
    "title": "Case Study Research: Design and Methods",
    "authors": [
      "Harris Chaiklin"
    ],
    "publication_year": 1991,
    "journal": "The Journal of Nervous and Mental Disease",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1097/00005053-199102000-00025",
    "cited_by_count": 39927,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2116199508",
    "title": "Situated Learning: Legitimate Peripheral Participation.",
    "authors": [
      "Maurice Bloch",
      "Jean Lave",
      "Étienne Wenger"
    ],
    "publication_year": 1994,
    "journal": "Man",
    "abstract": "In this important theoretical treatist, Jean Lave, anthropologist, and Etienne Wenger, computer scientist, push forward the notion of situated learning - that learning is fundamentally a social process. The authors maintain that learning viewed as situated activity has as its central defining characteristic a process they call legitimate peripheral participation (LPP). Learners participate in communities of practitioners, moving toward full participation in the sociocultural practices of a co...",
    "doi": "https://doi.org/10.2307/2804509",
    "cited_by_count": 39797,
    "category": "sociology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2891378911",
    "title": "PRISMA Extension for Scoping Reviews (PRISMA-ScR): Checklist and Explanation",
    "authors": [
      "Andrea C. Tricco",
      "Erin Lillie",
      "Wasifa Zarin",
      "Kelly K. O’Brien",
      "Heather Colquhoun"
    ],
    "publication_year": 2018,
    "journal": "Annals of Internal Medicine",
    "abstract": "Scoping reviews, a type of knowledge synthesis, follow a systematic approach to map evidence on a topic and identify main concepts, theories, sources, and knowledge gaps. Although more scoping reviews are being done, their methodological and reporting quality need improvement. This document presents the PRISMA-ScR (Preferred Reporting Items for Systematic reviews and Meta-Analyses extension for Scoping Reviews) checklist and explanation. The checklist was developed by a 24-member expert panel...",
    "doi": "https://doi.org/10.7326/m18-0850",
    "cited_by_count": 39790,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W3147894994",
    "title": "Regression Models and Life-Tables",
    "authors": [
      "D. R. Cox"
    ],
    "publication_year": 1972,
    "journal": "Journal of the Royal Statistical Society Series B (Statistical Methodology)",
    "abstract": "Summary The analysis of censored failure times is considered. It is assumed that on each individual are available values of one or more explanatory variables. The hazard function (age-specific failure rate) is taken to be a function of the explanatory variables and unknown regression coefficients multiplied by an arbitrary and unknown function of time. A conditional likelihood is obtained, leading to inferences about the unknown regression coefficients. Some generalizations are outlined.",
    "doi": "https://doi.org/10.1111/j.2517-6161.1972.tb00899.x",
    "cited_by_count": 39187,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2146691185",
    "title": "The Discovery of Grounded Theory; Strategies for Qualitative Research",
    "authors": [
      "Barney G. Glaser",
      "Anselm L. Strauss",
      "Elizabeth Strutzel"
    ],
    "publication_year": 1968,
    "journal": "Nursing Research",
    "abstract": "Most writing on sociological method has been concerned with how accurate facts can be obtained and how theory can thereby be more rigorously tested. In The Discovery of Grounded Barney Glaser and Anselm Strauss address the equally Important enterprise of how the discovery of theory from data--systematically obtained and analyzed in social research--can be furthered. The discovery of theory from data--grounded theory--is a major task confronting sociology, for such a theory fits empirical situ...",
    "doi": "https://doi.org/10.1097/00006199-196807000-00014",
    "cited_by_count": 38985,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W1658908529",
    "title": "Basics of qualitative research : techniques and procedures for developing grounded theory",
    "authors": [
      "Anselm L. Strauss",
      "Juliet Corbin"
    ],
    "publication_year": 1998,
    "journal": "Sage eBooks",
    "abstract": "Part I: Introduction to Grounded Theory of Anselm Strauss Chapter 1: Inspiration and Background Chapter 2: Theoretical Foundations Chapter 3: Practical Considerations for Getting Started Chapter 4: Prelude to Analysis Chapter 5: Strategies for Qualitative Data Analysis Chapter 6: Memos and Diagrams Chapter 7: Theoretical Sampling Chapter 8: Context Chapter 9: Process Chapter 10: Techniques for Achieving Theoretical Integration Chapter 11: The Use of Computer Programs in Qualitative Data Analy...",
    "doi": null,
    "cited_by_count": 38914,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W115394847",
    "title": "Qualitative research and evaluation methods",
    "authors": [
      "Michael Quinn Patton"
    ],
    "publication_year": 1980,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": null,
    "cited_by_count": 35368,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2037377025",
    "title": "The MOS 36-item short-form health survey (SF-36). I. Conceptual framework and item selection.",
    "authors": [
      "John E. Ware",
      "Cathy D. Sherbourne"
    ],
    "publication_year": 1992,
    "journal": "PubMed",
    "abstract": "A 36-item short-form (SF-36) was constructed to survey health status in the Medical Outcomes Study. The SF-36 was designed for use in clinical practice and research, health policy evaluations, and general population surveys. The SF-36 includes one multi-item scale that assesses eight health concepts: 1) limitations in physical activities because of health problems; 2) limitations in social activities because of physical or emotional problems; 3) limitations in usual role activities because of...",
    "doi": null,
    "cited_by_count": 33995,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W4245961435",
    "title": "Situated Learning",
    "authors": [
      "Jean Lave",
      "Étienne Wenger"
    ],
    "publication_year": 1991,
    "journal": "Cambridge University Press eBooks",
    "abstract": "In this important theoretical treatist, Jean Lave, anthropologist, and Etienne Wenger, computer scientist, push forward the notion of situated learning - that learning is fundamentally a social process. The authors maintain that learning viewed as situated activity has as its central defining characteristic a process they call legitimate peripheral participation (LPP). Learners participate in communities of practitioners, moving toward full participation in the sociocultural practices of a co...",
    "doi": "https://doi.org/10.1017/cbo9780511815355",
    "cited_by_count": 31892,
    "category": "sociology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2000117884",
    "title": "Basics of Qualitative Research: Grounded Theory Procedures and Techniques.",
    "authors": [
      "Carolyn Ellis",
      "Anselm Strauss",
      "Juliet Corbin"
    ],
    "publication_year": 1992,
    "journal": "Contemporary Sociology A Journal of Reviews",
    "abstract": "Introduction Getting Started Theoretical Sensitivity The Uses of Literature Open Coding Techniques for Enhancing Theoretical Sensitivity Axial Coding Selective Coding Process The Conditional Matrix Theoretical Sampling Memos and Diagrams Writing Theses and Monographs, and Giving Talks about Your Research Criteria for Judging a Grounded Theory Study",
    "doi": "https://doi.org/10.2307/2074814",
    "cited_by_count": 29440,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2155648052",
    "title": "Society and the Adolescent Self-Image",
    "authors": [
      "Morris Rosenberg"
    ],
    "publication_year": 1965,
    "journal": "Princeton University Press eBooks",
    "abstract": "Over 5,000 high-school students of different social, religious, and national backgrounds were studied to show the effects of family experience, neighborhoods, minority groups, etc. on their self-image and response to society. Originally published in 1965. The Princeton Legacy Library uses the latest print-on-demand technology to again make available previously out-of-print books from the distinguished backlist of Princeton University Press. These editions preserve the original texts of these ...",
    "doi": "https://doi.org/10.1515/9781400876136",
    "cited_by_count": 29161,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2147264455",
    "title": "Bowling alone: the collapse and revival of American community",
    "authors": [],
    "publication_year": 2000,
    "journal": "Choice Reviews Online",
    "abstract": "BOWLING ALONE warns Americans that their stock of social capital, the very fabric of their connections with each other, has been accelerating down. Putnam describes the resulting impoverishment of their lives and communities. Drawing on evidence that includes nearly half a million interviews conducted over a quarter of a century in America, Putnam shows how changes in work, family structure, age, suburban life, television, computers, women's roles and other factors are isolating Americans fro...",
    "doi": "https://doi.org/10.5860/choice.38-2454",
    "cited_by_count": 29029,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W1780382453",
    "title": "Communities of practice learning, meaning, and identity",
    "authors": [
      "Étienne Wenger"
    ],
    "publication_year": 1999,
    "journal": "Unknown Journal",
    "abstract": "This book presents a theory of learning that starts with the assumption that engagement in social practice is the fundamental process by which we get to know what we know and by which we become who we are. The primary unit of analysis of this process is neither the individual nor social institutions, but the informal 'communities of practice' that people form as they pursue shared enterprises over time. To give a social account of learning, the theory explores in a systematic way the intersec...",
    "doi": null,
    "cited_by_count": 28557,
    "category": "sociology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2337002970",
    "title": "Mapping the Margins: Intersectionality, Identity Politics, and Violence against Women of Color",
    "authors": [
      "Kimberlé W. Crenshaw"
    ],
    "publication_year": 1991,
    "journal": "Stanford Law Review",
    "abstract": "Over the last two decades, women have organized against the almost routine violence that shapes their lives. Drawing from the strength of shared experience, women have recognized that the political demands of millions speak more powerfully than the pleas of a few isolated voices. This politicization in turn has transformed the way we understand violence against women. For example, battering and rape, once seen as private (family matters) and aberrational (errant sexual aggression), are now la...",
    "doi": "https://doi.org/10.2307/1229039",
    "cited_by_count": 28131,
    "category": "sociology",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2038600245",
    "title": "Gender Trouble: Feminism and the Subversion of Identity",
    "authors": [
      "Mary McIntosh",
      "Judith Butler"
    ],
    "publication_year": 1991,
    "journal": "Feminist Review",
    "abstract": "Preface (1999) Preface (1990) 1. Subjects of Sex/Gender/Desire I. 'Women' as the Subject of Feminism II. The Compulsory Order of Sex/Gender/Desire III. Gender: The Circular Ruins of Contemporary Debate IV. Theorizing the Binary, the Unitary and Beyond V. Identity, Sex and the Metaphysics of Substance VI. Language, Power and the Strategies of Displacement 2. Prohibition, Psychoanalysis, and the Production of the Heterosexual Matrix I. Structuralism's Critical Exchange II. Lacan, Riviere, and t...",
    "doi": "https://doi.org/10.2307/1395391",
    "cited_by_count": 28049,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W4301056702",
    "title": "Outline of a Theory of Practice",
    "authors": [
      "Pierre Bourdıeu"
    ],
    "publication_year": 1977,
    "journal": "Cambridge University Press eBooks",
    "abstract": "Outline of a Theory of Practice is recognized as a major theoretical text on the foundations of anthropology and sociology. Pierre Bourdieu, a distinguished French anthropologist, develops a theory of practice which is simultaneously a critique of the methods and postures of social science and a general account of how human action should be understood. With his central concept of the habitus, the principle which negotiates between objective structures and practices, Bourdieu is able to transc...",
    "doi": "https://doi.org/10.1017/cbo9780511812507",
    "cited_by_count": 26920,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2033952602",
    "title": "Handbook of Qualitative Research",
    "authors": [
      "Gill Crozier",
      "Norman K. Denzin",
      "Yvonna S. Lincoln"
    ],
    "publication_year": 1994,
    "journal": "British Journal of Educational Studies",
    "abstract": "Introduction - Norman K Denzin and Yvonna S Lincoln The Discipline and Practice of Qualitative Research PART ONE: LOCATING THE FIELD Qualitative Methods - Arthur J Vidich and Stanford M Lyman Their History in Sociology and Anthropology Reconstructing the Relationships between Universities and Society through Action Research - Davydd J Greenwood and Morten Levin For Whom? Qualitative Research, Representations and Social Responsibilities - Michelle Fine et al Ethics and Politics in Qualitative ...",
    "doi": "https://doi.org/10.2307/3121684",
    "cited_by_count": 26720,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W1580788756",
    "title": "Regression Models and Life-Tables",
    "authors": [
      "D. R. Cox"
    ],
    "publication_year": 1992,
    "journal": "Springer series in statistics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-1-4612-4380-9_37",
    "cited_by_count": 26654,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W1539265701",
    "title": "Educational Research: Planning, Conducting, and Evaluating Quantitative and Qualitative Research",
    "authors": [
      "John W. Creswell"
    ],
    "publication_year": 2001,
    "journal": "Unknown Journal",
    "abstract": "A practical, step-by-step core research text that balances coverage of qualitative and quantitative methods The clear and practical writing of Educational Research: Planning, Conducting, and Evaluating Quantitative and Qualitative Research has made this book a favorite among instructors and students. In precise, step-by-step language the text helps students learn how to conduct, read, and evaluate research studies. Key updates for the 4th edition include expanded coverage of ethics and new re...",
    "doi": null,
    "cited_by_count": 25679,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W3123534837",
    "title": "Social Capital in the Creation of Human Capital",
    "authors": [
      "James S. Coleman"
    ],
    "publication_year": 1988,
    "journal": "American Journal of Sociology",
    "abstract": "There are two broad intellectual streams in the description and explanation of social action. One, characteristic of the work of most sociologists, sees the actor as socialized and action as governed by social norms, rules, and obligations. The principal virtues of this intellectual stream lie in its ability to describe action in social context and to explain the way action is shaped, constrained, and redirected by the social context. The other intellectual stream, characteristic of the work ...",
    "doi": "https://doi.org/10.1086/228943",
    "cited_by_count": 25329,
    "category": "sociology",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W4213439731",
    "title": "A theory of justice original edition",
    "authors": [
      "John Rawls"
    ],
    "publication_year": 2026,
    "journal": "Unknown Journal",
    "abstract": "John Rawls aims to express an essential part of the common core of the democratic tradition—justice as fairness—and to provide an alternative to utilitarianism, which had dominated the Anglo-Saxon tradition of political thought since the nineteenth century. Rawls substitutes the ideal of the social contract as a more satisfactory account of the basic rights and liberties of citizens as free and equal persons. \"Each person,\" writes Rawls, \"possesses an inviolability founded on justice that eve...",
    "doi": "https://doi.org/10.4159/9780674042605",
    "cited_by_count": 24076,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W1515587369",
    "title": "The Discovery of Grounded Theory",
    "authors": [
      "Barney G. Glaser",
      "Anselm L. Strauss"
    ],
    "publication_year": 2017,
    "journal": "Unknown Journal",
    "abstract": "Most writing on sociological method has been concerned with how accurate facts can be obtained and how theory can thereby be more rigorously tested. In The Discovery of Grounded Theory, Barney Glaser and Anselm Strauss address the equally Important enterprise of how the discovery of theory from data—systematically obtained and analyzed in social research—can be furthered. The discovery of theory from data—grounded theory—is a major task confronting sociology, for such a theory fits empirical ...",
    "doi": "https://doi.org/10.4324/9780203793206",
    "cited_by_count": 23660,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2226396244",
    "title": "The Tragedy of the Commons",
    "authors": [
      "Garrett Hardin"
    ],
    "publication_year": 1968,
    "journal": "Science",
    "abstract": "The population problem has no technical solution; it requires a fundamental extension in morality.",
    "doi": "https://doi.org/10.1126/science.162.3859.1243",
    "cited_by_count": 22872,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W4214907476",
    "title": "Advances In Experimental Social Psychology",
    "authors": [],
    "publication_year": 2022,
    "journal": "Advances in experimental social psychology",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/s0065-2601(22)x0002-6",
    "cited_by_count": 22492,
    "category": "sociology",
    "reflection_question": "In what ways does this insight into the human mind help you recognize and navigate your own internal patterns and biases?"
  },
  {
    "id": "W1597750586",
    "title": "Power/Knowledge: Selected Interviews and Other Writings 1972-1977",
    "authors": [
      "Michel Foucault",
      "Colin Gordon"
    ],
    "publication_year": 1980,
    "journal": "Unknown Journal",
    "abstract": "\"Michel Foucault has become famous for a series of books that have permanently altered our understanding of many institutions of Western society. He analyzed mental institutions in the remarkable Madness and Civilization; hospitals in The Birth of the Clinic; prisons in Discipline and Punish; and schools and families in The History of Sexuality. But the general reader as well as the specialist is apt to miss the consistent purposes that lay behind these difficult individual studies, thus losi...",
    "doi": null,
    "cited_by_count": 22407,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2067404301",
    "title": "The qualitative content analysis process",
    "authors": [
      "Satu Elo",
      "Helvi Kyngäs"
    ],
    "publication_year": 2008,
    "journal": "Journal of Advanced Nursing",
    "abstract": "AIM: This paper is a description of inductive and deductive content analysis. BACKGROUND: Content analysis is a method that may be used with either qualitative or quantitative data and in an inductive or deductive way. Qualitative content analysis is commonly used in nursing studies but little has been published on the analysis process and many research books generally only provide a short description of this method. DISCUSSION: When using content analysis, the aim was to build a model to des...",
    "doi": "https://doi.org/10.1111/j.1365-2648.2007.04569.x",
    "cited_by_count": 22129,
    "category": "sociology",
    "reflection_question": "How do the collective systems and cultural norms we construct influence our individual freedom and identity?"
  },
  {
    "id": "W2752617332",
    "title": "Theory of the firm: Managerial behavior, agency costs and ownership structure",
    "authors": [
      "Michael C. Jensen",
      "William H. Meckling"
    ],
    "publication_year": 1976,
    "journal": "Journal of Financial Economics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0304-405x(76)90026-x",
    "cited_by_count": 70410,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1990513740",
    "title": "Diffusion of Innovations 1",
    "authors": [
      "Everett M. Rogers",
      "Arvind Singhal",
      "Margaret M. Quinlan"
    ],
    "publication_year": 2019,
    "journal": "Unknown Journal",
    "abstract": "This chapter presents a theoretical and methodological approach to the study of communication and its effects through the diffusion of innovation from a communication approach. It demonstrates through the history of diffusion research how diffusion of innovations occurs and how it impacts communication outcomes. Based on rural sociology of the 1930s and 1940s, the impact of communication platforms and an “inside out” approach are introduced as ways to test and evaluate communication change th...",
    "doi": "https://doi.org/10.4324/9780203710753-35",
    "cited_by_count": 37200,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2025610165",
    "title": "Some Tests of Specification for Panel Data: Monte Carlo Evidence and an Application to Employment Equations",
    "authors": [
      "Manuel Arellano",
      "Stephen Bond"
    ],
    "publication_year": 1991,
    "journal": "The Review of Economic Studies",
    "abstract": "This paper presents specification tests that are applicable after estimating a dynamic model from panel data by the generalized method of moments, and studies the practical performance of these procedures using both generated and real data. The authors' generalized method of moments estimator optimally exploits all the linear moment restrictions that follow from the assumption of no serial correlation in the errors in an equation which contains individual effects, lagged dependent variables, ...",
    "doi": "https://doi.org/10.2307/2297968",
    "cited_by_count": 32687,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2110603299",
    "title": "Co-Integration and Error Correction: Representation, Estimation, and Testing",
    "authors": [
      "Robert F. Engle",
      "C. W. J. Granger"
    ],
    "publication_year": 1987,
    "journal": "Econometrica",
    "abstract": "The relationship between co-integration and error correction models, first suggested in Granger (1981), is here extended and used to develop estimation procedures, tests, and empirical examples. If each element of a vector of time series x first achieves stationarity after differencing, but a linear combination a'x is already stationary, the time series x are said to be co-integrated with co-integrating vector a. There may be several such co-integrating vectors so that a becomes a matrix. Int...",
    "doi": "https://doi.org/10.2307/1913236",
    "cited_by_count": 31891,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W4298413470",
    "title": "Institutions, Institutional Change and Economic Performance",
    "authors": [
      "Douglass C. North"
    ],
    "publication_year": 1990,
    "journal": "Cambridge University Press eBooks",
    "abstract": "Continuing his groundbreaking analysis of economic structures, Douglass North develops an analytical framework for explaining the ways in which institutions and institutional change affect the performance of economies, both at a given time and over time. Institutions exist, he argues, due to the uncertainties involved in human interaction; they are the constraints devised to structure that interaction. Yet, institutions vary widely in their consequences for economic performance; some economie...",
    "doi": "https://doi.org/10.1017/cbo9780511808678",
    "cited_by_count": 30709,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2124758339",
    "title": "Econometric Analysis of Cross Section and Panel Data",
    "authors": [
      "Jeffrey M. Wooldridge"
    ],
    "publication_year": 2001,
    "journal": "RePEc: Research Papers in Economics",
    "abstract": "This graduate text provides an intuitive but rigorous treatment of contemporary methods used in microeconometric research. The book makes clear that applied microeconometrics is about the estimation of marginal and treatment effects, and that parametric estimation is simply a means to this end. It also clarifies the distinction between causality and statistical association. The book focuses specifically on cross section and panel data methods. Population assumptions are stated separately from...",
    "doi": null,
    "cited_by_count": 28333,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W3022339544",
    "title": "Economic Action and Social Structure: The Problem of Embeddedness",
    "authors": [
      "Mark Granovetter"
    ],
    "publication_year": 1985,
    "journal": "American Journal of Sociology",
    "abstract": "How behavior and institutions are affected by social relations is one of the classic questions of social theory. This paper concerns the extent to which economic action is embedded in structures of social relations, in modern industrial society. Although the usual neoclasical accounts provide an undersocialized or atomized-actor explanation of such action, reformist economists who attempt to bring social structure back in do so in the way criticized by Dennis Wrong. Under-and oversocialized a...",
    "doi": "https://doi.org/10.1086/228311",
    "cited_by_count": 28150,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1995834279",
    "title": "Common risk factors in the returns on stocks and bonds",
    "authors": [
      "Eugene F. Fama",
      "Kenneth R. French"
    ],
    "publication_year": 1993,
    "journal": "Journal of Financial Economics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0304-405x(93)90023-5",
    "cited_by_count": 27626,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W3121147769",
    "title": "Institutions, Institutional Change and Economic Performance",
    "authors": [
      "Michael C. Munger",
      "Douglass C. North"
    ],
    "publication_year": 1991,
    "journal": "Southern Economic Journal",
    "abstract": "Examines the role that institutions, defined as the humanly devised constraints that shape human interaction, play in economic performance and how those institutions change and how a model of dynamic institutions explains the differential performance of economies through time. Institutions are separate from organizations, which are assemblages of people directed to strategically operating within institutional constraints. Institutions affect the economy by influencing, together with technolog...",
    "doi": "https://doi.org/10.2307/1060065",
    "cited_by_count": 25319,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2070631858",
    "title": "A Contribution to the Theory of Economic Growth",
    "authors": [
      "Robert M. Solow"
    ],
    "publication_year": 1956,
    "journal": "The Quarterly Journal of Economics",
    "abstract": "I. Introduction, 65. — II. A model of long-run growth, 66. — III. Possible growth patterns, 68. — IV. Examples, 73. — V. Behavior of interest and wage rates, 78. — VI. Extensions, 85. — VII. Qualifications, 91.",
    "doi": "https://doi.org/10.2307/1884513",
    "cited_by_count": 23899,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2015930340",
    "title": "The Nature of the Firm",
    "authors": [
      "Ronald H. Coase"
    ],
    "publication_year": 1937,
    "journal": "Economica",
    "abstract": "Economic theory has suffered in the past from a failure to state clearly its assumptions. Economists in building up a theory have often omitted to examine the foundations on which it was erected. This examination is, however, essential not only to prevent the misunderstanding and needless controversy which arise from a lack of knowledge of the assumptions on which a theory is based, but also because of the extreme importance for economics of good judgment in choosing between rival sets of ass...",
    "doi": "https://doi.org/10.1111/j.1468-0335.1937.tb00002.x",
    "cited_by_count": 23378,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1975994995",
    "title": "Distribution of the Estimators for Autoregressive Time Series with a Unit Root",
    "authors": [
      "David A. Dickey",
      "Wayne A. Fuller"
    ],
    "publication_year": 1979,
    "journal": "Journal of the American Statistical Association",
    "abstract": "Abstract Let n observations Y 1, Y 2, ···, Y n be generated by the model Y t = pY t−1 + e t , where Y 0 is a fixed constant and {e t } t-1 n is a sequence of independent normal random variables with mean 0 and variance σ2. Properties of the regression estimator of p are obtained under the assumption that p = ±1. Representations for the limit distributions of the estimator of p and of the regression t test are derived. The estimator of p and the regression t test furnish methods of testing the...",
    "doi": "https://doi.org/10.1080/01621459.1979.10482531",
    "cited_by_count": 22933,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1999996900",
    "title": "Generalized autoregressive conditional heteroskedasticity",
    "authors": [
      "Tim Bollerslev"
    ],
    "publication_year": 1986,
    "journal": "Journal of Econometrics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0304-4076(86)90063-1",
    "cited_by_count": 22237,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2085491458",
    "title": "Social Capital in the Creation of Human Capital",
    "authors": [
      "Jenell S. Coleman"
    ],
    "publication_year": 2000,
    "journal": "Elsevier eBooks",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/b978-0-7506-7222-1.50005-2",
    "cited_by_count": 21838,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2137358449",
    "title": "An Evolutionary Theory of Economic Change.",
    "authors": [
      "Brian J. Loasby",
      "Richard R. Nelson",
      "Sidney G. Winter"
    ],
    "publication_year": 1983,
    "journal": "The Economic Journal",
    "abstract": "Journal Article An Evolutionary Theory of Economic Change Get access An Evolutionary Theory of Economic Change. By Richard R. Nelson and Sidney G. Winter. (Cambridge, Massachusetts & London: Harvard University Press, 1982. Pp. xi +437. £17.50.) Brian J. Loasby Brian J. Loasby University of Stirling Search for other works by this author on: Oxford Academic Google Scholar The Economic Journal, Volume 93, Issue 371, 1 September 1983, Pages 652–654, https://doi.org/10.2307/2232409 Published: 01 S...",
    "doi": "https://doi.org/10.2307/2232409",
    "cited_by_count": 21731,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W3121403162",
    "title": "Initial conditions and moment restrictions in dynamic panel data models",
    "authors": [
      "Richard Blundell",
      "Stephen Bond"
    ],
    "publication_year": 1998,
    "journal": "Journal of Econometrics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/s0304-4076(98)00009-8",
    "cited_by_count": 21642,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2999417355",
    "title": "Cancer statistics, 2020",
    "authors": [
      "Rebecca L. Siegel",
      "Kimberly D. Miller",
      "Ahmedin Jemal"
    ],
    "publication_year": 2020,
    "journal": "CA A Cancer Journal for Clinicians",
    "abstract": "Each year, the American Cancer Society estimates the numbers of new cancer cases and deaths that will occur in the United States and compiles the most recent data on population-based cancer occurrence. Incidence data (through 2016) were collected by the Surveillance, Epidemiology, and End Results Program; the National Program of Cancer Registries; and the North American Association of Central Cancer Registries. Mortality data (through 2017) were collected by the National Center for Health Sta...",
    "doi": "https://doi.org/10.3322/caac.21590",
    "cited_by_count": 21380,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1979575715",
    "title": "Autoregressive Conditional Heteroscedasticity with Estimates of the Variance of United Kingdom Inflation",
    "authors": [
      "Robert F. Engle"
    ],
    "publication_year": 1982,
    "journal": "Econometrica",
    "abstract": "Traditional econometric models assume a constant one-period forecast variance. To generalize this implausible assumption, a new class of stochastic processes called autoregressive conditional heteroscedastic (ARCH) processes are introduced in this paper. These are mean zero, serially uncorrelated processes with nonconstant variances conditional on the past, but constant unconditional variances. For such processes, the recent past gives information about the one-period forecast variance. A reg...",
    "doi": "https://doi.org/10.2307/1912773",
    "cited_by_count": 20588,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W4320013936",
    "title": "Generative Adversarial Nets",
    "authors": [
      "Raphael Labaca-Castro"
    ],
    "publication_year": 2023,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1007/978-3-658-40442-0_9",
    "cited_by_count": 19937,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2168605160",
    "title": "Increasing Returns and Long-Run Growth",
    "authors": [
      "Paul Romer"
    ],
    "publication_year": 1986,
    "journal": "Journal of Political Economy",
    "abstract": "This paper presents a fully specified model of long-run growth in which knowledge is assumed to be an input in production that has increasing marginal productivity. It is essentially a competitive equilibrium model with endogenous technological change. In contrast to models based on diminishing returns, growth rates can be increasing over time, the effects of small disturbances can be amplified by the actions of private agents, and large countries may always grow faster than small countries. ...",
    "doi": "https://doi.org/10.1086/261420",
    "cited_by_count": 19906,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1541515907",
    "title": "The consequences of modernity",
    "authors": [],
    "publication_year": 1990,
    "journal": "Choice Reviews Online",
    "abstract": "Part I:. Introduction. The Discontinuities of Modernity. Security and Danger, Trust and Risk. Sociology and Modernity. Modernity, Time and Space. Disembedding. Trust. The Reflexivity of Modernity. Modernity and Post-- Modernity?. Summary. Part II:. The Institutional Dimensions of Modernity. The Globalizing of Modernity. Two Theoretical Perspectives. Dimensions of Globalization. Part III:. Trust and Modernity. Trust in Abstract Systems. Trust and Expertise. Trust and Ontological Security. The ...",
    "doi": "https://doi.org/10.5860/choice.28-1843",
    "cited_by_count": 19499,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2035554302",
    "title": "Another look at the instrumental variable estimation of error-components models",
    "authors": [
      "Manuel Arellano",
      "Olympia Bover"
    ],
    "publication_year": 1995,
    "journal": "Journal of Econometrics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0304-4076(94)01642-d",
    "cited_by_count": 19497,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1966910378",
    "title": "Bounds testing approaches to the analysis of level relationships",
    "authors": [
      "M. Hashem Pesaran",
      "Yongcheol Shin",
      "Richard J. Smith"
    ],
    "publication_year": 2001,
    "journal": "Journal of Applied Econometrics",
    "abstract": "Abstract This paper develops a new approach to the problem of testing the existence of a level relationship between a dependent variable and a set of regressors, when it is not known with certainty whether the underlying regressors are trend‐ or first‐difference stationary. The proposed tests are based on standard F ‐ and t ‐statistics used to test the significance of the lagged levels of the variables in a univariate equilibrium correction mechanism. The asymptotic distributions of these sta...",
    "doi": "https://doi.org/10.1002/jae.616",
    "cited_by_count": 19454,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2175723801",
    "title": "Governing the Commons: The Evolution of Institutions for Collective Action",
    "authors": [
      "Barry C. Field",
      "Элинор Остром"
    ],
    "publication_year": 1992,
    "journal": "Land Economics",
    "abstract": "Preface 1. Reflections on the commons 2. An institutional approach to the study of self-organization and self-governance in CPR situations 3. Analyzing long-enduring, self-organized and self-governed CPRs 4. Analyzing institutional change 5. Analyzing institutional failures and fragilities 6. A framework for analysis of self-organizing and self-governing CPRs Notes References Index.",
    "doi": "https://doi.org/10.2307/3146384",
    "cited_by_count": 19148,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W1977825494",
    "title": "An Economic Theory of Democracy.",
    "authors": [
      "Edward C. Banfield",
      "Anthony J. Downs"
    ],
    "publication_year": 1958,
    "journal": "Midwest Journal of Political Science",
    "abstract": "Downs presents a rational calculus of voting that has inspired much of the later work on voting and turnout. Particularly significant was his conclusion that a rational voter should almost never bother to vote. This conclusion, especially as elaborated on by Riker and Ordeshook (1968) has shifted the attention of modern political scientists from explaining why people don't vote to explaining why they do.",
    "doi": "https://doi.org/10.2307/2109186",
    "cited_by_count": 18908,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2531269403",
    "title": "ROBINS-I: a tool for assessing risk of bias in non-randomised studies of interventions",
    "authors": [
      "Jonathan A C Sterne",
      "Miguel A. Hernán",
      "Barnaby C Reeves",
      "Jelena Savović",
      "Nancy D Berkman"
    ],
    "publication_year": 2016,
    "journal": "BMJ",
    "abstract": "Non-randomised studies of the effects of interventions are critical to many areas of healthcare evaluation, but their results may be biased. It is therefore important to understand and appraise their strengths and weaknesses. We developed ROBINS-I (“Risk Of Bias In Non-randomised Studies - of Interventions”), a new tool for evaluating risk of bias in estimates of the comparative effectiveness (harm or benefit) of interventions from studies that did not use randomisation to allocate units (ind...",
    "doi": "https://doi.org/10.1136/bmj.i4919",
    "cited_by_count": 18788,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2112352537",
    "title": "Specification Tests in Econometrics",
    "authors": [
      "Jerry A. Hausman"
    ],
    "publication_year": 1978,
    "journal": "Econometrica",
    "abstract": "Using the result that under the null hypothesis of no misspecification an asymptotically efficient estimator must have zero asymptotic covariance with its difference from a consistent but asymptotically inefficient estimator, specification tests are devised for a number of model specifications in econometrics. Local power is calculated for small departures from the null hypothesis. An instrumental variable test as well as tests for a time series cross section model and the simultaneous equati...",
    "doi": "https://doi.org/10.2307/1913827",
    "cited_by_count": 18358,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2097580026",
    "title": "Testing for a unit root in time series regression",
    "authors": [
      "Peter C.B. Phillips",
      "Pierre Perrón"
    ],
    "publication_year": 1988,
    "journal": "Biometrika",
    "abstract": "This paper proposes new tests for detecting the presence of a unit root in quite general time series models. Our approach is nonparametric with respect to nuisance parameters and thereby allows for a very wide class of weakly dependent and possibly heterogeneously distributed data. The tests accommodate models with a fitted drift and a time trend so that they may be used to discriminate between unit root nonstationarity and stationarity about a deterministic trend. The limiting distributions ...",
    "doi": "https://doi.org/10.1093/biomet/75.2.335",
    "cited_by_count": 17906,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2029056003",
    "title": "CAPITAL ASSET PRICES: A THEORY OF MARKET EQUILIBRIUM UNDER CONDITIONS OF RISK*",
    "authors": [
      "William F. Sharpe"
    ],
    "publication_year": 1964,
    "journal": "The Journal of Finance",
    "abstract": "One of the problems which has plagued those attempting to predict the behavior of capital markets is the absence of a body of positive microeconomic theory dealing with conditions of risk. Although many useful insights can be obtained from the traditional models of investment under conditions of certainty, the pervasive influence of risk in financial transactions has forced those working in this area to adopt models of price behavior which are little more than assertions. A typical classroom ...",
    "doi": "https://doi.org/10.1111/j.1540-6261.1964.tb02865.x",
    "cited_by_count": 17384,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2136120210",
    "title": "On Persistence in Mutual Fund Performance",
    "authors": [
      "Mark M. Carhart"
    ],
    "publication_year": 1997,
    "journal": "The Journal of Finance",
    "abstract": "ABSTRACT Using a sample free of survivor bias, I demonstrate that common factors in stock returns and investment expenses almost completely explain persistence in equity mutual funds' mean and risk‐adjusted returns. Hendricks, Patel and Zeckhauser's (1993) “hot hands” result is mostly driven by the one‐year momentum effect of Jegadeesh and Titman (1993) , but individual funds do not earn higher returns from following the momentum strategy in stocks. The only significant persistence not explai...",
    "doi": "https://doi.org/10.1111/j.1540-6261.1997.tb03808.x",
    "cited_by_count": 16964,
    "category": "economics",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2100837269",
    "title": "Cleavage of Structural Proteins during the Assembly of the Head of Bacteriophage T4",
    "authors": [
      "Ulrich K. Laemmli"
    ],
    "publication_year": 1970,
    "journal": "Nature",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1038/227680a0",
    "cited_by_count": 251556,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W1856219842",
    "title": "Standard methods: For the examination of water and waste water",
    "authors": [
      "Water Environment Federation.",
      "Water Pollution Control Federation.",
      "American Water Works Association.",
      "American Public Health Association."
    ],
    "publication_year": 1990,
    "journal": "Analytical Biochemistry",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0003-2697(90)90598-4",
    "cited_by_count": 72470,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2138270253",
    "title": "DNA sequencing with chain-terminating inhibitors",
    "authors": [
      "Frederick Sanger",
      "S. Nicklen",
      "Alan Coulson"
    ],
    "publication_year": 1977,
    "journal": "Proceedings of the National Academy of Sciences",
    "abstract": "A new method for determining nucleotide sequences in DNA is described. It is similar to the \"plus and minus\" method [Sanger, F. & Coulson, A. R. (1975) J. Mol. Biol. 94, 441-448] but makes use of the 2',3'-dideoxy and arabinonucleoside analogues of the normal deoxynucleoside triphosphates, which act as specific chain-terminating inhibitors of DNA polymerase. The technique has been applied to the DNA of bacteriophage varphiX174 and is more rapid and more accurate than either the plus or the mi...",
    "doi": "https://doi.org/10.1073/pnas.74.12.5463",
    "cited_by_count": 69275,
    "category": "environment",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2162348455",
    "title": "Biodiversity hotspots for conservation priorities",
    "authors": [
      "Norman Myers",
      "Russell A. Mittermeier",
      "Cristina G. Mittermeier",
      "Gustavo A. B. da Fonseca",
      "Jennifer Kent"
    ],
    "publication_year": 2000,
    "journal": "Nature",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1038/35002501",
    "cited_by_count": 31108,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W3025949386",
    "title": "The ERA5 global reanalysis",
    "authors": [
      "Hans Hersbach",
      "Bill Bell",
      "Paul Berrisford",
      "Shoji Hirahara",
      "Ándrás Horányi"
    ],
    "publication_year": 2020,
    "journal": "Quarterly Journal of the Royal Meteorological Society",
    "abstract": "Abstract Within the Copernicus Climate Change Service (C3S), ECMWF is producing the ERA5 reanalysis which, once completed, will embody a detailed record of the global atmosphere, land surface and ocean waves from 1950 onwards. This new reanalysis replaces the ERA‐Interim reanalysis (spanning 1979 onwards) which was started in 2006. ERA5 is based on the Integrated Forecasting System (IFS) Cy41r2 which was operational in 2016. ERA5 thus benefits from a decade of developments in model physics, c...",
    "doi": "https://doi.org/10.1002/qj.3803",
    "cited_by_count": 30016,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2173251738",
    "title": "The NCEP/NCAR 40-Year Reanalysis Project",
    "authors": [
      "Eugenia Kalnay",
      "Masao Kanamitsu",
      "Robert Kistler",
      "William D. Collins",
      "Dennis G. Deaven"
    ],
    "publication_year": 1996,
    "journal": "Bulletin of the American Meteorological Society",
    "abstract": "The NCEP and NCAR are cooperating in a project (denoted “reanalysis”) to produce a 40-year record of global analyses of atmospheric fields in support of the needs of the research and climate monitoring communities. This effort involves the recovery of land surface, ship, rawinsonde, pibal, aircraft, satellite, and other data; quality controlling and assimilating these data with a data assimilation system that is kept unchanged over the reanalysis period 1957–96. This eliminates perceived clim...",
    "doi": "https://doi.org/10.1175/1520-0477(1996)077<0437:tnyrp>2.0.co;2",
    "cited_by_count": 29109,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2121745948",
    "title": "The ERA‐Interim reanalysis: configuration and performance of the data assimilation system",
    "authors": [
      "Dick Dee",
      "S. Uppala",
      "A. J. Simmons",
      "Paul Berrisford",
      "Paul Poli"
    ],
    "publication_year": 2011,
    "journal": "Quarterly Journal of the Royal Meteorological Society",
    "abstract": "Abstract ERA‐Interim is the latest global atmospheric reanalysis produced by the European Centre for Medium‐Range Weather Forecasts (ECMWF). The ERA‐Interim project was conducted in part to prepare for a new atmospheric reanalysis to replace ERA‐40, which will extend back to the early part of the twentieth century. This article describes the forecast model, data assimilation method, and input datasets used to produce ERA‐Interim, and discusses the performance of the system. Special emphasis i...",
    "doi": "https://doi.org/10.1002/qj.828",
    "cited_by_count": 26342,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W4300009529",
    "title": "Summary for Policymakers",
    "authors": [
      "Intergovernmental Panel on Climate Change"
    ],
    "publication_year": 2014,
    "journal": "Cambridge University Press eBooks",
    "abstract": "Cuando la deserción es producto de la ruptura de la conexión de intereses que unen a un estudiante con una institución educativa o por la ausencia de políticas que favorezcan la permanencia de estudiantes en las instituciones, el costo económico y social de una deserción es mayor porque se deteriora la calidad de vida del estudiante y por ende afecta el crecimiento de un país, más cuando la educación es considerada como un factor esencial en el crecimiento económico y la reducción de la pobre...",
    "doi": "https://doi.org/10.1017/cbo9781107415324.004",
    "cited_by_count": 23998,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2033904036",
    "title": "River flow forecasting through conceptual models part I — A discussion of principles",
    "authors": [
      "J.E. Nash",
      "J. V. Sutcliffe"
    ],
    "publication_year": 1970,
    "journal": "Journal of Hydrology",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0022-1694(70)90255-6",
    "cited_by_count": 23955,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W1594031697",
    "title": "Classification and Regression Trees.",
    "authors": [
      "Alexander Gordon",
      "Leo Breiman",
      "Jerome H. Friedman",
      "Richard A. Olshen",
      "C. J. Stone"
    ],
    "publication_year": 1984,
    "journal": "Biometrics",
    "abstract": "The methodology used to construct tree structured rules is the focus of this monograph. Unlike many other statistical procedures, which moved from pencil and paper to calculators, this text's use of trees was unthinkable before computers. Both the practical and theoretical sides have been developed in the authors' study of tree methods. Classification and Regression Trees reflects these two sides, covering the use of trees as a data analysis method, and in a more mathematical framework, provi...",
    "doi": "https://doi.org/10.2307/2530946",
    "cited_by_count": 23896,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2939474406",
    "title": "Climate change 2007: the physical science basis",
    "authors": [
      "Susan Solomon",
      "Dahe Qin",
      "Martin Manning",
      "Melinda Marquis",
      "Kristen Averyt"
    ],
    "publication_year": 2007,
    "journal": "University of North Texas Digital Library (University of North Texas)",
    "abstract": "This report is the first volume of the IPCC's Fourth Assessment Report. It covers several topics including the extensive range of observations now available for the atmosphere and surface, changes in sea level, assesses the paleoclimatic perspective, climate change causes both natural and anthropogenic, and climate models for projections of global climate.",
    "doi": null,
    "cited_by_count": 23473,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W3174993126",
    "title": "vegan: Community Ecology Package",
    "authors": [
      "Jari Oksanen",
      "Gavin L. Simpson",
      "F. Guillaume Blanchet",
      "Roeland Kindt",
      "Pierre Legendre"
    ],
    "publication_year": 2001,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.32614/cran.package.vegan",
    "cited_by_count": 23096,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2746485780",
    "title": "The value of the world's ecosystem services and natural capital",
    "authors": [
      "Robert Costanza",
      "Ralph C. d’Arge",
      "R.S. de Groot",
      "Stephen Färber",
      "Monica Grasso"
    ],
    "publication_year": 1997,
    "journal": "Nature",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1038/387253a0",
    "cited_by_count": 21923,
    "category": "environment",
    "reflection_question": "How does the distribution of resources and wealth shape the trust and ethical bonds of our modern societies?"
  },
  {
    "id": "W2108718991",
    "title": "Introducing mothur: Open-Source, Platform-Independent, Community-Supported Software for Describing and Comparing Microbial Communities",
    "authors": [
      "Patrick D. Schloss",
      "Sarah L. Westcott",
      "Thomas Ryabin",
      "Justine R. Hall",
      "Martin Hartmann"
    ],
    "publication_year": 2009,
    "journal": "Applied and Environmental Microbiology",
    "abstract": "mothur aims to be a comprehensive software package that allows users to use a single piece of software to analyze community sequence data. It builds upon previous tools to provide a flexible and powerful software package for analyzing sequencing data. As a case study, we used mothur to trim, screen, and align sequences; calculate distances; assign sequences to operational taxonomic units; and describe the alpha and beta diversity of eight marine samples previously characterized by pyrosequenc...",
    "doi": "https://doi.org/10.1128/aem.01541-09",
    "cited_by_count": 21712,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2075435443",
    "title": "A modified single solution method for the determination of phosphate in natural waters",
    "authors": [
      "J.E. Murphy",
      "J.P. Riley"
    ],
    "publication_year": 1962,
    "journal": "Analytica Chimica Acta",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/s0003-2670(00)88444-5",
    "cited_by_count": 21010,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2112776483",
    "title": "Very high resolution interpolated climate surfaces for global land areas",
    "authors": [
      "Robert J. Hijmans",
      "Susan E. Cameron",
      "Juan L. Parra",
      "Peter G. Jones",
      "Andy Jarvis"
    ],
    "publication_year": 2005,
    "journal": "International Journal of Climatology",
    "abstract": "We developed interpolated climate surfaces for global land areas (excluding Antarctica) at a spatial resolution of 30 arc s (often referred to as 1-km spatial resolution). The climate elements considered were monthly precipitation and mean, minimum, and maximum temperature. Input data were gathered from a variety of sources and, where possible, were restricted to records from the 1950–2000 period. We used the thin-plate smoothing spline algorithm implemented in the ANUSPLIN package for interp...",
    "doi": "https://doi.org/10.1002/joc.1276",
    "cited_by_count": 20093,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2412247133",
    "title": "Transforming Our World: The 2030 Agenda for Sustainable Development",
    "authors": [],
    "publication_year": 2018,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1891/9780826190123.ap02",
    "cited_by_count": 19556,
    "category": "environment",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W4233654598",
    "title": "Governing the Commons",
    "authors": [
      "Элинор Остром"
    ],
    "publication_year": 1990,
    "journal": "Cambridge University Press eBooks",
    "abstract": "The governance of natural resources used by many individuals in common is an issue of increasing concern to policy analysts. Both state control and privatisation of resources have been advocated, but neither the state nor the market have been uniformly successful in solving common pool resource problems. Offering a critique of the foundations of policy analysis as applied to natural resources, Elinor Ostrom here provides a unique body of empirical data to explore conditions under which common...",
    "doi": "https://doi.org/10.1017/cbo9780511807763",
    "cited_by_count": 18866,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2011303397",
    "title": "Resilience and Stability of Ecological Systems",
    "authors": [
      "C. S. Holling"
    ],
    "publication_year": 1973,
    "journal": "Annual Review of Ecology and Systematics",
    "abstract": "Individuals die, populations disappear, and species become extinct. That is one view of the world. But another view of the world concentrates not so much on presence or absence as upon the numbers of organisms and the degree of constancy of their numbers. These are two very different ways of viewing the behavior of systems and the usefulness of the view depends very much on the properties of the system concerned. If we are examining a particular device designed by the engineer to perform spec...",
    "doi": "https://doi.org/10.1146/annurev.es.04.110173.000245",
    "cited_by_count": 17711,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W1520428197",
    "title": "Climate change 2007 : the physical science basis : contribution of Working Group I to the Fourth Assessment Report of the Intergovernmental Panel on Climate Change",
    "authors": [
      "Susan Solomon"
    ],
    "publication_year": 2007,
    "journal": "Unknown Journal",
    "abstract": "Summary for policymakers -- Technical summary -- Historical overview of climate change science -- Changes in atmospheric constituents and radiative forcing -- Observations: atmospheric surface and climate change -- Observations: changes in snow, ice, and frozen ground -- Observations: ocean climate change and sea level -- Paleoclimate -- Coupling between changes in the climate system and biogeochemistry -- Climate models and their evaluation -- Understanding and attributing climate change -- ...",
    "doi": null,
    "cited_by_count": 17678,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2139416101",
    "title": "Maximum entropy modeling of species geographic distributions",
    "authors": [
      "Steven J. Phillips",
      "Robert P. Anderson",
      "Robert E. Schapire"
    ],
    "publication_year": 2005,
    "journal": "Ecological Modelling",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/j.ecolmodel.2005.03.026",
    "cited_by_count": 17574,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2737217596",
    "title": "Production, use, and fate of all plastics ever made",
    "authors": [
      "Roland Geyer",
      "Jenna Jambeck",
      "Kara Lavender Law"
    ],
    "publication_year": 2017,
    "journal": "Science Advances",
    "abstract": "Plastics have outgrown most man-made materials and have long been under environmental scrutiny. However, robust global information, particularly about their end-of-life fate, is lacking. By identifying and synthesizing dispersed data on production, use, and end-of-life management of polymer resins, synthetic fibers, and additives, we present the first global analysis of all mass-produced plastics ever manufactured. We estimate that 8300 million metric tons (Mt) as of virgin plastics have been...",
    "doi": "https://doi.org/10.1126/sciadv.1700782",
    "cited_by_count": 17412,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2088833470",
    "title": "UPARSE: highly accurate OTU sequences from microbial amplicon reads",
    "authors": [
      "R. C. Edgar"
    ],
    "publication_year": 2013,
    "journal": "Nature Methods",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1038/nmeth.2604",
    "cited_by_count": 17212,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2112017750",
    "title": "Pseudo-second order model for sorption processes",
    "authors": [
      "Yuh‐Shan Ho",
      "Gordon McKay"
    ],
    "publication_year": 1999,
    "journal": "Process Biochemistry",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/s0032-9592(98)00112-5",
    "cited_by_count": 17086,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2614464134",
    "title": "WorldClim 2: new 1‐km spatial resolution climate surfaces for global land areas",
    "authors": [
      "Stephen E. Fick",
      "Robert J. Hijmans"
    ],
    "publication_year": 2017,
    "journal": "International Journal of Climatology",
    "abstract": "ABSTRACT We created a new dataset of spatially interpolated monthly climate data for global land areas at a very high spatial resolution (approximately 1 km 2 ). We included monthly temperature (minimum, maximum and average), precipitation, solar radiation, vapour pressure and wind speed, aggregated across a target temporal range of 1970–2000, using data from between 9000 and 60 000 weather stations. Weather station data were interpolated using thin‐plate splines with covariates including ele...",
    "doi": "https://doi.org/10.1002/joc.5086",
    "cited_by_count": 16587,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W1485044783",
    "title": "Bergey's Manual of Systematic Bacteriology",
    "authors": [],
    "publication_year": 1990,
    "journal": "Annals of Internal Medicine",
    "abstract": "BCL3 and Sheehy cite Bergey's manual of determinative bacteriology of which systematic bacteriology, first edition, is an expansion. With v.4 the set is complete. The volumes cover, roughly, v.1, the Gram-negatives except those in v.3 ($87.95); v.2, the Gram-positives less actinomycetes ($71.95); v.",
    "doi": "https://doi.org/10.7326/0003-4819-112-5-391_3",
    "cited_by_count": 15676,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2136879569",
    "title": "UCHIME improves sensitivity and speed of chimera detection",
    "authors": [
      "R. C. Edgar",
      "Brian J. Haas",
      "José C. Clemente",
      "Christopher Quince",
      "Rob Knight"
    ],
    "publication_year": 2011,
    "journal": "Bioinformatics",
    "abstract": "MOTIVATION: Chimeric DNA sequences often form during polymerase chain reaction amplification, especially when sequencing single regions (e.g. 16S rRNA or fungal Internal Transcribed Spacer) to assess diversity or compare populations. Undetected chimeras may be misinterpreted as novel species, causing inflated estimates of diversity and spurious inferences of differences between populations. Detection and removal of chimeras is therefore of critical importance in such experiments. RESULTS: We ...",
    "doi": "https://doi.org/10.1093/bioinformatics/btr381",
    "cited_by_count": 15491,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2028622989",
    "title": "Improved M13 phage cloning vectors and host strains: nucleotide sequences of the M13mpl8 and pUC19 vectors",
    "authors": [
      "Celeste Yanisch-Perron",
      "Jeffrey Vieira",
      "Joachim Messing"
    ],
    "publication_year": 1985,
    "journal": "Gene",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/0378-1119(85)90120-9",
    "cited_by_count": 15165,
    "category": "environment",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2019410656",
    "title": "A rapid alkaline extraction procedure for screening recombinant plasmid DNA",
    "authors": [
      "H.C. Birnboim",
      "Janine Doly"
    ],
    "publication_year": 1979,
    "journal": "Nucleic Acids Research",
    "abstract": "A procedure for extracting plasmid DNA from bacterial cells is described. The method is simple enough to permit the analysis by gel electrophoresis of 100 or more clones per day yet yields plasmid DNA which is pure enough to be digestible by restriction enzymes. The principle of the method is selective alkaline denaturation of high molecular weight chromosomal DNA while covalently closed circular DNA remains double-stranded. Adequate pH control is accomplished without using a pH meter. Upon n...",
    "doi": "https://doi.org/10.1093/nar/7.6.1513",
    "cited_by_count": 14876,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2800860906",
    "title": "The Fractal Geometry of Nature.",
    "authors": [
      "Colin Sparrow",
      "B. B. Mandelbrot"
    ],
    "publication_year": 1984,
    "journal": "Journal of the Royal Statistical Society Series A (General)",
    "abstract": "...a blend of erudition (fascinating and sometimes obscure historical minutiae abound), popularization (mathematical rigor is relegated to appendices) and exposition (the reader need have little knowledge of the fields involved) ...and the illustrations include many superb examples of computer graphics that are works of art in their own right. Nature",
    "doi": "https://doi.org/10.2307/2981858",
    "cited_by_count": 14769,
    "category": "environment",
    "reflection_question": "What responsibility do we bear as individuals to preserve the delicate ecological equilibrium of our shared planet?"
  },
  {
    "id": "W2582743722",
    "title": "R: A Language and Environment for Statistical Computing",
    "authors": [
      "R Core Team"
    ],
    "publication_year": 2000,
    "journal": "Unknown Journal",
    "abstract": "Most R novices will start with Appendix A [A sample session], page 80.This should give some familiarity with the style of R sessions and more importantly some instant feedback on what actually happens.Many users will come to R mainly for its graphical facilities.",
    "doi": "https://doi.org/10.32614/r.manuals",
    "cited_by_count": 352998,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2194775991",
    "title": "Deep Residual Learning for Image Recognition",
    "authors": [
      "Kaiming He",
      "Xiangyu Zhang",
      "Shaoqing Ren",
      "Jian Sun"
    ],
    "publication_year": 2016,
    "journal": "Unknown Journal",
    "abstract": "Deeper neural networks are more difficult to train. We present a residual learning framework to ease the training of networks that are substantially deeper than those used previously. We explicitly reformulate the layers as learning residual functions with reference to the layer inputs, instead of learning unreferenced functions. We provide comprehensive empirical evidence showing that these residual networks are easier to optimize, and can gain accuracy from considerably increased depth. On ...",
    "doi": "https://doi.org/10.1109/cvpr.2016.90",
    "cited_by_count": 221215,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2911964244",
    "title": "Random Forests",
    "authors": [
      "Leo Breiman"
    ],
    "publication_year": 2001,
    "journal": "Machine Learning",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1023/a:1010933404324",
    "cited_by_count": 125086,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2064675550",
    "title": "Long Short-Term Memory",
    "authors": [
      "Sepp Hochreiter",
      "Jürgen Schmidhuber"
    ],
    "publication_year": 1997,
    "journal": "Neural Computation",
    "abstract": "Learning to store information over extended time intervals by recurrent backpropagation takes a very long time, mostly because of insufficient, decaying error backflow. We briefly review Hochreiter's (1991) analysis of this problem, then address it by introducing a novel, efficient, gradient-based method called long short-term memory (LSTM). Truncating the gradient where this does not do harm, LSTM can learn to bridge minimal time lags in excess of 1000 discrete-time steps by enforcing consta...",
    "doi": "https://doi.org/10.1162/neco.1997.9.8.1735",
    "cited_by_count": 97444,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1951724000",
    "title": "Fitting Linear Mixed-Effects Models Using <b>lme4</b>",
    "authors": [
      "Douglas M. Bates",
      "Martin Mächler",
      "Benjamin M. Bolker",
      "Steve Walker"
    ],
    "publication_year": 2015,
    "journal": "Journal of Statistical Software",
    "abstract": "Maximum likelihood or restricted maximum likelihood (REML) estimates of the parameters in linear mixed-effects models can be determined using the lmer function in the lme4 package for R. As for most model-fitting functions in R, the model is described in an lmer call by a formula, in this case including both fixed- and random-effects terms. The formula and data together determine a numerical representation of the model from which the profiled deviance or the profiled REML criterion can be eva...",
    "doi": "https://doi.org/10.18637/jss.v067.i01",
    "cited_by_count": 84959,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1522301498",
    "title": "Adam: A Method for Stochastic Optimization",
    "authors": [
      "Diederik P. Kingma",
      "Jimmy Ba"
    ],
    "publication_year": 2014,
    "journal": "UvA-DARE (University of Amsterdam)",
    "abstract": "We introduce Adam, an algorithm for first-order gradient-based optimization of stochastic objective functions, based on adaptive estimates of lower-order moments. The method is straightforward to implement, is computationally efficient, has little memory requirements, is invariant to diagonal rescaling of the gradients, and is well suited for problems that are large in terms of data and/or parameters. The method is also appropriate for non-stationary objectives and problems with very noisy an...",
    "doi": "https://doi.org/10.48550/arxiv.1412.6980",
    "cited_by_count": 84773,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2919115771",
    "title": "Deep learning",
    "authors": [
      "Yann LeCun",
      "Yoshua Bengio",
      "Geoffrey E. Hinton"
    ],
    "publication_year": 2015,
    "journal": "Nature",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1038/nature14539",
    "cited_by_count": 81161,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W4385245566",
    "title": "MizAR 60 for Mizar 50",
    "authors": [
      "Jakubův, Jan",
      "Chvalovský, Karel",
      "Goertzel, Zarathustra",
      "Kaliszyk, Cezary",
      "Olšák, Mirek"
    ],
    "publication_year": 2023,
    "journal": "DROPS (Schloss Dagstuhl – Leibniz Center for Informatics)",
    "abstract": "As a present to Mizar on its 50th anniversary, we develop an AI/TP system that automatically proves about 60% of the Mizar theorems in the hammer setting. We also automatically prove 75% of the Mizar theorems when the automated provers are helped by using only the premises used in the human-written Mizar proofs. We describe the methods and large-scale experiments leading to these results. This includes in particular the E and Vampire provers, their ENIGMA and Deepire learning modifications, a...",
    "doi": "https://doi.org/10.4230/lipics.itp.2023.19",
    "cited_by_count": 76097,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2163605009",
    "title": "ImageNet classification with deep convolutional neural networks",
    "authors": [
      "Alex Krizhevsky",
      "Ilya Sutskever",
      "Geoffrey E. Hinton"
    ],
    "publication_year": 2017,
    "journal": "Communications of the ACM",
    "abstract": "We trained a large, deep convolutional neural network to classify the 1.2 million high-resolution images in the ImageNet LSVRC-2010 contest into the 1000 different classes. On the test data, we achieved top-1 and top-5 error rates of 37.5% and 17.0%, respectively, which is considerably better than the previous state-of-the-art. The neural network, which has 60 million parameters and 650,000 neurons, consists of five convolutional layers, some of which are followed by max-pooling layers, and t...",
    "doi": "https://doi.org/10.1145/3065386",
    "cited_by_count": 75705,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1686810756",
    "title": "Very Deep Convolutional Networks for Large-Scale Image Recognition",
    "authors": [
      "Karen Simonyan",
      "Andrew Zisserman"
    ],
    "publication_year": 2014,
    "journal": "arXiv (Cornell University)",
    "abstract": "In this work we investigate the effect of the convolutional network depth on its accuracy in the large-scale image recognition setting. Our main contribution is a thorough evaluation of networks of increasing depth using an architecture with very small (3x3) convolution filters, which shows that a significant improvement on the prior-art configurations can be achieved by pushing the depth to 16-19 weight layers. These findings were the basis of our ImageNet Challenge 2014 submission, where ou...",
    "doi": "https://doi.org/10.48550/arxiv.1409.1556",
    "cited_by_count": 75538,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1527311855",
    "title": "Case Study Research: Design and Methods",
    "authors": [
      "Robert K. Yin"
    ],
    "publication_year": 1984,
    "journal": "Unknown Journal",
    "abstract": "\"This new edition Case Study Research has been carefully revised, updated, and expanded while retaining virtually all of the features and coverage of the second edition. Robert K. Yin's comprehensive presentation covers all aspects of the case study method - from problem definition, design, and data collection to data analysis and composition and reporting. Yin also traces the uses and importance of case studies to a wide range of disciplines, including sociology, psychology, history, managem...",
    "doi": null,
    "cited_by_count": 74955,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W4211007335",
    "title": "Fuzzy sets",
    "authors": [
      "L. A. Zadeh"
    ],
    "publication_year": 1965,
    "journal": "Information and Control",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1016/s0019-9958(65)90241-x",
    "cited_by_count": 65931,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2101234009",
    "title": "Scikit-learn: Machine Learning in Python",
    "authors": [
      "Fabián Pedregosa",
      "Gaël Varoquaux",
      "Alexandre Gramfort",
      "Vincent Michel",
      "Bertrand Thirion"
    ],
    "publication_year": 2012,
    "journal": "arXiv (Cornell University)",
    "abstract": "Scikit-learn is a Python module integrating a wide range of state-of-the-art machine learning algorithms for medium-scale supervised and unsupervised problems. This package focuses on bringing machine learning to non-specialists using a general-purpose high-level language. Emphasis is put on ease of use, performance, documentation, and API consistency. It has minimal dependencies and is distributed under the simplified BSD license, encouraging its use in both academic and commercial settings....",
    "doi": "https://doi.org/10.48550/arxiv.1201.0490",
    "cited_by_count": 63696,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2108598243",
    "title": "ImageNet: A large-scale hierarchical image database",
    "authors": [
      "Jia Deng",
      "Wei Dong",
      "Richard Socher",
      "Li-Jia Li",
      "Kai Li"
    ],
    "publication_year": 2009,
    "journal": "2009 IEEE Conference on Computer Vision and Pattern Recognition",
    "abstract": "The explosion of image data on the Internet has the potential to foster more sophisticated and robust models and algorithms to index, retrieve, organize and interact with images and multimedia data. But exactly how such data can be harnessed and organized remains a critical problem. We introduce here a new database called “ImageNet”, a large-scale ontology of images built upon the backbone of the WordNet structure. ImageNet aims to populate the majority of the 80,000 synsets of WordNet with a...",
    "doi": "https://doi.org/10.1109/cvpr.2009.5206848",
    "cited_by_count": 61656,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2112796928",
    "title": "Gradient-based learning applied to document recognition",
    "authors": [
      "Yann LeCun",
      "Léon Bottou",
      "Yoshua Bengio",
      "Patrick Haffner"
    ],
    "publication_year": 1998,
    "journal": "Proceedings of the IEEE",
    "abstract": "Multilayer neural networks trained with the back-propagation algorithm constitute the best example of a successful gradient based learning technique. Given an appropriate network architecture, gradient-based learning algorithms can be used to synthesize a complex decision surface that can classify high-dimensional patterns, such as handwritten characters, with minimal preprocessing. This paper reviews various methods applied to handwritten character recognition and compares them on a standard...",
    "doi": "https://doi.org/10.1109/5.726791",
    "cited_by_count": 58002,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2133665775",
    "title": "Image quality assessment: from error visibility to structural similarity",
    "authors": [
      "Zhou Wang",
      "Alan C. Bovik",
      "Hamid R. Sheikh",
      "Eero P. Simoncelli"
    ],
    "publication_year": 2004,
    "journal": "IEEE Transactions on Image Processing",
    "abstract": "Objective methods for assessing perceptual image quality traditionally attempted to quantify the visibility of errors (differences) between a distorted image and a reference image using a variety of known properties of the human visual system. Under the assumption that human visual perception is highly adapted for extracting structural information from a scene, we introduce an alternative complementary framework for quality assessment based on the degradation of structural information. As a s...",
    "doi": "https://doi.org/10.1109/tip.2003.819861",
    "cited_by_count": 55796,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W639708223",
    "title": "Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks",
    "authors": [
      "Shaoqing Ren",
      "Kaiming He",
      "Ross Girshick",
      "Jian Sun"
    ],
    "publication_year": 2016,
    "journal": "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    "abstract": "State-of-the-art object detection networks depend on region proposal algorithms to hypothesize object locations. Advances like SPPnet [1] and Fast R-CNN [2] have reduced the running time of these detection networks, exposing region proposal computation as a bottleneck. In this work, we introduce a Region Proposal Network (RPN) that shares full-image convolutional features with the detection network, thus enabling nearly cost-free region proposals. An RPN is a fully convolutional network that ...",
    "doi": "https://doi.org/10.1109/tpami.2016.2577031",
    "cited_by_count": 53949,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2964121744",
    "title": "Untitled Work",
    "authors": [
      "Chen, Kuan-Lin",
      "Schulman, Rebecca"
    ],
    "publication_year": 2021,
    "journal": "DROPS (Schloss Dagstuhl – Leibniz Center for Informatics)",
    "abstract": "Designing complex, dynamic yet multi-functional materials and devices is challenging because the design spaces for these materials have numerous interdependent and often conflicting constraints. Taking inspiration from advances in artificial intelligence and their applications in material discovery, we propose a computational method for designing metamorphic DNA-co-polymerized hydrogel structures. The method consists of a coarse-grained simulation and a deep learning-guided optimization syste...",
    "doi": "https://doi.org/10.4230/lipics.cp.2021.42",
    "cited_by_count": 50267,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W3023540311",
    "title": "Genetic algorithms in search, optimization, and machine learning",
    "authors": [],
    "publication_year": 1989,
    "journal": "Choice Reviews Online",
    "abstract": "From the Publisher:\r\nThis book brings together - in an informal and tutorial fashion - the computer techniques, mathematical tools, and research results that will enable both students and practitioners to apply genetic algorithms to problems in many fields. \r\n\r\nMajor concepts are illustrated with running examples, and major algorithms are illustrated by Pascal computer programs. No prior knowledge of GAs or genetics is assumed, and only a minimum of computer programming and mathematics backgr...",
    "doi": "https://doi.org/10.5860/choice.27-0936",
    "cited_by_count": 49334,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2295598076",
    "title": "XGBoost",
    "authors": [
      "Tianqi Chen",
      "Carlos Guestrin"
    ],
    "publication_year": 2016,
    "journal": "Unknown Journal",
    "abstract": "Tree boosting is a highly effective and widely used machine learning method. In this paper, we describe a scalable end-to-end tree boosting system called XGBoost, which is used widely by data scientists to achieve state-of-the-art results on many machine learning challenges. We propose a novel sparsity-aware algorithm for sparse data and weighted quantile sketch for approximate tree learning. More importantly, we provide insights on cache access patterns, data compression and sharding to buil...",
    "doi": "https://doi.org/10.1145/2939672.2939785",
    "cited_by_count": 47940,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2126105956",
    "title": "A fast and elitist multiobjective genetic algorithm: NSGA-II",
    "authors": [
      "Kalyanmoy Deb",
      "Amrit Pratap",
      "Sakshi Agarwal",
      "T. Meyarivan"
    ],
    "publication_year": 2002,
    "journal": "IEEE Transactions on Evolutionary Computation",
    "abstract": "Multi-objective evolutionary algorithms (MOEAs) that use non-dominated sorting and sharing have been criticized mainly for: (1) their O(MN/sup 3/) computational complexity (where M is the number of objectives and N is the population size); (2) their non-elitism approach; and (3) the need to specify a sharing parameter. In this paper, we suggest a non-dominated sorting-based MOEA, called NSGA-II (Non-dominated Sorting Genetic Algorithm II), which alleviates all of the above three difficulties....",
    "doi": "https://doi.org/10.1109/4235.996017",
    "cited_by_count": 47478,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2152195021",
    "title": "Particle swarm optimization",
    "authors": [
      "James Kennedy",
      "R.C. Eberhart"
    ],
    "publication_year": 2002,
    "journal": "Unknown Journal",
    "abstract": "A concept for the optimization of nonlinear functions using particle swarm methodology is introduced. The evolution of several paradigms is outlined, and an implementation of one of the paradigms is discussed. Benchmark testing of the paradigm is described, and applications, including nonlinear function optimization and neural network training, are proposed. The relationships between particle swarm optimization and both artificial life and genetic algorithms are described.",
    "doi": "https://doi.org/10.1109/icnn.1995.488968",
    "cited_by_count": 47348,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2912565176",
    "title": "Fuzzy sets",
    "authors": [
      "Lotfi A. Zadeh"
    ],
    "publication_year": 1996,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": null,
    "cited_by_count": 47146,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2097117768",
    "title": "Going deeper with convolutions",
    "authors": [
      "Christian Szegedy",
      "Wei Liu",
      "Yangqing Jia",
      "Pierre Sermanet",
      "Scott Reed"
    ],
    "publication_year": 2015,
    "journal": "Unknown Journal",
    "abstract": "We propose a deep convolutional neural network architecture codenamed Inception that achieves the new state of the art for classification and detection in the ImageNet Large-Scale Visual Recognition Challenge 2014 (ILSVRC14). The main hallmark of this architecture is the improved utilization of the computing resources inside the network. By a carefully crafted design, we increased the depth and width of the network while keeping the computational budget constant. To optimize quality, the arch...",
    "doi": "https://doi.org/10.1109/cvpr.2015.7298594",
    "cited_by_count": 46756,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2896457183",
    "title": "AI-Assisted Pipeline for Dynamic Generation of Trustworthy Health Supplement Content at Scale",
    "authors": [
      "Holter, Ole Magnus",
      "Ell, Basil"
    ],
    "publication_year": 2018,
    "journal": "DROPS (Schloss Dagstuhl – Leibniz Center for Informatics)",
    "abstract": "Although geospatial question answering systems have received increasing attention in recent years, existing prototype systems struggle to properly answer qualitative spatial questions. In this work, we propose a unique framework for answering qualitative spatial questions, which comprises three main components: a geoparser that takes the input questions and extracts place semantic information from text, a reasoning system which is embedded with a crisp reasoner, and finally, answer extraction...",
    "doi": "https://doi.org/10.4230/lipics.cosit.2022.18",
    "cited_by_count": 45648,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W1849190772",
    "title": "Introduction to Mediation, Moderation, and Conditional Process Analysis: A Regression-Based Approach",
    "authors": [
      "Andrew F. Hayes"
    ],
    "publication_year": 2013,
    "journal": "Unknown Journal",
    "abstract": "I. FUNDAMENTAL CONCEPTS 1. Introduction 1.1. A Scientist in Training 1.2. Questions of Whether, If, How, and When 1.3. Conditional Process Analysis 1.4. Correlation, Causality, and Statistical Modeling 1.5. Statistical Software 1.6. Overview of this Book 1.7. Chapter Summary 2. Simple Linear Regression 2.1. Correlation and Prediction 2.2. The Simple Linear Regression Equation 2.3. Statistical Inference 2.4. Assumptions for Interpretation and Statistical Inference 2.5. Chapter Summary 3. Multi...",
    "doi": null,
    "cited_by_count": 45131,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2011039300",
    "title": "Computers and Intractability: A Guide to the Theory of NP-Completeness",
    "authors": [
      "M. R. Garey",
      "David S. Johnson"
    ],
    "publication_year": 1979,
    "journal": "Unknown Journal",
    "abstract": "Abstract not available.",
    "doi": null,
    "cited_by_count": 44605,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2963446712",
    "title": "Densely Connected Convolutional Networks",
    "authors": [
      "Gao Huang",
      "Zhuang Liu",
      "Laurens van der Maaten",
      "Kilian Q. Weinberger"
    ],
    "publication_year": 2017,
    "journal": "Unknown Journal",
    "abstract": "Recent work has shown that convolutional networks can be substantially deeper, more accurate, and efficient to train if they contain shorter connections between layers close to the input and those close to the output. In this paper, we embrace this observation and introduce the Dense Convolutional Network (DenseNet), which connects each layer to every other layer in a feed-forward fashion. Whereas traditional convolutional networks with L layers have L connections-one between each layer and i...",
    "doi": "https://doi.org/10.1109/cvpr.2017.243",
    "cited_by_count": 44448,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2019465613",
    "title": "Fast Parallel Algorithms for Short-Range Molecular Dynamics",
    "authors": [
      "Steven J. Plimpton"
    ],
    "publication_year": 1995,
    "journal": "Journal of Computational Physics",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1006/jcph.1995.1039",
    "cited_by_count": 44433,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  },
  {
    "id": "W2112090702",
    "title": "Collective dynamics of ‘small-world’ networks",
    "authors": [
      "Duncan J. Watts",
      "Steven H. Strogatz"
    ],
    "publication_year": 1998,
    "journal": "Nature",
    "abstract": "Abstract not available.",
    "doi": "https://doi.org/10.1038/30918",
    "cited_by_count": 43069,
    "category": "tech",
    "reflection_question": "How does this model of learning and technology redefine our understanding of human cognition and creative agency?"
  }
];
