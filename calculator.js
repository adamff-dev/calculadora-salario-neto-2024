const $ = (selector) => document.querySelectorAll(selector);

// Gravamenes estatales 2024
// https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-estatal.html
const GRAVAMEN_ESTATAL = [
  [0, 12450, 9.5],
  [12450, 20200, 12.0],
  [20200, 35200, 15.0],
  [35200, 60000, 18.5],
  [60000, 300000, 22.5],
  [300000, Infinity, 24.5],
];

// Gravamenes autonomicos 2024
// https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2024/c15-calculo-impuesto-determinacion-cuotas-integras/gravamen-base-liquidable-general/gravamen-autonomico.html
const GRAVAMEN_AUTONOMICO_CATALUNA = [
  [0, 12450, 10.5],
  [12450, 17707.2, 12.0],
  [17707.2, 21000, 14.0],
  [21000, 33007.2, 15.0],
  [33007.2, 53407.2, 18.8],
  [53407.2, 90000, 21.5],
  [90000, 120000, 23.5],
  [120000, 175000, 24.5],
  [175000, Infinity, 25.5],
];

const GRAVAMEN_AUTONOMICO_ANDALUCIA = [
  [0, 13000, 9.5],
  [13000, 21000, 12],
  [21000, 35200, 15],
  [35200, 60000, 18.5],
  [60000, Infinity, 22.5],
];

const GRAVAMEN_AUTONOMICO_ARAGON = [
  [0, 13072.5, 9.5],
  [13072.5, 21000, 12],
  [21000, 36960, 15],
  [36960, 52500, 18.5],
  [52500, 60000, 20.5],
  [60000, 80000, 23],
  [80000, 90000, 24],
  [90000, 130000, 25],
  [130000, Infinity, 25.5],
];

const GRAVAMEN_AUTONOMICO_ASTURIAS = [
  [0, 12450, 10],
  [12450, 17707.2, 12],
  [17707.2, 33007.2, 14],
  [33007.2, 53407.2, 18.5],
  [53407.2, 70000, 21.5],
  [70000, 90000, 22.5],
  [90000, 175000, 25],
  [175000, Infinity, 25.5],
];

const GRAVAMEN_AUTONOMICO_ILLES_BALEARS = [
  [0, 10000, 9],
  [10000, 18000, 11.25],
  [18000, 30000, 14.25],
  [30000, 48000, 17.5],
  [48000, 70000, 19],
  [70000, 90000, 21.75],
  [90000, 120000, 22.75],
  [120000, 175000, 23.75],
  [175000, Infinity, 24.75],
];

const GRAVAMEN_AUTONOMICO_CANARIAS = [
  [0, 13465, 9],
  [13465, 19022, 11.5],
  [19022, 35285, 14],
  [35285, 56382, 18.5],
  [56382, 91350, 23.5],
  [91350, 121200, 25],
  [121200, Infinity, 26],
];

const GRAVAMEN_AUTONOMICO_CANTABRIA = [
  [0, 13000, 8.5],
  [13000, 21000, 11],
  [21000, 35000, 14.5],
  [35000, 60000, 18],
  [60000, 90000, 22.5],
  [90000, Infinity, 24.5],
];

const GRAVAMEN_AUTONOMICO_CASTILLA_LA_MANCHA = [
  [0, 12450, 9.5],
  [12450, 20000, 12],
  [20000, 35200, 15],
  [35200, 60000, 18.5],
  [60000, Infinity, 22.5],
];

const GRAVAMEN_AUTONOMICO_CASTILLA_Y_LEON = [
  [0, 12450, 9],
  [12450, 20000, 12],
  [20000, 35200, 14],
  [35200, 53407.2, 18.5],
  [53407.2, Infinity, 21.5],
];

const GRAVAMEN_AUTONOMICO_EXTREMADURA = [
  [0, 12450, 8],
  [12450, 20000, 10],
  [20000, 24200, 16],
  [24200, 35200, 17.5],
  [35200, 60000, 21],
  [60000, 80200, 23.5],
  [80200, 99200, 24],
  [99200, 120200, 24.5],
  [120200, Infinity, 25],
];

