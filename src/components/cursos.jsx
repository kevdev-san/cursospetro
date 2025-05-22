const cursos = [
  { id: 1, titulo: "Introducción a la refineria", duracion: "4 semanas" },
  { id: 2, titulo: "Desarrollo de habilidades", duracion: "6 semanas" },
  { id: 3, titulo: "Curso de operador", duracion: "8 semanas" },
  { id: 1, titulo: "Introducción a la refineria", duracion: "4 semanas" },
  { id: 2, titulo: "Desarrollo de habilidades", duracion: "6 semanas" },
  { id: 3, titulo: "Curso de operador", duracion: "8 semanas" },
];

export default function Cursos() {
  return (
    <section className="w-full p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-left text-blue-900 border-l-4 border-blue-700 pl-4">
          Cursos Disponibles
        </h2>
        <ul className="space-y-6">
          {cursos.map((curso) => (
            <li
              key={curso.id}
              className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {curso.titulo}
              </h3>
              <p className="text-blue-600 font-medium">Duración: {curso.duracion}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
