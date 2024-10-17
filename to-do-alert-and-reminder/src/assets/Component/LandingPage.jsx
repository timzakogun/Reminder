import React from "react";

function Page() {
  return (
    <>
      <div>
        <h1>task list 2021</h1>
        <form action="" id="new-task-form">
          <input
            type="text"
            id="new-task-input"
            placeholder="what do you have planned"
          />
          <input type="submit" id="new-task-submit" value="Add task" />
        </form>
      </div>
      <div>
        <section class="task-list">
          <h2>Tasks</h2>
          <div id="tasks">
            <div class="content">
              <input type="text" class="text" value="My shiny task" readonly />
            </div>
            <div class="actions">
              <button class="edit">Edit</button>
              <button class="delete">delete</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Page;
