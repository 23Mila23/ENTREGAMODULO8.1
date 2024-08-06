type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1 A)
let pacientesPediatria: Pacientes[] = [];

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesPediatria.push(pacientes[i]);
    }
  }
  return pacientesPediatria;
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//APARTADO 1 B)

let pacientesPediatriaMenorDe10: Pacientes[] = [];

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad < 10) {
      pacientesPediatriaMenorDe10.push(pacientes[i]);
    }
  }
  return pacientesPediatriaMenorDe10;
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

//APARTADO 2 

let pacientesEnEmergencia: Pacientes[] = [];
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  for (let i = 0; i < pacientes.length; i++) {
    if (
      pacientes[i].frecuenciaCardiaca > 100 &&
      pacientes[i].temperatura > 39
    ) {
      pacientesEnEmergencia.push(pacientes[i]); //prueba para ver si estaba correcto y entraban los pacientes en emergencia cuando modifico la temp corporal.
      activarProctolo = true;
    }
  }

  return activarProctolo;
};

console.log(activarProtocoloUrgencia(pacientes), pacientesEnEmergencia);


//APARTADO 3

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientes[i].especialidad = "Medico de familia"
    }
  }
  return pacientes;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//APARTADO 4

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let HayPacientesDePediatria = false;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      HayPacientesDePediatria = true;
    }
  }
  return HayPacientesDePediatria;
};

console.log("¿Hay Pacientes De Pediatria?", HayPacientesDePediatria(pacientes));

//APARTADO 5

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroPacientesMedicoFamilia: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Medico de familia") {
      numeroPacientesMedicoFamilia.medicoDeFamilia += 1;
    }

    if (pacientes[i].especialidad === "Cardiólogo") {
      numeroPacientesMedicoFamilia.cardiologia += 1;
    }

    if (pacientes[i].especialidad === "Pediatra") {
      numeroPacientesMedicoFamilia.pediatria += 1;
    }
  }
  return numeroPacientesMedicoFamilia;
};

console.log(cuentaPacientesPorEspecialidad(pacientes));