const GRAVAMEN_AUTONOMICO_GALICIA = [
  [0, 12985.35, 9],
  [12985.35, 21068.6, 11.65],
  [21068.6, 35200, 14.9],
  [35200, 60000, 18.4],
  [60000, Infinity, 22.5],
];

const GRAVAMEN_AUTONOMICO_MADRID = [
  [0, 13362.22, 8.5],
  [13362.22, 19004.63, 10.7],
  [19004.63, 35425.68, 12.8],
  [35425.68, 57320.4, 17.4],
  [57320.4, Infinity, 20.5],
];

const GRAVAMEN_AUTONOMICO_MURCIA = [
  [0, 12450, 9.5],
  [12450, 20200, 11.2],
  [20200, 34000, 13.3],
  [34000, 60000, 17.9],
  [60000, Infinity, 22.5],
];

const GRAVAMEN_AUTONOMICO_VALENCIA = [
  [0, 12000, 9],
  [12000, 22000, 12],
  [22000, 32000, 15],
  [32000, 42000, 17.5],
  [42000, 52000, 20],
  [52000, 62000, 22.5],
  [62000, 72000, 25],
  [72000, 100000, 26.5],
  [100000, 150000, 27.5],
  [150000, 200000, 28.5],
  [200000, Infinity, 29.5],
];

// Cotizaciones a la Seguridad Social
const COTIZACION_CONTRIBUCION_COMUN = 4.82; // cotización cont. comúm
const COTIZACION_FORMACION = 0.1; // cotización formación
const COTIZACION_DESEMPLEO = 1.55; // cotización desempleo

// Cuantía fija de los gastos deducibles
const OTROS_GASTOS_DEDUCIBLES = 0;
const MINIMO_PERSONAL_FAMILIAR = 5550;
const OTROS_GASTOS_CUANTIA_FIJA_CARACTER_GENERAL = 2000;

// Mínimo exento IRPF
const MINIMO_EXENTO_IRPF = 15876; // 2024

let elements = {};

function init() {
  [
    "salario",
    "cantidadPagos",
    "comunidadAutonoma",
    "gravamenEstatal",
    "gravamenAutonomico",
    "totalIrpf",
    "totalIrpfPorcentaje",
    "anualNeto",
    "mensualNeto",
    "cotizacionContingenciasComunes",
    "cotizacionFormacion",
    "cotizacionDesempleo",
    "totalSeguridadSocial",
  ].forEach((id) => {
    elements[id] = $("#" + id)[0];
  });

  elements.salario.addEventListener("input", calcular);
  elements.cantidadPagos.addEventListener("input", calcular);
  elements.comunidadAutonoma.addEventListener("input", calcular);
}

function calcular() {
  // Get values from inputs
  const comunidadAutonoma = elements.comunidadAutonoma.value;
  const ingresosIntegros = parseFloat(elements.salario.value);
  const cantidadPagos = parseFloat(elements.cantidadPagos.value);

  // Calcular cotizaciones a la Seguridad Social
  const cotizacionContingenciasComunes =
    (ingresosIntegros * COTIZACION_CONTRIBUCION_COMUN) / 100;
  const cotizacionFormacion = (ingresosIntegros * COTIZACION_FORMACION) / 100;
  const cotizacionDesempleo = (ingresosIntegros * COTIZACION_DESEMPLEO) / 100;
  const seguridadSocial =
    cotizacionContingenciasComunes + cotizacionFormacion + cotizacionDesempleo;

  if (ingresosIntegros < MINIMO_EXENTO_IRPF) {
    const anualNeto = ingresosIntegros - seguridadSocial;
    const mensualNeto = anualNeto / cantidadPagos;
    setResults(
      0,
      0,
      0,
      0,
      anualNeto,
      mensualNeto,
      cotizacionContingenciasComunes,
      cotizacionFormacion,
      cotizacionDesempleo,
      seguridadSocial
    );
    return;
  }

  const gravamenAutonomico = determineTaxRateForRegion(comunidadAutonoma);

  // Cálculos de las casillas de la declaración
  const casilla505 =
    ingresosIntegros -
    seguridadSocial -
    OTROS_GASTOS_CUANTIA_FIJA_CARACTER_GENERAL;
  const casilla528 = calculateTax(casilla505, GRAVAMEN_ESTATAL);
  const casilla529 = calculateTax(casilla505, gravamenAutonomico);
  const casilla530 = calculateTax(MINIMO_PERSONAL_FAMILIAR, GRAVAMEN_ESTATAL);
  const casilla531 = calculateTax(MINIMO_PERSONAL_FAMILIAR, gravamenAutonomico);
  const casilla532 = casilla528 - casilla530;
  const casilla533 = casilla529 - casilla531;

  const impuestoTotal = casilla532 + casilla533;

  const totalIrpfPorcentaje = (impuestoTotal * 100) / ingresosIntegros;
  const anualNeto = ingresosIntegros - impuestoTotal - seguridadSocial;
  const mensualNeto = anualNeto / cantidadPagos;

  setResults(
    casilla532,
    casilla533,
    impuestoTotal,
    totalIrpfPorcentaje,
    anualNeto,
    mensualNeto,
    cotizacionContingenciasComunes,
    cotizacionFormacion,
    cotizacionDesempleo,
    seguridadSocial
  );
}

