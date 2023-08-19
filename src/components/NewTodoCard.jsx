"use client";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Edit, Trash } from "lucide-react";
import useSWR, { mutate } from "swr";
import AddtodoBtn from "@/components/AddTodoBtn";
import React from "react";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((r) => r.json());

const NewTodoCard = () => {
  const { data } = useSWR("/api/todo", fetcher);

  const deleteTodo = async (id) => {
    await fetch(`/api/todo?id=${id}`, {
      method: "DELETE",
    });
    mutate("/api/todo");
  };

  return (
    <div className="container items-center justify-center ">
      <div className="p-5 flex items-center justify-between ">
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-4xl">Task</h1>
          <p className="text-lg text-muted-foreground">
            Create and manage tasks
          </p>
        </div>
        <AddtodoBtn />
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
                  <Link href={`/Editodo/${todo.id}`}>
                    <Button variant="ghost">
                      <Edit size={16} />
                    </Button>
                  </Link>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" onClick={() => deleteTodo(todo.id)}>
                      <Trash size={16} color="red" />
                    </Button>
                  </div>
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
