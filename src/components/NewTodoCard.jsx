"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Edit, Trash } from "lucide-react";
import useSWR, { mutate } from "swr";
import AddTodoBtn from "@/components/AddTodoBtn";

const fetcher = (url) => fetch(url).then((r) => r.json());

import React from "react";

const NewTodoCard = () => {
  const { data, error } = useSWR("/api/todo", fetcher);

  const deleteTodo = async (id) => {
    await fetch(`/api/todo?id=${id}`, {
      method: "DELETE",
    });
    mutate("/api/todo");
  };

  return (
    <div className="container items-center justify-center ">
      <div className="p-5 flex items-center justify-center ">
        <AddTodoBtn />
      </div>

      <div className="grid grid-cols-1 gap-5 pb-4 md:grid-cols-2">
        {data?.todos.map((todo) => (
          <Card key={todo.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="leading-tight line-clamp-1">
                  {todo.title}
                </CardTitle>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" onClick={() => deleteTodo(todo.id)}>
                    <Trash size={16} color="red" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              <CardDescription className="line-clamp-3">
                {todo.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NewTodoCard;
