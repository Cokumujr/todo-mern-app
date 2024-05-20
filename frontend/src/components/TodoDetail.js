import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TOKEN, BASE_URL } from "../services/configs";

const TodoDetail = () => {
  const [todoItem, setTodoItem] = useState({});
  const { id } = useParams();
  console.log({ id: id });

  useEffect(() => {
    const getTodoItemDetail = async () => {
      const response = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${TOKEN}`,
        },
      });
      const data = await response.json();
      setTodoItem(data);
    };
    getTodoItemDetail();
  }, [id]);

  console.log({ todo: todoItem });

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card" style={{ width: "32rem" }}>
            <div className="card-body">
              <h5 className="card-title">Title: {todoItem.title}</h5>
              <p className="card-text">Status: {todoItem.status}</p>
              <p className="card-text">Start Date: {todoItem.start_date}</p>
              <div className="text-center">
                <a href="" className="btn btn-primary">
                  <i className="bi bi-pencil-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default TodoDetail;
