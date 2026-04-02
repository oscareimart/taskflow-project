import React, { useState, useEffect } from "react";
import API from "../services/api";

const stylesBtn = {
  padding: "12px 16px",
  marginTop: "10px",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

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
      <button style={stylesBtn} onClick={createTask}>
        Agregar
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task._id}
            {editingID === task._id ? (
              <>
                <input onChange={(e) => setTitle(e.target.value)} />
                <button style={stylesBtn} onClick={() => updateTask(task._id)}>
                  Guardar
                </button>
              </>
            ) : (
              <>
                {task.title}
                <button
                  style={stylesBtn}
                  onClick={() => setEditingID(task._id)}
                >
                  Editar
                </button>
                <button style={stylesBtn} onClick={() => deleteTask(task._id)}>
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
