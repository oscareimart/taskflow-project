import React, { useState, useEffect } from "react";
import API from "../services/api";
import "../App.css";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingID, setEditingID] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
    await API.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    loadTasks();
  };

  const updateTask = async (id) => {
    await API.put(`/tasks/${id}`, { title });
    setEditingID(null);
    loadTasks();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva Tarea"
      />
      <button className="btn" onClick={createTask}>
        Agregar
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task._id}
            {editingID === task._id ? (
              <>
                <input onChange={(e) => setTitle(e.target.value)} />
                <button className="btn" onClick={() => updateTask(task._id)}>
                  Guardar
                </button>
              </>
            ) : (
              <>
                {task.title}
                <button className="btn" onClick={() => setEditingID(task._id)}>
                  Editar
                </button>
                <button className="btn" onClick={() => deleteTask(task._id)}>
                  Eliminar
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
