"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { mutate } from "swr";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

export default function AddtodoBtn() {
  const [todo, setTodo] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [open, setOpen] = useState(false);

  //!Create Todo
  const createTodo = async (e) => {
    e.preventDefault();

    await fetch("/api/todo", {
      method: "POST",
      body: JSON.stringify({
        title: todo,
        description: todoDescription,
      }),
    });
    setTodo("");
    setTodoDescription("");
    mutate("/api/todo");
    setOpen(false);
  };

  //!Close Modal
  const closeToDoModal = (e) => {
    e.preventDefault();
    setOpen(false);
    setTodo("");
    setTodoDescription("");
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="">New Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New ToDo</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid w-full gap-2">
              <form>
                <Textarea
                  placeholder="Todo Title"
                  value={todo}
                  onChange={(e) => setTodo(e.target.value)}
                />
                <Textarea
                  placeholder="Todo Description"
                  value={todoDescription}
                  onChange={(e) => setTodoDescription(e.target.value)}
                />
                <div className="flex justify-center py-2">
                  <DialogFooter>
                    <Button onClick={closeToDoModal}>Cancel</Button>
                    <Button type="submit" onClick={createTodo}>
                      Add Todo
                    </Button>
                  </DialogFooter>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