function determineTaxRateForRegion(comunidadAutonoma) {
  const regionTaxMap = {
    cataluna: GRAVAMEN_AUTONOMICO_CATALUNA,
    andalucia: GRAVAMEN_AUTONOMICO_ANDALUCIA,
    aragon: GRAVAMEN_AUTONOMICO_ARAGON,
    asturias: GRAVAMEN_AUTONOMICO_ASTURIAS,
    "illes-baleares": GRAVAMEN_AUTONOMICO_ILLES_BALEARS,
    canarias: GRAVAMEN_AUTONOMICO_CANARIAS,
    cantabria: GRAVAMEN_AUTONOMICO_CANTABRIA,
    "castilla-la-mancha": GRAVAMEN_AUTONOMICO_CASTILLA_LA_MANCHA,
    "castilla-y-leon": GRAVAMEN_AUTONOMICO_CASTILLA_Y_LEON,
    extremadura: GRAVAMEN_AUTONOMICO_EXTREMADURA,
    galicia: GRAVAMEN_AUTONOMICO_GALICIA,
    madrid: GRAVAMEN_AUTONOMICO_MADRID,
    murcia: GRAVAMEN_AUTONOMICO_MURCIA,
    valencia: GRAVAMEN_AUTONOMICO_VALENCIA,
  };

  return regionTaxMap[comunidadAutonoma];
}

function setResults(
  gravamenEstatal,
  gravamenAutonomico,
  totalIrpf,
  totalIrpfPorcentaje,
  anualNeto,
  mensualNeto,
  cotizacionContingenciasComunes,
  cotizacionFormacion,
  cotizacionDesempleo,
  totalSeguridadSocial
) {
  elements.gravamenEstatal.innerText = formatNumber(gravamenEstatal);
  elements.gravamenAutonomico.innerText = formatNumber(gravamenAutonomico);
  elements.totalIrpf.innerText = formatNumber(totalIrpf);
  elements.totalIrpfPorcentaje.innerText = formatNumber(
    totalIrpfPorcentaje,
    "%"
  );
  elements.anualNeto.innerText = formatNumber(anualNeto);
  elements.mensualNeto.innerText = formatNumber(mensualNeto);
  elements.cotizacionContingenciasComunes.innerText = formatNumber(
    cotizacionContingenciasComunes
  );
  elements.cotizacionFormacion.innerText = formatNumber(cotizacionFormacion);
  elements.cotizacionDesempleo.innerText = formatNumber(cotizacionDesempleo);
  elements.totalSeguridadSocial.innerText = formatNumber(totalSeguridadSocial);
}

function formatNumber(value, suffix = "€") {
  const parts = value.toFixed(2).toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(",") + " " + suffix;
}

function calculateTax(base, tramos) {
  let totalTax = 0;
  let remainingBase = base;
  for (const [min, max, rate] of tramos) {
    if (remainingBase <= 0) break;

    const taxableIncome = Math.min(remainingBase, max - min);

    totalTax += taxableIncome * (rate / 100);
    remainingBase -= taxableIncome;
  }
  return totalTax;
}

init();
